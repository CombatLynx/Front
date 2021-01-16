import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdmisComponent } from './show-admis.component';

describe('ShowAdmisComponent', () => {
  let component: ShowAdmisComponent;
  let fixture: ComponentFixture<ShowAdmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAdmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAdmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
