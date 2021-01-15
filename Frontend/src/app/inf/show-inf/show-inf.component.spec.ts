import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfComponent } from './show-inf.component';

describe('ShowInfComponent', () => {
  let component: ShowInfComponent;
  let fixture: ComponentFixture<ShowInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
