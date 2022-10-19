import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapListComponent } from './tap-list/tap-list.component';
import { AppComponent } from './app.component';
import { TapFormComponent } from './tap-form/tap-form.component';

const routes: Routes = [
  {
    path: 'tap-list',
    component: TapListComponent
  },
  {
    path: 'tap-form',
    component: TapFormComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
