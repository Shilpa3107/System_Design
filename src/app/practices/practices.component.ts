import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent implements OnInit {

  topics : string="practices"
  constructor() { }

  ngOnInit(): void {
    this.topics = "practices";
  }

}
