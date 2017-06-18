import { Component, OnInit } from '@angular/core';
import { FootballService } from '../shared/football.service';
import { Competition } from './competition.model';
import { LeagueTable } from '../leagueTable/leagueTable.model';

@Component({
    templateUrl: './competition.component.html',
    styleUrls: ['./competition.component.css']
})

export class CompetitionComponent implements OnInit {
    competitions: Competition[];
    currentYear: number = 2016;
    year: number = 2015;
    leagueTable: LeagueTable;

    constructor(private fService: FootballService) { }

    ngOnInit() {
        this.getAllCompetitions();
    }

    getAllCompetitions() {
        this.competitions = [];
        this.fService.getAllCompetitions().subscribe(
            competitions => this.competitions = competitions,
            error => console.log(error)
        );
        console.log('getAllComp');
    }

    getAllCompetitionsForYear() {
        this.competitions = [];
        this.fService.getAllCompetitionsForYear(this.year).subscribe(
            competitions => this.competitions = competitions,
            error => console.log(error)
        );
        console.log(`getAllComp for ${this.year}`);
        this.currentYear = this.year;
    }

    getLeagueTable(url: string) {
        this.leagueTable = null;
        this.fService.getLeagueTable(url).subscribe(
            leagueTable => this.leagueTable = leagueTable,
            error => console.log(error)
        );
        console.log(`Getting ${url}`);
        console.log(this.leagueTable);
    }

    chooseNewCompetition() {
        this.leagueTable = null;
    }
}

