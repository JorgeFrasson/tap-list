import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapListComponent } from './tap-list/tap-list.component';
import { TapFormComponent } from './tap-form/tap-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TapListComponent,
    TapFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
