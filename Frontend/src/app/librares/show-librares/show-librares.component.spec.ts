import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLibraresComponent } from './show-librares.component';

describe('ShowLibraresComponent', () => {
  let component: ShowLibraresComponent;
  let fixture: ComponentFixture<ShowLibraresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLibraresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLibraresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
