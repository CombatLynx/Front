import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHealthComponent } from './show-health.component';

describe('ShowHealthComponent', () => {
  let component: ShowHealthComponent;
  let fixture: ComponentFixture<ShowHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
