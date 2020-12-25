import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvzComponent } from './ovz.component';

describe('OvzComponent', () => {
  let component: OvzComponent;
  let fixture: ComponentFixture<OvzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
