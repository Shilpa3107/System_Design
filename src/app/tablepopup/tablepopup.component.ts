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

  openModal(): void {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

}
