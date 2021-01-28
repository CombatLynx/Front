import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSvedentwoComponent } from './show-svedentwo.component';

describe('ShowSvedentwoComponent', () => {
  let component: ShowSvedentwoComponent;
  let fixture: ComponentFixture<ShowSvedentwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSvedentwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSvedentwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
