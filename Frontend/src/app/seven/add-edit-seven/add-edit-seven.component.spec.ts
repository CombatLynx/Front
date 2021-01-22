import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSevenComponent } from './add-edit-seven.component';

describe('AddEditSevenComponent', () => {
  let component: AddEditSevenComponent;
  let fixture: ComponentFixture<AddEditSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
