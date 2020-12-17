import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalaccrComponent } from './internationalaccr.component';

describe('InternationalaccrComponent', () => {
  let component: InternationalaccrComponent;
  let fixture: ComponentFixture<InternationalaccrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalaccrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalaccrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
