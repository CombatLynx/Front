import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocaComponent } from './show-doca.component';

describe('ShowDocaComponent', () => {
  let component: ShowDocaComponent;
  let fixture: ComponentFixture<ShowDocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
