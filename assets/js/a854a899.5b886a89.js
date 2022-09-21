"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[3196],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={sidebar_position:1},c="System Overview",l={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-attendance-face-recognition/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2022-Fall/project-attendance-face-recognition/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-attendance-face-recognition/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-attendance-face-recognition/docs/requirements/system-block-diagram"}},u={},p=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Scope of the Project",id:"scope-of-the-project",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-overview"},"System Overview"),(0,o.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,o.kt)("p",null,"This document proposes a novel application of a face recognition as a biometric technique to track the attendance of employees and students in companies and schools respectively. When the user uses their camera built in their mobile/laptop, this system identifies each unique face and matches it with the images from the database. If the system does not identify the person, it would alert the required person about it. The attendance report will also be shown to the admin."),(0,o.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,o.kt)("p",null,"This application is a web-based application and when the user opens this using the link provided by their organization, the user looks at the camera in a good lighting and the system which will be developed using the python libraries for face recognition.  The database will have the data of the users and will match both to recognize the user. Once recognized, the attendance will be recorded and if not recognized, if gives them few tries to try again and if the limit is met, it alerts the person who checks the attendance."),(0,o.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,o.kt)("p",null,"The initial plan for developing this application as a web-based developed using HTML, CSS, JavaScript, React and by using Django framework on the frontend. The backend would be developed using python as the programming language and use libraries like OpenCV, Dlib and Face Recognition package. A database like MySQL is used to store the data of the users. Any operating system could be used as it is a web-based application. Camera built in the devices will be used to scan the faces of the users."),(0,o.kt)("h2",{id:"scope-of-the-project"},"Scope of the Project"),(0,o.kt)("p",null,"We, the team members are designing this project for schools and companies to use face recognition for attendance with average cost for the project that requires front end skills for web application development and back-end skills for face recognition with python and OpenCV with the usage of database. This is a doable project in 3 months or less time for which we have enough people with required skills and with a plan to manage the development and deadlines for deliverables for every short period of time for the project. The only limitation is that while trying to recognize oneself for attendance they should be in a good lighting, if not there might be issues for the model for quick action."))}h.isMDXComponent=!0}}]);