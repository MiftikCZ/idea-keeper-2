import{o as t,g as i,d as l,p as c,h as u,T as g,q as h}from"./index-82f0b5d1.js";function m({callbackChange:e,todos:o,settodos:n}){function d(){let r=document.getElementById("addtodoInput").value;if(r){let s=Date.now().toString(),a={time:s,id:s,content:r,additional:{}};n([...o,a]),o=[...o,a],localStorage.setItem("todos",JSON.stringify(o||[])),document.getElementById("addtodoInput").value=""}}return t("div",{class:"addtodo",children:[t("button",{class:"button",onClick:d,children:t("span",{class:"material-symbols-outlined icon",children:"add"})}),t("div",{class:"wrap",children:t("input",{id:"addtodoInput",type:"text",placeholder:"napiš svůj nápad...",onInput:e,class:"input"})})]})}function p({}){let e=i();return t(l,{children:[t("link",{rel:"stylesheet",href:"./themes/"+e.theme+".css"}),t("style",{children:[e.customCss," :root ","{","--hue: ",e.hue,";","}",e.useBgImage=="true"?`
        :root {
          ${e.bgOverlay&&`--background-overlay: ${e.bgOverlay};`}
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
        `]}),e.addTheme.replace(/\ /gi,"").split(",").map(o=>t("link",{rel:"stylesheet",href:"./themes/"+o+".css"}))]})}function b({todos:e,settodos:o}){return t("div",{class:"todos",children:e.length>.1?e.map(n=>t("div",{class:"todo",id:"todo_"+n.id,children:[t("div",{class:"body",children:n.content}),t("div",{class:"remove",onClick:()=>{o(e.filter(d=>d.id!==n.id))},children:t("span",{class:"material-symbols-outlined icon",children:"delete"})})]})):t(l,{children:t("h2",{children:"nic tu není..."})})})}function f(){let e=localStorage.getItem("todos")||"";e||(localStorage.setItem("todos","[]"),e="");let[o,n]=c(JSON.parse(e||"[]")||[]);return o||n([]),u(()=>{localStorage.setItem("todos",JSON.stringify(o))},[o]),t(l,{children:[t(p,{getConfig:i}),t(g,{isInSettings:!1,howmuch:o.length}),t(b,{todos:o,settodos:n}),t(m,{todos:o,settodos:n})]})}h(t(f,{}),document.getElementById("app"));
