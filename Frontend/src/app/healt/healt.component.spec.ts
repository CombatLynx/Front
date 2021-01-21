import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtComponent } from './healt.component';

describe('HealtComponent', () => {
  let component: HealtComponent;
  let fixture: ComponentFixture<HealtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
