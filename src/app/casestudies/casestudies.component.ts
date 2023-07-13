import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-methodology',
  templateUrl: './casestudies.component.html',
  styleUrls: ['./casestudies.component.css']
})
export class CasestudiesComponent implements OnInit {

  topics : string="casestudies"
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.topics = "casestudies";
  }

}
