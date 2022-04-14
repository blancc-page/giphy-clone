import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//bring in the httpclient in the constructor
  constructor(private http: HttpClient) { }

//generate the url that fetch the api-data using the trending end point
  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.API_KEY}&limit=10&rating=g`);
  }

//generate the url that fetch the api-data using the search end point
  searchGifs(gifName: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q${gifName}api_key=${environment.API_KEY}&limit=25&rating=g`);
  }

  getMore(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.API_KEY}&limit=20&rating=g`)
  };

}
