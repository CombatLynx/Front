import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDoclComponent } from './show-docl.component';

describe('ShowDoclComponent', () => {
  let component: ShowDoclComponent;
  let fixture: ComponentFixture<ShowDoclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDoclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDoclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
