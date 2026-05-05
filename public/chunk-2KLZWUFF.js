import{g as ye,i as _e,j as Ce,k as De,l as Ve}from"./chunk-B64VSKMP.js";import{$ as x,$a as jt,Ab as Rt,Ba as St,Bc as be,Ca as u,Db as T,Eb as A,Fc as me,Gc as ve,H as ut,Ha as F,Hb as B,Hc as k,Ia as _,Ib as ce,Ic as N,J as $,Ja as p,K as V,Ka as E,Kb as b,Kc as S,L as y,La as l,Lb as pe,Lc as M,Ma as z,Mc as c,N as f,Nb as Ut,Nc as bt,Oa as ie,P as a,Sa as I,Va as h,W as dt,Wa as Pt,Wb as he,Xa as Tt,Xb as fe,Y as ne,Ya as Y,Yb as ge,Za as Bt,Zb as tt,_a as Ot,a as v,ab as ht,b as D,bb as ft,bc as Gt,cb as re,ea as R,eb as se,f as Kt,fa as ct,fb as P,ga as pt,gb as w,ha as d,hb as U,i as Jt,ib as G,ja as X,jb as ae,lb as K,mb as J,n as te,na as oe,pb as gt,qb as le,rb as C,sb as ue,t as ee,tb as de,ua as m,yb as g}from"./chunk-4RCKMEZL.js";var Se=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,o){this._renderer=t,this._elementRef=o}setProperty(t,o){this._renderer.setProperty(this._elementRef.nativeElement,t,o)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(o){return new(o||e)(u(St),u(X))};static \u0275dir=p({type:e})}return e})(),Pe=(()=>{class e extends Se{static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275dir=p({type:e,features:[l]})}return e})(),It=new f("");var Cn={provide:It,useExisting:$(()=>Te),multi:!0};function Dn(){let e=Ut()?Ut().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Vn=new f(""),Te=(()=>{class e extends Se{_compositionMode;_composing=!1;constructor(t,o,i){super(t,o),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Dn())}writeValue(t){let o=t??"";this.setProperty("value",o)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(o){return new(o||e)(u(St),u(X),u(Vn,8))};static \u0275dir=p({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,i){o&1&&P("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[g([Cn]),l]})}return e})();function zt(e){return e==null||Wt(e)===0}function Wt(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var wt=new f(""),At=new f(""),Mn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Me=class{static min(n){return xn(n)}static max(n){return In(n)}static required(n){return wn(n)}static requiredTrue(n){return An(n)}static email(n){return Fn(n)}static minLength(n){return En(n)}static maxLength(n){return kn(n)}static pattern(n){return Nn(n)}static nullValidator(n){return Be()}static compose(n){return He(n)}static composeAsync(n){return Le(n)}};function xn(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function In(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function wn(e){return zt(e.value)?{required:!0}:null}function An(e){return e.value===!0?null:{required:!0}}function Fn(e){return zt(e.value)||Mn.test(e.value)?null:{email:!0}}function En(e){return n=>{let t=n.value?.length??Wt(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function kn(e){return n=>{let t=n.value?.length??Wt(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function Nn(e){if(!e)return Be;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),o=>{if(zt(o.value))return null;let i=o.value;return n.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function Be(e){return null}function Oe(e){return e!=null}function je(e){return ie(e)?Jt(e):e}function Re(e){let n={};return e.forEach(t=>{n=t!=null?v(v({},n),t):n}),Object.keys(n).length===0?null:n}function Ue(e,n){return n.map(t=>t(e))}function Sn(e){return!e.validate}function Ge(e){return e.map(n=>Sn(n)?n:t=>n.validate(t))}function He(e){if(!e)return null;let n=e.filter(Oe);return n.length==0?null:function(t){return Re(Ue(t,n))}}function qt(e){return e!=null?He(Ge(e)):null}function Le(e){if(!e)return null;let n=e.filter(Oe);return n.length==0?null:function(t){let o=Ue(t,n).map(je);return ee(o).pipe(te(Re))}}function Qt(e){return e!=null?Le(Ge(e)):null}function xe(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function $e(e){return e._rawValidators}function ze(e){return e._rawAsyncValidators}function Ht(e){return e?Array.isArray(e)?e:[e]:[]}function vt(e,n){return Array.isArray(e)?e.includes(n):e===n}function Ie(e,n){let t=Ht(n);return Ht(e).forEach(i=>{vt(t,i)||t.push(i)}),t}function we(e,n){return Ht(n).filter(t=>!vt(e,t))}var yt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=qt(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Qt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},O=class extends yt{name;get formDirective(){return null}get path(){return null}},j=class extends yt{_parent=null;name=null;valueAccessor=null},_t=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Jo=(()=>{class e extends _t{constructor(t){super(t)}static \u0275fac=function(o){return new(o||e)(u(j,2))};static \u0275dir=p({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,i){o&2&&gt("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[l]})}return e})(),ti=(()=>{class e extends _t{constructor(t){super(t)}static \u0275fac=function(o){return new(o||e)(u(O,10))};static \u0275dir=p({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(o,i){o&2&&gt("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[l]})}return e})();var et="VALID",mt="INVALID",W="PENDING",nt="DISABLED",H=class{},Ct=class extends H{value;source;constructor(n,t){super(),this.value=n,this.source=t}},it=class extends H{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},rt=class extends H{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},q=class extends H{status;source;constructor(n,t){super(),this.status=n,this.source=t}},Dt=class extends H{source;constructor(n){super(),this.source=n}},at=class extends H{source;constructor(n){super(),this.source=n}};function Zt(e){return(Ft(e)?e.validators:e)||null}function Pn(e){return Array.isArray(e)?qt(e):e||null}function Xt(e,n){return(Ft(n)?n.asyncValidators:e)||null}function Tn(e){return Array.isArray(e)?Qt(e):e||null}function Ft(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function We(e,n,t){let o=e.controls;if(!(n?Object.keys(o):o).length)throw new ut(1e3,"");if(!o[t])throw new ut(1001,"")}function qe(e,n,t){e._forEachChild((o,i)=>{if(t[i]===void 0)throw new ut(-1002,"")})}var Q=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return T(this.statusReactive)}set status(n){T(()=>this.statusReactive.set(n))}_status=A(()=>this.statusReactive());statusReactive=R(void 0);get valid(){return this.status===et}get invalid(){return this.status===mt}get pending(){return this.status===W}get disabled(){return this.status===nt}get enabled(){return this.status!==nt}errors;get pristine(){return T(this.pristineReactive)}set pristine(n){T(()=>this.pristineReactive.set(n))}_pristine=A(()=>this.pristineReactive());pristineReactive=R(!0);get dirty(){return!this.pristine}get touched(){return T(this.touchedReactive)}set touched(n){T(()=>this.touchedReactive.set(n))}_touched=A(()=>this.touchedReactive());touchedReactive=R(!1);get untouched(){return!this.touched}_events=new Kt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ie(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ie(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(we(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(we(n,this._rawAsyncValidators))}hasValidator(n){return vt(this._rawValidators,n)}hasAsyncValidator(n){return vt(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let o=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(D(v({},n),{sourceControl:o})),t&&n.emitEvent!==!1&&this._events.next(new rt(!0,o))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:o})}),n.onlySelf||this._parent?._updateTouched(n,o),t&&n.emitEvent!==!1&&this._events.next(new rt(!1,o))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let o=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(D(v({},n),{sourceControl:o})),t&&n.emitEvent!==!1&&this._events.next(new it(!1,o))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,o),t&&n.emitEvent!==!1&&this._events.next(new it(!0,o))}markAsPending(n={}){this.status=W;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new q(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(D(v({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=nt,this.errors=null,this._forEachChild(i=>{i.disable(D(v({},n),{onlySelf:!0}))}),this._updateValue();let o=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ct(this.value,o)),this._events.next(new q(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(v({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=et,this._forEachChild(o=>{o.enable(D(v({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(D(v({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===et||this.status===W)&&this._runAsyncValidator(o,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ct(this.value,t)),this._events.next(new q(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(D(v({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?nt:et}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=W,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let o=je(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((o,i)=>o&&o._find(i),this)}getError(n,t){let o=t?this.get(t):this;return o?.errors?o.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,o){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||o)&&this._events.next(new q(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,o)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?nt:this.errors?mt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(W)?W:this._anyControlsHaveStatus(mt)?mt:et}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let o=!this._anyControlsDirty(),i=this.pristine!==o;this.pristine=o,n.onlySelf||this._parent?._updatePristine(n,t),i&&this._events.next(new it(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new rt(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ft(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Pn(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Tn(this._rawAsyncValidators)}},Z=class extends Q{constructor(n,t,o){super(Zt(t),Xt(o,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,o={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,o={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){qe(this,!0,n),Object.keys(n).forEach(o=>{We(this,!0,o),this.controls[o].setValue(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(o=>{let i=this.controls[o];i&&i.patchValue(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((o,i)=>{o.reset(n?n[i]:null,D(v({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new at(this))}getRawValue(){return this._reduceChildren({},(n,t,o)=>(n[o]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,o)=>o._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let o=this.controls[t];o&&n(o,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,o]of Object.entries(this.controls))if(this.contains(t)&&n(o))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,o,i)=>((o.enabled||this.disabled)&&(t[i]=o.value),t))}_reduceChildren(n,t){let o=n;return this._forEachChild((i,r)=>{o=t(o,i,r)}),o}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Lt=class extends Z{};var lt=new f("",{factory:()=>Et}),Et="always";function Qe(e,n){return[...n.path,e]}function Vt(e,n,t=Et){Yt(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),On(e,n),Rn(e,n),jn(e,n),Bn(e,n)}function Ae(e,n,t=!0){let o=()=>{};n?.valueAccessor?.registerOnChange(o),n?.valueAccessor?.registerOnTouched(o),xt(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Mt(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Bn(e,n){if(n.valueAccessor.setDisabledState){let t=o=>{n.valueAccessor.setDisabledState(o)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Yt(e,n){let t=$e(e);n.validator!==null?e.setValidators(xe(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let o=ze(e);n.asyncValidator!==null?e.setAsyncValidators(xe(o,n.asyncValidator)):typeof o=="function"&&e.setAsyncValidators([o]);let i=()=>e.updateValueAndValidity();Mt(n._rawValidators,i),Mt(n._rawAsyncValidators,i)}function xt(e,n){let t=!1;if(e!==null){if(n.validator!==null){let i=$e(e);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==n.validator);r.length!==i.length&&(t=!0,e.setValidators(r))}}if(n.asyncValidator!==null){let i=ze(e);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==n.asyncValidator);r.length!==i.length&&(t=!0,e.setAsyncValidators(r))}}}let o=()=>{};return Mt(n._rawValidators,o),Mt(n._rawAsyncValidators,o),t}function On(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Ze(e,n)})}function jn(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Ze(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function Ze(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Rn(e,n){let t=(o,i)=>{n.valueAccessor.writeValue(o),i&&n.viewToModelUpdate(o)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Xe(e,n){e==null,Yt(e,n)}function Un(e,n){return xt(e,n)}function Ye(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function Gn(e){return Object.getPrototypeOf(e.constructor)===Pe}function Ke(e,n){e._syncPendingControls(),n.forEach(t=>{let o=t.control;o.updateOn==="submit"&&o._pendingChange&&(t.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}function Je(e,n){if(!n)return null;Array.isArray(n);let t,o,i;return n.forEach(r=>{r.constructor===Te?t=r:Gn(r)?o=r:i=r}),i||o||t||null}function Hn(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}var Ln={provide:O,useExisting:$(()=>$n)},ot=Promise.resolve(),$n=(()=>{class e extends O{callSetDisabledState;get submitted(){return T(this.submittedReactive)}_submitted=A(()=>this.submittedReactive());submittedReactive=R(!1);_directives=new Set;form;ngSubmit=new x;options;constructor(t,o,i){super(),this.callSetDisabledState=i,this.form=new Z({},qt(t),Qt(o))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){ot.then(()=>{let o=this._findContainer(t.path);t.control=o.registerControl(t.name,t.control),Vt(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){ot.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){ot.then(()=>{let o=this._findContainer(t.path),i=new Z({});Xe(i,t),o.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){ot.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,o){ot.then(()=>{this.form.get(t.path).setValue(o)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Ke(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Dt(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(o){return new(o||e)(u(wt,10),u(At,10),u(lt,8))};static \u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(o,i){o&1&&P("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[g([Ln]),l]})}return e})();function Fe(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function Ee(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var st=class extends Q{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,o){super(Zt(t),Xt(o,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ft(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ee(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new at(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Fe(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Fe(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Ee(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var zn=e=>e instanceof st;var Wn={provide:j,useExisting:$(()=>qn)},ke=Promise.resolve(),qn=(()=>{class e extends j{_changeDetectorRef;callSetDisabledState;control=new st;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new x;constructor(t,o,i,r,s,_n){super(),this._changeDetectorRef=s,this.callSetDisabledState=_n,this._parent=t,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=Je(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let o=t.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ye(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Vt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ke.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let o=t.isDisabled.currentValue,i=o!==0&&b(o);ke.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Qe(t,this._parent):[t]}static \u0275fac=function(o){return new(o||e)(u(O,9),u(wt,10),u(At,10),u(It,10),u(ce,8),u(lt,8))};static \u0275dir=p({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[g([Wn]),l,pt]})}return e})();var ni=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})(),Qn={provide:It,useExisting:$(()=>Zn),multi:!0},Zn=(()=>{class e extends Pe{writeValue(t){let o=t??"";this.setProperty("value",o)}registerOnChange(t){this.onChange=o=>{t(o==""?null:parseFloat(o))}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275dir=p({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(o,i){o&1&&P("input",function(s){return i.onChange(s.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[g([Qn]),l]})}return e})();var $t=class extends Q{constructor(n,t,o){super(Zt(t),Xt(o,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){Array.isArray(n)?n.forEach(o=>{this.controls.push(o),this._registerControl(o)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,o={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(n,t={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,o={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){qe(this,!1,n),n.forEach((o,i)=>{We(this,!1,i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(n.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((o,i)=>{o.reset(n[i],D(v({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new at(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,o)=>o._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,o)=>{n(t,o)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var Xn=(()=>{class e extends O{callSetDisabledState;get submitted(){return T(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=A(()=>this._submittedReactive());_submittedReactive=R(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,o,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(o)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(xt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let o=this.form.get(t.path);return Vt(o,t,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),o}getControl(t){return this.form.get(t.path)}removeControl(t){Ae(t.control||null,t,!1),Hn(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,o){this.form.get(t.path).setValue(o)}onReset(){this.resetForm()}resetForm(t=void 0,o={}){this.form.reset(t,o),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Ke(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Dt(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let o=t.control,i=this.form.get(t.path);o!==i&&(Ae(o||null,t),zn(i)&&(Vt(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let o=this.form.get(t.path);Xe(o,t),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let o=this.form?.get(t.path);o&&Un(o,t)&&o.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Yt(this.form,this),this._oldForm&&xt(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(o){return new(o||e)(u(wt,10),u(At,10),u(lt,8))};static \u0275dir=p({type:e,features:[l,pt]})}return e})();var tn=new f("");var Yn={provide:j,useExisting:$(()=>Kn)},Kn=(()=>{class e extends j{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new x;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,o,i,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=Je(this,r)}ngOnChanges(t){this._added||this._setUpControl(),Ye(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Qe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(o){return new(o||e)(u(O,13),u(wt,10),u(At,10),u(It,10),u(tn,8))};static \u0275dir=p({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[g([Yn]),l,pt]})}return e})();var Jn={provide:O,useExisting:$(()=>to)},to=(()=>{class e extends Xn{form=null;ngSubmit=new x;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275dir=p({type:e,selectors:[["","formGroup",""]],hostBindings:function(o,i){o&1&&P("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[g([Jn]),l]})}return e})();var en=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=y({})}return e})();function Ne(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var oi=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,o=null){let i=this._reduceControls(t),r={};return Ne(o)?r=o:o!==null&&(r.validators=o.validator,r.asyncValidators=o.asyncValidator),new Z(i,r)}record(t,o=null){let i=this._reduceControls(t);return new Lt(i,o)}control(t,o,i){let r={};return this.useNonNullable?(Ne(o)?r=o:(r.validators=o,r.asyncValidators=i),new st(t,D(v({},r),{nonNullable:!0}))):new st(t,o,i)}array(t,o,i){let r=t.map(s=>this._createControl(s));return new $t(r,o,i)}_reduceControls(t){let o={};return Object.keys(t).forEach(i=>{o[i]=this._createControl(t[i])}),o}_createControl(t){if(t instanceof st)return t;if(t instanceof Q)return t;if(Array.isArray(t)){let o=t[0],i=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(o,i,r)}else return this.control(t)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ii=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:lt,useValue:t.callSetDisabledState??Et}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=y({imports:[en]})}return e})(),ri=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:tn,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:lt,useValue:t.callSetDisabledState??Et}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=y({imports:[en]})}return e})();var nn=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-floatlabel .p-inputwrapper,
    .p-inputgroup .p-iftalabel .p-inputwrapper {
        display: inline-flex;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label,
    .p-inputgroup .p-floatlabel .p-inputwrapper ~ label,
    .p-inputgroup .p-iftalabel .p-inputwrapper ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var eo=["*"],no=`
    ${nn}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`,oo={root:({instance:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},on=(()=>{class e extends N{name="inputgroup";style=no;classes=oo;static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var rn=new f("INPUTGROUP_INSTANCE"),io=(()=>{class e extends M{componentName="InputGroup";_componentStyle=a(on);$pcInputGroup=a(rn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275cmp=F({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:2,hostBindings:function(o,i){o&2&&C(i.cn(i.cx("root"),i.styleClass))},inputs:{styleClass:"styleClass"},features:[g([on,{provide:rn,useExisting:e},{provide:S,useExisting:e}]),E([c]),l],ngContentSelectors:eo,decls:1,vars:0,template:function(o,i){o&1&&(U(),G(0))},dependencies:[bt],encapsulation:2})}return e})(),yi=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=y({imports:[io,k,k]})}return e})();var ro=["*"],so={root:"p-inputgroupaddon"},sn=(()=>{class e extends N{name="inputgroupaddon";classes=so;static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})(),an=new f("INPUTGROUPADDON_INSTANCE"),ao=(()=>{class e extends M{componentName="InputGroupAddon";_componentStyle=a(sn);$pcInputGroupAddon=a(an,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;get hostStyle(){return this.style}static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275cmp=F({type:e,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:4,hostBindings:function(o,i){o&2&&(le(i.hostStyle),C(i.cn(i.cx("root"),i.styleClass)))},inputs:{style:"style",styleClass:"styleClass"},features:[g([sn,{provide:an,useExisting:e},{provide:S,useExisting:e}]),E([c]),l],ngContentSelectors:ro,decls:1,vars:0,template:function(o,i){o&1&&(U(),G(0))},dependencies:[bt],encapsulation:2})}return e})(),ki=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=y({imports:[ao,k,k]})}return e})();var ln=(()=>{class e extends M{modelValue=R(void 0);$filled=A(()=>be(this.modelValue()));writeModelValue(t){this.modelValue.set(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275dir=p({type:e,features:[l]})}return e})();var lo=["*"],uo={root:"p-fluid"},un=(()=>{class e extends N{name="fluid";classes=uo;static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var dn=new f("FLUID_INSTANCE"),Nt=(()=>{class e extends M{componentName="Fluid";$pcFluid=a(dn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=a(un);static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275cmp=F({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(o,i){o&2&&C(i.cx("root"))},features:[g([un,{provide:dn,useExisting:e},{provide:S,useExisting:e}]),E([c]),l],ngContentSelectors:lo,decls:1,vars:0,template:function(o,i){o&1&&(U(),G(0))},dependencies:[tt],encapsulation:2,changeDetection:0})}return e})();var cn=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var co=`
    ${cn}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,po={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},pn=(()=>{class e extends N{name="inputtext";style=co;classes=po;static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var hn=new f("INPUTTEXT_INSTANCE"),dr=(()=>{class e extends ln{componentName="InputText";hostName="";ptInputText=B();pInputTextPT=B();pInputTextUnstyled=B();bindDirectiveInstance=a(c,{self:!0});$pcInputText=a(hn,{optional:!0,skipSelf:!0})??void 0;ngControl=a(j,{optional:!0,self:!0});pcFluid=a(Nt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=B();fluid=B(void 0,{transform:b});invalid=B(void 0,{transform:b});$variant=A(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=a(pn);constructor(){super(),ct(()=>{let t=this.ptInputText()||this.pInputTextPT();t&&this.directivePT.set(t)}),ct(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(o){return new(o||e)};static \u0275dir=p({type:e,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(o,i){o&1&&P("input",function(){return i.onInput()}),o&2&&(I("data-p",i.dataP),C(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[g([pn,{provide:hn,useExisting:e},{provide:S,useExisting:e}]),E([c]),l]})}return e})(),cr=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=y({})}return e})();var fn=(()=>{class e extends M{autofocus=!1;focused=!1;platformId=a(oe);document=a(ne);host=a(X);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Gt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=ye.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275dir=p({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[l]})}return e})();var ho=["data-p-icon","spinner"],gn=(()=>{class e extends De{pathId;onInit(){this.pathId="url(#"+me()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275cmp=F({type:e,selectors:[["","data-p-icon","spinner"]],features:[l],attrs:ho,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){o&1&&(dt(),Bt(0,"g"),jt(1,"path",0),Ot(),Bt(2,"defs")(3,"clipPath",1),jt(4,"rect",2),Ot()()),o&2&&(I("clip-path",i.pathId),m(3),se("id",i.pathId))},encapsulation:2})}return e})();var bn=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var fo=["content"],go=["loadingicon"],bo=["icon"],mo=["*"],yn=(e,n)=>({class:e,pt:n});function vo(e,n){e&1&&re(0)}function yo(e,n){if(e&1&&Y(0,"span",7),e&2){let t=w(3);C(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),h("pBind",t.ptm("loadingIcon")),I("aria-hidden",!0)}}function _o(e,n){if(e&1&&(dt(),Y(0,"svg",8)),e&2){let t=w(3);C(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),h("pBind",t.ptm("loadingIcon"))("spin",!0),I("aria-hidden",!0)}}function Co(e,n){if(e&1&&(ht(0),z(1,yo,1,4,"span",3)(2,_o,1,5,"svg",6),ft()),e&2){let t=w(2);m(),h("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),m(),h("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function Do(e,n){}function Vo(e,n){if(e&1&&z(0,Do,0,0,"ng-template",9),e&2){let t=w(2);h("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Mo(e,n){if(e&1&&(ht(0),z(1,Co,3,2,"ng-container",2)(2,Vo,1,1,null,5),ft()),e&2){let t=w();m(),h("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),m(),h("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Rt(3,yn,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function xo(e,n){if(e&1&&Y(0,"span",7),e&2){let t=w(2);C(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),h("pBind",t.ptm("icon")),I("data-p",t.dataIconP)}}function Io(e,n){}function wo(e,n){if(e&1&&z(0,Io,0,0,"ng-template",9),e&2){let t=w(2);h("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Ao(e,n){if(e&1&&(ht(0),z(1,xo,1,4,"span",3)(2,wo,1,1,null,5),ft()),e&2){let t=w();m(),h("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),m(),h("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Rt(3,yn,t.cx("icon"),t.ptm("icon")))}}function Fo(e,n){if(e&1&&(Pt(0,"span",7),ue(1),Tt()),e&2){let t=w();C(t.cx("label")),h("pBind",t.ptm("label")),I("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),m(),de(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function Eo(e,n){if(e&1&&Y(0,"p-badge",10),e&2){let t=w();h("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var ko={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!e.label&&!e.buttonProps?.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label,"p-button-icon-top":(e.iconPos==="top"||e.buttonProps?.iconPos==="top")&&e.label||e.buttonProps?.label,"p-button-icon-bottom":(e.iconPos==="bottom"||e.buttonProps?.iconPos==="bottom")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.cx("icon")).filter(([,n])=>!!n).reduce((n,[t])=>n+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},mn=(()=>{class e extends N{name="button";style=bn;classes=ko;static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var vn=new f("BUTTON_INSTANCE");var No=(()=>{class e extends M{componentName="Button";hostName="";$pcButton=a(vn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});_componentStyle=a(mn);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=B(void 0,{transform:b});onClick=new x;onFocus=new x;onBlur=new x;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=a(Nt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=d(e)))(i||e)}})();static \u0275cmp=F({type:e,selectors:[["p-button"]],contentQueries:function(o,i,r){if(o&1&&ae(r,fo,5)(r,go,5)(r,bo,5)(r,ve,4),o&2){let s;K(s=J())&&(i.contentTemplate=s.first),K(s=J())&&(i.loadingIconTemplate=s.first),K(s=J())&&(i.iconTemplate=s.first),K(s=J())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",b],raised:[2,"raised","raised",b],rounded:[2,"rounded","rounded",b],text:[2,"text","text",b],plain:[2,"plain","plain",b],outlined:[2,"outlined","outlined",b],link:[2,"link","link",b],tabindex:[2,"tabindex","tabindex",pe],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",b],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",b],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[g([mn,{provide:vn,useExisting:e},{provide:S,useExisting:e}]),E([c]),l],ngContentSelectors:mo,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(o,i){o&1&&(U(),Pt(0,"button",0),P("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),G(1),z(2,vo,1,0,"ng-container",1)(3,Mo,3,6,"ng-container",2)(4,Ao,3,6,"ng-container",2)(5,Fo,2,6,"span",3)(6,Eo,1,4,"p-badge",4),Tt()),o&2&&(C(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),h("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),I("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),m(2),h("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),m(),h("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),m(),h("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),m(),h("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),m(),h("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[tt,he,ge,fe,Ve,fn,gn,Ce,_e,k,c],encapsulation:2,changeDetection:0})}return e})(),Kr=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=y({imports:[tt,No,k,k]})}return e})();export{Te as a,Me as b,Jo as c,ti as d,$n as e,qn as f,ni as g,Zn as h,Kn as i,to as j,oi as k,ii as l,ri as m,io as n,yi as o,ao as p,ki as q,dr as r,cr as s,No as t,Kr as u};
