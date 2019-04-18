import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PremierLeagueWelcomePage } from './premier-league-welcome';

@NgModule({
  declarations: [
    PremierLeagueWelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(PremierLeagueWelcomePage),
  ],
})
export class PremierLeagueWelcomePageModule {}
