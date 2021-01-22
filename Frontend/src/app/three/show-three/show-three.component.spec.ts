import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowThreeComponent } from './show-three.component';

describe('ShowThreeComponent', () => {
  let component: ShowThreeComponent;
  let fixture: ComponentFixture<ShowThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
