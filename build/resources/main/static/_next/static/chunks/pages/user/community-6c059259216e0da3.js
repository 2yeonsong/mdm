(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{9138:function(t,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/community",function(){return c(510)}])},5651:function(t,n,c){"use strict";c.d(n,{AD:function(){return E},Aw:function(){return m},C3:function(){return Z},Fl:function(){return o},GG:function(){return l},HS:function(){return k},JQ:function(){return v},Mk:function(){return S},Mn:function(){return O},NU:function(){return r},O1:function(){return y},OR:function(){return I},Oz:function(){return x},Pk:function(){return p},QC:function(){return N},SQ:function(){return A},TD:function(){return b},Tk:function(){return u},Tr:function(){return h},XB:function(){return a},_I:function(){return q},dg:function(){return d},eG:function(){return g},fB:function(){return w},fu:function(){return _},i1:function(){return s},kZ:function(){return f},mF:function(){return C},pI:function(){return j},ph:function(){return z},r4:function(){return i},wh:function(){return B},zU:function(){return P}});var e=c(5121);async function a(t){try{return(await e.Z.post("http://ceprj.gachon.ac.kr:60011/user/login",t)).data.token}catch(t){alert("아이디와 비밀번호를 확인해주세요"),console.log(t)}}async function r(t){try{return(await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/user/update",{headers:{Authorization:"Bearer ".concat(t)}})).data}catch(t){console.log(t)}}async function o(t){try{await e.Z.post("http://ceprj.gachon.ac.kr:60011/user/register",t)}catch(t){console.log(t)}}async function i(t,n){try{return await e.Z.post("http://ceprj.gachon.ac.kr:60011/board/write",t,{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){return console.log(t),!1}}async function u(t,n,c){try{await e.Z.post("http://ceprj.gachon.ac.kr:60011/board/".concat(c,"/file/upload"),t,{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){return console.log(t),!1}}async function s(t,n,c){try{return await e.Z.patch("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/update"),n,{headers:{Authorization:"Bearer ".concat(c)}}),!0}catch(t){return console.log(t),!1}}async function l(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/board/list")}catch(t){console.log(t)}}async function h(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/board/".concat(t))}catch(t){console.log(t)}}async function p(t){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/delete"))}catch(t){console.log(t)}}async function d(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/board/search?title=".concat(t,"&content=a&writerName=a"))}catch(t){console.log(t)}}async function y(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/list"))}catch(t){console.log(t)}}async function g(t,n,c){try{return await e.Z.post("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/write"),n,{headers:{Authorization:"Bearer ".concat(c)}})}catch(t){console.log(t)}}async function f(t,n,c){try{return await e.Z.delete("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/delete/").concat(n),{headers:{Authorization:"Bearer ".concat(c)}})}catch(t){console.log(t)}}async function m(t,n,c,a){try{return await e.Z.patch("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/update/").concat(n),c,{headers:{Authorization:"Bearer ".concat(a)}}),!0}catch(t){return console.log(t),!1}}async function w(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/inquiry/list")}catch(t){console.log(t)}}async function j(t,n){try{return await e.Z.post("http://ceprj.gachon.ac.kr:60011/inquiry/write",t,{headers:{Authorization:"Bearer ".concat(n)}}),!0}catch(t){return console.log(t),!1}}async function _(t,n){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/inquiry/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function k(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/admin/user/list")}catch(t){console.log(t)}}async function Z(t){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/user/delete/".concat(t))}catch(t){console.log(t)}}async function b(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/admin/board/list")}catch(t){console.log(t)}}async function x(t){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/board/delete/".concat(t))}catch(t){console.log(t)}}async function v(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/admin/inquiry/list")}catch(t){console.log(t)}}async function z(t){try{return await e.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/inquiry/delete/".concat(t))}catch(t){console.log(t)}}async function B(t,n){try{await e.Z.patch("http://ceprj.gachon.ac.kr:60011/admin/inquiry/".concat(t,"/answer"),n)}catch(t){console.log(t)}}async function A(t,n){try{await e.Z.patch("http://ceprj.gachon.ac.kr:60011/mypage/user/update",t,{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function N(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/board/list",{headers:{Authorization:"Bearer ".concat(t)}})}catch(t){console.log(t)}}async function C(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/comment/list",{headers:{Authorization:"Bearer ".concat(t)}})}catch(t){console.log(t)}}async function O(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/inquiry/list",{headers:{Authorization:"Bearer ".concat(t)}})}catch(t){console.log(t)}}async function E(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/board/list/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function q(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/comment/list/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function I(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/user/update/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function P(t){try{let n=await e.Z.get("http://ceprj.gachon.ac.kr:60011/video/download?videoId=6",{headers:{Authorization:"Bearer ".concat(t)},responseType:"blob"});return window.URL.createObjectURL(n.data)}catch(t){console.log(t)}}async function S(t,n){try{let c=await e.Z.post("http://61.79.137.116:5000/detect",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n)}});return console.log(c),c}catch(t){console.error("업로드 에러:",t)}}},510:function(t,n,c){"use strict";c.r(n),c.d(n,{default:function(){return m}});var e=c(5893),a=c(8210),r=c(4754),o=c.n(r),i=c(5542),u=c(1163),s=c(1365),l=c(3841),h=c(9281),p=c(5819),d=c(9417),y=c(5007),g=c(7294),f=c(5651);function m(){let t=(0,u.useRouter)(),n=(0,y.v9)(t=>t.auth.isUserAuthenticated),[c,r]=(0,g.useState)(0),[m,w]=(0,g.useState)([]);return(0,g.useEffect)(()=>{(async()=>{let{data:t}=await (0,f.GG)();w(t.content)})()},[]),(0,e.jsx)("div",{className:o().wrapper,children:(0,e.jsxs)("div",{className:o().container,children:[(0,e.jsx)("div",{className:o().box,children:(0,e.jsx)("h2",{children:"커뮤니티"})}),(0,e.jsxs)("div",{className:o().search_bar,children:[(0,e.jsxs)(s.Z,{sx:{minWidth:80},children:[(0,e.jsx)(l.Z,{id:"demo-simple-select-label",children:"검색 옵션"}),(0,e.jsxs)(h.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,label:"검색옵션",onChange:t=>{r(t.target.value)},style:{height:"42px"},children:[(0,e.jsx)(p.Z,{value:10,children:"제목"}),(0,e.jsx)(p.Z,{value:20,children:"작성자"}),(0,e.jsx)(p.Z,{value:30,children:"내용"})]})]}),(0,e.jsx)(a.Z,{})]}),m&&m.map(t=>(0,e.jsx)(i.Z,{id:t.boardId,title:t.title,content:t.content,viewCount:t.viewCount},t.boardId)),(0,e.jsx)("div",{className:o().new_post,children:(0,e.jsx)(d.Z,{style:{color:"black"},onClick:()=>{if(!n){alert("로그인이 필요합니다."),t.push("/login");return}t.push("/user/community/newpost")},children:"글쓰기"})}),(0,e.jsx)("div",{className:o().paging,children:(0,e.jsx)("p",{children:"1"})})]})})}},5542:function(t,n,c){"use strict";c.d(n,{Z:function(){return h}});var e=c(5893),a=c(1163),r=c(1182),o=c.n(r),i=c(2091),u=c(80),s=c(7294),l=c(5651);function h(t){let{id:n,title:c,content:r,viewCount:h}=t,p=(0,a.useRouter)(),[d,y]=(0,s.useState)();return(0,s.useEffect)(()=>{(async()=>{let t=await (0,l.O1)(n);t&&y(t.data.totalElements)})()},[n]),(0,e.jsxs)("div",{className:o().container,onClick:()=>{p.push("/user/community/communityDetail/".concat(n))},children:[(0,e.jsx)("div",{className:o().title,children:c}),(0,e.jsx)("div",{className:o().content,children:r.slice(0,75)}),(0,e.jsxs)("div",{className:o().like,children:[(0,e.jsx)(i.z5B,{size:20}),h,(0,e.jsx)(u.iSW,{size:20}),d]})]})}},4754:function(t){t.exports={wrapper:"community_wrapper__A0g_W",container:"community_container__zgDYV",box:"community_box__2rKX1",search_bar:"community_search_bar__mGfmy",paging:"community_paging___K8H8",new_post:"community_new_post__ovQvI",button:"community_button__Bz3ts"}},1182:function(t){t.exports={container:"CommunityPost_container__tBihv",title:"CommunityPost_title__boYOQ",content:"CommunityPost_content__SOYjF",like:"CommunityPost_like__CHvj7"}}},function(t){t.O(0,[365,838,121,257,888,774,179],function(){return t(t.s=9138)}),_N_E=t.O()}]);