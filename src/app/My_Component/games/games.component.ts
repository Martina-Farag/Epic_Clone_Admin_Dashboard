import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/services/products-api.service';
// import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Modules/iproduct';
import { ICategory } from 'src/app/Modules/icategory';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
// import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit,OnChanges{

  productsList:IProduct[] = [];
  receivedCartList:IProduct[]=[];
  prdListOfCat:IProduct[]=[];
  IDNumber:number = 0;
  categoryList:ICategory[]=[];
  selectedCatID:number = 0;
  GameName:string='';
  not_Found:boolean=false;


  constructor( private prdApiService:ProductsApiService, private router:Router, private categoriesApiService:CategoriesApiService){
    
    this.prdApiService.getAllProducts().subscribe(
      // data=>{this.productsList=data;}
      {
        next:(data)=>{
          this.productsList=data
        },
        complete:()=>{
          console.log(this.productsList);
        },
        error:(err)=>{
          console.log(err);
          
        }
      }
    ) 

    this.categoriesApiService.getAllCategories().subscribe(data=>{this.categoryList=data;})
  }

  ngOnChanges(): void {
    console.log(this.productsList);

    if(this.selectedCatID!=0){
      this.prdApiService.getProductsByCategoryId(this.selectedCatID).subscribe(
      {next :(data)=>{
        this.productsList=data;
        // this.prdListOfCat= data.filter((prd)=>prd.cat==this.selectedCatID)

      },complete:()=>{
        console.log(this.productsList, "OnChange works");
      },error:()=>{}
    })
    }else {
      this.prdApiService.getAllProducts().subscribe(data=>{this.productsList=data;});
    }
  }
  
  ngOnInit(): void {
    console.log(this.productsList); 

    if(this.selectedCatID!=0){
      this.prdApiService.getProductsByCategoryId(this.selectedCatID).subscribe(data=>{
        this.productsList=data;
      })
    }else {
      this.prdApiService.getAllProducts().subscribe(data=>{this.productsList=data;});
    }
  }

  selectCat(){
    console.log(this.selectedCatID , " Selected Category ID");

    if(this.selectedCatID!=0){
      this.prdApiService.getProductsByCategoryId(this.selectedCatID).subscribe(
      {next :(data)=>{
        this.productsList=data;
      },complete:()=>{
        console.log(this.productsList, "OnChange works ^^");
        
      },error:()=>{}
      })
    }
    else {
      this.prdApiService.getAllProducts().subscribe(data=>{this.productsList=data;});
    }
  }

  search(){
    for(let i=0; i<this.productsList.length; i++){
      if(this.productsList[i].gameName==this.GameName){
        
        this.router.navigate([`/Products/${ this.productsList[i]._id }`])
      }
      else {this.not_Found=true}
    }
  }

  deleteCart(i:number){
    this.receivedCartList[i].IsDeleted = !this.receivedCartList[i].IsDeleted
    let curr = this.receivedCartList.filter(item => +item._id != i)
    this.receivedCartList = curr;
    console.log(this.receivedCartList);
  }

  DeleteProduct(i:number,product:IProduct){
    
    // this.productsList[i].IsDeleted = !this.productsList[i].IsDeleted;
    // let curr = this.productsList.filter(item => item.id != i);
    // this.productsList = curr;
    // console.log(i);

    this.prdApiService.deleteProduct(product).subscribe({
      next:(newPrd)=>{
        console.log(newPrd);
        location.reload();
        // this.router.navigate(['/Shoping']);
      },
      error:(err)=>{
        console.log(err);
      }
    });
    // this.router.navigate(['/Shoping']);
    // location.reload();

    alert("Game Deleted Successfully")
  }

  EditProduct(i:number,product:IProduct){
    this.prdApiService.deleteProduct(product).subscribe({
      next:(newPrd)=>{
        console.log(newPrd);
        this.router.navigate(['/ADD']);
      },
      error:(err)=>{
        console.log(err);
      }
      // complete:()=>{}
    });
    // this.router.navigate(['/ADD']);
  }

  trackPrdFunc(index:number, item:IProduct){  // handles the changes we make only on the product that running now in the for loop (ngFor)
    return item._id;
  }
}
