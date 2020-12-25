import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOvzComponent } from './show-ovz.component';

describe('ShowOvzComponent', () => {
  let component: ShowOvzComponent;
  let fixture: ComponentFixture<ShowOvzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOvzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOvzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
