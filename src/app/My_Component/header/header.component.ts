import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
// import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userLogged:boolean;
  constructor(private userService:UserAuthService){
    this.userLogged=this.userService.UserState;
  }
  ngOnInit(): void {
    // this.user=this.userService.UserState;
    // console.log(this.user);
    this.userService.getUserStatus().subscribe(status=>{    // we made Observable in UserAuthService called getUserStatus to do subscribe on it to make code keep wathching the changes when we log in or out.
      this.userLogged=status;    // status : true OR false
      console.log(this.userLogged);

    })

  }
}
