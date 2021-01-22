import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSixComponent } from './show-six.component';

describe('ShowSixComponent', () => {
  let component: ShowSixComponent;
  let fixture: ComponentFixture<ShowSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
