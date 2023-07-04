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
  topic : string=""
  topic2: string=""
  topics: string = "topic"
  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    route.params.subscribe(params => {
      // put the code from `ngOnInit` here
      console.log(params);
      this.subtopic = params.subtopic;
      this.topic= this.subtopic.split("_")[0];
      this.topic2=this.subtopic.split("_")[1];
     
      console.log(this.subtopic);
      // this.http.get('assets/jsondata/data.json').subscribe((data: any) => {
        console.log("data");
        // console.log(data);
        this.topics = "data";
      // });
      this.http.get('assets/jsondata/topics.json').subscribe((data: any) => {
          
          console.log(data);
        
          this.content = data[this.topic][this.topic2];
          // Use the data as needed in your component
        });
    });
    
  }

  ngOnInit(){
   
      // Use the data as needed in your component
   
  }

}
