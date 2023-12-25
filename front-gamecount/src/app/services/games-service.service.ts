import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private url = 'http://localhost:3000/api';
  //private url = 'https://psmlws4w-3000.uks1.devtunnels.ms/api';
  constructor(private http: HttpClient) { }

  public pruebaService(){
    return "funcionan los servicios"
  }
  public getGames() {
    return this.http.get<Game>(`${this.url}/games`);
  }

  public getYearList(){
    return this.http.get<Game>(`${this.url}/games-years`);
  }
  public getGamesByYear(year: string){
    return this.http.get<Game>(`${this.url}/games-by-year/${year}`);
  }

  public postGame(game: Game) {
    return this.http.post(`${this.url}/games`, game);
  }


}
