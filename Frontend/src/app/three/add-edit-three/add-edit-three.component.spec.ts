import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditThreeComponent } from './add-edit-three.component';

describe('AddEditThreeComponent', () => {
  let component: AddEditThreeComponent;
  let fixture: ComponentFixture<AddEditThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
