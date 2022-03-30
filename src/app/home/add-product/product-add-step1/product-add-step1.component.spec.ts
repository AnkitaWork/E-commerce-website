import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddStep1Component } from './product-add-step1.component';

describe('ProductAddStep1Component', () => {
  let component: ProductAddStep1Component;
  let fixture: ComponentFixture<ProductAddStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddStep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
