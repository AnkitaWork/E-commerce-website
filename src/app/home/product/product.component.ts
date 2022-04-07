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
    this.productName = productName;
    this.isOpenDialog = true;
  }

  ngOnInit(): void {
  }
}
