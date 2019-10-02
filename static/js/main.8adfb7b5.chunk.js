(window.webpackJsonpmecies_cv=window.webpackJsonpmecies_cv||[]).push([[0],{15:function(e,a,t){e.exports=t(39)},21:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),c=t.n(i),l=t(1),s=t(2),o=t(4),m=t(3),p=t(5),u=t(12),h=t.n(u),d=(t(20),t(21),r.a.createContext("english")),g=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(){document.querySelector(".hamburger").classList.toggle("active"),document.querySelector(".navigation").classList.toggle("navigation-active")},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e="english"===this.context?{Home:"Home",Myprojects:"My projects",Aboutme:"About me",Contactme:"Contact me"}:{Home:"G\u0142\xf3wna",Myprojects:"Projekty",Aboutme:"O mnie",Contactme:"Kontakt"};return r.a.createElement("div",null,r.a.createElement("div",{className:"hamburger",onClick:this.handleClick},r.a.createElement("div",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"})))),r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",{className:"navigation-list"},r.a.createElement("li",{className:"navigation-item",onClick:this.handleClick},r.a.createElement("a",{className:"nav-anchor",href:"#home"},r.a.createElement("i",{className:"fas fa-home"}),r.a.createElement("span",{className:"nav-span"},e.Home))),r.a.createElement("li",{className:"navigation-item",onClick:this.handleClick},r.a.createElement("a",{className:"nav-anchor",href:"#myprojects"},r.a.createElement("i",{className:"fas fa-folder-open"}),r.a.createElement("span",{className:"nav-span"},e.Myprojects))),r.a.createElement("li",{className:"navigation-item",onClick:this.handleClick},r.a.createElement("a",{className:"nav-anchor",href:"#aboutme"},r.a.createElement("i",{className:"fas fa-user"}),r.a.createElement("span",{className:"nav-span"},e.Aboutme))),r.a.createElement("li",{className:"navigation-item",onClick:this.handleClick},r.a.createElement("a",{className:"nav-anchor",href:"#contactme"},r.a.createElement("i",{className:"fas fa-envelope"}),r.a.createElement("span",{className:"nav-span"},e.Contactme))))))}}]),a}(r.a.Component);g.contextType=d;var E=g,f=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header"},r.a.createElement(E,null),r.a.createElement("div",{className:"icons"},r.a.createElement("div",{className:"icon",onClick:function(){return e.props.callback("english")}},r.a.createElement("img",{className:"flag",src:"images/gb.svg",alt:""})),r.a.createElement("div",{className:"icon",onClick:function(){return e.props.callback("polish")}},r.a.createElement("img",{className:"flag",src:"images/pl.svg",alt:""})),r.a.createElement("div",{className:"icon"},r.a.createElement("a",{href:"https://www.facebook.com/maciej.hnat.3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-square"}))),r.a.createElement("div",{className:"icon"},r.a.createElement("a",{href:"https://www.linkedin.com/in/maciej-hnat-82203b157/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",{className:"icon"},r.a.createElement("a",{href:"https://github.com/mecies",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github-square"})))))}}]),a}(r.a.Component),v=function(){return r.a.createElement("div",{className:"image-container","data-aos":"fade-in"},r.a.createElement("picture",{className:"image-container"},r.a.createElement("source",{media:"(max-width: 1600px)",srcSet:"images/cmaciekbw-medium.png"}),r.a.createElement("source",{media:"(min-width: 1601px)",srcSet:"images/cmaciekbw.png"}),r.a.createElement("img",{className:"image",src:"images/cmaciekbw-medium.png",alt:"Maciej standing with arms crossed"})))},w=function(e){return r.a.createElement("div",{className:e.className+" logo"},r.a.createElement("span",null,e.first,r.a.createElement("br",null),e.second))},N=function(e){var a=e.callback;return r.a.createElement("div",{className:"home-container",id:"home"},r.a.createElement(f,{callback:a}),r.a.createElement(v,null),r.a.createElement(w,{first:"Maciej Hnat",second:"",className:"home-logo"}))},b=t(13),j=t.n(b),k=(t(37),t(38),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={show:t.props.show},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j.a,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},this.props.show)}}]),a}(r.a.Component));k.contextType=d;var y=k,C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).renderImages=function(){return[r.a.createElement("div",{className:"image-container",key:"img1"},r.a.createElement("img",{className:"gal-image",src:"images/clouds.jpg",alt:"clouds"})),r.a.createElement("div",{className:"image-container",key:"img2"},r.a.createElement("img",{className:"gal-image",src:"images/hangin.jpg",alt:"placeholder"})),r.a.createElement("div",{className:"image-container",key:"img3"},r.a.createElement("img",{className:"gal-image",src:"images/garden.jpg",alt:"placeholder"}))]},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"image-gallery"},r.a.createElement("img",{className:"gal-image one",src:"images/clouds.jpg",alt:"landscape of bieszczady mountains"}),r.a.createElement("img",{className:"gal-image two",src:"images/hangin.jpg",alt:"me and piece of art"}),r.a.createElement("img",{className:"gal-image three",src:"images/garden.jpg",alt:"me in the garden"}),r.a.createElement("div",{className:"slider-container"},r.a.createElement(y,{show:this.renderImages()})))}}]),a}(r.a.Component),P=function(){var e="english"===Object(n.useContext)(d)?{logo:"About me",firstParagraph:"A web developer located in ",city:"Wroclaw",dot:". ",secondParagraph:"Currently studying Business Informatics at the ",uni:"University of Economics ",thirdParagraph:"in Wroclaw",fourthParagraph:"Dynamic visual changes keep me passionate about Frontend, however I am leaning towards Fullstack in the future. Besides that I love traveling, art, board & video games and amateur powerlifting."}:{logo:"O mnie",firstParagraph:"Web developer mieszkaj\u0105cy we ",city:"Wroc\u0142awiu",dot:". ",secondParagraph:"Aktualnie studiuj\u0119 Business Informatics na ",uni:"Uniwersytecie Ekonomicznym ",thirdParagraph:"we Wroc\u0142awiu",fourthParagraph:"Dynamiczne zmiany wizualne sprawiaj\u0105, \u017ce pasjonuj\u0119 si\u0119 Frontendem, jednak w przysz\u0142o\u015bci sk\u0142aniam si\u0119 ku Fullstack'owi. Poza tym uwielbiam podr\xf3\u017ce, sztuk\u0119, gry planszowe i wideo oraz amatorski tr\xf3jb\xf3j si\u0142owy."};return r.a.createElement("div",{className:"aboutme",id:"aboutme","data-aos":"fade-up","data-aos-duration":"1000"},r.a.createElement("div",{className:"aboutme-left"},r.a.createElement(w,{first:e.logo,second:"",className:"aboutme-logo"}),r.a.createElement("p",{className:"aboutme-description"},e.firstParagraph," ",r.a.createElement("a",{href:"https://www.wroclaw.pl/",target:"_blank",rel:"noopener noreferrer"},e.city),e.dot,e.secondParagraph," ",r.a.createElement("a",{href:"http://www.ue.wroc.pl/",target:"_blank",rel:"noopener noreferrer"},e.uni),e.thirdParagraph+e.dot,r.a.createElement("b",null),e.fourthParagraph)),r.a.createElement(C,null))},O={default:{title:"Click on a project",solution:"My contribution to the project"},defaultPL:{title:"Wybierz projekt z listy",solution:"M\xf3j wk\u0142ad w projekt"},One:{title:"Native Speaker",solution:"Commercial project - Designed the website using Figma. Developed the frontend of the application with HAML/LESS and Javascript and connected it to an existing backend in Ruby on Rails framework",code:"",live:"https://nativespeaker.com.pl/"},OnePL:{title:"Native Speaker",solution:"Projekt komercyjny - Zaprojektowa\u0142em stron\u0119 za pomoc\u0105 Figmy. Zakodowa\u0142em frontend aplikacji w HAML/LESS i Javascript oraz podpi\u0105\u0142em go do istniej\u0105cego backendu w \u015brodowisku Ruby on Rails",code:"",live:"https://nativespeaker.com.pl/"},Two:{title:"Portfolio",solution:"My portfolio website designed with Figma and developed with HTML/CSS/ReactJS and couple of react-friendly libraries",code:"https://github.com/mecies/me",live:"https://mecies.github.io/me/"},TwoPL:{title:"Portfolio",solution:"Moja strona portfolio zaprojektowana przeze mnie w Figmie i zakodowana w HTML/CSS/ReactJS i kilkoma bibliotekami przyjaznymi Reactowi",code:"https://github.com/mecies/me",live:"https://mecies.github.io/me/"},Three:{title:"Equarium",solution:"A website made for Student Organisation's project at my university. Written with regular HTML/CSS/JS + Webpack & Babel",code:"https://github.com/mecies/Equarium",live:"http://equarium.eu/"},ThreePL:{title:"Equarium",solution:"Strona napisana dla projektu Organizacji Studenckiej na mojej uczelni w technologiach HTML/CSS/JS + Webpack i Babel",code:"https://github.com/mecies/Equarium",live:"http://equarium.eu/"},Four:{title:"Weather App",solution:"One of my first projects written with HTML/CSS and Javascript ",code:"https://github.com/mecies/weather-app",live:"https://mecies.github.io/weather-app/"},FourPL:{title:"Apka Pogodowa",solution:"Jeden z moich pierwszych projekt\xf3w napisany w HTML/CSS i Javascript ",code:"https://github.com/mecies/weather-app",live:"https://mecies.github.io/weather-app/"}},L=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={previewContent:O},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"my-projects-list"},r.a.createElement("div",{className:"project-list-item",onClick:function(){e.props.onProjectClick("english"===e.context?e.state.previewContent.One:e.state.previewContent.OnePL)}},r.a.createElement("img",{className:"proj-img",src:"images/native-speaker.png",alt:"native speaker project screenshot"}),r.a.createElement("p",null,"english"===this.context?this.state.previewContent.One.title:this.state.previewContent.OnePL.title)),r.a.createElement("div",{className:"project-list-item",onClick:function(){e.props.onProjectClick("english"===e.context?e.state.previewContent.Two:e.state.previewContent.TwoPL)}},r.a.createElement("img",{className:"proj-img",src:"images/portfolio.png",alt:"portfolio project screenshot"}),r.a.createElement("p",null,"english"===this.context?this.state.previewContent.Two.title:this.state.previewContent.TwoPL.title)),r.a.createElement("div",{className:"project-list-item",onClick:function(){e.props.onProjectClick("english"===e.context?e.state.previewContent.Three:e.state.previewContent.ThreePL)}},r.a.createElement("img",{className:"proj-img",src:"images/equarium.png",alt:"equarium project screenshot"}),r.a.createElement("p",null,"english"===this.context?this.state.previewContent.Three.title:this.state.previewContent.ThreePL.title)),r.a.createElement("div",{className:"project-list-item",onClick:function(){e.props.onProjectClick("english"===e.context?e.state.previewContent.Four:e.state.previewContent.FourPL)}},r.a.createElement("img",{className:"proj-img",src:"images/weather.png",alt:"weather project screenshot"}),r.a.createElement("p",null,"english"===this.context?this.state.previewContent.Four.title:this.state.previewContent.FourPL.title)))}}]),a}(r.a.Component);L.contextType=d;var z=L,T=function(e){var a=e.previewContent,t=e.previewText;return r.a.createElement("div",{className:"my-projects-preview"},r.a.createElement("p",{className:"project-idea"},t.projectIdea,r.a.createElement("a",{href:"#contactme"},t.link)),r.a.createElement("p",{className:"rec"},a.title),r.a.createElement("div",{className:"prev-icons"},"Native Speaker"===a.title?r.a.createElement("span",null,t.code,": ",r.a.createElement("i",{className:"fas fa-dollar-sign"})):r.a.createElement("a",{href:a.code,target:"_blank",rel:"noopener noreferrer"},t.code,": ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:a.live,target:"_blank",rel:"noopener noreferrer"},t.live,": ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"rec big-rec"},a.solution))},x=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).onProjectClick=function(e){t.setState({previewContent:{title:e.title,solution:e.solution,code:e.code,live:e.live}})},t.renderProjectsENG=function(){var e=t.state.sliderContent;return[r.a.createElement("div",{key:"1",className:"project-list-item mobile"},r.a.createElement("p",{className:"title"},e.One.title),r.a.createElement("img",{className:"proj-img",src:"images/native-speaker.png",alt:"native speaker project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("span",null,"Code: ",r.a.createElement("i",{className:"fas fa-dollar-sign"})),r.a.createElement("a",{href:e.One.live,target:"_blank",rel:"noopener noreferrer"},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},e.One.solution))),r.a.createElement("div",{key:"2",className:"project-list-item mobile"},r.a.createElement("p",{className:"title"},e.Two.title),r.a.createElement("img",{className:"proj-img",src:"images/portfolio.png",alt:"portfolio project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:e.Two.code,target:"_blank",rel:"noopener noreferrer"},"Code: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:e.Two.live,target:"_blank",rel:"noopener noreferrer"},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},e.Two.solution))),r.a.createElement("div",{key:"3",className:"project-list-item mobile"},r.a.createElement("p",{className:"title"},e.Three.title),r.a.createElement("img",{className:"proj-img",src:"images/equarium.png",alt:"equarium project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:e.Three.code,target:"_blank",rel:"noopener noreferrer"},"Code: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:e.Three.live,target:"_blank",rel:"noopener noreferrer"},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},e.Three.solution))),r.a.createElement("div",{key:"4",className:"project-list-item mobile"},r.a.createElement("p",{className:"title"},e.Four.title),r.a.createElement("img",{className:"proj-img",src:"images/weather.png",alt:"weather project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:e.Four.code,target:"_blank",rel:"noopener noreferrer"},"Code: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:e.Four.live,target:"_blank",rel:"noopener noreferrer"},"Live: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},e.Four.solution)))]},t.renderProjectsPL=function(){var e=t.state.sliderContent;return[r.a.createElement("div",{key:"1",className:"project-list-item mobile"},r.a.createElement("p",{className:"title"},e.OnePL.title),r.a.createElement("img",{className:"proj-img",src:"images/native-speaker.png",alt:"native speaker project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("span",null,"Kod: ",r.a.createElement("i",{className:"fas fa-dollar-sign"})),r.a.createElement("a",{href:e.OnePL.live,target:"_blank",rel:"noopener noreferrer"},"Na \u017cywo: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},e.OnePL.solution))),r.a.createElement("div",{key:"2",className:"project-list-item mobile"},r.a.createElement("p",{className:"title"},e.TwoPL.title),r.a.createElement("img",{className:"proj-img",src:"images/portfolio.png",alt:"portfolio project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:e.TwoPL.code,target:"_blank",rel:"noopener noreferrer"},"Kod: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:e.TwoPL.live,target:"_blank",rel:"noopener noreferrer"},"Na \u017cywo:  ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},e.TwoPL.solution))),r.a.createElement("div",{key:"3",className:"project-list-item mobile"},r.a.createElement("p",{className:"title"},e.ThreePL.title),r.a.createElement("img",{className:"proj-img",src:"images/equarium.png",alt:"equarium project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:e.ThreePL.code,target:"_blank",rel:"noopener noreferrer"},"Kod: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:e.ThreePL.live,target:"_blank",rel:"noopener noreferrer"},"Na \u017cywo:  ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},e.ThreePL.solution))),r.a.createElement("div",{key:"4",className:"project-list-item mobile"},r.a.createElement("p",{className:"title"},e.FourPL.title),r.a.createElement("img",{className:"proj-img",src:"images/weather.png",alt:"weather project screenshot"}),r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"prev-icons"},r.a.createElement("a",{href:e.FourPL.code,target:"_blank",rel:"noopener noreferrer"},"Kod: ",r.a.createElement("i",{className:"fas fa-code"})),r.a.createElement("a",{href:e.FourPL.live,target:"_blank",rel:"noopener noreferrer"},"Na \u017cywo: ",r.a.createElement("i",{className:"fas fa-window-maximize"}))),r.a.createElement("p",{className:"white-rec"},e.FourPL.solution)))]},t.state={previewContent:{title:O.default.title,solution:O.default.solution},sliderContent:O,language:"english"},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(){"polish"===this.context&&this.context!==this.state.language?this.setState({previewContent:{title:O.defaultPL.title,solution:O.defaultPL.solution},language:"polish"}):"english"===this.context&&this.context!==this.state.language&&this.setState({previewContent:{title:O.default.title,solution:O.default.solution},language:"english"})}},{key:"render",value:function(){var e="english"===this.context?{preview:{projectIdea:"Have a cool project idea? ",link:"Contact me",code:"Code",live:"Live"},logo:"My projects"}:{preview:{projectIdea:"Masz pomys\u0142 na ciekawy projekt? ",link:"Skontaktuj si\u0119 ze mn\u0105",code:"Kod",live:"Na \u017cywo"},logo:"Projekty"};return r.a.createElement("div",{className:"container",id:"myprojects","data-aos":"fade-up","data-aos-duration":"1000"},r.a.createElement("div",{className:"my-projects"},r.a.createElement("div",{className:"my-projects-logo-container"},r.a.createElement(w,{first:e.logo,second:"",className:"my-projects-logo"})),r.a.createElement("div",{className:"my-projects-bottom"},r.a.createElement(z,{onProjectClick:this.onProjectClick}),r.a.createElement(T,{previewContent:this.state.previewContent,previewText:e.preview}),r.a.createElement("div",{className:"slider-container"},r.a.createElement(y,{show:"english"===this.state.language?this.renderProjectsENG():this.renderProjectsPL()})))))}}]),a}(r.a.Component);x.contextType=d;var S=x,_=function(e){var a=e.email;return r.a.createElement("ul",{className:"contact-list"},r.a.createElement("li",{className:"contact-item"},r.a.createElement("a",{href:"mailto:maciekhnat@gmail.com"},r.a.createElement("span",null,a),r.a.createElement("i",{className:"fas fa-envelope-square"}))),r.a.createElement("li",{className:"contact-item"},r.a.createElement("a",{href:"https://github.com/mecies",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Github"),r.a.createElement("i",{className:"fab fa-github-square"}))),r.a.createElement("li",{className:"contact-item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/maciej-hnat-82203b157/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"LinkedIn"),r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("li",{className:"contact-item"},r.a.createElement("a",{href:"https://m.me/maciej.hnat.3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Messenger"),r.a.createElement("i",{className:"fab fa-facebook-messenger"}))))},F=t(14),M=t.n(F),q=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(M.a,{href:"#home"},r.a.createElement("i",{id:"ue-scroll",className:"ue-scroll fas fa-caret-up"}))}}]),a}(r.a.Component),H=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e="english"===this.context?{logo:"Contact me",email:"Send me an email",firstParahraph:"Hey there!",secondParagraph:"If you want to contact me please select any of the given options or use the built in chat on the website by clicking an icon in the bottom right corner."}:{logo:"Kontakt",email:"Wy\u015blij mi maila",firstParahraph:"Witaj!",secondParagraph:"Je\u015bli chcesz si\u0119 ze mn\u0105 skontaktowa\u0107, wybierz jedn\u0105 z podanych opcji lub skorzystaj z wbudowanego czatu na stronie, klikaj\u0105c ikon\u0119 w prawym dolnym rogu."};return r.a.createElement("div",{id:"contactme",className:"contact","data-aos":"fade-up","data-aos-duration":"1000"},r.a.createElement("div",{className:"logo-container"},r.a.createElement(w,{first:e.logo,second:"",className:"contactme-logo"})),r.a.createElement("div",{className:"contact-details"},r.a.createElement("div",{className:"details-left"},r.a.createElement("p",{className:"contact-text"},e.firstParahraph,r.a.createElement("br",null),e.secondParagraph)),r.a.createElement("div",{className:"details-right"},r.a.createElement(_,{email:e.email}))),r.a.createElement(q,null))}}]),a}(r.a.Component);H.contextType=d;var A=H;h.a.init();var I=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).onLanguageChange=function(e){t.setState({language:e})},t.state={language:"english"},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(d.Provider,{value:this.state.language},r.a.createElement(N,{callback:this.onLanguageChange}),r.a.createElement(S,{preview:this.state.previewText}),r.a.createElement(P,null),r.a.createElement(A,null)))}}]),a}(r.a.Component);c.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8adfb7b5.chunk.js.map