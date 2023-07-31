import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TableData{
  name: string;
  content: string[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data : string = "";
  @Input() isVisible: boolean =false;
  tableData: TableData[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    if (this.data) {
      this.httpClient.get<TableData[]>(`assets/jsondata/${this.data}.json`).subscribe(
        (data: TableData[]) => {
          this.tableData = data;
          console.log("Fetched data: ", data);
        },
        (error) => {
          console.error("Error fetching data:", error);
          // Add a default value for tableData in case of error
          this.tableData = [];
        }
      );
    }
  }
}
