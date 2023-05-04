import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss']
})
export class UserLogoutComponent implements OnInit{
  auth:boolean=false;
  constructor(private router:Router ,private userService:UserAuthService){}
    ngOnInit(): void {
      this.auth=this.userService.UserState;
    }
    userLogin(){
      this.userService.login('admin@gmail.com','password12');
      this.auth=this.userService.UserState;//true
    }
    userLogout(){
      this.userService.logout();
      this.auth=this.userService.UserState;//false
    }


    goLogin(){
      this.router.navigate(['Login']);
    }
}
