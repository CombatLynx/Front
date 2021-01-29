import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDochComponent } from './add-edit-doch.component';

describe('AddEditDochComponent', () => {
  let component: AddEditDochComponent;
  let fixture: ComponentFixture<AddEditDochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDochComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
