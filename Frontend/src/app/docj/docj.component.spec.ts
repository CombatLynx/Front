import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocjComponent } from './docj.component';

describe('DocjComponent', () => {
  let component: DocjComponent;
  let fixture: ComponentFixture<DocjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
