import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from '../app/My_Component/home/home.component';
import { MainLayoutComponent } from '../app/My_Component/main-layout/main-layout.component';
import { NotFoundComponent } from '../app/My_Component/not-found/not-found.component';
import { ProductDetailsComponent } from '../app/My_Component/product-details/product-details.component';
import { UsersDetailsComponent } from './My_Component/users-details/users-details.component';
import { AboutUsComponent } from '../app/My_Component/about-us/about-us.component';
import { ContactUsComponent } from '../app/My_Component/contact-us/contact-us.component';
import { GamesComponent } from './My_Component/games/games.component';
import { UsersComponent } from '../app/My_Component/users/users.component';
import { AddProductComponent } from './My_Component/add-product/add-product.component';
// import { UserRegisterComponent } from './My_Component/user-register/user-register.component';
import { UserLoginComponent } from './My_Component/user-login/user-login.component';
import { UserGuardsGuard } from './Guards/user-guards.guard';
import { UserLogoutComponent } from './My_Component/user-logout/user-logout.component';
import { EditProductComponent } from './My_Component/edit-product/edit-product.component';

// http://localhost:4200/ this is our url
const routes: Routes = [
  // First match wins
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},  // Default path
    {path:'Home',component:HomeComponent,title:'Dashboard'},
    {path:'Contact',component:ContactUsComponent,title:'Contact Us'},
    {path:'About',component:AboutUsComponent,title:'About Us'},
    {path:'Home/Games',component:GamesComponent,title:'Games', canActivate:[UserGuardsGuard]},
    {path:'Games/Products/:pid',component:ProductDetailsComponent,title:'Game details', canActivate:[UserGuardsGuard]}, // id
    {path:'Games/Edit/:pid',component:EditProductComponent,title:'Edit Game', canActivate:[UserGuardsGuard]}, // id
    // Users/Products/1 
    {path:'Products/:pid',component:ProductDetailsComponent,title:'Game details', canActivate:[UserGuardsGuard]},
    {path:'Edit/:pid',component:EditProductComponent,title:'Edit Game', canActivate:[UserGuardsGuard]},
    {path:'Users/UsersDetails/:uid',component:UsersDetailsComponent,title:'User details', canActivate:[UserGuardsGuard]}, // id
    {path:'Home/Games/Products/:pid',component:ProductDetailsComponent,title:'Game details', canActivate:[UserGuardsGuard]}, // id
    {path:'Games',component:GamesComponent,title:'Games', canActivate:[UserGuardsGuard]},
    {path:'Users',component:UsersComponent,title:'Users', canActivate:[UserGuardsGuard]},
    {path:'ADD',component:AddProductComponent,title:'ADD Game', canActivate:[UserGuardsGuard]},

    // lazyloading only load specific components (UserProfile, EditProfile) when activate this path "UserModule"
    {
      path: 'UserModule',  
      loadChildren: () => import('src/app/My_Component/userModule/user.module').then(m => m.UserModule)
    }
  ]},
  {path:'Login',component:UserLoginComponent,title:'Login'},
  {path:'Logout',component:UserLogoutComponent,title:'Logout'},
  {path:'Logout/Login',component:UserLoginComponent,title:'Login'},

  // {path:'Register',component:UserRegisterComponent,title:'Register'},
  {path:'**',component:NotFoundComponent,title:'Not Found'} // not found path //wildcard path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
