import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVolComponent } from './show-vol.component';

describe('ShowVolComponent', () => {
  let component: ShowVolComponent;
  let fixture: ComponentFixture<ShowVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
