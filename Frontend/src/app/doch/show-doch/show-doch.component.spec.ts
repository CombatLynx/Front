import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDochComponent } from './show-doch.component';

describe('ShowDochComponent', () => {
  let component: ShowDochComponent;
  let fixture: ComponentFixture<ShowDochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDochComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
