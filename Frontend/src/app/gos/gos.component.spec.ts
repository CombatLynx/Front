import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GosComponent } from './gos.component';

describe('GosComponent', () => {
  let component: GosComponent;
  let fixture: ComponentFixture<GosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
