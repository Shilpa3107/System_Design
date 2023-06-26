import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  isCollapsed: boolean = false;
  topics: Array<any> = []

  toggleTool() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/jsondata/data1.json').subscribe((data1: any) => {
      console.log(data1);
      this.topics = data1.topics;
      // Use the data1 as needed in your component
    });
  }

  toggleSubtopics(topic: any) {
    topic.showSubtopics = !topic.showSubtopics;
  }

}
