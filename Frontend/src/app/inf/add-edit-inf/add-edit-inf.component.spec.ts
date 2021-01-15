import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInfComponent } from './add-edit-inf.component';

describe('AddEditInfComponent', () => {
  let component: AddEditInfComponent;
  let fixture: ComponentFixture<AddEditInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
