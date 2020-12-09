import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVacComponent } from './add-edit-vac.component';

describe('AddEditVacComponent', () => {
  let component: AddEditVacComponent;
  let fixture: ComponentFixture<AddEditVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
