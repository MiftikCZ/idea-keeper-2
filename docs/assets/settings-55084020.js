import{g as u,o as t,T as h,c as d,p,a as g,d as i,s as o,q as m}from"./index-7b3e2705.js";const c=({config:n,useInnerText:e,e:a,useChecked:r})=>l=>{n[a[0]]=(e?l.target.innerText:r?l.target.checked:l.target.value).toString(),o(n),console.log("🎉 saved!")};function f(n,e,a){var r=new FileReader;r.readAsDataURL(n),r.onload=function(){var s;let l=(s=r==null?void 0:r.result)==null?void 0:s.toString();a[e[0]]=l,o(a)},r.onerror=function(l){console.log("Error: ",l)}}const C=({config:n,e})=>a=>{let r=document.createElement("input");r.type="file",r.onchange=()=>{var s;console.log("here!");let l=(s=r.files)==null?void 0:s[0];f(l,e,n)},r.click()};function k({config:n,e}){return t(i,{children:t("select",{class:"choose second",value:n[e[0]],onChange:c({config:n,e,useInnerText:!1}),children:e[1][2].map(a=>t("option",{value:a,children:e[1][3][a]}))})})}function v({config:n,e}){return t(i,{children:t("input",{placeholder:e[1][1],class:"input second",value:n[e[0]],onChange:c({config:n,e,useInnerText:!1})})})}function b({config:n,e}){return t(i,{children:t("textarea",{placeholder:e[1][1],class:"area second",spellCheck:!1,onChange:c({config:n,e,useInnerText:!1}),children:n[e[0]]})})}function w({config:n,e}){return t(i,{children:t("input",{placeholder:e[1][1],class:"input second",type:"number",value:n[e[0]],onChange:c({config:n,e,useInnerText:!1})})})}function T({config:n,e,setValue:a,value:r}){return t(i,{children:t("input",{placeholder:e[1][1],onInput:l=>{var s;a((s=l.target)==null?void 0:s.value)},min:"0",max:"360",step:"2",class:"range second",type:"range",value:r,onChange:c({config:n,e,useInnerText:!1})})})}function x({config:n,e}){return t(i,{children:t("input",{type:"checkbox",checked:n[e[0]]=="true",onChange:c({config:n,e,useChecked:!0})})})}function I({config:n,e}){return t("div",{class:"gridtwo",children:[t("button",{class:"button",onClick:C({config:n,e}),children:"Choose"}),t("button",{class:"button nofocus",onClick:()=>{let a=prompt("Write full link to image");a&&(n[e[0]]=a,o(n))},children:"Link"})]})}function y(){let n=u();return t(i,{children:[t(h,{isInSettings:!0,howmuch:0}),t("div",{class:"main",children:Object.entries(d).map(e=>{var l;let[a,r]=p((l=u())==null?void 0:l[e[0]]);return t("div",{class:"wrap",children:[t("span",{class:"info",children:[t("span",{children:g[e[0]]}),e[1][0]=="write_range"&&t("span",{class:"hint",children:a})]}),e[1][0]=="choose"?t(k,{config:n,e}):e[1][0]=="write_string"?t(v,{config:n,e}):e[1][0]=="write_area"?t(b,{config:n,e}):e[1][0]=="write_number"?t(w,{config:n,e}):e[1][0]=="write_range"?t(T,{config:n,e,setValue:r,value:a}):e[1][0]=="write_image"?t(I,{config:n,e}):e[1][0]=="check"?t(x,{config:n,e}):""]})})})]})}m(t(y,{}),document.getElementById("app"));
