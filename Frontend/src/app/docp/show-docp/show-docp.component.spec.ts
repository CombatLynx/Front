import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocpComponent } from './show-docp.component';

describe('ShowDocpComponent', () => {
  let component: ShowDocpComponent;
  let fixture: ComponentFixture<ShowDocpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
