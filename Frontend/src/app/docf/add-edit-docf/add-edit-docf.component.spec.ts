import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocfComponent } from './add-edit-docf.component';

describe('AddEditDocfComponent', () => {
  let component: AddEditDocfComponent;
  let fixture: ComponentFixture<AddEditDocfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
