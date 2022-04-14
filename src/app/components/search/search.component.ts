import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // gifs: any[] = [];

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
  }
  
  search(searchTerm: string){
  if(searchTerm !== ""){
    this.dataService.searchGifs(searchTerm)
    .subscribe((response: any) =>{
      // this.gifs = response.data;
    });
  }
  }
}
