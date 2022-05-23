import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraBrasilComponent } from './carteira-brasil.component';

describe('CarteiraBrasilComponent', () => {
  let component: CarteiraBrasilComponent;
  let fixture: ComponentFixture<CarteiraBrasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraBrasilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
