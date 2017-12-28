import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProInputComponent } from './pro-input/pro-input.component';
const routeConfig: Routes =[
   {path:'', component:HomeComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    ProInputComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
