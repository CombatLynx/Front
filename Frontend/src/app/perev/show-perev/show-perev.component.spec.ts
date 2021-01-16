import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPerevComponent } from './show-perev.component';

describe('ShowPerevComponent', () => {
  let component: ShowPerevComponent;
  let fixture: ComponentFixture<ShowPerevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPerevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPerevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
