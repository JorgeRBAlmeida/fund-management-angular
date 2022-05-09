import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoNaoEncontradoComponent } from './fundo-nao-encontrado.component';

describe('FundoNaoEncontradoComponent', () => {
  let component: FundoNaoEncontradoComponent;
  let fixture: ComponentFixture<FundoNaoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoNaoEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
