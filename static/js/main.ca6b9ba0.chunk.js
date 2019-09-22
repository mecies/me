(window.webpackJsonpmecies_cv=window.webpackJsonpmecies_cv||[]).push([[0],{14:function(e,a,t){e.exports=t(37)},19:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),s=(t(19),t(1)),i=t(2),o=t(4),m=t(3),p=t(5),u=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(){document.querySelector(".hamburger").classList.toggle("active"),document.querySelector(".navigation").classList.toggle("navigation-active")},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"hamburger",onClick:this.handleClick},r.a.createElement("div",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"})))),r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",{className:"navigation-list"},r.a.createElement("li",{className:"navigation-item",onClick:this.handleClick},r.a.createElement("a",{className:"nav-anchor",href:"#home"},r.a.createElement("i",{className:"fas fa-home"}),r.a.createElement("span",{className:"nav-span"},"Home"))),r.a.createElement("li",{className:"navigation-item",onClick:this.handleClick},r.a.createElement("a",{className:"nav-anchor",href:"#myprojects"},r.a.createElement("i",{className:"fas fa-folder-open"}),r.a.createElement("span",{className:"nav-span"},"My projects"))),r.a.createElement("li",{className:"navigation-item",onClick:this.handleClick},r.a.createElement("a",{className:"nav-anchor",href:"#aboutme"},r.a.createElement("i",{className:"fas fa-user"}),r.a.createElement("span",{className:"nav-span"},"About me"))),r.a.createElement("li",{className:"navigation-item",onClick:this.handleClick},r.a.createElement("a",{className:"nav-anchor",href:"#contactme"},r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("span",{className:"nav-span"},"Contact me"))))))}}]),a}(r.a.Component),h=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(u,null),r.a.createElement("div",{className:"icons"},r.a.createElement("div",{className:"icon"},r.a.createElement("a",{href:"https://www.facebook.com/maciej.hnat.3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-square"}))),r.a.createElement("div",{className:"icon"},r.a.createElement("a",{href:"https://www.linkedin.com/in/maciej-hnat-82203b157/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",{className:"icon"},r.a.createElement("a",{href:"https://github.com/mecies",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github-square"})))))},d=function(){return r.a.createElement("div",{className:"image-container"},r.a.createElement("picture",{className:"image-container"},r.a.createElement("source",{srcSet:"images/cmaciekbw.png",media:"(min-width: 800px)"}),r.a.createElement("img",{className:"image",src:"images/cmaciekbw.png",alt:"Maciej Hnat's photograph"})))},E=function(e){return r.a.createElement("div",{className:e.className+" logo"},r.a.createElement("span",null,e.first,r.a.createElement("br",null),e.second))},f=function(){return r.a.createElement("div",{className:"home-container",id:"home"},r.a.createElement(h,null),r.a.createElement(d,null),r.a.createElement(E,{first:"Maciej Hnat",second:"",className:"home-logo"}))},g=t(12),v=t.n(g),N=(t(35),t(36),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).renderProps=function(){t.state.show&&t.state.show.map(function(e){return r.a.createElement("div",{key:e.key},e)})},t.state={show:t.props.show},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},this.state.show)}}]),a}(r.a.Component)),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).renderImages=function(){return[r.a.createElement("div",{className:"image-container",key:"img1"},r.a.createElement("img",{className:"gal-image",src:"images/clouds.jpg",alt:"clouds"})),r.a.createElement("div",{className:"image-container",key:"img2"},r.a.createElement("img",{className:"gal-image",src:"images/hangin.jpg",alt:"placeholder"})),r.a.createElement("div",{className:"image-container",key:"img3"},r.a.createElement("img",{className:"gal-image",src:"images/garden.jpg",alt:"placeholder"}))]},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"image-gallery"},r.a.createElement("img",{className:"gal-image one",src:"images/clouds.jpg",alt:"landscape of bieszczady mountains"}),r.a.createElement("img",{className:"gal-image two",src:"images/hangin.jpg",alt:"me and piece of art"}),r.a.createElement("img",{className:"gal-image three",src:"images/garden.jpg",alt:"me in the garden"}),r.a.createElement("div",{className:"slider-container"},r.a.createElement(N,{show:this.renderImages()})))}}]),a}(r.a.Component),j=function(){return r.a.createElement("div",{className:"aboutme",id:"aboutme"},r.a.createElement("div",{className:"aboutme-left"},r.a.createElement(E,{first:"About me",second:"",className:"aboutme-logo"}),r.a.createElement("p",{className:"aboutme-description"},"A web developer located in ",r.a.createElement("a",{href:"https://www.wroclaw.pl/",target:"_blank",rel:"noopener noreferrer"},"Wroclaw"),". ",r.a.createElement("br",null),"Currently studying Business Informatics at the ",r.a.createElement("a",{href:"http://www.ue.wroc.pl/",target:"_blank",rel:"noopener noreferrer"},"University of Economics")," in Wroclaw. ",r.a.createElement("b",null),"Dynamic visual changes keep me passionate about Frontend, however I am leaning towards Fullstack in the future. Besides that I love traveling, art, board & video games and amateur powerlifting.")),r.a.createElement(b,null))},w={One:{title:"Native Speaker",solution:"Commercial project - Designed the website using Figma. Developed the frontend of the application with HAML/LESS and Javascript and connected it to an existing backend in Ruby on Rails framework",code:"",live:"https://nativespeaker.com.pl/"},Two:{title:"Portfolio",solution:"Portfolio website for myself designed by me with Figma and developed with ReactJS and couple of react-friendly libraries",code:"https://github.com/mecies/me",live:"https://mecies.github.io/me/"},Three:{title:"Equarium",solution:"A website made for Student Organisation's project at my university. Written with regular HTML/CSS/JS + Webpack & Babel",code:"https://github.com/mecies/Equarium",live:"http://equarium.eu/"},Four:{title:"Weather App",solution:"One of my first projects written with HTML/CSS and Javascript ",code:"https://github.com/mecies/weather-app",live:"https://mecies.github.io/weather-app/"}},k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={previewContent:w},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"my-projects-list"},r.a.createElement("div",{className:"project-list-item",onClick:function(){e.props.onProjectClick(e.state.previewContent.One)}},r.a.createElement("img",{className:"proj-img",src:"images/native-speaker.png",alt:"native speaker project screenshot"}),r.a.createElement("p",null,"Native Speaker")),r.a.createElement("div",{className:"project-list-item",onClick:function(){e.props.onProjectClick(e.state.previewContent.Two)}},r.a.createElement("img",{className:"proj-img",src:"images/portfolio.png",alt:"portfolio project screenshot"}),r.a.createElement("p",null,"Portfolio")),r.a.createElement("div",{className:"project-list-item",onClick:function(){e.props.onProjectClick(e.state.previewContent.Three)}},r.a.createElement("img",{className:"proj-img",src:"images/equarium.png",alt:"equarium project screenshot"}),r.a.createElement("p",null,"Equarium")),r.a.createElement("div",{className:"project-list-item",onClick:function(){e.props.onProjectClick(e.state.previewContent.Four)}},r.a.createElement("img",{className:"proj-img",src:"images/weather.png",alt:"weather project screenshot"}),r.a.createElement("p",null,"Weather App")))}}]),a}(r.a.Component),C=function(e){var a=e.previewContent;return console.log(a),r.a.createElement("div",{className:"my-projects-preview"},r.a.createElement("p",{className:"project-idea"},"Have a cool project idea? ",r.a.createElement("a",{href:"#home"},"Contact me")),r.a.createElement("p",{className:"rec"},a.title),r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:a.code},"Code: ","Native Speaker"===a.title?r.a.createElement("i",{className:"fas fa-dollar-sign"}):r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:a.live},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"rec big-rec"},a.solution))},y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).onProjectClick=function(e){t.setState({previewContent:{title:e.title,solution:e.solution,code:e.code,live:e.live}})},t.state={previewContent:{title:"Click on a project",solution:"My contribution to the project"},sliderContent:w},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"updatePreview",value:function(e){this.setState({previewContent:e})}},{key:"renderProjects",value:function(){var e=this;return[r.a.createElement("div",{key:"1",className:"project-list-item mobile",onClick:function(){return e.onProjectClick(e.state.sliderContent.One)}},r.a.createElement("p",{className:"title"},"Native Speaker"),r.a.createElement("img",{className:"proj-img",src:"images/native-speaker.png",alt:"native speaker project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("span",null,"Code: ",r.a.createElement("i",{className:"fas fa-dollar-sign"})),r.a.createElement("a",{href:this.state.sliderContent.One.live,target:"_blank",rel:"noopener noreferrer"},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},this.state.sliderContent.One.solution))),r.a.createElement("div",{key:"2",className:"project-list-item mobile",onClick:function(){return e.onProjectClick(e.state.sliderContent.Two)}},r.a.createElement("p",{className:"title"},"Portfolio"),r.a.createElement("img",{className:"proj-img",src:"images/portfolio.png",alt:"portfolio project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:this.state.sliderContent.Two.code,target:"_blank",rel:"noopener noreferrer"},"Code: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:this.state.sliderContent.Two.live,target:"_blank",rel:"noopener noreferrer"},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},this.state.sliderContent.Two.solution))),r.a.createElement("div",{key:"3",className:"project-list-item mobile",onClick:function(){return e.onProjectClick(e.state.sliderContent.Three)}},r.a.createElement("p",{className:"title"},"Equarium"),r.a.createElement("img",{className:"proj-img",src:"images/equarium.png",alt:"equarium project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:this.state.sliderContent.Three.code,target:"_blank",rel:"noopener noreferrer"},"Code: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:this.state.sliderContent.Three.live,target:"_blank",rel:"noopener noreferrer"},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},this.state.sliderContent.Three.solution))),r.a.createElement("div",{key:"4",className:"project-list-item mobile",onClick:function(){return e.onProjectClick(e.state.sliderContent.Four)}},r.a.createElement("p",{className:"title"},"Weather App"),r.a.createElement("img",{className:"proj-img",src:"images/weather.png",alt:"weather project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:this.state.sliderContent.Four.code,target:"_blank",rel:"noopener noreferrer"},"Code: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:this.state.sliderContent.Four.live,target:"_blank",rel:"noopener noreferrer"},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},this.state.sliderContent.Four.solution)))]}},{key:"render",value:function(){return r.a.createElement("div",{className:"container",id:"myprojects"},r.a.createElement("div",{className:"my-projects"},r.a.createElement("div",{className:"my-projects-logo-container"},r.a.createElement(E,{first:"My projects",second:"",className:"my-projects-logo"})),r.a.createElement("div",{className:"my-projects-bottom"},r.a.createElement(k,{onProjectClick:this.onProjectClick}),r.a.createElement(C,{previewContent:this.state.previewContent}),r.a.createElement("div",{className:"slider-container"},r.a.createElement(N,{show:this.renderProjects(),updatePreview:this.updatePreview})))))}}]),a}(r.a.Component),O=function(){return r.a.createElement("ul",{className:"contact-list"},r.a.createElement("li",{className:"contact-item"},r.a.createElement("a",{href:"mailto:maciekhnat@gmail.com"},r.a.createElement("span",null,"Send me an email"),r.a.createElement("i",{className:"fas fa-envelope-square"}))),r.a.createElement("li",{className:"contact-item"},r.a.createElement("a",{href:"https://github.com/mecies",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Github"),r.a.createElement("i",{className:"fab fa-github-square"}))),r.a.createElement("li",{className:"contact-item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/maciej-hnat-82203b157/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"LinkedIn"),r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("li",{className:"contact-item"},r.a.createElement("a",{href:"https://m.me/maciej.hnat.3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Messenger"),r.a.createElement("i",{class:"fab fa-facebook-messenger"}))))},P=t(13),S=t.n(P),_=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{href:"#home"},r.a.createElement("i",{id:"ue-scroll",className:"ue-scroll fas fa-caret-up"}))}}]),a}(r.a.Component),T=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"contactme",className:"contact"},r.a.createElement("div",{className:"logo-container"},r.a.createElement(E,{first:"Contact me",second:"",className:"contactme-logo"})),r.a.createElement("div",{className:"contact-details"},r.a.createElement("div",{className:"details-left"},r.a.createElement("p",{className:"contact-text"},"Hey there!",r.a.createElement("br",null)," If you want to contact me please select any of the given options or use the built in chat on the website by clicking an icon in the bottom right corner.")),r.a.createElement("div",{className:"details-right"},r.a.createElement(O,null))),r.a.createElement(_,null))}}]),a}(r.a.Component),q=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(f,null),r.a.createElement(y,null),r.a.createElement(j,null),r.a.createElement(T,null))};l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ca6b9ba0.chunk.js.map