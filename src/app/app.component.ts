import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PremierLeagueWelcomePage } from '../pages/premier-league-welcome/premier-league-welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PremierLeagueWelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

