import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantmestComponent } from './vacantmest.component';

describe('VacantmestComponent', () => {
  let component: VacantmestComponent;
  let fixture: ComponentFixture<VacantmestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacantmestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantmestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
