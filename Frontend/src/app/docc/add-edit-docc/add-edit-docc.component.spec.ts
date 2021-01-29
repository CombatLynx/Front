import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDoccComponent } from './add-edit-docc.component';

describe('AddEditDoccComponent', () => {
  let component: AddEditDoccComponent;
  let fixture: ComponentFixture<AddEditDoccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDoccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDoccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
