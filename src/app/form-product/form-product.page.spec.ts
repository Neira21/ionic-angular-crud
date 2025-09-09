import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormProductPage } from './form-product.page';

describe('FormProductPage', () => {
  let component: FormProductPage;
  let fixture: ComponentFixture<FormProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
