import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFourComponent } from './show-four.component';

describe('ShowFourComponent', () => {
  let component: ShowFourComponent;
  let fixture: ComponentFixture<ShowFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
