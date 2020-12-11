import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLeadertwoComponent } from './show-leadertwo.component';

describe('ShowLeadertwoComponent', () => {
  let component: ShowLeadertwoComponent;
  let fixture: ComponentFixture<ShowLeadertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLeadertwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLeadertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
