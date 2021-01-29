import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdComponent } from './docd.component';

describe('DocdComponent', () => {
  let component: DocdComponent;
  let fixture: ComponentFixture<DocdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
