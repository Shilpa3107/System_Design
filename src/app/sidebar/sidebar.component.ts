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
  // name1: string=""
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  @Input() data : string = "";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.data);
    this.http.get('assets/jsondata/'+this.data+'.json').subscribe((data1: any) => {
      console.log(data1);
      this.topics = data1.topics;
      // this.name1 = this.data;
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
