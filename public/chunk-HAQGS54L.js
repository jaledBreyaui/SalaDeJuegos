import{A as L,D as ne,E as se,G as H,M as oe,R as re,T as ae,a as K,c as P,d as Q,e as x,f as ee,g as te,ha as A,ja as $,ka as C,ma as le,na as D,o as ie,oa as N,pa as de}from"./chunk-UIN6RRDB.js";import{Cb as X,Cc as J,Fb as z,Gb as Y,Hb as Z,Ma as F,N as w,Na as I,Nb as E,O as k,Oa as M,Pa as j,Q as R,Qa as S,S as h,Xa as U,bc as v,da as V,gc as T,ja as W,la as m,tb as q,ub as G,yc as _}from"./chunk-FQPT6RTG.js";var ve=(()=>{class s{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let i=t.trim().split(" ");for(let n=0;n<i.length;n++)e.classList.add(i[n])}else{let i=t.split(" ");for(let n=0;n<i.length;n++)e.className+=" "+i[n]}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(n=>this.removeClass(e,n)))}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,i=0;for(var n=0;n<t.length;n++){if(t[n]==e)return i;t[n].nodeType==1&&i++}return-1}static indexWithinGroup(e,t){let i=e.parentNode?e.parentNode.childNodes:[],n=0;for(var o=0;o<i.length;o++){if(i[o]==e)return n;i[o].attributes&&i[o].attributes[t]&&i[o].nodeType==1&&n++}return-1}static appendOverlay(e,t,i="self"){i!=="self"&&e&&t&&this.appendChild(e,t)}static alignOverlay(e,t,i="self",n=!0){e&&t&&(n&&(e.style.minWidth=`${s.getOuterWidth(t)}px`),i==="self"?this.relativePosition(e,t):this.absolutePosition(e,t))}static relativePosition(e,t,i=!0){let n=y=>{if(y)return getComputedStyle(y).getPropertyValue("position")==="relative"?y:n(y.parentElement)},o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=t.offsetHeight,a=t.getBoundingClientRect(),p=this.getWindowScrollTop(),l=this.getWindowScrollLeft(),d=this.getViewport(),c=n(e)?.getBoundingClientRect()||{top:-1*p,left:-1*l},f,b,B="top";a.top+r+o.height>d.height?(f=a.top-c.top-o.height,B="bottom",a.top+f<0&&(f=-1*a.top)):(f=r+a.top-c.top,B="top");let O=a.left+o.width-d.width,ye=a.left-c.left;if(o.width>d.width?b=(a.left-c.left)*-1:O>0?b=ye-O:b=a.left-c.left,e.style.top=f+"px",e.style.left=b+"px",e.style.transformOrigin=B,i){let y=te(/-anchor-gutter$/)?.value;e.style.marginTop=B==="bottom"?`calc(${y??"2px"} * -1)`:y??""}}static absolutePosition(e,t,i=!0){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=n.height,r=n.width,a=t.offsetHeight,p=t.offsetWidth,l=t.getBoundingClientRect(),d=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),c=this.getViewport(),f,b;l.top+a+o>c.height?(f=l.top+d-o,e.style.transformOrigin="bottom",f<0&&(f=d)):(f=a+l.top+d,e.style.transformOrigin="top"),l.left+r>c.width?b=Math.max(0,l.left+u+p-r):b=l.left+u,e.style.top=f+"px",e.style.left=b+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let i=this.getParents(e),n=/(auto|scroll)/,o=r=>{let a=window.getComputedStyle(r,null);return n.test(a.getPropertyValue("overflow"))||n.test(a.getPropertyValue("overflowX"))||n.test(a.getPropertyValue("overflowY"))};for(let r of i){let a=r.nodeType===1&&r.dataset.scrollselectors;if(a){let p=a.split(",");for(let l of p){let d=this.findSingle(r,l);d&&o(d)&&t.push(d)}}r.nodeType!==9&&o(r)&&t.push(r)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=i?parseFloat(i):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,a=e.getBoundingClientRect(),l=t.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-n-r,d=e.scrollTop,u=e.clientHeight,c=this.getOuterHeight(t);l<0?e.scrollTop=d+l:l+c>u&&(e.scrollTop=d+l-u+c)}static fadeIn(e,t){e.style.opacity=0;let i=+new Date,n=0,o=function(){n=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/t,e.style.opacity=n,i=+new Date,+n<1&&(window.requestAnimationFrame?window.requestAnimationFrame(o):setTimeout(o,16))};o()}static fadeOut(e,t){var i=1,n=50,o=t,r=n/o;let a=setInterval(()=>{i=i-r,i<=0&&(i=0,clearInterval(a)),e.style.opacity=i},n)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var i=Element.prototype,n=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(o){return[].indexOf.call(document.querySelectorAll(o),this)!==-1};return n.call(e,t)}static getOuterWidth(e,t){let i=e.offsetWidth;if(t){let n=getComputedStyle(e);i+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return i}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static width(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),t}static getOuterHeight(e,t){let i=e.offsetHeight;if(t){let n=getComputedStyle(e);i+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return i}static getHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}static getViewport(){let e=window,t=document,i=t.documentElement,n=t.getElementsByTagName("body")[0],o=e.innerWidth||i.clientWidth||n.clientWidth,r=e.innerHeight||i.clientHeight||n.clientHeight;return{width:o,height:r}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var i=e.indexOf("Trident/");if(i>0){var n=e.indexOf("rv:");return!0}var o=e.indexOf("Edge/");return o>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw"Cannot append "+t+" to "+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+t}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,i){e[t].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,t=""){let i=this.find(e,this.getFocusableSelectorString(t)),n=[];for(let o of i){let r=getComputedStyle(o);this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden"&&n.push(o)}return n}static getFocusableElement(e,t=""){let i=this.findSingle(e,this.getFocusableSelectorString(t));if(i){let n=getComputedStyle(i);if(this.isVisible(i)&&n.display!="none"&&n.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,t=""){let i=this.getFocusableElements(e,t);return i.length>0?i[0]:null}static getLastFocusableElement(e,t){let i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,t=!1){let i=s.getFocusableElements(e),n=0;if(i&&i.length>0){let o=i.indexOf(i[0].ownerDocument.activeElement);t?o==-1||o===0?n=i.length-1:n=o-1:o!=-1&&o!==i.length-1&&(n=o+1)}return i[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,t){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return t?.nextElementSibling;case"@prev":return t?.previousElementSibling;case"@parent":return t?.parentElement;case"@grandparent":return t?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let o=(r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e;return o&&o.nodeType===9||this.isExist(o)?o:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,t){if(e){let i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,t={},...i){if(e){let n=document.createElement(e);return this.setAttributes(n,t),n.append(...i),n}}static setAttribute(e,t="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)}static setAttributes(e,t={}){if(this.isElement(e)){let i=(n,o)=>{let r=e?.$attrs?.[n]?[e?.$attrs?.[n]]:[];return[o].flat().reduce((a,p)=>{if(p!=null){let l=typeof p;if(l==="string"||l==="number")a.push(p);else if(l==="object"){let d=Array.isArray(p)?i(n,p):Object.entries(p).map(([u,c])=>n==="style"&&(c||c===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${c}`:c?u:void 0);a=d.length?a.concat(d.filter(u=>!!u)):a}}return a},r)};Object.entries(t).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):n==="pBind"?this.setAttributes(e,o):(o=n==="class"?[...new Set(i("class",o))].join(" ").trim():n==="style"?i("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=o),e.setAttribute(n,o))}})}}static isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}}return s})();function ze(){Q({variableName:$("scrollbar.width").name})}function Te(){ee({variableName:$("scrollbar.width").name})}var ce=class{element;listener;scrollableParents;constructor(g,e=()=>{}){this.element=g,this.listener=e}bindScrollListener(){this.scrollableParents=ve.getScrollableParents(this.element);for(let g=0;g<this.scrollableParents.length;g++)this.scrollableParents[g].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let g=0;g<this.scrollableParents.length;g++)this.scrollableParents[g].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var pe=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var we=`
    ${pe}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Se={root:({instance:s})=>{let g=typeof s.value=="function"?s.value():s.value,e=typeof s.size=="function"?s.size():s.size,t=typeof s.badgeSize=="function"?s.badgeSize():s.badgeSize,i=typeof s.severity=="function"?s.severity():s.severity;return["p-badge p-component",{"p-badge-circle":ae(g)&&String(g).length===1,"p-badge-dot":re(g),"p-badge-sm":e==="small"||t==="small","p-badge-lg":e==="large"||t==="large","p-badge-xl":e==="xlarge"||t==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},ge=(()=>{class s extends C{name="badge";style=we;classes=Se;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275prov=w({token:s,factory:s.\u0275fac})}return s})();var ue=new R("BADGE_INSTANCE");var Ee=(()=>{class s extends D{componentName="Badge";$pcBadge=h(ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=v();badgeSize=v();size=v();severity=v();value=v();badgeDisabled=v(!1,{transform:T});_componentStyle=h(ge);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275cmp=F({type:s,selectors:[["p-badge"]],hostVars:5,hostBindings:function(t,i){t&2&&(U("data-p",i.dataP),z(i.cn(i.cx("root"),i.styleClass())),X("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[E([ge,{provide:ue,useExisting:s},{provide:le,useExisting:s}]),j([N]),S],decls:1,vars:1,template:function(t,i){t&1&&Y(0),t&2&&Z(i.value())},dependencies:[_,A,de],encapsulation:2,changeDetection:0})}return s})(),Qe=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=I({type:s});static \u0275inj=k({imports:[Ee,A,A]})}return s})();var he=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var xe=`
    ${he}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ce={root:"p-ink"},be=(()=>{class s extends C{name="ripple";style=xe;classes=Ce;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275prov=w({token:s,factory:s.\u0275fac})}return s})();var pt=(()=>{class s extends D{componentName="Ripple";zone=h(V);_componentStyle=h(be);animationListener;mouseDownListener;timeout;constructor(){super(),W(()=>{J(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(!this.$unstyled()&&x(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"),!L(t)&&!H(t)){let r=Math.max(ie(this.el.nativeElement),se(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let i=ne(this.el.nativeElement),n=e.pageX-i.left+this.document.body.scrollTop-H(t)/2,o=e.pageY-i.top+this.document.body.scrollLeft-L(t)/2;this.renderer.setStyle(t,"top",o+"px"),this.renderer.setStyle(t,"left",n+"px"),!this.$unstyled()&&P(t,"p-ink-active"),t.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&(!this.$unstyled()&&x(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&x(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&x(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,oe(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=M({type:s,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[E([be]),S]})}return s})(),gt=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=I({type:s});static \u0275inj=k({})}return s})();var De=["*"],Be=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,me=(()=>{class s extends C{name="baseicon";css=Be;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275prov=w({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var xt=(()=>{class s extends D{spin=!1;_componentStyle=h(me);getClassNames(){return K("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275cmp=F({type:s,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(t,i){t&2&&z(i.getClassNames())},inputs:{spin:[2,"spin","spin",T]},features:[E([me]),S],ngContentSelectors:De,decls:1,vars:0,template:function(t,i){t&1&&(q(),G(0))},encapsulation:2,changeDetection:0})}return s})();export{ve as a,ze as b,Te as c,ce as d,Ee as e,Qe as f,xt as g,pt as h,gt as i};
