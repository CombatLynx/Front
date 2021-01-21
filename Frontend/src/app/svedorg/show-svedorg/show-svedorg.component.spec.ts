import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSvedorgComponent } from './show-svedorg.component';

describe('ShowSvedorgComponent', () => {
  let component: ShowSvedorgComponent;
  let fixture: ComponentFixture<ShowSvedorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSvedorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSvedorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
