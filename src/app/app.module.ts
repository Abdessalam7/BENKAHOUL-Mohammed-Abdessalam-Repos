import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PremierLeagueWelcomePage } from '../pages/premier-league-welcome/premier-league-welcome';
import { PlayersPage } from '../pages/players/players';
import { ClubsPage } from '../pages/clubs/clubs';
import { ClubsDetailPage } from '../pages/clubs-detail/clubs-detail';
import { AssistsPage } from '../pages/assists/assists';
import { GoalsPage } from '../pages/goals/goals';
import { FixturesPage } from '../pages/Fixtures/fixtures';
import { PlayersDetailPage } from '../pages/players-detail/players-detail';
import { FixtureDetailPage } from '../pages/fixture-detail/fixture-detail';
import { PremierLeagueApi } from '../providers/premier-league-api/premier-league-api';
import { HttpModule } from '@angular/http';
import { MatchdayPage } from '../pages/matchday/matchday';


@NgModule({
  declarations: [
    MyApp,
    PremierLeagueWelcomePage, 
    PlayersDetailPage,
    PlayersPage,
    AssistsPage,
    PlayersPage,
    ClubsPage,
    ClubsDetailPage,
    GoalsPage,
    FixturesPage,
    FixtureDetailPage,
    MatchdayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PremierLeagueWelcomePage,
    PlayersDetailPage,
    PlayersPage,
    AssistsPage,
    PlayersPage,
    ClubsPage,
    ClubsDetailPage,
    GoalsPage,
    FixturesPage,
    FixtureDetailPage,
    MatchdayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PremierLeagueApi
  ]
})
export class AppModule {}
