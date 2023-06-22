import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  subtopic : string = ""
  content : string =""
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(){
    this.subtopic = this.route.snapshot.params.subtopic;
  
    console.log(this.subtopic);
    this.http.get('assets/jsondata/data.json').subscribe((data: any) => {
        console.log(data);
        this.content = data.topics[0].subtopics[0].content;
        // Use the data as needed in your component
      });
  }

}
