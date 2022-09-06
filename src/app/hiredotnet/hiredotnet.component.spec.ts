import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredotnetComponent } from './hiredotnet.component';

describe('HiredotnetComponent', () => {
  let component: HiredotnetComponent;
  let fixture: ComponentFixture<HiredotnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredotnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
