import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFacilitiesComponent } from './add-edit-facilities.component';

describe('AddEditFacilitiesComponent', () => {
  let component: AddEditFacilitiesComponent;
  let fixture: ComponentFixture<AddEditFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
