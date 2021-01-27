import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRashComponent } from './show-rash.component';

describe('ShowRashComponent', () => {
  let component: ShowRashComponent;
  let fixture: ComponentFixture<ShowRashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
