import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../Modules/iuser';
import { UserApiService } from 'src/app/services/user-api.service';
import { ProductsApiService } from './../../services/products-api.service';
import { IProduct } from 'src/app/Modules/iproduct';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  user:IUser = {} as IUser;
  foundUser:IUser = {} as IUser;
  userList: IUser[] = [];
  productsList: IProduct[] = [];
  userIDList:any[]=[];
  currentUserID:any;
  currentIndex:number=0;
  userTransactions:number=0;

  constructor(private activatedRoute:ActivatedRoute, private userApiService:UserApiService, private prdApiService:ProductsApiService, private location:Location, private router:Router) {}
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(paramMap=>{    // subscribe to keep watching the url changes
      this.currentUserID=paramMap.get('uid')?paramMap.get('uid'):0;

      this.userApiService.getUserByID(this.currentUserID).subscribe(
        {
            next:(data)=>{
              this.foundUser=data;
            },
            complete:()=>{
              console.log(this.foundUser);

              if(this.foundUser){
                this.user=this.foundUser;
                console.log(this.user);
              }
              else{
                alert("User not found");
                this.location.back();
              }
              for(let i=0; i<this.user.purchaseHistory.length; i++){
                
                var ID = this.user.purchaseHistory[i];
                // console.log(ID);
                this.prdApiService.getAllProducts().subscribe(
                  {
                    next: (data) => {
                      this.productsList=data;
                    }, complete: () => {
                      var game = this.productsList.find(p => p._id == ID)
                      if(game && game.Price != 'free'){
                        this.userTransactions += +game.Price; }
                    },error(err) {
                      console.log(err);
                    },

                  })
              }
            },
            error:(err)=>{
              console.log(err);
              
            }
          }
      );

      this.userApiService.getAllUsers().subscribe(
        {
           next:(data)=>{
             this.userList=data;
           },
           complete:()=>{
            this.userIDList = this.userList.map(user=> user._id);
           },
           error:(err)=>{
             console.log(err);
           }
         }
      );

    });
  }

  back(){
    this.userTransactions=0;
    // this.location.back();
    this.router.navigate(['/Users']);
  }

  Previous(){
    this.userTransactions=0;
    this.currentIndex= this.userIDList.findIndex((item)=>item==this.currentUserID);
    this.router.navigate(['Users/UsersDetails',this.userIDList[--this.currentIndex]])
  }

  Next(){
    this.userTransactions=0;
    this.currentIndex= this.userIDList.findIndex((item)=>item==this.currentUserID);
    this.router.navigate(['Users/UsersDetails',this.userIDList[++this.currentIndex]])
  }
}
