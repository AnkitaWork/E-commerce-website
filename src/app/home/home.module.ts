//External imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Internal imports
import { HomeRoutingModule } from './home-routing.module';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
