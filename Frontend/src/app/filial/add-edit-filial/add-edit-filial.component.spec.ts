import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFilialComponent } from './add-edit-filial.component';

describe('AddEditFilialComponent', () => {
  let component: AddEditFilialComponent;
  let fixture: ComponentFixture<AddEditFilialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFilialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFilialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
