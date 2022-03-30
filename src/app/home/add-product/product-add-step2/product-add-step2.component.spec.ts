import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddStep2Component } from './product-add-step2.component';

describe('ProductAddStep2Component', () => {
  let component: ProductAddStep2Component;
  let fixture: ComponentFixture<ProductAddStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
