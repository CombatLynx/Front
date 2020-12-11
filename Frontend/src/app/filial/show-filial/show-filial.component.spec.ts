import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilialComponent } from './show-filial.component';

describe('ShowFilialComponent', () => {
  let component: ShowFilialComponent;
  let fixture: ComponentFixture<ShowFilialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFilialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFilialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
