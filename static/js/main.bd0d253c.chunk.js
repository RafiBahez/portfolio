(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(10),r=a.n(n),c=(a(24),a(25),a(2)),o=a(3),l=a(11),d=a(5),h=a(4),j=a(6),u=a(0),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"static",children:Object(u.jsx)("div",{className:"absolute top-20 left-0 w-full bg-port-second",children:Object(u.jsxs)("div",{className:"flex flex-col justify-content-center text-center text-white my-4",children:[Object(u.jsx)(j.Link,{className:"cursor-pointer hover:bg-second-darker py-2",to:"about",spy:!0,smooth:!0,offset:50,duration:500,children:"About"}),Object(u.jsx)(j.Link,{className:"cursor-pointer hover:bg-second-darker py-2",to:"experience",spy:!0,smooth:!0,offset:50,duration:500,children:"Experience"}),Object(u.jsx)(j.Link,{className:"cursor-pointer hover:bg-second-darker py-2",to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:"Contact"}),Object(u.jsx)("div",{className:"cursor-pointer hover:bg-second-darker py-2",children:Object(u.jsx)("a",{className:"cursor-pointer hover:bg-second-darker py-2",to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:"Resume"})})]})})})}}]),a}(s.Component),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={mobileMenuOpen:!1},s.toggleMobileMenu=s.toggleMobileMenu.bind(Object(l.a)(s)),s}return Object(o.a)(a,[{key:"toggleMobileMenu",value:function(){this.setState((function(e){return{mobileMenuOpen:!e.mobileMenuOpen}}))}},{key:"render",value:function(){return Object(u.jsx)("nav",{className:"bg-main-darkder shadow-lg mx-auto",children:Object(u.jsxs)("div",{className:"w-full container mx-auto p-6",children:[Object(u.jsxs)("div",{className:"flex items-center justify-between",children:[Object(u.jsx)("div",{className:"text-port-second uppercase",children:Object(u.jsx)("a",{href:"https://rafibahez.github.io/portfolio",children:"Bahez's Portfolio"})}),Object(u.jsx)("div",{className:"text-white",children:Object(u.jsxs)("ul",{className:"hidden md:flex flex-row items-center space-x-6",children:[Object(u.jsx)("li",{className:"cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main",children:Object(u.jsx)(j.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,children:"About"})}),Object(u.jsx)("li",{className:"cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main",children:Object(u.jsx)(j.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,offset:50,duration:500,children:"Experience"})}),Object(u.jsx)("li",{className:"cursor-pointer px-4 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main",children:Object(u.jsx)(j.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:"Contact"})}),Object(u.jsx)("li",{className:"border border-port-second cursor-pointer px-3 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main",children:Object(u.jsx)("a",{href:"#resume",children:"Resume"})})]})}),Object(u.jsx)("div",{className:"md:hidden flex items-center",children:Object(u.jsx)("button",{className:"focus:outline-none",onClick:this.toggleMobileMenu,children:Object(u.jsx)("svg",{class:" w-6 h-6 text-port-second ","x-show":"!showMenu",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{d:"M4 6h16M4 12h16M4 18h16"})})})})]}),Object(u.jsx)("div",{children:this.state.mobileMenuOpen?Object(u.jsx)(b,{}):""})]})})}}]),a}(s.Component),m=a.p+"static/media/profile.067aeba8.jpg",x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{greeting:"Hi, my name is ",name:"Mohammad Rafi Bahez",designation:" I'm a Software Engineer",message:" I'm software engineer who specializes in building creative digital experiences. I learned and worked with many technologies over the past years."}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"bg-main-darker h-screen w-full",children:Object(u.jsxs)("div",{className:"flex flex-row items-center py-20 sx:px-8 lg:px-20",children:[Object(u.jsxs)("div",{className:"flex-1",children:[Object(u.jsxs)("h3",{className:"text-white pb-5",children:[" ",this.state.viewData.greeting," "]}),Object(u.jsx)("h1",{className:"text-white sx:text-xl text-5xl md:text-2xl lg:text-5xl",children:this.state.viewData.name}),Object(u.jsx)("h2",{className:"text-port-gray md:text-xl lg:text-3xl",children:this.state.viewData.designation}),Object(u.jsxs)("p",{className:"text-white text-base md:w-8/12 pt-5 pb-14",children:[" ",this.state.viewData.message]}),Object(u.jsx)(j.Link,{className:"text-white border border-port-second cursor-pointer px-3 py-3 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main hover:border-main-darker",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:"Get in Touch"})]}),Object(u.jsx)("div",{className:"hidden md:flex w-60 h-60 flex-0 justify-start bg-second-darker rounded-xl mt-10",children:Object(u.jsx)("img",{className:"w-60 h-60 rounded-xl transform -translate-x-3 -translate-y-3 ",src:m})})]})})}}]),a}(s.Component),f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(e){return Object(u.jsxs)("div",{className:"flex flex-row items-center gap-3 pt-10 pb-14",children:[Object(u.jsx)("div",{className:"hidden sm:block bg-second-darker h-1 w-32 sm:"+this.props.showLeftLine}),Object(u.jsx)("div",{children:Object(u.jsxs)("h1",{className:"text-white text-3xl pb-5",children:[" ",this.props.children," "]})}),Object(u.jsx)("div",{className:"hidden sm:block bg-second-darker h-1 w-32"})]})}}]),a}(s.Component),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{pageTitle:"About Me",aboutMe:"I have a masters degree in computer science from Technical University of Berlin. I\u2019ve been working as a software engineer, full stack web developer and university lecturer for over 10 years.",descriptionSkills:"Here are a few technologies that I\u2019ve been working with recently:",message:" I'm software engineer who specializes in building creative digital experiences. I learned and worked with many technologies over the past years."}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"about",name:"about",className:"bg-main-darker w-full js-show-on-scroll",children:Object(u.jsxs)("div",{className:"py-20 sx:px-8 lg:px-20",children:[Object(u.jsx)(f,{showLeftLine:"hidden",children:this.state.viewData.pageTitle}),Object(u.jsx)("div",{className:"flex flex-row items-center",children:Object(u.jsxs)("div",{className:"flex-1",children:[Object(u.jsx)("p",{className:"text-white text-base pb-14",children:this.state.viewData.aboutMe}),Object(u.jsx)("p",{className:"text-white text-base pb-10",children:this.state.viewData.descriptionSkills}),Object(u.jsxs)("div",{className:"flex sx:flex-col md:flex-row items-center justify-center text-port-second",children:[Object(u.jsxs)("div",{className:"flex flex-col space-y-4 pr-20",children:[Object(u.jsx)("div",{className:"flex items-center h-14 w-14",children:Object(u.jsx)("svg",{"aria-hidden":"true",height:"100%",width:"100%",focusable:"false","data-prefix":"fab","data-icon":"js",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"})})}),Object(u.jsx)("div",{className:"flex items-center h-14 w-14",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab",height:"100%",width:"100%","data-icon":"react",class:"svg-inline--fa fa-react fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"})})}),Object(u.jsx)("div",{className:"flex items-center h-14 w-14",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab",height:"100%",width:"100%","data-icon":"vuejs",class:"svg-inline--fa fa-vuejs fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"})})})]}),Object(u.jsxs)("div",{className:"flex flex-col space-y-4 pr-20",children:[Object(u.jsx)("div",{className:"flex items-center h-20 w-20",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab",height:"100%",width:"100%","data-icon":"php",class:"svg-inline--fa fa-php fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"})})}),Object(u.jsx)("div",{className:"flex items-center h-14 w-14",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab",height:"100%",width:"100%","data-icon":"laravel",class:"svg-inline--fa fa-laravel fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"})})}),Object(u.jsx)("div",{className:"flex items-center h-14 w-14",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab",height:"100%",width:"100%","data-icon":"wordpress-simple",class:"svg-inline--fa fa-wordpress-simple fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"})})})]}),Object(u.jsxs)("div",{className:"flex flex-col space-y-4 pr-20",children:[Object(u.jsx)("div",{className:"flex items-center h-14 w-14",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab",height:"100%",width:"100%","data-icon":"bootstrap",class:"svg-inline--fa fa-bootstrap fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"})})}),Object(u.jsx)("div",{className:"flex items-center h-14 w-14",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab",height:"100%",width:"100%","data-icon":"css3",class:"svg-inline--fa fa-css3 fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"})})}),Object(u.jsx)("div",{className:"flex items-center h-14 w-14",children:Object(u.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"sass",height:"100%",width:"100%",class:"svg-inline--fa fa-sass fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:Object(u.jsx)("path",{fill:"currentColor",d:"M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"})})})]})]})]})})]})})}}]),a}(s.Component),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("ul",{className:"bg-second-darker text-white",children:this.props.children})}}]),a}(s.Component),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)("li",{className:"py-3 px-4 pr-10 bg-port-second border-port-second cursor-pointer"+(this.props.organization.id===this.props.activeLink?" bg-second-darker":" opacity-50 "),onClick:function(){return e.props.handler(e.props.organization.id)},children:this.props.organization.name})}}]),a}(s.Component),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("ul",{className:"py-2 text-sm",children:this.props.children})}}]),a}(s.Component),y=function(e){return Object(u.jsx)("li",{className:"pb-2",children:Object(u.jsxs)("div",{className:"flex flex-row justify-start items-center space-x-3",children:[Object(u.jsx)("div",{children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"text-port-second h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),Object(u.jsx)("div",{children:e.responsibility})]})})},k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{pageTitle:"Places I've Worked"},organizations:[{id:"org-pts",name:"Python Technology Services"},{id:"org-ku",name:"Kabul University"},{id:"org-zps",name:"Zawul Professional Services"},{id:"org-az",active:!1,name:"AZ Corp."},{id:"org-itck",name:"IT Center for Kabul University"}],activeLink:"org-pts",activeClass:"animate-fadeIn",jobs:[{id:"org-pts",title:"Sr. Software Engineer",duration:"March 2018 - April 2021",location:"Kabul, Afghanistan",responsibilities:["Worked on designing and developing of 5 Software as a Service products for Afghanistan\u2019s market. Collected requirements and analyzed them using Unified Modeling Language (UML).","Led the creative design team to collaborate over prototype using Adobe XD, implement HCI, and responsive design principles. As a result designed a system to support both LTR & RTL languages and gained 100% of customers satisfaction. Used lazy loading feature to reduce time to load which provided better user experience.","Developed softwares by using Laravel as server side framework API and MySQL as a backend database. Used Reactjs and Bootstrap/Tailwindcss for frontend development. These products have been used by over 300 organizations with positive user experiences.","Created multi-language docs and tutorials for softwares that increased customer\u2019s satisfaction.","Adopted Agile as a software development methodology resulted in effective management."]},{id:"org-ku",title:"Assistant Professor",duration:"April 2015 - April 2021",location:"Kabul, Afghanistan",responsibilities:["Kabul University is the largest and most reputed public university in Afghanistan. The main responsibilities I had was teaching and preparing curriculum for the Computer Science Faculty. I taught the following classes:","Software Engineering I & II","Programming & Object Oriented Programming using Algorithms and OOP concepts in Java","Fundamentals of Databases using RDBMS specifically MySQL and SQLite","Web Design and Development I & II using HTML, CSS, Bootstrap, Tailwind, and JavaScript","Full Stack Web Development using Laravel, Vuejs and Reactjs"]},{id:"org-zps",title:"Software Engineer",duration:"January 2014 - February 2018",location:"Kabul, Afghanistan",responsibilities:["Designed and developed multi-language Student Management Information System (SMIS) for university\u2019s administration office resulted in increase in productivity by automating report generation processes and effective management.","Developed SMIS using Laravel and used MySQL as a backend database, hosted locally in Apache server\u2019s XAMPP package to reduce the access cost.","Developed frontend web applications using Vuejs, and Bootstrap connected with backend API.","Developed multi-language websites for institutes using Wordpress CMS with online chat and registration features. Customized the Wordpress theme to reflect requirements and reduced time to load up to 50% less than the previous websites.","Implemented Slack platform for customer\u2019s relation and support services resulted in improvement of communications and tracking user\u2019s requests."]},{id:"org-az",title:"IT Manager",duration:"March 2010 - December 2010",location:"Kabul, Afghanistan",responsibilities:["Development of IT policy for AZ Corp","Developing and mentanince of AZ Corp Servers","Evaluated user needs and system functionality","Assisted the IT support team of the AZ Corp\u2019s projects","Ensured that ICT facilities meet the needs of individuals and projects","Mentored and trained new ICT support staff","Kept up to date with the latest technologies","Taught IT essentials to technical staff"]},{id:"org-itck",title:"PC Technician",duration:"February 2007 - March 2010",location:"Kabul, Afghanistan",responsibilities:["Installed and configured computer hardware, Operating System and need applications of the PCs in Kabul University","Maintenance of PCs from all faculties of Kabul University","Troubleshoot system and network problems","Diagnosed and solved hardware/software faults of systems","Provided support for Kabul university staff including writing instruction documents","Followed diagrams and provided instructions to troubleshoot a system or to set up a new system","Instructing Kabul University students in order to provide the same service back to their faculties"]}]},e.toggleActiveLinkHandler=function(t){e.setState({activeLink:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this;e=Object(u.jsx)("div",{children:this.state.organizations.map((function(e){return Object(u.jsx)(w,{organization:e,activeLink:t.state.activeLink,handler:t.toggleActiveLinkHandler},e.id)}))});var a;return a=Object(u.jsx)("div",{children:this.state.jobs.map((function(e,a){if(e.id===t.state.activeLink)return e.responsibilities.map((function(e,t){return Object(u.jsx)(y,{responsibility:e},t)}))}))}),Object(u.jsx)("div",{id:"experience",name:"experience",className:"bg-main-darker w-full js-show-on-scroll",children:Object(u.jsxs)("div",{className:"py-20 sx:px-8 lg:px-20",children:[Object(u.jsx)(f,{showLeftLine:"hidden",children:this.state.viewData.pageTitle}),Object(u.jsxs)("div",{className:"flex sx:flex-col md:flex-row sx:space-x-0 md:space-x-10",children:[Object(u.jsx)("div",{className:"flex-0",children:Object(u.jsx)(g,{children:e})}),Object(u.jsxs)("div",{className:"flex-1 text-white sx:pt-6",children:[Object(u.jsx)("h1",{className:"text-2xl",children:this.state.jobs.map((function(e){return e.id===t.state.activeLink?e.title:""}))}),Object(u.jsx)("h1",{className:"text-sm text-port-second",children:this.state.jobs.map((function(e){return e.id===t.state.activeLink?e.duration:""}))}),Object(u.jsx)("h1",{className:"text-md pb-5 text-white",children:this.state.jobs.map((function(e){return e.id===t.state.activeLink?e.location:""}))}),Object(u.jsx)("h2",{className:"text-xl",children:"Responsibilities:"}),Object(u.jsx)(O,{children:a})]})]})]})})}}]),a}(s.Component),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{pageTitle:"Get in Touch",message:"My inbox is always open, if you have a question or want to get in touch say hello!"}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"contact",name:"contact",className:"bg-main-darker h-screen w-full js-show-on-scroll",children:Object(u.jsxs)("div",{className:"flex flex-col items-center py-20 sx:px-8 lg:px-20",children:[Object(u.jsx)(f,{showLeftLine:"inline-block",children:this.state.viewData.pageTitle}),Object(u.jsxs)("h3",{className:"text-center text-white sx:text-lg md:text-xl pb-20",children:[this.state.viewData.message," "]}),Object(u.jsx)("div",{className:"flex justify-center",children:Object(u.jsx)("a",{href:"mailto:rafibahez@mail.com",className:"text-white border border-port-second cursor-pointer px-3 py-2 transition duration-500 ease-in-out transform hover:bg-port-second hover:text-port-main hover:border-main-darker",children:"Say Hello"})})]})})}}]),a}(s.Component),C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{designedBy:"Designed and Developed by BAHEZ"}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"contact",className:"h-20 flex sx:flex-col md:flex-row items-center justify-center bg-port-main space-x-10",children:[Object(u.jsx)("div",{className:"text-port-second sx:py-2 md:py-0",children:Object(u.jsx)("h2",{children:this.state.viewData.designedBy})}),Object(u.jsxs)("div",{className:"flex flex-row space-x-5 text-port-second sx:py-2 md:py-0",children:[Object(u.jsx)("h2",{children:"View Source"}),Object(u.jsx)("a",{href:"https://github.com/RafiBahez/portfolio",target:"_blank",children:Object(u.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-second-darker h-6 w-6",children:[Object(u.jsx)("title",{children:"GitHub"}),Object(u.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})})]})]})}}]),a}(s.Component),z=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{social_1:{name:"LinkedIn",url:"https://linkedin.com/in/rafibahez/"},Social_2:{name:"Twitter",url:"https://twitter.com/rafibahez"},Social_3:{name:"GitHub",url:"https://github.com/RafiBahez"}}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{class:"h-screen fixed",children:Object(u.jsxs)("div",{className:"h-screen w-16 flex flex-col justify-center space-y-10",children:[Object(u.jsx)("div",{className:"flex justify-center",children:Object(u.jsx)("a",{href:this.state.viewData.social_1.url,target:"_blank",rel:"noreferrer",children:Object(u.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-second-darker opacity-75 h-6 w-6",children:[Object(u.jsx)("title",{children:this.state.viewData.social_1.name}),Object(u.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]})})}),Object(u.jsx)("div",{className:"flex justify-center",children:Object(u.jsx)("a",{href:this.state.viewData.Social_2.url,target:"_blank",rel:"noreferrer",children:Object(u.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-second-darker opacity-75 h-6 w-6",children:[Object(u.jsx)("title",{children:this.state.viewData.Social_2.name}),Object(u.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})]})})}),Object(u.jsx)("div",{className:"flex justify-center",children:Object(u.jsx)("a",{href:this.state.viewData.Social_3.url,target:"_blank",rel:"noreferrer",children:Object(u.jsxs)("svg",{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"text-second-darker opacity-75 h-6 w-6",children:[Object(u.jsx)("title",{children:this.state.viewData.Social_3.name}),Object(u.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})})})]})})}}]),a}(s.Component),M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={viewData:{emailid:"rafibahez@gmail.com"}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{class:"h-screen fixed",children:Object(u.jsx)("div",{className:"h-screen w-16 flex flex-col justify-center",children:Object(u.jsx)("h2",{className:"text-second-darker transform rotate-90 opacity-75 tracking-widest -m-12",children:this.state.viewData.emailid})})})}}]),a}(s.Component);var L=function(){return Object(u.jsxs)("div",{className:"App bg-main-darker",children:[Object(u.jsx)("div",{children:Object(u.jsx)(p,{})}),Object(u.jsxs)("div",{className:"grid grid-flow-col",children:[Object(u.jsx)("div",{className:"hidden md:block w-16 bg-port-main",children:Object(u.jsx)(z,{})}),Object(u.jsxs)("div",{className:"grid-cols-10",children:[Object(u.jsx)(x,{}),Object(u.jsx)(v,{}),Object(u.jsx)(k,{}),Object(u.jsx)(N,{}),Object(u.jsx)(C,{})]}),Object(u.jsx)("div",{className:"hidden md:block w-16 bg-port-main",children:Object(u.jsx)(M,{})})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),i(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"));var D=new IntersectionObserver((function(e){e.forEach((function(e){console.log(e),e.isIntersecting?e.target.classList.add("animate-fadeIn"):e.target.classList.remove("animate-fadeIn")}))}));document.querySelectorAll(".js-show-on-scroll").forEach((function(e){e.classList.add("opacity-0"),D.observe(e)})),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.bd0d253c.chunk.js.map