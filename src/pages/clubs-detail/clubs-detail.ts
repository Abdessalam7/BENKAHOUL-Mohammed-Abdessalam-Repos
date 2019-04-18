import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-clubs-detail',
  templateUrl: 'clubs-detail.html',
})
export class ClubsDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClubsDetailPage');
  }

}
