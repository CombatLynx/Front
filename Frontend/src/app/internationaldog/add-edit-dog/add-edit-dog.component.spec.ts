import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDogComponent } from './add-edit-dog.component';

describe('AddEditDogComponent', () => {
  let component: AddEditDogComponent;
  let fixture: ComponentFixture<AddEditDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
