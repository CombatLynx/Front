import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocgComponent } from './add-edit-docg.component';

describe('AddEditDocgComponent', () => {
  let component: AddEditDocgComponent;
  let fixture: ComponentFixture<AddEditDocgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
