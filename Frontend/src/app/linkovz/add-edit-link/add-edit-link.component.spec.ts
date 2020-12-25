import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLinkComponent } from './add-edit-link.component';

describe('AddEditLinkComponent', () => {
  let component: AddEditLinkComponent;
  let fixture: ComponentFixture<AddEditLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
