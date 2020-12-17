import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAccrComponent } from './add-edit-accr.component';

describe('AddEditAccrComponent', () => {
  let component: AddEditAccrComponent;
  let fixture: ComponentFixture<AddEditAccrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAccrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAccrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
