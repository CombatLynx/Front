import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDockComponent } from './show-dock.component';

describe('ShowDockComponent', () => {
  let component: ShowDockComponent;
  let fixture: ComponentFixture<ShowDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
