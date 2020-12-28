import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGinfoComponent } from './add-edit-ginfo.component';

describe('AddEditGinfoComponent', () => {
  let component: AddEditGinfoComponent;
  let fixture: ComponentFixture<AddEditGinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
