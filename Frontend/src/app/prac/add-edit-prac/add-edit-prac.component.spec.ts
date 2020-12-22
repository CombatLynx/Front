import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPracComponent } from './add-edit-prac.component';

describe('AddEditPracComponent', () => {
  let component: AddEditPracComponent;
  let fixture: ComponentFixture<AddEditPracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
