import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController } from 'ionic-angular';
import { FixtureDetailPage } from '../fixture-detail/fixture-detail';
import { PremierLeagueApi } from '../../providers/premier-league-api/premier-league-api';

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtures.html'
})
export class FixturesPage {

  public matchdaynumber:number;
  public fixtures : any;

  constructor(public nav: NavController, public navParams: NavParams, public bplApi: PremierLeagueApi, public loadcontroler : LoadingController) { 
    this.matchdaynumber= this.navParams.data +1;
  }
  

  ionViewDidLoad(){
    let loader = this.loadcontroler.create({
      content: 'fixture details...'
    });
    loader.present().then(() => {
      this.bplApi.getFixtures(this.matchdaynumber-1).then(data => {
        this.fixtures=data;
        loader.dismiss();
      });
    });
   
  }
 

  gotoFixtureDetails($event, fixture){
    this.nav.push(FixtureDetailPage, fixture);
    console.log(fixture.fixture_code);
  }
  
 
}
