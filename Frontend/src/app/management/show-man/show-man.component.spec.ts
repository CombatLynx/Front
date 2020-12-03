import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManComponent } from './show-man.component';

describe('ShowManComponent', () => {
  let component: ShowManComponent;
  let fixture: ComponentFixture<ShowManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
