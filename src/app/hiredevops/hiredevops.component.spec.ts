import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredevopsComponent } from './hiredevops.component';

describe('HiredevopsComponent', () => {
  let component: HiredevopsComponent;
  let fixture: ComponentFixture<HiredevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredevopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
