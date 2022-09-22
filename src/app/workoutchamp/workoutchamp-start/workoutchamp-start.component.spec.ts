import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutchampStartComponent } from './workoutchamp-start.component';

describe('WorkoutchampStartComponent', () => {
  let component: WorkoutchampStartComponent;
  let fixture: ComponentFixture<WorkoutchampStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutchampStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutchampStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
