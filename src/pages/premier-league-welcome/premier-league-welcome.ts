import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchdayPage } from '../matchday/matchday';
import { PlayersPage } from '../players/players';
import { GoalsPage } from '../goals/goals';
import { ClubsPage } from '../clubs/clubs';


@IonicPage()
@Component({
  selector: 'premier-league-welcome',
  templateUrl: 'premier-league-welcome.html',
})
export class PremierLeagueWelcomePage {

  

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PremierLeagueWelcomePage');
  }
  gotoMatchDay(){
    this.nav.push(MatchdayPage);
  }

  gotoPlayers(){
    this.nav.push(PlayersPage);
  }
  gotoStats(){
    this.nav.push(GoalsPage);
  }
  gotoClubs(){
    this.nav.push(ClubsPage);
  }
}
