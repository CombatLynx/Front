import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvedorgComponent } from './svedorg.component';

describe('SvedorgComponent', () => {
  let component: SvedorgComponent;
  let fixture: ComponentFixture<SvedorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvedorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvedorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
