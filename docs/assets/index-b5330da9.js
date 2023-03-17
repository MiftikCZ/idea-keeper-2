import{p as d,o as e,d as a,g as c,h as v,T as k,q as y}from"./index-13e389ee.js";function C({setAddFromCommand:t}){let[n,r]=d("...");function l(){let i=new Date;r(i.getHours()+":"+i.getMinutes())}let s=setInterval(()=>l,1e3);return l(),e(a,{children:[e("style",{children:`
        #appWrapper {
            filter: blur(10px);
        }
    `}),e("div",{class:"lock",onClick:()=>{clearInterval(s),t(e(a,{}))},children:[e("div",{class:"title",children:c().user}),e("div",{class:"description",children:["Zdravím, ",n]})]})]})}const h={lock:t=>e(C,{setAddFromCommand:t})};function I(t,n){let l=t.replace("/","").split(" ")[0];return Object.hasOwn(h,l)?(console.log("here!"),{status:!0,content:h[l](n)}):{status:!1,content:e(a,{})}}function T({input:t,setInput:n}){let r=Object.keys(h).filter(s=>("/"+s).startsWith(t)),l=document.getElementById("addtodoInput");return e(a,{children:[r.length>.9&&e("div",{class:"commands",children:e("div",{class:"list",children:r.map(s=>e("div",{class:"command",onClick:()=>{let i="/"+s+" ";n(i),l.value=i,l.focus()},children:e(a,{children:[e("span",{class:"focus",children:t}),s.replace(t.replace("/",""),"")]})}))})})," "]})}function W({todos:t,settodos:n,addFromCommand:r,setAddFromCommand:l}){let[s,i]=d("");function m(){if(s){let o=I(s,l);if(o.status)return l(o.content);let u=Date.now().toString(),p={time:u,id:u,content:s,additional:{}};n([...t,p]),i(""),t=[...t,p],localStorage.setItem("todos",JSON.stringify(t||[]));let b=document.getElementById("addtodoInput");b.value=""}}function g(o){i(o.target.value)}let f=c();return e(a,{children:e("div",{class:"addtodo",children:[f.useCommands=="true"&&s.startsWith("/")&&e(T,{setInput:i,input:s}),e("button",{class:"button",onClick:m,children:e("span",{class:"material-symbols-outlined icon",children:"add"})}),e("div",{class:"wrap",children:e("input",{id:"addtodoInput",type:"text",placeholder:"napiš svůj nápad...",onInput:g,class:"input"})})]})})}function x({}){let t=c();return e(a,{children:[e("link",{rel:"stylesheet",href:"./themes/"+t.theme+".css"}),e("style",{children:[t.customCss||""," :root ","{","--hue: ",t.hue,";","}",t.useBgImage=="true"?`
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
        `]}),t.addTheme.replace(/\ /gi,"").split(",").map(n=>{if(n)return e("link",{rel:"stylesheet",href:"./themes/"+n+".css"});e(a,{})})]})}function S(t){let n,r=0;return e(a,{children:[e("span",{class:"text",children:t.split(" ").map(l=>{if(l.startsWith("https://")||l.startsWith("http://"))return e(a,{children:[e("a",{href:l,class:"link",target:"_blank",children:l})," "]});if((l.startsWith("![https://")||l.startsWith("![http://"))&&l.endsWith("]")){let s=l.replace(/\!\[/g,"").replace(/\]/g,"");return n=e(a,{children:[n,e("img",{src:s,height:"50"})]}),r++,e(a,{children:[e("a",{href:s,class:"link",target:"_blank",children:["obrázek ",r]})," "]})}return e(a,{children:[l," "]})})}),n&&e("details",{class:"img_wrap",children:[e("summary",{children:"příloha"}),e("span",{class:"img_list",children:n})]})]})}function w({settodos:t,e:n,todos:r}){return e("div",{class:"todo",id:"todo_"+n.id,children:[e("div",{class:"body",children:S(n.content)}),e("div",{class:"remove",onClick:()=>{t(r.filter(l=>l.id!==n.id))},children:e("span",{class:"material-symbols-outlined icon",children:"delete"})})]})}function O({todos:t,settodos:n}){return e("div",{class:"todos",children:t.length>.1?t.map(r=>e(w,{settodos:n,e:r,todos:t})):e(a,{children:e("h2",{children:"nic tu není..."})})})}function _(){let t=localStorage.getItem("todos")||"";t||(localStorage.setItem("todos","[]"),t="");let[n,r]=d(JSON.parse(t||"[]")||[]);n||r([]);let[l,s]=d(e(a,{}));return v(()=>{localStorage.setItem("todos",JSON.stringify(n))},[n]),e(a,{children:[e("span",{id:"appWrapper",children:[e(x,{getConfig:c}),e(k,{isInSettings:!1,howmuch:n.length}),e(O,{todos:n,settodos:r}),e(W,{todos:n,settodos:r,addFromCommand:l,setAddFromCommand:s})]}),e("span",{id:"commandWrapper",children:e("span",{id:"commandContainer",children:l||e(a,{})})})]})}y(e(_,{}),document.getElementById("app"));
