import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOvzComponent } from './add-edit-ovz.component';

describe('AddEditOvzComponent', () => {
  let component: AddEditOvzComponent;
  let fixture: ComponentFixture<AddEditOvzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOvzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOvzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
