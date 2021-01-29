import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocfComponent } from './show-docf.component';

describe('ShowDocfComponent', () => {
  let component: ShowDocfComponent;
  let fixture: ComponentFixture<ShowDocfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
