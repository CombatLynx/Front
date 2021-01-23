import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegdunarodsotrComponent } from './megdunarodsotr.component';

describe('MegdunarodsotrComponent', () => {
  let component: MegdunarodsotrComponent;
  let fixture: ComponentFixture<MegdunarodsotrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegdunarodsotrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegdunarodsotrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
