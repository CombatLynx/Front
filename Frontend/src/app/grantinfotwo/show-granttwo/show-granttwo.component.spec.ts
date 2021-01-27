import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGranttwoComponent } from './show-granttwo.component';

describe('ShowGranttwoComponent', () => {
  let component: ShowGranttwoComponent;
  let fixture: ComponentFixture<ShowGranttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGranttwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGranttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
