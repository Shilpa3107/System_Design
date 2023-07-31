import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagepopup',
  templateUrl: './imagepopup.component.html',
  styleUrls: ['./imagepopup.component.css']
})
export class ImagepopupComponent implements OnInit {
  @Input() imageUrl: string = "";
  showImage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}
