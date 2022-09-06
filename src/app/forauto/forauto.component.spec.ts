import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForautoComponent } from './forauto.component';

describe('ForautoComponent', () => {
  let component: ForautoComponent;
  let fixture: ComponentFixture<ForautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
