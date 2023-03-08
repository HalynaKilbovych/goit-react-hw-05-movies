"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{8530:function(n,e,t){t.d(e,{Hx:function(){return d},Y5:function(){return f},bI:function(){return l},wr:function(){return p},xc:function(){return v}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1243),s=t(7596),i=(t(5462),"c318186a7bfc382d3a0a4be08cb03883"),u="https://api.themoviedb.org/3",p=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/trending/movie/week?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0),(0,s.Am)("Something wrong");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(e));case 3:return 0===(t=n.sent).data.results.length&&(0,s.Am)("Oops...There are no such movies!"),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),(0,s.Am)("Something wrong"),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),(0,s.Am)("Something wrong"),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i));case 3:return 0===(t=n.sent).data.cast.length&&(0,s.Am)("Oops...There are no casts"),n.abrupt("return",t.data.cast);case 8:n.prev=8,n.t0=n.catch(0),(0,s.Am)("Something wrong"),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 3:return 0===(t=n.sent).data.results.length&&(0,s.Am)("Oops...There are no reviews"),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),(0,s.Am)("Something wrong"),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},5549:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,c,o,s=t(5861),i=t(9439),u=t(7757),p=t.n(u),l=t(2791),f=t(7689),v=t(8530),d=t(5243),h=t(168),x=t(6444),m=t(1087),g=x.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 50px;\n\n  > img { \n    height: 500px;\n  }\n"]))),w=x.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 50%; \n"]))),b=(0,x.ZP)(m.OL)(c||(c=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-transform: capitalize;\n  color: white;\n  text-decoration: none;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &.active {\n    color: #ec9706;\n  }\n  &:hover:not(.active),\n  &:focus-visible:not(.active) {\n    color: #ec9706;\n  }\n"]))),k=(0,x.ZP)(m.OL)(o||(o=(0,h.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: 2px solid orangered;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  max-width: 150px;\n  text-align: center;\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),Z=t(4757),j=t(184),y=function(n){var e=n.movie,t=n.backPath,r=(0,l.useState)(null),a=(0,i.Z)(r,2),c=a[0],o=a[1];if((0,l.useEffect)((function(){var n=function(){var n=(0,s.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.Y5)(e.id);case 3:t=n.sent,o(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e.id]),!c)return(0,j.jsx)(d.W0,{});var u=c.poster_path,f=c.title,h=c.vote_average,x=c.genres,m=c.overview;return(0,j.jsxs)(g,{children:[(0,j.jsx)("img",{src:null!==u?"https://image.tmdb.org/t/p/w500/".concat(u):Z,alt:f}),(0,j.jsxs)(w,{children:[(0,j.jsx)("h1",{children:f}),(0,j.jsxs)("p",{children:["Rating: ",h]}),(0,j.jsxs)("p",{children:["Genres: ",x.map((function(n){return n.name})).join(", ")]}),(0,j.jsx)("p",{children:m}),(0,j.jsx)(k,{to:"cast",state:{from:t},children:"Cast"}),(0,j.jsx)(k,{to:"reviews",state:{from:t},children:"Reviews"})]})]})},_=function(){var n,e,t=(0,f.UO)().movieId,r=(0,l.useState)(null),a=(0,i.Z)(r,2),c=a[0],o=a[1],u=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,l.useEffect)((function(){var n=function(){var n=(0,s.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.Y5)(t);case 2:e=n.sent,o(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]),c?(0,j.jsxs)("main",{style:{padding:"0 60px 40px 60px"},children:[c&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(b,{to:u,children:"Go back"}),(0,j.jsx)(y,{movie:c,backPath:u})]}),(0,j.jsx)(l.Suspense,{fallback:(0,j.jsx)(d.W0,{}),children:(0,j.jsx)(f.j3,{})})]}):(0,j.jsx)(d.W0,{})}},4757:function(n,e,t){n.exports=t.p+"static/media/no-poster.c6afaecfdc0f1a86a48c.jpg"}}]);
//# sourceMappingURL=549.5063ca39.chunk.js.map