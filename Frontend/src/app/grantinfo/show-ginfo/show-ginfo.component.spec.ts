import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGinfoComponent } from './show-ginfo.component';

describe('ShowGinfoComponent', () => {
  let component: ShowGinfoComponent;
  let fixture: ComponentFixture<ShowGinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
