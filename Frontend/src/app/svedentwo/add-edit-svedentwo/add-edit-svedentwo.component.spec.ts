import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSvedentwoComponent } from './add-edit-svedentwo.component';

describe('AddEditSvedentwoComponent', () => {
  let component: AddEditSvedentwoComponent;
  let fixture: ComponentFixture<AddEditSvedentwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSvedentwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSvedentwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
