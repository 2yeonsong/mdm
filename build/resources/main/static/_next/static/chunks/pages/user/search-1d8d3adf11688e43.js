(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9852],{1593:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/search",function(){return n(3844)}])},3844:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var c=n(5893),s=n(7294),i=n(630),o=n(5542);function r(t){let{q:e}=t,[n,r]=(0,s.useState)();return(0,s.useEffect)(()=>{(async function(){r((await (0,i.dg)(e)).data.content)})()},[e]),(0,c.jsx)(c.Fragment,{children:n&&n.map(t=>(0,c.jsx)(o.Z,{id:t.boardId,title:t.title,content:t.content,viewCount:t.viewCount,commentNum:0},t.boardId))})}var a=n(9588),_=n.n(a),u=n(1163);function l(){let{q:t}=(0,u.useRouter)().query;return(0,c.jsx)("div",{className:_().wrapper,children:(0,c.jsxs)("div",{className:_().container,children:[(0,c.jsx)("div",{className:_().box,children:(0,c.jsxs)("h2",{children:["“",t,"” 의 검색결과"]})}),(0,c.jsx)(r,{q:t})]})})}},5542:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var c=n(5893),s=n(1163),i=n(1182),o=n.n(i),r=n(2091),a=n(80),_=n(7294),u=n(630);function l(t){let{id:e,title:n,content:i,viewCount:l}=t,d=(0,s.useRouter)(),[m,h]=(0,_.useState)();return(0,_.useEffect)(()=>{(async()=>{let t=await (0,u.O1)(e);t&&h(t.data.totalElements)})()},[e]),(0,c.jsxs)("div",{className:o().container,onClick:()=>{d.push("/user/community/communityDetail/".concat(e))},children:[(0,c.jsx)("div",{className:o().title,children:n}),(0,c.jsx)("div",{className:o().content,children:i.slice(0,75)}),(0,c.jsxs)("div",{className:o().like,children:[(0,c.jsx)(r.z5B,{size:20}),l,(0,c.jsx)(a.iSW,{size:20,color:"#849b9f"}),(0,c.jsx)("p",{style:{color:"#849b9f"},children:m})]})]})}},9588:function(t){t.exports={wrapper:"search_wrapper__D_I9m",container:"search_container__3NiJ1",box:"search_box__etZbl",category_box:"search_category_box__c4ASR",middle_menu:"search_middle_menu__TMqi_",button:"search_button__u6E5u",content_box:"search_content_box__Ch57j",content_wrapper:"search_content_wrapper__2stmR"}},1182:function(t){t.exports={container:"CommunityPost_container__tBihv",title:"CommunityPost_title__boYOQ",content:"CommunityPost_content__SOYjF",like:"CommunityPost_like__CHvj7"}}},function(t){t.O(0,[3365,4838,2888,9774,179],function(){return t(t.s=1593)}),_N_E=t.O()}]);