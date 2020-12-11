import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadertwoComponent } from './leadertwo.component';

describe('LeadertwoComponent', () => {
  let component: LeadertwoComponent;
  let fixture: ComponentFixture<LeadertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadertwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
