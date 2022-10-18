import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapListComponent } from './tap-list/tap-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'tap-list',
    component: TapListComponent
  },
  {
    path: 'tap-form',
    component: AppComponent
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
