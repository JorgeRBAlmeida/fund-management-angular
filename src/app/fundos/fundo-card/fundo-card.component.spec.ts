import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoCardComponent } from './fundo-card.component';

describe('FundoCardComponent', () => {
  let component: FundoCardComponent;
  let fixture: ComponentFixture<FundoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
