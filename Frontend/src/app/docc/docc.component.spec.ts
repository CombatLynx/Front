import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccComponent } from './docc.component';

describe('DoccComponent', () => {
  let component: DoccComponent;
  let fixture: ComponentFixture<DoccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
