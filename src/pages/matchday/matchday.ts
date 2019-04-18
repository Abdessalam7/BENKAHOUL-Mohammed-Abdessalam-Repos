import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FixturesPage } from '../Fixtures/fixtures';



@Component({
  selector: 'page-matchday',
  templateUrl: 'matchday.html',
})
export class MatchdayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public matchdays:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchdayPage');
  }

  gotoMatchDayDetails($event, matchday){
    this.navCtrl.push(FixturesPage, matchday-1)
  }
}
