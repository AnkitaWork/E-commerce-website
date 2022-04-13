//External imports
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  providers: [MessageService]
})

export class ProductComponent implements OnInit {
  public productName : string = '';
  public isOpenDialog = false;

  constructor(public messageService: MessageService) { }

  public addProductStepOne(productName: string) {
    this.ref = this.dialogService.open(AddProductComponent, {
      header:'Add Product to ' +productName,
      width: '41.25rem',
      height:'41.875rem',
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
}
