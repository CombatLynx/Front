import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVacComponent } from './show-vac.component';

describe('ShowVacComponent', () => {
  let component: ShowVacComponent;
  let fixture: ComponentFixture<ShowVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
