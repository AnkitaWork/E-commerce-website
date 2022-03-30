//External imports
import { Component, OnInit, Injector } from '@angular/core';
import { DialogService } from './../../shared/services/dialog.service';
//Internal imports
import { ProductAddStep1Component } from './../add-product/product-add-step1/product-add-step1.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  constructor(private _injector: Injector) { }

  /**
     * This is used to open custom dialog step one
     */
  public addProductStepOne(productName:string){
    let dialogService = this._injector.get(DialogService);
    let dialog = dialogService.custom(ProductAddStep1Component, {data:productName});
    dialog.result.then((res) => {
      console.log('res',res);
    });
  }

  ngOnInit(): void {
  }

}
