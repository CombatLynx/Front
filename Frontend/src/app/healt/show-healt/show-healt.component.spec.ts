import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHealtComponent } from './show-healt.component';

describe('ShowHealtComponent', () => {
  let component: ShowHealtComponent;
  let fixture: ComponentFixture<ShowHealtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHealtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHealtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
