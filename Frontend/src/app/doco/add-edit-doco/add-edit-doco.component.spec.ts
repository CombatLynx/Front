import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocoComponent } from './add-edit-doco.component';

describe('AddEditDocoComponent', () => {
  let component: AddEditDocoComponent;
  let fixture: ComponentFixture<AddEditDocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
