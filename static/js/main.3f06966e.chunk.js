(this.webpackJsonpiamip=this.webpackJsonpiamip||[]).push([[0],{68:function(e,t,n){e.exports=n(80)},73:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),i=(n(73),n(52)),s=n(53),m=n(56),u=n(59),l=n(57),p=n(112),d=n(15),f=n(19),b=n(118),E=n(117),O=n(119),g=n(115),v=Object(p.a)({postContainer:{background:"whitesmoke",minHeight:"12rem",width:"20rem",padding:"2rem",margin:"2rem 0",display:"flex",flexDirection:"column",alignItems:"space-between",justifyContent:"space-between"},buttonComments:{marginTop:"1rem"}}),y=function(e){var t=e.getComments,n=e.postComments,a=e.setIsShowComments,r=e.isShowComments,c=v(),i=function(e){n||t(),a(e)};return o.a.createElement(o.a.Fragment,null,r&&n?o.a.createElement(g.a,{className:c.buttonComments,variant:"contained",color:"secondary",onClick:function(){return i(!1)}},o.a.createElement(E.a,{variant:"button"},"ukryj komentarze")):o.a.createElement(g.a,{className:c.buttonComments,variant:"contained",color:"primary",onClick:function(){return i(!0)}},o.a.createElement(E.a,{variant:"button"},"poka\u017c komentarze")))},C=n(45),j=n(46),h=function(e,t){var n,a,o=t[0].postId,r=Object(j.a)(e),c=Object(C.a)(r);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(i.getIn(["id"])===o)if("break"===function(){var e=i.set("comments",t);return n=r.update(S(r,"id",o),(function(){return e})).toJS(),"break"}())break}}catch(s){c.e(s)}finally{c.f()}return n},S=function(e,t,n){return e.findIndex((function(e){return e.getIn([t])===n}))},x=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))},N=n(120),_=Object(p.a)({textField:{margin:".5rem 0",width:"100%"},button:{marginTop:"1rem"}}),w=Object(d.b)((function(e){return{posts:e.posts}}),(function(e){return{onAddComment:function(t){return e(function(e){return{type:"ON_ADD_POST_COMMENT",payload:e}}(t))}}}))((function(e){var t=e.posts,n=e.postId,r=e.onAddComment,c=e.postComments,i=_(),s=Object(a.useState)(""),m=Object(f.a)(s,2),u=m[0],l=m[1],p=Object(a.useState)(""),d=Object(f.a)(p,2),b=d[0],O=d[1],v=Object(a.useState)(""),y=Object(f.a)(v,2),h=y[0],x=y[1],w=Object(a.useState)(!1),T=Object(f.a)(w,2),k=T[0],I=T[1],M=function(e){var t=e.target;"name"===t.name&&l(t.value),"email"===t.name&&O(t.value),"body"===t.name&&x(t.value)},A=function(e){r(function(e,t,n){var a,o,r=Object(j.a)(e),c=Object(C.a)(r);try{for(c.s();!(o=c.n()).done;){var i=o.value;if(i.getIn(["id"])===t)if("break"===function(){var e=i.getIn(["comments"]).push(n),o=i.set("comments",e);return a=r.update(S(r,"id",t),(function(){return o})).toJS(),"break"}())break}}catch(s){c.e(s)}finally{c.f()}return a}(t,n,e))},P=Object(a.useCallback)((function(){var e=/user/;return c.filter((function(t){return e.test(t.id)})).length>0}),[c]);return Object(a.useEffect)((function(){I(P())}),[c,P]),o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target;A(function(e){return{postId:n,id:"".concat((new Date).getTime(),"user"),name:e.name.value,email:e.email.value,body:e.body.value}}(t)),l(""),O(""),x("")}},o.a.createElement(N.a,{className:i.textField,label:"Name: ",name:"name",disabled:k,value:u,onChange:M,required:!0,type:"text",variant:"outlined"}),o.a.createElement(N.a,{className:i.textField,label:"Email: ",name:"email",disabled:k,value:b,onChange:M,required:!1,type:"email",variant:"outlined"}),o.a.createElement(N.a,{className:i.textField,label:"Body: ",name:"body",placeholder:"Tw\xf3j komentarz",disabled:k,value:h,onChange:M,required:!0,multiline:!0,variant:"outlined"}),o.a.createElement(g.a,{type:"submit",variant:"contained",color:"primary",size:"small",disabled:k,className:i.button},"Dodaj komentarz"),k&&o.a.createElement(E.a,{variant:"overline",component:"p",color:"secondary"},"You can add only 1 comment.")))})),T=Object(p.a)({commentContainer:{boxSizing:"border-box",width:"100%",boxShadow:"2px 2px 12px rgba(128, 128, 128, 0.37) inset",borderRadius:"6px",padding:".6rem",margin:"1rem auto"},buttonContainer:{padding:"1rem 0",display:"flex",justifyContent:"center"}}),k=function(e){var t=e.commentId,n=e.commentName,a=e.commentEmail,r=e.commentBody,c=e.posts,i=e.onDeleteComment,s=e.postId,m=T();return o.a.createElement("section",{key:t,className:m.commentContainer},o.a.createElement("p",null,"NAME: ",n),o.a.createElement("p",null,"EMAIL: ",a),o.a.createElement(E.a,{variant:"body2",component:"p"},"COMMENT: ",r),o.a.createElement("div",{className:m.buttonContainer},o.a.createElement(g.a,{onClick:function(){i(function(e,t,n){var a,o,r=Object(j.a)(e),c=Object(C.a)(r);try{for(c.s();!(o=c.n()).done;){var i=o.value;if(i.getIn(["id"])===t)if("break"===function(){var e=i.getIn(["comments"]),o=S(e,"id",n),c=e.delete(o),s=i.set("comments",c);return a=r.update(S(r,"id",t),(function(){return s})).toJS(),"break"}())break}}catch(s){c.e(s)}finally{c.f()}return a}(c,s,t))},variant:"contained",color:"secondary",size:"small"},"Usu\u0144")))},I=Object(p.a)({commentsContainer:{width:"100%",margin:"0 auto",display:"flex",flexDirection:"column"},commentContainer:{boxSizing:"border-box",width:"100%",boxShadow:"2px 2px 12px rgba(128, 128, 128, 0.37) inset",borderRadius:"6px",padding:".6rem",margin:"1rem auto"}}),M=Object(d.b)((function(e){return{posts:e.posts}}),(function(e){return{onGetComments:function(t){return e(function(e){return{type:"ON_REQUEST_POST_COMMENTS",payload:e}}(t))},onDeleteComment:function(t){return e(function(e){return{type:"ON_DELETE_COMMENT",payload:e}}(t))}}}))((function(e){var t=e.postComments,n=e.postId,r=e.onGetComments,c=e.setIsProgressSpinner,i=e.posts,s=e.onDeleteComment,m=I(),u=Object(a.useState)(!1),l=Object(f.a)(u,2),p=l[0],d=l[1],b=function(){return t&&p};return o.a.createElement("div",{className:m.commentsContainer},o.a.createElement(y,{postComments:t,getComments:function(){c(!0),r(n)},setIsShowComments:d,isShowComments:p}),b()&&t.map((function(e){return o.a.createElement(k,{key:e.id,commentId:e.id,commentName:e.name,commentEmail:e.email,commentBody:e.body,posts:i,postId:n,onDeleteComment:s})})),b()&&o.a.createElement(w,{postId:n,postComments:t}))})),A=Object(p.a)({postContainer:{background:"whitesmoke",minHeight:"20rem",width:"20rem",padding:"2rem",margin:"2rem 0",display:"flex",flexDirection:"column",alignItems:"space-between",justifyContent:"space-between"},progressSpinnerContainer:{display:"flex",justifyContent:"center",paddingTop:"1rem"},buttonComments:{marginTop:"1rem"}}),P=Object(d.b)((function(e){return{posts:e.posts}}),null)((function(e){var t=e.postId,n=e.postTitle,r=e.postBody,c=e.postComments,i=A(),s=Object(a.useState)(!1),m=Object(f.a)(s,2),u=m[0],l=m[1];return Object(a.useEffect)((function(){c&&l(!1)}),[c]),o.a.createElement("section",{key:t},o.a.createElement(b.a,{elevation:1,className:i.postContainer},o.a.createElement(E.a,{variant:"overline",component:"p"},o.a.createElement("strong",null,t)),o.a.createElement(E.a,{variant:"overline",component:"h2"},o.a.createElement("strong",null,"title:")," ",n),o.a.createElement(E.a,{variant:"body2",component:"p"},o.a.createElement(E.a,{variant:"overline"},o.a.createElement("strong",null,"Body:"))," ",r),o.a.createElement(M,{postComments:c,postId:t,setIsProgressSpinner:l}),o.a.createElement("div",{className:i.progressSpinnerContainer},u&&o.a.createElement(O.a,null))))})),D=n(121),F=Object(p.a)({container:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},title:{marginBottom:"1rem"}}),z=Object(d.b)((function(e){return{page:e.page,pagesAmount:e.pagesAmount}}),(function(e){return{onSetPage:function(t){return e(function(e){return{type:"ON_SET_PAGE",payload:e}}(t))}}}))((function(e){var t=e.onSetPage,n=e.pagesAmount,a=F();return o.a.createElement("div",{className:a.container},o.a.createElement(E.a,{className:a.title,variant:"h5",component:"h1"},o.a.createElement("strong",null,"IamIP")," - recruitment task"),o.a.createElement(D.a,{count:n,color:"primary",onChange:function(e,n){return t(n)}}))})),B=Object(p.a)({postsContainer:{margin:"4rem auto",width:"98vw",background:"white",display:"flex",flexDirection:"columns",flexWrap:"wrap",justifyContent:"space-around"},paginationContainer:{position:"fixed",top:"0",display:"flex",justifyContent:"center",background:"white",width:"100%",margin:"0 auto",padding:"1rem 0",zIndex:100}}),G=Object(d.b)((function(e){return{posts:e.posts,pagesAmount:e.pagesAmount,page:e.page}}),(function(e){return{onGetPosts:function(){return e({type:"ON_REQUEST_POSTS"})},onSetPagesAmount:function(t){return e(function(e){return{type:"ON_SET_PAGES_AMOUNT",payload:e}}(t))}}}))((function(e){var t=e.posts,n=e.onGetPosts,r=e.onSetPagesAmount,c=e.pagesAmount,i=e.page,s=B();Object(a.useEffect)((function(){n()}),[n]),Object(a.useEffect)((function(){r(function(e){return Math.ceil(e.length/10)}(t))}),[t,r]);var m=function(){return t.reduce((function(e,t){return function(e,t,n){var a=parseInt(e),o=t*n;return a<=o&&a>o-n}(t.id,i,c)?[].concat(Object(l.a)(e),[t]):e}),[])};return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:s.paginationContainer},o.a.createElement(z,{pagesAmount:c})),o.a.createElement("main",{className:s.postsContainer},m().map((function(e){return o.a.createElement(P,{key:e.id,postId:e.id,postTitle:e.title,postBody:e.body,postComments:e.comments})}))))})),U=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(G,null))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(23),H=n(28),J={posts:[],pagesAmount:0,page:1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_FETCH_POSTS":case"ON_FETCH_POST_COMMENTS":case"ON_ADD_POST_COMMENT":return Object(H.a)({},e,{posts:t.payload});case"ON_SET_PAGES_AMOUNT":return Object(H.a)({},e,{pagesAmount:t.payload});case"ON_SET_PAGE":return Object(H.a)({},e,{page:t.payload});case"ON_DELETE_COMMENT":return Object(H.a)({},e,{posts:t.payload});default:return e}},Q=n(58),q=n(17),W=n.n(q),X=n(20),V=W.a.mark(Y);function Y(){var e;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com/posts",t.next=3,x("https://jsonplaceholder.typicode.com/posts");case 3:return e=t.sent,t.next=6,Object(X.b)({type:"ON_FETCH_POSTS",payload:e});case 6:case"end":return t.stop()}}),V)}var $=function(e){return e.posts},K=W.a.mark(Z);function Z(e){var t,n,a,o;return W.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(X.c)($);case 3:return n=r.sent,a="https://jsonplaceholder.typicode.com/comments?postId=".concat(t),r.next=7,x(a);case 7:return o=r.sent,r.next=10,Object(X.b)({type:"ON_FETCH_POST_COMMENTS",payload:h(n,o)});case 10:case"end":return r.stop()}}),K)}var ee=W.a.mark(ne),te=W.a.mark(ae);function ne(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.e)("ON_REQUEST_POSTS",Y);case 2:return e.next=4,Object(X.d)("ON_REQUEST_POST_COMMENTS",Z);case 4:case"end":return e.stop()}}),ee)}function ae(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.a)([ne()]);case 2:case"end":return e.stop()}}),te)}var oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.c,re=Object(Q.a)(),ce=Object(R.d)(L,oe(Object(R.a)(re)));re.run(ae),c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,{store:ce},o.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.3f06966e.chunk.js.map