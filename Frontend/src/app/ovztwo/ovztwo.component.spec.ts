import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvztwoComponent } from './ovztwo.component';

describe('OvztwoComponent', () => {
  let component: OvztwoComponent;
  let fixture: ComponentFixture<OvztwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvztwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvztwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
