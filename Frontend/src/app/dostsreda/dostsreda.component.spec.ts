import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostsredaComponent } from './dostsreda.component';

describe('DostsredaComponent', () => {
  let component: DostsredaComponent;
  let fixture: ComponentFixture<DostsredaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DostsredaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DostsredaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
