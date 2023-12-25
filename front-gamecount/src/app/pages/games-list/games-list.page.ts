import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games-service.service';

@Component({
  selector: 'app-games-list',
  templateUrl: 'games-list.page.html',
  styleUrls: ['games-list.page.scss']
})
export class GamesListPage implements OnInit {

  games?: Game;
  gamesList?: any;
  yearsList?: any;
  filteredYear = 'All'
  

  constructor(private gameServices : GamesService) {}


  ngOnInit(): void {
    this.yearsForCombo();
    console.log(this.gameServices.pruebaService())
    this.getAllGames();
  }

  getAllGames(){
    return this.gameServices.getGames().subscribe(
      res=>{
        this.games = res;
        this.gamesList = res;
        console.log(this.games)
      }
    )
  }

  getGameByYear(year: string){
    return this.gameServices.getGamesByYear(year).subscribe(
      res=>{
        this.games = res;
        this.gamesList = res;
        console.log(this.games);
      }
    )
  }

  yearsForCombo(){
    return this.gameServices.getYearList().subscribe(
      res=>{
        this.yearsList = res;
        this.yearsList.push('All');
        console.log(this.yearsList)
      }
    )
  }


}
