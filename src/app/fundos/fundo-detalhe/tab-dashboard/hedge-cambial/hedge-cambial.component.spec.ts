import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedgeCambialComponent } from './hedge-cambial.component';

describe('HedgeCambialComponent', () => {
  let component: HedgeCambialComponent;
  let fixture: ComponentFixture<HedgeCambialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HedgeCambialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HedgeCambialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
