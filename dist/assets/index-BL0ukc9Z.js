(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const ed=()=>{};var Ra={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},td=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[t++];e[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[t++],a=r[t++],l=r[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,l=a?r[s+1]:0,h=s+2<r.length,d=h?r[s+2]:0,p=o>>2,_=(o&3)<<4|l>>4;let A=(l&15)<<2|d>>6,R=d&63;h||(R=64,a||(A=64)),n.push(t[p],t[_],t[A],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(tl(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):td(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=t[r.charAt(s++)],l=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const _=s<r.length?t[r.charAt(s)]:64;if(++s,o==null||l==null||d==null||_==null)throw new nd;const A=o<<2|l>>4;if(n.push(A),d!==64){const R=l<<4&240|d>>2;if(n.push(R),_!==64){const k=d<<6&192|_;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rd=function(r){const e=tl(r);return nl.encodeByteArray(e,!0)},Gr=function(r){return rd(r).replace(/\./g,"")},rl=function(r){try{return nl.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=()=>sd().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof Ra>"u")return;const r=Ra.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ad=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&rl(r[1]);return e&&JSON.parse(e)},fs=()=>{try{return ed()||id()||od()||ad()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},sl=r=>{var e,t;return(t=(e=fs())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},cd=r=>{const e=sl(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},il=()=>{var r;return(r=fs())==null?void 0:r.config},ol=r=>{var e;return(e=fs())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Gr(JSON.stringify(t)),Gr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function dd(){var e;const r=(e=fs())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pd(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gd(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function _d(){return!dd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yd(){try{return typeof indexedDB=="object"}catch{return!1}}function Ed(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="FirebaseError";class Xe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Td,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Id(o,n):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Xe(s,l,n)}}function Id(r,e){return r.replace(wd,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const wd=/\{\$([^}]+)}/g;function vd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const o=r[s],a=e[s];if(Ca(o)&&Ca(a)){if(!Nt(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Ca(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function On(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,o]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Ln(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Ad(r,e){const t=new bd(r,e);return t.subscribe.bind(t)}class bd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Sd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ei),s.error===void 0&&(s.error=ei),s.complete===void 0&&(s.complete=ei);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sd(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ei(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function al(r){return(await fetch(r,{credentials:"include"})).ok}class xt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ld;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&a.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&e(o,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Cd(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cd(r){return r===kt?void 0:r}function Pd(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(j||(j={}));const Vd={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Dd=j.INFO,Nd={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},xd=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Nd[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mi{constructor(e){this.name=e,this._logLevel=Dd,this._logHandler=xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Od=(r,e)=>e.some(t=>r instanceof t);let Pa,ka;function Ld(){return Pa||(Pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return ka||(ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cl=new WeakMap,di=new WeakMap,ll=new WeakMap,ti=new WeakMap,Ui=new WeakMap;function Ud(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{t(ht(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cl.set(t,r)}).catch(()=>{}),Ui.set(e,r),e}function Fd(r){if(di.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});di.set(r,e)}let fi={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return di.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ll.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ht(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Bd(r){fi=r(fi)}function jd(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ni(this),e,...t);return ll.set(n,e.sort?e.sort():[e]),ht(n)}:Md().includes(r)?function(...e){return r.apply(ni(this),e),ht(cl.get(this))}:function(...e){return ht(r.apply(ni(this),e))}}function $d(r){return typeof r=="function"?jd(r):(r instanceof IDBTransaction&&Fd(r),Od(r,Ld())?new Proxy(r,fi):r)}function ht(r){if(r instanceof IDBRequest)return Ud(r);if(ti.has(r))return ti.get(r);const e=$d(r);return e!==r&&(ti.set(r,e),Ui.set(e,r)),e}const ni=r=>Ui.get(r);function qd(r,e,{blocked:t,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,e),l=ht(a);return n&&a.addEventListener("upgradeneeded",h=>{n(ht(a.result),h.oldVersion,h.newVersion,ht(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const zd=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],ri=new Map;function Va(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ri.get(e))return ri.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Hd.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||zd.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&h.done]))[0]};return ri.set(e,o),o}Bd(r=>({...r,get:(e,t,n)=>Va(e,t)||r.get(e,t,n),has:(e,t)=>!!Va(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gd(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Gd(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pi="@firebase/app",Da="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Mi("@firebase/app"),Kd="@firebase/app-compat",Qd="@firebase/analytics-compat",Jd="@firebase/analytics",Yd="@firebase/app-check-compat",Xd="@firebase/app-check",Zd="@firebase/auth",ef="@firebase/auth-compat",tf="@firebase/database",nf="@firebase/data-connect",rf="@firebase/database-compat",sf="@firebase/functions",of="@firebase/functions-compat",af="@firebase/installations",cf="@firebase/installations-compat",lf="@firebase/messaging",uf="@firebase/messaging-compat",hf="@firebase/performance",df="@firebase/performance-compat",ff="@firebase/remote-config",pf="@firebase/remote-config-compat",mf="@firebase/storage",gf="@firebase/storage-compat",_f="@firebase/firestore",yf="@firebase/ai",Ef="@firebase/firestore-compat",Tf="firebase",If="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="[DEFAULT]",wf={[pi]:"fire-core",[Kd]:"fire-core-compat",[Jd]:"fire-analytics",[Qd]:"fire-analytics-compat",[Xd]:"fire-app-check",[Yd]:"fire-app-check-compat",[Zd]:"fire-auth",[ef]:"fire-auth-compat",[tf]:"fire-rtdb",[nf]:"fire-data-connect",[rf]:"fire-rtdb-compat",[sf]:"fire-fn",[of]:"fire-fn-compat",[af]:"fire-iid",[cf]:"fire-iid-compat",[lf]:"fire-fcm",[uf]:"fire-fcm-compat",[hf]:"fire-perf",[df]:"fire-perf-compat",[ff]:"fire-rc",[pf]:"fire-rc-compat",[mf]:"fire-gcs",[gf]:"fire-gcs-compat",[_f]:"fire-fst",[Ef]:"fire-fst-compat",[yf]:"fire-vertex","fire-js":"fire-js",[Tf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,vf=new Map,gi=new Map;function Na(r,e){try{r.container.addComponent(e)}catch(t){Ke.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function sn(r){const e=r.name;if(gi.has(e))return Ke.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,r);for(const t of Kr.values())Na(t,r);for(const t of vf.values())Na(t,r);return!0}function Fi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Re(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new rr("app","Firebase",Af);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=If;function ul(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:mi,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(t||(t=il()),!t)throw dt.create("no-options");const o=Kr.get(s);if(o){if(Nt(t,o.options)&&Nt(n,o.config))return o;throw dt.create("duplicate-app",{appName:s})}const a=new kd(s);for(const h of gi.values())a.addComponent(h);const l=new bf(t,n,a);return Kr.set(s,l),l}function hl(r=mi){const e=Kr.get(r);if(!e&&r===mi&&il())return ul();if(!e)throw dt.create("no-app",{appName:r});return e}function ft(r,e,t){let n=wf[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ke.warn(a.join(" "));return}sn(new xt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="firebase-heartbeat-database",Rf=1,Gn="firebase-heartbeat-store";let si=null;function dl(){return si||(si=qd(Sf,Rf,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Gn)}catch(t){console.warn(t)}}}}).catch(r=>{throw dt.create("idb-open",{originalErrorMessage:r.message})})),si}async function Cf(r){try{const t=(await dl()).transaction(Gn),n=await t.objectStore(Gn).get(fl(r));return await t.done,n}catch(e){if(e instanceof Xe)Ke.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ke.warn(t.message)}}}async function xa(r,e){try{const n=(await dl()).transaction(Gn,"readwrite");await n.objectStore(Gn).put(e,fl(r)),await n.done}catch(t){if(t instanceof Xe)Ke.warn(t.message);else{const n=dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ke.warn(n.message)}}}function fl(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=1024,kf=30;class Vf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nf(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oa();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>kf){const a=xf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ke.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Oa(),{heartbeatsToSend:n,unsentEntries:s}=Df(this._heartbeatsCache.heartbeats),o=Gr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ke.warn(t),""}}}function Oa(){return new Date().toISOString().substring(0,10)}function Df(r,e=Pf){const t=[];let n=r.slice();for(const s of r){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),La(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),La(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Nf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yd()?Ed().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Cf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return xa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return xa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function La(r){return Gr(JSON.stringify({version:2,heartbeats:r})).length}function xf(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(r){sn(new xt("platform-logger",e=>new Wd(e),"PRIVATE")),sn(new xt("heartbeat",e=>new Vf(e),"PRIVATE")),ft(pi,Da,r),ft(pi,Da,"esm2020"),ft("fire-js","")}Of("");var Lf="firebase",Mf="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(Lf,Mf,"app");var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pt,pl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.F=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(I,E,v){for(var g=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)g[ve-2]=arguments[ve];return m.prototype[E].apply(I,g)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);const I=Array(16);if(typeof m=="string")for(var E=0;E<16;++E)I[E]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(E=0;E<16;++E)I[E]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],E=T.g[2];let v=T.g[3],g;g=m+(v^y&(E^v))+I[0]+3614090360&4294967295,m=y+(g<<7&4294967295|g>>>25),g=v+(E^m&(y^E))+I[1]+3905402710&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(y^v&(m^y))+I[2]+606105819&4294967295,E=v+(g<<17&4294967295|g>>>15),g=y+(m^E&(v^m))+I[3]+3250441966&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(v^y&(E^v))+I[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=v+(E^m&(y^E))+I[5]+1200080426&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(y^v&(m^y))+I[6]+2821735955&4294967295,E=v+(g<<17&4294967295|g>>>15),g=y+(m^E&(v^m))+I[7]+4249261313&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(v^y&(E^v))+I[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=v+(E^m&(y^E))+I[9]+2336552879&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(y^v&(m^y))+I[10]+4294925233&4294967295,E=v+(g<<17&4294967295|g>>>15),g=y+(m^E&(v^m))+I[11]+2304563134&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(v^y&(E^v))+I[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=v+(E^m&(y^E))+I[13]+4254626195&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(y^v&(m^y))+I[14]+2792965006&4294967295,E=v+(g<<17&4294967295|g>>>15),g=y+(m^E&(v^m))+I[15]+1236535329&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(E^v&(y^E))+I[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=v+(y^E&(m^y))+I[6]+3225465664&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(v^m))+I[11]+643717713&4294967295,E=v+(g<<14&4294967295|g>>>18),g=y+(v^m&(E^v))+I[0]+3921069994&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(y^E))+I[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=v+(y^E&(m^y))+I[10]+38016083&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(v^m))+I[15]+3634488961&4294967295,E=v+(g<<14&4294967295|g>>>18),g=y+(v^m&(E^v))+I[4]+3889429448&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(y^E))+I[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=v+(y^E&(m^y))+I[14]+3275163606&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(v^m))+I[3]+4107603335&4294967295,E=v+(g<<14&4294967295|g>>>18),g=y+(v^m&(E^v))+I[8]+1163531501&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(y^E))+I[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=v+(y^E&(m^y))+I[2]+4243563512&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(v^m))+I[7]+1735328473&4294967295,E=v+(g<<14&4294967295|g>>>18),g=y+(v^m&(E^v))+I[12]+2368359562&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(y^E^v)+I[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=v+(m^y^E)+I[8]+2272392833&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^y)+I[11]+1839030562&4294967295,E=v+(g<<16&4294967295|g>>>16),g=y+(E^v^m)+I[14]+4259657740&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^v)+I[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=v+(m^y^E)+I[4]+1272893353&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^y)+I[7]+4139469664&4294967295,E=v+(g<<16&4294967295|g>>>16),g=y+(E^v^m)+I[10]+3200236656&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^v)+I[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=v+(m^y^E)+I[0]+3936430074&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^y)+I[3]+3572445317&4294967295,E=v+(g<<16&4294967295|g>>>16),g=y+(E^v^m)+I[6]+76029189&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^v)+I[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=v+(m^y^E)+I[12]+3873151461&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^y)+I[15]+530742520&4294967295,E=v+(g<<16&4294967295|g>>>16),g=y+(E^v^m)+I[2]+3299628645&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(E^(y|~v))+I[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=v+(y^(m|~E))+I[7]+1126891415&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~y))+I[14]+2878612391&4294967295,E=v+(g<<15&4294967295|g>>>17),g=y+(v^(E|~m))+I[5]+4237533241&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~v))+I[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=v+(y^(m|~E))+I[3]+2399980690&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~y))+I[10]+4293915773&4294967295,E=v+(g<<15&4294967295|g>>>17),g=y+(v^(E|~m))+I[1]+2240044497&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~v))+I[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=v+(y^(m|~E))+I[15]+4264355552&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~y))+I[6]+2734768916&4294967295,E=v+(g<<15&4294967295|g>>>17),g=y+(v^(E|~m))+I[13]+1309151649&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~v))+I[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=v+(y^(m|~E))+I[11]+3174756917&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~y))+I[2]+718787259&4294967295,E=v+(g<<15&4294967295|g>>>17),g=y+(v^(E|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+v&4294967295}n.prototype.v=function(T,m){m===void 0&&(m=T.length);const y=m-this.blockSize,I=this.C;let E=this.h,v=0;for(;v<m;){if(E==0)for(;v<=y;)s(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<m;)if(I[E++]=T.charCodeAt(v++),E==this.blockSize){s(this,I),E=0;break}}else for(;v<m;)if(I[E++]=T[v++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=m},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)T[m++]=this.g[y]>>>I&255;return T};function o(T,m){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;const y=[];let I=!0;for(let E=T.length-1;E>=0;E--){const v=T[E]|0;I&&v==m||(y[E]=v,I=!1)}this.g=y}var l={};function h(T){return-128<=T&&T<128?o(T,function(m){return new a([m|0],m<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return _;if(T<0)return D(d(-T));const m=[];let y=1;for(let I=0;T>=y;I++)m[I]=T/y|0,y*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(p(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(m,8));let I=_;for(let v=0;v<T.length;v+=8){var E=Math.min(8,T.length-v);const g=parseInt(T.substring(v,v+E),m);E<8?(E=d(Math.pow(m,E)),I=I.j(E).add(d(g))):(I=I.j(y),I=I.add(d(g)))}return I}var _=h(0),A=h(1),R=h(16777216);r=a.prototype,r.m=function(){if(x(this))return-D(this).m();let T=0,m=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);T+=(I>=0?I:4294967296+I)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(x(this))return"-"+D(this).toString(T);const m=d(Math.pow(T,6));var y=this;let I="";for(;;){const E=me(y,m).g;y=W(y,E.j(m));let v=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=E,k(y))return v+I;for(;v.length<6;)v="0"+v;I=v+I}},r.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function x(T){return T.h==-1}r.l=function(T){return T=W(this,T),x(T)?-1:k(T)?0:1};function D(T){const m=T.g.length,y=[];for(let I=0;I<m;I++)y[I]=~T.g[I];return new a(y,~T.h).add(A)}r.abs=function(){return x(this)?D(this):this},r.add=function(T){const m=Math.max(this.g.length,T.g.length),y=[];let I=0;for(let E=0;E<=m;E++){let v=I+(this.i(E)&65535)+(T.i(E)&65535),g=(v>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=g>>>16,v&=65535,g&=65535,y[E]=g<<16|v}return new a(y,y[y.length-1]&-2147483648?-1:0)};function W(T,m){return T.add(D(m))}r.j=function(T){if(k(this)||k(T))return _;if(x(this))return x(T)?D(this).j(D(T)):D(D(this).j(T));if(x(T))return D(this.j(D(T)));if(this.l(R)<0&&T.l(R)<0)return d(this.m()*T.m());const m=this.g.length+T.g.length,y=[];for(var I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const v=this.i(I)>>>16,g=this.i(I)&65535,ve=T.i(E)>>>16,At=T.i(E)&65535;y[2*I+2*E]+=g*At,H(y,2*I+2*E),y[2*I+2*E+1]+=v*At,H(y,2*I+2*E+1),y[2*I+2*E+1]+=g*ve,H(y,2*I+2*E+1),y[2*I+2*E+2]+=v*ve,H(y,2*I+2*E+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function H(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function X(T,m){this.g=T,this.h=m}function me(T,m){if(k(m))throw Error("division by zero");if(k(T))return new X(_,_);if(x(T))return m=me(D(T),m),new X(D(m.g),D(m.h));if(x(m))return m=me(T,D(m)),new X(D(m.g),m.h);if(T.g.length>30){if(x(T)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var y=A,I=m;I.l(T)<=0;)y=Q(y),I=Q(I);var E=te(y,1),v=te(I,1);for(I=te(I,2),y=te(y,2);!k(I);){var g=v.add(I);g.l(T)<=0&&(E=E.add(y),v=g),I=te(I,1),y=te(y,1)}return m=W(T,E.j(m)),new X(E,m)}for(E=_;T.l(m)>=0;){for(y=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),v=d(y),g=v.j(m);x(g)||g.l(T)>0;)y-=I,v=d(y),g=v.j(m);k(v)&&(v=A),E=E.add(v),T=W(T,g)}return new X(E,T)}r.B=function(T){return me(this,T).h},r.and=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)&T.i(I);return new a(y,this.h&T.h)},r.or=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)|T.i(I);return new a(y,this.h|T.h)},r.xor=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)^T.i(I);return new a(y,this.h^T.h)};function Q(T){const m=T.g.length+1,y=[];for(let I=0;I<m;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(y,T.h)}function te(T,m){const y=m>>5;m%=32;const I=T.g.length-y,E=[];for(let v=0;v<I;v++)E[v]=m>0?T.i(v+y)>>>m|T.i(v+y+1)<<32-m:T.i(v+y);return new a(E,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,pl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,pt=a}).apply(typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{});var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ml,Mn,gl,Mr,_i,_l,yl,El;(function(){var r,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof kr=="object"&&kr];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=t(this);function s(i,c){if(c)e:{var u=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in u))break e;u=u[w]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&e(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function d(i,c,u){return d=h,d.apply(null,arguments)}function p(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function _(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,w,b){for(var P=Array(arguments.length-2),B=2;B<arguments.length;B++)P[B-2]=arguments[B];return c.prototype[w].apply(f,P)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function R(i){const c=i.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function k(i,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=i.length||0;const b=w.length||0;i.length=u+b;for(let P=0;P<b;P++)i[u+P]=w[P]}else i.push(w)}}class x{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(i){a.setTimeout(()=>{throw i},0)}function W(){var i=T;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class H{constructor(){this.h=this.g=null}add(c,u){const f=X.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var X=new x(()=>new me,i=>i.reset());class me{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,te=!1,T=new H,m=()=>{const i=Promise.resolve(void 0);Q=()=>{i.then(y)}};function y(){for(var i;i=W();){try{i.h.call(i.g)}catch(u){D(u)}var c=X;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}te=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i}();function g(i){return/^[\s\xa0]*$/.test(i)}function ve(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}_(ve,E),ve.prototype.init=function(i,c){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var At="closure_listenable_"+(Math.random()*1e6|0),wh=0;function vh(i,c,u,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=w,this.key=++wh,this.da=this.fa=!1}function mr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function gr(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function Ah(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function So(i){const c={};for(const u in i)c[u]=i[u];return c}const Ro="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Co(i,c){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)i[u]=f[u];for(let b=0;b<Ro.length;b++)u=Ro[b],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function _r(i){this.src=i,this.g={},this.h=0}_r.prototype.add=function(i,c,u,f,w){const b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);const P=Vs(i,c,f,w);return P>-1?(c=i[P],u||(c.fa=!1)):(c=new vh(c,this.src,b,!!f,w),c.fa=u,i.push(c)),c};function ks(i,c){const u=c.type;if(u in i.g){var f=i.g[u],w=Array.prototype.indexOf.call(f,c,void 0),b;(b=w>=0)&&Array.prototype.splice.call(f,w,1),b&&(mr(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Vs(i,c,u,f){for(let w=0;w<i.length;++w){const b=i[w];if(!b.da&&b.listener==c&&b.capture==!!u&&b.ha==f)return w}return-1}var Ds="closure_lm_"+(Math.random()*1e6|0),Ns={};function Po(i,c,u,f,w){if(Array.isArray(c)){for(let b=0;b<c.length;b++)Po(i,c[b],u,f,w);return null}return u=Do(u),i&&i[At]?i.J(c,u,l(f)?!!f.capture:!1,w):bh(i,c,u,!1,f,w)}function bh(i,c,u,f,w,b){if(!c)throw Error("Invalid event type");const P=l(w)?!!w.capture:!!w;let B=Os(i);if(B||(i[Ds]=B=new _r(i)),u=B.add(c,u,f,P,b),u.proxy)return u;if(f=Sh(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)v||(w=P),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(Vo(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Sh(){function i(u){return c.call(i.src,i.listener,u)}const c=Rh;return i}function ko(i,c,u,f,w){if(Array.isArray(c))for(var b=0;b<c.length;b++)ko(i,c[b],u,f,w);else f=l(f)?!!f.capture:!!f,u=Do(u),i&&i[At]?(i=i.i,b=String(c).toString(),b in i.g&&(c=i.g[b],u=Vs(c,u,f,w),u>-1&&(mr(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[b],i.h--)))):i&&(i=Os(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Vs(c,u,f,w)),(u=i>-1?c[i]:null)&&xs(u))}function xs(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[At])ks(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(Vo(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Os(c))?(ks(u,i),u.h==0&&(u.src=null,c[Ds]=null)):mr(i)}}}function Vo(i){return i in Ns?Ns[i]:Ns[i]="on"+i}function Rh(i,c){if(i.da)i=!0;else{c=new ve(c,this);const u=i.listener,f=i.ha||i.src;i.fa&&xs(i),i=u.call(f,c)}return i}function Os(i){return i=i[Ds],i instanceof _r?i:null}var Ls="__closure_events_fn_"+(Math.random()*1e9>>>0);function Do(i){return typeof i=="function"?i:(i[Ls]||(i[Ls]=function(c){return i.handleEvent(c)}),i[Ls])}function ge(){I.call(this),this.i=new _r(this),this.M=this,this.G=null}_(ge,I),ge.prototype[At]=!0,ge.prototype.removeEventListener=function(i,c,u,f){ko(this,i,c,u,f)};function Ie(i,c){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var w=c;c=new E(f,i),Co(c,w)}w=!0;let b,P;if(u)for(P=u.length-1;P>=0;P--)b=c.g=u[P],w=yr(b,f,!0,c)&&w;if(b=c.g=i,w=yr(b,f,!0,c)&&w,w=yr(b,f,!1,c)&&w,u)for(P=0;P<u.length;P++)b=c.g=u[P],w=yr(b,f,!1,c)&&w}ge.prototype.N=function(){if(ge.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let f=0;f<u.length;f++)mr(u[f]);delete i.g[c],i.h--}}this.G=null},ge.prototype.J=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},ge.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function yr(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let b=0;b<c.length;++b){const P=c[b];if(P&&!P.da&&P.capture==u){const B=P.listener,oe=P.ha||P.src;P.fa&&ks(i.i,P),w=B.call(oe,f)!==!1&&w}}return w&&!f.defaultPrevented}function Ch(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function No(i){i.g=Ch(()=>{i.g=null,i.i&&(i.i=!1,No(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Ph extends I{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:No(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(i){I.call(this),this.h=i,this.g={}}_(yn,I);var xo=[];function Oo(i){gr(i.g,function(c,u){this.g.hasOwnProperty(u)&&xs(c)},i),i.g={}}yn.prototype.N=function(){yn.Z.N.call(this),Oo(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ms=a.JSON.stringify,kh=a.JSON.parse,Vh=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Lo(){}function Mo(){}var En={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Us(){E.call(this,"d")}_(Us,E);function Fs(){E.call(this,"c")}_(Fs,E);var bt={},Uo=null;function Er(){return Uo=Uo||new ge}bt.Ia="serverreachability";function Fo(i){E.call(this,bt.Ia,i)}_(Fo,E);function Tn(i){const c=Er();Ie(c,new Fo(c))}bt.STAT_EVENT="statevent";function Bo(i,c){E.call(this,bt.STAT_EVENT,i),this.stat=c}_(Bo,E);function we(i){const c=Er();Ie(c,new Bo(c,i))}bt.Ja="timingevent";function jo(i,c){E.call(this,bt.Ja,i),this.size=c}_(jo,E);function In(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function wn(){this.g=!0}wn.prototype.ua=function(){this.g=!1};function Dh(i,c,u,f,w,b){i.info(function(){if(i.g)if(b){var P="",B=b.split("&");for(let K=0;K<B.length;K++){var oe=B[K].split("=");if(oe.length>1){const le=oe[0];oe=oe[1];const Oe=le.split("_");P=Oe.length>=2&&Oe[1]=="type"?P+(le+"="+oe+"&"):P+(le+"=redacted&")}}}else P=null;else P=b;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+u+`
`+P})}function Nh(i,c,u,f,w,b,P){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+u+`
`+b+" "+P})}function Ht(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Oh(i,u)+(f?" "+f:"")})}function xh(i,c){i.info(function(){return"TIMEOUT: "+c})}wn.prototype.info=function(){};function Oh(i,c){if(!i.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(i=0;i<b.length;i++)if(Array.isArray(b[i])){var u=b[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return Ms(b)}catch{return c}}var Tr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$o={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qo;function Bs(){}_(Bs,Lo),Bs.prototype.g=function(){return new XMLHttpRequest},qo=new Bs;function vn(i){return encodeURIComponent(String(i))}function Lh(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function Ze(i,c,u,f){this.j=i,this.i=c,this.l=u,this.S=f||1,this.V=new yn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zo}function zo(){this.i=null,this.g="",this.h=!1}var Ho={},js={};function $s(i,c,u){i.M=1,i.A=wr(xe(c)),i.u=u,i.R=!0,Wo(i,null)}function Wo(i,c){i.F=Date.now(),Ir(i),i.B=xe(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),ia(u.i,"t",f),i.C=0,u=i.j.L,i.h=new zo,i.g=va(i.j,u?c:null,!i.u),i.P>0&&(i.O=new Ph(d(i.Y,i,i.g),i.P)),c=i.V,u=i.g,f=i.ba;var w="readystatechange";Array.isArray(w)||(w&&(xo[0]=w.toString()),w=xo);for(let b=0;b<w.length;b++){const P=Po(u,w[b],f||c.handleEvent,!1,c.h||c);if(!P)break;c.g[P.key]=P}c=i.J?So(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Tn(),Dh(i.i,i.v,i.B,i.l,i.S,i.u)}Ze.prototype.ba=function(i){i=i.target;const c=this.O;c&&nt(i)==3?c.j():this.Y(i)},Ze.prototype.Y=function(i){try{if(i==this.g)e:{const B=nt(this.g),oe=this.g.ya(),K=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||da(this.g)))){this.K||B!=4||oe==7||(oe==8||K<=0?Tn(3):Tn(2)),qs(this);var c=this.g.ca();this.X=c;var u=Mh(this);if(this.o=c==200,Nh(this.i,this.v,this.B,this.l,this.S,B,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var b=f;break t}}b=null}if(i=b)Ht(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zs(this,i);else{this.o=!1,this.m=3,we(12),St(this),An(this);break e}}if(this.R){i=!0;let le;for(;!this.K&&this.C<u.length;)if(le=Uh(this,u),le==js){B==4&&(this.m=4,we(14),i=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(le==Ho){this.m=4,we(15),Ht(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else Ht(this.i,this.l,le,null),zs(this,le);if(Go(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||u.length!=0||this.h.h||(this.m=1,we(16),i=!1),this.o=this.o&&i,!i)Ht(this.i,this.l,u,"[Invalid Chunked Response]"),St(this),An(this);else if(u.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Xs(P),P.P=!0,we(11))}}else Ht(this.i,this.l,u,null),zs(this,u);B==4&&St(this),this.o&&!this.K&&(B==4?Ea(this.j,this):(this.o=!1,Ir(this)))}else Xh(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,we(12)):(this.m=0,we(13)),St(this),An(this)}}}catch{}finally{}};function Mh(i){if(!Go(i))return i.g.la();const c=da(i.g);if(c==="")return"";let u="";const f=c.length,w=nt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return St(i),An(i),"";i.h.i=new a.TextDecoder}for(let b=0;b<f;b++)i.h.h=!0,u+=i.h.i.decode(c[b],{stream:!(w&&b==f-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function Go(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Uh(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?js:(u=Number(c.substring(u,f)),isNaN(u)?Ho:(f+=1,f+u>c.length?js:(c=c.slice(f,f+u),i.C=f+u,c)))}Ze.prototype.cancel=function(){this.K=!0,St(this)};function Ir(i){i.T=Date.now()+i.H,Ko(i,i.H)}function Ko(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=In(d(i.aa,i),c)}function qs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Ze.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(xh(this.i,this.B),this.M!=2&&(Tn(),we(17)),St(this),this.m=2,An(this)):Ko(this,this.T-i)};function An(i){i.j.I==0||i.K||Ea(i.j,i)}function St(i){qs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Oo(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function zs(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||Hs(u.h,i))){if(!i.L&&Hs(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)Rr(u),br(u);else break e;Ys(u),we(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=In(d(u.Va,u),6e3));Yo(u.h)<=1&&u.ta&&(u.ta=void 0)}else Ct(u,11)}else if((i.L||u.g==i)&&Rr(u),!g(c))for(w=u.Ba.g.parse(c),c=0;c<w.length;c++){let K=w[c];const le=K[0];if(!(le<=u.K))if(u.K=le,K=K[1],u.I==2)if(K[0]=="c"){u.M=K[1],u.ba=K[2];const Oe=K[3];Oe!=null&&(u.ka=Oe,u.j.info("VER="+u.ka));const Pt=K[4];Pt!=null&&(u.za=Pt,u.j.info("SVER="+u.za));const rt=K[5];rt!=null&&typeof rt=="number"&&rt>0&&(f=1.5*rt,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const st=i.g;if(st){const Pr=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pr){var b=f.h;b.g||Pr.indexOf("spdy")==-1&&Pr.indexOf("quic")==-1&&Pr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ws(b,b.h),b.h=null))}if(f.G){const Zs=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;Zs&&(f.wa=Zs,J(f.J,f.G,Zs))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var P=i;if(f.na=wa(f,f.L?f.ba:null,f.W),P.L){Xo(f.h,P);var B=P,oe=f.O;oe&&(B.H=oe),B.D&&(qs(B),Ir(B)),f.g=P}else _a(f);u.i.length>0&&Sr(u)}else K[0]!="stop"&&K[0]!="close"||Ct(u,7);else u.I==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Ct(u,7):Js(u):K[0]!="noop"&&u.l&&u.l.qa(K),u.A=0)}}Tn(4)}catch{}}var Fh=class{constructor(i,c){this.g=i,this.map=c}};function Qo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Yo(i){return i.h?1:i.g?i.g.size:0}function Hs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Ws(i,c){i.g?i.g.add(c):i.h=c}function Xo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Qo.prototype.cancel=function(){if(this.i=Zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Zo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return R(i.i)}var ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bh(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let w,b=null;f>=0?(w=i[u].substring(0,f),b=i[u].substring(f+1)):w=i[u],c(w,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function et(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof et?(this.l=i.l,bn(this,i.j),this.o=i.o,this.g=i.g,Sn(this,i.u),this.h=i.h,Gs(this,oa(i.i)),this.m=i.m):i&&(c=String(i).match(ea))?(this.l=!1,bn(this,c[1]||"",!0),this.o=Rn(c[2]||""),this.g=Rn(c[3]||"",!0),Sn(this,c[4]),this.h=Rn(c[5]||"",!0),Gs(this,c[6]||"",!0),this.m=Rn(c[7]||"")):(this.l=!1,this.i=new Pn(null,this.l))}et.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Cn(c,ta,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Cn(c,ta,!0),"@"),i.push(vn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Cn(u,u.charAt(0)=="/"?qh:$h,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Cn(u,Hh)),i.join("")},et.prototype.resolve=function(i){const c=xe(this);let u=!!i.j;u?bn(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var f=i.h;if(u)Sn(c,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const b=[];for(let P=0;P<w.length;){const B=w[P++];B=="."?f&&P==w.length&&b.push(""):B==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),f&&P==w.length&&b.push("")):(b.push(B),f=!0)}f=b.join("/")}else f=w}return u?c.h=f:u=i.i.toString()!=="",u?Gs(c,oa(i.i)):u=!!i.m,u&&(c.m=i.m),c};function xe(i){return new et(i)}function bn(i,c,u){i.j=u?Rn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Sn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Gs(i,c,u){c instanceof Pn?(i.i=c,Wh(i.i,i.l)):(u||(c=Cn(c,zh)),i.i=new Pn(c,i.l))}function J(i,c,u){i.i.set(c,u)}function wr(i){return J(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Rn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Cn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,jh),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function jh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ta=/[#\/\?@]/g,$h=/[#\?:]/g,qh=/[#\?]/g,zh=/[#\?@]/g,Hh=/#/g;function Pn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Rt(i){i.g||(i.g=new Map,i.h=0,i.i&&Bh(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}r=Pn.prototype,r.add=function(i,c){Rt(this),this.i=null,i=Wt(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function na(i,c){Rt(i),c=Wt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function ra(i,c){return Rt(i),c=Wt(i,c),i.g.has(c)}r.forEach=function(i,c){Rt(this),this.g.forEach(function(u,f){u.forEach(function(w){i.call(c,w,f,this)},this)},this)};function sa(i,c){Rt(i);let u=[];if(typeof c=="string")ra(i,c)&&(u=u.concat(i.g.get(Wt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}r.set=function(i,c){return Rt(this),this.i=null,i=Wt(this,i),ra(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},r.get=function(i,c){return i?(i=sa(this,i),i.length>0?String(i[0]):c):c};function ia(i,c,u){na(i,c),u.length>0&&(i.i=null,i.g.set(Wt(i,c),R(u)),i.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const w=vn(u);u=sa(this,u);for(let b=0;b<u.length;b++){let P=w;u[b]!==""&&(P+="="+vn(u[b])),i.push(P)}}return this.i=i.join("&")};function oa(i){const c=new Pn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Wt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Wh(i,c){c&&!i.j&&(Rt(i),i.i=null,i.g.forEach(function(u,f){const w=f.toLowerCase();f!=w&&(na(this,f),ia(this,w,u))},i)),i.j=c}function Gh(i,c){const u=new wn;if(a.Image){const f=new Image;f.onload=p(tt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=p(tt,u,"TestLoadImage: error",!1,c,f),f.onabort=p(tt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(tt,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Kh(i,c){const u=new wn,f=new AbortController,w=setTimeout(()=>{f.abort(),tt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(w),b.ok?tt(u,"TestPingServer: ok",!0,c):tt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),tt(u,"TestPingServer: error",!1,c)})}function tt(i,c,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function Qh(){this.g=new Vh}function Ks(i){this.i=i.Sb||null,this.h=i.ab||!1}_(Ks,Lo),Ks.prototype.g=function(){return new vr(this.i,this.h)};function vr(i,c){ge.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(vr,ge),r=vr.prototype,r.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Vn(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},r.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;aa(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function aa(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}r.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?kn(this):Vn(this),this.readyState==3&&aa(this)}},r.Oa=function(i){this.g&&(this.response=this.responseText=i,kn(this))},r.Na=function(i){this.g&&(this.response=i,kn(this))},r.ga=function(){this.g&&kn(this)};function kn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Vn(i)}r.setRequestHeader=function(i,c){this.A.append(i,c)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function Vn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ca(i){let c="";return gr(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Qs(i,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=ca(u),typeof i=="string"?u!=null&&vn(u):J(i,c,u))}function ne(i){ge.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(ne,ge);var Jh=/^https?$/i,Yh=["POST","PUT"];r=ne.prototype,r.Fa=function(i){this.H=i},r.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qo.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(b){la(this,b);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())u.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),w=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Yh,c,void 0)>=0)||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,P]of u)this.g.setRequestHeader(b,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(b){la(this,b)}};function la(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,ua(i),Ar(i)}function ua(i){i.A||(i.A=!0,Ie(i,"complete"),Ie(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ie(this,"complete"),Ie(this,"abort"),Ar(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ar(this,!0)),ne.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?ha(this):this.Xa())},r.Xa=function(){ha(this)};function ha(i){if(i.h&&typeof o<"u"){if(i.v&&nt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ie(i,"readystatechange"),nt(i)==4){i.h=!1;try{const b=i.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=b===0){let P=String(i.D).match(ea)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),f=!Jh.test(P?P.toLowerCase():"")}u=f}if(u)Ie(i,"complete"),Ie(i,"success");else{i.o=6;try{var w=nt(i)>2?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.ca()+"]",ua(i)}}finally{Ar(i)}}}}function Ar(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||Ie(i,"ready");try{u.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function nt(i){return i.g?i.g.readyState:0}r.ca=function(){try{return nt(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),kh(c)}};function da(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Xh(i){const c={};i=(i.g&&nt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var u=Lh(i[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=c[w]||[];c[w]=b,b.push(u)}Ah(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function fa(i){this.za=0,this.i=[],this.j=new wn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Dn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Dn("baseRetryDelayMs",5e3,i),this.Za=Dn("retryDelaySeedMs",1e4,i),this.Ta=Dn("forwardChannelMaxRetries",2,i),this.va=Dn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Qo(i&&i.concurrentRequestLimit),this.Ba=new Qh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=fa.prototype,r.ka=8,r.I=1,r.connect=function(i,c,u,f){we(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=wa(this,null,this.W),Sr(this)};function Js(i){if(pa(i),i.I==3){var c=i.V++,u=xe(i.J);if(J(u,"SID",i.M),J(u,"RID",c),J(u,"TYPE","terminate"),Nn(i,u),c=new Ze(i,i.j,c),c.M=2,c.A=wr(xe(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=va(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ir(c)}Ia(i)}function br(i){i.g&&(Xs(i),i.g.cancel(),i.g=null)}function pa(i){br(i),i.v&&(a.clearTimeout(i.v),i.v=null),Rr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Sr(i){if(!Jo(i.h)&&!i.m){i.m=!0;var c=i.Ea;Q||m(),te||(Q(),te=!0),T.add(c,i),i.D=0}}function Zh(i,c){return Yo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=In(d(i.Ea,i,c),Ta(i,i.D)),i.D++,!0)}r.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const w=new Ze(this,this.j,i);let b=this.o;if(this.U&&(b?(b=So(b),Co(b,this.U)):b=this.U),this.u!==null||this.R||(w.J=b,b=null),this.S)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=ga(this,w,c),u=xe(this.J),J(u,"RID",i),J(u,"CVER",22),this.G&&J(u,"X-HTTP-Session-Id",this.G),Nn(this,u),b&&(this.R?c="headers="+vn(ca(b))+"&"+c:this.u&&Qs(u,this.u,b)),Ws(this.h,w),this.Ra&&J(u,"TYPE","init"),this.S?(J(u,"$req",c),J(u,"SID","null"),w.U=!0,$s(w,u,null)):$s(w,u,c),this.I=2}}else this.I==3&&(i?ma(this,i):this.i.length==0||Jo(this.h)||ma(this))};function ma(i,c){var u;c?u=c.l:u=i.V++;const f=xe(i.J);J(f,"SID",i.M),J(f,"RID",u),J(f,"AID",i.K),Nn(i,f),i.u&&i.o&&Qs(f,i.u,i.o),u=new Ze(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=ga(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Ws(i.h,u),$s(u,f,c)}function Nn(i,c){i.H&&gr(i.H,function(u,f){J(c,f,u)}),i.l&&gr({},function(u,f){J(c,f,u)})}function ga(i,c,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var w=i.i;let B=-1;for(;;){const oe=["count="+u];B==-1?u>0?(B=w[0].g,oe.push("ofs="+B)):B=0:oe.push("ofs="+B);let K=!0;for(let le=0;le<u;le++){var b=w[le].g;const Oe=w[le].map;if(b-=B,b<0)B=Math.max(0,w[le].g-100),K=!1;else try{b="req"+b+"_"||"";try{var P=Oe instanceof Map?Oe:Object.entries(Oe);for(const[Pt,rt]of P){let st=rt;l(rt)&&(st=Ms(rt)),oe.push(b+Pt+"="+encodeURIComponent(st))}}catch(Pt){throw oe.push(b+"type="+encodeURIComponent("_badmap")),Pt}}catch{f&&f(Oe)}}if(K){P=oe.join("&");break e}}P=void 0}return i=i.i.splice(0,u),c.G=i,P}function _a(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;Q||m(),te||(Q(),te=!0),T.add(c,i),i.A=0}}function Ys(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=In(d(i.Da,i),Ta(i,i.A)),i.A++,!0)}r.Da=function(){if(this.v=null,ya(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=In(d(this.Wa,this),i)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,we(10),br(this),ya(this))};function Xs(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function ya(i){i.g=new Ze(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=xe(i.na);J(c,"RID","rpc"),J(c,"SID",i.M),J(c,"AID",i.K),J(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&J(c,"TO",i.ia),J(c,"TYPE","xmlhttp"),Nn(i,c),i.u&&i.o&&Qs(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=wr(xe(c)),u.u=null,u.R=!0,Wo(u,i)}r.Va=function(){this.C!=null&&(this.C=null,br(this),Ys(this),we(19))};function Rr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Ea(i,c){var u=null;if(i.g==c){Rr(i),Xs(i),i.g=null;var f=2}else if(Hs(i.h,c))u=c.G,Xo(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var w=i.D;f=Er(),Ie(f,new jo(f,u)),Sr(i)}else _a(i);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&Zh(i,c)||f==2&&Ys(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),w){case 1:Ct(i,5);break;case 4:Ct(i,10);break;case 3:Ct(i,6);break;default:Ct(i,2)}}}function Ta(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function Ct(i,c){if(i.j.info("Error code "+c),c==2){var u=d(i.bb,i),f=i.Ua;const w=!f;f=new et(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bn(f,"https"),wr(f),w?Gh(f.toString(),u):Kh(f.toString(),u)}else we(2);i.I=0,i.l&&i.l.pa(c),Ia(i),pa(i)}r.bb=function(i){i?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Ia(i){if(i.I=0,i.ja=[],i.l){const c=Zo(i.h);(c.length!=0||i.i.length!=0)&&(k(i.ja,c),k(i.ja,i.i),i.h.i.length=0,R(i.i),i.i.length=0),i.l.oa()}}function wa(i,c,u){var f=u instanceof et?xe(u):new et(u);if(f.g!="")c&&(f.g=c+"."+f.g),Sn(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const b=new et(null);f&&bn(b,f),c&&(b.g=c),w&&Sn(b,w),u&&(b.h=u),f=b}return u=i.G,c=i.wa,u&&c&&J(f,u,c),J(f,"VER",i.ka),Nn(i,f),f}function va(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ne(new Ks({ab:u})):new ne(i.ma),c.Fa(i.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Aa(){}r=Aa.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Cr(){}Cr.prototype.g=function(i,c){return new be(i,c)};function be(i,c){ge.call(this),this.g=new fa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!g(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Gt(this)}_(be,ge),be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){Js(this.g)},be.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=Ms(i),i=u);c.i.push(new Fh(c.Ya++,i)),c.I==3&&Sr(c)},be.prototype.N=function(){this.g.l=null,delete this.j,Js(this.g),delete this.g,be.Z.N.call(this)};function ba(i){Us.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const u in c){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}_(ba,Us);function Sa(){Fs.call(this),this.status=1}_(Sa,Fs);function Gt(i){this.g=i}_(Gt,Aa),Gt.prototype.ra=function(){Ie(this.g,"a")},Gt.prototype.qa=function(i){Ie(this.g,new ba(i))},Gt.prototype.pa=function(i){Ie(this.g,new Sa)},Gt.prototype.oa=function(){Ie(this.g,"b")},Cr.prototype.createWebChannel=Cr.prototype.g,be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,El=function(){return new Cr},yl=function(){return Er()},_l=bt,_i={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,Mr=Tr,$o.COMPLETE="complete",gl=$o,Mo.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",ge.prototype.listen=ge.prototype.J,Mn=Mo,ne.prototype.listenOnce=ne.prototype.K,ne.prototype.getLastError=ne.prototype.Ha,ne.prototype.getLastErrorCode=ne.prototype.ya,ne.prototype.getStatus=ne.prototype.ca,ne.prototype.getResponseJson=ne.prototype.La,ne.prototype.getResponseText=ne.prototype.la,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Fa,ml=ne}).apply(typeof kr<"u"?kr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn="12.12.0";function Uf(r){fn=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Mi("@firebase/firestore");function Kt(){return Ot.logLevel}function V(r,...e){if(Ot.logLevel<=j.DEBUG){const t=e.map(Bi);Ot.debug(`Firestore (${fn}): ${r}`,...t)}}function Qe(r,...e){if(Ot.logLevel<=j.ERROR){const t=e.map(Bi);Ot.error(`Firestore (${fn}): ${r}`,...t)}}function Lt(r,...e){if(Ot.logLevel<=j.WARN){const t=e.map(Bi);Ot.warn(`Firestore (${fn}): ${r}`,...t)}}function Bi(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Tl(r,n,t)}function Tl(r,e,t){let n=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Qe(n),new Error(n)}function G(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Tl(e,s,n)}function F(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Xe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ff{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class Bf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jf{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let o=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new Il(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new ye(e)}}class $f{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class qf{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new $f(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ua{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Re(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const n=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ua(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ua(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Hf(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<t&&(n+=e.charAt(s[o]%62))}return n}}function $(r,e){return r<e?-1:r>e?1:0}function yi(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),o=e.charAt(n);if(s!==o)return ii(s)===ii(o)?$(s,o):ii(s)?1:-1}return $(r.length,e.length)}const Wf=55296,Gf=57343;function ii(r){const e=r.charCodeAt(0);return e>=Wf&&e<=Gf}function on(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="__name__";class Le{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Le?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const o=Le.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return $(e.length,t.length)}static compareSegments(e,t){const n=Le.isNumericId(e),s=Le.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Le.extractNumericId(e).compare(Le.extractNumericId(t)):yi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pt.fromString(e.substring(4,e.length-2))}}class Z extends Le{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new N(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const Kf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends Le{construct(e,t,n){return new fe(e,t,n)}static isValidIdentifier(e){return Kf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fa}static keyField(){return new fe([Fa])}static fromServerFormat(e){const t=[];let n="",s=0;const o=()=>{if(n.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new N(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(n+=l,s++):(o(),s++)}if(o(),a)throw new N(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Z.fromString(e))}static fromName(e){return new O(Z.fromString(e).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Z(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(r,e,t){if(!t)throw new N(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Jf(r,e,t,n){if(e===!0&&n===!0)throw new N(C.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ba(r){if(!O.isDocumentKey(r))throw new N(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function wl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function $i(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function an(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new N(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$i(r);throw new N(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(r,e){const t={typeString:r};return e&&(t.value=e),t}function or(r,e){if(!wl(r))throw new N(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,o="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${n}' field to equal '${o.value}'`;break}}if(t)throw new N(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=-62135596800,$a=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*$a);return new Y(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ja)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$a}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(or(e,Y._jsonSchema))return new Y(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ja;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:ie("string",Y._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new Y(0,0))}static max(){return new U(new Y(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=-1;function Yf(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new Y(t+1,0):new Y(t,n));return new gt(s,O.empty(),e)}function Xf(r){return new gt(r.readTime,r.key,Kn)}class gt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new gt(U.min(),O.empty(),Kn)}static max(){return new gt(U.max(),O.empty(),Kn)}}function Zf(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:$(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==ep)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,n)=>{t(e)})}static reject(e){return new S((t,n)=>{n(e)})}static waitFor(e){return new S((t,n)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&t()},h=>n(h))}),a=!0,o===s&&t()})}static or(e){let t=S.resolve(!1);for(const n of e)t=t.next(s=>s?S.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,o)=>{n.push(t.call(this,s,o))}),this.waitFor(n)}static mapArray(e,t){return new S((n,s)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++l,l===o&&n(a)},p=>s(p))}})}static doWhile(e,t){return new S((n,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):n()};o()})}}function np(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ps.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=-1;function ms(r){return r==null}function Qr(r){return r===0&&1/r==-1/0}function rp(r){return typeof r=="number"&&Number.isInteger(r)&&!Qr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="";function sp(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=qa(e)),e=ip(r.get(t),e);return qa(e)}function ip(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":t+="";break;case vl:t+="";break;default:t+=o}}return t}function qa(r){return r+vl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Al(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vr(this.root,e,this.comparator,!0)}}class Vr{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,n,s,o){this.key=e,this.value=t,this.color=n??de.RED,this.left=s??de.EMPTY,this.right=o??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,o){return new de(e??this.key,t??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const o=n(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,n),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return de.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,n,s,o){return this}insert(e,t,n){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ha(this.data.getIterator())}getIteratorFrom(e){return new Ha(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Ha{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new ke([])}unionWith(e){let t=new ce(fe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new bl("Invalid base64 string: "+o):o}}(e);return new pe(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const op=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(r){if(G(!!r,39018),typeof r=="string"){let e=0;const t=op.exec(r);if(G(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:re(r.seconds),nanos:re(r.nanos)}}function re(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function yt(r){return typeof r=="string"?pe.fromBase64String(r):pe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="server_timestamp",Rl="__type__",Cl="__previous_value__",Pl="__local_write_time__";function zi(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Rl])==null?void 0:n.stringValue)===Sl}function gs(r){const e=r.mapValue.fields[Cl];return zi(e)?gs(e):e}function Qn(r){const e=_t(r.mapValue.fields[Pl].timestampValue);return new Y(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t,n,s,o,a,l,h,d,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=_}}const Jr="(default)";class Jn{constructor(e,t){this.projectId=e,this.database=t||Jr}static empty(){return new Jn("","")}get isDefaultDatabase(){return this.database===Jr}isEqual(e){return e instanceof Jn&&e.projectId===this.projectId&&e.database===this.database}}function cp(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new N(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jn(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="__type__",lp="__max__",Dr={mapValue:{}},Vl="__vector__",Yr="value";function Et(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zi(r)?4:hp(r)?9007199254740991:up(r)?10:11:M(28295,{value:r})}function qe(r,e){if(r===e)return!0;const t=Et(r);if(t!==Et(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Qn(r).isEqual(Qn(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=_t(s.timestampValue),l=_t(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,o){return yt(s.bytesValue).isEqual(yt(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,o){return re(s.geoPointValue.latitude)===re(o.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(o.geoPointValue.longitude)}(r,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return re(s.integerValue)===re(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=re(s.doubleValue),l=re(o.doubleValue);return a===l?Qr(a)===Qr(l):isNaN(a)&&isNaN(l)}return!1}(r,e);case 9:return on(r.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(za(a)!==za(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!qe(a[h],l[h])))return!1;return!0}(r,e);default:return M(52216,{left:r})}}function Yn(r,e){return(r.values||[]).find(t=>qe(t,e))!==void 0}function cn(r,e){if(r===e)return 0;const t=Et(r),n=Et(e);if(t!==n)return $(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,e.booleanValue);case 2:return function(o,a){const l=re(o.integerValue||o.doubleValue),h=re(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(r,e);case 3:return Wa(r.timestampValue,e.timestampValue);case 4:return Wa(Qn(r),Qn(e));case 5:return yi(r.stringValue,e.stringValue);case 6:return function(o,a){const l=yt(o),h=yt(a);return l.compareTo(h)}(r.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=$(l[d],h[d]);if(p!==0)return p}return $(l.length,h.length)}(r.referenceValue,e.referenceValue);case 8:return function(o,a){const l=$(re(o.latitude),re(a.latitude));return l!==0?l:$(re(o.longitude),re(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Ga(r.arrayValue,e.arrayValue);case 10:return function(o,a){var A,R,k,x;const l=o.fields||{},h=a.fields||{},d=(A=l[Yr])==null?void 0:A.arrayValue,p=(R=h[Yr])==null?void 0:R.arrayValue,_=$(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((x=p==null?void 0:p.values)==null?void 0:x.length)||0);return _!==0?_:Ga(d,p)}(r.mapValue,e.mapValue);case 11:return function(o,a){if(o===Dr.mapValue&&a===Dr.mapValue)return 0;if(o===Dr.mapValue)return 1;if(a===Dr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let _=0;_<h.length&&_<p.length;++_){const A=yi(h[_],p[_]);if(A!==0)return A;const R=cn(l[h[_]],d[p[_]]);if(R!==0)return R}return $(h.length,p.length)}(r.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function Wa(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return $(r,e);const t=_t(r),n=_t(e),s=$(t.seconds,n.seconds);return s!==0?s:$(t.nanos,n.nanos)}function Ga(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const o=cn(t[s],n[s]);if(o)return o}return $(t.length,n.length)}function ln(r){return Ei(r)}function Ei(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=_t(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return yt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const o of t.values||[])s?s=!1:n+=",",n+=Ei(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${Ei(t.fields[a])}`;return s+"}"}(r.mapValue):M(61005,{value:r})}function Ur(r){switch(Et(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gs(r);return e?16+Ur(e):16;case 5:return 2*r.stringValue.length;case 6:return yt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+Ur(o),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Bt(n.fields,(o,a)=>{s+=o.length+Ur(a)}),s}(r.mapValue);default:throw M(13486,{value:r})}}function Ti(r){return!!r&&"integerValue"in r}function Hi(r){return!!r&&"arrayValue"in r}function Ka(r){return!!r&&"nullValue"in r}function Qa(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fr(r){return!!r&&"mapValue"in r}function up(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[kl])==null?void 0:n.stringValue)===Vl}function jn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Bt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=jn(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jn(r.arrayValue.values[t]);return e}return{...r}}function hp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===lp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jn(t)}setAll(e){let t=fe.emptyPath(),n={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,n,s),n={},s=[],t=l.popLast()}a?n[l.lastSegment()]=jn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,n,s)}delete(e){const t=this.field(e.popLast());Fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Fr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Bt(t,(s,o)=>e[s]=o);for(const s of n)delete e[s]}clone(){return new Ce(jn(this.value))}}function Dl(r){const e=[];return Bt(r.fields,(t,n)=>{const s=new fe([t]);if(Fr(n)){const o=Dl(n.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,n,s,o,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ee(e,0,U.min(),U.min(),U.min(),Ce.empty(),0)}static newFoundDocument(e,t,n,s){return new Ee(e,1,t,U.min(),n,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,U.min(),U.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,U.min(),U.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t){this.position=e,this.inclusive=t}}function Ja(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const o=e[s],a=r.position[s];if(o.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),t.key):n=cn(a,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ya(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!qe(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function dp(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{}class ae extends Nl{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new pp(e,t,n):t==="array-contains"?new _p(e,n):t==="in"?new yp(e,n):t==="not-in"?new Ep(e,n):t==="array-contains-any"?new Tp(e,n):new ae(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new mp(e,n):new gp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cn(t,this.value)):t!==null&&Et(this.value)===Et(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends Nl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ze(e,t)}matches(e){return xl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xl(r){return r.op==="and"}function Ol(r){return fp(r)&&xl(r)}function fp(r){for(const e of r.filters)if(e instanceof ze)return!1;return!0}function Ii(r){if(r instanceof ae)return r.field.canonicalString()+r.op.toString()+ln(r.value);if(Ol(r))return r.filters.map(e=>Ii(e)).join(",");{const e=r.filters.map(t=>Ii(t)).join(",");return`${r.op}(${e})`}}function Ll(r,e){return r instanceof ae?function(n,s){return s instanceof ae&&n.op===s.op&&n.field.isEqual(s.field)&&qe(n.value,s.value)}(r,e):r instanceof ze?function(n,s){return s instanceof ze&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,a,l)=>o&&Ll(a,s.filters[l]),!0):!1}(r,e):void M(19439)}function Ml(r){return r instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${ln(t.value)}`}(r):r instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(Ml).join(" ,")+"}"}(r):"Filter"}class pp extends ae{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class mp extends ae{constructor(e,t){super(e,"in",t),this.keys=Ul("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class gp extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Ul("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ul(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class _p extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hi(t)&&Yn(t.arrayValue,this.value)}}class yp extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yn(this.value.arrayValue,t)}}class Ep extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Yn(this.value.arrayValue,t)}}class Tp extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Yn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t=null,n=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Xa(r,e=null,t=[],n=[],s=null,o=null,a=null){return new Ip(r,e,t,n,s,o,a)}function Wi(r){const e=F(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ii(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),ms(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ln(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ln(n)).join(",")),e.Te=t}return e.Te}function Gi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!dp(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ll(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ya(r.startAt,e.startAt)&&Ya(r.endAt,e.endAt)}function wi(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t=null,n=[],s=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function wp(r,e,t,n,s,o,a,l){return new _s(r,e,t,n,s,o,a,l)}function Ki(r){return new _s(r)}function Za(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function vp(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ap(r){return r.collectionGroup!==null}function $n(r){const e=F(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ce(fe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Zr(o,n))}),t.has(fe.keyField().canonicalString())||e.Ee.push(new Zr(fe.keyField(),n))}return e.Ee}function Me(r){const e=F(r);return e.Ie||(e.Ie=bp(e,$n(r))),e.Ie}function bp(r,e){if(r.limitType==="F")return Xa(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Zr(s.field,o)});const t=r.endAt?new Xr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Xr(r.startAt.position,r.startAt.inclusive):null;return Xa(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function vi(r,e,t){return new _s(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ys(r,e){return Gi(Me(r),Me(e))&&r.limitType===e.limitType}function Fl(r){return`${Wi(Me(r))}|lt:${r.limitType}`}function Qt(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Ml(s)).join(", ")}]`),ms(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ln(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ln(s)).join(",")),`Target(${n})`}(Me(r))}; limitType=${r.limitType})`}function Es(r,e){return e.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,e)&&function(n,s){for(const o of $n(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,l,h){const d=Ja(a,l,h);return a.inclusive?d<=0:d<0}(n.startAt,$n(n),s)||n.endAt&&!function(a,l,h){const d=Ja(a,l,h);return a.inclusive?d>=0:d>0}(n.endAt,$n(n),s))}(r,e)}function Sp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Bl(r){return(e,t)=>{let n=!1;for(const s of $n(r)){const o=Rp(s,e,t);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Rp(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?cn(h,d):M(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,(t,n)=>{for(const[s,o]of n)e(s,o)})}isEmpty(){return Al(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new ee(O.comparator);function Je(){return Cp}const jl=new ee(O.comparator);function Un(...r){let e=jl;for(const t of r)e=e.insert(t.key,t);return e}function $l(r){let e=jl;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Vt(){return qn()}function ql(){return qn()}function qn(){return new jt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Pp=new ee(O.comparator),kp=new ce(O.comparator);function q(...r){let e=kp;for(const t of r)e=e.add(t);return e}const Vp=new ce($);function Dp(){return Vp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(e)?"-0":e}}function zl(r){return{integerValue:""+r}}function Np(r,e){return rp(e)?zl(e):Qi(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this._=void 0}}function xp(r,e,t){return r instanceof es?function(s,o){const a={fields:{[Rl]:{stringValue:Sl},[Pl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&zi(o)&&(o=gs(o)),o&&(a.fields[Cl]=o),{mapValue:a}}(t,e):r instanceof Xn?Wl(r,e):r instanceof Zn?Gl(r,e):function(s,o){const a=Hl(s,o),l=ec(a)+ec(s.Ae);return Ti(a)&&Ti(s.Ae)?zl(l):Qi(s.serializer,l)}(r,e)}function Op(r,e,t){return r instanceof Xn?Wl(r,e):r instanceof Zn?Gl(r,e):t}function Hl(r,e){return r instanceof ts?function(n){return Ti(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class es extends Ts{}class Xn extends Ts{constructor(e){super(),this.elements=e}}function Wl(r,e){const t=Kl(e);for(const n of r.elements)t.some(s=>qe(s,n))||t.push(n);return{arrayValue:{values:t}}}class Zn extends Ts{constructor(e){super(),this.elements=e}}function Gl(r,e){let t=Kl(e);for(const n of r.elements)t=t.filter(s=>!qe(s,n));return{arrayValue:{values:t}}}class ts extends Ts{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ec(r){return re(r.integerValue||r.doubleValue)}function Kl(r){return Hi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Lp(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Xn&&s instanceof Xn||n instanceof Zn&&s instanceof Zn?on(n.elements,s.elements,qe):n instanceof ts&&s instanceof ts?qe(n.Ae,s.Ae):n instanceof es&&s instanceof es}(r.transform,e.transform)}class Mp{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Br(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Is{}function Ql(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ji(r.key,Ue.none()):new ar(r.key,r.data,Ue.none());{const t=r.data,n=Ce.empty();let s=new ce(fe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new $t(r.key,n,new ke(s.toArray()),Ue.none())}}function Up(r,e,t){r instanceof ar?function(s,o,a){const l=s.value.clone(),h=nc(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):r instanceof $t?function(s,o,a){if(!Br(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=nc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Jl(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function zn(r,e,t,n){return r instanceof ar?function(o,a,l,h){if(!Br(o.precondition,a))return l;const d=o.value.clone(),p=rc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof $t?function(o,a,l,h){if(!Br(o.precondition,a))return l;const d=rc(o.fieldTransforms,h,a),p=a.data;return p.setAll(Jl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(r,e,t,n):function(o,a,l){return Br(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,e,t)}function Fp(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),o=Hl(n.transform,s||null);o!=null&&(t===null&&(t=Ce.empty()),t.set(n.field,o))}return t||null}function tc(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&on(n,s,(o,a)=>Lp(o,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ar extends Is{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $t extends Is{constructor(e,t,n,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Jl(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function nc(r,e,t){const n=new Map;G(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const o=r[s],a=o.transform,l=e.data.field(o.field);n.set(o.field,Op(a,l,t[s]))}return n}function rc(r,e,t){const n=new Map;for(const s of r){const o=s.transform,a=t.data.field(s.field);n.set(s.field,xp(o,a,e))}return n}class Ji extends Is{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bp extends Is{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Up(o,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=zn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=zn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ql();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(s.key)?null:l;const h=Ql(a,l);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),q())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,n)=>tc(t,n))&&on(this.baseMutations,e.baseMutations,(t,n)=>tc(t,n))}}class Yi{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){G(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return Pp}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new Yi(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se,z;function zp(r){switch(r){case C.OK:return M(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function Yl(r){if(r===void 0)return Qe("GRPC error has no .code"),C.UNKNOWN;switch(r){case se.OK:return C.OK;case se.CANCELLED:return C.CANCELLED;case se.UNKNOWN:return C.UNKNOWN;case se.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case se.INTERNAL:return C.INTERNAL;case se.UNAVAILABLE:return C.UNAVAILABLE;case se.UNAUTHENTICATED:return C.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case se.NOT_FOUND:return C.NOT_FOUND;case se.ALREADY_EXISTS:return C.ALREADY_EXISTS;case se.PERMISSION_DENIED:return C.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case se.ABORTED:return C.ABORTED;case se.OUT_OF_RANGE:return C.OUT_OF_RANGE;case se.UNIMPLEMENTED:return C.UNIMPLEMENTED;case se.DATA_LOSS:return C.DATA_LOSS;default:return M(39323,{code:r})}}(z=se||(se={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new pt([4294967295,4294967295],0);function sc(r){const e=Hp().encode(r),t=new pl;return t.update(e),new Uint8Array(t.digest())}function ic(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new pt([t,n],0),new pt([s,o],0)]}class Xi{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Fn(`Invalid padding: ${t}`);if(n<0)throw new Fn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Fn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Fn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=pt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(pt.fromNumber(n)));return s.compare(Wp)===1&&(s=new pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=sc(e),[n,s]=ic(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);if(!this.we(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Xi(o,s,t);return n.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=sc(e),[n,s]=ic(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Fn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,n,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,cr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ws(U.min(),s,new ee($),Je(),q())}}class cr{constructor(e,t,n,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new cr(n,t,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class Xl{constructor(e,t){this.targetId=e,this.Ce=t}}class Zl{constructor(e,t,n=pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class oc{constructor(){this.ve=0,this.Fe=ac(),this.Me=pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=q(),t=q(),n=q();return this.Fe.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:o})}}),new cr(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=ac()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Gp{constructor(e){this.Ge=e,this.ze=new Map,this.je=Je(),this.Je=Nr(),this.He=Nr(),this.Ze=new ee($)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(wi(o))if(n===0){const a=new O(o.path);this.et(t,a,Ee.newNoDocument(a,U.min()))}else G(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const l=this.ut(e),h=l?this.ct(l,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=t;let a,l;try{a=yt(n).toUint8Array()}catch(h){if(h instanceof bl)return Lt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Xi(a,s,o)}catch(h){return Lt(h instanceof Fn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.et(t,o,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&wi(l.target)){const h=new O(l.target.path);this.Et(h).has(a)||this.It(a,h)||this.et(a,h,Ee.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let n=q();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const s=new ws(e,t,this.Ze,this.je,n);return this.je=Je(),this.Je=Nr(),this.He=Nr(),this.Ze=new ee($),s}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new oc,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ce($),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ce($),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new oc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Nr(){return new ee(O.comparator)}function ac(){return new ee(O.comparator)}const Kp={asc:"ASCENDING",desc:"DESCENDING"},Qp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jp={and:"AND",or:"OR"};class Yp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ai(r,e){return r.useProto3Json||ms(e)?e:{value:e}}function ns(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eu(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Xp(r,e){return ns(r,e.toTimestamp())}function Fe(r){return G(!!r,49232),U.fromTimestamp(function(t){const n=_t(t);return new Y(n.seconds,n.nanos)}(r))}function Zi(r,e){return bi(r,e).canonicalString()}function bi(r,e){const t=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function tu(r){const e=Z.fromString(r);return G(ou(e),10190,{key:e.toString()}),e}function Si(r,e){return Zi(r.databaseId,e.path)}function oi(r,e){const t=tu(e);if(t.get(1)!==r.databaseId.projectId)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(ru(t))}function nu(r,e){return Zi(r.databaseId,e)}function Zp(r){const e=tu(r);return e.length===4?Z.emptyPath():ru(e)}function Ri(r){return new Z(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ru(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function cc(r,e,t){return{name:Si(r,e),fields:t.value.mapValue.fields}}function em(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(G(p===void 0||typeof p=="string",58123),pe.fromBase64String(p||"")):(G(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pe.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?C.UNKNOWN:Yl(d.code);return new N(p,d.message||"")}(a);t=new Zl(n,s,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=oi(r,n.document.name),o=Fe(n.document.updateTime),a=n.document.createTime?Fe(n.document.createTime):U.min(),l=new Ce({mapValue:{fields:n.document.fields}}),h=Ee.newFoundDocument(s,o,a,l),d=n.targetIds||[],p=n.removedTargetIds||[];t=new jr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=oi(r,n.document),o=n.readTime?Fe(n.readTime):U.min(),a=Ee.newNoDocument(s,o),l=n.removedTargetIds||[];t=new jr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=oi(r,n.document),o=n.removedTargetIds||[];t=new jr([],o,s,null)}else{if(!("filter"in e))return M(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new qp(s,o),l=n.targetId;t=new Xl(l,a)}}return t}function tm(r,e){let t;if(e instanceof ar)t={update:cc(r,e.key,e.value)};else if(e instanceof Ji)t={delete:Si(r,e.key)};else if(e instanceof $t)t={update:cc(r,e.key,e.data),updateMask:um(e.fieldMask)};else{if(!(e instanceof Bp))return M(16599,{dt:e.type});t={verify:Si(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(o,a){const l=a.transform;if(l instanceof es)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ts)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw M(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Xp(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(r,e.precondition)),t}function nm(r,e){return r&&r.length>0?(G(e!==void 0,14353),r.map(t=>function(s,o){let a=s.updateTime?Fe(s.updateTime):Fe(o);return a.isEqual(U.min())&&(a=Fe(o)),new Mp(a,s.transformResults||[])}(t,e))):[]}function rm(r,e){return{documents:[nu(r,e.path)]}}function sm(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=nu(r,s);const o=function(d){if(d.length!==0)return iu(ze.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Jt(A.field),direction:am(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ai(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function im(r){let e=Zp(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){G(n===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(_){const A=su(_);return A instanceof ze&&Ol(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(A=>function(k){return new Zr(Yt(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(A))}(t.orderBy));let l=null;t.limit&&(l=function(_){let A;return A=typeof _=="object"?_.value:_,ms(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(_){const A=!!_.before,R=_.values||[];return new Xr(R,A)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const A=!_.before,R=_.values||[];return new Xr(R,A)}(t.endAt)),wp(e,s,a,o,l,"F",h,d)}function om(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function su(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Yt(t.unaryFilter.field);return ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Yt(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Yt(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yt(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(t){return ae.create(Yt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(n=>su(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(r):M(30097,{filter:r})}function am(r){return Kp[r]}function cm(r){return Qp[r]}function lm(r){return Jp[r]}function Jt(r){return{fieldPath:r.canonicalString()}}function Yt(r){return fe.fromServerFormat(r.fieldPath)}function iu(r){return r instanceof ae?function(t){if(t.op==="=="){if(Qa(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NAN"}};if(Ka(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qa(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NAN"}};if(Ka(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(t.field),op:cm(t.op),value:t.value}}}(r):r instanceof ze?function(t){const n=t.getFilters().map(s=>iu(s));return n.length===1?n[0]:{compositeFilter:{op:lm(t.op),filters:n}}}(r):M(54877,{filter:r})}function um(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ou(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function au(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t,n,s,o=U.min(),a=U.min(),l=pe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.yt=e}}function dm(r){const e=im({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?vi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.bn=new pm}addToCollectionParentIndex(e,t){return this.bn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(gt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(gt.min())}updateCollectionGroup(e,t,n){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class pm{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ce(Z.comparator),o=!s.has(n);return this.index[t]=s.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ce(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cu=41943040;class Ae{static withCacheSize(e){return new Ae(e,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae.DEFAULT_COLLECTION_PERCENTILE=10,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ae.DEFAULT=new Ae(cu,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ae.DISABLED=new Ae(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new un(0)}static ar(){return new un(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="LruGarbageCollector",mm=1048576;function hc([r,e],[t,n]){const s=$(r,t);return s===0?$(e,n):s}class gm{constructor(e){this.Pr=e,this.buffer=new ce(hc),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();hc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _m{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V(uc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mn(t)?V(uc,"Ignoring IndexedDB error during garbage collection: ",t):await pn(t)}await this.Ar(3e5)})}}class ym{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return S.resolve(ps.ce);const n=new gm(t);return this.Vr.forEachTarget(e,s=>n.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>n.Ir(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(lc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lc):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,s,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,a=Date.now(),this.nthSequenceNumber(e,s))).next(_=>(n=_,l=Date.now(),this.removeTargets(e,n,t))).next(_=>(o=_,h=Date.now(),this.removeOrphanedDocuments(e,n))).next(_=>(d=Date.now(),Kt()<=j.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${_} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:_})))}}function Em(r,e){return new ym(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.changes=new jt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?S.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&zn(n.mutation,s,ke.empty(),Y.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=q()){const s=Vt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(o=>{let a=Un();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Vt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,q()))}populateOverlays(e,t,n){const s=[];return n.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,n,s){let o=Je();const a=qn(),l=function(){return qn()}();return t.forEach((h,d)=>{const p=n.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof $t)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),zn(p.mutation,d,p.mutation.getFieldMask(),Y.now())):a.set(d.key,ke.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new Im(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const n=qn();let s=new ee((a,l)=>a-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=n.get(h)||ke.empty();p=l.applyToLocalView(d,p),n.set(h,p);const _=(s.get(l.batchId)||q()).add(h);s=s.insert(l.batchId,_)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,_=ql();p.forEach(A=>{if(!o.has(A)){const R=Ql(t.get(A),n.get(A));R!==null&&_.set(A,R),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return S.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return vp(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ap(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-o.size):S.resolve(Vt());let l=Kn,h=o;return a.next(d=>S.forEach(d,(p,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,q())).next(p=>({batchId:l,changes:$l(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let s=Un();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const o=t.collectionGroup;let a=Un();return this.indexManager.getCollectionParents(e,o).next(l=>S.forEach(l,h=>{const d=function(_,A){return new _s(A,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(p=>{p.forEach((_,A)=>{a=a.insert(_,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ee.newInvalidDocument(p)))});let l=Un();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&zn(p.mutation,d,ke.empty(),Y.now()),Es(t,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return S.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Fe(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:dm(s.bundledQuery),readTime:Fe(s.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.overlays=new ee(O.comparator),this.Lr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Vt();return S.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,o)=>{this.St(e,t,o)}),S.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(n)),S.resolve()}getOverlaysForCollection(e,t,n){const s=Vt(),o=t.length+1,a=new O(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let o=new ee((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=Vt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Vt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return S.resolve(l)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new $p(t,n));let o=this.Lr.get(t);o===void 0&&(o=q(),this.Lr.set(t,o)),this.Lr.set(t,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.kr=new ce(ue.qr),this.Kr=new ce(ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new ue(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Wr(new ue(e,t))}Qr(e,t){e.forEach(n=>this.removeReference(n,t))}Gr(e){const t=new O(new Z([])),n=new ue(t,e),s=new ue(t,e+1),o=[];return this.Kr.forEachInRange([n,s],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new O(new Z([])),n=new ue(t,e),s=new ue(t,e+1);let o=q();return this.Kr.forEachInRange([n,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ue(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ue{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return O.comparator(e.key,t.key)||$(e.Jr,t.Jr)}static Ur(e,t){return $(e.Jr,t.Jr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ce(ue.qr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jp(o,t,n,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new ue(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?qi:this.Yn-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([n,s],a=>{const l=this.Zr(a.Jr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ce($);return t.forEach(s=>{const o=new ue(s,0),a=new ue(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],l=>{n=n.add(l.Jr)})}),S.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const a=new ue(new O(o),0);let l=new ce($);return this.Hr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Jr)),!0)},a),S.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(n=>{const s=this.Zr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return S.forEach(t.mutations,s=>{const o=new ue(s.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new ue(t,0),s=this.Hr.firstAfterOrEqual(n);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.ti=e,this.docs=function(){return new ee(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),o=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return S.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=Je();return t.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():Ee.newInvalidDocument(s))}),S.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let o=Je();const a=t.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Zf(Xf(p),n)<=0||(s.has(p.key)||Es(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(e,t,n,s){M(9500)}ni(e,t){return S.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Cm(this)}getSize(e){return S.resolve(this.size)}}class Cm extends Tm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(n)}),S.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.persistence=e,this.ri=new jt(t=>Wi(t),Gi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new eo,this.targetCount=0,this.oi=un._r()}forEachTarget(e,t){return this.ri.forEach((n,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),S.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new un(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.lr(t),S.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,n){let s=0;const o=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return S.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),S.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return S.resolve(n)}containsKey(e,t){return S.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t){this._i={},this.overlays={},this.ai=new ps(0),this.ui=!1,this.ui=!0,this.ci=new bm,this.referenceDelegate=e(this),this.li=new Pm(this),this.indexManager=new fm,this.remoteDocumentCache=function(s){return new Rm(s)}(n=>this.referenceDelegate.hi(n)),this.serializer=new hm(t),this.Pi=new vm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Am,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new Sm(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const s=new km(this.ai.next());return this.referenceDelegate.Ti(),n(s).next(o=>this.referenceDelegate.Ei(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ii(e,t){return S.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class km extends tp{constructor(e){super(),this.currentSequenceNumber=e}}class to{constructor(e){this.persistence=e,this.Ri=new eo,this.Ai=null}static Vi(e){return new to(e)}get di(){if(this.Ai)return this.Ai;throw M(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),S.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.di,n=>{const s=O.fromPath(n);return this.mi(e,s).next(o=>{o||t.removeEntry(s,U.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return S.or([()=>S.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class rs{constructor(e,t){this.persistence=e,this.fi=new jt(n=>sp(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Em(this,t)}static Vi(e,t){return new rs(e,t)}Ti(){}Ei(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}pr(e){let t=0;return this.mr(e,n=>{t++}).next(()=>t)}mr(e,t){return S.forEach(this.fi,(n,s)=>this.wr(e,n,s).next(o=>o?S.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(n++,o.removeEntry(a,U.min()))})).next(()=>o.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),S.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),S.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ur(e.data.value)),t}wr(e,t,n){return S.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return S.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=s}static Is(e,t){let n=q(),s=q();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new no(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _d()?8:np(Te())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,s,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Vm;return this.ys(e,t,a).next(l=>{if(o.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>o.result)}ws(e,t,n,s){return n.documentReadCount<this.Vs?(Kt()<=j.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(Kt()<=j.DEBUG&&V("QueryEngine","Query:",Qt(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Kt()<=j.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):S.resolve())}gs(e,t){if(Za(t))return S.resolve(null);let n=Me(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=vi(t,null,"F"),n=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const a=q(...o);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,n).next(h=>{const d=this.Ss(t,l);return this.bs(t,d,a,h.readTime)?this.gs(e,vi(t,null,"F")):this.Ds(e,d,t,h)}))})))}ps(e,t,n,s){return Za(t)||s.isEqual(U.min())?S.resolve(null):this.fs.getDocuments(e,n).next(o=>{const a=this.Ss(t,o);return this.bs(t,a,n,s)?S.resolve(null):(Kt()<=j.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qt(t)),this.Ds(e,a,t,Yf(s,Kn)).next(l=>l))})}Ss(e,t){let n=new ce(Bl(e));return t.forEach((s,o)=>{Es(e,o)&&(n=n.add(o))}),n}bs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,t,n){return Kt()<=j.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Qt(t)),this.fs.getDocumentsMatchingQuery(e,t,gt.min(),n)}Ds(e,t,n,s){return this.fs.getDocumentsMatchingQuery(e,n,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="LocalStore",Nm=3e8;class xm{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ee($),this.Fs=new jt(o=>Wi(o),Gi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Om(r,e,t,n){return new xm(r,e,t,n)}async function uu(r,e){const t=F(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,t.Os(e),t.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],l=[];let h=q();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(n,h).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function Lm(r,e){const t=F(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,h,d,p){const _=d.batch,A=_.keys();let R=S.resolve();return A.forEach(k=>{R=R.next(()=>p.getEntry(h,k)).next(x=>{const D=d.docVersions.get(k);G(D!==null,48541),x.version.compareTo(D)<0&&(_.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(h,_))}(t,n,e,o).next(()=>o.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let h=q();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function hu(r){const e=F(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Mm(r,e){const t=F(r),n=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((p,_)=>{const A=s.get(_);if(!A)return;l.push(t.li.removeMatchingKeys(o,p.removedDocuments,_).next(()=>t.li.addMatchingKeys(o,p.addedDocuments,_)));let R=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(pe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,n)),s=s.insert(_,R),function(x,D,W){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Nm?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(A,R,p)&&l.push(t.li.updateTargetData(o,R))});let h=Je(),d=q();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(Um(o,a,e.documentUpdates).next(p=>{h=p.Bs,d=p.Ls})),!n.isEqual(U.min())){const p=t.li.getLastRemoteSnapshotVersion(o).next(_=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(p)}return S.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.vs=s,o))}function Um(r,e,t){let n=q(),s=q();return t.forEach(o=>n=n.add(o)),e.getEntries(r,n).next(o=>{let a=Je();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):V(ro,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Bs:a,Ls:s}})}function Fm(r,e){const t=F(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=qi),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Bm(r,e){const t=F(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.li.getTargetData(n,e).next(o=>o?(s=o,S.resolve(s)):t.li.allocateTargetId(n).next(a=>(s=new ut(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n})}async function Ci(r,e,t){const n=F(r),s=n.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!mn(a))throw a;V(ro,`Failed to update sequence numbers for target ${e}: ${a}`)}n.vs=n.vs.remove(e),n.Fs.delete(s.target)}function dc(r,e,t){const n=F(r);let s=U.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const _=F(h),A=_.Fs.get(p);return A!==void 0?S.resolve(_.vs.get(A)):_.li.getTargetData(d,p)}(n,a,Me(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>n.Cs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?o:q())).next(l=>(jm(n,Sp(e),l),{documents:l,ks:o})))}function jm(r,e,t){let n=r.Ms.get(e)||U.min();t.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Ms.set(e,n)}class fc{constructor(){this.activeTargetIds=Dp()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $m{constructor(){this.vo=new fc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new fc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="ConnectivityMonitor";class mc{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(pc,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(pc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr=null;function Pi(){return xr===null?xr=function(){return 268435456+Math.round(2147483648*Math.random())}():xr++,"0x"+xr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="RestConnection",zm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Hm{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===Jr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,o){const a=Pi(),l=this.Qo(e,t.toUriEncodedString());V(ai,`Sending RPC '${e}' ${a}:`,l,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(l),p=ir(d);return this.zo(e,l,h,n,p).then(_=>(V(ai,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Lt(ai,`RPC '${e}' ${a} failed with error: `,_,"url: ",l,"request:",n),_})}jo(e,t,n,s,o,a){return this.Wo(e,t,n,s,o)}Go(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),n&&n.headers.forEach((s,o)=>e[o]=s)}Qo(e,t){const n=zm[e];let s=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="WebChannelConnection",xn=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class Zt extends Hm{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zt.c_){const e=yl();xn(e,_l.STAT_EVENT,t=>{t.stat===_i.PROXY?V(_e,"STAT_EVENT: detected buffering proxy"):t.stat===_i.NOPROXY&&V(_e,"STAT_EVENT: detected no buffering proxy")}),Zt.c_=!0}}zo(e,t,n,s,o){const a=Pi();return new Promise((l,h)=>{const d=new ml;d.setWithCredentials(!0),d.listenOnce(gl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Mr.NO_ERROR:const _=d.getResponseJson();V(_e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),l(_);break;case Mr.TIMEOUT:V(_e,`RPC '${e}' ${a} timed out`),h(new N(C.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const A=d.getStatus();if(V(_e,`RPC '${e}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const k=R==null?void 0:R.error;if(k&&k.status&&k.message){const x=function(W){const H=W.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(H)>=0?H:C.UNKNOWN}(k.status);h(new N(x,k.message))}else h(new N(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(C.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(_e,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);V(_e,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,n,15)})}T_(e,t,n){const s=Pi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const d=o.join("");V(_e,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.E_(p);let _=!1,A=!1;const R=new Wm({Jo:k=>{A?V(_e,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(_||(V(_e,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),V(_e,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Ho:()=>p.close()});return xn(p,Mn.EventType.OPEN,()=>{A||(V(_e,`RPC '${e}' stream ${s} transport opened.`),R.i_())}),xn(p,Mn.EventType.CLOSE,()=>{A||(A=!0,V(_e,`RPC '${e}' stream ${s} transport closed`),R.o_(),this.I_(p))}),xn(p,Mn.EventType.ERROR,k=>{A||(A=!0,Lt(_e,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),R.o_(new N(C.UNAVAILABLE,"The operation could not be completed")))}),xn(p,Mn.EventType.MESSAGE,k=>{var x;if(!A){const D=k.data[0];G(!!D,16349);const W=D,H=(W==null?void 0:W.error)||((x=W[0])==null?void 0:x.error);if(H){V(_e,`RPC '${e}' stream ${s} received error:`,H);const X=H.status;let me=function(T){const m=se[T];if(m!==void 0)return Yl(m)}(X),Q=H.message;X==="NOT_FOUND"&&Q.includes("database")&&Q.includes("does not exist")&&Q.includes(this.databaseId.database)&&Lt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),me===void 0&&(me=C.INTERNAL,Q="Unknown error status: "+X+" with message "+H.message),A=!0,R.o_(new N(me,Q)),p.close()}else V(_e,`RPC '${e}' stream ${s} received:`,D),R.__(D)}}),Zt.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return El()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(r){return new Zt(r)}function ci(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(r){return new Yp(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.c_=!1;class du{constructor(e,t,n=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="PersistentStream";class fu{constructor(e,t,n,s,o,a,l,h){this.Ci=e,this.S_=n,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new du(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Qe(t.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new N(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(gc,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(V(gc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Km extends fu{constructor(e,t,n,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=em(this.serializer,e),n=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Fe(a.readTime):U.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Ri(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=wi(h)?{documents:rm(o,h)}:{query:sm(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=eu(o,a.resumeToken);const d=Ai(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=ns(o,a.snapshotVersion.toTimestamp());const d=Ai(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const n=om(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=Ri(this.serializer),t.removeTarget=e,this.q_(t)}}class Qm extends fu{constructor(e,t,n,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=nm(e.writeResults,e.commitTime),n=Fe(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Ri(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>tm(this.serializer,n))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{}class Ym extends Jm{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,bi(t,n),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(C.UNKNOWN,o.toString())})}jo(e,t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,bi(t,n),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Xm(r,e,t,n){return new Ym(r,e,t,n)}class Zm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qe(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="RemoteStore";class eg{constructor(e,t,n,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{n.enqueueAndForget(async()=>{qt(this)&&(V(Mt,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.Ia.add(4),await lr(d),d.Va.set("Unknown"),d.Ia.delete(4),await As(d)}(this))})}),this.Va=new Zm(n,s)}}async function As(r){if(qt(r))for(const e of r.Ra)await e(!0)}async function lr(r){for(const e of r.Ra)await e(!1)}function pu(r,e){const t=F(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),ao(t)?oo(t):gn(t).O_()&&io(t,e))}function so(r,e){const t=F(r),n=gn(t);t.Ea.delete(e),n.O_()&&mu(t,e),t.Ea.size===0&&(n.O_()?n.L_():qt(t)&&t.Va.set("Unknown"))}function io(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gn(r).Z_(e)}function mu(r,e){r.da.$e(e),gn(r).X_(e)}function oo(r){r.da=new Gp({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),gn(r).start(),r.Va.ua()}function ao(r){return qt(r)&&!gn(r).x_()&&r.Ea.size>0}function qt(r){return F(r).Ia.size===0}function gu(r){r.da=void 0}async function tg(r){r.Va.set("Online")}async function ng(r){r.Ea.forEach((e,t)=>{io(r,e)})}async function rg(r,e){gu(r),ao(r)?(r.Va.ha(e),oo(r)):r.Va.set("Unknown")}async function sg(r,e,t){if(r.Va.set("Online"),e instanceof Zl&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(r,e)}catch(n){V(Mt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ss(r,n)}else if(e instanceof jr?r.da.Xe(e):e instanceof Xl?r.da.st(e):r.da.tt(e),!t.isEqual(U.min()))try{const n=await hu(r.localStore);t.compareTo(n)>=0&&await function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ea.get(d);p&&o.Ea.set(d,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const p=o.Ea.get(h);if(!p)return;o.Ea.set(h,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),mu(o,h);const _=new ut(p.target,h,d,p.sequenceNumber);io(o,_)}),o.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){V(Mt,"Failed to raise snapshot:",n),await ss(r,n)}}async function ss(r,e,t){if(!mn(e))throw e;r.Ia.add(1),await lr(r),r.Va.set("Offline"),t||(t=()=>hu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(Mt,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await As(r)})}function _u(r,e){return e().catch(t=>ss(r,t,e))}async function bs(r){const e=F(r),t=Tt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qi;for(;ig(e);)try{const s=await Fm(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,og(e,s)}catch(s){await ss(e,s)}yu(e)&&Eu(e)}function ig(r){return qt(r)&&r.Ta.length<10}function og(r,e){r.Ta.push(e);const t=Tt(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function yu(r){return qt(r)&&!Tt(r).x_()&&r.Ta.length>0}function Eu(r){Tt(r).start()}async function ag(r){Tt(r).ra()}async function cg(r){const e=Tt(r);for(const t of r.Ta)e.ea(t.mutations)}async function lg(r,e,t){const n=r.Ta.shift(),s=Yi.from(n,e,t);await _u(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await bs(r)}async function ug(r,e){e&&Tt(r).Y_&&await async function(n,s){if(function(a){return zp(a)&&a!==C.ABORTED}(s.code)){const o=n.Ta.shift();Tt(n).B_(),await _u(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await bs(n)}}(r,e),yu(r)&&Eu(r)}async function _c(r,e){const t=F(r);t.asyncQueue.verifyOperationInProgress(),V(Mt,"RemoteStore received new credentials");const n=qt(t);t.Ia.add(3),await lr(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await As(t)}async function hg(r,e){const t=F(r);e?(t.Ia.delete(2),await As(t)):e||(t.Ia.add(2),await lr(t),t.Va.set("Unknown"))}function gn(r){return r.ma||(r.ma=function(t,n,s){const o=F(t);return o.sa(),new Km(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Zo:tg.bind(null,r),Yo:ng.bind(null,r),t_:rg.bind(null,r),H_:sg.bind(null,r)}),r.Ra.push(async e=>{e?(r.ma.B_(),ao(r)?oo(r):r.Va.set("Unknown")):(await r.ma.stop(),gu(r))})),r.ma}function Tt(r){return r.fa||(r.fa=function(t,n,s){const o=F(t);return o.sa(),new Qm(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ag.bind(null,r),t_:ug.bind(null,r),ta:cg.bind(null,r),na:lg.bind(null,r)}),r.Ra.push(async e=>{e?(r.fa.B_(),await bs(r)):(await r.fa.stop(),r.Ta.length>0&&(V(Mt,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,n,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,o){const a=Date.now()+n,l=new co(e,t,a,s,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lo(r,e){if(Qe("AsyncQueue",`${e}: ${r}`),mn(r))return new N(C.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{static emptySet(e){return new en(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=Un(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new en;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.ga=new ee(O.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):M(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class hn{constructor(e,t,n,s,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new hn(e,t,en.emptySet(t),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class fg{constructor(){this.queries=Ec(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=F(t),o=s.queries;s.queries=Ec(),o.forEach((a,l)=>{for(const h of l.Sa)h.onError(n)})})(this,new N(C.ABORTED,"Firestore shutting down"))}}function Ec(){return new jt(r=>Fl(r),ys)}async function pg(r,e){const t=F(r);let n=3;const s=e.query;let o=t.queries.get(s);o?!o.ba()&&e.Da()&&(n=2):(o=new dg,n=e.Da()?0:1);try{switch(n){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=lo(a,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&uo(t)}async function mg(r,e){const t=F(r),n=e.query;let s=3;const o=t.queries.get(n);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.Da()?0:1:!o.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function gg(r,e){const t=F(r);let n=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(n=!0);a.wa=s}}n&&uo(t)}function _g(r,e,t){const n=F(r),s=n.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);n.queries.delete(e)}function uo(r){r.Ca.forEach(e=>{e.next()})}var ki,Tc;(Tc=ki||(ki={})).Ma="default",Tc.Cache="cache";class yg{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new hn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ki.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.key=e}}class Iu{constructor(e){this.key=e}}class Eg{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=q(),this.mutatedKeys=q(),this.eu=Bl(e),this.tu=new en(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new yc,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,_)=>{const A=s.get(p),R=Es(this.query,_)?_:null,k=!!A&&this.mutatedKeys.has(A.key),x=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;A&&R?A.data.isEqual(R.data)?k!==x&&(n.track({type:3,doc:R}),D=!0):this.su(A,R)||(n.track({type:2,doc:R}),D=!0,(h&&this.eu(R,h)>0||d&&this.eu(R,d)<0)&&(l=!0)):!A&&R?(n.track({type:0,doc:R}),D=!0):A&&!R&&(n.track({type:1,doc:A}),D=!0,(h||d)&&(l=!0)),D&&(R?(a=a.add(R),o=x?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{tu:a,iu:n,bs:l,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,_)=>function(R,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:D})}};return x(R)-x(k)}(p.type,_.type)||this.eu(p.doc,_.doc)),this.ou(n),s=s??!1;const l=t&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new hn(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yc,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))});const t=[];return e.forEach(n=>{this.Ya.has(n)||t.push(new Iu(n))}),this.Ya.forEach(n=>{e.has(n)||t.push(new Tu(n))}),t}cu(e){this.Za=e.ks,this.Ya=q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return hn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ho="SyncEngine";class Tg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ig{constructor(e){this.key=e,this.hu=!1}}class wg{constructor(e,t,n,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new jt(l=>Fl(l),ys),this.Eu=new Map,this.Iu=new Set,this.Ru=new ee(O.comparator),this.Au=new Map,this.Vu=new eo,this.du={},this.mu=new Map,this.fu=un.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vg(r,e,t=!0){const n=Ru(r);let s;const o=n.Tu.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await wu(n,e,t,!0),s}async function Ag(r,e){const t=Ru(r);await wu(t,e,!0,!1)}async function wu(r,e,t,n){const s=await Bm(r.localStore,Me(e)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,t);let l;return n&&(l=await bg(r,e,o,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&pu(r.remoteStore,s),l}async function bg(r,e,t,n,s){r.pu=(_,A,R)=>async function(x,D,W,H){let X=D.view.ru(W);X.bs&&(X=await dc(x.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,X)));const me=H&&H.targetChanges.get(D.targetId),Q=H&&H.targetMismatches.get(D.targetId)!=null,te=D.view.applyChanges(X,x.isPrimaryClient,me,Q);return wc(x,D.targetId,te.au),te.snapshot}(r,_,A,R);const o=await dc(r.localStore,e,!0),a=new Eg(e,o.ks),l=a.ru(o.documents),h=cr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=a.applyChanges(l,r.isPrimaryClient,h);wc(r,t,d.au);const p=new Tg(e,t,a);return r.Tu.set(e,p),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),d.snapshot}async function Sg(r,e,t){const n=F(r),s=n.Tu.get(e),o=n.Eu.get(s.targetId);if(o.length>1)return n.Eu.set(s.targetId,o.filter(a=>!ys(a,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ci(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&so(n.remoteStore,s.targetId),Vi(n,s.targetId)}).catch(pn)):(Vi(n,s.targetId),await Ci(n.localStore,s.targetId,!0))}async function Rg(r,e){const t=F(r),n=t.Tu.get(e),s=t.Eu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),so(t.remoteStore,n.targetId))}async function Cg(r,e,t){const n=Og(r);try{const s=await function(a,l){const h=F(a),d=Y.now(),p=l.reduce((R,k)=>R.add(k.key),q());let _,A;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=Je(),x=q();return h.xs.getEntries(R,p).next(D=>{k=D,k.forEach((W,H)=>{H.isValidDocument()||(x=x.add(W))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,k)).next(D=>{_=D;const W=[];for(const H of l){const X=Fp(H,_.get(H.key).overlayedDocument);X!=null&&W.push(new $t(H.key,X,Dl(X.value.mapValue),Ue.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,W,l)}).next(D=>{A=D;const W=D.applyToLocalDocumentSet(_,x);return h.documentOverlayCache.saveOverlays(R,D.batchId,W)})}).then(()=>({batchId:A.batchId,changes:$l(_)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let d=a.du[a.currentUser.toKey()];d||(d=new ee($)),d=d.insert(l,h),a.du[a.currentUser.toKey()]=d}(n,s.batchId,t),await ur(n,s.changes),await bs(n.remoteStore)}catch(s){const o=lo(s,"Failed to persist write");t.reject(o)}}async function vu(r,e){const t=F(r);try{const n=await Mm(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Au.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?G(a.hu,14607):s.removedDocuments.size>0&&(G(a.hu,42227),a.hu=!1))}),await ur(t,n,e)}catch(n){await pn(n)}}function Ic(r,e,t){const n=F(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((o,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let d=!1;h.queries.forEach((p,_)=>{for(const A of _.Sa)A.va(l)&&(d=!0)}),d&&uo(h)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Pg(r,e,t){const n=F(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),o=s&&s.key;if(o){let a=new ee(O.comparator);a=a.insert(o,Ee.newNoDocument(o,U.min()));const l=q().add(o),h=new ws(U.min(),new Map,new ee($),a,l);await vu(n,h),n.Ru=n.Ru.remove(o),n.Au.delete(e),fo(n)}else await Ci(n.localStore,e,!1).then(()=>Vi(n,e,t)).catch(pn)}async function kg(r,e){const t=F(r),n=e.batch.batchId;try{const s=await Lm(t.localStore,e);bu(t,n,null),Au(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ur(t,s)}catch(s){await pn(s)}}async function Vg(r,e,t){const n=F(r);try{const s=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next(_=>(G(_!==null,37113),p=_.keys(),h.mutationQueue.removeMutationBatch(d,_))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(n.localStore,e);bu(n,e,t),Au(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ur(n,s)}catch(s){await pn(s)}}function Au(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function bu(r,e,t){const n=F(r);let s=n.du[n.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),n.du[n.currentUser.toKey()]=s}}function Vi(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Eu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach(n=>{r.Vu.containsKey(n)||Su(r,n)})}function Su(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(so(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),fo(r))}function wc(r,e,t){for(const n of t)n instanceof Tu?(r.Vu.addReference(n.key,e),Dg(r,n)):n instanceof Iu?(V(ho,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,e),r.Vu.containsKey(n.key)||Su(r,n.key)):M(19791,{wu:n})}function Dg(r,e){const t=e.key,n=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(n)||(V(ho,"New document in limbo: "+t),r.Iu.add(n),fo(r))}function fo(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new O(Z.fromString(e)),n=r.fu.next();r.Au.set(n,new Ig(t)),r.Ru=r.Ru.insert(t,n),pu(r.remoteStore,new ut(Me(Ki(t.path)),n,"TargetPurposeLimboResolution",ps.ce))}}async function ur(r,e,t){const n=F(r),s=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((l,h)=>{a.push(n.pu(h,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const _=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){s.push(d);const _=no.Is(h.targetId,d);o.push(_)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(h,d){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>S.forEach(d,A=>S.forEach(A.Ts,R=>p.persistence.referenceDelegate.addReference(_,A.targetId,R)).next(()=>S.forEach(A.Es,R=>p.persistence.referenceDelegate.removeReference(_,A.targetId,R)))))}catch(_){if(!mn(_))throw _;V(ro,"Failed to update sequence numbers: "+_)}for(const _ of d){const A=_.targetId;if(!_.fromCache){const R=p.vs.get(A),k=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(k);p.vs=p.vs.insert(A,x)}}}(n.localStore,o))}async function Ng(r,e){const t=F(r);if(!t.currentUser.isEqual(e)){V(ho,"User change. New user:",e.toKey());const n=await uu(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(l=>{l.forEach(h=>{h.reject(new N(C.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ur(t,n.Ns)}}function xg(r,e){const t=F(r),n=t.Au.get(e);if(n&&n.hu)return q().add(n.key);{let s=q();const o=t.Eu.get(e);if(!o)return s;for(const a of o){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Ru(r){const e=F(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=vu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pg.bind(null,e),e.Pu.H_=gg.bind(null,e.eventManager),e.Pu.yu=_g.bind(null,e.eventManager),e}function Og(r){const e=F(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vg.bind(null,e),e}class is{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Om(this.persistence,new Dm,e.initialUser,this.serializer)}Cu(e){return new lu(to.Vi,this.serializer)}Du(e){return new $m}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}is.provider={build:()=>new is};class Lg extends is{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){G(this.persistence.referenceDelegate instanceof rs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new _m(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new lu(n=>rs.Vi(n,t),this.serializer)}}class Di{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ic(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ng.bind(null,this.syncEngine),await hg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fg}()}createDatastore(e){const t=vs(e.databaseInfo.databaseId),n=Gm(e.databaseInfo);return Xm(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,o,a,l){return new eg(n,s,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Ic(this.syncEngine,t,0),function(){return mc.v()?new mc:new qm}())}createSyncEngine(e,t){return function(s,o,a,l,h,d,p){const _=new wg(s,o,a,l,h,d);return p&&(_.gu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=F(s);V(Mt,"RemoteStore shutting down."),o.Ia.add(5),await lr(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Di.provider={build:()=>new Di};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="FirestoreClient";class Ug{constructor(e,t,n,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=ye.UNAUTHENTICATED,this.clientId=ji.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{V(It,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(V(It,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=lo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function li(r,e){r.asyncQueue.verifyOperationInProgress(),V(It,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await uu(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function vc(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Fg(r);V(It,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>_c(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>_c(e.remoteStore,s)),r._onlineComponents=e}async function Fg(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(It,"Using user provided OfflineComponentProvider");try{await li(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lt("Error using user provided cache. Falling back to memory cache: "+t),await li(r,new is)}}else V(It,"Using default OfflineComponentProvider"),await li(r,new Lg(void 0));return r._offlineComponents}async function Cu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(It,"Using user provided OnlineComponentProvider"),await vc(r,r._uninitializedComponentsProvider._online)):(V(It,"Using default OnlineComponentProvider"),await vc(r,new Di))),r._onlineComponents}function Bg(r){return Cu(r).then(e=>e.syncEngine)}async function jg(r){const e=await Cu(r),t=e.eventManager;return t.onListen=vg.bind(null,e.syncEngine),t.onUnlisten=Sg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ag.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Rg.bind(null,e.syncEngine),t}function $g(r,e,t={}){const n=new mt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new Mg({next:A=>{p.Nu(),a.enqueueAndForget(()=>mg(o,_));const R=A.docs.has(l);!R&&A.fromCache?d.reject(new N(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&A.fromCache&&h&&h.source==="server"?d.reject(new N(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),_=new yg(Ki(l.path),p,{includeMetadataChanges:!0,qa:!0});return pg(o,_)}(await jg(r),r.asyncQueue,e,t,n)),n.promise}function qg(r,e){const t=new mt;return r.asyncQueue.enqueueAndForget(async()=>Cg(await Bg(r),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="ComponentProvider",Ac=new Map;function Hg(r,e,t,n,s){return new ap(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Pu(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="firestore.googleapis.com",bc=!0;class Sc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ku,this.ssl=bc}else this.host=e.host,this.ssl=e.ssl??bc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mm)throw new N(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pu(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class po{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ff;switch(n.type){case"firstParty":return new qf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ac.get(t);n&&(V(zg,"Removing Datastore"),Ac.delete(t),n.terminate())}(this),Promise.resolve()}}function Wg(r,e,t,n={}){var d;r=an(r,po);const s=ir(e),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},l=`${e}:${t}`;s&&al(`https://${l}`),o.host!==ku&&o.host!==l&&Lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:n};if(!Nt(h,a)&&(r._setSettings(h),n.mockUserToken)){let p,_;if(typeof n.mockUserToken=="string")p=n.mockUserToken,_=ye.MOCK_USER;else{p=ud(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const A=n.mockUserToken.sub||n.mockUserToken.user_id;if(!A)throw new N(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new ye(A)}r._authCredentials=new Bf(new Il(p,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new mo(this.firestore,e,this._query)}}class he{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(or(t,he._jsonSchema))return new he(e,n||null,new O(Z.fromString(t.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:ie("string",he._jsonSchemaVersion),referencePath:ie("string")};class er extends mo{constructor(e,t,n){super(e,t,Ki(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new O(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function Gg(r,e,...t){if(r=Se(r),arguments.length===1&&(e=ji.newId()),Qf("doc","path",e),r instanceof po){const n=Z.fromString(e,...t);return Ba(n),new he(r,null,new O(n))}{if(!(r instanceof he||r instanceof er))throw new N(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(e,...t));return Ba(n),new he(r.firestore,r instanceof er?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="AsyncQueue";class Cc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new du(this,"async_queue_retry"),this._c=()=>{const n=ci();n&&V(Rc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ci();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new mt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!mn(e))throw e;V(Rc,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Qe("INTERNAL UNHANDLED ERROR: ",Pc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=co.createAndSchedule(this,e,t,n,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:Pc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Pc(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Ss extends po{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Cc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cc(e),this._firestoreClient=void 0,await e}}}function Kg(r,e){const t=typeof r=="object"?r:hl(),n=typeof r=="string"?r:Jr,s=Fi(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=cd("firestore");o&&Wg(s,...o)}return s}function Vu(r){if(r._terminated)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Qg(r),r._firestoreClient}function Qg(r){var n,s,o,a;const e=r._freezeSettings(),t=Hg(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Ug(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pe(pe.fromBase64String(e))}catch(t){throw new N(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pe(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(or(e,Pe._jsonSchema))return Pe.fromBase64String(e.bytes)}}Pe._jsonSchemaVersion="firestore/bytes/1.0",Pe._jsonSchema={type:ie("string",Pe._jsonSchemaVersion),bytes:ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(e){if(or(e,Be._jsonSchema))return new Be(e.latitude,e.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:ie("string",Be._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:De._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(or(e,De._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new De(e.vectorValues);throw new N(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}De._jsonSchemaVersion="firestore/vectorValue/1.0",De._jsonSchema={type:ie("string",De._jsonSchemaVersion),vectorValues:ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=/^__.*__$/;class Yg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new ar(e,this.data,t,this.fieldTransforms)}}function xu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:r})}}class go{constructor(e,t,n,s,o,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new go({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return os(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(xu(this.dataSource)&&Jg.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Xg{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||vs(e)}I(e,t,n,s=!1){return new go({dataSource:e,methodName:t,targetDoc:n,path:fe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zg(r){const e=r._freezeSettings(),t=vs(r._databaseId);return new Xg(r._databaseId,!!e.ignoreUndefinedProperties,t)}function e_(r,e,t,n,s,o={}){const a=r.I(o.merge||o.mergeFields?2:0,e,t,s);Uu("Data must be an object, but it was:",a,n);const l=Lu(n,a);let h,d;if(o.merge)h=new ke(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const _ of o.mergeFields){const A=_o(e,_,t);if(!a.contains(A))throw new N(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);r_(p,A)||p.push(A)}h=new ke(p),d=a.fieldTransforms.filter(_=>h.covers(_.field))}else h=null,d=a.fieldTransforms;return new Yg(new Ce(l),h,d)}function Ou(r,e){if(Mu(r=Se(r)))return Uu("Unsupported field value:",e,r),Lu(r,e);if(r instanceof Nu)return function(n,s){if(!xu(s.dataSource))throw s.yc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(n,s){const o=[];let a=0;for(const l of n){let h=Ou(l,s.gc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,e)}return function(n,s){if((n=Se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Np(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=Y.fromDate(n);return{timestampValue:ns(s.serializer,o)}}if(n instanceof Y){const o=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ns(s.serializer,o)}}if(n instanceof Be)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pe)return{bytesValue:eu(s.serializer,n._byteString)};if(n instanceof he){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Zi(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof De)return function(a,l){const h=a instanceof De?a.toArray():a;return{mapValue:{fields:{[kl]:{stringValue:Vl},[Yr]:{arrayValue:{values:h.map(p=>{if(typeof p!="number")throw l.yc("VectorValues must only contain numeric values.");return Qi(l.serializer,p)})}}}}}}(n,s);if(au(n))return n._toProto(s.serializer);throw s.yc(`Unsupported field value: ${$i(n)}`)}(r,e)}function Lu(r,e){const t={};return Al(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(r,(n,s)=>{const o=Ou(s,e.dc(n));o!=null&&(t[n]=o)}),{mapValue:{fields:t}}}function Mu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Y||r instanceof Be||r instanceof Pe||r instanceof he||r instanceof Nu||r instanceof De||au(r))}function Uu(r,e,t){if(!Mu(t)||!wl(t)){const n=$i(t);throw n==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+n)}}function _o(r,e,t){if((e=Se(e))instanceof Du)return e._internalPath;if(typeof e=="string")return n_(r,e);throw os("Field path arguments must be of type string or ",r,!1,void 0,t)}const t_=new RegExp("[~\\*/\\[\\]]");function n_(r,e,t){if(e.search(t_)>=0)throw os(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Du(...e.split("."))._internalPath}catch{throw os(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function os(r,e,t,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new N(C.INVALID_ARGUMENT,l+r+h)}function r_(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{convertValue(e,t="none"){switch(Et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bt(e,(s,o)=>{n[s]=this.convertValue(o,t)}),n}convertVectorValue(e){var n,s,o;const t=(o=(s=(n=e.fields)==null?void 0:n[Yr].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>re(a.doubleValue));return new De(t)}convertGeoPoint(e){return new Be(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=gs(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qn(e));default:return null}}convertTimestamp(e){const t=_t(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);G(ou(n),9688,{name:e});const s=new Jn(n.get(1),n.get(3)),o=new O(n.popFirst(5));return s.isEqual(t)||Qe(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_ extends s_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,t)}}const kc="@firebase/firestore",Vc="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,n,s,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new o_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(_o("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class o_ extends Fu{data(){return super.data()}}function a_(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class Bn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dt extends Fu{constructor(e,t,n,s,o,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(_o("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Dt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Dt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Dt._jsonSchema={type:ie("string",Dt._jsonSchemaVersion),bundleSource:ie("string","DocumentSnapshot"),bundleName:ie("string"),bundle:ie("string")};class $r extends Dt{data(e={}){return super.data(e)}}class Hn{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new $r(this._firestore,this._userDataWriter,n.key,n,new Bn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new $r(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Bn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new $r(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Bn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:c_(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ji.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function c_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn._jsonSchemaVersion="firestore/querySnapshot/1.0",Hn._jsonSchema={type:ie("string",Hn._jsonSchemaVersion),bundleSource:ie("string","QuerySnapshot"),bundleName:ie("string"),bundle:ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(r){r=an(r,he);const e=an(r.firestore,Ss),t=Vu(e);return $g(t,r._key).then(n=>d_(e,r,n))}function u_(r,e,t){r=an(r,he);const n=an(r.firestore,Ss),s=a_(r.converter,e),o=Zg(n);return Bu(n,[e_(o,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Ue.none())])}function h_(r){return Bu(an(r.firestore,Ss),[new Ji(r._key,Ue.none())])}function Bu(r,e){const t=Vu(r);return qg(t,e)}function d_(r,e,t){const n=t.docs.get(e._key),s=new i_(r);return new Dt(r,s,e._key,n,new Bn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Uf(dn),sn(new xt("firestore",(n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),l=new Ss(new jf(n.getProvider("auth-internal")),new zf(a,n.getProvider("app-check-internal")),cp(a,s),a);return o={useFetchStreams:t,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ft(kc,Vc,e),ft(kc,Vc,"esm2020")})();function ju(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f_=ju,$u=new rr("auth","Firebase",ju());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new Mi("@firebase/auth");function p_(r,...e){as.logLevel<=j.WARN&&as.warn(`Auth (${dn}): ${r}`,...e)}function qr(r,...e){as.logLevel<=j.ERROR&&as.error(`Auth (${dn}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(r,...e){throw yo(r,...e)}function je(r,...e){return yo(r,...e)}function qu(r,e,t){const n={...f_(),[e]:t};return new rr("auth","Firebase",n).create(e,{appName:r.name})}function Ge(r){return qu(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yo(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return $u.create(r,...e)}function L(r,e,...t){if(!r)throw yo(e,...t)}function He(r){const e="INTERNAL ASSERTION FAILED: "+r;throw qr(e),new Error(e)}function Ye(r,e){r||He(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function m_(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m_()||pd()||"connection"in navigator)?navigator.onLine:!0}function __(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ye(t>e,"Short delay should be less than long delay!"),this.isMobile=hd()||md()}get(){return g_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(r,e){Ye(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],T_=new hr(3e4,6e4);function wt(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function vt(r,e,t,n,s={}){return Hu(r,s,async()=>{let o={},a={};n&&(e==="GET"?a=n:o={body:JSON.stringify(n)});const l=sr({key:r.config.apiKey,...a}).slice(1),h=await r._getAdditionalHeaders();h["Content-Type"]="application/json",r.languageCode&&(h["X-Firebase-Locale"]=r.languageCode);const d={method:e,headers:h,...o};return fd()||(d.referrerPolicy="no-referrer"),r.emulatorConfig&&ir(r.emulatorConfig.host)&&(d.credentials="include"),zu.fetch()(await Wu(r,r.config.apiHost,t,l),d)})}async function Hu(r,e,t){r._canInitEmulator=!1;const n={...y_,...e};try{const s=new w_(r),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Or(r,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Or(r,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Or(r,"email-already-in-use",a);if(h==="USER_DISABLED")throw Or(r,"user-disabled",a);const p=n[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qu(r,p,d);Ne(r,p)}}catch(s){if(s instanceof Xe)throw s;Ne(r,"network-request-failed",{message:String(s)})}}async function dr(r,e,t,n,s={}){const o=await vt(r,e,t,n,s);return"mfaPendingCredential"in o&&Ne(r,"multi-factor-auth-required",{_serverResponse:o}),o}async function Wu(r,e,t,n){const s=`${e}${t}?${n}`,o=r,a=o.config.emulator?Eo(r.config,s):`${r.config.apiScheme}://${s}`;return E_.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function I_(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class w_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(je(this.auth,"network-request-failed")),T_.get())})}}function Or(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=je(r,e,n);return s.customData._tokenResponse=t,s}function Nc(r){return r!==void 0&&r.enterprise!==void 0}class v_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return I_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function A_(r,e){return vt(r,"GET","/v2/recaptchaConfig",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(r,e){return vt(r,"POST","/v1/accounts:delete",e)}async function cs(r,e){return vt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S_(r,e=!1){const t=Se(r),n=await t.getIdToken(e),s=To(n);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:Wn(ui(s.auth_time)),issuedAtTime:Wn(ui(s.iat)),expirationTime:Wn(ui(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ui(r){return Number(r)*1e3}function To(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return qr("JWT malformed, contained fewer than 3 sections"),null;try{const s=rl(t);return s?JSON.parse(s):(qr("Failed to decode base64 JWT payload"),null)}catch(s){return qr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xc(r){const e=To(r);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Xe&&R_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function R_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(r){var _;const e=r.auth,t=await r.getIdToken(),n=await tr(r,cs(e,{idToken:t}));L(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const o=(_=s.providerUserInfo)!=null&&_.length?Gu(s.providerUserInfo):[],a=k_(r.providerData,o),l=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xi(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(r,p)}async function P_(r){const e=Se(r);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k_(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Gu(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(r,e){const t=await Hu(r,{},async()=>{const n=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=r.config,a=await Wu(r,s,"/v1/token",`key=${o}`),l=await r._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:n};return r.emulatorConfig&&ir(r.emulatorConfig.host)&&(h.credentials="include"),zu.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function D_(r,e){return vt(r,"POST","/v2/accounts:revokeToken",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=xc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:o}=await V_(e,t);this.updateTokensAndExpiration(n,s,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:o}=t,a=new tn;return n&&(L(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(L(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(L(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(r,e){L(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new C_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await tr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return S_(this,e)}reload(){return P_(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ls(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Re(this.auth.app))return Promise.reject(Ge(this.auth));const e=await this.getIdToken();return await tr(this,b_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:_,emailVerified:A,isAnonymous:R,providerData:k,stsTokenManager:x}=t;L(_&&x,e,"internal-error");const D=tn.fromJSON(this.name,x);L(typeof _=="string",e,"internal-error"),it(n,e.name),it(s,e.name),L(typeof A=="boolean",e,"internal-error"),L(typeof R=="boolean",e,"internal-error"),it(o,e.name),it(a,e.name),it(l,e.name),it(h,e.name),it(d,e.name),it(p,e.name);const W=new Ve({uid:_,auth:e,email:s,emailVerified:A,displayName:n,isAnonymous:R,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:D,createdAt:d,lastLoginAt:p});return k&&Array.isArray(k)&&(W.providerData=k.map(H=>({...H}))),h&&(W._redirectEventId=h),W}static async _fromIdTokenResponse(e,t,n=!1){const s=new tn;s.updateFromServerResponse(t);const o=new Ve({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ls(o),o}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];L(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Gu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),l=new tn;l.updateFromIdToken(n);const h=new Ve({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new xi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Map;function We(r){Ye(r instanceof Function,"Expected a class definition");let e=Oc.get(r);return e?(Ye(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Oc.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ku.type="NONE";const Lc=Ku;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(r,e,t){return`firebase:${r}:${e}:${t}`}class nn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:o}=this.auth;this.fullUserKey=zr(this.userKey,s.apiKey,o),this.fullPersistenceKey=zr("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await cs(this.auth,{idToken:e}).catch(()=>{});return t?Ve._fromGetAccountInfoResponse(this.auth,t,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new nn(We(Lc),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||We(Lc);const a=zr(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let _;if(typeof p=="string"){const A=await cs(e,{idToken:p}).catch(()=>{});if(!A)break;_=await Ve._fromGetAccountInfoResponse(e,A,p)}else _=Ve._fromJSON(e,p);d!==o&&(l=_),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new nn(o,e,n):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new nn(o,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eh(e))return"Blackberry";if(th(e))return"Webos";if(Ju(e))return"Safari";if((e.includes("chrome/")||Yu(e))&&!e.includes("edge/"))return"Chrome";if(Zu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Qu(r=Te()){return/firefox\//i.test(r)}function Ju(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yu(r=Te()){return/crios\//i.test(r)}function Xu(r=Te()){return/iemobile/i.test(r)}function Zu(r=Te()){return/android/i.test(r)}function eh(r=Te()){return/blackberry/i.test(r)}function th(r=Te()){return/webos/i.test(r)}function Io(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function N_(r=Te()){var e;return Io(r)&&!!((e=window.navigator)!=null&&e.standalone)}function x_(){return gd()&&document.documentMode===10}function nh(r=Te()){return Io(r)||Zu(r)||th(r)||eh(r)||/windows phone/i.test(r)||Xu(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(r,e=[]){let t;switch(r){case"Browser":t=Mc(Te());break;case"Worker":t=`${Mc(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(r,e={}){return vt(r,"GET","/v2/passwordPolicy",wt(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=6;class U_{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??M_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uc(this),this.idTokenSubscription=new Uc(this),this.beforeStateQueue=new O_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var n,s,o;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cs(this,{idToken:e}),n=await Ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Re(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,l=n==null?void 0:n._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(n=h.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=__()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Re(this.app))return Promise.reject(Ge(this));const t=e?Se(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Re(this.app)?Promise.reject(Ge(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Re(this.app)?Promise.reject(Ge(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L_(this),t=new U_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await D_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,n,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Re(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&p_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zt(r){return Se(r)}class Uc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ad(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function B_(r){Rs=r}function sh(r){return Rs.loadJS(r)}function j_(){return Rs.recaptchaEnterpriseScript}function $_(){return Rs.gapiScript}function q_(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class z_{constructor(){this.enterprise=new H_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class H_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const W_="recaptcha-enterprise",ih="NO_RECAPTCHA";class G_{constructor(e){this.type=W_,this.auth=zt(e)}async verify(e="verify",t=!1){async function n(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{A_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new v_(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{l(h)})})}function s(o,a,l){const h=window.grecaptcha;Nc(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(ih)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new z_().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{n(this.auth).then(l=>{if(!t&&Nc(window.grecaptcha))s(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=j_();h.length!==0&&(h+=l),sh(h).then(()=>{s(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Fc(r,e,t,n=!1,s=!1){const o=new G_(r);let a;if(s)a=ih;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Oi(r,e,t,n,s){var o;if((o=r._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Fc(r,e,t,t==="getOobCode");return n(r,a)}else return n(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Fc(r,e,t,t==="getOobCode");return n(r,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(r,e){const t=Fi(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Nt(o,e??{}))return s;Ne(s,"already-initialized")}return t.initialize({options:e})}function Q_(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function J_(r,e,t){const n=zt(r);L(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,o=oh(e),{host:a,port:l}=Y_(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){L(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),L(Nt(d,n.config.emulator)&&Nt(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,ir(a)?al(`${o}//${a}${h}`):X_()}function oh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Y_(r){const e=oh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const o=s[1];return{host:o,port:Bc(n.substr(o.length+1))}}else{const[o,a]=n.split(":");return{host:o,port:Bc(a)}}}function Bc(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function X_(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,t){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}async function Z_(r,e){return vt(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(r,e){return dr(r,"POST","/v1/accounts:signInWithPassword",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(r,e){return dr(r,"POST","/v1/accounts:signInWithEmailLink",wt(r,e))}async function ny(r,e){return dr(r,"POST","/v1/accounts:signInWithEmailLink",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends wo{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new nr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oi(e,t,"signInWithPassword",ey);case"emailLink":return ty(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oi(e,n,"signUpPassword",Z_);case"emailLink":return ny(e,{idToken:t,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(r,e){return dr(r,"POST","/v1/accounts:signInWithIdp",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="http://localhost";class Ut extends wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...o}=t;if(!n||!s)return null;const a=new Ut(n,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:ry,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iy(r){const e=On(Ln(r)).link,t=e?On(Ln(e)).deep_link_id:null,n=On(Ln(r)).deep_link_id;return(n?On(Ln(n)).link:null)||n||t||e||r}class vo{constructor(e){const t=On(Ln(e)),n=t.apiKey??null,s=t.oobCode??null,o=sy(t.mode??null);L(n&&s&&o,"argument-error"),this.apiKey=n,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=iy(e);try{return new vo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,t){return nr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vo.parseLink(t);return L(n,"argument-error"),nr._fromEmailAndCode(e,n.code,n.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ah{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends fr{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ut._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return at.credential(t,n)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends fr{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends fr{constructor(){super("twitter.com")}static credential(e,t){return Ut._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return lt.credential(t,n)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(r,e){return dr(r,"POST","/v1/accounts:signUp",wt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const o=await Ve._fromIdTokenResponse(e,n,s),a=jc(n);return new Ft({user:o,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=jc(n);return new Ft({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function jc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Xe{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,us.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new us(e,t,n,s)}}function ch(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?us._fromErrorAndOperation(r,o,e,n):o})}async function ay(r,e,t=!1){const n=await tr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ft._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(r,e,t=!1){const{auth:n}=r;if(Re(n.app))return Promise.reject(Ge(n));const s="reauthenticate";try{const o=await tr(r,ch(n,s,e,r),t);L(o.idToken,n,"internal-error");const a=To(o.idToken);L(a,n,"internal-error");const{sub:l}=a;return L(r.uid===l,n,"user-mismatch"),Ft._forOperation(r,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ne(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(r,e,t=!1){if(Re(r.app))return Promise.reject(Ge(r));const n="signIn",s=await ch(r,n,e),o=await Ft._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(o.user),o}async function ly(r,e){return lh(zt(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(r){const e=zt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uy(r,e,t){if(Re(r.app))return Promise.reject(Ge(r));const n=zt(r),a=await Oi(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oy).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&uh(r),h}),l=await Ft._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(l.user),l}function hy(r,e,t){return Re(r.app)?Promise.reject(Ge(r)):ly(Se(r),_n.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&uh(r),n})}function dy(r,e,t,n){return Se(r).onIdTokenChanged(e,t,n)}function fy(r,e,t){return Se(r).beforeAuthStateChanged(e,t)}function py(r,e,t,n){return Se(r).onAuthStateChanged(e,t,n)}function my(r){return Se(r).signOut()}const hs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=1e3,_y=10;class dh extends hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},o=this.storage.getItem(n);x_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_y):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},gy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dh.type="LOCAL";const yy=dh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fh.type="SESSION";const ph=fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Cs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await Ey(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Ao("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(_){const A=_;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(A.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function Iy(r){$e().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function wy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vy(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Ay(){return mh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="firebaseLocalStorageDb",by=1,ds="firebaseLocalStorage",_h="fbase_key";class pr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ps(r,e){return r.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function Sy(){const r=indexedDB.deleteDatabase(gh);return new pr(r).toPromise()}function Li(){const r=indexedDB.open(gh,by);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(ds,{keyPath:_h})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(ds)?e(n):(n.close(),await Sy(),e(await Li()))})})}async function $c(r,e,t){const n=Ps(r,!0).put({[_h]:e,value:t});return new pr(n).toPromise()}async function Ry(r,e){const t=Ps(r,!1).get(e),n=await new pr(t).toPromise();return n===void 0?null:n.value}function qc(r,e){const t=Ps(r,!0).delete(e);return new pr(t).toPromise()}const Cy=800,Py=3;class yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Li(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Py)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cs._getInstance(Ay()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await wy(),!this.activeServiceWorker)return;this.sender=new Ty(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Li();return await $c(e,hs,"1"),await qc(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$c(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Ry(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Ps(s,!1).getAll();return new pr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yh.type="LOCAL";const ky=yh;new hr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(r,e){return e?We(e):(L(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends wo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dy(r){return lh(r.auth,new bo(r),r.bypassAuthState)}function Ny(r){const{auth:e,user:t}=r;return L(t,e,"internal-error"),cy(t,new bo(r),r.bypassAuthState)}async function xy(r){const{auth:e,user:t}=r;return L(t,e,"internal-error"),ay(t,new bo(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,n,s,o=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dy;case"linkViaPopup":case"linkViaRedirect":return xy;case"reauthViaPopup":case"reauthViaRedirect":return Ny;default:Ne(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new hr(2e3,1e4);class Xt extends Eh{constructor(e,t,n,s,o){super(e,t,s,o),this.provider=n,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const e=Ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Oy.get())};e()}}Xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="pendingRedirect",Hr=new Map;class My extends Eh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const n=await Uy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uy(r,e){const t=jy(e),n=By(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Fy(r,e){Hr.set(r._key(),e)}function By(r){return We(r._redirectPersistence)}function jy(r){return zr(Ly,r.config.apiKey,r.name)}async function $y(r,e,t=!1){if(Re(r.app))return Promise.reject(Ge(r));const n=zt(r),s=Vy(n,e),a=await new My(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=10*60*1e3;class zy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Th(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(je(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qy&&this.cachedEventUids.clear(),this.cachedEventUids.has(zc(e))}saveEventToCache(e){this.cachedEventUids.add(zc(e)),this.lastProcessedEventTime=Date.now()}}function zc(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Th({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hy(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Th(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(r,e={}){return vt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ky=/^https?/;async function Qy(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Wy(r);for(const t of e)try{if(Jy(t))return}catch{}Ne(r,"unauthorized-domain")}function Jy(r){const e=Ni(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Ky.test(t))return!1;if(Gy.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new hr(3e4,6e4);function Hc(){const r=$e().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Xy(r){return new Promise((e,t)=>{var s,o,a;function n(){Hc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hc(),t(je(r,"network-request-failed"))},timeout:Yy.get()})}if((o=(s=$e().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=$e().gapi)!=null&&a.load)n();else{const l=q_("iframefcb");return $e()[l]=()=>{gapi.load?n():t(je(r,"network-request-failed"))},sh(`${$_()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function Zy(r){return Wr=Wr||Xy(r),Wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=new hr(5e3,15e3),tE="__/auth/iframe",nE="emulator/auth/iframe",rE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iE(r){const e=r.config;L(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Eo(e,nE):`https://${r.config.authDomain}/${tE}`,n={apiKey:e.apiKey,appName:r.name,v:dn},s=sE.get(r.config.apiHost);s&&(n.eid=s);const o=r._getFrameworks();return o.length&&(n.fw=o.join(",")),`${t}?${sr(n).slice(1)}`}async function oE(r){const e=await Zy(r),t=$e().gapi;return L(t,r,"internal-error"),e.open({where:document.body,url:iE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rE,dontclear:!0},n=>new Promise(async(s,o)=>{await n.restyle({setHideOnLeave:!1});const a=je(r,"network-request-failed"),l=$e().setTimeout(()=>{o(a)},eE.get());function h(){$e().clearTimeout(l),s(n)}n.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cE=500,lE=600,uE="_blank",hE="http://localhost";class Wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dE(r,e,t,n=cE,s=lE){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const h={...aE,width:n.toString(),height:s.toString(),top:o,left:a},d=Te().toLowerCase();t&&(l=Yu(d)?uE:t),Qu(d)&&(e=e||hE,h.scrollbars="yes");const p=Object.entries(h).reduce((A,[R,k])=>`${A}${R}=${k},`,"");if(N_(d)&&l!=="_self")return fE(e||"",l),new Wc(null);const _=window.open(e||"",l,p);L(_,r,"popup-blocked");try{_.focus()}catch{}return new Wc(_)}function fE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="__/auth/handler",mE="emulator/auth/handler",gE=encodeURIComponent("fac");async function Gc(r,e,t,n,s,o){L(r.config.authDomain,r,"auth-domain-config-required"),L(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:dn,eventId:s};if(e instanceof ah){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",vd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof fr){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}r.tenantId&&(a.tid=r.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await r._getAppCheckToken(),d=h?`#${gE}=${encodeURIComponent(h)}`:"";return`${_E(r)}?${sr(l).slice(1)}${d}`}function _E({config:r}){return r.emulator?Eo(r,mE):`https://${r.authDomain}/${pE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="webStorageSupport";class yE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ph,this._completeRedirectFn=$y,this._overrideRedirectResult=Fy}async _openPopup(e,t,n,s){var a;Ye((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Gc(e,t,n,Ni(),s);return dE(e,o,Ao())}async _openRedirect(e,t,n,s){await this._originValidation(e);const o=await Gc(e,t,n,Ni(),s);return Iy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Ye(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await oE(e),n=new zy(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hi,{type:hi},s=>{var a;const o=(a=s==null?void 0:s[0])==null?void 0:a[hi];o!==void 0&&t(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nh()||Ju()||Io()}}const EE=yE;var Kc="@firebase/auth",Qc="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wE(r){sn(new xt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const h={apiKey:a,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rh(r)},d=new F_(n,s,o,h);return Q_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),sn(new xt("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(n=>new TE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Kc,Qc,IE(r)),ft(Kc,Qc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=5*60,AE=ol("authIdTokenMaxAge")||vE;let Jc=null;const bE=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>AE)return;const s=t==null?void 0:t.token;Jc!==s&&(Jc=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function SE(r=hl()){const e=Fi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=K_(r,{popupRedirectResolver:EE,persistence:[ky,yy,ph]}),n=ol("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const a=bE(o.toString());fy(t,a,()=>a(t.currentUser)),dy(t,l=>a(l))}}const s=sl("auth");return s&&J_(t,`http://${s}`),t}function RE(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}B_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const o=je("internal-error");o.customData=s,t(o)},n.type="text/javascript",n.charset="UTF-8",RE().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wE("Browser");const CE={apiKey:"AIzaSyApbv5GZ6nEwN_kVNG0Gc5-OsmSzRCTUY8",authDomain:"cldf-a651b.firebaseapp.com",projectId:"cldf-a651b",storageBucket:"cldf-a651b.firebasestorage.app",messagingSenderId:"732937211804",appId:"1:732937211804:web:f55b6d81a92085991c8259"},Ih=ul(CE),PE=Kg(Ih),Lr=SE(Ih);class kE{constructor(e,t,n){this.userId=t,this.localKey=`${e}_${t}`,this.docRef=Gg(PE,"user_progress",t),this.ui=n}async load(){const e={progress:{},phase:1};try{const n=await l_(this.docRef);if(n.exists()){const s=n.data();return localStorage.setItem(this.localKey,JSON.stringify(s)),s}}catch(n){console.warn("Modo offline ou erro ao carregar do Firestore:",n)}const t=localStorage.getItem(this.localKey);return t?JSON.parse(t):e}async save(e){localStorage.setItem(this.localKey,JSON.stringify(e)),this.ui&&this.ui.showSaving();try{await u_(this.docRef,e)}catch(t){console.error("Erro ao salvar no Firestore:",t)}finally{this.ui&&this.ui.hideSaving()}}async clear(){localStorage.removeItem(this.localKey);try{await h_(this.docRef)}catch(e){console.error("Erro ao deletar documento na nuvem",e)}}exportFile(e){const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`cldf_backup_${new Date().toISOString().slice(0,10)}.json`,s.click(),URL.revokeObjectURL(n)}importFile(e,t){const n=new FileReader;n.onload=async s=>{try{const o=JSON.parse(s.target.result);await this.save(o),t&&t(o)}catch{alert("Arquivo de backup inválido.")}},n.readAsText(e)}}class VE{constructor(e){this.onUserChange=e,py(Lr,t=>{this.onUserChange(t)})}async login(e,t){return await hy(Lr,e,t)}async register(e,t){return await uy(Lr,e,t)}async logout(){await my(Lr),window.location.reload()}}class DE{constructor(){this.toastContainer=document.getElementById("toast-container"),this.backToTopBtn=document.getElementById("back-to-top"),this.header=document.querySelector("header"),this.initScrollListener(),this.initNetworkListeners()}hideLoading(){const e=document.getElementById("loading-overlay");e&&(e.classList.add("opacity-0"),setTimeout(()=>{e.classList.add("hidden"),e.classList.remove("flex")},500))}showAuth(){const e=document.getElementById("auth-overlay");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}hideAuth(){const e=document.getElementById("auth-overlay");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}showSaving(){const e=document.getElementById("sync-status");e&&(e.classList.remove("hidden"),e.classList.add("flex"))}hideSaving(){const e=document.getElementById("sync-status");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}openStatsModal(){const e=document.getElementById("stats-modal");e&&(e.classList.remove("hidden"),e.classList.add("flex"),setTimeout(()=>{e.classList.remove("opacity-0"),e.firstElementChild.classList.remove("scale-95"),e.firstElementChild.classList.add("scale-100")},10))}closeStatsModal(){const e=document.getElementById("stats-modal");e&&(e.classList.add("opacity-0"),e.firstElementChild.classList.remove("scale-100"),e.firstElementChild.classList.add("scale-95"),setTimeout(()=>{e.classList.add("hidden"),e.classList.remove("flex")},300))}initScrollListener(){window.addEventListener("scroll",()=>{this.backToTopBtn&&(window.scrollY>400?(this.backToTopBtn.classList.remove("opacity-0","pointer-events-none","translate-y-4"),this.backToTopBtn.classList.add("opacity-100","pointer-events-auto","translate-y-0")):(this.backToTopBtn.classList.add("opacity-0","pointer-events-none","translate-y-4"),this.backToTopBtn.classList.remove("opacity-100","pointer-events-auto","translate-y-0")))})}scrollTo(e){var n;const t=document.getElementById(e);t&&window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-(((n=this.header)==null?void 0:n.offsetHeight)??80)-16,behavior:"smooth"})}initNetworkListeners(){const e=document.getElementById("network-status-dot"),t=document.getElementById("network-status-text"),n=()=>{navigator.onLine?(e&&(e.className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_6px_#10b981]"),t&&(t.textContent="Sistema Operacional")):(e&&(e.className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_6px_#e11d48] animate-pulse"),t&&(t.textContent="Modo Offline"))};window.addEventListener("online",n),window.addEventListener("offline",n),n()}switchTab(e){["cycle-a","cycle-b","cycle-c"].forEach(t=>{const n=document.getElementById(`tab-${t}`),s=document.getElementById(`content-${t}`);!n||!s||(t===e?(n.className="flex-1 py-5 px-4 text-center font-bold text-sm sm:text-base border-b-2 transition-all whitespace-nowrap focus:outline-none min-w-[140px] relative z-10 border-emerald-500 text-emerald-400 bg-slate-800 shadow-sm",s.classList.remove("hidden"),s.classList.add("animate-fade-in")):(n.className="flex-1 py-5 px-4 text-center font-medium text-sm sm:text-base border-b-2 border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 transition-all whitespace-nowrap focus:outline-none min-w-[140px]",s.classList.add("hidden"),s.classList.remove("animate-fade-in")))})}showToast(e,t="success"){if(!this.toastContainer)return;const n=document.createElement("div"),s=t==="success";n.className=`animate-toast-enter flex items-center gap-3 p-4 rounded-xl shadow-xl border backdrop-blur-md ${s?"bg-emerald-900/90 border-emerald-800 text-emerald-100":"bg-rose-900/90 border-rose-800 text-rose-100"}`,n.innerHTML=`<p class="text-sm font-semibold">${e}</p>`,this.toastContainer.appendChild(n),setTimeout(()=>{n.classList.replace("animate-toast-enter","animate-toast-leave"),setTimeout(()=>n.remove(),300)},4e3)}_initAudioCtx(){return this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext)),this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this.audioCtx}playBeep(){try{const e=this._initAudioCtx(),t=e.createOscillator(),n=e.createGain();t.type="sine",t.frequency.setValueAtTime(880,e.currentTime),n.gain.setValueAtTime(.05,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.1),t.connect(n),n.connect(e.destination),t.start(),t.stop(e.currentTime+.1)}catch{}}playPowerUpSound(){try{const e=this._initAudioCtx(),t=e.createOscillator(),n=e.createGain();t.type="sine";const s=e.currentTime;t.frequency.setValueAtTime(200,s),t.frequency.exponentialRampToValueAtTime(800,s+.3),n.gain.setValueAtTime(.1,s),n.gain.exponentialRampToValueAtTime(.001,s+.3),t.connect(n),n.connect(e.destination),t.start(s),t.stop(s+.3)}catch{}}playSuccessSound(){try{const e=this._initAudioCtx(),t=e.createOscillator(),n=e.createGain();t.type="sine";const s=e.currentTime;t.frequency.setValueAtTime(523.25,s),t.frequency.setValueAtTime(659.25,s+.1),t.frequency.setValueAtTime(783.99,s+.2),t.frequency.setValueAtTime(1046.5,s+.3),n.gain.setValueAtTime(.08,s),n.gain.exponentialRampToValueAtTime(.001,s+.8),t.connect(n),n.connect(e.destination),t.start(s),t.stop(s+.8)}catch{}}playErrorSound(){document.body.classList.add("animate-shake"),setTimeout(()=>document.body.classList.remove("animate-shake"),400);try{const e=this._initAudioCtx(),t=e.createOscillator(),n=e.createGain();t.type="square";const s=e.currentTime;t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(80,s+.2),n.gain.setValueAtTime(.05,s),n.gain.exponentialRampToValueAtTime(.001,s+.2),t.connect(n),n.connect(e.destination),t.start(s),t.stop(s+.2)}catch{}}}class NE{constructor(e,t,n,s,o){this.radarChart=null,this.barChart=null,this.doughnutChart=null,this.radarCtx=e,this.barCtx=t,this.doughnutCtx=n,this.subjects=s,this.ui=o,this.compactMediaQuery=window.matchMedia("(max-width: 639px)"),this.handleViewportChange=this.handleViewportChange.bind(this),this.colorHexMap={blue:"#2563eb",teal:"#0d9488",orange:"#ea580c",emerald:"#059669",indigo:"#6366f1",violet:"#7c3aed",rose:"#e11d48",cyan:"#0891b2",fuchsia:"#c026d3"},this.init(),this.bindViewportListener()}bindViewportListener(){if(this.compactMediaQuery.addEventListener){this.compactMediaQuery.addEventListener("change",this.handleViewportChange);return}this.compactMediaQuery.addListener(this.handleViewportChange)}isCompactViewport(){return this.compactMediaQuery.matches}getLabels(){return this.subjects.map(e=>this.isCompactViewport()&&e.shortName||e.name)}getRadarPointLabelFont(){return{size:this.isCompactViewport()?11:14,weight:"bold"}}getXAxisFont(){return{size:this.isCompactViewport()?12:14}}handleViewportChange(){const e=this.getLabels();this.radarChart&&(this.radarChart.data.labels=e,this.radarChart.options.scales.r.pointLabels.font=this.getRadarPointLabelFont(),this.radarChart.update()),this.barChart&&(this.barChart.data.labels=e,this.barChart.options.scales.x.ticks.font=this.getXAxisFont(),this.barChart.update()),this.doughnutChart&&this.doughnutChart.update()}init(){const e=this.getLabels(),t=this.subjects.map(n=>this.colorHexMap[n.color]||"#94a3b8");if(this.radarCtx&&(this.radarChart=new Chart(this.radarCtx,{type:"radar",data:{labels:e,datasets:[{label:"Progresso (%)",data:[],backgroundColor:"rgba(16, 185, 129, 0.25)",borderColor:"#10b981",borderWidth:4,pointBackgroundColor:t,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:t}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:1e3,easing:"easeOutQuart"},elements:{line:{tension:.3}},scales:{r:{angleLines:{color:"rgba(16, 185, 129, 0.2)"},grid:{color:"rgba(16, 185, 129, 0.2)"},pointLabels:{font:this.getRadarPointLabelFont(),color:t},ticks:{backdropColor:"transparent",color:"#94a3b8",stepSize:25,max:100,min:0,callback:n=>n+"%"}}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:n=>` Progresso: ${n.raw}% Concluído`}}}},plugins:[{id:"radar3D",beforeDatasetsDraw(n){n.ctx.save(),n.ctx.shadowColor="rgba(16, 185, 129, 0.5)",n.ctx.shadowBlur=20,n.ctx.shadowOffsetY=12},afterDatasetsDraw(n){n.ctx.restore()}}]})),this.barCtx){const n={id:"topLabels",afterDatasetsDraw:s=>{const{ctx:o}=s;s.data.datasets.forEach((a,l)=>{s.getDatasetMeta(l).data.forEach((d,p)=>{const _=a.data[p];o.fillStyle=a.borderColor[p]||"#cbd5e1";const A=this.isCompactViewport()?13:15;o.font=`bold ${A}px Inter, sans-serif`,o.textAlign="center",o.textBaseline="bottom",o.fillText(_,d.x,d.y-6)})})}};this.barChart=new Chart(this.barCtx,{type:"bar",data:{labels:e,datasets:[{label:"Aulas Concluídas",data:[],backgroundColor:t,borderRadius:6,borderWidth:{top:2,right:2,bottom:0,left:2},borderColor:t,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:30}},animation:{duration:1e3,easing:"easeOutQuart"},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255, 255, 255, 0.05)"},ticks:{color:"#64748b"}},x:{grid:{display:!1},ticks:{color:"#e2e8f0",font:this.getXAxisFont()}}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:s=>` Carga Horária: ${s.raw} Aulas`}}}},plugins:[n,{id:"bar3D",beforeDatasetsDraw(s){s.ctx.save(),s.ctx.shadowColor="rgba(0, 0, 0, 0.6)",s.ctx.shadowBlur=15,s.ctx.shadowOffsetX=8,s.ctx.shadowOffsetY=8},afterDatasetsDraw(s){s.ctx.restore()}}]})}if(this.doughnutCtx){const n={id:"doughnutCenterText",beforeDraw(s){const{ctx:o,width:a,height:l}=s;o.restore();let h=0,d=0;s.data.datasets.forEach(k=>{h+=k.data[0]||0,d+=(k.data[0]||0)+(k.data[1]||0)});const p=d>0?Math.round(h/d*100):0,_=Math.min(a,l)*.18;o.textBaseline="middle",o.textAlign="center";const A=Math.round(a/2),R=Math.round(l/2);o.font=`800 ${_}px Inter, sans-serif`,o.fillStyle="#f8fafc",o.shadowColor="rgba(0, 0, 0, 0.8)",o.shadowBlur=15,o.shadowOffsetY=5,o.fillText(`${p}%`,A,R-5),o.shadowBlur=0,o.shadowOffsetY=0,o.font=`bold ${_*.35}px Inter, sans-serif`,o.fillStyle="#94a3b8",o.fillText("GERAL",A,R+_*.7),o.save()}};this.doughnutChart=new Chart(this.doughnutCtx,{type:"doughnut",data:{labels:["Concluído","Pendente"],datasets:[{label:"Específicas (TI)",data:[0,100],backgroundColor:[this.colorHexMap.cyan,"rgba(8, 145, 178, 0.1)"],borderColor:["#0f172a","#0f172a"],borderWidth:2,borderRadius:[20,0],hoverOffset:5},{label:"Simulados Globais",data:[0,100],backgroundColor:[this.colorHexMap.fuchsia,"rgba(192, 38, 211, 0.1)"],borderColor:["#0f172a","#0f172a"],borderWidth:2,borderRadius:[20,0],hoverOffset:5}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"60%",animation:{duration:1e3,easing:"easeOutQuart"},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:s=>{const o=s.dataset.label||"",a=o==="Simulados Globais"?"Simulados":"Aulas",l=s.dataIndex===0;return` ${o}: ${s.raw} ${a} (${l?"Concluído":"Pendente"})`}}}}},plugins:[n,{id:"doughnut3D",beforeDatasetsDraw(s){s.ctx.save(),s.ctx.shadowColor="rgba(0, 0, 0, 0.7)",s.ctx.shadowBlur=15,s.ctx.shadowOffsetX=5,s.ctx.shadowOffsetY=10},afterDatasetsDraw(s){s.ctx.restore()}}]})}}update(e,t){t&&(this.subjects=t);const n=this.getLabels(),s=this.subjects.map(h=>this.colorHexMap[h.color]||"#94a3b8"),o=this.subjects.map(h=>{const d=this.colorHexMap[h.color]||"#94a3b8",p=this.barCtx.createLinearGradient(0,0,0,300);return p.addColorStop(0,d),p.addColorStop(1,"#020617"),p}),a=this.subjects.map(h=>{const d=e[h.id]||0;return Math.round(d/h.max*100)}),l=this.subjects.map(h=>e[h.id]||0);if(this.radarChart&&(this.radarChart.data.labels=n,this.radarChart.data.datasets[0].data=a,this.radarChart.data.datasets[0].pointBackgroundColor=s,this.radarChart.data.datasets[0].pointHoverBorderColor=s,this.radarChart.options.scales.r.pointLabels.color=s,this.radarChart.update()),this.barChart&&(this.barChart.data.labels=n,this.barChart.data.datasets[0].data=l,this.barChart.data.datasets[0].backgroundColor=o,this.barChart.data.datasets[0].borderColor=s,this.barChart.update()),this.doughnutChart){const h=this.doughnutCtx.createLinearGradient(0,0,0,300);h.addColorStop(0,this.colorHexMap.cyan),h.addColorStop(1,"#020617");const d=this.doughnutCtx.createLinearGradient(0,0,0,300);d.addColorStop(0,this.colorHexMap.fuchsia),d.addColorStop(1,"#020617"),this.doughnutChart.data.datasets[0].backgroundColor=[h,"rgba(8, 145, 178, 0.05)"],this.doughnutChart.data.datasets[1].backgroundColor=[d,"rgba(192, 38, 211, 0.05)"];const p=this.subjects.find(A=>A.id==="ti"),_=this.subjects.find(A=>A.id==="simulados");if(p){const A=e.ti||0,R=Math.max(0,p.max-A);this.doughnutChart.data.datasets[0].data=[A,R]}if(_){const A=e.simulados||0,R=Math.max(0,_.max-A);this.doughnutChart.data.datasets[1].data=[A,R]}this.doughnutChart.update()}}downloadRadarChart(){if(!this.radarChart)return;const e=document.createElement("a");e.href=this.radarChart.toBase64Image(),e.download=`cldf_radar_evolucao_${new Date().toISOString().split("T")[0]}.png`,document.body.appendChild(e),e.click(),e.remove(),this.ui&&this.ui.showToast("Gráfico salvo como imagem com sucesso!","success")}}const Yc={ti:{id:"ti",name:"Específicas (TI)",shortName:"TI",max:247,color:"cyan"},simulados:{id:"simulados",name:"Simulados Globais",shortName:"Simul.",max:20,color:"fuchsia"}},Xc=[{id:"pt",name:"Língua Portuguesa",shortName:"Port.",max:91,color:"blue",phase:1},{id:"const",name:"Dir. Constitucional",shortName:"Const.",max:125,color:"teal",phase:1},{id:"eng",name:"Língua Inglesa",shortName:"Ingl.",max:33,color:"orange",phase:1},{id:"admin",name:"Dir. Administrativo",shortName:"Admin.",max:132,color:"emerald",phase:1},{id:"legis",name:"Processo Legislativo",shortName:"Legis.",max:71,color:"indigo",phase:2},{id:"ridf",name:"Realidade do DF",shortName:"R. DF",max:16,color:"violet",phase:2},{id:"emo",name:"Inteligência Emocional",shortName:"IE",max:6,color:"rose",phase:3}];class xE{static calculatePhase(e){let t=1;return(e.pt||0)>=91&&(e.admin||0)>=132&&(e.const||0)>=125&&(e.eng||0)>=33&&(t=2,(e.legis||0)>=71&&(e.ridf||0)>=16&&(t=3)),t}static isPhaseBlocked(e,t){return e>t}}class OE{constructor(e){this.data=e,this.showCompleted=!1}renderTrackersHTML(){[1,2,3].forEach(e=>{const t=document.getElementById(`trackers-phase-${e}`);if(!t)return;const n=this.data.SUBJECTS_QUEUE.filter(s=>s.phase===e);t.innerHTML=n.map(s=>`
            <div class="bg-slate-800 border border-slate-700 rounded-2xl p-4 sm:p-5 w-full shadow-sm mb-3 transition-all duration-300" id="tracker-card-${s.id}">
                <div class="mb-2 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <span class="min-w-0 font-bold text-white flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-${s.color}-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        <span class="truncate">${s.name}</span>
                    </span>
                    <span class="self-start shrink-0 text-${s.color}-300 font-bold bg-${s.color}-900 border border-${s.color}-800 px-2 py-0.5 rounded text-[10px] sm:text-xs" id="${s.id}-text">0/${s.max} (0% - ~0h)</span>
                </div>
                <div class="w-full bg-slate-900 rounded-full h-3 mb-4 overflow-hidden border border-slate-700 shadow-inner">
                    <div class="bg-${s.color}-500 h-full rounded-full transition-all duration-500 ease-out" id="${s.id}-bar" style="width: 0%"></div>
                </div>
                <div id="controls-${s.id}" class="flex flex-wrap items-stretch gap-2 transition-all duration-300">
                    <button data-action="update-subject" data-subject="${s.id}" data-amount="-1" data-max="${s.max}" class="min-w-[72px] flex-1 px-3 py-2.5 sm:flex-none sm:py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:shadow-[0_0_0_#020617] active:translate-y-[4px]">-1</button>
                    <button data-action="update-subject" data-subject="${s.id}" data-amount="1" data-max="${s.max}" class="min-w-[72px] flex-1 px-3 py-2.5 sm:flex-none sm:py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:shadow-[0_0_0_#020617] active:translate-y-[4px]">+1</button>
                    <button data-action="update-subject" data-subject="${s.id}" data-amount="5" data-max="${s.max}" class="min-w-[72px] sm:min-w-[96px] flex-1 px-4 py-2.5 sm:flex-none sm:py-1.5 bg-${s.color}-500 hover:bg-${s.color}-400 text-white rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#0f172a] active:shadow-[0_0_0_#0f172a] active:translate-y-[4px]"><span class="sm:hidden">+5</span><span class="hidden sm:inline">+5 Aulas</span></button>
                    <button data-action="complete-subject" data-subject="${s.id}" data-name="${s.name}" data-max="${s.max}" class="w-full px-3 py-2.5 sm:ml-auto sm:w-auto sm:py-1.5 bg-slate-900 border border-slate-700 hover:bg-black text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:shadow-[0_0_0_#020617] active:translate-y-[4px]"><span class="sm:hidden">Zerar</span><span class="hidden sm:inline">Zerar ✓</span></button>
                </div>
            </div>
          `).join("")})}toggleCompleted(e,t){this.showCompleted=!this.showCompleted;const n=document.getElementById("toggle-completed-text"),s=document.getElementById("toggle-completed-icon");n&&(n.textContent=this.showCompleted?"Ocultar Concluídas":"Mostrar Concluídas"),s&&(this.showCompleted?s.innerHTML='<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>':s.innerHTML='<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'),this.renderValues(e,t)}renderValues(e,t){let n=0,s=0,o=0;this.data.SUBJECTS_QUEUE.forEach(Q=>{const te=e[Q.id]||0;n+=te,s+=Q.max,o+=te;const T=Math.round(te/Q.max*100),m=document.getElementById(`${Q.id}-text`),y=document.getElementById(`${Q.id}-bar`);m&&(m.textContent=`${te}/${Q.max} (${T}% - ~${te}h)`),y&&(y.style.width=`${T}%`);const I=document.getElementById(`tracker-card-${Q.id}`);I&&(T===100?this.showCompleted?(I.classList.remove("hidden"),I.classList.add("opacity-60")):(I.classList.add("hidden"),I.classList.remove("opacity-60")):I.classList.remove("opacity-60","hidden"));const E=document.getElementById(`controls-${Q.id}`);if(E){const v=Q.phase>t;E.classList.toggle("opacity-40",v),E.classList.toggle("pointer-events-none",v),E.classList.toggle("grayscale",v)}});const a=e.ti||0,l=this.data.SPECIAL_MISSIONS.ti.max;n+=a,s+=l,o+=a;const h=Math.round(a/l*100);document.getElementById("ti-progress-percent")&&(document.getElementById("ti-progress-percent").textContent=`${h}%`),document.getElementById("ti-progress-text")&&(document.getElementById("ti-progress-text").textContent=`${a}/${l} (~${a}h)`),document.getElementById("ti-progress-bar")&&(document.getElementById("ti-progress-bar").style.width=`${h}%`);const d=e.simulados||0,p=this.data.SPECIAL_MISSIONS.simulados.max;n+=d,s+=p;const _=d*4;o+=_;const A=Math.round(d/p*100);document.getElementById("simulados-progress-percent")&&(document.getElementById("simulados-progress-percent").textContent=`${A}%`),document.getElementById("simulados-progress-text")&&(document.getElementById("simulados-progress-text").textContent=`${d}/${p} (~${_}h)`),document.getElementById("simulados-progress-bar")&&(document.getElementById("simulados-progress-bar").style.width=`${A}%`);const R=s>0?Math.round(n/s*100):0;document.getElementById("global-progress-percent")&&(document.getElementById("global-progress-percent").textContent=`${R}% (~${o}h)`);const k=n-d,x=s-p,D=x+p*4,W=Math.max(0,D-o),H=Math.ceil(W/2),X=Math.ceil(H/30);document.getElementById("stats-classes-completed")&&(document.getElementById("stats-classes-completed").textContent=`${k} / ${x}`),document.getElementById("stats-hours-completed")&&(document.getElementById("stats-hours-completed").textContent=`${o}h / ${D}h`),document.getElementById("stats-simulados-completed")&&(document.getElementById("stats-simulados-completed").textContent=`${d} / ${p}`),document.getElementById("stats-days-remaining")&&(document.getElementById("stats-days-remaining").textContent=`${H} dias (~${X} meses)`);const me=document.getElementById("stats-congrats-message");me&&(H<=0?me.classList.remove("hidden"):me.classList.add("hidden"))}updatePhaseUI(e){document.getElementById("header-phase-text").textContent=`Fase ${e}`;const t=document.getElementById("phase-1-badge"),n=e===1;t&&(t.textContent=n?"Ativa":"Concluída",t.className=n?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider":"bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider");const s=(o,a,l)=>{const h=document.getElementById(`phase-${o}-wrapper`),d=document.getElementById(`phase-${o}-box`),p=document.getElementById(`phase-${o}-badge`),_=document.getElementById(`trackers-phase-${o}`);if(h)if(e>=o){h.className="group opacity-100 transition-opacity duration-300",d.className="bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-800 transition-all duration-500 relative overflow-hidden",_&&_.classList.remove("hidden");const A=e===o;p.textContent=A?o===3?"Reta Final":"Ativa":"Concluída",p.className=A?`bg-${a}-500/20 text-${a}-300 border border-${a}-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`:"bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"}else h.className=`group opacity-${l} hover:opacity-100 transition-opacity duration-300`,d.className="bg-slate-900/50 p-6 sm:p-8 rounded-3xl border-2 border-slate-800 border-dashed transition-all duration-500 relative overflow-hidden",_&&_.classList.add("hidden"),p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Disponível em breve...',p.className="bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider inline-flex items-center gap-1"};s(2,"indigo",50),s(3,"orange",40)}updateDynamicCycle(e,t){const n=document.getElementById("dynamic-cycle-list");if(!n)return;const o=this.data.SUBJECTS_QUEUE.filter(a=>(e[a.id]||0)<a.max&&a.phase<=t).slice(0,4);if(o.length===0){n.innerHTML='<span class="block w-full rounded-xl border border-emerald-200 bg-emerald-100 px-4 py-2.5 text-center text-sm font-bold text-emerald-800 shadow-sm">🎉 Edital Básico Zerado! O Gran Cursos agora só precisa de Simulados.</span>';return}n.innerHTML=o.map(a=>`<span class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-700 px-4 py-2.5 text-sm font-bold text-slate-200 shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto sm:justify-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-${a.color}-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>${a.name}</span>`).join("")}celebrateSubjectCompletion(){const e=document.createElement("div");if(e.className="fixed inset-0 z-[9999] bg-emerald-500/40 pointer-events-none transition-opacity duration-500 opacity-100 mix-blend-screen",document.body.appendChild(e),e.offsetWidth,e.classList.replace("opacity-100","opacity-0"),setTimeout(()=>e.remove(),500),window.confetti){const n={origin:{y:.7},shapes:["star","circle"],colors:["#FFD700","#10b981","#3b82f6","#f97316","#ec4899"],ticks:200};confetti({...n,particleCount:80,spread:100,startVelocity:40}),setTimeout(()=>confetti({...n,particleCount:60,spread:120,startVelocity:55}),250),setTimeout(()=>confetti({...n,particleCount:40,spread:80,startVelocity:30}),500)}const t=document.getElementById("global-progress-percent");t&&(t.classList.add("scale-125","text-emerald-300","drop-shadow-[0_0_8px_#10b981]"),setTimeout(()=>{t.classList.remove("scale-125","text-emerald-300","drop-shadow-[0_0_8px_#10b981]")},600))}celebratePhaseUnlock(){if(window.confetti){const t=Date.now()+3e3;(function n(){confetti({particleCount:5,angle:60,spread:55,origin:{x:0},colors:["#10b981","#14b8a6","#6366f1","#f97316"]}),confetti({particleCount:5,angle:120,spread:55,origin:{x:1},colors:["#10b981","#14b8a6","#6366f1","#f97316"]}),Date.now()<t&&requestAnimationFrame(n)})()}}}class LE{constructor(e){this.app=e,this.SPECIAL_MISSIONS=Yc,this.SUBJECTS_QUEUE=Xc,this.view=new OE({SPECIAL_MISSIONS:Yc,SUBJECTS_QUEUE:Xc}),this.worker=new Worker(new URL("/assets/cldf-worker-DIz3rCM1.js",import.meta.url),{type:"module"}),this.worker.addEventListener("message",t=>{t.data.action==="RESULT_PROCESS_ROADMAP_DATA"&&this.applyRender(t.data.payload)})}init(){this.app.state.progress||(this.app.state.progress={}),this.view.renderTrackersHTML(),this.checkAndRender()}updateSubject(e,t,n){const s=this.SUBJECTS_QUEUE.find(h=>h.id===e);if(s&&xE.isPhaseBlocked(s.phase,this.app.state.phase)){this.app.ui&&this.app.ui.playErrorSound&&this.app.ui.playErrorSound(),this.app.ui.showToast(`Fase Bloqueada! Conclua a Fase ${this.app.state.phase} primeiro.`,"error");return}let o=this.app.state.progress[e]||0;const a=o;o+=t,o<0&&(o=0),o>n&&(o=n),o===n&&this.app.state.progress[e]!==n?(this.app.ui&&this.app.ui.playSuccessSound&&this.app.ui.playSuccessSound(),this.view.celebrateSubjectCompletion(),this.app.ui.showToast("Parabéns! Finalizou a matéria!","success")):o>a&&this.app.ui&&(e==="ti"||e==="simulados"?this.app.ui.playPowerUpSound&&this.app.ui.playPowerUpSound():this.app.ui.playBeep()),this.app.state.progress[e]=o,this.app.storage.save(this.app.state),this.checkAndRender()}completeSubject(e,t,n){confirm(`Tem certeza que deseja marcar a matéria "${t}" como 100% concluída? Esta ação não pode ser desfeita facilmente.`)&&this.updateSubject(e,n,n)}toggleCompleted(){this.view.toggleCompleted(this.app.state.progress,this.app.state.phase)}checkAndRender(){this.worker.postMessage({action:"PROCESS_ROADMAP_DATA",payload:{progress:this.app.state.progress,subjectsQueue:this.SUBJECTS_QUEUE,specialMissions:this.SPECIAL_MISSIONS}})}applyRender({newPhase:e,visibleSubjects:t}){e>this.app.state.phase&&(this.view.celebratePhaseUnlock(),this.app.ui.showToast(`🎉 DESBLOQUEIO ÉPICO: Acesso Concedido à Fase ${e}!`,"success")),this.app.state.phase=e,this.app.storage.save(this.app.state),this.view.renderValues(this.app.state.progress,this.app.state.phase),this.view.updatePhaseUI(this.app.state.phase),this.view.updateDynamicCycle(this.app.state.progress,this.app.state.phase),this.app.chartManager&&this.app.chartManager.update(this.app.state.progress,t)}}const ME="modulepreload",UE=function(r){return"/"+r},Zc={},FE=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(h=>{if(h=UE(h),h in Zc)return;Zc[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const _=document.createElement("link");if(_.rel=d?"stylesheet":ME,d||(_.as="script"),_.crossOrigin="",_.href=h,l&&_.setAttribute("nonce",l),document.head.appendChild(_),d)return new Promise((A,R)=>{_.addEventListener("load",A),_.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};function BE(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:s,onRegisteredSW:o,onRegisterError:a}=r;let l,h,d;const p=async(A=!0)=>{await h,await(d==null?void 0:d())};async function _(){if("serviceWorker"in navigator){if(l=await FE(async()=>{const{Workbox:A}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:A}},[]).then(({Workbox:A})=>new A("/sw.js",{scope:"/",type:"classic"})).catch(A=>{a==null||a(A)}),!l)return;d=async()=>{await(l==null?void 0:l.messageSkipWaiting())};{let A=!1;const R=()=>{A=!0,l==null||l.addEventListener("controlling",k=>{k.isUpdate&&window.location.reload()}),t==null||t()};l.addEventListener("installed",k=>{typeof k.isUpdate>"u"?typeof k.isExternal<"u"?k.isExternal?R():!A&&(n==null||n()):k.isExternal?window.location.reload():!A&&(n==null||n()):k.isUpdate||n==null||n()}),l.addEventListener("waiting",R),l.addEventListener("externalwaiting",R)}l.register({immediate:e}).then(A=>{o?o("/sw.js",A):s==null||s(A)}).catch(A=>{a==null||a(A)})}}return h=_(),p}class jE{constructor(e){this.canvas=document.getElementById(e),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.particles=[],this.particleCount=window.innerWidth<768?30:70,this.init(),window.addEventListener("resize",()=>{this.resize(),this.particles=[],this.createParticles()}))}init(){this.resize(),this.createParticles(),this.animate()}resize(){this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight}createParticles(){for(let e=0;e<this.particleCount;e++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,size:Math.random()*2+.5,speedX:Math.random()*.8-.4,speedY:Math.random()*.8-.4})}animate(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let e=0;e<this.particles.length;e++){let t=this.particles[e];t.x+=t.speedX,t.y+=t.speedY,(t.x<0||t.x>this.canvas.width)&&(t.speedX*=-1),(t.y<0||t.y>this.canvas.height)&&(t.speedY*=-1),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size,0,Math.PI*2),this.ctx.fillStyle="rgba(16, 185, 129, 0.6)",this.ctx.fill();for(let n=e+1;n<this.particles.length;n++){let s=this.particles[n],o=Math.hypot(t.x-s.x,t.y-s.y);o<80&&(this.ctx.beginPath(),this.ctx.strokeStyle=`rgba(16, 185, 129, ${.2*(1-o/80)})`,this.ctx.lineWidth=1,this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(s.x,s.y),this.ctx.stroke())}}requestAnimationFrame(()=>this.animate())}}const el={config:{storageKey:"cldfStudyEngine_v1"},state:null,storage:null,ui:null,roadmap:null,chartManager:null,auth:null,particles:null,async init(){var n,s,o;if(window._isAppInitialized)return;window._isAppInitialized=!0,console.log("Motor Dinâmico CLDF - Versão: 1.2 Pro"),this.ui=new DE,this.roadmap=new LE(this);const r=(n=document.getElementById("radarChart"))==null?void 0:n.getContext("2d"),e=(s=document.getElementById("barChart"))==null?void 0:s.getContext("2d"),t=(o=document.getElementById("doughnutChart"))==null?void 0:o.getContext("2d");(r||e||t)&&(this.chartManager=new NE(r,e,t,[],this.ui)),this.particles=new jE("particles-canvas"),this.auth=new VE(async a=>{a?(this.ui.hideAuth(),this.storage=new kE(this.config.storageKey,a.uid,this.ui),this.state=await this.storage.load(),this.roadmap.init(),this.ui.switchTab("cycle-a"),this.ui.hideLoading(),this.setupPWA()):(this.ui.showAuth(),this.ui.hideLoading())}),this.setupEventListeners()},exportData(){this.storage.exportFile(this.state),this.ui.showToast("Backup baixado com sucesso!")},importData(r){const e=r.target.files[0];e&&(this.storage.importFile(e,t=>{this.state=t,this.roadmap.checkAndRender(),this.ui.showToast("Progresso restaurado!")}),r.target.value="")},async factoryReset(){confirm("ATENÇÃO: Isso apagará TODO o seu progresso e restaurará a aplicação para o estado inicial. Deseja continuar?")&&(await this.storage.clear(),window.location.reload())},clearCache(){confirm("Deseja limpar o cache do sistema? Isso resolverá problemas de atualização ou lentidão. (Seu progresso NÃO será perdido).")&&("caches"in window&&caches.keys().then(r=>{for(const e of r)caches.delete(e)}),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(r=>{for(const e of r)e.unregister()}),this.ui.showToast("Cache limpo! Recarregando...","success"),setTimeout(()=>window.location.reload(),1500))},setupPWA(){if("serviceWorker"in navigator){const r=BE({onNeedRefresh(){const e=document.getElementById("pwa-update-toast");e&&(e.classList.remove("hidden"),e.classList.add("flex"),document.getElementById("pwa-update-btn").onclick=()=>{r(!0)},document.getElementById("pwa-close-btn").onclick=()=>{e.classList.add("hidden"),e.classList.remove("flex")})},onOfflineReady:()=>{this.ui.showToast("App pronto para uso offline!","success")}})}},setupEventListeners(){document.addEventListener("click",r=>{if(r.target.id==="stats-modal"){this.ui.closeStatsModal();return}const e=r.target.closest("[data-action]");if(!e)return;const t=e.dataset.action;if(t==="scroll-top")window.scrollTo({top:0,behavior:"smooth"});else if(t==="scroll-to")this.ui.scrollTo(e.dataset.target);else if(t==="switch-tab")this.ui.switchTab(e.dataset.tab);else if(t==="export-data")this.exportData();else if(t==="factory-reset")this.factoryReset();else if(t==="clear-cache")this.clearCache();else if(t==="download-chart")this.chartManager&&this.chartManager.downloadRadarChart();else if(t==="open-stats")this.ui.openStatsModal();else if(t==="close-stats")this.ui.closeStatsModal();else if(t==="toggle-completed")this.roadmap.toggleCompleted();else if(t==="update-subject")this.roadmap.updateSubject(e.dataset.subject,parseInt(e.dataset.amount,10),parseInt(e.dataset.max,10));else if(t==="complete-subject")this.roadmap.completeSubject(e.dataset.subject,e.dataset.name,parseInt(e.dataset.max,10));else if(t==="login"){const n=document.getElementById("auth-email").value,s=document.getElementById("auth-password").value;if(!n||!s)return this.ui.showToast("Preencha todos os campos.","error");if(n.toLowerCase()!=="jefferson.araujo@camara.leg.br")return this.ui.showToast("Acesso restrito ao administrador do sistema.","error");this.ui.showToast("Autenticando...","success"),this.auth.login(n,s).catch(o=>{console.error(o),this.ui.showToast("Erro: Credenciais inválidas.","error")})}else if(t==="register"){const n=document.getElementById("auth-email").value,s=document.getElementById("auth-password").value;if(!n||!s)return this.ui.showToast("Preencha todos os campos.","error");if(n.toLowerCase()!=="jefferson.araujo@camara.leg.br")return this.ui.showToast("Criação de conta restrita ao administrador.","error");if(s.length<6)return this.ui.showToast("A senha precisa de pelo menos 6 caracteres.","error");this.ui.showToast("Criando conta...","success"),this.auth.register(n,s).then(()=>this.ui.showToast("Conta criada com sucesso!","success")).catch(o=>{console.error(o),this.ui.showToast("Erro ao criar conta. Tente outro e-mail.","error")})}else t==="logout"&&confirm("Tem certeza que deseja sair?")&&this.auth.logout()}),document.addEventListener("change",r=>{const e=r.target.closest("[data-action]");!e||e.dataset.action!=="import-data"||this.importData(r)}),document.addEventListener("keydown",r=>{if(r.key==="Escape"){const e=document.getElementById("stats-modal");e&&!e.classList.contains("hidden")&&this.ui.closeStatsModal()}})}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{el.init()}):el.init();
