import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLeadertwoComponent } from './add-edit-leadertwo.component';

describe('AddEditLeadertwoComponent', () => {
  let component: AddEditLeadertwoComponent;
  let fixture: ComponentFixture<AddEditLeadertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLeadertwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLeadertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
