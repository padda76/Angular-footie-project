import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'app/shared/app.routing';
import { CompetitionComponent } from "./Competition/competition.component";
import { FootballService } from "./shared/football.service";
import { HomeComponent } from "app/home/home.component";
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    HomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'competition', component: CompetitionComponent },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [
    FootballService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
