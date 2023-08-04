import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  imgurl:string="https://moqups.com/img/mqlps/images/flowchart-maker/hero-image.png"
  about: string="flowchart-tools"
  topicUrl: string = "";
  subtopicUrl: string = "";
  content: string = "";
  sub: string=" ";
  topics : string="tool"
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {

  this.topics = "tool";
  
  this.route.params.subscribe(params => {
    const subtopic = params.subtopic;
    console.log("Subtopic received:", subtopic);
   
    const [topicUrl, subtopicUrl] = subtopic.split("_");
    console.log("Parsed topic URL:", topicUrl);
    console.log("Parsed subtopic URL:", subtopicUrl);
    this.sub = subtopicUrl;
    this.http.get('assets/jsondata/tool.json').subscribe((data: any) => {
      console.log("Data received:", data);

      if (!data || !data.topics || !Array.isArray(data.topics)) {
        this.content = "Data format error: Unable to find topics.";
        return;
      }

      const topic = data.topics.find((t: any) => t.url === topicUrl);
      console.log("Found topic:", topic);

      if (!topic) {
        this.content = "Topic not found.";
        return;
      }

      console.log("Topic subtopics:", topic.subtopics);

      const subtopicObj = topic.subtopics.find((subt: any) => subt.url === subtopicUrl);
      console.log("Found subtopicObj:", subtopicObj);

      if (!subtopicObj) {
        this.content = "Subtopic not found.";
        return;
      }

      this.content = subtopicObj.content;
    }, (error) => {
      console.error("Error fetching data:", error);
      this.content = "Error fetching data. Please try again later.";
    });
  });
  }

}
