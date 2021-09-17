import React, { Component } from "react";
import Title from "../components/Title";
import SideList from "../components/SideList";
import SideListItem from "../components/SideListItem";

import ResponsibilityList from "../components/ResponsibilityList";
import TickedListItem from "../components/TickedListItem";

class Experience extends Component {
  state = {
    organizations: [
      {
        id: "org-pts",
        name: "Python Technology Services",
      },
      {
        id: "org-ku",
        name: "Kabul University",
      },
      {
        id: "org-zps",
        name: "Zawul Professional Services",
      },
      { id: "org-az", active: false, name: "AZ Corp." },
      {
        id: "org-itck",
        name: "IT Center for Kabul University",
      },
    ],

    activeLink: "org-pts",

    jobs: [
      {
        id: "org-pts",
        title: "Sr. Software Engineer",
        duration: "March 2018 - April 2021",
        responsibilities: [
          "Worked on designing and developing of 5 Software as a Service products for Afghanistan’s market. Collected requirements and analyzed them using Unified Modeling Language (UML).",
          "Led the creative design team to collaborate over prototype using Adobe XD, implement HCI, and responsive design principles. As a result designed a system to support both LTR & RTL languages and gained 100% of customers satisfaction. Used lazy loading feature to reduce time to load which provided better user experience.",
          "Developed softwares by using Laravel as server side framework API and MySQL as a backend database. Used Reactjs and Bootstrap/Tailwindcss for frontend development. These products have been used by over 300 organizations with positive user experiences.",
          "Created multi-language docs and tutorials for softwares that increased customer’s satisfaction.",
          "Adopted Agile as a software development methodology resulted in effective management.",
        ],
      },
      {
        id: "org-ku",
        title: "Assistant Professor",
        duration: "April 2015 - April 2021",
        responsibilities: [
          "Kabul University is the largest and most reputed public university in Afghanistan. The main responsibilities I had was teaching and preparing curriculum for the Computer Science Faculty. I taught the following classes:",
          "Software Engineering I & II",
          "Programming & Object Oriented Programming using Algorithms and OOP concepts in Java",
          "Fundamentals of Databases using RDBMS specifically MySQL and SQLite",
          "Web Design and Development I & II using HTML, CSS, Bootstrap, Tailwind, and JavaScript",
          "Full Stack Web Development using Laravel, Vuejs and Reactjs",
        ],
      },
      {
        id: "org-zps",
        title: "Software Engineer",
        duration: "January 2014 - February 2018",
        responsibilities: [
          "Designed and developed multi-language Student Management Information System (SMIS) for university’s administration office resulted in increase in productivity by automating report generation processes and effective management.",
          "Developed SMIS using Laravel and used MySQL as a backend database, hosted locally in Apache server’s XAMPP package to reduce the access cost.",
          "Developed frontend web applications using Vuejs, and Bootstrap connected with backend API.",
          "Developed multi-language websites for institutes using Wordpress CMS with online chat and registration features. Customized the Wordpress theme to reflect requirements and reduced time to load up to 50% less than the previous websites.",
          "Implemented Slack platform for customer’s relation and support services resulted in improvement of communications and tracking user’s requests.",
        ],
      },
      {
        id: "org-az",
        title: "IT Manager",
        duration: "March 2010 - December 2010",
        responsibilities: [
          "Development of IT policy for AZ Corp",
          "Developing and mentanince of AZ Corp Servers",
          "Evaluated user needs and system functionality",
          "Assisted the IT support team of the AZ Corp’s projects",
          "Ensured that ICT facilities meet the needs of individuals and projects",
          "Mentored and trained new ICT support staff",
          "Kept up to date with the latest technologies",
          "Taught IT essentials to technical staff",
        ],
      },
      {
        id: "org-itck",
        title: "PC Technician",
        duration: "February 2007 - March 2010",
        responsibilities: [
          "Installed and configured computer hardware, Operating System and need applications of the PCs in Kabul University",
          "Maintenance of PCs from all faculties of Kabul University",
          "Troubleshoot system and network problems",
          "Diagnosed and solved hardware/software faults of systems",
          "Provided support for Kabul university staff including writing instruction documents",
          "Followed diagrams and provided instructions to troubleshoot a system or to set up a new system",
          "Instructing Kabul University students in order to provide the same service back to their faculties",
        ],
      },
    ],
  };

  // toggle activelink
  toggleActiveLinkHandler = (currentID) => {
    this.setState({ activeLink: currentID });
  };

  render() {
    // show all organization in SideList.
    let organizations = null;
    organizations = (
      <div>
        {this.state.organizations.map((organization) => {
          return (
            <SideListItem
              organization={organization}
              key={organization.id}
              activeLink={this.state.activeLink}
              handler={this.toggleActiveLinkHandler}
            ></SideListItem>
          );
        })}
      </div>
    );

    // show specific organization's description.
    let jobs = null;
    jobs = (
      <div>
        {this.state.jobs.map((job, id) => {
          if (job.id === this.state.activeLink) {
            return job.responsibilities.map((responsiblities, id) => {
              return (
                <TickedListItem
                  responsibility={responsiblities}
                  key={id}
                ></TickedListItem>
              );
            });
          }
        })}
      </div>
    );

    return (
      <div id="experience" name="experience" className="bg-main-darker h-screen px-20 py-20">
        <Title showLeftLine="hidden">Places I've Worked </Title>

        <div className="flex flex-row gap-10">
          <div className="flex-0">
            <SideList>{organizations}</SideList>
          </div>

          <div className="flex-1 text-white">
            <h1 className="text-2xl">
              {this.state.jobs.map((jobTitle) => {
                return jobTitle.id === this.state.activeLink
                  ? jobTitle.title
                  : "";
              })}
            </h1>
            <h1 className="text-sm pb-5 text-port-second">
              {this.state.jobs.map((jobDuration) => {
                return jobDuration.id === this.state.activeLink
                  ? jobDuration.duration
                  : "";
              })}
            </h1>
            <h2 className="text-lg">Responsibilities:</h2>
            <ResponsibilityList>{jobs}</ResponsibilityList>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
