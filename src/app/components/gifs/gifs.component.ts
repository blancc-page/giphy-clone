import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
})
export class GifsComponent implements OnInit {
// add fontawsome icons
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

// create an array for gifs 
  gifs: any[] = [];

//inject data-service
  constructor(private dataService: DataService, private http: HttpClient) { }

// use the url to get a response from the server
  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    .subscribe((response: any) => {
// set JSON response to the gifs array
      this.gifs = response.data;
    });
  }

// function to get more gifs on button click
  getMore(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.API_KEY}&limit=20&rating=g`)
    .subscribe((response: any) => {
      // set JSON response to the gifs array
            this.gifs = response.data;
    });
  }

}
