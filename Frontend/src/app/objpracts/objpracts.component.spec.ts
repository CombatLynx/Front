import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjpractsComponent } from './objpracts.component';

describe('ObjpractsComponent', () => {
  let component: ObjpractsComponent;
  let fixture: ComponentFixture<ObjpractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjpractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjpractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
