import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderTemplateComponent } from './cart-order-template.component';

describe('CartOrderTemplateComponent', () => {
  let component: CartOrderTemplateComponent;
  let fixture: ComponentFixture<CartOrderTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrderTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
