import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocpComponent } from './docp.component';

describe('DocpComponent', () => {
  let component: DocpComponent;
  let fixture: ComponentFixture<DocpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
