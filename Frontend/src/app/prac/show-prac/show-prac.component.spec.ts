import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPracComponent } from './show-prac.component';

describe('ShowPracComponent', () => {
  let component: ShowPracComponent;
  let fixture: ComponentFixture<ShowPracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
