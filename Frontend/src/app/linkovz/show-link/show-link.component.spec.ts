import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLinkComponent } from './show-link.component';

describe('ShowLinkComponent', () => {
  let component: ShowLinkComponent;
  let fixture: ComponentFixture<ShowLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
