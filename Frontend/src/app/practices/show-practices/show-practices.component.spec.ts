import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPracticesComponent } from './show-practices.component';

describe('ShowPracticesComponent', () => {
  let component: ShowPracticesComponent;
  let fixture: ComponentFixture<ShowPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPracticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
