import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocnComponent } from './docn.component';

describe('DocnComponent', () => {
  let component: DocnComponent;
  let fixture: ComponentFixture<DocnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
