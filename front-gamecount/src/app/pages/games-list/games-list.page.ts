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
  filteredYear = 'All'

  constructor(private gameServices : GamesService) {}


  ngOnInit(): void {
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

  yearsForCombo(){
    const years: any[] = []
    if(this.gamesList){
      years.push('All');
      this.gamesList.forEach((element : any) => {
        years.push(element.year);
      });
      return years.filter((value, index, self) =>{
        return self.indexOf(value)=== index;
      })
    }
    return;
  }

  filterByYear(event: any){
    this.filteredYear = event.target.value;
    console.log(this.filteredYear)
  }


}
