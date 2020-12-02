import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUchComponent } from './add-edit-uch.component';

describe('AddEditUchComponent', () => {
  let component: AddEditUchComponent;
  let fixture: ComponentFixture<AddEditUchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
