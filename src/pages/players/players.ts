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
  public players:any;

  ionViewDidLoad(){
    let loader = this.loadcontroler.create({
      content: 'Players lists by club'
    });
    loader.present().then(() => {
      this.bplApi.getPlayers().then(data => {
        this.players=data;
        loader.dismiss();
      });
    });
   
  }
    gotoPlayers($event, team){
    this.navCtrl.push(PlayersByTeamPage, team);
    console.log(team.fixture_code);
  }

}
