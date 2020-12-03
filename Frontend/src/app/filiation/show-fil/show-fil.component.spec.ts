import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilComponent } from './show-fil.component';

describe('ShowFilComponent', () => {
  let component: ShowFilComponent;
  let fixture: ComponentFixture<ShowFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
