(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3530],{432:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/communitymanage",function(){return t(594)}])},594:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var i=t(5893),a=t(7294),d=t(3268),l=t.n(d),c=t(630),r=t(9188),s=t.n(r),o=t(1163);function m(e){let{boardId:n,title:t,content:a,writerName:d,createdDate:l,modifiedDate:r}=e,m=(0,o.useRouter)();return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:n}),(0,i.jsx)("td",{onClick:()=>{m.push("/admin/communitymanage/communityDetail/".concat(n))},className:s().title,children:t}),(0,i.jsx)("td",{children:a}),(0,i.jsx)("td",{children:d}),(0,i.jsx)("td",{children:l}),(0,i.jsx)("td",{children:r}),(0,i.jsx)("td",{className:s().delete,onClick:()=>{let e=localStorage.getItem("loginToken"),t=confirm("삭제하시겠습니까?");t&&(console.log(t),(0,c.Oz)(n,e),alert("삭제되었습니다."),m.push("/admin"))},children:"삭제"})]})}function u(){let[e,n]=(0,a.useState)();return(0,a.useEffect)(()=>{(async function(){let t=await (0,c.TD)();t&&(n(t.data.content),console.log(e))})()},[]),(0,i.jsx)("div",{className:l().tableContainer,children:(0,i.jsxs)("table",{className:l().table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"No."}),(0,i.jsx)("th",{children:"제목"}),(0,i.jsx)("th",{children:"내용"}),(0,i.jsx)("th",{children:"작성자"}),(0,i.jsx)("th",{children:"작성날짜"}),(0,i.jsx)("th",{children:"수정된 날짜"}),(0,i.jsx)("th",{children:"옵션"})]})}),(0,i.jsx)("tbody",{className:l().body,children:e&&e.map(e=>(0,i.jsx)(m,{boardId:e.boardId,title:e.title,content:e.content.slice(0,20),writerName:e.writerName,createdDate:e.createdDate.slice(0,10),modifiedDate:e.modifiedDate.slice(0,10)},e.boardId))})]})})}function h(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u,{})})}},3268:function(e){e.exports={tableContainer:"AdminCommunityManage_tableContainer__fKlKn",table:"AdminCommunityManage_table__B8ddd",body:"AdminCommunityManage_body__HLZs7"}},9188:function(e){e.exports={delete:"AdminCommunityManageTr_delete__zPGF_",title:"AdminCommunityManageTr_title__wKa9W"}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=432)}),_N_E=e.O()}]);