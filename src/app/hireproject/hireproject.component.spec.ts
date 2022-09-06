import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireprojectComponent } from './hireproject.component';

describe('HireprojectComponent', () => {
  let component: HireprojectComponent;
  let fixture: ComponentFixture<HireprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
