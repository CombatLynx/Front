import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDoceComponent } from './add-edit-doce.component';

describe('AddEditDoceComponent', () => {
  let component: AddEditDoceComponent;
  let fixture: ComponentFixture<AddEditDoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
