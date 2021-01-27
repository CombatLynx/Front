import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RashComponent } from './rash.component';

describe('RashComponent', () => {
  let component: RashComponent;
  let fixture: ComponentFixture<RashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
