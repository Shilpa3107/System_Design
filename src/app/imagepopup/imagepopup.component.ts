import { Component, Input,OnInit,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-imagepopup',
  templateUrl: './imagepopup.component.html',
  styleUrls: ['./imagepopup.component.css']
})
export class ImagepopupComponent  {
  @Input() url: string="";
  @Input() describe: string="";
  // url: string = "https://wallpaperaccess.com/full/1089670.jpg";
  // describe: string = "image";

  public isExpanded: boolean = false;
  constructor() { }

  ngOnInit(): void {  }

  @ViewChild('myModal') modalRef!: ElementRef;

  modalImageUrl: string = '';
  modalImageDescrip: string = '';

  openModal() {
    // Open the modal popup
    const modal: HTMLElement = this.modalRef.nativeElement;
    modal.style.display = 'block';

    // Set the modal content to the values from the app-image component
    this.modalImageUrl = this.url;
    this.modalImageDescrip = this.describe;
  }
  closeModal() {
    // Close the modal popup
    const modal: HTMLElement = this.modalRef.nativeElement;
    modal.style.display = 'none';
  }
}
