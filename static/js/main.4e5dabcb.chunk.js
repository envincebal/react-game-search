(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/consoles.8a54017e.jpg"},18:function(e,a,t){e.exports=t(31)},23:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),m=(t(23),t(5)),s=t(6),o=t(8),i=t(7),u=t(9),p=t(33),d=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement(p.a,{exact:!0,to:"/react-game-search/",activeClassName:"selected",className:"nav-link"},"Home")),l.a.createElement("div",{className:"navbar-item"},l.a.createElement(p.a,{to:"/games",activeClassName:"selected",className:"nav-link"},"Games")),l.a.createElement("div",{className:"navbar-item"},l.a.createElement(p.a,{to:"/about",activeClassName:"selected",className:"nav-link"},"About")))},f=function(e){return l.a.createElement("div",{className:"about-container"},l.a.createElement("h1",{className:"about-title"},"About"),l.a.createElement("ul",{className:"about-list"},l.a.createElement("li",null,"The API provided for this app came from the good people at ",l.a.createElement("a",{className:"giant-bomb-link",href:"https://www.giantbomb.com/api/"},"GiantBomb"),"."),l.a.createElement("li",null,"This was created for all the wonderful lovers of video games out there."),l.a.createElement("li",null,l.a.createElement("strong",null,"DISCLAIMER:")," I am not responsible for anyone ending up in a World of Warcraft addiction program."),l.a.createElement("li",null,"I built this app with plenty of love and countless liters of Dr. Pepper.")))},E=t(29),h=function(e){var a=e.icon,t=e.gameTitle,n=e.game;return l.a.createElement("div",{className:"game-box"},l.a.createElement(E.a,{style:{textDecoration:"none"},to:{pathname:"/details",state:{game:n}}},l.a.createElement("div",{className:"game-content"},l.a.createElement("img",{className:"game-icon",src:a,alt:"icon"}),l.a.createElement("p",{className:"game-link"},l.a.createElement("strong",null,t)))))},g=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).updateInput=function(e){t.setState({title:e.target.value})},t.handleGames=function(e){var a="".concat("https://cors-anywhere.herokuapp.com/").concat("https://www.giantbomb.com/api/search/?api_key=").concat("8cd10a7136710c1003c8e216d85941ace5a1f00e","&format=json&resources=game&query=").concat(e,"&limit=30");t.setState({loading:!0},function(){fetch(a).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){t.setState(function(a){return{games:a.games.concat(e),loading:!1}})})}).catch(function(e){console.log("Request failed",e)}),t.setState({games:[]})})},t.handleSubmit=function(e){var a=t.state.title;e.preventDefault(),a?(t.setState({error:!1}),t.handleGames(a)):t.setState({error:!0})},t.state={title:"",games:[],error:!1,loading:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.games,t=e.error,n=e.loading;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"search-bar"},l.a.createElement("form",null,l.a.createElement("input",{className:"input-field",type:"text",placeholder:"Search Game",onChange:this.updateInput}),l.a.createElement("button",{className:"search-button",onClick:this.handleSubmit},"Search")),l.a.createElement("span",{className:"error"},t?"You kind of need to type something first, genius.":"")),l.a.createElement("div",{className:"games-container"},n?l.a.createElement("div",{className:"loading-div"},l.a.createElement("i",{className:"fa fa-3x fa-spinner fa-spin"}),l.a.createElement("p",{className:"loading"},"Loading....")):a.map(function(e){return l.a.createElement(h,{key:e.id,game:e,icon:e.image.icon_url,gameTitle:e.name})})))}}]),a}(n.Component),v=t(16),N=t.n(v),b=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).getReleaseDate=function(){var e=t.props.location.state.game,a=e.expected_release_day,n=e.expected_release_month,l=e.expected_release_year,c=e.original_release_date;return c?N()(c).format("l"):"".concat(a,"-").concat(n,"-").concat(l)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.location.state.game,a=e.image.medium_url,t=e.platforms,n=e.name,c=e.deck,r=e.site_detail_url;return l.a.createElement("div",{className:"details-content"},l.a.createElement("h1",{className:"game-title"},n),l.a.createElement("div",{className:"info-div"},l.a.createElement("div",{className:"box-art"},l.a.createElement("img",{className:"box-img",src:a,alt:"box art"})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",{className:"platforms"},l.a.createElement("h3",null,"Platforms"),l.a.createElement("p",null,t?t.map(function(e,a){return a===t.length-1?l.a.createElement("span",{className:"platform-item",key:a},e.name):l.a.createElement("span",{className:"platform-item",key:a},e.name+", ")}):l.a.createElement("p",null,"N/A"))),l.a.createElement("div",{className:"release-date"},l.a.createElement("h3",null,"Release Date"),l.a.createElement("p",null,this.getReleaseDate())),l.a.createElement("div",{className:"summary"},l.a.createElement("div",{className:"summary-content"},l.a.createElement("h3",null,"Summary"),l.a.createElement("p",null,c))),l.a.createElement("div",{className:"more-info"},l.a.createElement("div",{className:"more-info-content"},l.a.createElement("h3",null,"More information"),l.a.createElement("a",{className:"info-link",href:r,alt:"more info",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fas fa-3x fa-external-link-alt"})))))))}}]),a}(n.Component),y=t(17),k=t.n(y),j=function(e){return l.a.createElement("div",{className:"main-content"},l.a.createElement("h1",{className:"title"},"React Game Search"),l.a.createElement("p",null,"Search for all your favorite video games!"),l.a.createElement("img",{className:"main-image",src:k.a,alt:"consoles"}))},w=t(34),x=t(35),O=t(32),S=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(w.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement(x.a,null,l.a.createElement(O.a,{exact:!0,path:"/react-game-search/",component:j}),l.a.createElement(O.a,{path:"/games",component:g}),l.a.createElement(O.a,{path:"/about",component:f}),"}",l.a.createElement(O.a,{path:"/details",component:b}),"}"))))}}]),a}(n.Component);r.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.4e5dabcb.chunk.js.map