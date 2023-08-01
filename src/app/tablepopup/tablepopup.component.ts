import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablepopup',
  templateUrl: './tablepopup.component.html',
  styleUrls: ['./tablepopup.component.css']
})
export class TablepopupComponent implements OnInit {
   @Input() tablefile: string="";
   showTable:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toogleTable(): void{
    this.showTable = !this.showTable;
  }

}
