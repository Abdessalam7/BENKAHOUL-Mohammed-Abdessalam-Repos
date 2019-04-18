import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayersByTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-players-by-team',
  templateUrl: 'players-by-team.html',
})
export class PlayersByTeamPage {

  public team:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('nav param', this.navParams);
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersByTeamPage');
  }


}
