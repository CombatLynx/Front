import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocoComponent } from './doco.component';

describe('DocoComponent', () => {
  let component: DocoComponent;
  let fixture: ComponentFixture<DocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
