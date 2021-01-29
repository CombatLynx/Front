import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocjComponent } from './show-docj.component';

describe('ShowDocjComponent', () => {
  let component: ShowDocjComponent;
  let fixture: ComponentFixture<ShowDocjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
