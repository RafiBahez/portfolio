(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(10),r=s.n(n),c=(s(24),s(25),s(2)),o=s(3),l=s(11),d=s(5),h=s(4),j=s(6),p=s(0),u=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"static",children:Object(p.jsx)("div",{className:"absolute top-20 left-0 w-full bg-port-second",children:Object(p.jsxs)("div",{className:"flex flex-col justify-content-center text-center text-white my-4",children:[Object(p.jsx)("div",{className:"cursor-pointer hover:bg-second-darker py-2",children:Object(p.jsx)(j.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,children:"About"})}),Object(p.jsx)("div",{className:"cursor-pointer hover:bg-second-darker py-2",children:Object(p.jsx)(j.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,offset:50,duration:500,children:"Experience"})}),Object(p.jsx)("div",{className:"cursor-pointer hover:bg-second-darker py-2",children:Object(p.jsx)(j.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:"Contact"})}),Object(p.jsx)("div",{className:"cursor-pointer hover:bg-second-darker py-2",children:Object(p.jsx)("a",{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:"Resume"})})]})})})}}]),s}(a.Component),x=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={mobileMenuOpen:!1},a.toggleMobileMenu=a.toggleMobileMenu.bind(Object(l.a)(a)),a}return Object(o.a)(s,[{key:"toggleMobileMenu",value:function(){this.setState((function(e){return{mobileMenuOpen:!e.mobileMenuOpen}}))}},{key:"render",value:function(){return Object(p.jsx)("nav",{className:"bg-main-darkder shadow-lg mx-auto",children:Object(p.jsxs)("div",{className:"w-full container mx-auto p-6",children:[Object(p.jsxs)("div",{className:"flex items-center justify-between",children:[Object(p.jsx)("div",{className:"text-port-second uppercase",children:Object(p.jsx)("a",{href:"https://rafibahez.github.io/portfolio",children:"Bahez's Portfolio"})}),Object(p.jsx)("div",{className:"text-white",children:Object(p.jsxs)("ul",{className:"hidden md:flex flex-row items-center space-x-6",children:[Object(p.jsx)("li",{className:"cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main",children:Object(p.jsx)(j.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,children:"About"})}),Object(p.jsx)("li",{className:"cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main",children:Object(p.jsx)(j.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,offset:50,duration:500,children:"Experience"})}),Object(p.jsx)("li",{className:"cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main",children:Object(p.jsx)(j.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:"Contact"})}),Object(p.jsx)("li",{className:"border border-port-second cursor-pointer px-3 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main",children:Object(p.jsx)("a",{href:"#resume",children:"Resume"})})]})}),Object(p.jsx)("div",{className:"md:hidden flex items-center",children:Object(p.jsx)("button",{className:"focus:outline-none",onClick:this.toggleMobileMenu,children:Object(p.jsx)("svg",{class:" w-6 h-6 text-port-second ","x-show":"!showMenu",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{d:"M4 6h16M4 12h16M4 18h16"})})})})]}),Object(p.jsx)("div",{children:this.state.mobileMenuOpen?Object(p.jsx)(u,{}):""})]})})}}]),s}(a.Component),b=s.p+"static/media/profile.067aeba8.jpg",m=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{greeting:"Hi, my name is ",name:"Mohammad Rafi Bahez",designation:" I'm a Software Engineer",message:" I'm software engineer who specializes in building creative digital experiences. I learned and worked with many technologies over the past years."}},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"bg-main-darker h-screen w-full",children:Object(p.jsxs)("div",{className:"flex flex-row items-center py-20 sx:px-8 lg:px-20",children:[Object(p.jsxs)("div",{className:"flex-1",children:[Object(p.jsxs)("h3",{className:"text-white pb-5",children:[" ",this.state.viewData.greeting," "]}),Object(p.jsx)("h1",{className:"text-white sx:text-xl text-5xl md:text-2xl lg:text-5xl",children:this.state.viewData.name}),Object(p.jsx)("h2",{className:"text-port-gray md:text-xl lg:text-3xl",children:this.state.viewData.designation}),Object(p.jsxs)("p",{className:"text-white text-base md:w-8/12 pt-5 pb-14",children:[" ",this.state.viewData.message]}),Object(p.jsx)(j.Link,{className:"text-white border border-port-second cursor-pointer px-3 py-3 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main hover:border-main-darker",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:"Get in Touch"})]}),Object(p.jsx)("div",{className:"hidden md:flex w-60 h-60 flex-0 justify-start bg-second-darker rounded-xl mt-10",children:Object(p.jsx)("img",{className:"w-60 h-60 rounded-xl transform -translate-x-3 -translate-y-3 ",src:b})})]})})}}]),s}(a.Component),v=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(e){return Object(p.jsxs)("div",{className:"flex flex-row items-center gap-3 pt-10 pb-14",children:[Object(p.jsx)("div",{className:"hidden sm:block bg-second-darker h-1 w-32 "+this.props.showLeftLine}),Object(p.jsx)("div",{children:Object(p.jsxs)("h1",{className:"text-white text-3xl pb-5",children:[" ",this.props.children," "]})}),Object(p.jsx)("div",{className:"hidden sm:block bg-second-darker h-1 w-32"})]})}}]),s}(a.Component),f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{pageTitle:"About Me",aboutMe:"I have a masters degree in computer science from Technical University of Berlin. I\u2019ve been working as a software engineer, full stack web developer and university lecturer for over 10 years.",descriptionSkills:"Here are a few technologies that I\u2019ve been working with recently:",message:" I'm software engineer who specializes in building creative digital experiences. I learned and worked with many technologies over the past years."}},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"about",name:"about",className:"bg-main-darker h-screen w-full js-show-on-scroll",children:Object(p.jsxs)("div",{className:"py-20 sx:px-8 lg:px-20",children:[Object(p.jsx)(v,{showLeftLine:"hidden",children:this.state.viewData.pageTitle}),Object(p.jsx)("div",{className:"flex flex-row items-center",children:Object(p.jsxs)("div",{className:"flex-1",children:[Object(p.jsx)("p",{className:"text-white text-base pb-14",children:this.state.viewData.aboutMe}),Object(p.jsx)("p",{className:"text-white text-base pb-5",children:this.state.viewData.descriptionSkills}),Object(p.jsxs)("div",{className:"flex sx:flex-col md:flex-row text-white",children:[Object(p.jsxs)("div",{className:"flex flex-col space-2 pr-20",children:[Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"JavaScript"]}),Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Reactjs"]}),Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Vuejs"]})]}),Object(p.jsxs)("div",{className:"flex flex-col space-2 pr-20",children:[Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"PHP"]}),Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Laravel"]}),Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Wordpress"]})]}),Object(p.jsxs)("div",{className:"flex flex-col space-2 pr-20",children:[Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Sass / Less"]}),Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Tailwindcss"]}),Object(p.jsxs)("div",{className:"flex flex-row items-center",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second inline-block pr-2 h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Bootstrap"]})]})]})]})})]})})}}]),s}(a.Component),g=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("ul",{className:"bg-second-darker text-white",children:this.props.children})}}]),s}(a.Component),w=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsx)("li",{className:"py-3 px-4 pr-10 bg-port-second border-port-second cursor-pointer"+(this.props.organization.id===this.props.activeLink?" bg-second-darker":" opacity-50 "),onClick:function(){return e.props.handler(e.props.organization.id)},children:this.props.organization.name})}}]),s}(a.Component),O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("ul",{className:"py-2 text-sm",children:this.props.children})}}]),s}(a.Component),y=function(e){return Object(p.jsx)("li",{className:"pb-2",children:Object(p.jsxs)("div",{className:"flex flex-row justify-start items-center space-x-3",children:[Object(p.jsx)("div",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),Object(p.jsx)("div",{children:e.responsibility})]})})},k=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{pageTitle:"Places I've Worked"},organizations:[{id:"org-pts",name:"Python Technology Services"},{id:"org-ku",name:"Kabul University"},{id:"org-zps",name:"Zawul Professional Services"},{id:"org-az",active:!1,name:"AZ Corp."},{id:"org-itck",name:"IT Center for Kabul University"}],activeLink:"org-pts",activeClass:"animate-fadeIn",jobs:[{id:"org-pts",title:"Sr. Software Engineer",duration:"March 2018 - April 2021",location:"Kabul, Afghanistan",responsibilities:["Worked on designing and developing of 5 Software as a Service products for Afghanistan\u2019s market. Collected requirements and analyzed them using Unified Modeling Language (UML).","Led the creative design team to collaborate over prototype using Adobe XD, implement HCI, and responsive design principles. As a result designed a system to support both LTR & RTL languages and gained 100% of customers satisfaction. Used lazy loading feature to reduce time to load which provided better user experience.","Developed softwares by using Laravel as server side framework API and MySQL as a backend database. Used Reactjs and Bootstrap/Tailwindcss for frontend development. These products have been used by over 300 organizations with positive user experiences.","Created multi-language docs and tutorials for softwares that increased customer\u2019s satisfaction.","Adopted Agile as a software development methodology resulted in effective management."]},{id:"org-ku",title:"Assistant Professor",duration:"April 2015 - April 2021",location:"Kabul, Afghanistan",responsibilities:["Kabul University is the largest and most reputed public university in Afghanistan. The main responsibilities I had was teaching and preparing curriculum for the Computer Science Faculty. I taught the following classes:","Software Engineering I & II","Programming & Object Oriented Programming using Algorithms and OOP concepts in Java","Fundamentals of Databases using RDBMS specifically MySQL and SQLite","Web Design and Development I & II using HTML, CSS, Bootstrap, Tailwind, and JavaScript","Full Stack Web Development using Laravel, Vuejs and Reactjs"]},{id:"org-zps",title:"Software Engineer",duration:"January 2014 - February 2018",location:"Kabul, Afghanistan",responsibilities:["Designed and developed multi-language Student Management Information System (SMIS) for university\u2019s administration office resulted in increase in productivity by automating report generation processes and effective management.","Developed SMIS using Laravel and used MySQL as a backend database, hosted locally in Apache server\u2019s XAMPP package to reduce the access cost.","Developed frontend web applications using Vuejs, and Bootstrap connected with backend API.","Developed multi-language websites for institutes using Wordpress CMS with online chat and registration features. Customized the Wordpress theme to reflect requirements and reduced time to load up to 50% less than the previous websites.","Implemented Slack platform for customer\u2019s relation and support services resulted in improvement of communications and tracking user\u2019s requests."]},{id:"org-az",title:"IT Manager",duration:"March 2010 - December 2010",location:"Kabul, Afghanistan",responsibilities:["Development of IT policy for AZ Corp","Developing and mentanince of AZ Corp Servers","Evaluated user needs and system functionality","Assisted the IT support team of the AZ Corp\u2019s projects","Ensured that ICT facilities meet the needs of individuals and projects","Mentored and trained new ICT support staff","Kept up to date with the latest technologies","Taught IT essentials to technical staff"]},{id:"org-itck",title:"PC Technician",duration:"February 2007 - March 2010",location:"Kabul, Afghanistan",responsibilities:["Installed and configured computer hardware, Operating System and need applications of the PCs in Kabul University","Maintenance of PCs from all faculties of Kabul University","Troubleshoot system and network problems","Diagnosed and solved hardware/software faults of systems","Provided support for Kabul university staff including writing instruction documents","Followed diagrams and provided instructions to troubleshoot a system or to set up a new system","Instructing Kabul University students in order to provide the same service back to their faculties"]}]},e.toggleActiveLinkHandler=function(t){e.setState({activeLink:t})},e}return Object(o.a)(s,[{key:"render",value:function(){var e,t=this;e=Object(p.jsx)("div",{children:this.state.organizations.map((function(e){return Object(p.jsx)(w,{organization:e,activeLink:t.state.activeLink,handler:t.toggleActiveLinkHandler},e.id)}))});var s;return s=Object(p.jsx)("div",{children:this.state.jobs.map((function(e,s){if(e.id===t.state.activeLink)return e.responsibilities.map((function(e,t){return Object(p.jsx)(y,{responsibility:e},t)}))}))}),Object(p.jsx)("div",{id:"experience",name:"experience",className:"bg-main-darker w-full js-show-on-scroll",children:Object(p.jsxs)("div",{className:"py-20 sx:px-8 lg:px-20",children:[Object(p.jsx)(v,{showLeftLine:"hidden",children:this.state.viewData.pageTitle}),Object(p.jsxs)("div",{className:"flex sx:flex-col md:flex-row sx:space-x-0 md:space-x-10",children:[Object(p.jsx)("div",{className:"flex-0",children:Object(p.jsx)(g,{children:e})}),Object(p.jsxs)("div",{className:"flex-1 text-white sx:pt-6",children:[Object(p.jsx)("h1",{className:"text-2xl",children:this.state.jobs.map((function(e){return e.id===t.state.activeLink?e.title:""}))}),Object(p.jsx)("h1",{className:"text-sm text-port-second",children:this.state.jobs.map((function(e){return e.id===t.state.activeLink?e.duration:""}))}),Object(p.jsx)("h1",{className:"text-md pb-5 text-white",children:this.state.jobs.map((function(e){return e.id===t.state.activeLink?e.location:""}))}),Object(p.jsx)("h2",{className:"text-xl",children:"Responsibilities:"}),Object(p.jsx)(O,{children:s})]})]})]})})}}]),s}(a.Component),N=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{pageTitle:"Get in Touch",message:"My inbox is always open, if you have a question or want to get in touch say hello!"}},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"contact",name:"contact",className:"bg-main-darker h-screen w-full js-show-on-scroll",children:Object(p.jsxs)("div",{className:"flex flex-col items-center py-20 sx:px-8 lg:px-20",children:[Object(p.jsx)(v,{showLeftLine:"inline-block",children:this.state.viewData.pageTitle}),Object(p.jsxs)("h3",{className:"text-center text-white sx:text-lg md:text-xl pb-20",children:[this.state.viewData.message," "]}),Object(p.jsx)("div",{className:"flex justify-center",children:Object(p.jsx)("a",{href:"mailto:rafibahez@mail.com",className:"text-white border border-port-second cursor-pointer px-3 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main hover:border-main-darker",children:"Say Hello"})})]})})}}]),s}(a.Component),C=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{designedBy:"Designed and Developed by BAHEZ"}},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"contact",className:"h-20 flex sx:flex-col md:flex-row items-center justify-center bg-port-main space-x-10",children:[Object(p.jsx)("div",{className:"text-port-second sx:py-2 md:py-0",children:Object(p.jsx)("h2",{children:this.state.viewData.designedBy})}),Object(p.jsxs)("div",{className:"flex flex-row space-x-5 text-port-second sx:py-2 md:py-0",children:[Object(p.jsx)("h2",{children:"View Source"}),Object(p.jsx)("a",{href:"https://github.com/RafiBahez/portfolio",target:"_blank",children:Object(p.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-second-darker h-6 w-6",children:[Object(p.jsx)("title",{children:"GitHub"}),Object(p.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})})]})]})}}]),s}(a.Component),L=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{social_1:{name:"LinkedIn",url:"https://linkedin.com/in/rafibahez/"},Social_2:{name:"Twitter",url:"https://twitter.com/rafibahez"},Social_3:{name:"GitHub",url:"https://github.com/RafiBahez"}}},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"h-screen fixed",children:Object(p.jsxs)("div",{className:"h-screen w-16 flex flex-col justify-center space-y-10",children:[Object(p.jsx)("div",{className:"flex justify-center",children:Object(p.jsx)("a",{href:this.state.viewData.social_1.url,target:"_blank",rel:"noreferrer",children:Object(p.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-second-darker opacity-75 h-6 w-6",children:[Object(p.jsx)("title",{children:this.state.viewData.social_1.name}),Object(p.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]})})}),Object(p.jsx)("div",{className:"flex justify-center",children:Object(p.jsx)("a",{href:this.state.viewData.Social_2.url,target:"_blank",rel:"noreferrer",children:Object(p.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-second-darker opacity-75 h-6 w-6",children:[Object(p.jsx)("title",{children:this.state.viewData.Social_2.name}),Object(p.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})]})})}),Object(p.jsx)("div",{className:"flex justify-center",children:Object(p.jsx)("a",{href:this.state.viewData.Social_3.url,target:"_blank",rel:"noreferrer",children:Object(p.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-second-darker opacity-75 h-6 w-6",children:[Object(p.jsx)("title",{children:this.state.viewData.Social_3.name}),Object(p.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})})})]})})}}]),s}(a.Component),M=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{emailid:"rafibahez@gmail.com"}},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{class:"h-screen fixed",children:Object(p.jsx)("div",{className:"h-screen w-16 flex flex-col justify-center",children:Object(p.jsx)("h2",{className:"text-second-darker transform rotate-90 opacity-75 tracking-widest -m-12",children:this.state.viewData.emailid})})})}}]),s}(a.Component);var S=function(){return Object(p.jsxs)("div",{className:"App bg-main-darker",children:[Object(p.jsx)("div",{children:Object(p.jsx)(x,{})}),Object(p.jsxs)("div",{className:"grid grid-flow-col",children:[Object(p.jsx)("div",{className:"hidden md:block w-16 bg-port-main",children:Object(p.jsx)(L,{})}),Object(p.jsxs)("div",{className:"grid-cols-10",children:[Object(p.jsx)(m,{}),Object(p.jsx)(f,{}),Object(p.jsx)(k,{}),Object(p.jsx)(N,{}),Object(p.jsx)(C,{})]}),Object(p.jsx)("div",{className:"hidden md:block w-16 bg-port-main",children:Object(p.jsx)(M,{})})]})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"));var z=new IntersectionObserver((function(e){e.forEach((function(e){console.log(e),e.isIntersecting?e.target.classList.add("animate-fadeIn"):e.target.classList.remove("animate-fadeIn")}))}));document.querySelectorAll(".js-show-on-scroll").forEach((function(e){e.classList.add("opacity-0"),z.observe(e)})),D()}},[[37,1,2]]]);
//# sourceMappingURL=main.7ebb3c93.chunk.js.map