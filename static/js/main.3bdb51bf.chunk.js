(this.webpackJsonpiamip=this.webpackJsonpiamip||[]).push([[0],{49:function(e,t,n){e.exports=n(61)},54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),i=(n(54),n(40)),u=n(41),s=n(43),m=n(45),l=n(33),p=n(79),d=n(12),f=n(83),b=n(82),E=n(20),O=n(81),g=Object(p.a)({postContainer:{background:"whitesmoke",minHeight:"12rem",width:"20rem",padding:"2rem",margin:"2rem 0",display:"flex",flexDirection:"column",alignItems:"space-between",justifyContent:"space-between"},buttonComments:{marginTop:"1rem"}}),v=function(e){var t=e.getComments,n=e.postComments,a=e.setIsShowComments,r=e.isShowComments,c=g(),i=function(e){n||t(),a(e)};return o.a.createElement(o.a.Fragment,null,r&&n?o.a.createElement(O.a,{className:c.buttonComments,variant:"contained",color:"secondary",onClick:function(){return i(!1)}},o.a.createElement(b.a,{variant:"button"},"ukryj komentarze")):o.a.createElement(O.a,{className:c.buttonComments,variant:"contained",color:"primary",onClick:function(){return i(!0)}},o.a.createElement(b.a,{variant:"button"},"poka\u017c komentarze")))},y=function(e,t){var n=t[0].postId;return e.map((function(e){return e.id===n&&(e.comments=t),e}))},C=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))},h=Object(d.b)((function(e){return{posts:e.posts}}),(function(e){return{onAddComment:function(t){return e(function(e){return{type:"ON_ADD_POST_COMMENT",payload:e}}(t))}}}))((function(e){var t=e.posts,n=e.postId,r=e.onAddComment,c=Object(a.useState)(""),i=Object(E.a)(c,2),u=i[0],s=i[1],m=Object(a.useState)(""),p=Object(E.a)(m,2),d=p[0],f=p[1],b=Object(a.useState)(""),O=Object(E.a)(b,2),g=O[0],v=O[1],y=function(e){var t=e.target;"name"===t.name&&s(t.value),"email"===t.name&&f(t.value),"body"===t.name&&v(t.value)},C=function(e){r(function(e,t,n){return e.map((function(e){return e.id===t&&(e.comments=[].concat(Object(l.a)(e.comments),[n])),e}))}(t,n,e))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target;C(function(e){return{postId:n,id:(new Date).getTime(),name:e.name.value,email:e.email.value,body:e.body.value}}(t)),s(""),f(""),v("")}},o.a.createElement("label",null,"name:",o.a.createElement("input",{name:"name",type:"text",value:u,onChange:y,required:!0})),o.a.createElement("br",null),o.a.createElement("label",null,"email:",o.a.createElement("input",{name:"email",type:"email",value:d,onChange:y})),o.a.createElement("br",null),o.a.createElement("label",null,"body:",o.a.createElement("textarea",{name:"body",value:g,onChange:y,required:!0})),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Submit")))})),j=Object(p.a)({commentsContainer:{width:"100%",margin:"0 auto",display:"flex",flexDirection:"column"},commentContainer:{boxSizing:"border-box",width:"100%",boxShadow:"2px 2px 12px rgba(128, 128, 128, 0.37) inset",borderRadius:"6px",padding:".6rem",margin:"1rem auto"}}),S=Object(d.b)((function(e){return{posts:e.posts}}),(function(e){return{onGetComments:function(t){return e(function(e){return{type:"ON_GET_POST_COMMENTS",payload:e}}(t))}}}))((function(e){var t=e.postComments,n=e.postId,r=e.onGetComments,c=j(),i=Object(a.useState)(!1),u=Object(E.a)(i,2),s=u[0],m=u[1],l=function(){return t&&s};return o.a.createElement("div",{className:c.commentsContainer},o.a.createElement(v,{postComments:t,getComments:function(){r(n)},setIsShowComments:m,isShowComments:s}),l()&&t.map((function(e){return o.a.createElement("section",{key:e.id,className:c.commentContainer},o.a.createElement("p",null,"NAME: ",e.name),o.a.createElement("p",null,"EMAIL: ",e.email),o.a.createElement(b.a,{variant:"body2",component:"p"},"COMMENT: ",e.body))})),l()&&o.a.createElement(h,{postId:n}))})),_=Object(p.a)({postContainer:{background:"whitesmoke",minHeight:"19rem",width:"20rem",padding:"2rem",margin:"2rem 0",display:"flex",flexDirection:"column",alignItems:"space-between",justifyContent:"space-between"},buttonComments:{marginTop:"1rem"}}),w=Object(d.b)((function(e){return{posts:e.posts}}),null)((function(e){var t=e.postId,n=e.postTitle,a=e.postBody,r=e.postComments,c=_();return o.a.createElement("section",{key:t},o.a.createElement(f.a,{elevation:1,className:c.postContainer},o.a.createElement(b.a,{variant:"overline",component:"p"},o.a.createElement("strong",null,t)),o.a.createElement(b.a,{variant:"overline",component:"h2"},o.a.createElement("strong",null,"title:")," ",n),o.a.createElement(b.a,{variant:"body2",component:"p"},o.a.createElement(b.a,{variant:"overline"},o.a.createElement("strong",null,"Body:"))," ",a),o.a.createElement(S,{postComments:r,postId:t})))})),T=n(84),x=Object(d.b)((function(e){return{page:e.page,pagesAmount:e.pagesAmount}}),(function(e){return{onSetPage:function(t){return e(function(e){return{type:"ON_SET_PAGE",payload:e}}(t))}}}))((function(e){var t=e.onSetPage,n=e.pagesAmount;return o.a.createElement("div",null,o.a.createElement(T.a,{count:n,color:"primary",onChange:function(e,n){return t(n)}}))})),N=Object(p.a)({postsContainer:{margin:"4rem auto",width:"98vw",background:"white",display:"flex",flexDirection:"columns",flexWrap:"wrap",justifyContent:"space-around"},paginationContainer:{position:"fixed",top:"0",display:"flex",justifyContent:"center",background:"white",width:"100%",margin:"0 auto",padding:"1rem 0",zIndex:100}}),k=Object(d.b)((function(e){return{posts:e.posts,pagesAmount:e.pagesAmount,page:e.page}}),(function(e){return{onGetPosts:function(){return e({type:"ON_GET_POSTS"})},onSetPagesAmount:function(t){return e(function(e){return{type:"ON_SET_PAGES_AMOUNT",payload:e}}(t))}}}))((function(e){var t=e.posts,n=e.onGetPosts,r=e.onSetPagesAmount,c=e.pagesAmount,i=e.page,u=N();Object(a.useEffect)((function(){n()}),[n]),Object(a.useEffect)((function(){r(function(e){return Math.ceil(e.length/10)}(t))}),[t,r]);var s=function(){return t.reduce((function(e,t){return function(e,t){var n=parseInt(e),a=10*t;return n<=a&&n>a-10}(t.id,i)?[].concat(Object(l.a)(e),[t]):e}),[])};return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:u.paginationContainer},o.a.createElement(x,{pagesAmount:c})),o.a.createElement("main",{className:u.postsContainer},s().map((function(e){return o.a.createElement(w,{key:e.id,postId:e.id,postTitle:e.title,postBody:e.body,postComments:e.comments})}))))})),A=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(18),P=n(21),I={posts:[],pagesAmount:0,page:1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_FETCH_POSTS":case"ON_FETCH_POST_COMMENTS":case"ON_ADD_POST_COMMENT":return Object(P.a)({},e,{posts:t.payload});case"ON_SET_PAGES_AMOUNT":return Object(P.a)({},e,{pagesAmount:t.payload});case"ON_SET_PAGE":return Object(P.a)({},e,{page:t.payload});default:return e}},G=n(44),F=n(15),H=n.n(F),B=n(16),z=H.a.mark(U);function U(){var e;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com/posts",t.next=3,C("https://jsonplaceholder.typicode.com/posts");case 3:return e=t.sent,t.next=6,Object(B.b)({type:"ON_FETCH_POSTS",payload:e});case 6:case"end":return t.stop()}}),z)}var W=function(e){return e.posts},q=H.a.mark(J);function J(e){var t,n,a,o;return H.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(B.c)(W);case 3:return n=r.sent,a="https://jsonplaceholder.typicode.com/comments?postId=".concat(t),r.next=7,C(a);case 7:return o=r.sent,r.next=10,Object(B.b)({type:"ON_FETCH_POST_COMMENTS",payload:y(n,o)});case 10:case"end":return r.stop()}}),q)}var L=H.a.mark(X),R=H.a.mark(V);function X(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.e)("ON_GET_POSTS",U);case 2:return e.next=4,Object(B.d)("ON_GET_POST_COMMENTS",J);case 4:case"end":return e.stop()}}),L)}function V(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([X()]);case 2:case"end":return e.stop()}}),R)}var $=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,K=Object(G.a)(),Q=Object(M.d)(D,$(Object(M.a)(K)));K.run(V),c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,{store:Q},o.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.3bdb51bf.chunk.js.map