import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSvedorgComponent } from './add-edit-svedorg.component';

describe('AddEditSvedorgComponent', () => {
  let component: AddEditSvedorgComponent;
  let fixture: ComponentFixture<AddEditSvedorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSvedorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSvedorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
