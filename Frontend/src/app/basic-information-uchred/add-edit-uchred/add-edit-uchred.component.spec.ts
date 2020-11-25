import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUchredComponent } from './add-edit-uchred.component';

describe('AddEditUchredComponent', () => {
  let component: AddEditUchredComponent;
  let fixture: ComponentFixture<AddEditUchredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUchredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUchredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
