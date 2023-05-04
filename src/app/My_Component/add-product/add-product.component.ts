import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../Modules/iproduct';
import { ICategory } from '../../Modules/icategory';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { CategoriesApiService } from 'src/app/services/categories-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnChanges {

  product:IProduct = {} as IProduct;
  productsList:IProduct[] = [];
  categoryList:ICategory[] = [];
  //genres:any;
  
  constructor(private productApiService:ProductsApiService,private categoryApiService:CategoriesApiService,private router:Router){
    // 
    this.productApiService.getAllProducts().subscribe(data=>{this.productsList=data;});
    // 
    this.categoryApiService.getAllCategories().subscribe(data=>{this.categoryList=data;})
    console.log(this.categoryList);
    
    this.product.Count = 0;
    this.product.IsDeleted = false;
    this.product.Photos = [];
    
  }
  ngOnChanges(): void {
    this.categoryApiService.getAllCategories().subscribe(data=>{this.categoryList=data;})
  }

  AddProduct(){

    console.log(this.product.Discription_ar);
    
    this.productApiService.addNewProduct(this.product).subscribe({
      next:(newPrd)=>{
        console.log(newPrd);
        this.router.navigate(['/Games']);
      },
      error:(err)=>{
        console.log(err);
      }
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


