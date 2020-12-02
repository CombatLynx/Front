import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUchComponent } from './show-uch.component';

describe('ShowUchComponent', () => {
  let component: ShowUchComponent;
  let fixture: ComponentFixture<ShowUchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
