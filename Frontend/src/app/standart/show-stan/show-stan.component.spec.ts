import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStanComponent } from './show-stan.component';

describe('ShowStanComponent', () => {
  let component: ShowStanComponent;
  let fixture: ComponentFixture<ShowStanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
