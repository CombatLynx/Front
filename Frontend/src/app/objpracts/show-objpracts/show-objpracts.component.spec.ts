import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowObjpractsComponent } from './show-objpracts.component';

describe('ShowObjpractsComponent', () => {
  let component: ShowObjpractsComponent;
  let fixture: ComponentFixture<ShowObjpractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowObjpractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowObjpractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
