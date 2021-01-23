import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructandorganComponent } from './structandorgan.component';

describe('StructandorganComponent', () => {
  let component: StructandorganComponent;
  let fixture: ComponentFixture<StructandorganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructandorganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructandorganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
