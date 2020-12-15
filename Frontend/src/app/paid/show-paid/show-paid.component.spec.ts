import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaidComponent } from './show-paid.component';

describe('ShowPaidComponent', () => {
  let component: ShowPaidComponent;
  let fixture: ComponentFixture<ShowPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
