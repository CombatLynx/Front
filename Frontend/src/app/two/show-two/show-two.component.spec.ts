import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTwoComponent } from './show-two.component';

describe('ShowTwoComponent', () => {
  let component: ShowTwoComponent;
  let fixture: ComponentFixture<ShowTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
