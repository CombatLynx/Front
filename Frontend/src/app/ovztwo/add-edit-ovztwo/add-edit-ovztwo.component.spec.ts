import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOvztwoComponent } from './add-edit-ovztwo.component';

describe('AddEditOvztwoComponent', () => {
  let component: AddEditOvztwoComponent;
  let fixture: ComponentFixture<AddEditOvztwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOvztwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOvztwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
