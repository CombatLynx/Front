import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DociComponent } from './doci.component';

describe('DociComponent', () => {
  let component: DociComponent;
  let fixture: ComponentFixture<DociComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DociComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
