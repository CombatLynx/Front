import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDockComponent } from './add-edit-dock.component';

describe('AddEditDockComponent', () => {
  let component: AddEditDockComponent;
  let fixture: ComponentFixture<AddEditDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
