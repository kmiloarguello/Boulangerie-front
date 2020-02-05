import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PastrieListComponent } from './pastrie-list/pastrie-list.component';

const routes: Routes = [
  { path: 'pastries', component: PastrieListComponent },

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }