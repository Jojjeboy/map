import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { WorkoutchampComponent } from './workoutchamp.component';

@NgModule({
  declarations: [WorkoutchampComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class WorkoutchampModule { }
