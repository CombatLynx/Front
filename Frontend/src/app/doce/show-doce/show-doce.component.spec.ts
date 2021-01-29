import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDoceComponent } from './show-doce.component';

describe('ShowDoceComponent', () => {
  let component: ShowDoceComponent;
  let fixture: ComponentFixture<ShowDoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
