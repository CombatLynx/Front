import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCabComponent } from './show-cab.component';

describe('ShowCabComponent', () => {
  let component: ShowCabComponent;
  let fixture: ComponentFixture<ShowCabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
