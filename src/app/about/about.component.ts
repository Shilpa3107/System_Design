import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

topics: string = "table";
aboutimageurl: string = "https://wallpaperaccess.com/full/1089670.jpg";
aboutimg: string="image";
constructor() {}

  ngOnInit(): void {
    this.topics = "table";
  }
}
