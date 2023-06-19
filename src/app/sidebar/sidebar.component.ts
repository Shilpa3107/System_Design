import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  isCollapsed: boolean = false;
  topics: Array<any> = [
    {
      topic: 'Introduction to System Design',
      subtopic:
        [
          {
            title: 'Importance of system design',
            content: `
            <h1>Importance of System Design</h1>
            <p>In today's digital world, system design has become an essential skill for software engineers and other professionals working in the tech industry. System design involves the process of designing, developing, and deploying a system that is capable of fulfilling a specific set of requirements. It is a complex process that requires a deep understanding of the system’s architecture and its components. Learning system design can help software engineers develop a better understanding of their system’s underlying structure and its components. It also helps them identify potential problems before they become too costly to fix. Furthermore, system design can help improve the performance of a system and ensure that it meets the desired requirements.</p>
            <br>
            <p><h3>System design is a critical skill for software engineers.</h3>
            <ul>
            <li>It allows them to scale applications and create efficient architectures that are resilient and performant. </li>
            <li>Understanding system design helps engineers to think in an abstract way and come up with solutions to complex problems. </li>
            <li>It also enables them to communicate effectively with other engineers, architects, and stakeholders. </li>
            <li>System design involves understanding the requirements of a system and designing an architecture that meets those requirements. This includes understanding the trade-offs between scalability, cost, performance, reliability, and maintainability.</li>
            <li>It also involves understanding the best practices and architectural patterns to use in order to make the system as robust as possible.</li>
            </ul>
            </p>
            `,
          },
          {
            title:'Principles of good system design',
            content: `
            <h1>System Design Fundamnets</h3>
            <p>
            When it comes to system design, there are several principles and best practices that can help ensure a good design. Here are some key principles to keep in mind:
            <ul>
            <li><h3>Scalability:</h3> The system should be able to handle increased workload and user traffic without sacrificing performance. It should be designed to scale horizontally or vertically by adding more resources or distributing the workload across multiple servers.</li>
            <li><h3>Reliability:</h3> The system should be highly reliable and available, minimizing downtime and ensuring continuous operation. This can be achieved through redundancy, fault tolerance, and appropriate error handling mechanisms.</li>
            <li><h3>Maintainability:</h3> The system should be easy to maintain and update. It should have a modular and loosely coupled architecture, clean and readable code, and clear documentation. This allows for easier bug fixes, enhancements, and future modifications.</li>
             <li><h3>Performance:</h3> The system should be designed to deliver high performance and responsiveness. This involves optimizing algorithms, database queries, network communication, and utilizing caching and indexing techniques.</li>
             <li><h3>Security:</h3> The system should be secure, protecting sensitive data and preventing unauthorized access. It should employ authentication, authorization, encryption, and other security measures to mitigate potential vulnerabilities.</li>
             <li><h3>Extensibility:</h3> The system should be flexible and extensible to accommodate future requirements and business needs. It should allow for easy integration with external services or APIs and support new features or functionality without major architectural changes.</li>
             <li><h3>Usability:</h3> The system should provide a good user experience and be intuitive to use. It should have a user-friendly interface, clear navigation, and appropriate feedback to users.</li>
             <li><h3>Cost-effectiveness:</h3> The system should be designed to optimize resource utilization and minimize operational costs. This can involve using cost-effective infrastructure, efficient algorithms, and scalable architecture to ensure efficient resource allocation.</li>
             <li><h3>Testing and Debugging:</h3> The system should be thoroughly tested at various levels, including unit tests, integration tests, and end-to-end tests. Proper logging, monitoring, and error handling mechanisms should be in place to facilitate debugging and troubleshooting.</li>
             <li><h3>Compliance and Standards:</h3> The system should adhere to relevant industry standards, regulations, and compliance requirements. This includes data privacy laws, accessibility standards, and any other applicable regulations.</li>
           </ul>
             </p>
            `,
          },
          {
            title:'System design process overview',
            content: `
            <h1>System Design process overview</h1>
            <p>
            The system design process involves planning, analyzing, and defining the architecture and components of a software system. Here is an overview of the system design process:
            <br>
            <ul>
            <li><h3>Requirements Gathering:</h3> Understand and gather requirements from stakeholders, including functional and non-functional requirements. This involves meetings, interviews, and documentation review to capture the system's purpose, features, constraints, and expectations.</li>
            <li><h3>System Analysis:</h3> Analyze the gathered requirements to identify the system's key components, workflows, and interactions. Identify user roles, system boundaries, and external dependencies. Create use cases, activity diagrams, and sequence diagrams to visualize the system's behavior.</li>
            <li><h3>Architectural Design:</h3> Define the system's overall architecture. Identify the major components, their relationships, and how they interact. Consider different architectural patterns such as client-server, microservices, or event-driven architectures. Determine technologies, frameworks, and platforms that best fit the system's requirements.</li>
            <li><h3>Component Design:</h3> Design the individual components/modules of the system. Define the responsibilities, interfaces, and interactions of each component. Consider factors such as modularity, reusability, and separation of concerns. Use appropriate design patterns and principles to guide the component design.</li>
            <li><h3>Data Design:</h3> Design the data model and database schema for the system. Identify the entities, relationships, and attributes. Determine the data storage and retrieval mechanisms, such as relational databases, NoSQL databases, or file systems. Optimize the data design for performance, scalability, and data integrity.</li>
            <li><h3>User Interface Design:</h3> Design the user interface (UI) for the system. Create wireframes, mockups, or prototypes to visualize the user interactions and screen layouts. Consider usability principles, accessibility, and responsive design. Define the navigation flow, input validation, and feedback mechanisms.</li>
            <li><h3>Security Design:</h3> Design the security mechanisms and controls to protect the system from unauthorized access, data breaches, and vulnerabilities. Consider authentication, authorization, encryption, and secure communication protocols. Apply security best practices and standards relevant to the system's domain.</li>
            <li><h3>Performance Design:</h3> Design for optimal system performance. Identify potential bottlenecks and areas of optimization. Consider factors such as response time, throughput, and scalability. Apply performance testing and profiling techniques to ensure the system can handle expected workloads.</li>
            <li><h3>Integration and Interface Design:</h3> Design the interfaces and integration points with external systems, services, or APIs. Define the data formats, communication protocols, and error handling mechanisms. Consider interoperability, versioning, and compatibility with external systems.</li>
             <li><h3>Documentation:</h3> Document the system design thoroughly. This includes architectural diagrams, component diagrams, data models, interface specifications, and any relevant design decisions or trade-offs. Documentation helps in system understanding, maintenance, and future enhancements.</li>
            <li><h3>Review and Iteration:</h3> Review the design with stakeholders, including developers, architects, and business representatives. Incorporate feedback and make necessary revisions. Iterate on the design until it meets the requirements, quality standards, and aligns with the overall project goals.</li>
            </ul>
            </p>
            `,
          }
        ],
     
    },
    
    {
        topic:'System Design Fundamentals',
        subtopic:
        [
          {
            title:'Scalability',
            content:`
            <h1>Scalability</h1>
            <p>Scalability refers to the ability of a system to handle increasing workloads and accommodate growth without sacrificing performance or stability. It involves designing and implementing a system that can efficiently and effectively scale up or out as demand or data volume increases. Scalability is crucial to ensure that a system can handle the growing needs of users and adapt to changing business requirements.
            <br>
             There are two main types of scalability:
            <ul>
            <li>Vertical Scalability (Scaling Up): Vertical scalability involves increasing the capacity of a single machine or server to handle higher workloads. This can be achieved by upgrading hardware components such as CPU, memory, or storage. Vertical scalability is limited by the maximum capacity of a single machine and can become expensive or impractical beyond certain limits.</li>
            <li>Horizontal Scalability (Scaling Out): Horizontal scalability involves adding more machines or servers to distribute the workload across multiple nodes. This is typically achieved by using techniques such as load balancing and distributed computing. Horizontal scalability allows for virtually unlimited expansion and provides better fault tolerance and performance by sharing the load among multiple machines.</li>
            </ul>
            </p>
            `,
          },
          {
            title:'Availability',
            content:`
            <h1>Availability</h1>
            <p>Availability in system design refers to the ability of a system to remain operational and accessible to users for an extended period of time. It is a measure of how reliable and accessible a system is, taking into account factors such as uptime, fault tolerance, and recovery from failures. High availability is essential for systems that require continuous operation and minimal downtime, especially for critical applications or services.
             <br>
            Here are some key considerations for achieving availability in system design:
            <ul>
            <li><h3>Redundancy:</h3> Introduce redundancy at various levels of the system architecture to minimize single points of failure. This can include redundant hardware components, network paths, servers, or data centers. Redundancy ensures that if one component fails, there are backup components ready to take over without interrupting the service.</li>
            <li><h3>Fault Tolerance:</h3> Design the system to be resilient to failures. Implement mechanisms to detect and handle failures, such as automatic failover, load balancing, and error recovery. Use techniques like replication, clustering, or distributed computing to ensure that even if individual components fail, the system as a whole remains operational.</li>
            <li><h3>Load Balancing:</h3> Distribute the workload across multiple servers or instances to prevent any single component from being overwhelmed. Load balancing ensures that requests are evenly distributed, optimizing resource utilization and preventing bottlenecks.</li>
            <li><h3>Monitoring and Alerting:</h3> Implement robust monitoring and alerting mechanisms to continuously monitor the system's health and performance. Monitor critical metrics such as CPU usage, memory usage, response times, and network latency. Set up alerts to notify system administrators or DevOps teams of any anomalies or potential issues.</li>
            <li><h3>Disaster Recovery Planning:</h3> Develop a comprehensive disaster recovery plan to handle major disruptions, such as natural disasters, power outages, or data center failures. This plan should include backup and restore procedures, data replication strategies, and offsite backups. Regularly test the disaster recovery plan to ensure its effectiveness.</li>
            <li><h3>Scalable Infrastructure:</h3> Design the system to scale horizontally or vertically to accommodate increasing demand. Ensure that the system can handle a growing user base without sacrificing availability. Implement auto-scaling mechanisms that automatically provision or deprovision resources based on workload or performance metrics.</li>
            <li><h3>High-Quality Infrastructure:</h3> Use reliable and high-quality infrastructure components, including servers, networking equipment, and storage systems. Invest in robust and redundant infrastructure to minimize hardware failures.</li>
            <li><h3>Proactive Maintenance:</h3> Regularly perform preventive maintenance tasks, such as software updates, patches, and hardware inspections. This helps identify and resolve potential issues before they cause system failures.</li>
            <li><h3>Testing and Simulations:</h3> Conduct rigorous testing to identify potential weaknesses and failure scenarios. Perform load testing, stress testing, and fault injection testing to assess the system's ability to handle high loads and recover from failures. Simulate various failure scenarios to ensure the system can gracefully handle them.</li>
            <li><h3>Documentation and Runbooks:</h3> Document the system's configuration, architecture, and recovery procedures in detailed runbooks. These resources serve as a reference during emergencies and ensure that the recovery process can be executed efficiently.</li>
            </ul>
            </p>
            `,
          }

        ]
    }
  ]

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/jsondata/topics.json').subscribe((data: any) => {
      console.log(data);
      this.topics = data.topics;
      // Use the data as needed in your component
    });
  }

  toggleSubtopics(topic: any) {
    topic.showSubtopics = !topic.showSubtopics;
  }

  

}
