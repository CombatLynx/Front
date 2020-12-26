import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGrantComponent } from './show-grant.component';

describe('ShowGrantComponent', () => {
  let component: ShowGrantComponent;
  let fixture: ComponentFixture<ShowGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
