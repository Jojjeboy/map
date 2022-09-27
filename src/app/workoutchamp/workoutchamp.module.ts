import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { WorkoutchampStartComponent } from './workoutchamp-start/workoutchamp-start.component';

@NgModule({
  declarations: [WorkoutchampStartComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class WorkoutchampModule { }
