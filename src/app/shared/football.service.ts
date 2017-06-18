import { Injectable, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class FootballService {
    base_url: string = 'http://api.football-data.org/v1/competitions/?season=2016';
    forseason_url: string = 'http://api.football-data.org/v1/competitions/?season='

    constructor(private http: Http) { }

    getAllCompetitions() {
        let options = this.configureHeaders();
        return this.http.get(this.base_url,options)
            .map(response => response.json());
    }

    getAllCompetitionsForYear(year:number){
        let options = this.configureHeaders();
        return this.http.get(this.forseason_url+year,options)
            .map(response => response.json());
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw("Server error (" + error.status + "): " + error.text())
    }

    configureHeaders() {
        let headers = new Headers({
            'X-Auth-Token': '28a4d4a17c6d4e94aa103bc04912251b'
        });
        let options = new RequestOptions({ headers: headers })
        return options;
    }

    getLeagueTable(url) {
        let options = this.configureHeaders();
        return this.http.get(url,options)
            .map(response => response.json());
    }
}