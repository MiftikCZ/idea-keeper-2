import{o as t,g as a,d as o,p as c,h,T as u,q as g}from"./index-c2783d5b.js";function p({callbackChange:e,todos:l,settodos:r}){function n(){let s=document.getElementById("addtodoInput").value;if(s){let d=Date.now().toString(),i={time:d,id:d,content:s,additional:{}};r([...l,i]),l=[...l,i],localStorage.setItem("todos",JSON.stringify(l||[])),document.getElementById("addtodoInput").value=""}}return t("div",{class:"addtodo",children:[t("button",{class:"button",onClick:n,children:t("span",{class:"material-symbols-outlined icon",children:"add"})}),t("div",{class:"wrap",children:t("input",{id:"addtodoInput",type:"text",placeholder:"napiš svůj nápad...",onInput:e,class:"input"})})]})}function m({}){let e=a();return t(o,{children:[t("link",{rel:"stylesheet",href:"./themes/"+e.theme+".css"}),t("style",{children:[e.customCss||""," :root ","{","--hue: ",e.hue,";","}",e.useBgImage=="true"?`
        :root {
          ${e.bgOverlay?`--background-overlay: ${e.bgOverlay};`:""}
          --background: url("${e.bgImage}"); 
          --background-blend-mode: ${e.bgBlend};
        }
        `:`
        :root {
          ${e.bgColor&&`--background: ${e.bgColor};
          --background-overlay: ${e.bgColor};`}
        }
        `,e.useNeonText=="true"&&`
        .todo .body {
          background: linear-gradient(45deg,
            hsl(calc(var(--hue) - 40), 50%, 75%),
            hsl(calc(var(--hue) + 40), 50%, 75%));
          /* text-shadow: #fff1 3px 3px 3px; */
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        `]}),e.addTheme.replace(/\ /gi,"").split(",").map(l=>{if(l)return t("link",{rel:"stylesheet",href:"./themes/"+l+".css"});t(o,{})})]})}function f(e){let l,r=0;return t(o,{children:[t("span",{class:"text",children:e.split(" ").map(n=>{if(n.startsWith("https://")||n.startsWith("http://"))return t(o,{children:[t("a",{href:n,class:"link",target:"_blank",children:n})," "]});if((n.startsWith("![https://")||n.startsWith("![http://"))&&n.endsWith("]")){let s=n.replace(/\!\[/g,"").replace(/\]/g,"");return l=t(o,{children:[l,t("img",{src:s,height:"50"})]}),r++,t(o,{children:[t("a",{href:s,class:"link",target:"_blank",children:["obrázek ",r]})," "]})}return t(o,{children:[n," "]})})}),l&&t("details",{class:"img_wrap",children:[t("summary",{children:"příloha"}),t("span",{class:"img_list",children:l})]})]})}function b({settodos:e,e:l,todos:r}){return t("div",{class:"todo",id:"todo_"+l.id,children:[t("div",{class:"body",children:f(l.content)}),t("div",{class:"remove",onClick:()=>{e(r.filter(n=>n.id!==l.id))},children:t("span",{class:"material-symbols-outlined icon",children:"delete"})})]})}function k({todos:e,settodos:l}){return t("div",{class:"todos",children:e.length>.1?e.map(r=>t(b,{settodos:l,e:r,todos:e})):t(o,{children:t("h2",{children:"nic tu není..."})})})}function v(){let e=localStorage.getItem("todos")||"";e||(localStorage.setItem("todos","[]"),e="");let[l,r]=c(JSON.parse(e||"[]")||[]);return l||r([]),h(()=>{localStorage.setItem("todos",JSON.stringify(l))},[l]),t(o,{children:[t(m,{getConfig:a}),t(u,{isInSettings:!1,howmuch:l.length}),t(k,{todos:l,settodos:r}),t(p,{todos:l,settodos:r})]})}g(t(v,{}),document.getElementById("app"));
