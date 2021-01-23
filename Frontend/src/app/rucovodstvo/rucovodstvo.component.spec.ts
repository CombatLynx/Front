import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RucovodstvoComponent } from './rucovodstvo.component';

describe('RucovodstvoComponent', () => {
  let component: RucovodstvoComponent;
  let fixture: ComponentFixture<RucovodstvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RucovodstvoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RucovodstvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
