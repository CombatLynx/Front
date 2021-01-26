import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStantwoComponent } from './add-edit-stantwo.component';

describe('AddEditStantwoComponent', () => {
  let component: AddEditStantwoComponent;
  let fixture: ComponentFixture<AddEditStantwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStantwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStantwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
