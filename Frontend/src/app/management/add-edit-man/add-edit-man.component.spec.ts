import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditManComponent } from './add-edit-man.component';

describe('AddEditManComponent', () => {
  let component: AddEditManComponent;
  let fixture: ComponentFixture<AddEditManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
