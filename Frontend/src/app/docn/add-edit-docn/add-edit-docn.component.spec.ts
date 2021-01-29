import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocnComponent } from './add-edit-docn.component';

describe('AddEditDocnComponent', () => {
  let component: AddEditDocnComponent;
  let fixture: ComponentFixture<AddEditDocnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
