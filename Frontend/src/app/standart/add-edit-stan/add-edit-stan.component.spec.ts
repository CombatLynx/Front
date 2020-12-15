import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStanComponent } from './add-edit-stan.component';

describe('AddEditStanComponent', () => {
  let component: AddEditStanComponent;
  let fixture: ComponentFixture<AddEditStanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
