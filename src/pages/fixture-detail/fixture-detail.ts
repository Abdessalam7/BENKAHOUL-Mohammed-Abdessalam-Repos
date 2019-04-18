import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-fixture-detail',
  templateUrl: 'fixture-detail.html',
})
export class FixtureDetailPage {

  public fixture:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fixture = this.navParams.data;
    console.log('nav param', this.navParams);
  }

  ionViewDidLoad() {
  console.log('fixture.')
  }

}
