import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocmComponent } from './show-docm.component';

describe('ShowDocmComponent', () => {
  let component: ShowDocmComponent;
  let fixture: ComponentFixture<ShowDocmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
