import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAccrComponent } from './show-accr.component';

describe('ShowAccrComponent', () => {
  let component: ShowAccrComponent;
  let fixture: ComponentFixture<ShowAccrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAccrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAccrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
