import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

topics: string = "table";
aboutimage: string = "https://wallpaperaccess.com/full/1089670.jpg";

constructor() {}

  ngOnInit(): void {
    this.topics = "table";
  }
}
