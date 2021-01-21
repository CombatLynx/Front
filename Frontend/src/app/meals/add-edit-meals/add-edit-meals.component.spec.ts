import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMealsComponent } from './add-edit-meals.component';

describe('AddEditMealsComponent', () => {
  let component: AddEditMealsComponent;
  let fixture: ComponentFixture<AddEditMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
