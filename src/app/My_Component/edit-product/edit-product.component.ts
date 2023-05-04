import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Modules/icategory';
import { IProduct } from 'src/app/Modules/iproduct';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  product:IProduct = {} as IProduct;
  // productsList:IProduct[] = [];
  categoryList:ICategory[] = [];
  //genres:any;

  prd:IProduct = {} as IProduct;
  foundPrd:IProduct = {} as IProduct;
  // productList:IProduct[]=[];
  prdIDList:any[]=[];
  currentProductID:any;
  currentIndex:number=0;
  showMore:boolean = false;

  Cat?:ICategory = {} as ICategory;
  
  constructor(private activatedRoute:ActivatedRoute, private location:Location, private prdApiService:ProductsApiService, private categoryApiService:CategoriesApiService, private router:Router){
    // 
    // this.prdApiService.getAllProducts().subscribe(data=>{this.productsList=data;});
    // 
    this.categoryApiService.getAllCategories().subscribe(data=>{this.categoryList=data;})
    console.log(this.categoryList);

    // this.product.id = this.productsList.length+1;
    // this.product.IsPurshased = false;
    this.product.Count = 0;
    this.product.IsDeleted = false;
    this.product.Photos = [];
    
  }

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

              this.categoryApiService.getAllCategories().subscribe(
                // data=>{this.categoryList=data;
                  {next:(data)=>{
                    this.categoryList=data
                  },
                    complete:()=>{
                      this.Cat = this.categoryList.find((cat) => cat._id == this.prd.Genres);
                      // if (this.categoryList) {
                      //   var x = this.categoryList.find((cat) => cat._id == this.prd.Genres);
                      //   if(x) this.Cat = x;
                      //   console.log(x);
                        
                      // }
                      console.log(this.Cat, this.prd.Genres);
                      
                    },
                    error:(err)=>{ }
                  }
                )


              
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
      })

  }
  ngOnChanges(): void {
    
    this.categoryApiService.getAllCategories().subscribe(data=>{this.categoryList=data;})
  }

  handleChange(e:string){}

  EditProduct(){

    console.log(this.product);
    
    // this.prdApiService.addNewProduct(this.product).subscribe({
    //   next:(newPrd)=>{
    //     console.log(newPrd);
    //     this.router.navigate(['/Games']);
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   }
    // });
//////////////////////////////
    this.prdApiService.editProduct(this.prd._id, this.product).subscribe({
      next:(newPrd)=>{
        console.log(newPrd);
        
      }, complete:()=>{
        this.router.navigate(['/Games']);
      }, error:(err)=>{

        console.log(err);
      }
      // complete:()=>{}
    });
  }

  cancelBtn(){
    console.log("bye");
    
    this.router.navigate(['/Games']);
    
  }

  AddPhoto(){
    // this.mobileNo.push(this.formBuilder.control(''))
  }

  RemovePhoto(i:number){

    // this.mobileNo.removeAt(i);
    // this.router.navigate(['/Register']);

  }

  selectGenres(gen:any){
    console.log(gen);
    
  }

}
