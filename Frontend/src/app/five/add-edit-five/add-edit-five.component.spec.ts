import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFiveComponent } from './add-edit-five.component';

describe('AddEditFiveComponent', () => {
  let component: AddEditFiveComponent;
  let fixture: ComponentFixture<AddEditFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
