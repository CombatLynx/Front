import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraresComponent } from './librares.component';

describe('LibraresComponent', () => {
  let component: LibraresComponent;
  let fixture: ComponentFixture<LibraresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
