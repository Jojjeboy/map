import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { WorkoutchampStartComponent } from './workoutchamp/workoutchamp-start/workoutchamp-start.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    data: { title: 'Start' }
  },
  {
    path: 'workoutchamp',
    component: WorkoutchampStartComponent,
    data: { title: 'Workoutchamp Start' }
  },

  { path: '**', component: StartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes, {  useHash: true, enableTracing: false, relativeLinkResolution: 'legacy' }
  )],
  exports: [RouterModule],
  declarations: [
    StartComponent
  ]
})
export class AppRoutingModule { }


