import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageServiceService } from './shared/local-storage-service';
import { WorkoutchampModule } from './workoutchamp/workoutchamp.module';

import { TallyService } from './tally-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    WorkoutchampModule
  ],
  providers: [LocalStorageServiceService, TallyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
