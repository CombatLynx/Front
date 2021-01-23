import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazstandartsComponent } from './obrazstandarts.component';

describe('ObrazstandartsComponent', () => {
  let component: ObrazstandartsComponent;
  let fixture: ComponentFixture<ObrazstandartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrazstandartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazstandartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
