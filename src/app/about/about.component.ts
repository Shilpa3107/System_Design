import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

topics: string = "table";
aboutimage: string = "https://i.ytimg.com/vi/7UWBYJjuIL0/maxresdefault.jpg";
constructor() {}

  ngOnInit(): void {
    this.topics = "table";
  }
}
