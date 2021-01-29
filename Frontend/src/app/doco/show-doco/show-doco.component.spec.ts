import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocoComponent } from './show-doco.component';

describe('ShowDocoComponent', () => {
  let component: ShowDocoComponent;
  let fixture: ComponentFixture<ShowDocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
