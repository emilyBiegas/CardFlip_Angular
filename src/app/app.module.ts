import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeventiesComponent } from './seventies/seventies.component';
import { RedComponent } from './red/red.component';

@NgModule({
  declarations: [
    AppComponent,
    SeventiesComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
