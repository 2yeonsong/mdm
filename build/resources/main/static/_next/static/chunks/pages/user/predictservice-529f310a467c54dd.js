(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6873],{9568:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/predictservice",function(){return n(159)}])},5651:function(t,e,n){"use strict";n.d(e,{AD:function(){return R},Aw:function(){return w},C3:function(){return k},Cx:function(){return J},Fl:function(){return a},GG:function(){return h},HH:function(){return X},HS:function(){return b},JQ:function(){return B},JS:function(){return M},K9:function(){return Q},Mk:function(){return T},Mn:function(){return E},NH:function(){return P},NU:function(){return r},O1:function(){return f},OD:function(){return I},OR:function(){return D},Oz:function(){return Z},Pk:function(){return d},QC:function(){return O},SQ:function(){return S},Sf:function(){return U},TD:function(){return v},Tk:function(){return u},Tr:function(){return p},XB:function(){return o},_I:function(){return C},bt:function(){return F},dg:function(){return g},eG:function(){return y},fB:function(){return j},fu:function(){return x},i1:function(){return l},kZ:function(){return m},mF:function(){return N},mR:function(){return G},oO:function(){return H},pI:function(){return _},ph:function(){return z},r4:function(){return s},s6:function(){return i},wh:function(){return A},zt:function(){return q}});var c=n(5121);async function o(t){try{return(await c.Z.post("http://ceprj.gachon.ac.kr:60011/user/login",t)).data.token}catch(t){alert("아이디와 비밀번호를 확인해주세요"),console.log(t)}}async function r(t){try{let e=await c.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/user/update",{headers:{Authorization:"Bearer ".concat(t)}});return console.log(e),e.data}catch(t){console.log(t)}}async function a(t){try{await c.Z.post("http://ceprj.gachon.ac.kr:60011/user/register",t)}catch(t){console.log(t)}}async function i(t){try{let e=await c.Z.get("http://ceprj.gachon.ac.kr:60011/user/checkId?email=".concat(t));return console.log(e),alert("사용할 수 있는 이메일입니다."),200}catch(t){alert("사용할 수 없는 이메일입니다.")}}async function s(t,e){try{return await c.Z.post("http://ceprj.gachon.ac.kr:60011/board/write",t,{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){return console.log(t),!1}}async function u(t,e,n){try{await c.Z.post("http://ceprj.gachon.ac.kr:60011/board/".concat(n,"/file/upload"),t,{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){return console.log(t),!1}}async function l(t,e,n){try{return await c.Z.patch("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/update"),e,{headers:{Authorization:"Bearer ".concat(n)}}),!0}catch(t){return console.log(t),!1}}async function h(){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/board/list")}catch(t){console.log(t)}}async function p(t){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/board/".concat(t))}catch(t){console.log(t)}}async function d(t){try{await c.Z.delete("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/delete"))}catch(t){console.log(t)}}async function g(t){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/board/search?title=".concat(t,"&content=a&writerName=a"))}catch(t){console.log(t)}}async function f(t){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/list"))}catch(t){console.log(t)}}async function y(t,e,n){try{return await c.Z.post("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/write"),e,{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function m(t,e,n){try{return await c.Z.delete("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/delete/").concat(e),{headers:{Authorization:"Bearer ".concat(n)}})}catch(t){console.log(t)}}async function w(t,e,n,o){try{return await c.Z.patch("http://ceprj.gachon.ac.kr:60011/board/".concat(t,"/comment/update/").concat(e),n,{headers:{Authorization:"Bearer ".concat(o)}}),!0}catch(t){return console.log(t),!1}}async function j(){try{let t=await c.Z.get("http://ceprj.gachon.ac.kr:60011/inquiry/list");return console.log(t),t}catch(t){console.log(t)}}async function _(t,e){try{return await c.Z.post("http://ceprj.gachon.ac.kr:60011/inquiry/write",t,{headers:{Authorization:"Bearer ".concat(e)}}),!0}catch(t){return console.log(t),!1}}async function x(t,e){try{let n=await c.Z.get("http://ceprj.gachon.ac.kr:60011/inquiry/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});return console.log(n),n}catch(t){console.log(t)}}async function b(){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/admin/user/list")}catch(t){console.log(t)}}async function k(t,e){try{await c.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/user/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){console.log(t)}}async function v(){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/admin/board/list")}catch(t){console.log(t)}}async function Z(t,e){try{let n=await c.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/board/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}});console.log(n)}catch(t){console.log(t)}}async function B(){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/admin/inquiry/list")}catch(t){console.log(t)}}async function z(t,e){try{return await c.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/inquiry/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){console.log(t)}}async function A(t,e,n){try{let o=await c.Z.patch("http://ceprj.gachon.ac.kr:60011/admin/inquiry/".concat(t,"/answer"),e,{headers:{Authorization:"Bearer ".concat(n)}});console.log(o)}catch(t){console.log(t)}}async function S(t,e){try{await c.Z.patch("http://ceprj.gachon.ac.kr:60011/mypage/user/update",t,{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){console.log(t)}}async function O(t){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/board/list",{headers:{Authorization:"Bearer ".concat(t)}})}catch(t){console.log(t)}}async function N(t){try{return await c.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/comment/list",{headers:{Authorization:"Bearer ".concat(t)}})}catch(t){console.log(t)}}async function E(t){try{let e=await c.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/inquiry/list",{headers:{Authorization:"Bearer ".concat(t)}});return console.log(e),e}catch(t){console.log(t)}}async function R(t,e){try{await c.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/board/list/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){console.log(t)}}async function C(t,e){try{await c.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/comment/list/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){console.log(t)}}async function D(t,e){try{await c.Z.delete("http://ceprj.gachon.ac.kr:60011/mypage/user/update/".concat(t,"/delete"),{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){console.log(t)}}async function T(t,e){try{let n=await c.Z.post("http://61.79.137.116:5000/detect",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(e)}});return console.log(n),n}catch(t){console.error("업로드 에러:",t)}}async function I(t,e,n){try{t.append("ratio",JSON.stringify({ratio:e}));let o=await c.Z.post("http://ceprj.gachon.ac.kr:60011/history/upload",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n)}});return console.log(o),o}catch(t){console.error("업로드 에러:",t)}}async function F(t,e){try{let n=await c.Z.get("http://ceprj.gachon.ac.kr:60011/history/download?historyId=".concat(t),{headers:{Authorization:"Bearer ".concat(e)},responseType:"blob"});return console.log(n),n.data}catch(t){console.error("업로드 에러:",t)}}async function P(t){try{let e=await c.Z.get("http://ceprj.gachon.ac.kr:60011/admin/notice/list",{headers:{Authorization:"Bearer ".concat(t)}});return console.log(e),e}catch(t){console.log(t)}}async function q(t,e){try{let n=await c.Z.post("http://ceprj.gachon.ac.kr:60011/admin/notice/write",t,{headers:{Authorization:"Bearer ".concat(e)}});return console.log(n),n}catch(t){console.error("업로드 에러:",t)}}async function M(t,e){try{await c.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/notice/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){console.log(t)}}async function U(t){try{let e=await c.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/history/list",{headers:{Authorization:"Bearer ".concat(t)}});return console.log(e),e}catch(t){console.log(t)}}async function H(){try{let t=await c.Z.get("http://ceprj.gachon.ac.kr:60011/review/list");return console.log(t),t}catch(t){console.error("업로드 에러:",t)}}async function Q(t,e){try{let n=await c.Z.post("http://ceprj.gachon.ac.kr:60011/review/write",t,{headers:{Authorization:"Bearer ".concat(e)}});return console.log(n),n}catch(t){console.error("업로드 에러:",t)}}async function X(t){try{let e=await c.Z.get("http://ceprj.gachon.ac.kr:60011/review/".concat(t));return console.log(e),e}catch(t){console.error("업로드 에러:",t)}}async function G(t,e){try{await c.Z.delete("http://ceprj.gachon.ac.kr:60011/admin/review/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}catch(t){console.log(t)}}async function J(t){try{let e=await c.Z.get("http://ceprj.gachon.ac.kr:60011/mypage/review/list",{Authorization:"Bearer ".concat(t)});return console.log(e),e}catch(t){console.error("업로드 에러:",t)}}},159:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var c=n(5893),o=n(6830),r=n.n(o),a=n(9417),i=n(2730),s=n.n(i),u=n(7294),l=n(8901),h=n(8633),p=n(5651);function d(t){let{onClick:e,onUploading:n}=t,[o,r]=(0,u.useState)(""),[i,d]=(0,u.useState)(null),[g,f]=(0,u.useState)(null),[y,m]=(0,u.useState)(!1),[w,j]=(0,u.useState)();(0,u.useEffect)(()=>{j(localStorage.getItem("loginToken")),console.log(w)},[w]);let _=async()=>{e(o);let t=new FormData;t.append("file",i);let c=await (0,p.Mk)(t,w);c&&n(c.data[0],t)},{getRootProps:x,getInputProps:b,isDragActive:k}=(0,l.uI)({accept:{"video/mp4":[".mp4"],"video/webm":[".webm"]},onDrop:t=>{m(t=>!t);let e=t[0];f(URL.createObjectURL(e)),d(e),r(e.name)},noKeyboard:!0}),v=y?(0,c.jsxs)("div",{className:s().outbox_second,children:[(0,c.jsxs)("div",{className:s().content_text,children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(h.x2S,{size:20}),(0,c.jsx)("p",{children:o})]}),(0,c.jsx)(a.Z,{onClick:()=>{m(t=>!t)},style:{color:"black"},children:"삭제"})]}),(0,c.jsx)("div",{className:s().video_box,children:(0,c.jsx)("video",{muted:!0,controls:!0,width:"100%",style:{borderRadius:"8px"},children:(0,c.jsx)("source",{src:g,controls:!0})})})]}):(0,c.jsx)("div",{className:s().outbox,children:(0,c.jsx)("div",{className:s().form_box,children:(0,c.jsxs)("div",{...x(),className:s().box,children:[(0,c.jsx)("input",{...b()}),(0,c.jsx)(h.pOt,{size:50}),(0,c.jsx)("p",{children:"파일을 드래그하거나 클릭하세요."})]})})});return(0,c.jsxs)("div",{className:s().container,children:[v,(0,c.jsx)("input",{className:s().submitBtn,onClick:_,type:"button",value:"측정하기"})]})}var g=n(3684),f=n.n(g),y=n(5804),m=n(1163);function w(t){let{ratio:e}=t,n=(0,m.useRouter)(),[o,r]=(0,u.useState)(!1);(0,u.useEffect)(()=>{r(!0)},[]);let a=(0,c.jsx)("div",{className:f().container,children:(0,c.jsxs)("div",{className:f().outbox_second,children:[(0,c.jsxs)("div",{className:f().title,children:[(0,c.jsx)("p",{children:"사고현장 분석영상입니다."}),(0,c.jsx)("p",{children:"과실 비율은 ?"}),(0,c.jsx)("p",{children:"왼쪽이 사용자입니다."})]}),(0,c.jsx)("div",{className:f().result,children:(0,c.jsx)("h1",{children:(0,c.jsx)("span",{style:{color:"black",fontSize:"50px"},children:e})})}),(0,c.jsx)(y.Z,{onClickButton:()=>{n.push("/user/epilogue/newepilogue")},styles:{width:"50%",marginTop:"0px"},children:"후기 작성 하기"}),(0,c.jsx)(y.Z,{onClickButton:()=>{n.push("/")},styles:{width:"50%",marginTop:"0px"},children:"홈으로"})]})});return(0,c.jsx)(c.Fragment,{children:a})}var j={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function _(t){if("number"==typeof t)return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();e=n.includes(".")?parseFloat(n):parseInt(n,10);var c=(t.match(/[^0-9]*$/)||"").toString();return j[c]?{value:e,unit:c}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function x(t){var e=_(t);return"".concat(e.value).concat(e.unit)}var b=function(){return(b=Object.assign||function(t){for(var e,n=1,c=arguments.length;n<c;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},k=function(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&0>e.indexOf(c)&&(n[c]=t[c]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,c=Object.getOwnPropertySymbols(t);o<c.length;o++)0>e.indexOf(c[o])&&Object.prototype.propertyIsEnumerable.call(t,c[o])&&(n[c[o]]=t[c[o]]);return n},v=function(t,e,n){var c="react-spinners-".concat(t,"-").concat(n);if("undefined"==typeof window||!window.document)return c;var o=document.createElement("style");document.head.appendChild(o);var r=o.sheet,a="\n    @keyframes ".concat(c," {\n      ").concat(e,"\n    }\n  ");return r&&r.insertRule(a,0),c}("GridLoader","0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}","grid"),Z=function(t){return Math.random()*t},B=function(t){var e=t.loading,n=t.color,c=void 0===n?"#000000":n,o=t.speedMultiplier,r=void 0===o?1:o,a=t.cssOverride,i=t.size,s=void 0===i?15:i,l=t.margin,h=void 0===l?2:l,p=k(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),d=_(s),g=_(h),f=3*parseFloat(d.value.toString())+6*parseFloat(g.value.toString()),y=b({width:"".concat(f).concat(d.unit),fontSize:0,display:"inline-block"},void 0===a?{}:a),m=function(t){return{display:"inline-block",backgroundColor:c,width:"".concat(x(s)),height:"".concat(x(s)),margin:x(h),borderRadius:"100%",animationFillMode:"both",animation:"".concat(v," ").concat((t/100+.6)/r,"s ").concat(t/100-.2,"s infinite ease")}};return void 0===e||e?u.createElement("span",b({style:y},p,{ref:function(t){t&&t.style.setProperty("width","".concat(f).concat(d.unit),"important")}}),u.createElement("span",{style:m(Z(100))}),u.createElement("span",{style:m(Z(100))}),u.createElement("span",{style:m(Z(100))}),u.createElement("span",{style:m(Z(100))}),u.createElement("span",{style:m(Z(100))}),u.createElement("span",{style:m(Z(100))}),u.createElement("span",{style:m(Z(100))}),u.createElement("span",{style:m(Z(100))}),u.createElement("span",{style:m(Z(100))})):null},z=n(5007);function A(){let t=(0,z.v9)(t=>t.auth.isUserAuthenticated),[e,n]=(0,u.useState)(!1),[o,a]=(0,u.useState)(!1),[i,s]=(0,u.useState)({}),[l,h]=(0,u.useState)(null),[g,f]=(0,u.useState)(null),[y,m]=(0,u.useState)(!0);(0,u.useEffect)(()=>{let e=localStorage.getItem("loginToken");(async()=>{if(t){let t=await (0,p.NU)(e);t&&s(t.data.nickname)}})()},[]);let j=async(t,e)=>{let n=localStorage.getItem("loginToken"),c=t.fault_ratio;console.log(t),f(t.fault_ratio),a(!1),await (0,p.OD)(e,c,n)};return(0,c.jsx)(c.Fragment,{children:e?o?(0,c.jsxs)("div",{className:r().container,children:[(0,c.jsx)(B,{color:"#dbe7f9"}),y?(0,c.jsx)("p",{children:"과실 비율 측정중..."}):(0,c.jsx)("p",{children:"동영상 분석중..."})]}):(0,c.jsx)(w,{ratio:g}):(0,c.jsx)(d,{onClick:t=>{if(!t){alert("영상 파일을 넣어주세요");return}n(!0),a(!0)},onUploading:j,isUpload:o})})}},5804:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var c=n(5893),o=n(2857),r=n.n(o);function a(t){let{onClickButton:e,children:n,styles:o}=t;return(0,c.jsx)("div",{className:"".concat(r().button," ").concat(r().button2),style:o,onClick:e,children:n})}},6830:function(t){t.exports={container:"Predictservice_container__l6u_a"}},2857:function(t){t.exports={button:"Button_button__Y3HIB",button2:"Button_button2__5RWe0"}},2730:function(t){t.exports={container:"Dropdrag_container__OPwA4",outbox:"Dropdrag_outbox__oQyXF",outbox_second:"Dropdrag_outbox_second__1VC7b",video_box:"Dropdrag_video_box__euRXp",form_box:"Dropdrag_form_box__h_jRS",box:"Dropdrag_box__FYfjN",content_text:"Dropdrag_content_text__ixQoc",submitBtn:"Dropdrag_submitBtn__0PiMd"}},3684:function(t){t.exports={container:"Result_container__5Ingh",outbox_second:"Result_outbox_second__0aIUT",button:"Result_button__vKAqb",video_box:"Result_video_box__b2aw0",title:"Result_title__ApH_Z"}}},function(t){t.O(0,[4738,5121,8901,2888,9774,179],function(){return t(t.s=9568)}),_N_E=t.O()}]);