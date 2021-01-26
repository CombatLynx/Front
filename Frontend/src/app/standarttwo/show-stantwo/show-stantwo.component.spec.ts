import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStantwoComponent } from './show-stantwo.component';

describe('ShowStantwoComponent', () => {
  let component: ShowStantwoComponent;
  let fixture: ComponentFixture<ShowStantwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStantwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStantwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
