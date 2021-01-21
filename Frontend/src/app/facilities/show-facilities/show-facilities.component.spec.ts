import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFacilitiesComponent } from './show-facilities.component';

describe('ShowFacilitiesComponent', () => {
  let component: ShowFacilitiesComponent;
  let fixture: ComponentFixture<ShowFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
