import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentabilidadeComponent } from './rentabilidade.component';

describe('RentabilidadeComponent', () => {
  let component: RentabilidadeComponent;
  let fixture: ComponentFixture<RentabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentabilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
