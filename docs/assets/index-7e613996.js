(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var M,s,re,H,R,oe,I={},ie=[],ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(e,_){for(var t in _)e[t]=_[t];return e}function le(e){var _=e.parentNode;_&&_.removeChild(e)}function xe(e,_,t){var o,i,r,c={};for(r in _)r=="key"?o=_[r]:r=="ref"?i=_[r]:c[r]=_[r];if(arguments.length>2&&(c.children=arguments.length>3?M.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return N(e,c,o,i,null)}function N(e,_,t,o,i){var r={type:e,props:_,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++re};return i==null&&s.vnode!=null&&s.vnode(r),r}function C(e){return e.children}function L(e,_){this.props=e,this.context=_}function w(e,_){if(_==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?w(e):null}function ce(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return ce(e)}}function G(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!U.__r++||R!==s.debounceRendering)&&((R=s.debounceRendering)||oe)(U)}function U(){var e,_,t,o,i,r,c,u;for(H.sort(function(a,d){return a.__v.__b-d.__v.__b});e=H.shift();)e.__d&&(_=H.length,o=void 0,i=void 0,c=(r=(t=e).__v).__e,(u=t.__P)&&(o=[],(i=x({},r)).__v=r.__v+1,j(u,r,i,t.__n,u.ownerSVGElement!==void 0,r.__h!=null?[c]:null,o,c??w(r),r.__h),pe(o,r),r.__e!=c&&ce(r)),H.length>_&&H.sort(function(a,d){return a.__v.__b-d.__v.__b}));U.__r=0}function se(e,_,t,o,i,r,c,u,a,d){var n,h,f,l,p,$,v,m=o&&o.__k||ie,b=m.length;for(t.__k=[],n=0;n<_.length;n++)if((l=t.__k[n]=(l=_[n])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?N(null,l,null,null,l):Array.isArray(l)?N(C,{children:l},null,null,null):l.__b>0?N(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null){if(l.__=t,l.__b=t.__b+1,(f=m[n])===null||f&&l.key==f.key&&l.type===f.type)m[n]=void 0;else for(h=0;h<b;h++){if((f=m[h])&&l.key==f.key&&l.type===f.type){m[h]=void 0;break}f=null}j(e,l,f=f||I,i,r,c,u,a,d),p=l.__e,(h=l.ref)&&f.ref!=h&&(v||(v=[]),f.ref&&v.push(f.ref,null,l),v.push(h,l.__c||p,l)),p!=null?($==null&&($=p),typeof l.type=="function"&&l.__k===f.__k?l.__d=a=ue(l,a,e):a=ae(e,l,f,m,p,a),typeof t.type=="function"&&(t.__d=a)):a&&f.__e==a&&a.parentNode!=e&&(a=w(f))}for(t.__e=$,n=b;n--;)m[n]!=null&&(typeof t.type=="function"&&m[n].__e!=null&&m[n].__e==t.__d&&(t.__d=fe(o).nextSibling),he(m[n],m[n]));if(v)for(n=0;n<v.length;n++)de(v[n],v[++n],v[++n])}function ue(e,_,t){for(var o,i=e.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=e,_=typeof o.type=="function"?ue(o,_,t):ae(t,o,o,i,o.__e,_));return _}function ae(e,_,t,o,i,r){var c,u,a;if(_.__d!==void 0)c=_.__d,_.__d=void 0;else if(t==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),c=null;else{for(u=r,a=0;(u=u.nextSibling)&&a<o.length;a+=1)if(u==i)break e;e.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function fe(e){var _,t,o;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(_=e.__k.length-1;_>=0;_--)if((t=e.__k[_])&&(o=fe(t)))return o}return null}function Ce(e,_,t,o,i){var r;for(r in t)r==="children"||r==="key"||r in _||z(e,r,null,t[r],o);for(r in _)i&&typeof _[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||t[r]===_[r]||z(e,r,_[r],t[r],o)}function J(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||ke.test(_)?t:t+"px"}function z(e,_,t,o,i){var r;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(_ in o)t&&_ in t||J(e.style,_,"");if(t)for(_ in t)o&&t[_]===o[_]||J(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?o||e.addEventListener(_,r?X:K,r):e.removeEventListener(_,r?X:K,r);else if(_!=="dangerouslySetInnerHTML"){if(i)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_.indexOf("-")==-1?e.removeAttribute(_):e.setAttribute(_,t))}}function K(e){return this.l[e.type+!1](s.event?s.event(e):e)}function X(e){return this.l[e.type+!0](s.event?s.event(e):e)}function j(e,_,t,o,i,r,c,u,a){var d,n,h,f,l,p,$,v,m,b,P,S,D,E,T,g=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(a=t.__h,u=_.__e=t.__e,_.__h=null,r=[u]),(d=s.__b)&&d(_);try{e:if(typeof g=="function"){if(v=_.props,m=(d=g.contextType)&&o[d.__c],b=d?m?m.props.value:d.__:o,t.__c?$=(n=_.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?_.__c=n=new g(v,b):(_.__c=n=new L(v,b),n.constructor=g,n.render=$e),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=b,n.__n=o,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=x({},n.__s)),x(n.__s,g.getDerivedStateFromProps(v,n.__s))),f=n.props,l=n.state,n.__v=_,h)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==f&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,b),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,b)===!1||_.__v===t.__v){for(_.__v!==t.__v&&(n.props=v,n.state=n.__s,n.__d=!1),n.__e=!1,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(A){A&&(A.__=_)}),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[],n.__h.length&&c.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(f,l,p)})}if(n.context=b,n.props=v,n.__P=e,S=s.__r,D=0,"prototype"in g&&g.prototype.render){for(n.state=n.__s,n.__d=!1,S&&S(_),d=n.render(n.props,n.state,n.context),E=0;E<n._sb.length;E++)n.__h.push(n._sb[E]);n._sb=[]}else do n.__d=!1,S&&S(_),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++D<25);n.state=n.__s,n.getChildContext!=null&&(o=x(x({},o),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(p=n.getSnapshotBeforeUpdate(f,l)),T=d!=null&&d.type===C&&d.key==null?d.props.children:d,se(e,Array.isArray(T)?T:[T],_,t,o,i,r,c,u,a),n.base=_.__e,_.__h=null,n.__h.length&&c.push(n),$&&(n.__E=n.__=null),n.__e=!1}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=He(t.__e,_,t,o,i,r,c,a);(d=s.diffed)&&d(_)}catch(A){_.__v=null,(a||r!=null)&&(_.__e=u,_.__h=!!a,r[r.indexOf(u)]=null),s.__e(A,_,t)}}function pe(e,_){s.__c&&s.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(o){o.call(t)})}catch(o){s.__e(o,t.__v)}})}function He(e,_,t,o,i,r,c,u){var a,d,n,h=t.props,f=_.props,l=_.type,p=0;if(l==="svg"&&(i=!0),r!=null){for(;p<r.length;p++)if((a=r[p])&&"setAttribute"in a==!!l&&(l?a.localName===l:a.nodeType===3)){e=a,r[p]=null;break}}if(e==null){if(l===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,f.is&&f),r=null,u=!1}if(l===null)h===f||u&&e.data===f||(e.data=f);else{if(r=r&&M.call(e.childNodes),d=(h=t.props||I).dangerouslySetInnerHTML,n=f.dangerouslySetInnerHTML,!u){if(r!=null)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(Ce(e,f,h,i,u),n)_.__k=[];else if(p=_.props.children,se(e,Array.isArray(p)?p:[p],_,t,o,i&&l!=="foreignObject",r,c,r?r[0]:t.__k&&w(t,0),u),r!=null)for(p=r.length;p--;)r[p]!=null&&le(r[p]);u||("value"in f&&(p=f.value)!==void 0&&(p!==e.value||l==="progress"&&!p||l==="option"&&p!==h.value)&&z(e,"value",p,h.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==e.checked&&z(e,"checked",p,h.checked,!1))}return e}function de(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(o){s.__e(o,t)}}function he(e,_,t){var o,i;if(s.unmount&&s.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||de(o,null,_)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){s.__e(r,_)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&he(o[i],_,t||typeof e.type!="function");t||e.__e==null||le(e.__e),e.__=e.__e=e.__d=void 0}function $e(e,_,t){return this.constructor(e,t)}function Le(e,_,t){var o,i,r;s.__&&s.__(e,_),i=(o=typeof t=="function")?null:t&&t.__k||_.__k,r=[],j(_,e=(!o&&t||_).__k=xe(C,null,[e]),i||I,I,_.ownerSVGElement!==void 0,!o&&t?[t]:i?null:_.firstChild?M.call(_.childNodes):null,r,!o&&t?t:i?i.__e:_.firstChild,o),pe(r,e)}M=ie.slice,s={__e:function(e,_,t,o){for(var i,r,c;_=_.__;)if((i=_.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),c=i.__d),c)return i.__E=i}catch(u){e=u}throw e}},re=0,L.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},t),this.props)),e&&x(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),G(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),G(this))},L.prototype.render=C,H=[],oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U.__r=0;var q,y,B,Q,V=0,ve=[],O=[],Y=s.__b,Z=s.__r,ee=s.diffed,_e=s.__c,te=s.unmount;function ye(e,_){s.__h&&s.__h(y,e,V||_),V=0;var t=y.__H||(y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:O}),t.__[e]}function Oe(e){return V=1,Se(me,e)}function Se(e,_,t){var o=ye(q++,2);if(o.t=e,!o.__c&&(o.__=[t?t(_):me(void 0,_),function(r){var c=o.__N?o.__N[0]:o.__[0],u=o.t(c,r);c!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(r,c,u){if(!o.__c.__H)return!0;var a=o.__c.__H.__.filter(function(n){return n.__c});if(a.every(function(n){return!n.__N}))return!i||i.call(this,r,c,u);var d=!1;return a.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(d=!0)}}),!(!d&&o.__c.props===r)&&(!i||i.call(this,r,c,u))}}return o.__N||o.__}function Fe(e,_){var t=ye(q++,3);!s.__s&&Ee(t.__H,_)&&(t.__=e,t.i=_,y.__H.__h.push(t))}function we(){for(var e;e=ve.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(F),e.__H.__h.forEach(W),e.__H.__h=[]}catch(_){e.__H.__h=[],s.__e(_,e.__v)}}s.__b=function(e){y=null,Y&&Y(e)},s.__r=function(e){Z&&Z(e),q=0;var _=(y=e.__c).__H;_&&(B===y?(_.__h=[],y.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=O,t.__N=t.i=void 0})):(_.__h.forEach(F),_.__h.forEach(W),_.__h=[])),B=y},s.diffed=function(e){ee&&ee(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(ve.push(_)!==1&&Q===s.requestAnimationFrame||((Q=s.requestAnimationFrame)||Pe)(we)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==O&&(t.__=t.__V),t.i=void 0,t.__V=O})),B=y=null},s.__c=function(e,_){_.some(function(t){try{t.__h.forEach(F),t.__h=t.__h.filter(function(o){return!o.__||W(o)})}catch(o){_.some(function(i){i.__h&&(i.__h=[])}),_=[],s.__e(o,t.__v)}}),_e&&_e(e,_)},s.unmount=function(e){te&&te(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{F(o)}catch(i){_=i}}),t.__H=void 0,_&&s.__e(_,t.__v))};var ne=typeof requestAnimationFrame=="function";function Pe(e){var _,t=function(){clearTimeout(o),ne&&cancelAnimationFrame(_),setTimeout(e)},o=setTimeout(t,100);ne&&(_=requestAnimationFrame(t))}function F(e){var _=y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),y=_}function W(e){var _=y;e.__c=e.__(),y=_}function Ee(e,_){return!e||e.length!==_.length||_.some(function(t,o){return t!==e[o]})}function me(e,_){return typeof _=="function"?_(e):_}var Te=0;function k(e,_,t,o,i,r){var c,u,a={};for(u in _)u=="ref"?c=_[u]:a[u]=_[u];var d={type:e,props:a,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Te,__source:i,__self:r};if(typeof e=="function"&&(c=e.defaultProps))for(u in c)a[u]===void 0&&(a[u]=c[u]);return s.vnode&&s.vnode(d),d}var Ae=(e=>(e.theme="Motiv",e.user="Jméno",e.customCss="Vlastní CSS",e.addTheme="Další styly",e.useNeonText="Neonový text",e.hue="Odstín",e.bgColor="Pozadí",e.useBgImage="Obrázek na pozadí",e.bgImage="Obrázek na pozadí",e.bgOverlay="Barva překrytí",e.bgBlend="Filtr překrytí",e))(Ae||{}),ge=(e=>(e.basic="Výchozí",e.catppuccin="Catppuccin",e.gruvbox="Gruvbox",e))(ge||{}),be=(e=>(e.multiply="vynásobit",e.overlay="přidat",e.normal="žádný filtr",e))(be||{});const Ie={theme:["choose","vyber",["basic","catppuccin","gruvbox"],ge],user:["write_string","text"],customCss:["write_area","css"],addTheme:["write_string","napište názvy motivů, oddělujte čárkou"],useNeonText:["check"],hue:["write_range","0-360"],bgColor:["write_string","použij HEX barvu"],useBgImage:["check"],bgOverlay:["write_string","použij HEX barvu"],bgImage:["write_image","napiš celý odkaz"],bgBlend:["choose","vyber",["normal","multiply","overlay"],be]},Ne={theme:"basic",addTheme:"[]",customCss:"",user:"Kubík",useNeonText:"false",hue:120,useBgImage:"false",bgImage:"https://miftikcz.github.io/griddy-startpage/assets/wal1.jpg",bgBlend:"multiply"};function Ue(e){localStorage.setItem("ik_config",JSON.stringify(e))}function ze(){let e=JSON.parse(localStorage.getItem("ik_config")||"{}");return e={...Ne,...e},e}function Me({howmuch:e,isInSettings:_}){return k("div",{class:"topbar",children:[k("div",{class:"first",style:_?"display: flex; align-items: center;":"",children:e>.1?k(C,{children:[k("span",{class:"select",children:e.toLocaleString()})," ",e==1?"nápad":e<5?"nápady":"nápadů"]}):k(C,{children:_?k(C,{children:k("span",{class:"settings",children:"Nastavení"})}):k(C,{children:["Idea Keeper ",k("span",{class:"version",children:"2"})]})})}),k("a",{href:_?"./":"./settings.html",class:"second",children:k("span",{class:"material-symbols-outlined icon",children:_?"home":"settings"})})]})}export{Me as T,Ae as a,Ie as c,C as d,ze as g,Fe as h,k as o,Oe as p,Le as q,Ue as s};