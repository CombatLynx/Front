import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPaidComponent } from './add-edit-paid.component';

describe('AddEditPaidComponent', () => {
  let component: AddEditPaidComponent;
  let fixture: ComponentFixture<AddEditPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
