import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAdmisComponent } from './add-edit-admis.component';

describe('AddEditAdmisComponent', () => {
  let component: AddEditAdmisComponent;
  let fixture: ComponentFixture<AddEditAdmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAdmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAdmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
