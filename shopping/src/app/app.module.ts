import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import   {OrdersModule} from './orders/orders.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import  {SiteFrameworkModule} from './site-framework/site-framework.module'
import{HttpClientModule} from '@angular/common/http'
import { ProductsService } from './products/products.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFrameworkModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
  

})
export class AppModule { }
