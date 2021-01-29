import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocbComponent } from './show-docb.component';

describe('ShowDocbComponent', () => {
  let component: ShowDocbComponent;
  let fixture: ComponentFixture<ShowDocbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
