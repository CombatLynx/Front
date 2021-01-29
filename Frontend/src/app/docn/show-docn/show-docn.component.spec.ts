import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocnComponent } from './show-docn.component';

describe('ShowDocnComponent', () => {
  let component: ShowDocnComponent;
  let fixture: ComponentFixture<ShowDocnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
