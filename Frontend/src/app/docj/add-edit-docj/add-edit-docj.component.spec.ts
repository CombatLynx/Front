import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocjComponent } from './add-edit-docj.component';

describe('AddEditDocjComponent', () => {
  let component: AddEditDocjComponent;
  let fixture: ComponentFixture<AddEditDocjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
