import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';

/**
 * Generated class for the GoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html',
})
export class GoalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public bplApi: PremierLeagueApi, public loadcontroler : LoadingController) {
  }
public goals:any;

  ionViewDidLoad(){
    let loader = this.loadcontroler.create({
      content: 'Goals loading...'
    });
    loader.present().then(() => {
      this.bplApi.getGoals().then(data => {
        this.goals=data;
        console.log(this.goals)
        loader.dismiss();
      });
    });
   
  }

}
