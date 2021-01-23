import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnobrazuslComponent } from './platnobrazusl.component';

describe('PlatnobrazuslComponent', () => {
  let component: PlatnobrazuslComponent;
  let fixture: ComponentFixture<PlatnobrazuslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatnobrazuslComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatnobrazuslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
