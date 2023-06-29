import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isCollapsed: boolean = false;
  topics: Array<any> = []

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private http: HttpClient) { }
  @Input() data : string = "";
  ngOnInit(): void {
    console.log(this.data);
    this.http.get('assets/jsondata/'+this.data+'.json').subscribe((data1: any) => {
      console.log(data1);
      this.topics = data1.topics;
      // Use the data as needed in your component
    });
    // this.topics = this.data.topics;
    // console.log("hello");
    // console.log(this.data);
  }

  toggleSubtopics(topic: any) {
    topic.showSubtopics = !topic.showSubtopics;
  }

}
