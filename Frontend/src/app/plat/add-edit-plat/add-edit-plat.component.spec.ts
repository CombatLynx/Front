import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlatComponent } from './add-edit-plat.component';

describe('AddEditPlatComponent', () => {
  let component: AddEditPlatComponent;
  let fixture: ComponentFixture<AddEditPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
