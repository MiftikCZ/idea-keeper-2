(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var V,s,re,H,R,oe,F={},ie=[],ge=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(e,_){for(var t in _)e[t]=_[t];return e}function le(e){var _=e.parentNode;_&&_.removeChild(e)}function be(e,_,t){var o,i,r,c={};for(r in _)r=="key"?o=_[r]:r=="ref"?i=_[r]:c[r]=_[r];if(arguments.length>2&&(c.children=arguments.length>3?V.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return A(e,c,o,i,null)}function A(e,_,t,o,i){var r={type:e,props:_,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++re};return i==null&&s.vnode!=null&&s.vnode(r),r}function C(e){return e.children}function L(e,_){this.props=e,this.context=_}function S(e,_){if(_==null)return e.__?S(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?S(e):null}function ce(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return ce(e)}}function J(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!M.__r++||R!==s.debounceRendering)&&((R=s.debounceRendering)||oe)(M)}function M(){var e,_,t,o,i,r,c,u;for(H.sort(function(f,d){return f.__v.__b-d.__v.__b});e=H.shift();)e.__d&&(_=H.length,o=void 0,i=void 0,c=(r=(t=e).__v).__e,(u=t.__P)&&(o=[],(i=x({},r)).__v=r.__v+1,z(u,r,i,t.__n,u.ownerSVGElement!==void 0,r.__h!=null?[c]:null,o,c??S(r),r.__h),pe(o,r),r.__e!=c&&ce(r)),H.length>_&&H.sort(function(f,d){return f.__v.__b-d.__v.__b}));M.__r=0}function se(e,_,t,o,i,r,c,u,f,d){var n,h,a,l,p,$,v,m=o&&o.__k||ie,b=m.length;for(t.__k=[],n=0;n<_.length;n++)if((l=t.__k[n]=(l=_[n])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?A(null,l,null,null,l):Array.isArray(l)?A(C,{children:l},null,null,null):l.__b>0?A(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null){if(l.__=t,l.__b=t.__b+1,(a=m[n])===null||a&&l.key==a.key&&l.type===a.type)m[n]=void 0;else for(h=0;h<b;h++){if((a=m[h])&&l.key==a.key&&l.type===a.type){m[h]=void 0;break}a=null}z(e,l,a=a||F,i,r,c,u,f,d),p=l.__e,(h=l.ref)&&a.ref!=h&&(v||(v=[]),a.ref&&v.push(a.ref,null,l),v.push(h,l.__c||p,l)),p!=null?($==null&&($=p),typeof l.type=="function"&&l.__k===a.__k?l.__d=f=ue(l,f,e):f=fe(e,l,a,m,p,f),typeof t.type=="function"&&(t.__d=f)):f&&a.__e==f&&f.parentNode!=e&&(f=S(a))}for(t.__e=$,n=b;n--;)m[n]!=null&&(typeof t.type=="function"&&m[n].__e!=null&&m[n].__e==t.__d&&(t.__d=ae(o).nextSibling),he(m[n],m[n]));if(v)for(n=0;n<v.length;n++)de(v[n],v[++n],v[++n])}function ue(e,_,t){for(var o,i=e.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=e,_=typeof o.type=="function"?ue(o,_,t):fe(t,o,o,i,o.__e,_));return _}function fe(e,_,t,o,i,r){var c,u,f;if(_.__d!==void 0)c=_.__d,_.__d=void 0;else if(t==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),c=null;else{for(u=r,f=0;(u=u.nextSibling)&&f<o.length;f+=1)if(u==i)break e;e.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function ae(e){var _,t,o;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(_=e.__k.length-1;_>=0;_--)if((t=e.__k[_])&&(o=ae(t)))return o}return null}function ke(e,_,t,o,i){var r;for(r in t)r==="children"||r==="key"||r in _||D(e,r,null,t[r],o);for(r in _)i&&typeof _[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||t[r]===_[r]||D(e,r,_[r],t[r],o)}function K(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||ge.test(_)?t:t+"px"}function D(e,_,t,o,i){var r;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(_ in o)t&&_ in t||K(e.style,_,"");if(t)for(_ in t)o&&t[_]===o[_]||K(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?o||e.addEventListener(_,r?Q:G,r):e.removeEventListener(_,r?Q:G,r);else if(_!=="dangerouslySetInnerHTML"){if(i)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&_.indexOf("-")==-1?e.removeAttribute(_):e.setAttribute(_,t))}}function G(e){return this.l[e.type+!1](s.event?s.event(e):e)}function Q(e){return this.l[e.type+!0](s.event?s.event(e):e)}function z(e,_,t,o,i,r,c,u,f){var d,n,h,a,l,p,$,v,m,b,P,N,B,T,E,g=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(f=t.__h,u=_.__e=t.__e,_.__h=null,r=[u]),(d=s.__b)&&d(_);try{e:if(typeof g=="function"){if(v=_.props,m=(d=g.contextType)&&o[d.__c],b=d?m?m.props.value:d.__:o,t.__c?$=(n=_.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?_.__c=n=new g(v,b):(_.__c=n=new L(v,b),n.constructor=g,n.render=Ce),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=b,n.__n=o,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=x({},n.__s)),x(n.__s,g.getDerivedStateFromProps(v,n.__s))),a=n.props,l=n.state,n.__v=_,h)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,b),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,b)===!1||_.__v===t.__v){for(_.__v!==t.__v&&(n.props=v,n.state=n.__s,n.__d=!1),n.__e=!1,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(w){w&&(w.__=_)}),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[],n.__h.length&&c.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,l,p)})}if(n.context=b,n.props=v,n.__P=e,N=s.__r,B=0,"prototype"in g&&g.prototype.render){for(n.state=n.__s,n.__d=!1,N&&N(_),d=n.render(n.props,n.state,n.context),T=0;T<n._sb.length;T++)n.__h.push(n._sb[T]);n._sb=[]}else do n.__d=!1,N&&N(_),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++B<25);n.state=n.__s,n.getChildContext!=null&&(o=x(x({},o),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(p=n.getSnapshotBeforeUpdate(a,l)),E=d!=null&&d.type===C&&d.key==null?d.props.children:d,se(e,Array.isArray(E)?E:[E],_,t,o,i,r,c,u,f),n.base=_.__e,_.__h=null,n.__h.length&&c.push(n),$&&(n.__E=n.__=null),n.__e=!1}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=xe(t.__e,_,t,o,i,r,c,f);(d=s.diffed)&&d(_)}catch(w){_.__v=null,(f||r!=null)&&(_.__e=u,_.__h=!!f,r[r.indexOf(u)]=null),s.__e(w,_,t)}}function pe(e,_){s.__c&&s.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(o){o.call(t)})}catch(o){s.__e(o,t.__v)}})}function xe(e,_,t,o,i,r,c,u){var f,d,n,h=t.props,a=_.props,l=_.type,p=0;if(l==="svg"&&(i=!0),r!=null){for(;p<r.length;p++)if((f=r[p])&&"setAttribute"in f==!!l&&(l?f.localName===l:f.nodeType===3)){e=f,r[p]=null;break}}if(e==null){if(l===null)return document.createTextNode(a);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,a.is&&a),r=null,u=!1}if(l===null)h===a||u&&e.data===a||(e.data=a);else{if(r=r&&V.call(e.childNodes),d=(h=t.props||F).dangerouslySetInnerHTML,n=a.dangerouslySetInnerHTML,!u){if(r!=null)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(ke(e,a,h,i,u),n)_.__k=[];else if(p=_.props.children,se(e,Array.isArray(p)?p:[p],_,t,o,i&&l!=="foreignObject",r,c,r?r[0]:t.__k&&S(t,0),u),r!=null)for(p=r.length;p--;)r[p]!=null&&le(r[p]);u||("value"in a&&(p=a.value)!==void 0&&(p!==e.value||l==="progress"&&!p||l==="option"&&p!==h.value)&&D(e,"value",p,h.value,!1),"checked"in a&&(p=a.checked)!==void 0&&p!==e.checked&&D(e,"checked",p,h.checked,!1))}return e}function de(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(o){s.__e(o,t)}}function he(e,_,t){var o,i;if(s.unmount&&s.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||de(o,null,_)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){s.__e(r,_)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&he(o[i],_,t||typeof e.type!="function");t||e.__e==null||le(e.__e),e.__=e.__e=e.__d=void 0}function Ce(e,_,t){return this.constructor(e,t)}function Ae(e,_,t){var o,i,r;s.__&&s.__(e,_),i=(o=typeof t=="function")?null:t&&t.__k||_.__k,r=[],z(_,e=(!o&&t||_).__k=be(C,null,[e]),i||F,F,_.ownerSVGElement!==void 0,!o&&t?[t]:i?null:_.firstChild?V.call(_.childNodes):null,r,!o&&t?t:i?i.__e:_.firstChild,o),pe(r,e)}V=ie.slice,s={__e:function(e,_,t,o){for(var i,r,c;_=_.__;)if((i=_.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),c=i.__d),c)return i.__E=i}catch(u){e=u}throw e}},re=0,L.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},t),this.props)),e&&x(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),J(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),J(this))},L.prototype.render=C,H=[],oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,M.__r=0;var j,y,W,X,I=0,ve=[],O=[],Y=s.__b,Z=s.__r,ee=s.diffed,_e=s.__c,te=s.unmount;function ye(e,_){s.__h&&s.__h(y,e,I||_),I=0;var t=y.__H||(y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:O}),t.__[e]}function Le(e){return I=1,He(me,e)}function He(e,_,t){var o=ye(j++,2);if(o.t=e,!o.__c&&(o.__=[t?t(_):me(void 0,_),function(r){var c=o.__N?o.__N[0]:o.__[0],u=o.t(c,r);c!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(r,c,u){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(n){return n.__c});if(f.every(function(n){return!n.__N}))return!i||i.call(this,r,c,u);var d=!1;return f.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(d=!0)}}),!(!d&&o.__c.props===r)&&(!i||i.call(this,r,c,u))}}return o.__N||o.__}function Oe(e,_){var t=ye(j++,3);!s.__s&&Se(t.__H,_)&&(t.__=e,t.i=_,y.__H.__h.push(t))}function $e(){for(var e;e=ve.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(U),e.__H.__h.forEach(q),e.__H.__h=[]}catch(_){e.__H.__h=[],s.__e(_,e.__v)}}s.__b=function(e){y=null,Y&&Y(e)},s.__r=function(e){Z&&Z(e),j=0;var _=(y=e.__c).__H;_&&(W===y?(_.__h=[],y.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=O,t.__N=t.i=void 0})):(_.__h.forEach(U),_.__h.forEach(q),_.__h=[])),W=y},s.diffed=function(e){ee&&ee(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(ve.push(_)!==1&&X===s.requestAnimationFrame||((X=s.requestAnimationFrame)||Ne)($e)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==O&&(t.__=t.__V),t.i=void 0,t.__V=O})),W=y=null},s.__c=function(e,_){_.some(function(t){try{t.__h.forEach(U),t.__h=t.__h.filter(function(o){return!o.__||q(o)})}catch(o){_.some(function(i){i.__h&&(i.__h=[])}),_=[],s.__e(o,t.__v)}}),_e&&_e(e,_)},s.unmount=function(e){te&&te(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{U(o)}catch(i){_=i}}),t.__H=void 0,_&&s.__e(_,t.__v))};var ne=typeof requestAnimationFrame=="function";function Ne(e){var _,t=function(){clearTimeout(o),ne&&cancelAnimationFrame(_),setTimeout(e)},o=setTimeout(t,100);ne&&(_=requestAnimationFrame(t))}function U(e){var _=y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),y=_}function q(e){var _=y;e.__c=e.__(),y=_}function Se(e,_){return!e||e.length!==_.length||_.some(function(t,o){return t!==e[o]})}function me(e,_){return typeof _=="function"?_(e):_}var Pe=0;function k(e,_,t,o,i,r){var c,u,f={};for(u in _)u=="ref"?c=_[u]:f[u]=_[u];var d={type:e,props:f,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Pe,__source:i,__self:r};if(typeof e=="function"&&(c=e.defaultProps))for(u in c)f[u]===void 0&&(f[u]=c[u]);return s.vnode&&s.vnode(d),d}function Ue({howmuch:e,isInSettings:_}){return k("div",{class:"topbar",children:[k("div",{class:"first",style:_?"display: flex; align-items: center;":"",children:e>.1?k(C,{children:[k("span",{class:"select",children:e.toLocaleString()})," ",e==1?"nápad":e<5?"nápady":"nápadů"]}):k(C,{children:_?k(C,{children:k("span",{class:"settings",children:"Nastavení"})}):k(C,{children:["Idea Keeper ",k("span",{class:"version",children:"2"})]})})}),k("a",{href:_?"./":"./settings.html",class:"second",children:k("span",{class:"material-symbols-outlined icon",children:_?"home":"settings"})})]})}const Fe={theme:["choose","vyber",["basic","catppuccin","neon"]],user:["write_string","text"],customCss:["write_area","css"],addTheme:["write_string","napište názvy motivů, oddělujte čárkou"],useNeonText:["check"],hue:["write_range","0-360"]};var Te=(e=>(e.theme="Motiv",e.user="Jméno",e.customCss="Vlastní CSS",e.addTheme="Další styly",e.useNeonText="Neonový text",e.hue="Odstín",e))(Te||{}),Ee=(e=>(e.basic="Výchozí",e.catppuccin="Catppuccin",e.neon="Neon",e))(Ee||{});const we={theme:"basic",addTheme:"[]",customCss:"",user:"Kubík",useNeonText:"false",hue:120};function Me(e){localStorage.setItem("ik_config",JSON.stringify(e))}function De(){let e=JSON.parse(localStorage.getItem("ik_config")||"{}");return e={...we,...e},e}export{Ue as T,Te as a,Fe as c,C as d,De as g,Oe as h,k as o,Le as p,Ae as q,Me as s,Ee as t};
