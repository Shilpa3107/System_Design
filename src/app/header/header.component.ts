import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
  hamburger!: HTMLElement;
  
  constructor() { }

  ngOnInit(): void {
    this.hamburger = document.querySelector(".hamburger") as HTMLElement;
    const navMenu = document.querySelector(".nav-menu") as HTMLElement;

    this.hamburger.addEventListener("click", () => {
      this.hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

}
