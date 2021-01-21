import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSportsComponent } from './add-edit-sports.component';

describe('AddEditSportsComponent', () => {
  let component: AddEditSportsComponent;
  let fixture: ComponentFixture<AddEditSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
