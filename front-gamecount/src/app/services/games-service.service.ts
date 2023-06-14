import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  public pruebaService(){
    return "funcionan los servicios"
  }
  public getGames() {
    return this.http.get<Game>(`${this.url}/games`);
  }


}
