import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGosComponent } from './show-gos.component';

describe('ShowGosComponent', () => {
  let component: ShowGosComponent;
  let fixture: ComponentFixture<ShowGosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
