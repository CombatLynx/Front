import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMealsComponent } from './show-meals.component';

describe('ShowMealsComponent', () => {
  let component: ShowMealsComponent;
  let fixture: ComponentFixture<ShowMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
