import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSvedenoneComponent } from './add-edit-svedenone.component';

describe('AddEditSvedenoneComponent', () => {
  let component: AddEditSvedenoneComponent;
  let fixture: ComponentFixture<AddEditSvedenoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSvedenoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSvedenoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
