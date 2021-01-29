import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocpComponent } from './add-edit-docp.component';

describe('AddEditDocpComponent', () => {
  let component: AddEditDocpComponent;
  let fixture: ComponentFixture<AddEditDocpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
