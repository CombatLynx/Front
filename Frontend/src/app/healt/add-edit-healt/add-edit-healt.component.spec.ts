import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHealtComponent } from './add-edit-healt.component';

describe('AddEditHealtComponent', () => {
  let component: AddEditHealtComponent;
  let fixture: ComponentFixture<AddEditHealtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHealtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHealtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
