import{p as c,o as e,d as s,g as d,h as v,T as k,q as y}from"./index-2a5218dd.js";function I({setAddFromCommand:t}){let[l,i]=c("...");function r(){let a=new Date;i(a.getHours()+":"+a.getMinutes())}let n=setInterval(()=>r,1e3);return r(),e(s,{children:[e("style",{children:`
        #appWrapper {
            filter: blur(10px);
        }
    `}),e("div",{class:"lock",onClick:()=>{clearInterval(n),t(e(s,{}))},children:[e("div",{class:"title",children:d().user}),e("div",{class:"description",children:["Zdravím, ",l]})]})]})}const h={lock:t=>e(I,{setAddFromCommand:t})};function C(t,l){let r=t.replace("/","").split(" ")[0];return Object.hasOwn(h,r)?(console.log("here!"),{status:!0,content:h[r](l)}):{status:!1,content:e(s,{})}}function w({input:t,setInput:l}){let i=Object.keys(h).filter(n=>("/"+n).startsWith(t)),r=document.getElementById("addtodoInput");return e(s,{children:[i.length>.9&&e("div",{class:"commands",children:e("div",{class:"list",children:i.map(n=>e("div",{class:"command",onClick:()=>{let a="/"+n+" ";l(a),r.value=a,r.focus()},children:e(s,{children:[e("span",{class:"focus",children:t}),n.replace(t.replace("/",""),"")]})}))})})," "]})}function T({todos:t,settodos:l,addFromCommand:i,setAddFromCommand:r}){let[n,a]=c("");function g(){if(n){if(u.useCommands=="true"){let p=C(n,r);if(p.status)return r(p.content)}let o=Date.now().toString(),m={time:o,id:o,content:n,additional:{}};l([...t,m]),a(""),t=[...t,m],localStorage.setItem("todos",JSON.stringify(t||[]));let b=document.getElementById("addtodoInput");b.value=""}}function f(o){a(o.target.value)}let u=d();return e(s,{children:e("div",{class:"addtodo",children:[u.useCommands=="true"&&n.startsWith("/")&&e(w,{setInput:a,input:n}),e("button",{class:"button",onClick:g,children:e("span",{class:"material-symbols-outlined icon",children:"add"})}),e("div",{class:"wrap",children:e("input",{id:"addtodoInput",type:"text",placeholder:"napiš svůj nápad...",onInput:f,class:"input"})})]})})}function W({}){let t=d();return e(s,{children:[e("link",{rel:"stylesheet",href:"./themes/"+t.theme+".css"}),e("style",{children:[t.customCss||""," :root ","{","--hue: ",t.hue,";","}",t.useBgImage=="true"?`
        :root {
          ${t.bgOverlay?`--background-overlay: ${t.bgOverlay};`:""}
          --background: url("${t.bgImage}"); 
          --background-blend-mode: ${t.bgBlend};
        }
        `:`
        :root {
          ${t.bgColor&&`--background: ${t.bgColor};
          --background-overlay: ${t.bgColor};`}
        }
        `,t.useNeonText=="true"&&`
        .todo .body {
          background: linear-gradient(45deg,
            hsl(calc(var(--hue) - 40), 50%, 75%),
            hsl(calc(var(--hue) + 40), 50%, 75%));
          /* text-shadow: #fff1 3px 3px 3px; */
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        `]}),t.addTheme.replace(/\ /gi,"").split(",").map(l=>{if(l)return e("link",{rel:"stylesheet",href:"./themes/"+l+".css"});e(s,{})})]})}function _({after:t,time:l}){function i(){if(d().showDateInTodos=="true"){let r=Math.floor((Date.now()-parseInt(l))/1e3/60/60/24),n=r?e("span",{class:"datum",children:[r," dny"]}):e(s,{});return t?e(s,{children:[" ",e("details",{class:"img_wrap",children:[e("summary",{children:"příloha"}),e("span",{class:"img_list",children:t})]})," ",n," "]}):e(s,{children:[e("div",{class:"img_wrap"}),n]})}else return t&&e("details",{class:"img_wrap",children:[e("summary",{children:"příloha"}),e("span",{class:"img_list",children:t})]})}return e("div",{class:"dolu",children:e(i,{})})}function x(t,l){let i,r=0;return e(s,{children:[e("span",{class:"text",children:t.split(" ").map(n=>{if(n.startsWith("`")&&n.endsWith("`"))return e(s,{children:[e("code",{children:n.replace(/\`/g,"")})," "]});if(n.startsWith("https://")||n.startsWith("http://"))return e(s,{children:[e("a",{href:n,class:"link",target:"_blank",children:n})," "]});if((n.startsWith("![https://")||n.startsWith("![http://"))&&n.endsWith("]")){let a=n.replace(/\!\[/g,"").replace(/\]/g,"");return i=e(s,{children:[i,e("img",{src:a,height:"50"})]}),r++,e(s,{children:[e("a",{href:a,class:"link",target:"_blank",children:["obrázek ",r]})," "]})}return e(s,{children:[n," "]})})}),e(_,{after:i,time:l})]})}function S({settodos:t,e:l,todos:i}){return e("div",{class:"todo",id:"todo_"+l.id,children:[e("div",{class:"body",children:x(l.content,l.time)}),e("div",{class:"remove",onClick:()=>{t(i.filter(r=>r.id!==l.id))},children:e("span",{class:"material-symbols-outlined icon",children:"delete"})})]})}function O({todos:t,settodos:l}){return e("div",{class:"todos",children:t.length>.1?t.map(i=>e(S,{settodos:l,e:i,todos:t})):e(s,{children:e("h2",{children:"nic tu není..."})})})}function $(){let t=localStorage.getItem("todos")||"";t||(localStorage.setItem("todos","[]"),t="");let[l,i]=c(JSON.parse(t||"[]")||[]);l||i([]);let[r,n]=c(e(s,{}));return v(()=>{localStorage.setItem("todos",JSON.stringify(l))},[l]),e(s,{children:[e("span",{id:"appWrapper",children:[e(W,{getConfig:d}),e(k,{isInSettings:!1,howmuch:l.length}),e(O,{todos:l,settodos:i}),e(T,{todos:l,settodos:i,addFromCommand:r,setAddFromCommand:n})]}),e("span",{id:"commandWrapper",children:e("span",{id:"commandContainer",children:r||e(s,{})})})]})}y(e($,{}),document.getElementById("app"));
