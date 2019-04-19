import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoalsPage } from '../goals/goals';
import { AssistsPage } from '../assists/assists';
import { CleanSheetsPage } from '../clean-sheets/clean-sheets';



@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }

  goToGoals(){
    this.navCtrl.push(GoalsPage);
  }
  gotoAssists(){
    this.navCtrl.push(AssistsPage);
  }
  gotoCleanSheets(){
    this.navCtrl.push(CleanSheetsPage);
  }
}
