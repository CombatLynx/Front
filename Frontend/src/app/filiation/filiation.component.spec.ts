import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliationComponent } from './filiation.component';

describe('FiliationComponent', () => {
  let component: FiliationComponent;
  let fixture: ComponentFixture<FiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiliationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
