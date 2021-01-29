import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDoclComponent } from './add-edit-docl.component';

describe('AddEditDoclComponent', () => {
  let component: AddEditDoclComponent;
  let fixture: ComponentFixture<AddEditDoclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDoclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDoclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
