import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { CalendarComponent } from './examples/calendar/calendar.component';
import { AdminComponent } from './examples/admin/admin.component';
import { LoginComponent } from './examples/login/login.component';
import { AuthGuard } from './auth-guard';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: LandingComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'login',           component: LoginComponent },
    { 
      path: 'admin', 
      component: AdminComponent,
      // canActivate:[AuthGuard],
      children: [
        { path: '', redirectTo: 'inicio', pathMatch: 'full'},
        { path: 'inicio', component: CalendarComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
