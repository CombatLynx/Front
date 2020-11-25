import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInformationUchredComponent } from './basic-information-uchred.component';

describe('BasicInforamtionUchredComponent', () => {
  let component: BasicInformationUchredComponent;
  let fixture: ComponentFixture<BasicInformationUchredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInformationUchredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationUchredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
