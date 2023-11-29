import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceDetailsComponent } from './product-price-details.component';

describe('ProductPriceDetailsComponent', () => {
  let component: ProductPriceDetailsComponent;
  let fixture: ComponentFixture<ProductPriceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPriceDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
