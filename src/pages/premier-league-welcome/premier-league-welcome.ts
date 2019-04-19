import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchdayPage } from '../matchday/matchday';
import { PlayersPage } from '../players/players';
import { GoalsPage } from '../goals/goals';
import { ClubsPage } from '../clubs/clubs';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';
import { StatsPage } from '../stats/stats';


@IonicPage()
@Component({
  selector: 'premier-league-welcome',
  templateUrl: 'premier-league-welcome.html',
})
export class PremierLeagueWelcomePage {

  

  constructor(public nav: NavController, public navParams: NavParams, public bplApi: PremierLeagueApi) {
  }
 public clubs: any;
  ionViewDidLoad() {
    
      this.bplApi.getClubs().then(data => ( this.clubs=data));

  }
  gotoMatchDay(){
    this.nav.push(MatchdayPage);
  }

  gotoPlayers($event, clubs){
    this.nav.push(PlayersPage, clubs);
  }
  gotoStats(){
    this.nav.push(StatsPage);
  }
  gotoClubs(){
    this.nav.push(ClubsPage);
  }
}
