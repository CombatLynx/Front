import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinecdeyatelnostComponent } from './finecdeyatelnost.component';

describe('FinecdeyatelnostComponent', () => {
  let component: FinecdeyatelnostComponent;
  let fixture: ComponentFixture<FinecdeyatelnostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinecdeyatelnostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinecdeyatelnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
