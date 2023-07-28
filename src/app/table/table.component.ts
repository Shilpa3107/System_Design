import { Component, OnInit } from '@angular/core';

interface USERS {
  name?: String;
  content?: String[];
  
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  Users: Array<USERS> = [
    {
      "name":"C",
      "content":["C was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","C does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.","C is (mostly) a subset of C++.","Data and functions are separated in C because it is a procedural programming language.","C does not support information hiding."]
    },
    {
      "name":"C++",
      "content": ["C++ was developed by Bjarne Stroustrup in 1979.","C++ supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.","C++ is (mostly) a superset of C.","Data and functions are encapsulated together in form of an object in C++.","Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended."]
    }
    ,
    {
      "name":"Java",
      "content":["Java was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","Java does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.","Java is (mostly) a subset of C++.","Data and functions are separated in Java because it is a procedural programming language."]
    },
    {
      "name":"python",
      "content":["python was developed by Bjarne Stroustrup in 1979.","python supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.","python is (mostly) a superset of C.","Data and functions are encapsulated together in form of an object in python.","Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended."]
    },
    {
      "name":"SaaS",
      "content":["Saas was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","Saas does no support polymorphism, encapsulation, and inheritance which means that Saas does not support object oriented programming.","Saas is (mostly) a subset of C++.","Data and functions are separated in Saas because it is a procedural programming language.","Saas does not support information hiding."]
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
