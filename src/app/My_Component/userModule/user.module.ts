import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardsGuard } from 'src/app/Guards/user-guards.guard';


const routes: Routes = [
  {path:'UserProfile',component:UserProfileComponent,title:'User Profile page', canActivate:[UserGuardsGuard]},
  {path:'EditProfile',component:EditUserProfileComponent,title:'Edit Profile page', canActivate:[UserGuardsGuard]},

];
@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
