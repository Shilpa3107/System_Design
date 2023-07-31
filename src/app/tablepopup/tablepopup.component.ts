import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablepopup',
  templateUrl: './tablepopup.component.html',
  styleUrls: ['./tablepopup.component.css']
})
export class TablepopupComponent implements OnInit {
   topics = "table";
   showTable:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.topics = "table";
  }

  toogleTable(): void{
    this.showTable = !this.showTable;
  }

}
