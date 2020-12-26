import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGrantComponent } from './add-edit-grant.component';

describe('AddEditGrantComponent', () => {
  let component: AddEditGrantComponent;
  let fixture: ComponentFixture<AddEditGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
