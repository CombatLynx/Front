import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocgComponent } from './docg.component';

describe('DocgComponent', () => {
  let component: DocgComponent;
  let fixture: ComponentFixture<DocgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
