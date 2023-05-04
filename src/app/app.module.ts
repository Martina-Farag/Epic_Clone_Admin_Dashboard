import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './My_Component/header/header.component';
// import { NavComponent } from './My_Component/nav/nav.component';
import { IndexComponent } from './My_Component/index/index.component';
import { FooterComponent } from './My_Component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './My_Component/not-found/not-found.component';
import { MainLayoutComponent } from './My_Component/main-layout/main-layout.component';
import { ProductDetailsComponent } from './My_Component/product-details/product-details.component';
import { HomeComponent } from './My_Component/home/home.component';
import { ContactUsComponent } from './My_Component/contact-us/contact-us.component';
import { AboutUsComponent } from './My_Component/about-us/about-us.component';
import { GamesComponent } from './My_Component/games/games.component';
import { AddProductComponent } from './My_Component/add-product/add-product.component';
import { ShadowBoxDirective } from './Directives/shadow-box.directive';
import { HttpClientModule } from '@angular/common/http';
// import { UserRegisterComponent } from './My_Component/user-register/user-register.component';
import { UserLoginComponent } from './My_Component/user-login/user-login.component';
import { UserLogoutComponent } from './My_Component/user-logout/user-logout.component';
import { UsersComponent } from './My_Component/users/users.component';
import { UsersDetailsComponent } from './My_Component/users-details/users-details.component';
import { MyCurrencyPipe } from './Pipes/my-currency.pipe';
import { DashboardComponent } from './My_Component/dashboard/dashboard.component';
// import { ChartsModule } from 'ng2-charts';
// import { NgChartsModule } from 'ng2-charts';
// import { Chart } from 'chart.js';
import { CeilPipe } from './Pipes/ceil.pipe';
import { EditProductComponent } from './My_Component/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    HomeComponent,
    DashboardComponent,
    // LineChartComponent,
    ContactUsComponent,
    AboutUsComponent,
    GamesComponent,
    AddProductComponent,
    ShadowBoxDirective,
    UserLoginComponent,
    UserLogoutComponent,
    UsersComponent,
    UsersDetailsComponent,
    MyCurrencyPipe,
    CeilPipe,
    EditProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ChartsModule,
    // NgChartsModule,
    // Chart,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
