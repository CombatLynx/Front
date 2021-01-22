import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOneComponent } from './add-edit-one.component';

describe('AddEditOneComponent', () => {
  let component: AddEditOneComponent;
  let fixture: ComponentFixture<AddEditOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
