import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocdComponent } from './add-edit-docd.component';

describe('AddEditDocdComponent', () => {
  let component: AddEditDocdComponent;
  let fixture: ComponentFixture<AddEditDocdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
