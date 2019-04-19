import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';

/**
 * Generated class for the CleanSheetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-clean-sheets',
  templateUrl: 'clean-sheets.html',
})
export class CleanSheetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public bplApi: PremierLeagueApi, public loadcontroler : LoadingController) {
  }

  public cleansheets:any;
  ionViewDidLoad(){
    let loader = this.loadcontroler.create({
      content: 'Clean Sheets loading...'
    });
    loader.present().then(() => {
      this.bplApi.getCleanSheets().then(data => {
        this.cleansheets=data;
        loader.dismiss();
      });
    });
}
}
