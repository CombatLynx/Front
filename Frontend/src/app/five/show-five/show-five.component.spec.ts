import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFiveComponent } from './show-five.component';

describe('ShowFiveComponent', () => {
  let component: ShowFiveComponent;
  let fixture: ComponentFixture<ShowFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
