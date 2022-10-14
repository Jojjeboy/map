import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageServiceService } from './shared/local-storage-service';
import { WorkoutchampModule } from './workoutchamp/workoutchamp.module';
import { TramstallyModule } from './tramstally/tramstally.module'

import { TallyService } from './tally-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

    /** Pages modules */
    WorkoutchampModule,
    TramstallyModule
  ],
  providers: [LocalStorageServiceService, TallyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
