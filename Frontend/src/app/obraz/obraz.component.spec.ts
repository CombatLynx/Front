import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazComponent } from './obraz.component';

describe('ObrazComponent', () => {
  let component: ObrazComponent;
  let fixture: ComponentFixture<ObrazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
