import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocaComponent } from './add-edit-doca.component';

describe('AddEditDocaComponent', () => {
  let component: AddEditDocaComponent;
  let fixture: ComponentFixture<AddEditDocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
