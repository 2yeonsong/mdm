(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7616],{8588:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(2328)}])},2328:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(5893),r=t(8997),s=t(2891),l=t.n(s),i=t(7294),u=t(1163),o=t(630),c=t(9417);function m(){let e=(0,u.useRouter)(),[n,t]=(0,i.useState)(!1),[s,m]=(0,i.useState)({email:"",username:"",password:"",passwordCheck:"",myName:"",nickname:"",birth:"",driveExp:0}),{myName:p,nickname:_,username:h,email:d,password:x,passwordCheck:g,birth:v,driveExp:f}=s,j=e=>{m({...s,[e.target.name]:e.target.value})},b=async()=>{if(await (0,o.s6)(s.email),0===d.trim().length){alert("이메일을 입력해주세요");return}if(!d.includes("@")){alert("이메일 형식을 제대로 입력해주세요");return}t(!0)};return(0,a.jsxs)("div",{className:l().container,children:[(0,a.jsx)("h2",{children:"회원가입"}),(0,a.jsxs)("form",{onSubmit:t=>{if(t.preventDefault(),0===p.trim().length||0===_.trim().length||0===h.trim().length||0===d.trim().length||0===x.trim().length||0===v.trim().length){alert("모든 정보를 입력해주세요");return}if(!1===n){alert("이메일 중복체크를 해주세요");return}if(x!==g){alert("비밀번호를 확인해주세요");return}(0,o.Fl)(s),alert("회원가입이 완료되었습니다."),e.push("/login")},className:l().joinForm,children:[(0,a.jsx)(r.Z,{onChange:j,name:"myName",type:"text",placeholder:"이름",value:p}),(0,a.jsx)(r.Z,{onChange:j,name:"nickname",type:"text",placeholder:"닉네임",value:_}),(0,a.jsx)(r.Z,{onChange:j,name:"username",type:"text",placeholder:"아이디",value:h}),(0,a.jsx)(r.Z,{onChange:j,name:"email",type:"email",placeholder:"이메일",value:d}),(0,a.jsx)(c.Z,{onClick:b,className:l().email_check,children:"중복 체크"}),(0,a.jsx)(r.Z,{onChange:j,name:"password",type:"password",placeholder:"비밀번호",value:x}),(0,a.jsx)(r.Z,{onChange:j,name:"passwordCheck",type:"password",placeholder:"비밀번호 확인",value:g}),(0,a.jsxs)("div",{className:l().box2,children:[(0,a.jsx)("span",{children:"생년월일"}),(0,a.jsx)(r.Z,{onChange:j,name:"birth",type:"date",placeholder:"생년월일",value:v})]}),(0,a.jsxs)("div",{className:l().box3,children:[(0,a.jsx)("span",{children:"운전경력"}),(0,a.jsx)(r.Z,{onChange:j,name:"driveExp",type:"number",placeholder:"운전 면허경력 숫자만 입력",value:f})]}),(0,a.jsx)("input",{className:l().submitBtn,type:"submit",value:"회원가입"})]})]})}},8997:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var a=t(5893),r=t(1451),s=t.n(r);function l(e){let{name:n,type:t,placeholder:r,onChange:l,value:i,disabled:u,styled:o,readOnly:c}=e;return(0,a.jsx)("div",{className:s().textForm,children:(0,a.jsx)("input",{className:s().value,name:n,type:t,style:o,placeholder:r,onChange:l,value:i,disabled:u,readOnly:c})})}},2891:function(e){e.exports={container:"signup_container__qbQ4U",joinForm:"signup_joinForm__o3oZS",textForm:"signup_textForm__3IeHX",value:"signup_value__p1kHN",box2:"signup_box2___wxFo",box3:"signup_box3__P_wFG",submitBtn:"signup_submitBtn__JTUpt",email_check:"signup_email_check__Yk_ix"}},1451:function(e){e.exports={textForm:"Input_textForm__tZI3N",value:"Input_value___Yn37"}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=8588)}),_N_E=e.O()}]);