import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocfComponent } from './docf.component';

describe('DocfComponent', () => {
  let component: DocfComponent;
  let fixture: ComponentFixture<DocfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
