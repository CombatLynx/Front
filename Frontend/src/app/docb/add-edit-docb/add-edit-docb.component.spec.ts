import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocbComponent } from './add-edit-docb.component';

describe('AddEditDocbComponent', () => {
  let component: AddEditDocbComponent;
  let fixture: ComponentFixture<AddEditDocbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
