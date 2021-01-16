import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerevComponent } from './perev.component';

describe('PerevComponent', () => {
  let component: PerevComponent;
  let fixture: ComponentFixture<PerevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
