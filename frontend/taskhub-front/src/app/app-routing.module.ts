import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleFormComponent } from './pages/simple-form/simple-form.component';

const routes: Routes = [
  {
    path: 'simple-form',
    component: SimpleFormComponent
  },
  {
    path: '',
    redirectTo: 'simple-form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
