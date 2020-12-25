import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkovzComponent } from './linkovz.component';

describe('LinkovzComponent', () => {
  let component: LinkovzComponent;
  let fixture: ComponentFixture<LinkovzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkovzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkovzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
