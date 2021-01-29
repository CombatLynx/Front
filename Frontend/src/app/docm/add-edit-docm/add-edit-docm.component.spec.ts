import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocmComponent } from './add-edit-docm.component';

describe('AddEditDocmComponent', () => {
  let component: AddEditDocmComponent;
  let fixture: ComponentFixture<AddEditDocmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDocmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
