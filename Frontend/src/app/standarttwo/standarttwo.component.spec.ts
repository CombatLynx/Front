import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandarttwoComponent } from './standarttwo.component';

describe('StandarttwoComponent', () => {
  let component: StandarttwoComponent;
  let fixture: ComponentFixture<StandarttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandarttwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandarttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
