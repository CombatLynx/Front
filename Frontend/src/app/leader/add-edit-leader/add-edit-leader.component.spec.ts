import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLeaderComponent } from './add-edit-leader.component';

describe('AddEditLeaderComponent', () => {
  let component: AddEditLeaderComponent;
  let fixture: ComponentFixture<AddEditLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
