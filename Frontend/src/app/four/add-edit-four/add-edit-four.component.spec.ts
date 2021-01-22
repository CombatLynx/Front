import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFourComponent } from './add-edit-four.component';

describe('AddEditFourComponent', () => {
  let component: AddEditFourComponent;
  let fixture: ComponentFixture<AddEditFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
