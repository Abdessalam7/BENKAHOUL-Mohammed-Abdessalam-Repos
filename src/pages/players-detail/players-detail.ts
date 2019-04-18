import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';


@Component({
  selector: 'page-players-detail',
  templateUrl: 'players-detail.html',
})
export class PlayersDetailPage {

  playerRecieved:any;
  playerDetails:any[]=[];
  players:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bplApi: PremierLeagueApi, public loadcontroler : LoadingController) {
  this.playerRecieved= this.navParams.data;
  }

  ionViewDidLoad(){
    let loader = this.loadcontroler.create({
      content: 'Players lists by club'
    });
    loader.present().then(() => {
      this.bplApi.getPlayers().then(data => {
        this.players=data;

        this.players.forEach(player => {
          if(player.first_name == this.playerRecieved.first_name){
            this.playerDetails.push(this.playerRecieved);
            console.log(this.playerRecieved);
          }
        });
        loader.dismiss();
      });
    });
   
  }
}
