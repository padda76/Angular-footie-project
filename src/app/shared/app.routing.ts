import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from "../app.component";
import {HomeComponent} from '../home/home.component';
import { CompetitionComponent } from "../Competition/competition.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'competition' , component: CompetitionComponent},
            { path: '' , component: HomeComponent}
        ])
    ],
    exports: [

    ],
    declarations: [

    ]
})

export class AppRoutingModule{}