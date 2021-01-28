import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvedentwoComponent } from './svedentwo.component';

describe('SvedentwoComponent', () => {
  let component: SvedentwoComponent;
  let fixture: ComponentFixture<SvedentwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvedentwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvedentwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
