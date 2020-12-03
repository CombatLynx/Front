import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFilComponent } from './add-edit-fil.component';

describe('AddEditFilComponent', () => {
  let component: AddEditFilComponent;
  let fixture: ComponentFixture<AddEditFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
