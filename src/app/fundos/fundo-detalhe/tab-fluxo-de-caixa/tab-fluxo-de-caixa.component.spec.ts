import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFluxoDeCaixaComponent } from './tab-fluxo-de-caixa.component';

describe('TabFluxoDeCaixaComponent', () => {
  let component: TabFluxoDeCaixaComponent;
  let fixture: ComponentFixture<TabFluxoDeCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFluxoDeCaixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFluxoDeCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
