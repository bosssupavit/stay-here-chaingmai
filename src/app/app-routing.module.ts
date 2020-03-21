import { ConclusionComponent } from './conclusion/conclusion.component';
import { MaterialComponent } from './material/material.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { RelationaleComponent } from './relationale/relationale.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P7psComponent } from './p7ps/p7ps.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'rationale', component: RelationaleComponent},
  { path: '7ps', component: P7psComponent},
  { path: 'data-analysis', component: DataAnalysisComponent},
  { path: 'materials', component: MaterialComponent},
  { path: 'conclusion', component: ConclusionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
