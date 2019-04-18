import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-clubs-detail',
  templateUrl: 'clubs-detail.html',
})
export class ClubsDetailPage {

  clubdetails:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clubdetails = this.navParams.data;
    console.log('nav param', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClubsDetailPage');
  }

}
