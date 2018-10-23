import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent } from './components/selection/selection.component';
import { ResultsComponent } from './components/results/results.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'selecao', component: SelectionComponent },
  { path: 'resultado', component: ResultsComponent },
  { path: '',   redirectTo: '/selecao', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
