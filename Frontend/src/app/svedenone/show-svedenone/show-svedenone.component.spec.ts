import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSvedenoneComponent } from './show-svedenone.component';

describe('ShowSvedenoneComponent', () => {
  let component: ShowSvedenoneComponent;
  let fixture: ComponentFixture<ShowSvedenoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSvedenoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSvedenoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
