import{a as L}from"./chunk-FCXR5S6G.js";import{ha as b,ka as H,ma as O,na as V,oa as d}from"./chunk-UIN6RRDB.js";import{$a as G,Cb as P,Fb as g,Gb as o,Ha as N,Hb as T,Ib as R,Ma as c,N as u,Na as w,Nb as U,O as I,Pa as j,Q as D,Qa as B,R as C,S as f,Xa as S,Z as A,_a as F,eb as m,fb as i,gb as r,ha as M,hb as p,la as v,wa as x,ya as l,yc as _}from"./chunk-FQPT6RTG.js";var W=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var K={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},z=(()=>{class e extends H{name="progressspinner";style=W;classes=K;static \u0275fac=(()=>{let t;return function(n){return(t||(t=v(e)))(n||e)}})();static \u0275prov=u({token:e,factory:e.\u0275fac})}return e})();var q=new D("PROGRESSSPINNER_INSTANCE"),E=(()=>{class e extends V{componentName="ProgressSpinner";$pcProgressSpinner=f(q,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(d,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=f(z);static \u0275fac=(()=>{let t;return function(n){return(t||(t=v(e)))(n||e)}})();static \u0275cmp=c({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(a,n){a&2&&(S("aria-label",n.ariaLabel)("role","progressbar")("aria-busy",!0),g(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[U([z,{provide:q,useExisting:e},{provide:O,useExisting:e}]),j([d]),B],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(a,n){a&1&&(A(),i(0,"svg",0),p(1,"circle",1),r()),a&2&&(g(n.cx("spin")),P("animation-duration",n.animationDuration),m("pBind",n.ptm("spin")),l(),g(n.cx("circle")),m("pBind",n.ptm("circle")),S("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[_,b,d],encapsulation:2,changeDetection:0})}return e})(),$=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=w({type:e});static \u0275inj=I({imports:[E,b,b]})}return e})();var y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["app-spinner"]],decls:2,vars:0,consts:[[1,"flex","min-h-48","w-full","items-center","justify-center"],["aria-label","Loading"]],template:function(t,a){t&1&&(i(0,"div",0),p(1,"p-progress-spinner",1),r())},dependencies:[$,E],encapsulation:2})};var h=class e{constructor(s){this.http=s}url="https://api.github.com/users/";getUserInfo(s){return this.http.get(this.url+s)}static \u0275fac=function(t){return new(t||e)(C(L))};static \u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})};function Z(e,s){if(e&1&&(i(0,"div",2)(1,"h2",3),o(2),r(),i(3,"p",4),o(4),r(),i(5,"p",4),o(6," El juego propio que eleg\xED es el Wordle. Ten\xE9s 6 intentos para Advinir una palabra de 5 letras. El color de cada letra te acerca dependiendo del color "),p(7,"br"),o(8," Si es "),i(9,"span",5),o(10,"VERDE"),r(),o(11," la letra es correcta y esta en el lugar correcto. "),p(12,"br"),o(13," Si es "),i(14,"span",6),o(15,"AMARILLA"),r(),o(16," la letra es correcta pero esta en el lugar incorrecto "),p(17,"br"),o(18," Por \xFAltimo si se pinta de "),i(19,"span",7),o(20,"GRIS"),r(),o(21," la letra no est\xE1 presente en la palabra. "),r(),i(22,"a",8),o(23,"Visit\xE1 mi GitHub"),r()(),i(24,"div",9),p(25,"img",10),r()),e&2){let t=s;l(2),R(" Me llamo ",t.name," "),l(2),T(t.bio),l(18),m("href",t.html_url,x),l(3),m("src",t.avatar_url,x)}}function ee(e,s){e&1&&(i(0,"div",1),p(1,"app-spinner"),r())}var J=class e{constructor(s){this.githubApi=s}usuario=M(null);ngOnInit(){this.githubApi.getUserInfo("jaledBreyaui").subscribe(s=>{this.usuario.set(s)})}static \u0275fac=function(t){return new(t||e)(N(h))};static \u0275cmp=c({type:e,selectors:[["app-about"]],decls:3,vars:1,consts:[[1,"gap-16","h-100","flex","justify-center","items-center","py-8","px-4","mx-auto","max-w-7xl","lg:py-16","lg:px-6","telg:grid","lg:grid-cols-2xt-center"],[1,"w-full","lg:col-span-2"],[1,"font-light","text-gray-500","sm:text-lg","dark:text-gray-400"],[1,"mb-4","text-4xl","tracking-tight","font-extrabold","text-gray-900","dark:text-white"],[1,"mb-4"],[1,"text-green-600","font-bold"],[1,"text-yellow-300","font-bold"],[1,"text-gray-700","font-bold"],["target","_blank",1,"underline",3,"href"],[1,"flex","justify-center"],["alt","Avatar",1,"w-80","rounded-lg",3,"src"]],template:function(t,a){if(t&1&&(i(0,"section",0),F(1,Z,26,4)(2,ee,2,0,"div",1),r()),t&2){let n;l(),G((n=a.usuario())?1:2,n)}},dependencies:[y],encapsulation:2})};export{J as About};
