import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlatComponent } from './show-plat.component';

describe('ShowPlatComponent', () => {
  let component: ShowPlatComponent;
  let fixture: ComponentFixture<ShowPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
