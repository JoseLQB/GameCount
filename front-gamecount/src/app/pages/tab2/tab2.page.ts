import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games-service.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  game: Game = {
    name: "",
    platform: "",
    cover: "",
    year: "",
    launchYear: "",
    value: 0,
    genre: "",
    company: "",
    id: 0

  }

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  saveNewGame(){
    console.log('save...')
    this.gamesService.postGame(this.game).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/tabs/tab1']);
      }
    )
  }

}
