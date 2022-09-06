import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireuiuxComponent } from './hireuiux.component';

describe('HireuiuxComponent', () => {
  let component: HireuiuxComponent;
  let fixture: ComponentFixture<HireuiuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireuiuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireuiuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
