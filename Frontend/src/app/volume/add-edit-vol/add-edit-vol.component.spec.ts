import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVolComponent } from './add-edit-vol.component';

describe('AddEditVolComponent', () => {
  let component: AddEditVolComponent;
  let fixture: ComponentFixture<AddEditVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
