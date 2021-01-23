import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovsvedenComponent } from './osnovsveden.component';

describe('OsnovsvedenComponent', () => {
  let component: OsnovsvedenComponent;
  let fixture: ComponentFixture<OsnovsvedenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsnovsvedenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovsvedenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
