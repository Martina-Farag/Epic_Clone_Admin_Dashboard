import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/services/products-api.service';
// import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Modules/iproduct';
import { UserApiService } from 'src/app/services/user-api.service';
import { IUser } from '../../Modules/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  usersList:IUser[] = [];
  receivedCartList:IProduct[]=[];
  // prd:IProduct|undefined =undefined;
  orderTotalPrice:number = 0;
  ClientName: string = "Martina";
  date1:Date = new Date();
  date2:Date = new Date('1999-09-01T00:00:00.000Z');    // 1999/09/01
  IDNumber:number = 0;

  @Input() receivedCatID:number = 0;
  prdListOfCat:IProduct[]=[];

  constructor(private userApiService:UserApiService, private router:Router){
    // Day 4
    // this.usersList = this.prdService.getAllProducts();
    // Day 6
    // this.prdApiService.getAllProducts().subscribe(data=>{this.usersList=data;}) // node.js
    this.userApiService.getAllUsers().subscribe(data=>{this.usersList=data;})
  }

  ngOnChanges(): void {
    // Day 4
    // this.usersList = this.prdService.getAllProducts();

    // Day 6  >  look products component (wil not work here because we dont have the order-parent component with its selected options)
    // if(this.receivedCatID==0){
    //   this.prdApiService.getAllProducts().subscribe(data=>{
    //     this.prdListOfCat=data;
    //   })
    // }
    // else{
    //   this.prdApiService.getProductsByCategoryId(this.receivedCatID).subscribe(data=>{
    //     // this.prdListOfCat=data;
    //   this.prdListOfCat= data.filter((prd)=>prd.CategoryID==this.receivedCatID)
    //   })
    // }
  }
  
  ngOnInit(): void {
    // this.IsSold();
  }

  // IsSold(index:number,price:number,item:any){
  //   this.usersList[index].Count += parseInt (item);

  //   this.usersList[index].IsPurshased = !this.usersList[index].IsPurshased;
  //   this.usersList[index].Quantity -= this.usersList[index].Count; 

  //   this.orderTotalPrice += price * +item;      
    
  //   let SoldProduct= {
  //     id: this.usersList[index].id,
  //     Name: this.usersList[index].Name,
  //     Quantity: this.usersList[index].Quantity,
  //     Price: this.usersList[index].Price,
  //     Img: this.usersList[index].Img,
  //     CategoryID: this.usersList[index].CategoryID,
  //     IsPurshased: this.usersList[index].IsPurshased,
  //     Count: this.usersList[index].Count,
  //     IsDeleted: false
  //   }
  //   this.receivedCartList.push(SoldProduct);
  // }

  deleteCart(i:number){
    this.receivedCartList[i].IsDeleted = !this.receivedCartList[i].IsDeleted
    let curr = this.receivedCartList.filter(item => +item._id != i)
    this.receivedCartList = curr;
    console.log(this.receivedCartList);
  }

  DeleteUser(i:number,user:IUser){
    
    // this.usersList[i].IsDeleted = !this.usersList[i].IsDeleted;
    // let curr = this.usersList.filter(item => item.id != i);
    // this.usersList = curr;
    // console.log(i);

    this.userApiService.deleteUser(user).subscribe({
      next:(newUser)=>{
        console.log(newUser, "deleted successfully");
        location.reload();
        // this.router.navigate(['/Shoping']);
      },
      error:(err)=>{
        console.log(err);
      }
    });
    // this.router.navigate(['/Shoping']);
    // location.reload();
  }


  // Day 8
  trackPrdFunc(index:number, item:IUser){  // handles the changes we make only on the product that running now in the for loog (ngFor)
    return item._id;
  }
}
