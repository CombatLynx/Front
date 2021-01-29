import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DochComponent } from './doch.component';

describe('DochComponent', () => {
  let component: DochComponent;
  let fixture: ComponentFixture<DochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DochComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
