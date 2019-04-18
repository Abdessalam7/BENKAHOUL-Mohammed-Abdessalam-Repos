import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';
import { PlayersDetailPage } from '../players-detail/players-detail';


@Component({
  selector: 'page-players-by-team',
  templateUrl: 'players-by-team.html',
})
export class PlayersByTeamPage {

  
  public team:any;
  public players:any;
  public playerFiltred:any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams ,
    public loadcontroler : LoadingController,
    public bplApi:PremierLeagueApi) {
    this.team = this.navParams.data;
  }

  

  ionViewDidLoad() {
    let loader = this.loadcontroler.create({
      content: 'Players lists by club'
    });
    loader.present().then(() => {
      this.bplApi.getPlayers().then(data => {
        this.players=data;
       this.players.forEach(player => {
         if(player.current_club==this.team){
        this.playerFiltred.push(player);
       
         }
       });
       
        loader.dismiss();
        return this.playerFiltred;
      });
    });
  }

  goToPlayerDetails($event,player){
    this.navCtrl.push(PlayersDetailPage, player);
    console.log(player);
  }
}
