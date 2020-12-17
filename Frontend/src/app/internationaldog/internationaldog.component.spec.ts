import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationaldogComponent } from './internationaldog.component';

describe('InternationaldogComponent', () => {
  let component: InternationaldogComponent;
  let fixture: ComponentFixture<InternationaldogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationaldogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationaldogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
