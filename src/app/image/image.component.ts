import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() imageUrl : string = "";
  @Input() imagedescrip : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
