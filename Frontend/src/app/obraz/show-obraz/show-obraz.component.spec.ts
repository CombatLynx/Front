import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowObrazComponent } from './show-obraz.component';

describe('ShowObrazComponent', () => {
  let component: ShowObrazComponent;
  let fixture: ComponentFixture<ShowObrazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowObrazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowObrazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
