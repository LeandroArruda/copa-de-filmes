import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent } from './selection/selection.component';
import { ResultsComponent } from './results/results.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'selection', component: SelectionComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
