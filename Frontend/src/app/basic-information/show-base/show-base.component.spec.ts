import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBaseComponent } from './show-base.component';

describe('ShowBaseComponent', () => {
  let component: ShowBaseComponent;
  let fixture: ComponentFixture<ShowBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
