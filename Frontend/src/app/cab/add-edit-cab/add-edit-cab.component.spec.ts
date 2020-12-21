import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCabComponent } from './add-edit-cab.component';

describe('AddEditCabComponent', () => {
  let component: AddEditCabComponent;
  let fixture: ComponentFixture<AddEditCabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
