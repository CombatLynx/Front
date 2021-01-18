import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPracticesComponent } from './add-edit-practices.component';

describe('AddEditPracticesComponent', () => {
  let component: AddEditPracticesComponent;
  let fixture: ComponentFixture<AddEditPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPracticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
