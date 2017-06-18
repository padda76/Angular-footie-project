import {Links} from './competition.links.model';

export class Competition {
  _links: Links;
  id: number;
  caption: string;
  league: string;
  year: number;
  currentMatchday: number;
  numberOfMatchdays: number;
  numberOfTeams: number;
  numberOfGames: number;
  lastUpdated: string;
}