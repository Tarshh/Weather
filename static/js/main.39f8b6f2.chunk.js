(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(17),n(18),n(1)),s=n.n(i),l=n(7),u=n(2),m=n(3),p=n(5),h=n(4),d=n(6),f=(n(20),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.day,n=e.weatherIcon,a=e.Temp,c=e.Alt;return r.a.createElement("div",{className:"weatherBlockContainer"},r.a.createElement("p",null,t),r.a.createElement("img",{src:n,alt:c}),r.a.createElement("div",{className:"Temp"},r.a.createElement("p",null,a," \xb0 ")))}}]),t}(r.a.Component)),w=n(10),v=n.n(w),E=(n(22),n(23),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).fetchData=Object(l.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"c55a767d38684c4fb37145650190305",e.next=3,fetch("https://api.apixu.com/v1/current.json?key=".concat("c55a767d38684c4fb37145650190305","&q=").concat(n.state.city));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,n.setState({items:a,isLoading:!1});case 9:case"end":return e.stop()}},e)})),n.state={isLoading:!0,items:[],city:"Antwerp",currentTime:null,currentDate:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:setInterval(function(){t.setState({currentTime:(new Date).toLocaleTimeString()})});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onSelect",value:function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({city:t});case 2:return e.next=4,this.fetchData();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.items,a=t.city,c=t.isLoading;return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("p",null,"Loading weather..."),!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"Dropdown",options:["Antwerp","Brussels","Paris","London"],onChange:function(t){e.onSelect(t.value)},value:a,placeholder:"Select an option"}),r.a.createElement("div",{className:"weatherContainer"},r.a.createElement(f,{day:"Now",weatherIcon:n.current.condition.icon,alt:"Cloud-lightning",Temp:n.current.temp_c}),r.a.createElement("div",{className:"weatherInfoContainer"},r.a.createElement("p",{className:"WeatherInfoItem"},"Condition: ",r.a.createElement("span",null,n.current.condition.text," ")),r.a.createElement("p",{className:"WeatherInfoItem"},"Local Time:",r.a.createElement("span",null," ",this.state.currentTime," ")),r.a.createElement("p",{className:"WeatherInfoItem"},"Humidity: ",r.a.createElement("span",null,n.current.humidity,"%")),r.a.createElement("p",{className:"WeatherInfoItem"},"Wind Speed: ",r.a.createElement("span",null,n.current.wind_kph," kph")))),r.a.createElement("p",{className:"Update"},"Last updated on: ",n.current.last_updated)))}}]),t}(r.a.Component));var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.39f8b6f2.chunk.js.map