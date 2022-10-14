import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramstallyComponent } from './tramstally.component';

describe('TramstallyComponent', () => {
  let component: TramstallyComponent;
  let fixture: ComponentFixture<TramstallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramstallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TramstallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
