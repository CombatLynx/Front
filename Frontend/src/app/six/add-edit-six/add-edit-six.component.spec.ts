import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSixComponent } from './add-edit-six.component';

describe('AddEditSixComponent', () => {
  let component: AddEditSixComponent;
  let fixture: ComponentFixture<AddEditSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
