import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocbComponent } from './docb.component';

describe('DocbComponent', () => {
  let component: DocbComponent;
  let fixture: ComponentFixture<DocbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
