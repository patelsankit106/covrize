import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirebusinessComponent } from './hirebusiness.component';

describe('HirebusinessComponent', () => {
  let component: HirebusinessComponent;
  let fixture: ComponentFixture<HirebusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirebusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
