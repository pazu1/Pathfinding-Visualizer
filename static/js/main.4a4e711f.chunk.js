(this.webpackJsonppathfinding=this.webpackJsonppathfinding||[]).push([[0],{34:function(e,t,n){e.exports=n(53)},39:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(23),o=n.n(r),s=(n(39),n(9)),c=n(5),l=n.n(c),u=n(8),h=n(2),d=n(6),p=n(1),f=n(4),m=n(3),v=(n(41),n(15)),b=n.n(v),g=n(16),y=n.n(g),x=n(26),S=n.n(x),k=n(27),E=n.n(k),w=n(28),z=n.n(w),O=i.a.createContext(),j=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this)).setMobile=function(e){a.setState({mobile:e})},a.state={mobile:!1},a.onResize=a.onResize.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"onResize",value:function(){var e=this;window.requestAnimationFrame((function(){e.setState((function(){var e=window.innerWidth;return{width:e,mobile:e<800}}))}))}},{key:"componentWillMount",value:function(){this.setState({width:window.innerWidth,mobile:window.innerWidth<800})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.state.mobile,t=this.setMobile;return i.a.createElement(O.Provider,{value:{mobile:e,setMobile:t}},this.props.children)}}]),n}(i.a.Component),C=O,A=n(29),M=n.n(A),B=n(30),I=n.n(B),N=n(7),R=[{background:"#eee",color:"#000",transform:"scale(1.0)"},{background:"#000",color:"#000",transform:"scale(1.0)"},{background:"#36bf00",transform:"scale(0.7)"},{background:"#a200ff",transform:"scale(0.7)"},{background:"#38ffc7",transform:"scale(0.2)"},{background:"#f05e54",transform:"scale(1.0)"},{background:"#38ffc7",transform:"scale(1.0)"}],D=1,T=2,F=3,V=0,G=1,P=2,W=3,L=4,J=5,U=0,q=1,H=2,Y="Please add a start node.",K="Please add an end node.",Q=[[-1,0],[0,1],[1,0],[0,-1]];var X=function(e){var t=e.mobile,n=e.hide,a=Object(N.c)({height:n?0:220,opacity:n?0:1,config:function(e){return"height"===e?N.b.wobbly:N.b.stiff}}),r={height:a.height,opacity:a.opacity};return i.a.createElement(N.a.div,{className:t?"topBarMobile":"topBar",style:t?r:null},i.a.createElement("div",{style:t?{display:"none"}:null},i.a.createElement("label",null,"Algorithm: "),i.a.createElement("select",{name:"algorithms",id:"algorithms",onChange:e.changeSelectedAlgorithm,disabled:e.visualizationState!==U},i.a.createElement("option",{value:D},"A*"),i.a.createElement("option",{value:T},"BFS"),i.a.createElement("option",{value:F},"DFS"))),i.a.createElement("br",null),i.a.createElement("div",{className:"sliderContainer"},i.a.createElement("label",null,"Visualization speed:"),i.a.createElement(M.a,{min:10,max:100,value:e.visualizationSpeed,onChange:function(t){return e.changeVisSpeed(t.target.value)}})),i.a.createElement("br",null),i.a.createElement("button",{type:"button",className:"settingsButton",disabled:e.visualizationState===q,onClick:function(){return e.onMazeClick()}},"Generate maze"),i.a.createElement("br",null),i.a.createElement("button",{type:"button",className:"resetButton",disabled:e.visualizationState===q,onClick:function(){return e.onResetClick(!0)}},i.a.createElement(I.a,{fontSize:"17px",className:"ionIcon",color:e.visualizationState===q?"#666":null}),"Reset grid"),i.a.createElement("br",null),i.a.createElement("button",{style:t?{display:"none"}:null,type:"button",className:"settingsButton",onClick:e.onClick},e.runButtonIcon,e.runButtonText))},Z=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={expanded:!0},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.context.mobile,n="Run! ",a=i.a.createElement(z.a,{fontSize:"17px",className:"ionIcon"});this.props.visualizationState===q?(n="Skip visualization",a=i.a.createElement(S.a,{fontSize:"17px",className:"ionIcon"})):this.props.visualizationState===H&&(n="Clear path",a=i.a.createElement(E.a,{fontSize:"17px",className:"ionIcon"}));var r=i.a.createElement(y.a,{fontSize:"25px",className:"ionDropdown"});return this.state.expanded||(r=i.a.createElement(b.a,{fontSize:"25px",className:"ionDropdown"})),i.a.createElement("div",{className:t?"topBarContainer":null},i.a.createElement("button",{className:"topBarToggle",style:t?null:{display:"none"},onClick:function(){return e.setState((function(e){return{expanded:!e.expanded}}))}},"Options",r),i.a.createElement(X,{hide:!this.state.expanded,mobile:t,changeSelectedAlgorithm:this.props.changeSelectedAlgorithm,visualizationState:this.props.visualizationState,onClick:this.props.onClick,changeVisSpeed:this.props.changeVisSpeed,visualizationSpeed:this.props.visualizationSpeed,runButtonText:n,runButtonIcon:a,onMazeClick:this.props.onMazeClick,onResetClick:this.props.onResetClick}),i.a.createElement("div",{className:"mobileActionBar",style:t?null:{display:"none"}},i.a.createElement("div",null,i.a.createElement("label",{style:{textShadow:"2px 2px 8px #000000"}},"Algorithm: "),i.a.createElement("select",{name:"algorithms",id:"algorithms",onChange:this.props.changeSelectedAlgorithm,disabled:this.props.visualizationState!==U},i.a.createElement("option",{value:D},"A*"),i.a.createElement("option",{value:T},"BFS"),i.a.createElement("option",{value:F},"DFS"))),i.a.createElement("button",{className:"settingsButton",style:t?null:{display:"none"},type:"button",onClick:this.props.onClick},a,n)))}}]),n}(i.a.Component);Z.contextType=C;var $=Z,_=n(17);var ee=function(e){var t=Object(a.useState)(),n=Object(_.a)(t,2)[1],r=function(){n({})},o=Object(a.useRef)();return e.cell.ref=o,i.a.createElement("button",{ref:o,type:"button",className:"gridButton",onMouseDown:function(){e.disableDrawing||(e.clickFunction(e.x,e.y),r())},onMouseOver:function(){e.drawing&&!e.disableDrawing&&(e.clickFunction(e.x,e.y),r())}},"\u200e")},te=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={drawing:!1,runningAlgorithm:!1},e}return Object(d.a)(n,[{key:"handleMouse",value:function(e,t){this.setState({drawing:t})}},{key:"render",value:function(){var e=this,t=-1,n=this.props.grid.map((function(n){var a=-1;t++;var r=n.map((function(n){return a++,i.a.createElement("td",{key:a},i.a.createElement(ee,{cell:e.props.grid[t][a],x:a,y:t,clickFunction:e.props.updateCell,drawing:e.state.drawing,disableDrawing:e.props.disableDrawing}))}));return i.a.createElement("tr",{key:t},r)}));return i.a.createElement("table",{className:"gridBase",onMouseDown:function(t){e.handleMouse(t,!0)},onMouseLeave:function(t){return e.handleMouse(t,!1)},onMouseUp:function(t){return e.handleMouse(t,!1)}},i.a.createElement("tbody",null,n))}}]),n}(i.a.Component),ne=n(31);var ae=function(e){var t={display:"table-row"};return e.disabled&&(t.boxShadow="none",t.border="2px solid transparent"),i.a.createElement(ne.a,{trigger:i.a.createElement("button",{className:"itemBarBtn",style:t,onClick:e.onClick},i.a.createElement("span",{style:{color:e.color}},"\u25a0 "),e.text?i.a.createElement("p",{id:"itemBarText"},e.text):"item"),position:"right center",closeOnDocumentClick:!0,open:e.showTip,on:"none",onClose:e.onTipClosed},e.tipText)};var ie=function(e){var t=Object(a.useState)(!0),n=Object(_.a)(t,2),r=n[0],o=n[1],s=!r||e.hidden,c=i.a.createElement(y.a,{fontSize:"25px",className:"ionDropdown"});s&&(c=i.a.createElement(b.a,{fontSize:"25px",className:"ionDropdown"}));var l=Object(N.c)({height:s?0:330,opacity:s?0:1,config:function(e){return"height"===e?N.b.wobbly:N.b.stiff}}),u={height:l.height,opacity:l.opacity};return i.a.createElement("div",{className:"itemBarContainer"},i.a.createElement("button",{className:"itemBarToggle",onClick:function(){e.hidden||o(!r)}},"Items",c),i.a.createElement(N.a.div,{className:"itemBar",style:u},i.a.createElement(ae,{text:"Start node",color:"#36bf00",disabled:e.selectedItem!==P,onClick:function(){e.changeSelectedItem(P)},showTip:e.activeAlert===Y,tipText:e.activeAlert,onTipClosed:e.removeAlert}),i.a.createElement(ae,{text:"End node",color:"#a200ff",disabled:e.selectedItem!==W,onClick:function(){e.changeSelectedItem(W)},showTip:e.activeAlert===K,tipText:e.activeAlert,onTipClosed:e.removeAlert}),i.a.createElement(ae,{text:"Wall",color:"#000",disabled:e.selectedItem!==G,onClick:function(){return e.changeSelectedItem(G)}}),i.a.createElement(ae,{text:"Eraser",color:"#fff",disabled:e.selectedItem!==V,onClick:function(){return e.changeSelectedItem(V)}})))};var re=function(e){var t=30;Object(a.useContext)(C).mobile&&(t=90);var n=Object(N.c)({height:e.active?50:0,opacity:e.active?1:0,bottom:e.active?t:0}),r=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current}(e.isAlert),o={height:n.height,opacity:n.opacity,background:e.isAlert&&r?"#f05e54":null,bottom:n.bottom};return i.a.createElement(N.a.div,{className:"notification",style:o},i.a.createElement("p",null,e.active?e.text:null))};function oe(e){return new Promise((function(t){return setTimeout(t,e)}))}function se(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t.current.style.background=e.background,t.current.style.transform=e.transform,n&&n(t)}function ce(e,t){return le.apply(this,arguments)}function le(){return(le=Object(u.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<t.length)){e.next=7;break}return e.next=4,n(t[a],a,t);case 4:a++,e.next=1;break;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).grid=[],e.start=null,e.end=null,e.route=[],e.state={algorithm:D,item:P,activeAlert:null,visualizationState:U,visualizationSpeed:90},e.drawOnGrid=e.drawOnGrid.bind(Object(p.a)(e)),e.changeAlgorithm=e.changeAlgorithm.bind(Object(p.a)(e)),e.changeItem=e.changeItem.bind(Object(p.a)(e)),e.onRunButtonClick=e.onRunButtonClick.bind(Object(p.a)(e)),e.updateRoute=e.updateRoute.bind(Object(p.a)(e)),e.clearVisualization=e.clearVisualization.bind(Object(p.a)(e)),e.removeAlert=e.removeAlert.bind(Object(p.a)(e)),e.changeVisSpeed=e.changeVisSpeed.bind(Object(p.a)(e)),e.createGrid=e.createGrid.bind(Object(p.a)(e)),e.generateMazeSimple=e.generateMazeSimple.bind(Object(p.a)(e)),e.algFunctions={1:e.aStarPlus.bind(Object(p.a)(e)),2:e.BFS.bind(Object(p.a)(e)),3:e.DFS.bind(Object(p.a)(e))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.createGrid()}},{key:"createGrid",value:function(){for(var e=Math.floor(.7*window.innerHeight/20),t=Math.floor(.65*window.innerWidth/20),n=[],a=0;a<e;a++){n.push([]);for(var i=0;i<t;i++)n[a].push({type:V,x:i,y:a,ref:null})}this.grid=n,this.setState({})}},{key:"changeItem",value:function(e){this.setState({item:e})}},{key:"changeAlgorithm",value:function(e){this.setState({algorithm:parseInt(e.target.value)})}},{key:"removeAlert",value:function(){this.setState({activeAlert:null})}},{key:"changeVisSpeed",value:function(e){this.setState({visualizationSpeed:e})}},{key:"onRunButtonClick",value:function(){var e=this,t=this.start,n=this.end;null!==t?null!==n?this.state.visualizationState===q?this.setState({visualizationState:H}):this.state.visualizationState===H?this.clearVisualization():this.setState({start:t,end:n,visualizationState:q},(function(){return e.algFunctions[e.state.algorithm](e.grid[t.y][t.x],e.grid[n.y][n.x])})):this.setState({activeAlert:K}):this.setState({activeAlert:Y})}},{key:"updateRoute",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.route.reverse(),ce(this.route,function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.state.visualizationState!==q){e.next=3;break}return e.next=3,oe(Math.abs(t.state.visualizationSpeed-110));case 3:t.grid[n.y][n.x].type=J,se(R[J],t.grid[n.y][n.x].ref);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){t.setState({visualizationState:H})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"drawOnGrid",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.item,i=function(e){var t=e.x,a=e.y;n.grid[a][t].type=V,se(R[V],n.grid[a][t].ref)};this.end&&this.end.x===e&&this.end.y===t?(i(this.end),this.end=null):this.start&&this.start.x===e&&this.start.y===t&&(i(this.start),this.start=null),a===P?(this.start&&i(this.start),this.start={x:e,y:t}):a===W&&(this.end&&i(this.end),this.end={x:e,y:t}),this.grid[t][e].type=a,se(R[a],this.grid[t][e].ref)}},{key:"generateMazeSimple",value:function(){var e=this;this.clearVisualization(),this.grid.forEach((function(e){e.forEach((function(e){e.type=G}))}));for(var t=[this.grid[1][1]],n=function(){var n=Math.floor(Math.random()*t.length),a=t[n];(function(t){var n=0;return!!t&&(Q.forEach((function(a){var i=t.x+a[0],r=t.y+a[1];e.grid[r]&&e.grid[r][i]&&e.grid[r][i].type===V&&(n+=1)})),n<=1)})(a)&&(a.type=V,Q.forEach((function(n){var i=a.x+n[0],r=a.y+n[1];e.grid[r]&&e.grid[r][i]&&t.push(e.grid[r][i])}))),t.splice(n,1)};t.length;)n();this.grid.forEach((function(t){t.forEach((function(t){e.drawOnGrid(t.x,t.y,t.type)}))}))}},{key:"aStarPlus",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,i,r,o,c,u,d,p,f=this,m=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=m.length>2&&void 0!==m[2]?m[2]:D,i=!1,o=function(e,t){return e.gScore>t.gScore?1:-1},(c=[]).push(new(r=function e(t,n,a,i){Object(h.a)(this,e),this.x=t,this.y=n,this.distance=a,this.gScore=i})(t.x,t.y,0,0)),u=Object(s.a)({},t.x+":"+t.y,null),d=this.grid,p=l.a.mark((function e(){var s,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((s=c.shift()).x!==n.x||s.y!==n.y){e.next=4;break}return i=!0,e.abrupt("return","break");case 4:if(Q.forEach((function(e){var i=s.x+e[0],o=s.y+e[1];if(d[o]&&d[o][i]){var l=d[o][i];if(l.type!==G&&(l.x!==t.x||l.y!==t.y)){u[i+":"+o]||(u[i+":"+o]={x:s.x,y:s.y,d:9999});var h=s.distance+1,p=h+1*(Math.abs(n.x-i)+Math.abs(n.y-o));h<u[i+":"+o].d&&(u[i+":"+o]={x:s.x,y:s.y,d:h},a!==F?c.push(new r(i,o,h,p)):c.unshift(new r(i,o,h,p)))}}})),(h=d[s.y][s.x]).type===P||h.type===L){e.next=15;break}if(h.type=L,f.state.visualizationState!==q){e.next=14;break}return e.next=11,oe(Math.abs(f.state.visualizationSpeed-110));case 11:se(R[L],h.ref,(function(e){oe(400).then((function(){e.current.style.transform="scale(1.0)"}))})),e.next=15;break;case 14:se(R[6],h.ref);case 15:a===D&&c.sort(o);case 16:case"end":return e.stop()}}),e)}));case 9:if(!c.length){e.next=16;break}return e.delegateYield(p(),"t0",11);case 11:if("break"!==e.t0){e.next=14;break}return e.abrupt("break",16);case 14:e.next=9;break;case 16:if(i&&this.setRoute(u,n),this.state.visualizationState!==q){e.next=20;break}return e.next=20,oe(100);case 20:this.updateRoute();case 21:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"DFS",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.aStarPlus(t,n,F);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"BFS",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.aStarPlus(t,n,T);case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"clearVisualization",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.route=[],this.setState((function(){return e.grid.map((function(n){return n=n.map((function(n){return e.start&&n.x===e.start.x&&n.y===e.start.y?n.type=P:e.end&&n.x===e.end.x&&n.y===e.end.y?n.type=W:(t||n.type===L||n.type===J)&&(se(R[V],n.ref),n.type=V),n}))})),{visualizationState:U}})),t&&(this.start=null,this.end=null)}},{key:"setRoute",value:function(e,t){this.route.push({x:t.x,y:t.y});for(var n=t.x+":"+t.y;null!==e[n];)this.route.push(e[n]),n=e[n].x+":"+e[n].y;console.log("Route length: "+this.route.length),this.route.shift(),this.route.pop()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j,null,i.a.createElement(re,{active:this.state.visualizationState===H,isAlert:!this.route.length,text:this.route.length?"Found path of length ".concat(this.route.length,"."):"Path not found!"}),i.a.createElement($,{changeSelectedAlgorithm:this.changeAlgorithm,onClick:this.onRunButtonClick,onMazeClick:this.generateMazeSimple,onResetClick:this.clearVisualization,visualizationState:this.state.visualizationState,changeVisSpeed:this.changeVisSpeed,visualizationSpeed:this.state.visualizationSpeed,activeAlert:this.state.activeAlert})),i.a.createElement("span",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"row",topMargin:"100",position:"fixed",padding:"0px 0px"}},i.a.createElement(ie,{changeSelectedItem:this.changeItem,selectedItem:this.state.item,hidden:this.state.visualizationState!==U,activeAlert:this.state.activeAlert,removeAlert:this.removeAlert}),i.a.createElement(te,{updateCell:this.drawOnGrid,selectedItem:this.state.item,grid:this.grid,disableDrawing:this.state.visualizationState!==U})))}}]),n}(i.a.Component);o.a.render(i.a.createElement(ue,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4a4e711f.chunk.js.map