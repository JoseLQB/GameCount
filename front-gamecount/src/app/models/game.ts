export interface Game{
  id: number;
  name: string;
  platform:string;
  cover:string;
  year:string;
  launchYear:string;
  value:number;
  genre:string;
  company:string;
}



export interface Platform{
  id: number;
  nameId: string;
  company:string;
  image:string;
}
