import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPreviaGfiComponent } from './tab-previa-gfi.component';

describe('TabPreviaGfiComponent', () => {
  let component: TabPreviaGfiComponent;
  let fixture: ComponentFixture<TabPreviaGfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPreviaGfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPreviaGfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
