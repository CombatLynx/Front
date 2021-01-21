import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLibraresComponent } from './add-edit-librares.component';

describe('AddEditLibraresComponent', () => {
  let component: AddEditLibraresComponent;
  let fixture: ComponentFixture<AddEditLibraresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLibraresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLibraresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
