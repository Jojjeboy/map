import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { TramstallyComponent } from './start/tramstally/tramstally.component';
import { WorkoutchampComponent } from './start/workoutchamp/workoutchamp.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    data: { title: 'Start' }
  },
  {
    path: 'workoutchamp',
    component: WorkoutchampComponent,
    title: 'Workoutchamp',
    data: { title: 'Workoutchamp' }
  },
  {
    path: 'tramstally',
    component: TramstallyComponent,
    title: 'Tramstally',
    data: { title: 'Tramstally' }
  },

  { path: '**', component: StartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes, {  useHash: true, enableTracing: false, relativeLinkResolution: 'legacy' }
  )],
  exports: [RouterModule],
  declarations: [
    
  ]
})
export class AppRoutingModule { }


