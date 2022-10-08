import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ThoititeComponent} from "./thoitiet/thoitite.component";
import * as path from "path";
import {HttpClientModule} from "@angular/common/http";
import {ThucdonComponent} from "./thucdon/thucdon.component";
import {DubaoComponent} from "./dubaothoitiet/dubao.component";
import {ThoitrangComponent} from "./thoitrang/thoitrang.component";
import {BaithiComponent} from "./baithi/baithi.component";
import {HomeComponent} from "./doanki1/home.component";

import {SonfptComponent} from "./sonfpt/home1.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {BlogComponent} from "./blog/blog.component";
import {CartComponent} from "./card/cart.component";
import {MenuproductComponent} from "./sanpham/product.component";

import {ChitietComponent} from "./chitiet1/chitiet.component";
import {Blog1Component} from "./blogg/blog1.component";
import {Doanki1Component} from "./doanki1new/doanki1.component";
import {MenuComponent} from "./menu_sanpham/menu.component";

import {DangnhapComponent} from "./menu1/dangnhap.component";
import {Dangky2Component} from "./demosp/dangky2.component";
import {ThanhtoanComponent} from "./demo/pay.component";

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home1',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'cart',component:CartComponent},
  {path:'sanpham/:id',component:MenuproductComponent},
  {path:'chitiet/:id',component:ChitietComponent},
  {path:'blog1',component:Blog1Component},
  {path:'menu/:id',component:MenuComponent},
  {path:'menu',component:MenuComponent},
  {path:'dangnhap',component:DangnhapComponent},
  {path:'dangki',component:Dangky2Component},
  {path:'thanhtoan',component:ThanhtoanComponent},

];
@NgModule({
  declarations: [
    AppComponent, ClassroomComponent,StudentComponent,TeacherComponent,LoginComponent,RegisterComponent,
    ThoititeComponent,ThucdonComponent,DubaoComponent,ThoitrangComponent,BaithiComponent,HomeComponent,SonfptComponent,AboutComponent,ContactComponent,
    BlogComponent,CartComponent,MenuproductComponent,ChitietComponent,Blog1Component,Doanki1Component,MenuComponent,Dangky2Component,DangnhapComponent,ThanhtoanComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    HttpClientModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
