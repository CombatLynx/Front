import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDociComponent } from './show-doci.component';

describe('ShowDociComponent', () => {
  let component: ShowDociComponent;
  let fixture: ComponentFixture<ShowDociComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDociComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
