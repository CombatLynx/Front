import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHealthComponent } from './add-edit-health.component';

describe('AddEditHealthComponent', () => {
  let component: AddEditHealthComponent;
  let fixture: ComponentFixture<AddEditHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
