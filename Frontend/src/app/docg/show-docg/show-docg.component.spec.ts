import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocgComponent } from './show-docg.component';

describe('ShowDocgComponent', () => {
  let component: ShowDocgComponent;
  let fixture: ComponentFixture<ShowDocgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
