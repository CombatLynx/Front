import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencsComponent } from './sciencs.component';

describe('SciencsComponent', () => {
  let component: SciencsComponent;
  let fixture: ComponentFixture<SciencsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciencsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
