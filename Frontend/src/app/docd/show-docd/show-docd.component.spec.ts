import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocdComponent } from './show-docd.component';

describe('ShowDocdComponent', () => {
  let component: ShowDocdComponent;
  let fixture: ComponentFixture<ShowDocdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
