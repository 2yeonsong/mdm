(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9697],{9361:function(t,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/mypage/activity",function(){return c(1679)}])},5651:function(t,n,c){"use strict";c.d(n,{AD:function(){return O},Aw:function(){return _},C3:function(){return Z},Cx:function(){return G},Fl:function(){return r},GG:function(){return h},HH:function(){return X},HS:function(){return v},JQ:function(){return x},JS:function(){return P},K9:function(){return R},Mk:function(){return E},Mn:function(){return D},NH:function(){return H},NU:function(){return o},O1:function(){return g},OD:function(){return L},OR:function(){return T},Oz:function(){return b},Pk:function(){return p},QC:function(){return I},SQ:function(){return N},Sf:function(){return Q},TD:function(){return A},Tk:function(){return s},Tr:function(){return d},XB:function(){return a},_I:function(){return S},bt:function(){return q},dg:function(){return y},eG:function(){return f},fB:function(){return w},fu:function(){return j},i1:function(){return l},kZ:function(){return m},mF:function(){return C},mR:function(){return F},oO:function(){return J},pI:function(){return k},ph:function(){return z},r4:function(){return u},s6:function(){return i},wh:function(){return B},zt:function(){return K}});var e=c(5121);async function a(t){try{return(await e.Z.post("http://ceprj.gachon.ac.kr:60011/user/login",t)).data.token}catch(t){alert("아이디와 비밀번호를 확인해주세요"),console.log(t)}}async function o(t){try{let n=await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/user/update",{headers:{Authorization:"Bearer ".concat(t)}});return console.log(n),n.data}catch(t){console.log(t)}}async function r(t){try{await e.Z.post("http://ceprj.gachon.ac.kr:60011/user/register",t)}catch(t){console.log(t)}}async function i(t){try{let n=await e.Z.get("http://ceprj.gachon.ac.kr:60011/user/checkId?email=".concat(t));return console.log(n),alert("사용할 수 있는 이메일입니다."),200}catch(t){alert("사용할 수 없는 이메일입니다.")}}async function u(t,n){try{return await e.Z.post("http://ceprj.gachon.ac.kr:60011/board/write",t,{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){return console.log(t),!1}}async function s(t,n,c){try{await e.Z.post("http://ceprj.gachon.ac.kr:60011/board/".concat(c,"/file/upload"),t,{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){return console.log(t),!1}}async function l(t,n,c){try{return await e.Z.patch("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/update"),n,{headers:{Authorization:"Bearer ".concat(c)}}),!0}catch(t){return console.log(t),!1}}async function h(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/board/list")}catch(t){console.log(t)}}async function d(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/board/".concat(t))}catch(t){console.log(t)}}async function p(t){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/delete"))}catch(t){console.log(t)}}async function y(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/board/search?title=".concat(t,"&content=a&writerName=a"))}catch(t){console.log(t)}}async function g(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/list"))}catch(t){console.log(t)}}async function f(t,n,c){try{return await e.Z.post("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/write"),n,{headers:{Authorization:"Bearer ".concat(c)}})}catch(t){console.log(t)}}async function m(t,n,c){try{return await e.Z.delete("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/delete/").concat(n),{headers:{Authorization:"Bearer ".concat(c)}})}catch(t){console.log(t)}}async function _(t,n,c,a){try{return await e.Z.patch("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/update/").concat(n),c,{headers:{Authorization:"Bearer ".concat(a)}}),!0}catch(t){return console.log(t),!1}}async function w(){try{let t=await e.Z.get("http://ceprj.gachon.ac.kr:60011/inquiry/list");return console.log(t),t}catch(t){console.log(t)}}async function k(t,n){try{return await e.Z.post("http://ceprj.gachon.ac.kr:60011/inquiry/write",t,{headers:{Authorization:"Bearer ".concat(n)}}),!0}catch(t){return console.log(t),!1}}async function j(t,n){try{let c=await e.Z.get("http://ceprj.gachon.ac.kr:60011/inquiry/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}});return console.log(c),c}catch(t){console.log(t)}}async function v(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/admin/user/list")}catch(t){console.log(t)}}async function Z(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/user/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function A(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/admin/board/list")}catch(t){console.log(t)}}async function b(t,n){try{let c=await e.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/board/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}});console.log(c)}catch(t){console.log(t)}}async function x(){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/admin/inquiry/list")}catch(t){console.log(t)}}async function z(t,n){try{return await e.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/inquiry/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function B(t,n,c){try{let a=await e.Z.patch("http://ceprj.gachon.ac.kr:60011/admin/inquiry/".concat(t,"/answer"),n,{headers:{Authorization:"Bearer ".concat(c)}});console.log(a)}catch(t){console.log(t)}}async function N(t,n){try{await e.Z.patch("http://ceprj.gachon.ac.kr:60011/mypage/user/update",t,{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function I(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/board/list",{headers:{Authorization:"Bearer ".concat(t)}})}catch(t){console.log(t)}}async function C(t){try{return await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/comment/list",{headers:{Authorization:"Bearer ".concat(t)}})}catch(t){console.log(t)}}async function D(t){try{let n=await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/inquiry/list",{headers:{Authorization:"Bearer ".concat(t)}});return console.log(n),n}catch(t){console.log(t)}}async function O(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/board/list/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function S(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/comment/list/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function T(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/user/update/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function E(t,n){try{let c=await e.Z.post("http://61.79.137.116:5000/detect",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n)}});return console.log(c),c}catch(t){console.error("업로드 에러:",t)}}async function L(t,n,c){try{t.append("ratio",JSON.stringify({ratio:n}));let a=await e.Z.post("http://ceprj.gachon.ac.kr:60011/history/upload",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(c)}});return console.log(a),a}catch(t){console.error("업로드 에러:",t)}}async function q(t,n){try{let c=await e.Z.get("http://ceprj.gachon.ac.kr:60011/history/download?historyId=".concat(t),{headers:{Authorization:"Bearer ".concat(n)},responseType:"blob"});return console.log(c),c.data}catch(t){console.error("업로드 에러:",t)}}async function H(t){try{let n=await e.Z.get("http://ceprj.gachon.ac.kr:60011/admin/notice/list",{headers:{Authorization:"Bearer ".concat(t)}});return console.log(n),n}catch(t){console.log(t)}}async function K(t,n){try{let c=await e.Z.post("http://ceprj.gachon.ac.kr:60011/admin/notice/write",t,{headers:{Authorization:"Bearer ".concat(n)}});return console.log(c),c}catch(t){console.error("업로드 에러:",t)}}async function P(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/notice/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function Q(t){try{let n=await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/history/list",{headers:{Authorization:"Bearer ".concat(t)}});return console.log(n),n}catch(t){console.log(t)}}async function J(){try{let t=await e.Z.get("http://ceprj.gachon.ac.kr:60011/review/list");return console.log(t),t}catch(t){console.error("업로드 에러:",t)}}async function R(t,n){try{let c=await e.Z.post("http://ceprj.gachon.ac.kr:60011/review/write",t,{headers:{Authorization:"Bearer ".concat(n)}});return console.log(c),c}catch(t){console.error("업로드 에러:",t)}}async function X(t){try{let n=await e.Z.get("http://ceprj.gachon.ac.kr:60011/review/".concat(t));return console.log(n),n}catch(t){console.error("업로드 에러:",t)}}async function F(t,n){try{await e.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/review/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function G(t){try{let n=await e.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/review/list",{Authorization:"Bearer ".concat(t)});return console.log(n),n}catch(t){console.error("업로드 에러:",t)}}},1679:function(t,n,c){"use strict";c.r(n),c.d(n,{default:function(){return p}});var e=c(5893),a=c(4860),o=c.n(a),r=c(8318),i=c(7294);function u(t){let{id:n,title:c,content:a,createdDate:u,onClick:s,onDelete:l}=t,[h,d]=(0,i.useState)();return(0,i.useEffect)(()=>{d(localStorage.getItem("loginToken")),console.log(h)}),(0,e.jsxs)("div",{className:o().content_wrapper,children:[(0,e.jsxs)("div",{onClick:s,className:o().content_box,children:[(0,e.jsx)("div",{className:o().title,children:c}),(0,e.jsx)("div",{className:o().content,children:a}),(0,e.jsx)("div",{className:o().date,children:u})]}),(0,e.jsx)(r.VOs,{onClick:l.bind(null,n,h),color:"#ccc",size:"35px",className:o().delete})]})}var s=c(8890),l=c.n(s),h=c(5651),d=c(1163);function p(){let t;let n=(0,d.useRouter)(),[c,a]=(0,i.useState)(),[o,r]=(0,i.useState)(),[s,p]=(0,i.useState)({community:!0,comment:!1,review:!1});(0,i.useEffect)(()=>{!async function(){a(localStorage.getItem("loginToken"));let t=await (0,h.QC)(c);t&&r(t.data.content)}()},[c]);let y=async()=>{let t=await (0,h.QC)(c);t&&(r(t.data.content),p({community:!0,comment:!1,review:!1}))},g=async()=>{let t=await (0,h.mF)(c);t&&(r(t.data.content),p({community:!1,comment:!0,review:!1}))},f=async()=>{let t=await (0,h.Cx)(c);t&&(r(t.data.content),p({community:!1,comment:!1,review:!0}))},m=t=>{n.push("/user/community/communityDetail/".concat(t))},_=async(t,n)=>{try{window.confirm("게시물을 삭제하시겠습니까?")&&(await (0,h.AD)(t,n),alert("게시물이 삭제되었습니다."),location.reload())}catch(t){console.log(t)}},w=async(t,n)=>{try{window.confirm("게시물을 삭제하시겠습니까?")&&(await (0,h._I)(t,n),alert("게시물이 삭제되었습니다."),location.reload())}catch(t){console.log(t)}};return s.community?t=o&&o.map(t=>(0,e.jsx)(u,{onClick:m.bind(null,t.boardId),id:t.boardId,title:t.title,content:t.content,createdDate:t.createdDate,onDelete:_},t.boardId)):s.review?t=o&&o.map(t=>(0,e.jsx)(u,{id:t.reviewId,title:t.title,content:t.content,createdDate:t.createdDate},t.reviewId)):s.comment&&(t=o&&o.map(t=>(0,e.jsx)(u,{id:t.commentId,content:t.content,createdDate:t.createdDate,onDelete:w},t.commentId))),(0,e.jsx)("div",{className:l().wrapper,children:(0,e.jsxs)("div",{className:l().container,children:[(0,e.jsx)("div",{className:l().box,children:(0,e.jsx)("h2",{children:"활동 내역"})}),(0,e.jsxs)("div",{className:l().category_box,children:[(0,e.jsx)("div",{onClick:y,className:l().first_menu,children:"작성 글"}),(0,e.jsx)("div",{onClick:f,className:l().middle_menu,children:"작성 후기"}),(0,e.jsx)("div",{onClick:g,className:l().last_menu,children:"작성 댓글"})]}),t]})})}},8890:function(t){t.exports={wrapper:"activity_wrapper__3K2IH",container:"activity_container__BN6PR",box:"activity_box__2gc2I",category_box:"activity_category_box__vmPE_",middle_menu:"activity_middle_menu__ID1Ks",button:"activity_button___KsOu",content_box:"activity_content_box___3WzK",content_wrapper:"activity_content_wrapper__lCV52",first_menu:"activity_first_menu__1IrOk",last_menu:"activity_last_menu__Tw3Z6"}},4860:function(t){t.exports={box:"ActivityList_box__ytA_X",middle_menu:"ActivityList_middle_menu__xIE0s",content_box:"ActivityList_content_box__Kk7U_",content_wrapper:"ActivityList_content_wrapper__micnJ",title:"ActivityList_title__z1npN",content:"ActivityList_content__Hdpju",date:"ActivityList_date__2L4mH",delete:"ActivityList_delete__px2z1"}}},function(t){t.O(0,[5121,2888,9774,179],function(){return t(t.s=9361)}),_N_E=t.O()}]);