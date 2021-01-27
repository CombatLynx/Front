import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRashComponent } from './add-edit-rash.component';

describe('AddEditRashComponent', () => {
  let component: AddEditRashComponent;
  let fixture: ComponentFixture<AddEditRashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
