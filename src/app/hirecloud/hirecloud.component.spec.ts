import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirecloudComponent } from './hirecloud.component';

describe('HirecloudComponent', () => {
  let component: HirecloudComponent;
  let fixture: ComponentFixture<HirecloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirecloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirecloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
