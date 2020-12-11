import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLeaderComponent } from './show-leader.component';

describe('ShowLeaderComponent', () => {
  let component: ShowLeaderComponent;
  let fixture: ComponentFixture<ShowLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
