import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSciencsComponent } from './add-edit-sciencs.component';

describe('AddEditSciencsComponent', () => {
  let component: AddEditSciencsComponent;
  let fixture: ComponentFixture<AddEditSciencsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSciencsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSciencsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
