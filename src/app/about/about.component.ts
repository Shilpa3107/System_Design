import { Component, OnInit } from '@angular/core';


interface USERS {
  name?: String;
  content1?: String;
  content2?: String;
  content3?:String;
  content4?: String;
  content5?: String;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

//  list: Array<String>=["C","C++","Java","python","SaaS"];



//   Users: Array<USERS> = [{
//     "C": "C was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.",
//     "Cpp": "C++ was developed by Bjarne Stroustrup in 1979.",
//     "Java": "Java was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.",
//     "python": "python was developed by Bjarne Stroustrup in 1979.",
//     "SaaS": "SaaS was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs."
// },
// {
//     "C": "C does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.",
//     "Cpp": "C++ supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.",
//     "Java": "Java does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.",
//     "python": "python supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.",
//     "SaaS": "SaaS does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming."
// },
// {
//     "C": "C is (mostly) a subset of C++.",
//     "Cpp": "C++ is (mostly) a superset of C.",
//     "Java": "Java is (mostly) a subset of C++.",
//     "python": "python is (mostly) a superset of C.",
//     "SaaS": "SaaS is (mostly) a subset of C++."
// },
// {
//     "C": "Data and functions are separated in C because it is a procedural programming language.",
//     "Cpp": "Data and functions are encapsulated together in form of an object in C++.",
//     "Java": "Data and functions are separated in Java because it is a procedural programming language.",
//     "python": "Data and functions are encapsulated together in form of an object in python.",
//     "SaaS": "Data and functions are separated in SaaS because it is a procedural programming language."
// },
// {
//     "C": "C does not support information hiding.",
//     "Cpp": "Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended.",
//     "Java": "Java does not support information hiding.",
//     "python": "Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended.",
//     "SaaS": "SaaS does not support information hiding."
// }
// ];

  // lists :Array<String> = [ "C" , "C++","Java","python","SaaS"];

  // listsC :String[] = new Array("C was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","C does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.","C is (mostly) a subset of C++.","Data and functions are separated in C because it is a procedural programming language.","C does not support information hiding.")
  // listsCt1 :String[] = new Array("C++ was developed by Bjarne Stroustrup in 1979.","C++ supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.","C++ is (mostly) a superset of C.","Data and functions are encapsulated together in form of an object in C++.","Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended.")
  // listsCt2 :String[] = new Array("Java was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","Java does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.","Java is (mostly) a subset of C++.","Data and functions are separated in Java because it is a procedural programming language.","Java does not support information hiding.")
  // listsCt3 :String[] = new Array("python was developed by Bjarne Stroustrup in 1979.","python supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.","python is (mostly) a superset of C.","Data and functions are encapsulated together in form of an object in python.","Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended.")
  // listsCt4 :String[] = new Array("Saas was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","Saas does no support polymorphism, encapsulation, and inheritance which means that Saas does not support object oriented programming.","Saas is (mostly) a subset of C++.","Data and functions are separated in Saas because it is a procedural programming language.","Saas does not support information hiding.")
  // li = this.listsC.concat(this.listsCt1,this.listsCt2,this.listsCt3,this.listsCt4);
  
  Users: Array<USERS> = [
    {
      "name":"C",
      "content1":"C was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.",
      "content2": "C does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.",
      "content3": "C is (mostly) a subset of C++.",
      "content4": "Data and functions are separated in C because it is a procedural programming language.",
      "content5": "C does not support information hiding."
    },
    {
      "name":"C++",
      "content1": "C++ was developed by Bjarne Stroustrup in 1979.",
      "content2": "C++ supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.",
      "content3":"C++ is (mostly) a superset of C.",
      "content4":"Data and functions are encapsulated together in form of an object in C++.",
      "content5":"Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended."
    },
    {
      "name":"Java",
      "content1":"Java was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.",
      "content2":"Java does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.",
      "content3":"Java is (mostly) a subset of C++.",
      "content4":"Data and functions are separated in Java because it is a procedural programming language.",
      "content5":"Java does not support information hiding."
    },
    {
      "name":"python",
      "content1": "python was developed by Bjarne Stroustrup in 1979.",
      "content2": "python supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.",
      "content3":"python is (mostly) a superset of C.",
      "content4":"Data and functions are encapsulated together in form of an object in python.",
      "content5":"Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended."
    },
    {
      "name":"SaaS",
      "content1":"SaaS was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.",
      "content2": "SaaS does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.",
      "content3": "SaaS is (mostly) a subset of C++.",
      "content4": "Data and functions are separated in SaaS because it is a procedural programming language.",
      "content5": "SaaS does not support information hiding."
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
