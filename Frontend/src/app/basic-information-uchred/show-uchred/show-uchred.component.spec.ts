import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUchredComponent } from './show-uchred.component';

describe('ShowUchredComponent', () => {
  let component: ShowUchredComponent;
  let fixture: ComponentFixture<ShowUchredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUchredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUchredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
