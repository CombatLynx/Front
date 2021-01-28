import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvedenoneComponent } from './svedenone.component';

describe('SvedenoneComponent', () => {
  let component: SvedenoneComponent;
  let fixture: ComponentFixture<SvedenoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvedenoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvedenoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
