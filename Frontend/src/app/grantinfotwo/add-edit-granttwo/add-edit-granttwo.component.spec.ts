import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGranttwoComponent } from './add-edit-granttwo.component';

describe('AddEditGranttwoComponent', () => {
  let component: AddEditGranttwoComponent;
  let fixture: ComponentFixture<AddEditGranttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGranttwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGranttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
