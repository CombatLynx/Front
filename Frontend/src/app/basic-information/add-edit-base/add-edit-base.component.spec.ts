import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBaseComponent } from './add-edit-base.component';

describe('AddEditBaseComponent', () => {
  let component: AddEditBaseComponent;
  let fixture: ComponentFixture<AddEditBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
