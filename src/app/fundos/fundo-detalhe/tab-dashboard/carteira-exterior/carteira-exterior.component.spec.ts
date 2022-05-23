import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraExteriorComponent } from './carteira-exterior.component';

describe('CarteiraExteriorComponent', () => {
  let component: CarteiraExteriorComponent;
  let fixture: ComponentFixture<CarteiraExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraExteriorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
