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
            <br>
            <p>Scalability is an important aspect of system design that refers to the ability of a system to handle increased workloads and growing demands without sacrificing performance or stability. A scalable system can efficiently accommodate a growing number of users, data, or requests by adapting and expanding its resources.
            <br>
            Here are some key considerations for achieving scalability in system design:
            <ul>
            <li><h3>Horizontal Scaling:</h3> One common approach to scalability is horizontal scaling, which involves adding more machines or instances to distribute the load. This can be achieved through techniques like load balancing, where incoming requests are distributed across multiple servers.</li>
            <li><h3>Vertical Scaling:</h3> Vertical scaling involves increasing the resources (such as CPU, memory, or storage) of individual machines to handle increased loads. This approach can be limited by the maximum capacity of a single machine, but it can be effective for certain workloads that require high-performance hardware.</li>
            <li><h3>Stateless Architecture:</h3> Building a stateless architecture, where the system does not rely on storing session or user-specific data, can help improve scalability. By avoiding the need to maintain session state, the system can easily scale horizontally without any constraints on routing requests to different instances.</li>
            <li><h3>Caching:</h3> Caching mechanisms can significantly improve scalability by reducing the load on backend systems. Caching frequently accessed data or computed results can help minimize the need for expensive operations and database queries, resulting in faster response times and increased capacity.</li>
            <li><h3>Distributed Systems:</h3> Designing a system as a distributed architecture can enhance scalability. Distributing different components or services across multiple machines or data centers allows for better resource utilization and can handle increased loads by adding more instances as needed.</li>
            <li><h3>Database Design:</h3> Proper database design, such as sharding or partitioning, can help distribute the data across multiple database instances and improve scalability. Additionally, using NoSQL databases or caching mechanisms can provide better scalability for specific use cases.</li>
            <li><h3>Monitoring and Auto-scaling:</h3> Implementing robust monitoring and performance tracking mechanisms enables the system to dynamically adjust resources based on demand. Automated scaling solutions can automatically provision or de-provision resources based on predefined thresholds or policies.</li>
            </ul>
            </p>
            `,
          },
          {
            title:'Availability',
            content:`
            <h1>Availability</h1>
            <br>
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
          },
          {
            title:'Reliability',
            content:`
            <h1>Reliability</h1>
             <br>
            <p>
            Reliability is a critical aspect of system design that focuses on ensuring the system operates consistently and performs its intended functions accurately over an extended period. A reliable system is one that minimizes downtime, data loss, and errors, and maintains a high level of availability and performance. Here are some key considerations for achieving reliability in system design:
            <br>
            <ul>
            <li><h3>Redundancy and Fault Tolerance:</h3> Incorporate redundancy and fault-tolerant mechanisms to ensure that failures or disruptions in individual components do not bring down the entire system. This can involve using backup servers, redundant network connections, and replicated data storage to provide failover and mitigate single points of failure.</li>
            <li><h3>Automated Monitoring and Failure Detection:</h3> Implement robust monitoring systems that continuously track the health and performance of the system. Automated alerts and notifications can quickly detect failures, anomalies, or performance degradation, allowing for timely intervention and proactive maintenance.</li>
            <li><h3>Load Balancing:</h3> Utilize load balancing techniques to evenly distribute incoming traffic across multiple servers or instances. Load balancers can help optimize resource utilization, prevent overloading of specific components, and ensure that the system can handle increased loads without compromising reliability.</li>
            <li><h3>Disaster Recovery and Backup Strategies:</h3> Develop comprehensive disaster recovery and backup strategies to protect critical data and ensure quick system recovery in the event of unforeseen incidents. Regular backups, off-site storage, and well-defined recovery processes are essential to minimize data loss and downtime.</li>
            <li><h3>Error Handling and Graceful Degradation:</h3> Implement robust error handling mechanisms that gracefully handle failures, exceptions, and edge cases. Provide informative error messages, implement retry mechanisms for transient errors, and design fallback options or degraded functionality to ensure that the system can continue to operate even when certain components are unavailable.</li>
            <li><h3>Scalable Architecture:</h3> A scalable architecture that can handle increased loads and growth is closely tied to reliability. By designing the system to be scalable (as discussed in the previous response), it can effectively accommodate increased demands without sacrificing performance or stability.</li>
            <li><h3>Performance Optimization:</h3> Optimize system performance to ensure efficient resource utilization and minimize response times. This can involve techniques such as caching, query optimization, efficient algorithms, and code optimization. By reducing bottlenecks and optimizing performance, the system becomes more reliable and can handle higher workloads.</li>
            <li><h3>Testing and Monitoring in Production:</h3> Thoroughly test the system under realistic conditions to identify potential weaknesses, performance issues, or edge cases. Continuous monitoring in production allows for proactive identification of reliability issues and the implementation of necessary optimizations or fixes.</li>
            <li><h3>Documentation and Knowledge Transfer:</h3> Maintain comprehensive documentation that includes system architecture, configurations, deployment processes, and recovery procedures. This ensures that knowledge about the system is properly transferred and can be easily accessed by the development team, operations team, or future maintainers.</li>
            </ul>
            </p>
            `,
          },
          {
            title:'Performance',
            content:`
                  <h1>Performance</h1>
                  <br>
                  <p>
                  Performance is a critical aspect of system design that focuses on optimizing the speed, responsiveness, and efficiency of a system. A high-performance system delivers quick response times, handles increased workloads efficiently, and maximizes resource utilization. Here are some key considerations for achieving performance in system design:
                <br>
                <ul>
                <li><h3>Efficient Algorithms and Data Structures:</h3> Choose algorithms and data structures that are optimized for the specific requirements of your system. Analyze the computational complexity and choose algorithms that provide the best performance characteristics for your use case. Optimize data structures to minimize memory usage and improve access and manipulation times.</li>
                <li><h3>Caching:</h3> Implement caching mechanisms to store frequently accessed data or computation results. Caching can significantly improve performance by reducing the need for expensive calculations or database queries. Consider using in-memory caches or distributed caching systems to minimize latency and enhance scalability.</li>
                <li><h3>Database Optimization:</h3> Optimize database queries, schema design, and indexing to improve query performance and reduce database load. Analyze query execution plans, eliminate redundant or inefficient queries, and ensure that database indexes are properly designed and maintained.</li>
                <li><h3>Asynchronous and Parallel Processing:</h3> Utilize asynchronous and parallel processing techniques to handle concurrent or time-consuming tasks. Asynchronous programming allows the system to continue processing other tasks while waiting for I/O operations, improving overall responsiveness. Parallel processing can be used for computationally intensive operations to leverage the capabilities of multi-core processors.</li>
                <li><h3>Resource Utilization:</h3> Optimize resource utilization to maximize system performance. This involves efficient use of CPU, memory, network bandwidth, and disk I/O. Minimize resource contention and ensure that the system is properly tuned to utilize available resources effectively.</li>
                <li><h3>Performance Testing and Profiling:</h3> Conduct rigorous performance testing to identify bottlenecks, analyze system behavior under different workloads, and optimize performance. Use profiling tools to identify areas of the code or database queries that are causing performance issues. Continuously monitor system performance to detect and resolve any performance degradation or anomalies.</li>
                <li><h3>Horizontal and Vertical Scaling: </h3>Consider both horizontal and vertical scaling techniques to improve performance. Horizontal scaling involves adding more machines or instances to distribute the workload, while vertical scaling involves increasing the resources (such as CPU, memory, or storage) of individual machines. Choose the appropriate scaling approach based on the specific requirements and constraints of your system.</li>
                <li><h3>Network Optimization:</h3> Minimize network latency by optimizing network protocols, reducing the size of data transferred, and leveraging content delivery networks (CDNs) or edge caching. Use efficient compression techniques and minimize the number of round trips required for communication.</li>
                <li><h3>Code and Database Optimization: </h3>Write efficient and optimized code by following best practices, avoiding unnecessary computations or I/O operations, and optimizing loops and data access. Optimize database transactions, minimize locking, and use appropriate isolation levels to reduce contention and improve performance.</li>
                <li><h3>System Monitoring and Tuning:</h3> Implement comprehensive monitoring and logging mechanisms to track system performance and identify potential performance issues. Continuously monitor key performance indicators (KPIs) and metrics to detect anomalies or degradation. Use monitoring data to tune system configurations, optimize resource allocation, and identify areas for further performance improvements.</li>
                </ul>  
                </p>
            `,
          },
          {
            title:'Security',
            content:`
            <h1>Security</h1>
            <p>
            Security is a crucial aspect of system design that focuses on protecting the system and its data from unauthorized access, data breaches, and malicious attacks. Building a secure system involves implementing various measures to ensure confidentiality, integrity, and availability of the system and its resources. Here are some key considerations for achieving security in system design:
              <br>
              <ul>
              <li><h3>Authentication and Authorization: </h3>Implement robust authentication mechanisms to verify the identity of users and ensure that only authorized individuals can access the system. Use secure protocols and industry-standard authentication methods such as username/password, multi-factor authentication (MFA), or token-based authentication. Implement fine-grained authorization controls to enforce access restrictions based on user roles and permissions.</li>
              <li><h3>Secure Communication:</h3> Use secure communication protocols such as HTTPS/TLS to encrypt data transmitted over the network and protect it from eavesdropping or tampering. Apply secure configurations to web servers, load balancers, and other network components to mitigate vulnerabilities.</li>
              <li><h3>Input Validation and Sanitization:</h3> Validate and sanitize all user inputs to prevent common security vulnerabilities such as cross-site scripting (XSS), SQL injection, or command injection attacks. Implement server-side input validation and use parameterized queries or prepared statements to prevent injection attacks.</li>
              <li><h3>Secure Data Storage:</h3> Protect sensitive data by properly encrypting it at rest. Utilize strong encryption algorithms and securely manage encryption keys. Employ techniques like hashing and salting for passwords or sensitive data stored in databases to enhance security.</li>
              <li><h3>Defense-in-Depth:</h3> Implement multiple layers of security controls to ensure a layered defense approach. This includes measures such as firewalls, intrusion detection/prevention systems (IDS/IPS), web application firewalls (WAFs), and security monitoring systems. Employ network segmentation and logical separation of components to limit the impact of potential security breaches.</li>
              <li><h3>Regular Security Updates and Patch Management:</h3> Keep all software components and libraries up to date with the latest security patches and updates. Establish a process for regular vulnerability scanning and penetration testing to identify and address potential security vulnerabilities in the system.</li>
              <li><h3>Secure Configuration Management:</h3> Follow secure configuration practices for all components, including operating systems, web servers, databases, and third-party libraries. Disable unnecessary services, apply least privilege principles, and enforce strong passwords and access controls.</li>
              <li><h3>Secure Error Handling:</h3> Implement proper error handling mechanisms to prevent sensitive information from being exposed in error messages. Provide generic error messages to users and log detailed error information securely for troubleshooting purposes.</li>
              <li><h3>Logging and Auditing:</h3> Implement comprehensive logging and auditing mechanisms to capture and monitor system activities. Log security-related events, user actions, and system changes to detect suspicious behavior and facilitate forensic analysis in case of security incidents.</li>
              <li><h3>Employee Education and Security Awareness:</h3> Train employees and stakeholders on security best practices, social engineering risks, and the importance of protecting sensitive information. Foster a security-aware culture and regularly educate users about potential security threats and countermeasures.</li>
              <li><h3>Security Testing:</h3> Conduct thorough security testing, including penetration testing and vulnerability assessments, to identify and address any security weaknesses. Use tools and frameworks to simulate real-world attack scenarios and validate the effectiveness of security controls.</li>
            </ul>
              </p>
            `,
            
          },
          {
            title:'Maintainability',
            content:`
            <h1>Maintainability</h1>
            <br>
            <p>
            Maintainability is an essential aspect of system design that focuses on designing systems that are easy to understand, modify, and maintain over time. A maintainable system allows for efficient troubleshooting, bug fixes, feature enhancements, and overall system management. Here are some key considerations for achieving maintainability in system design:
            <br>
            <ul>
            <li><h3>Modular and Modular Design:</h3> Design the system with a modular and component-based architecture. Divide the system into smaller, independent modules with well-defined responsibilities and interfaces. This allows for easier understanding, testing, and modification of individual components without impacting the entire system.</li>
            <li><h3>Code Readability and Documentation:</h3> Write clean, self-explanatory code with consistent coding standards. Use meaningful variable and function names, comment strategically, and provide documentation to aid developers in understanding the codebase. Well-documented code and architectural diagrams can significantly reduce the learning curve for new developers and facilitate ongoing maintenance.</li>
            <li><h3>Loose Coupling and High Cohesion:</h3> Design components with loose coupling, meaning they have minimal dependencies on other components. This allows for easier replacement or modification of individual components without affecting the entire system. Aim for high cohesion within each component, ensuring that its internal parts and functionality are closely related and focused.</li>
            <li><h3>Documentation:</h3> Maintain thorough and up-to-date documentation that covers system architecture, design decisions, configuration instructions, and any specific implementation details. This documentation serves as a valuable resource for developers, system administrators, and future maintainers, enabling them to understand the system and make necessary modifications efficiently.</li>
            <li><h3>Automated Testing:</h3> Implement comprehensive automated testing, including unit tests, integration tests, and end-to-end tests. Test cases should cover critical functionalities and edge cases to ensure that modifications or enhancements do not introduce regressions. Automated tests act as a safety net, allowing developers to confidently make changes and refactor code while ensuring system functionality remains intact.</li>
            <li><h3>Version Control:</h3> Use a version control system (e.g., Git) to manage and track code changes. Properly structure repositories, create meaningful commit messages, and utilize branching strategies to facilitate collaboration and simplify code rollback or reverting to previous versions if needed.</li>
            <li><h3>Error Logging and Monitoring:</h3> Implement error logging and monitoring mechanisms that capture system errors, exceptions, and performance issues. Logging provides valuable insights into system behavior and helps identify areas that require maintenance or improvement. Properly instrumented logging and monitoring enable proactive maintenance by quickly detecting issues and facilitating effective troubleshooting.</li>
            <li><h3>Dependency Management:</h3> Manage system dependencies effectively by using package managers or dependency management tools. Keep dependencies up to date to benefit from bug fixes and performance improvements. Regularly review and evaluate dependencies to ensure they are still actively maintained and align with the long-term goals of the system.</li>
            <li><h3>Continuous Integration and Deployment:</h3> Implement a robust CI/CD (Continuous Integration/Continuous Deployment) pipeline to automate the build, test, and deployment processes. This ensures that modifications are thoroughly tested and deployed consistently, reducing manual errors and simplifying maintenance tasks.</li>
            <li><h3>Empowerment and Knowledge Transfer:</h3> Foster an environment that encourages knowledge sharing and provides opportunities for developers to enhance their skills. Facilitate ongoing training, pair programming, code reviews, and mentoring to ensure that multiple team members understand different parts of the system and can effectively maintain and improve it.</li>
            </ul>
            </p>
            `,
          },
          {
            title:'Extensibility',
            content:`
            <h1>Extensibility</h1>
            <br>
             <p>
             Extensibility is an important aspect of system design that focuses on the ability to easily enhance or extend the functionality of a system without requiring significant modifications to the existing codebase. An extensible system can accommodate new features, requirements, or changes with minimal effort and disruption. Here are some key considerations for achieving extensibility in system design:
              <br>
              <ul>
              <li><h3>Modular and Component-Based Architecture:</h3> Design the system using a modular architecture that promotes loose coupling and separation of concerns. Components should have well-defined interfaces and clearly delineated responsibilities. This allows for the addition or replacement of components without impacting the rest of the system.</li>
              <li><h3>Abstraction and Encapsulation:</h3> Utilize abstraction and encapsulation principles to hide internal implementation details and expose a clean and stable interface. By defining clear contracts and encapsulating implementation details, the system can be extended without affecting existing functionality.</li>
              <li><h3>Open/Closed Principle:</h3> Follow the Open/Closed Principle, which states that software entities should be open for extension but closed for modification. Design the system in a way that new features or behaviors can be added through extension points or hooks, without the need to modify existing code.</li>
              <li><h3>Design Patterns:</h3> Utilize design patterns such as the Strategy Pattern, Observer Pattern, or Factory Pattern, which promote flexibility and extensibility. These patterns provide well-established approaches for adding new behaviors, decoupling dependencies, and facilitating future modifications.</li>
              <li><h3>Plugin System:</h3> Implement a plugin system that allows for the addition of new functionality through dynamically loaded modules or extensions. This enables third-party developers or teams to develop plugins that seamlessly integrate with the core system and extend its capabilities.</li>
              <li><h3>Configuration and Customization:</h3> Provide configuration options or settings that allow users or administrators to customize the behavior of the system without modifying the underlying code. This allows for flexible adaptation to different use cases or specific requirements.</li>
              <li><h3>API Design:</h3> If the system exposes APIs (Application Programming Interfaces) for integration with external systems or for use by developers, design the APIs to be flexible and versioned. Consider future needs and ensure that APIs can be extended or modified without breaking existing integrations.</li>
              <li><h3>Documentation and Examples:</h3> Provide comprehensive documentation and examples that guide developers on how to extend the system. Clearly explain the extension points, interfaces, and conventions to follow when adding new functionality. This empowers developers to extend the system effectively.</li>
              <li><h3>Testing and Quality Assurance:</h3> Implement comprehensive unit tests, integration tests, and regression tests to ensure that extensions or modifications do not introduce regressions or break existing functionality. Automated testing ensures the stability and integrity of the system during extensibility efforts.</li>
              <li><h3>Collaboration and Community:</h3> Foster a collaborative environment and encourage engagement with the developer community. Support forums, developer documentation, and dedicated channels for discussing system extensions can facilitate knowledge sharing and provide valuable insights for enhancing extensibility.</li>
             </ul>
              </p>
              `,
          },
          {
            title:'Modularity',
            content:`
            <h1>Modularity</h1>
            <br>
            <p>
            Extensibility is an important aspect of system design that focuses on the ability to easily enhance or extend the functionality of a system without requiring significant modifications to the existing codebase. An extensible system can accommodate new features, requirements, or changes with minimal effort and disruption. Here are some key considerations for achieving extensibility in system design:
             <br>
             <ul>
             <li><h3>Modular and Component-Based Architecture:</h3> Design the system using a modular architecture that promotes loose coupling and separation of concerns. Components should have well-defined interfaces and clearly delineated responsibilities. This allows for the addition or replacement of components without impacting the rest of the system.</li>
             <li><h3>Abstraction and Encapsulation:</h3> Utilize abstraction and encapsulation principles to hide internal implementation details and expose a clean and stable interface. By defining clear contracts and encapsulating implementation details, the system can be extended without affecting existing functionality.</li>
             <li><h3>Open/Closed Principle:</h3> Follow the Open/Closed Principle, which states that software entities should be open for extension but closed for modification. Design the system in a way that new features or behaviors can be added through extension points or hooks, without the need to modify existing code.</li>
             <li><h3>Design Patterns:</h3> Utilize design patterns such as the Strategy Pattern, Observer Pattern, or Factory Pattern, which promote flexibility and extensibility. These patterns provide well-established approaches for adding new behaviors, decoupling dependencies, and facilitating future modifications.</li>
             <li><h3>Plugin System:</h3> Implement a plugin system that allows for the addition of new functionality through dynamically loaded modules or extensions. This enables third-party developers or teams to develop plugins that seamlessly integrate with the core system and extend its capabilities.</li>
             <li><h3>Configuration and Customization:</h3> Provide configuration options or settings that allow users or administrators to customize the behavior of the system without modifying the underlying code. This allows for flexible adaptation to different use cases or specific requirements.</li>
             <li><h3>API Design:</h3> If the system exposes APIs (Application Programming Interfaces) for integration with external systems or for use by developers, design the APIs to be flexible and versioned. Consider future needs and ensure that APIs can be extended or modified without breaking existing integrations.</li>
             <li><h3>Documentation and Examples:</h3> Provide comprehensive documentation and examples that guide developers on how to extend the system. Clearly explain the extension points, interfaces, and conventions to follow when adding new functionality. This empowers developers to extend the system effectively.</li>
             <li><h3>Testing and Quality Assurance:</h3> Implement comprehensive unit tests, integration tests, and regression tests to ensure that extensions or modifications do not introduce regressions or break existing functionality. Automated testing ensures the stability and integrity of the system during extensibility efforts.</li>
             <li><h3>Collaboration and Community:</h3> Foster a collaborative environment and encourage engagement with the developer community. Support forums, developer documentation, and dedicated channels for discussing system extensions can facilitate knowledge sharing and provide valuable insights for enhancing extensibility.</li>
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
