import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';



@Component({
  selector: 'page-assists',
  templateUrl: 'assists.html',
})
export class AssistsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public bplApi: PremierLeagueApi, public loadcontroler : LoadingController) {
  }
public assists:any;
  ionViewDidLoad(){
    let loader = this.loadcontroler.create({
      content: 'Assists loading...'
    });
    loader.present().then(() => {
      this.bplApi.getAssists().then(data => {
        this.assists=data;
        loader.dismiss();
      });
    });
   
  }

}
