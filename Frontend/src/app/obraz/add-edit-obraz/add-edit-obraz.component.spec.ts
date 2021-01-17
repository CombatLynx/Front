import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditObrazComponent } from './add-edit-obraz.component';

describe('AddEditObrazComponent', () => {
  let component: AddEditObrazComponent;
  let fixture: ComponentFixture<AddEditObrazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditObrazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditObrazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
