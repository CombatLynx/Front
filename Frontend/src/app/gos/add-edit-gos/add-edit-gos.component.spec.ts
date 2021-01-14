import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGosComponent } from './add-edit-gos.component';

describe('AddEditGosComponent', () => {
  let component: AddEditGosComponent;
  let fixture: ComponentFixture<AddEditGosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
