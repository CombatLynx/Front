import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDociComponent } from './add-edit-doci.component';

describe('AddEditDociComponent', () => {
  let component: AddEditDociComponent;
  let fixture: ComponentFixture<AddEditDociComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDociComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
