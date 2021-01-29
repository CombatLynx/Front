import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocmComponent } from './docm.component';

describe('DocmComponent', () => {
  let component: DocmComponent;
  let fixture: ComponentFixture<DocmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
