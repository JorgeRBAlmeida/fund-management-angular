import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonioLiquidoComponent } from './patrimonio-liquido.component';

describe('PatrimonioLiquidoComponent', () => {
  let component: PatrimonioLiquidoComponent;
  let fixture: ComponentFixture<PatrimonioLiquidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrimonioLiquidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrimonioLiquidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
