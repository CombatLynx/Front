import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditActComponent } from './add-edit-act.component';

describe('AddEditActComponent', () => {
  let component: AddEditActComponent;
  let fixture: ComponentFixture<AddEditActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditActComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
