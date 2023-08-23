import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-casestudies',
  templateUrl: './casestudies.component.html',
  styleUrls: ['./casestudies.component.css']
})
export class CasestudiesComponent implements OnInit {
  tabledata:string="architectural";
  heading: string="Some architectural components";
  topicUrl: string = "";
  subtopicUrl: string = "";
  content: any[] = [];
  sub: string=" ";
  topics : string="casestudies"
  constructor(private route: ActivatedRoute, private http: HttpClient) {
   
   }

  ngOnInit(): void {
  this.topics = "casestudies";
  this.route.params.subscribe(params => {
    const subtopic = params.subtopic;
    console.log("Subtopic received:", subtopic);
   
    const [topicUrl, subtopicUrl] = subtopic.split("_");
    console.log("Parsed topic URL:", topicUrl);
    console.log("Parsed subtopic URL:", subtopicUrl);
    this.sub = subtopicUrl;
    this.http.get('assets/jsondata/casestudies.json').subscribe((data: any) => {
      console.log("Data received:", data);

      if (!data || !data.topics || !Array.isArray(data.topics)) {
        this.content.push ({"value":"Data format error: Unable to find topics."},
        {"imageUrl":"Data format error: Unable to find image url."},
        {
          "describe":"Data format error: Unable to find description"
        },
        {
          "table":"Data format error: Unable to find table"
        },
        {
          "description":"Data format error: Unable to find description"
        });
        return;
      }

      const topic = data.topics.find((t: any) => t.url === topicUrl);
      console.log("Found topic:", topic);

      if (!topic) {
        this.content.push ({"value": "Topic not found."},
        {"imageUrl":"Image not found"},
       {"describe":"Description not found"},
       {"table":"Table not found"},
       {"description":"Description not found"});
        return;
      }

      console.log("Topic subtopics:", topic.subtopics);

      const subtopicObj = topic.subtopics.find((subt: any) => subt.url === subtopicUrl);
      console.log("Found subtopicObj:", subtopicObj);

      if (!subtopicObj) {
        this.content.push ({"value":"Subtopic not found."},
        {"imageUrl":"Image not found"},
       {"describe":"Description not found"},
       {
        "table":"Table not found"
       },
       {
        "description":"Description not found"
       });
        return;
      }

      

      this.content = subtopicObj.content;
    }, (error) => {
      console.error("Error fetching data:", error);
      this.content.push ({"value":"Error fetching data. Please try again later."},
        {"imageUrl":"Error fetching data. Please try again later."},
       {"describe":"Error fetching data. Please try again later."},
       {"table":"Error fetching data. Please try again later."},
       {"description":"Error fetching data. Please try again later."});
    });
  });
  }

}
