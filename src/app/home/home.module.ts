//External imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Internal imports
import { HomeRoutingModule } from './home-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductAddStep1Component } from './add-product/product-add-step1/product-add-step1.component';
import { ProductAddStep2Component } from './add-product/product-add-step2/product-add-step2.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductAddStep1Component,
    ProductAddStep2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
