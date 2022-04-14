import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoSrc = 'assets/images/giphy-logo.png'  
  logoAlt = 'logo'

  ukrSrc = 'assets/images/ukraine.gif'  
  ukrAlt = 'ukr-gif'


  constructor() { }

  ngOnInit(): void {
  }

}
