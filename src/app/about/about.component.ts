import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lists :Array<String> = [ "C" , "C++","Java","python","SaaS"];
  listsC :Array<String> = ["C was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","C does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.","C is (mostly) a subset of C++.","Data and functions are separated in C because it is a procedural programming language.","C does not support information hiding."]
  listsCt1 :Array<String> = ["C++ was developed by Bjarne Stroustrup in 1979.","C++ supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.","C++ is (mostly) a superset of C.","Data and functions are encapsulated together in form of an object in C++.","Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended."]
  listsCt2 :Array<String> = ["Java was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","Java does no support polymorphism, encapsulation, and inheritance which means that C does not support object oriented programming.","Java is (mostly) a subset of C++.","Data and functions are separated in Java because it is a procedural programming language.","Java does not support information hiding."]
  listsCt3 :Array<String> = ["python was developed by Bjarne Stroustrup in 1979.","python supports polymorphism, encapsulation, and inheritance because it is an object oriented programming language.","python is (mostly) a superset of C.","Data and functions are encapsulated together in form of an object in python.","Data is hidden by the Encapsulation to ensure that data structures and operators are used as intended."]
 listsCt4 :Array<String> = ["Saas was developed by Dennis Ritchie between the year 1969 and 1973 at AT&T Bell Labs.","Saas does no support polymorphism, encapsulation, and inheritance which means that Saas does not support object oriented programming.","Saas is (mostly) a subset of C++.","Data and functions are separated in Saas because it is a procedural programming language.","Saas does not support information hiding."]

  // listsC :Array<String> = ['C1', 'C2', 'C3'];
  // listsCt1 :Array<String> = ['Ct1', 'Ct12', 'Ct13'];
  // listsCt2 :Array<String> = ['Ct21', 'Ct22', 'Ct23'];
  // listsCt3 :Array<String> = ['Ct31', 'Ct32', 'Ct33'];
  // listsCt4 :Array<String> = ['Ct41', 'Ct42', 'Ct43'];
  constructor() { }

  ngOnInit(): void {
  }

}
