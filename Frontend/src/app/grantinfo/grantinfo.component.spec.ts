import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantinfoComponent } from './grantinfo.component';

describe('GrantinfoComponent', () => {
  let component: GrantinfoComponent;
  let fixture: ComponentFixture<GrantinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
