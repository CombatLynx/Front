import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDoccComponent } from './show-docc.component';

describe('ShowDoccComponent', () => {
  let component: ShowDoccComponent;
  let fixture: ComponentFixture<ShowDoccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDoccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDoccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
