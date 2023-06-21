import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.http.get('assets/jsondata/topics.json').subscribe((data: any) => {
      console.log(data);
      this.topics = data.topics;
      // Use the data as needed in your component
    });
  }

  toggleSubtopics(topic: any) {
    topic.showSubtopics = !topic.showSubtopics;
  }

}
