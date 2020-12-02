import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UchredComponent } from './uchred.component';

describe('UchredComponent', () => {
  let component: UchredComponent;
  let fixture: ComponentFixture<UchredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UchredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UchredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
