import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';
import { PlayersDetailPage } from '../players-detail/players-detail';
import { PlayersByTeamPage } from '../players-by-team/players-by-team';



@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public bplApi: PremierLeagueApi, public loadcontroler : LoadingController) {
  }
  public clubs:any;

  ionViewDidLoad(){
    let loader = this.loadcontroler.create({
      content: 'Players lists by club'
    });
    loader.present().then(() => {
      this.bplApi.getClubs().then(data => {
        this.clubs=data;
        loader.dismiss();
      });
    });
   
  }
  gotoPlayersDetails($event, team){
    this.navCtrl.push(PlayersByTeamPage, team);
    console.log(team.fixture_code);
  }

}
