import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPerevComponent } from './add-edit-perev.component';

describe('AddEditPerevComponent', () => {
  let component: AddEditPerevComponent;
  let fixture: ComponentFixture<AddEditPerevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPerevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPerevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
