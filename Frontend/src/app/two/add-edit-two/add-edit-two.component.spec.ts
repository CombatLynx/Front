import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTwoComponent } from './add-edit-two.component';

describe('AddEditTwoComponent', () => {
  let component: AddEditTwoComponent;
  let fixture: ComponentFixture<AddEditTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
