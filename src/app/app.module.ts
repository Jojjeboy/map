import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageServiceService } from './shared/local-storage-service';

import { TallyService } from './tally-service';
import { TramstallyComponent } from './start/tramstally/tramstally.component';
import { StartComponent } from './start/start.component';
import { WorkoutchampComponent } from './start/workoutchamp/workoutchamp.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TramstallyComponent,
    WorkoutchampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [LocalStorageServiceService, TallyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
