import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProInputComponent } from './pro-input/pro-input.component';
import { ItemService } from './shared/item.service';
import {Http,HttpModule} from '@angular/http';
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
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  //要注入的service必须在这里声明
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
