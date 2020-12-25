import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOvztwoComponent } from './show-ovztwo.component';

describe('ShowOvztwoComponent', () => {
  let component: ShowOvztwoComponent;
  let fixture: ComponentFixture<ShowOvztwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOvztwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOvztwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
