import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSciencsComponent } from './show-sciencs.component';

describe('ShowSciencsComponent', () => {
  let component: ShowSciencsComponent;
  let fixture: ComponentFixture<ShowSciencsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSciencsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSciencsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
