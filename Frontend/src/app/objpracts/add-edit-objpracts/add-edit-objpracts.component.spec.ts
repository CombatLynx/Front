import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditObjpractsComponent } from './add-edit-objpracts.component';

describe('AddEditObjpractsComponent', () => {
  let component: AddEditObjpractsComponent;
  let fixture: ComponentFixture<AddEditObjpractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditObjpractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditObjpractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
