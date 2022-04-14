//External imports
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
//Internal imports
import { AddProductComponent } from './../add-product/add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  providers: [DialogService, MessageService]
})

export class ProductComponent implements OnInit {
  ref: DynamicDialogRef | any;

  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  public addProductStepOne(productName: string) {
    this.ref = this.dialogService.open(AddProductComponent, {
      header:'Add Product to ' + productName,
      width: '41.25rem',
      height:'auto',
      baseZIndex: 10000,
      dismissableMask: true
    });

    this.ref.onClose.subscribe((product: any) => {
      if (product) {
        //dialog data receive here
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
