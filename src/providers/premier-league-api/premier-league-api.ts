import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PremierLeagueApi {

  private baseUrl = 'https://premierleague-project.firebaseio.com/';
  constructor(public http: Http) { }
  

  getFixtures(matchday:number){
    return new Promise(resolve =>{
      this.http.get(`${this.baseUrl}/season_fixtures/`+matchday+`/fixtures.json`).subscribe (res => resolve(res.json()));
    })
  }


  getPlayers(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/players.json`).subscribe (res => resolve(res.json()));
    })
  }

  getClubs(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/clubs.json`).subscribe (res => resolve(res.json()));
    })
  }
 getGoals(){
  return new Promise(resolve =>{
    this.http.get(`${this.baseUrl}/goals.json`).subscribe (res => resolve(res.json()));
  })
 }
 getAssists(){
  return new Promise(resolve =>{
    this.http.get(`${this.baseUrl}/assists.json`).subscribe (res => resolve(res.json()));
  })
 }
 getCleanSheets(){
  return new Promise(resolve =>{
    this.http.get(`${this.baseUrl}/clean_sheets.json`).subscribe (res => resolve(res.json()));
  })
 }
}

