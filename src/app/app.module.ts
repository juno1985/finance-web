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
import { HomeInputComponent } from './home-input/home-input.component';
import { BootstrapModalModule } from 'ngx-bootstrap-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxEchartsModule  } from 'ngx-echarts';
import { PiechartService } from './shared/piechart.service';
import { ProOutputComponent } from './pro-output/pro-output.component';
import { ProReorganizeComponent } from './pro-reorganize/pro-reorganize.component';
import { ProTableComponent } from './pro-table/pro-table.component';
const routeConfig: Routes =[
   {path:'', component:HomeComponent},
   {path:'stat',component:ProTableComponent},
   {path:'input',component:HomeInputComponent,children:[
     {path:'propinput',component:ProInputComponent},
     {path:'propoutput',component:ProOutputComponent},
     {path:'propreorg',component:ProReorganizeComponent}
   ]}
 ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    ProInputComponent,
    HomeInputComponent,
    ProOutputComponent,
    ProReorganizeComponent,
    ProTableComponent,
    
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    BootstrapModalModule,
    NgxEchartsModule ,
    ModalModule.forRoot()
  ],
  //要注入的service必须在这里声明
  providers: [ItemService,PiechartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
