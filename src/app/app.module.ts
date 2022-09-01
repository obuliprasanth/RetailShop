import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { HeaderComponent } from './header/header.component';
import { ApiserviceService } from './helper/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
// import { BrowserAi}


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductComponent,
    OrderProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
   
  ],
  providers: [
    ApiserviceService,
    { provide: "environment", useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
