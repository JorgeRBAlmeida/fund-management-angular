import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoDetalheComponent } from './fundo-detalhe.component';

describe('FundoDetalheComponent', () => {
  let component: FundoDetalheComponent;
  let fixture: ComponentFixture<FundoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
