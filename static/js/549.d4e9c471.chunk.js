"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{8530:function(n,e,t){t.d(e,{Hx:function(){return x},Y5:function(){return h},bI:function(){return d},wr:function(){return l},xc:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1243),i=t(7596),s="c318186a7bfc382d3a0a4be08cb03883",u="https://api.themoviedb.org/3",p=function(n){i.Am.isActive("notification")||(0,i.Am)(n,{toastId:"notification"})},l=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0),p("Something went wrong");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 3:return 0===(t=n.sent).data.results.length&&p("Oops...There are no such movies!"),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),p("Something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),p("Something went wrong");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(s));case 3:return 0===(t=n.sent).data.cast.length&&p("Oops...There are no casts"),n.abrupt("return",t.data.cast);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),p("Something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 3:return 0===(t=n.sent).data.results.length&&p("Oops...There are no reviews"),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),p("Something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},5549:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,c,o,i=t(5861),s=t(9439),u=t(7757),p=t.n(u),l=t(2791),d=t(7689),h=t(8530),f=t(168),x=t(6444),v=t(1087),m=x.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  @media only screen and (min-width: 1200px) {\n    gap: 50px;\n    flex-direction: row;\n  }\n  > img { \n    height: 200px;\n    @media only screen and (min-width: 1200px) {\n    height: 500px;\n}\n  }\n"]))),g=x.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  \n@media only screen and (min-width: 1200px) {\n    max-width: 50%; \n}\n"]))),w=(0,x.ZP)(v.OL)(c||(c=(0,f.Z)(["\n  align-items: center;\n  gap: 8px;\n  color: white;\n  text-decoration: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: 2px solid orangered;\n  margin-bottom: 10px;\n  display: block;\n  width: 100px;\n"]))),b=(0,x.ZP)(v.OL)(o||(o=(0,f.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: 2px solid orangered;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  max-width: 150px;\n  text-align: center;\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),k=t(4757),Z=t(184),j=function(n){var e=n.movie,t=n.backPath,r=e.poster_path,a=e.title,c=e.vote_average,o=e.genres,i=e.overview;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):k,alt:a}),(0,Z.jsxs)(g,{children:[(0,Z.jsx)("h1",{children:a}),(0,Z.jsxs)("p",{children:["Rating: ",c.toFixed(1)]}),(0,Z.jsxs)("p",{children:["Genres: ",o.map((function(n){return n.name})).join(", ")]}),(0,Z.jsx)("p",{children:i}),(0,Z.jsx)(b,{to:"cast",state:{from:t},children:"Cast"}),(0,Z.jsx)(b,{to:"reviews",state:{from:t},children:"Reviews"})]})]})},y=t(7793),_=t(7596),S=function(){var n,e,t=(0,d.UO)().movieId,r=(0,l.useState)(null),a=(0,s.Z)(r,2),c=a[0],o=a[1],u=(0,l.useState)(!1),f=(0,s.Z)(u,2),x=f[0],v=f[1],m=(0,l.useState)(""),g=(0,s.Z)(m,2),b=g[0],k=g[1],S=null!==(n=null===(e=(0,d.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,l.useEffect)((function(){v(!0);var n=function(){var n=(0,i.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Y5)(t);case 3:e=n.sent,o(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),k("Something wrong");case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,Z.jsxs)("main",{children:[x&&(0,Z.jsx)(y.a,{}),b&&(0,Z.jsx)("div",{children:(0,_.Am)(b)}),c&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,{to:S,children:"Go back"}),(0,Z.jsx)(j,{movie:c,backPath:S})]}),(0,Z.jsx)(l.Suspense,{fallback:(0,Z.jsx)(y.a,{}),children:(0,Z.jsx)(d.j3,{})})]})}},4757:function(n,e,t){n.exports=t.p+"static/media/no-poster.c6afaecfdc0f1a86a48c.jpg"}}]);
//# sourceMappingURL=549.d4e9c471.chunk.js.map