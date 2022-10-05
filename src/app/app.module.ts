import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'thoitiet',component:ThoititeComponent}
];
@NgModule({
  declarations: [
    AppComponent, ClassroomComponent,StudentComponent,TeacherComponent,LoginComponent,RegisterComponent,
    ThoititeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
