import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Modules/iproduct';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prd:IProduct = {} as IProduct;
  foundPrd:IProduct = {} as IProduct;
  productList:IProduct[]=[];
  prdIDList:any[]=[];
  currentProductID:any;
  currentIndex:number=0;
  showMore:boolean = false;

  constructor(private activatedRoute:ActivatedRoute,private prdApiService:ProductsApiService, private location:Location, private router:Router) {}
  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(paramMap=>{    // subscribe to keep watching the url changes
       this.currentProductID=paramMap.get('pid')?paramMap.get('pid'):0;

       this.prdApiService.getProductByID(this.currentProductID).subscribe(
       {
          next:(data)=>{
            this.foundPrd=data;
          },
          complete:()=>{
            if(this.foundPrd){
              this.prd=this.foundPrd;
              console.log(this.prd);
            }
            else{
              alert("Product not found");
              this.location.back();
            }
          },
          error:(err)=>{
            console.log(err);
          }
        }
        )

        this.prdApiService.getAllProducts().subscribe(
          {
             next:(data)=>{
               this.productList=data;
             },
             complete:()=>{
              this.prdIDList = this.productList.map(prd=> prd._id);
             },
             error:(err)=>{
               console.log(err);
             }
           }
        )
    });
  }

  back(){
    this.showMore = false;
    // this.location.back();
    this.router.navigate(['/Games']);
  }

  Previous(){
    this.showMore = false;
    this.currentIndex= this.prdIDList.findIndex((item)=>item==this.currentProductID);
    this.router.navigate(['Games/Products',this.prdIDList[--this.currentIndex]])
  }

  Next(){
    this.showMore = false;
    this.currentIndex= this.prdIDList.findIndex((item)=>item==this.currentProductID);
    this.router.navigate(['Games/Products',this.prdIDList[++this.currentIndex]])
  }
}