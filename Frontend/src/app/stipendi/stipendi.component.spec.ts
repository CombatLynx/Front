import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StipendiComponent } from './stipendi.component';

describe('StipendiComponent', () => {
  let component: StipendiComponent;
  let fixture: ComponentFixture<StipendiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StipendiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StipendiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
