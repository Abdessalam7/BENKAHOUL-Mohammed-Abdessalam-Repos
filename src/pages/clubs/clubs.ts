import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';
import { ClubsDetailPage } from '../clubs-detail/clubs-detail';


@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html',
})
export class ClubsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadcontroler:LoadingController, public bplApi:PremierLeagueApi) {
  }

  clubs:any;
  ionViewDidLoad(){
    let loader = this.loadcontroler.create({
      content: 'Clubs list loading'
    });
    loader.present().then(() => {
      this.bplApi.getClubs().then(data => {
        this.clubs=data;
        loader.dismiss();
        
      });
    });
   
  }

  gotoClubsDetails($event, club){
  this.navCtrl.push(ClubsDetailPage, club);
  }
}
