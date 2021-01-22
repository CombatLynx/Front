import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSevenComponent } from './show-seven.component';

describe('ShowSevenComponent', () => {
  let component: ShowSevenComponent;
  let fixture: ComponentFixture<ShowSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
