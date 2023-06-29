import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics : string="home"
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.topics = "home";
   
  }

}
