import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoclComponent } from './docl.component';

describe('DoclComponent', () => {
  let component: DoclComponent;
  let fixture: ComponentFixture<DoclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
