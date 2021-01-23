import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazovanieComponent } from './obrazovanie.component';

describe('ObrazovanieComponent', () => {
  let component: ObrazovanieComponent;
  let fixture: ComponentFixture<ObrazovanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrazovanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazovanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
