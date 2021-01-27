import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantinfotwoComponent } from './grantinfotwo.component';

describe('GrantinfotwoComponent', () => {
  let component: GrantinfotwoComponent;
  let fixture: ComponentFixture<GrantinfotwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantinfotwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantinfotwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
