(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const nd=()=>{};var Pa={};/**
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
 */const rl=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rd=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],l=r[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,l=a?r[s+1]:0,u=s+2<r.length,d=u?r[s+2]:0,p=i>>2,_=(i&3)<<4|l>>4;let I=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(I=64)),n.push(t[p],t[_],t[I],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(rl(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):rd(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],l=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const _=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||l==null||d==null||_==null)throw new sd;const I=i<<2|l>>4;if(n.push(I),d!==64){const S=l<<4&240|d>>2;if(n.push(S),_!==64){const P=d<<6&192|_;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const id=function(r){const e=rl(r);return sl.encodeByteArray(e,!0)},Qr=function(r){return id(r).replace(/\./g,"")},il=function(r){try{return sl.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ad=()=>od().__FIREBASE_DEFAULTS__,cd=()=>{if(typeof process>"u"||typeof Pa>"u")return;const r=Pa.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ld=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&il(r[1]);return e&&JSON.parse(e)},ms=()=>{try{return nd()||ad()||cd()||ld()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ol=r=>{var e,t;return(t=(e=ms())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},ud=r=>{const e=ol(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},al=()=>{var r;return(r=ms())==null?void 0:r.config},cl=r=>{var e;return(e=ms())==null?void 0:e[`_${r}`]};/**
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
 */class hd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function dd(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Qr(JSON.stringify(t)),Qr(JSON.stringify(a)),""].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function pd(){var e;const r=(e=ms())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gd(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function _d(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yd(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ed(){return!pd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Td(){try{return typeof indexedDB=="object"}catch{return!1}}function wd(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Id="FirebaseError";class Xe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Id,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ir.prototype.create)}}class ir{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?vd(i,n):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Xe(s,l,n)}}function vd(r,e){return r.replace(Ad,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Ad=/\{\$([^}]+)}/g;function bd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(ka(i)&&ka(a)){if(!Nt(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function ka(r){return r!==null&&typeof r=="object"}/**
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
 */function or(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Mn(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Un(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Sd(r,e){const t=new Cd(r,e);return t.subscribe.bind(t)}class Cd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Rd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ni),s.error===void 0&&(s.error=ni),s.complete===void 0&&(s.complete=ni);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rd(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ni(){}/**
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
 */function ar(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ll(r){return(await fetch(r,{credentials:"include"})).ok}class xt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Pd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new hd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dd(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&a.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:kd(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kd(r){return r===kt?void 0:r}function Dd(r){return r.instantiationMode==="EAGER"}/**
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
 */class Vd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(z||(z={}));const Nd={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},xd=z.INFO,Od={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Ld=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Od[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fi{constructor(e){this.name=e,this._logLevel=xd,this._logHandler=Ld,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Md=(r,e)=>e.some(t=>r instanceof t);let Da,Va;function Ud(){return Da||(Da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fd(){return Va||(Va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,pi=new WeakMap,hl=new WeakMap,ri=new WeakMap,Bi=new WeakMap;function Bd(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(ht(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ul.set(t,r)}).catch(()=>{}),Bi.set(e,r),e}function $d(r){if(pi.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});pi.set(r,e)}let mi={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return pi.get(r);if(e==="objectStoreNames")return r.objectStoreNames||hl.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ht(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function jd(r){mi=r(mi)}function qd(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(si(this),e,...t);return hl.set(n,e.sort?e.sort():[e]),ht(n)}:Fd().includes(r)?function(...e){return r.apply(si(this),e),ht(ul.get(this))}:function(...e){return ht(r.apply(si(this),e))}}function zd(r){return typeof r=="function"?qd(r):(r instanceof IDBTransaction&&$d(r),Md(r,Ud())?new Proxy(r,mi):r)}function ht(r){if(r instanceof IDBRequest)return Bd(r);if(ri.has(r))return ri.get(r);const e=zd(r);return e!==r&&(ri.set(r,e),Bi.set(e,r)),e}const si=r=>Bi.get(r);function Hd(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),l=ht(a);return n&&a.addEventListener("upgradeneeded",u=>{n(ht(a.result),u.oldVersion,u.newVersion,ht(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Wd=["get","getKey","getAll","getAllKeys","count"],Gd=["put","add","delete","clear"],ii=new Map;function Na(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Gd.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Wd.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return ii.set(e,i),i}jd(r=>({...r,get:(e,t,n)=>Na(e,t)||r.get(e,t,n),has:(e,t)=>!!Na(e,t)||r.has(e,t)}));/**
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
 */class Kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qd(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Qd(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gi="@firebase/app",xa="0.14.11";/**
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
 */const Ke=new Fi("@firebase/app"),Yd="@firebase/app-compat",Jd="@firebase/analytics-compat",Xd="@firebase/analytics",Zd="@firebase/app-check-compat",ef="@firebase/app-check",tf="@firebase/auth",nf="@firebase/auth-compat",rf="@firebase/database",sf="@firebase/data-connect",of="@firebase/database-compat",af="@firebase/functions",cf="@firebase/functions-compat",lf="@firebase/installations",uf="@firebase/installations-compat",hf="@firebase/messaging",df="@firebase/messaging-compat",ff="@firebase/performance",pf="@firebase/performance-compat",mf="@firebase/remote-config",gf="@firebase/remote-config-compat",_f="@firebase/storage",yf="@firebase/storage-compat",Ef="@firebase/firestore",Tf="@firebase/ai",wf="@firebase/firestore-compat",If="firebase",vf="12.12.0";/**
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
 */const _i="[DEFAULT]",Af={[gi]:"fire-core",[Yd]:"fire-core-compat",[Xd]:"fire-analytics",[Jd]:"fire-analytics-compat",[ef]:"fire-app-check",[Zd]:"fire-app-check-compat",[tf]:"fire-auth",[nf]:"fire-auth-compat",[rf]:"fire-rtdb",[sf]:"fire-data-connect",[of]:"fire-rtdb-compat",[af]:"fire-fn",[cf]:"fire-fn-compat",[lf]:"fire-iid",[uf]:"fire-iid-compat",[hf]:"fire-fcm",[df]:"fire-fcm-compat",[ff]:"fire-perf",[pf]:"fire-perf-compat",[mf]:"fire-rc",[gf]:"fire-rc-compat",[_f]:"fire-gcs",[yf]:"fire-gcs-compat",[Ef]:"fire-fst",[wf]:"fire-fst-compat",[Tf]:"fire-vertex","fire-js":"fire-js",[If]:"fire-js-all"};/**
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
 */const Yr=new Map,bf=new Map,yi=new Map;function Oa(r,e){try{r.container.addComponent(e)}catch(t){Ke.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function sn(r){const e=r.name;if(yi.has(e))return Ke.debug(`There were multiple attempts to register component ${e}.`),!1;yi.set(e,r);for(const t of Yr.values())Oa(t,r);for(const t of bf.values())Oa(t,r);return!0}function $i(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ce(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Sf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new ir("app","Firebase",Sf);/**
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
 */class Cf{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=vf;function dl(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:_i,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(t||(t=al()),!t)throw dt.create("no-options");const i=Yr.get(s);if(i){if(Nt(t,i.options)&&Nt(n,i.config))return i;throw dt.create("duplicate-app",{appName:s})}const a=new Vd(s);for(const u of yi.values())a.addComponent(u);const l=new Cf(t,n,a);return Yr.set(s,l),l}function fl(r=_i){const e=Yr.get(r);if(!e&&r===_i&&al())return dl();if(!e)throw dt.create("no-app",{appName:r});return e}function ft(r,e,t){let n=Af[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ke.warn(a.join(" "));return}sn(new xt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Rf="firebase-heartbeat-database",Pf=1,Qn="firebase-heartbeat-store";let oi=null;function pl(){return oi||(oi=Hd(Rf,Pf,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Qn)}catch(t){console.warn(t)}}}}).catch(r=>{throw dt.create("idb-open",{originalErrorMessage:r.message})})),oi}async function kf(r){try{const t=(await pl()).transaction(Qn),n=await t.objectStore(Qn).get(ml(r));return await t.done,n}catch(e){if(e instanceof Xe)Ke.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ke.warn(t.message)}}}async function La(r,e){try{const n=(await pl()).transaction(Qn,"readwrite");await n.objectStore(Qn).put(e,ml(r)),await n.done}catch(t){if(t instanceof Xe)Ke.warn(t.message);else{const n=dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ke.warn(n.message)}}}function ml(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Df=1024,Vf=30;class Nf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Of(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ma();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Vf){const a=Lf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ke.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ma(),{heartbeatsToSend:n,unsentEntries:s}=xf(this._heartbeatsCache.heartbeats),i=Qr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ke.warn(t),""}}}function Ma(){return new Date().toISOString().substring(0,10)}function xf(r,e=Df){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ua(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ua(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Of{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Td()?wd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return La(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return La(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ua(r){return Qr(JSON.stringify({version:2,heartbeats:r})).length}function Lf(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function Mf(r){sn(new xt("platform-logger",e=>new Kd(e),"PRIVATE")),sn(new xt("heartbeat",e=>new Nf(e),"PRIVATE")),ft(gi,xa,r),ft(gi,xa,"esm2020"),ft("fire-js","")}Mf("");var Uf="firebase",Ff="12.12.0";/**
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
 */ft(Uf,Ff,"app");var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pt,gl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function y(){}y.prototype=m.prototype,E.F=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(w,T,A){for(var g=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)g[ve-2]=arguments[ve];return m.prototype[T].apply(w,g)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,y){y||(y=0);const w=Array(16);if(typeof m=="string")for(var T=0;T<16;++T)w[T]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(T=0;T<16;++T)w[T]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],T=E.g[2];let A=E.g[3],g;g=m+(A^y&(T^A))+w[0]+3614090360&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+w[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+w[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+w[3]+3250441966&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+w[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+w[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+w[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+w[7]+4249261313&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+w[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+w[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+w[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+w[11]+2304563134&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+w[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+w[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+w[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+w[15]+1236535329&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(T^A&(y^T))+w[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+w[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+w[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+w[0]+3921069994&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+w[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+w[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+w[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+w[4]+3889429448&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+w[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+w[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+w[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+w[8]+1163531501&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+w[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+w[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+w[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+w[12]+2368359562&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(y^T^A)+w[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+w[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+w[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+w[14]+4259657740&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+w[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+w[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+w[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+w[10]+3200236656&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+w[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+w[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+w[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+w[6]+76029189&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+w[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+w[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+w[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+w[2]+3299628645&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(T^(y|~A))+w[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+w[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+w[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+w[5]+4237533241&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+w[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+w[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+w[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+w[1]+2240044497&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+w[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+w[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+w[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+w[13]+1309151649&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+w[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+w[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+w[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.v=function(E,m){m===void 0&&(m=E.length);const y=m-this.blockSize,w=this.C;let T=this.h,A=0;for(;A<m;){if(T==0)for(;A<=y;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(w[T++]=E.charCodeAt(A++),T==this.blockSize){s(this,w),T=0;break}}else for(;A<m;)if(w[T++]=E[A++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=m},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;m=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=m&255,m/=256;for(this.v(E),E=Array(16),m=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)E[m++]=this.g[y]>>>w&255;return E};function i(E,m){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;const y=[];let w=!0;for(let T=E.length-1;T>=0;T--){const A=E[T]|0;w&&A==m||(y[T]=A,w=!1)}this.g=y}var l={};function u(E){return-128<=E&&E<128?i(E,function(m){return new a([m|0],m<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return _;if(E<0)return k(d(-E));const m=[];let y=1;for(let w=0;E>=y;w++)m[w]=E/y|0,y*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return k(p(E.substring(1),m));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(m,8));let w=_;for(let A=0;A<E.length;A+=8){var T=Math.min(8,E.length-A);const g=parseInt(E.substring(A,A+T),m);T<8?(T=d(Math.pow(m,T)),w=w.j(T).add(d(g))):(w=w.j(y),w=w.add(d(g)))}return w}var _=u(0),I=u(1),S=u(16777216);r=a.prototype,r.m=function(){if(V(this))return-k(this).m();let E=0,m=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);E+=(w>=0?w:4294967296+w)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(V(this))return"-"+k(this).toString(E);const m=d(Math.pow(E,6));var y=this;let w="";for(;;){const T=me(y,m).g;y=F(y,T.j(m));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=T,P(y))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(let m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function V(E){return E.h==-1}r.l=function(E){return E=F(this,E),V(E)?-1:P(E)?0:1};function k(E){const m=E.g.length,y=[];for(let w=0;w<m;w++)y[w]=~E.g[w];return new a(y,~E.h).add(I)}r.abs=function(){return V(this)?k(this):this},r.add=function(E){const m=Math.max(this.g.length,E.g.length),y=[];let w=0;for(let T=0;T<=m;T++){let A=w+(this.i(T)&65535)+(E.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=g>>>16,A&=65535,g&=65535,y[T]=g<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function F(E,m){return E.add(k(m))}r.j=function(E){if(P(this)||P(E))return _;if(V(this))return V(E)?k(this).j(k(E)):k(k(this).j(E));if(V(E))return k(this.j(k(E)));if(this.l(S)<0&&E.l(S)<0)return d(this.m()*E.m());const m=this.g.length+E.g.length,y=[];for(var w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<E.g.length;T++){const A=this.i(w)>>>16,g=this.i(w)&65535,ve=E.i(T)>>>16,At=E.i(T)&65535;y[2*w+2*T]+=g*At,j(y,2*w+2*T),y[2*w+2*T+1]+=A*At,j(y,2*w+2*T+1),y[2*w+2*T+1]+=g*ve,j(y,2*w+2*T+1),y[2*w+2*T+2]+=A*ve,j(y,2*w+2*T+2)}for(E=0;E<m;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=m;E<2*m;E++)y[E]=0;return new a(y,0)};function j(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function K(E,m){this.g=E,this.h=m}function me(E,m){if(P(m))throw Error("division by zero");if(P(E))return new K(_,_);if(V(E))return m=me(k(E),m),new K(k(m.g),k(m.h));if(V(m))return m=me(E,k(m)),new K(k(m.g),m.h);if(E.g.length>30){if(V(E)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var y=I,w=m;w.l(E)<=0;)y=ne(y),w=ne(w);var T=q(y,1),A=q(w,1);for(w=q(w,2),y=q(y,2);!P(w);){var g=A.add(w);g.l(E)<=0&&(T=T.add(y),A=g),w=q(w,1),y=q(y,1)}return m=F(E,T.j(m)),new K(T,m)}for(T=_;E.l(m)>=0;){for(y=Math.max(1,Math.floor(E.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=d(y),g=A.j(m);V(g)||g.l(E)>0;)y-=w,A=d(y),g=A.j(m);P(A)&&(A=I),T=T.add(A),E=F(E,g)}return new K(T,E)}r.B=function(E){return me(this,E).h},r.and=function(E){const m=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<m;w++)y[w]=this.i(w)&E.i(w);return new a(y,this.h&E.h)},r.or=function(E){const m=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<m;w++)y[w]=this.i(w)|E.i(w);return new a(y,this.h|E.h)},r.xor=function(E){const m=Math.max(this.g.length,E.g.length),y=[];for(let w=0;w<m;w++)y[w]=this.i(w)^E.i(w);return new a(y,this.h^E.h)};function ne(E){const m=E.g.length+1,y=[];for(let w=0;w<m;w++)y[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(y,E.h)}function q(E,m){const y=m>>5;m%=32;const w=E.g.length-y,T=[];for(let A=0;A<w;A++)T[A]=m>0?E.i(A+y)>>>m|E.i(A+y+1)<<32-m:E.i(A+y);return new a(T,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,gl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,pt=a}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _l,Fn,yl,Fr,Ei,El,Tl,wl;(function(){var r,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vr=="object"&&Vr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function s(o,c){if(c)e:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var v=o[f];if(!(v in h))break e;h=h[v]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function p(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function _(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,v,b){for(var D=Array(arguments.length-2),$=2;$<arguments.length;$++)D[$-2]=arguments[$];return c.prototype[v].apply(f,D)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function P(o,c){for(let f=1;f<arguments.length;f++){const v=arguments[f];var h=typeof v;if(h=h!="object"?h:v?Array.isArray(v)?"array":h:"null",h=="array"||h=="object"&&typeof v.length=="number"){h=o.length||0;const b=v.length||0;o.length=h+b;for(let D=0;D<b;D++)o[h+D]=v[D]}else o.push(v)}}class V{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(o){a.setTimeout(()=>{throw o},0)}function F(){var o=E;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class j{constructor(){this.h=this.g=null}add(c,h){const f=K.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var K=new V(()=>new me,o=>o.reset());class me{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,q=!1,E=new j,m=()=>{const o=Promise.resolve(void 0);ne=()=>{o.then(y)}};function y(){for(var o;o=F();){try{o.h.call(o.g)}catch(h){k(h)}var c=K;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}q=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function g(o){return/^[\s\xa0]*$/.test(o)}function ve(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}_(ve,T),ve.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var At="closure_listenable_"+(Math.random()*1e6|0),Ah=0;function bh(o,c,h,f,v){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=v,this.key=++Ah,this.da=this.fa=!1}function _r(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function yr(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function Sh(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function Ro(o){const c={};for(const h in o)c[h]=o[h];return c}const Po="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ko(o,c){let h,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(h in f)o[h]=f[h];for(let b=0;b<Po.length;b++)h=Po[b],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Er(o){this.src=o,this.g={},this.h=0}Er.prototype.add=function(o,c,h,f,v){const b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);const D=Ns(o,c,f,v);return D>-1?(c=o[D],h||(c.fa=!1)):(c=new bh(c,this.src,b,!!f,v),c.fa=h,o.push(c)),c};function Vs(o,c){const h=c.type;if(h in o.g){var f=o.g[h],v=Array.prototype.indexOf.call(f,c,void 0),b;(b=v>=0)&&Array.prototype.splice.call(f,v,1),b&&(_r(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ns(o,c,h,f){for(let v=0;v<o.length;++v){const b=o[v];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return v}return-1}var xs="closure_lm_"+(Math.random()*1e6|0),Os={};function Do(o,c,h,f,v){if(Array.isArray(c)){for(let b=0;b<c.length;b++)Do(o,c[b],h,f,v);return null}return h=xo(h),o&&o[At]?o.J(c,h,l(f)?!!f.capture:!1,v):Ch(o,c,h,!1,f,v)}function Ch(o,c,h,f,v,b){if(!c)throw Error("Invalid event type");const D=l(v)?!!v.capture:!!v;let $=Ms(o);if($||(o[xs]=$=new Er(o)),h=$.add(c,h,f,D,b),h.proxy)return h;if(f=Rh(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)A||(v=D),v===void 0&&(v=!1),o.addEventListener(c.toString(),f,v);else if(o.attachEvent)o.attachEvent(No(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Rh(){function o(h){return c.call(o.src,o.listener,h)}const c=Ph;return o}function Vo(o,c,h,f,v){if(Array.isArray(c))for(var b=0;b<c.length;b++)Vo(o,c[b],h,f,v);else f=l(f)?!!f.capture:!!f,h=xo(h),o&&o[At]?(o=o.i,b=String(c).toString(),b in o.g&&(c=o.g[b],h=Ns(c,h,f,v),h>-1&&(_r(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[b],o.h--)))):o&&(o=Ms(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ns(c,h,f,v)),(h=o>-1?c[o]:null)&&Ls(h))}function Ls(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[At])Vs(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(No(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Ms(c))?(Vs(h,o),h.h==0&&(h.src=null,c[xs]=null)):_r(o)}}}function No(o){return o in Os?Os[o]:Os[o]="on"+o}function Ph(o,c){if(o.da)o=!0;else{c=new ve(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&Ls(o),o=h.call(f,c)}return o}function Ms(o){return o=o[xs],o instanceof Er?o:null}var Us="__closure_events_fn_"+(Math.random()*1e9>>>0);function xo(o){return typeof o=="function"?o:(o[Us]||(o[Us]=function(c){return o.handleEvent(c)}),o[Us])}function ge(){w.call(this),this.i=new Er(this),this.M=this,this.G=null}_(ge,w),ge.prototype[At]=!0,ge.prototype.removeEventListener=function(o,c,h,f){Vo(this,o,c,h,f)};function we(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var v=c;c=new T(f,o),ko(c,v)}v=!0;let b,D;if(h)for(D=h.length-1;D>=0;D--)b=c.g=h[D],v=Tr(b,f,!0,c)&&v;if(b=c.g=o,v=Tr(b,f,!0,c)&&v,v=Tr(b,f,!1,c)&&v,h)for(D=0;D<h.length;D++)b=c.g=h[D],v=Tr(b,f,!1,c)&&v}ge.prototype.N=function(){if(ge.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)_r(h[f]);delete o.g[c],o.h--}}this.G=null},ge.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},ge.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Tr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let v=!0;for(let b=0;b<c.length;++b){const D=c[b];if(D&&!D.da&&D.capture==h){const $=D.listener,oe=D.ha||D.src;D.fa&&Vs(o.i,D),v=$.call(oe,f)!==!1&&v}}return v&&!f.defaultPrevented}function kh(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Oo(o){o.g=kh(()=>{o.g=null,o.i&&(o.i=!1,Oo(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Dh extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Oo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(o){w.call(this),this.h=o,this.g={}}_(yn,w);var Lo=[];function Mo(o){yr(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ls(c)},o),o.g={}}yn.prototype.N=function(){yn.Z.N.call(this),Mo(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fs=a.JSON.stringify,Vh=a.JSON.parse,Nh=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Uo(){}function Fo(){}var En={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Bs(){T.call(this,"d")}_(Bs,T);function $s(){T.call(this,"c")}_($s,T);var bt={},Bo=null;function wr(){return Bo=Bo||new ge}bt.Ia="serverreachability";function $o(o){T.call(this,bt.Ia,o)}_($o,T);function Tn(o){const c=wr();we(c,new $o(c))}bt.STAT_EVENT="statevent";function jo(o,c){T.call(this,bt.STAT_EVENT,o),this.stat=c}_(jo,T);function Ie(o){const c=wr();we(c,new jo(c,o))}bt.Ja="timingevent";function qo(o,c){T.call(this,bt.Ja,o),this.size=c}_(qo,T);function wn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function In(){this.g=!0}In.prototype.ua=function(){this.g=!1};function xh(o,c,h,f,v,b){o.info(function(){if(o.g)if(b){var D="",$=b.split("&");for(let Y=0;Y<$.length;Y++){var oe=$[Y].split("=");if(oe.length>1){const le=oe[0];oe=oe[1];const Oe=le.split("_");D=Oe.length>=2&&Oe[1]=="type"?D+(le+"="+oe+"&"):D+(le+"=redacted&")}}}else D=null;else D=b;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+c+`
`+h+`
`+D})}function Oh(o,c,h,f,v,b,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+c+`
`+h+`
`+b+" "+D})}function Ht(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Mh(o,h)+(f?" "+f:"")})}function Lh(o,c){o.info(function(){return"TIMEOUT: "+c})}In.prototype.info=function(){};function Mh(o,c){if(!o.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(o=0;o<b.length;o++)if(Array.isArray(b[o])){var h=b[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var v=f[0];if(v!="noop"&&v!="stop"&&v!="close")for(let D=1;D<f.length;D++)f[D]=""}}}}return Fs(b)}catch{return c}}var Ir={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ho;function js(){}_(js,Uo),js.prototype.g=function(){return new XMLHttpRequest},Ho=new js;function vn(o){return encodeURIComponent(String(o))}function Uh(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Ze(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new yn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wo}function Wo(){this.i=null,this.g="",this.h=!1}var Go={},qs={};function zs(o,c,h){o.M=1,o.A=Ar(xe(c)),o.u=h,o.R=!0,Ko(o,null)}function Ko(o,c){o.F=Date.now(),vr(o),o.B=xe(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),aa(h.i,"t",f),o.C=0,h=o.j.L,o.h=new Wo,o.g=ba(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Dh(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var v="readystatechange";Array.isArray(v)||(v&&(Lo[0]=v.toString()),v=Lo);for(let b=0;b<v.length;b++){const D=Do(h,v[b],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=o.J?Ro(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Tn(),xh(o.i,o.v,o.B,o.l,o.S,o.u)}Ze.prototype.ba=function(o){o=o.target;const c=this.O;c&&nt(o)==3?c.j():this.Y(o)},Ze.prototype.Y=function(o){try{if(o==this.g)e:{const $=nt(this.g),oe=this.g.ya(),Y=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||pa(this.g)))){this.K||$!=4||oe==7||(oe==8||Y<=0?Tn(3):Tn(2)),Hs(this);var c=this.g.ca();this.X=c;var h=Fh(this);if(this.o=c==200,Oh(this.i,this.v,this.B,this.l,this.S,$,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,v=this.g;if((f=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var b=f;break t}}b=null}if(o=b)Ht(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ws(this,o);else{this.o=!1,this.m=3,Ie(12),St(this),An(this);break e}}if(this.R){o=!0;let le;for(;!this.K&&this.C<h.length;)if(le=Bh(this,h),le==qs){$==4&&(this.m=4,Ie(14),o=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(le==Go){this.m=4,Ie(15),Ht(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Ht(this.i,this.l,le,null),Ws(this,le);if(Qo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||h.length!=0||this.h.h||(this.m=1,Ie(16),o=!1),this.o=this.o&&o,!o)Ht(this.i,this.l,h,"[Invalid Chunked Response]"),St(this),An(this);else if(h.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ei(D),D.P=!0,Ie(11))}}else Ht(this.i,this.l,h,null),Ws(this,h);$==4&&St(this),this.o&&!this.K&&($==4?wa(this.j,this):(this.o=!1,vr(this)))}else ed(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),St(this),An(this)}}}catch{}finally{}};function Fh(o){if(!Qo(o))return o.g.la();const c=pa(o.g);if(c==="")return"";let h="";const f=c.length,v=nt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return St(o),An(o),"";o.h.i=new a.TextDecoder}for(let b=0;b<f;b++)o.h.h=!0,h+=o.h.i.decode(c[b],{stream:!(v&&b==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Qo(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Bh(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?qs:(h=Number(c.substring(h,f)),isNaN(h)?Go:(f+=1,f+h>c.length?qs:(c=c.slice(f,f+h),o.C=f+h,c)))}Ze.prototype.cancel=function(){this.K=!0,St(this)};function vr(o){o.T=Date.now()+o.H,Yo(o,o.H)}function Yo(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=wn(d(o.aa,o),c)}function Hs(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ze.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Lh(this.i,this.B),this.M!=2&&(Tn(),Ie(17)),St(this),this.m=2,An(this)):Yo(this,this.T-o)};function An(o){o.j.I==0||o.K||wa(o.j,o)}function St(o){Hs(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Mo(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Ws(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||Gs(h.h,o))){if(!o.L&&Gs(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Pr(h),Cr(h);else break e;Zs(h),Ie(18)}}else h.xa=v[1],0<h.xa-h.K&&v[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=wn(d(h.Va,h),6e3));Zo(h.h)<=1&&h.ta&&(h.ta=void 0)}else Rt(h,11)}else if((o.L||h.g==o)&&Pr(h),!g(c))for(v=h.Ba.g.parse(c),c=0;c<v.length;c++){let Y=v[c];const le=Y[0];if(!(le<=h.K))if(h.K=le,Y=Y[1],h.I==2)if(Y[0]=="c"){h.M=Y[1],h.ba=Y[2];const Oe=Y[3];Oe!=null&&(h.ka=Oe,h.j.info("VER="+h.ka));const Pt=Y[4];Pt!=null&&(h.za=Pt,h.j.info("SVER="+h.za));const rt=Y[5];rt!=null&&typeof rt=="number"&&rt>0&&(f=1.5*rt,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const st=o.g;if(st){const Dr=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dr){var b=f.h;b.g||Dr.indexOf("spdy")==-1&&Dr.indexOf("quic")==-1&&Dr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ks(b,b.h),b.h=null))}if(f.G){const ti=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;ti&&(f.wa=ti,J(f.J,f.G,ti))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var D=o;if(f.na=Aa(f,f.L?f.ba:null,f.W),D.L){ea(f.h,D);var $=D,oe=f.O;oe&&($.H=oe),$.D&&(Hs($),vr($)),f.g=D}else Ea(f);h.i.length>0&&Rr(h)}else Y[0]!="stop"&&Y[0]!="close"||Rt(h,7);else h.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Rt(h,7):Xs(h):Y[0]!="noop"&&h.l&&h.l.qa(Y),h.A=0)}}Tn(4)}catch{}}var $h=class{constructor(o,c){this.g=o,this.map=c}};function Jo(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xo(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Zo(o){return o.h?1:o.g?o.g.size:0}function Gs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ks(o,c){o.g?o.g.add(c):o.h=c}function ea(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Jo.prototype.cancel=function(){if(this.i=ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ta(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jh(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let v,b=null;f>=0?(v=o[h].substring(0,f),b=o[h].substring(f+1)):v=o[h],c(v,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function et(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof et?(this.l=o.l,bn(this,o.j),this.o=o.o,this.g=o.g,Sn(this,o.u),this.h=o.h,Qs(this,ca(o.i)),this.m=o.m):o&&(c=String(o).match(na))?(this.l=!1,bn(this,c[1]||"",!0),this.o=Cn(c[2]||""),this.g=Cn(c[3]||"",!0),Sn(this,c[4]),this.h=Cn(c[5]||"",!0),Qs(this,c[6]||"",!0),this.m=Cn(c[7]||"")):(this.l=!1,this.i=new Pn(null,this.l))}et.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Rn(c,ra,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Rn(c,ra,!0),"@"),o.push(vn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Rn(h,h.charAt(0)=="/"?Hh:zh,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Rn(h,Gh)),o.join("")},et.prototype.resolve=function(o){const c=xe(this);let h=!!o.j;h?bn(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)Sn(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var v=c.h.lastIndexOf("/");v!=-1&&(f=c.h.slice(0,v+1)+f)}if(v=f,v==".."||v==".")f="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){f=v.lastIndexOf("/",0)==0,v=v.split("/");const b=[];for(let D=0;D<v.length;){const $=v[D++];$=="."?f&&D==v.length&&b.push(""):$==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),f&&D==v.length&&b.push("")):(b.push($),f=!0)}f=b.join("/")}else f=v}return h?c.h=f:h=o.i.toString()!=="",h?Qs(c,ca(o.i)):h=!!o.m,h&&(c.m=o.m),c};function xe(o){return new et(o)}function bn(o,c,h){o.j=h?Cn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Sn(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Qs(o,c,h){c instanceof Pn?(o.i=c,Kh(o.i,o.l)):(h||(c=Rn(c,Wh)),o.i=new Pn(c,o.l))}function J(o,c,h){o.i.set(c,h)}function Ar(o){return J(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Cn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,qh),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qh(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ra=/[#\/\?@]/g,zh=/[#\?:]/g,Hh=/[#\?]/g,Wh=/[#\?@]/g,Gh=/#/g;function Pn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ct(o){o.g||(o.g=new Map,o.h=0,o.i&&jh(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Pn.prototype,r.add=function(o,c){Ct(this),this.i=null,o=Wt(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function sa(o,c){Ct(o),c=Wt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ia(o,c){return Ct(o),c=Wt(o,c),o.g.has(c)}r.forEach=function(o,c){Ct(this),this.g.forEach(function(h,f){h.forEach(function(v){o.call(c,v,f,this)},this)},this)};function oa(o,c){Ct(o);let h=[];if(typeof c=="string")ia(o,c)&&(h=h.concat(o.g.get(Wt(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}r.set=function(o,c){return Ct(this),this.i=null,o=Wt(this,o),ia(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=oa(this,o),o.length>0?String(o[0]):c):c};function aa(o,c,h){sa(o,c),h.length>0&&(o.i=null,o.g.set(Wt(o,c),S(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const v=vn(h);h=oa(this,h);for(let b=0;b<h.length;b++){let D=v;h[b]!==""&&(D+="="+vn(h[b])),o.push(D)}}return this.i=o.join("&")};function ca(o){const c=new Pn;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Wt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Kh(o,c){c&&!o.j&&(Ct(o),o.i=null,o.g.forEach(function(h,f){const v=f.toLowerCase();f!=v&&(sa(this,f),aa(this,v,h))},o)),o.j=c}function Qh(o,c){const h=new In;if(a.Image){const f=new Image;f.onload=p(tt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(tt,h,"TestLoadImage: error",!1,c,f),f.onabort=p(tt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(tt,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Yh(o,c){const h=new In,f=new AbortController,v=setTimeout(()=>{f.abort(),tt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(b=>{clearTimeout(v),b.ok?tt(h,"TestPingServer: ok",!0,c):tt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),tt(h,"TestPingServer: error",!1,c)})}function tt(o,c,h,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(h)}catch{}}function Jh(){this.g=new Nh}function Ys(o){this.i=o.Sb||null,this.h=o.ab||!1}_(Ys,Uo),Ys.prototype.g=function(){return new br(this.i,this.h)};function br(o,c){ge.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(br,ge),r=br.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Dn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},r.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;la(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function la(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}r.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?kn(this):Dn(this),this.readyState==3&&la(this)}},r.Oa=function(o){this.g&&(this.response=this.responseText=o,kn(this))},r.Na=function(o){this.g&&(this.response=o,kn(this))},r.ga=function(){this.g&&kn(this)};function kn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Dn(o)}r.setRequestHeader=function(o,c){this.A.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Dn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ua(o){let c="";return yr(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Js(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ua(h),typeof o=="string"?h!=null&&vn(h):J(o,c,h))}function te(o){ge.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(te,ge);var Xh=/^https?$/i,Zh=["POST","PUT"];r=te.prototype,r.Fa=function(o){this.H=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ho.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){ha(this,b);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)h.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),v=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Zh,c,void 0)>=0)||f||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,D]of h)this.g.setRequestHeader(b,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(b){ha(this,b)}};function ha(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,da(o),Sr(o)}function da(o){o.A||(o.A=!0,we(o,"complete"),we(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,we(this,"complete"),we(this,"abort"),Sr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sr(this,!0)),te.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?fa(this):this.Xa())},r.Xa=function(){fa(this)};function fa(o){if(o.h&&typeof i<"u"){if(o.v&&nt(o)==4)setTimeout(o.Ca.bind(o),0);else if(we(o,"readystatechange"),nt(o)==4){o.h=!1;try{const b=o.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=b===0){let D=String(o.D).match(na)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),f=!Xh.test(D?D.toLowerCase():"")}h=f}if(h)we(o,"complete"),we(o,"success");else{o.o=6;try{var v=nt(o)>2?o.g.statusText:""}catch{v=""}o.l=v+" ["+o.ca()+"]",da(o)}}finally{Sr(o)}}}}function Sr(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||we(o,"ready");try{h.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function nt(o){return o.g?o.g.readyState:0}r.ca=function(){try{return nt(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Vh(c)}};function pa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ed(o){const c={};o=(o.g&&nt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(g(o[f]))continue;var h=Uh(o[f]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[v]||[];c[v]=b,b.push(h)}Sh(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function ma(o){this.za=0,this.i=[],this.j=new In,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vn("baseRetryDelayMs",5e3,o),this.Za=Vn("retryDelaySeedMs",1e4,o),this.Ta=Vn("forwardChannelMaxRetries",2,o),this.va=Vn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Jo(o&&o.concurrentRequestLimit),this.Ba=new Jh,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=ma.prototype,r.ka=8,r.I=1,r.connect=function(o,c,h,f){Ie(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Aa(this,null,this.W),Rr(this)};function Xs(o){if(ga(o),o.I==3){var c=o.V++,h=xe(o.J);if(J(h,"SID",o.M),J(h,"RID",c),J(h,"TYPE","terminate"),Nn(o,h),c=new Ze(o,o.j,c),c.M=2,c.A=Ar(xe(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=ba(c.j,null),c.g.ea(c.A)),c.F=Date.now(),vr(c)}va(o)}function Cr(o){o.g&&(ei(o),o.g.cancel(),o.g=null)}function ga(o){Cr(o),o.v&&(a.clearTimeout(o.v),o.v=null),Pr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Rr(o){if(!Xo(o.h)&&!o.m){o.m=!0;var c=o.Ea;ne||m(),q||(ne(),q=!0),E.add(c,o),o.D=0}}function td(o,c){return Zo(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=wn(d(o.Ea,o,c),Ia(o,o.D)),o.D++,!0)}r.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const v=new Ze(this,this.j,o);let b=this.o;if(this.U&&(b?(b=Ro(b),ko(b,this.U)):b=this.U),this.u!==null||this.R||(v.J=b,b=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ya(this,v,c),h=xe(this.J),J(h,"RID",o),J(h,"CVER",22),this.G&&J(h,"X-HTTP-Session-Id",this.G),Nn(this,h),b&&(this.R?c="headers="+vn(ua(b))+"&"+c:this.u&&Js(h,this.u,b)),Ks(this.h,v),this.Ra&&J(h,"TYPE","init"),this.S?(J(h,"$req",c),J(h,"SID","null"),v.U=!0,zs(v,h,null)):zs(v,h,c),this.I=2}}else this.I==3&&(o?_a(this,o):this.i.length==0||Xo(this.h)||_a(this))};function _a(o,c){var h;c?h=c.l:h=o.V++;const f=xe(o.J);J(f,"SID",o.M),J(f,"RID",h),J(f,"AID",o.K),Nn(o,f),o.u&&o.o&&Js(f,o.u,o.o),h=new Ze(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=ya(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ks(o.h,h),zs(h,f,c)}function Nn(o,c){o.H&&yr(o.H,function(h,f){J(c,f,h)}),o.l&&yr({},function(h,f){J(c,f,h)})}function ya(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var v=o.i;let $=-1;for(;;){const oe=["count="+h];$==-1?h>0?($=v[0].g,oe.push("ofs="+$)):$=0:oe.push("ofs="+$);let Y=!0;for(let le=0;le<h;le++){var b=v[le].g;const Oe=v[le].map;if(b-=$,b<0)$=Math.max(0,v[le].g-100),Y=!1;else try{b="req"+b+"_"||"";try{var D=Oe instanceof Map?Oe:Object.entries(Oe);for(const[Pt,rt]of D){let st=rt;l(rt)&&(st=Fs(rt)),oe.push(b+Pt+"="+encodeURIComponent(st))}}catch(Pt){throw oe.push(b+"type="+encodeURIComponent("_badmap")),Pt}}catch{f&&f(Oe)}}if(Y){D=oe.join("&");break e}}D=void 0}return o=o.i.splice(0,h),c.G=o,D}function Ea(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;ne||m(),q||(ne(),q=!0),E.add(c,o),o.A=0}}function Zs(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=wn(d(o.Da,o),Ia(o,o.A)),o.A++,!0)}r.Da=function(){if(this.v=null,Ta(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=wn(d(this.Wa,this),o)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),Cr(this),Ta(this))};function ei(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ta(o){o.g=new Ze(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=xe(o.na);J(c,"RID","rpc"),J(c,"SID",o.M),J(c,"AID",o.K),J(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&J(c,"TO",o.ia),J(c,"TYPE","xmlhttp"),Nn(o,c),o.u&&o.o&&Js(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ar(xe(c)),h.u=null,h.R=!0,Ko(h,o)}r.Va=function(){this.C!=null&&(this.C=null,Cr(this),Zs(this),Ie(19))};function Pr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function wa(o,c){var h=null;if(o.g==c){Pr(o),ei(o),o.g=null;var f=2}else if(Gs(o.h,c))h=c.G,ea(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var v=o.D;f=wr(),we(f,new qo(f,h)),Rr(o)}else Ea(o);else if(v=c.m,v==3||v==0&&c.X>0||!(f==1&&td(o,c)||f==2&&Zs(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),v){case 1:Rt(o,5);break;case 4:Rt(o,10);break;case 3:Rt(o,6);break;default:Rt(o,2)}}}function Ia(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Rt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const v=!f;f=new et(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bn(f,"https"),Ar(f),v?Qh(f.toString(),h):Yh(f.toString(),h)}else Ie(2);o.I=0,o.l&&o.l.pa(c),va(o),ga(o)}r.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function va(o){if(o.I=0,o.ja=[],o.l){const c=ta(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ja,c),P(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Aa(o,c,h){var f=h instanceof et?xe(h):new et(h);if(f.g!="")c&&(f.g=c+"."+f.g),Sn(f,f.u);else{var v=a.location;f=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;const b=new et(null);f&&bn(b,f),c&&(b.g=c),v&&Sn(b,v),h&&(b.h=h),f=b}return h=o.G,c=o.wa,h&&c&&J(f,h,c),J(f,"VER",o.ka),Nn(o,f),f}function ba(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new te(new Ys({ab:h})):new te(o.ma),c.Fa(o.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}r=Sa.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function kr(){}kr.prototype.g=function(o,c){return new be(o,c)};function be(o,c){ge.call(this),this.g=new ma(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!g(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Gt(this)}_(be,ge),be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){Xs(this.g)},be.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Fs(o),o=h);c.i.push(new $h(c.Ya++,o)),c.I==3&&Rr(c)},be.prototype.N=function(){this.g.l=null,delete this.j,Xs(this.g),delete this.g,be.Z.N.call(this)};function Ca(o){Bs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}_(Ca,Bs);function Ra(){$s.call(this),this.status=1}_(Ra,$s);function Gt(o){this.g=o}_(Gt,Sa),Gt.prototype.ra=function(){we(this.g,"a")},Gt.prototype.qa=function(o){we(this.g,new Ca(o))},Gt.prototype.pa=function(o){we(this.g,new Ra)},Gt.prototype.oa=function(){we(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,wl=function(){return new kr},Tl=function(){return wr()},El=bt,Ei={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ir.NO_ERROR=0,Ir.TIMEOUT=8,Ir.HTTP_ERROR=6,Fr=Ir,zo.COMPLETE="complete",yl=zo,Fo.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",ge.prototype.listen=ge.prototype.J,Fn=Fo,te.prototype.listenOnce=te.prototype.K,te.prototype.getLastError=te.prototype.Ha,te.prototype.getLastErrorCode=te.prototype.ya,te.prototype.getStatus=te.prototype.ca,te.prototype.getResponseJson=te.prototype.La,te.prototype.getResponseText=te.prototype.la,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Fa,_l=te}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let fn="12.12.0";function Bf(r){fn=r}/**
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
 */const Ot=new Fi("@firebase/firestore");function Kt(){return Ot.logLevel}function N(r,...e){if(Ot.logLevel<=z.DEBUG){const t=e.map(ji);Ot.debug(`Firestore (${fn}): ${r}`,...t)}}function Qe(r,...e){if(Ot.logLevel<=z.ERROR){const t=e.map(ji);Ot.error(`Firestore (${fn}): ${r}`,...t)}}function Lt(r,...e){if(Ot.logLevel<=z.WARN){const t=e.map(ji);Ot.warn(`Firestore (${fn}): ${r}`,...t)}}function ji(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Il(r,n,t)}function Il(r,e,t){let n=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Qe(n),new Error(n)}function Q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Il(e,s,n)}function B(r,e){return r}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Xe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $f{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class jf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qf{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string",31837,{l:n}),new vl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new ye(e)}}class zf{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Hf{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new zf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ba{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ce(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ba(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ba(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Gf(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class qi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Gf(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function H(r,e){return r<e?-1:r>e?1:0}function Ti(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return ai(s)===ai(i)?H(s,i):ai(s)?1:-1}return H(r.length,e.length)}const Kf=55296,Qf=57343;function ai(r){const e=r.charCodeAt(0);return e>=Kf&&e<=Qf}function on(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
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
 */const $a="__name__";class Le{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Le?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Le.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const n=Le.isNumericId(e),s=Le.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Le.extractNumericId(e).compare(Le.extractNumericId(t)):Ti(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pt.fromString(e.substring(4,e.length-2))}}class Z extends Le{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const Yf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends Le{construct(e,t,n){return new fe(e,t,n)}static isValidIdentifier(e){return Yf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$a}static keyField(){return new fe([$a])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new x(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(n+=l,s++):(i(),s++)}if(i(),a)throw new x(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
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
 */function Jf(r,e,t){if(!t)throw new x(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Xf(r,e,t,n){if(e===!0&&n===!0)throw new x(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ja(r){if(!O.isDocumentKey(r))throw new x(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Al(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function zi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function an(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new x(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zi(r);throw new x(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ie(r,e){const t={typeString:r};return e&&(t.value=e),t}function cr(r,e){if(!Al(r))throw new x(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new x(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const qa=-62135596800,za=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*za);return new X(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qa)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/za}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cr(e,X._jsonSchema))return new X(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:ie("string",X._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new X(0,0))}static max(){return new U(new X(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yn=-1;function Zf(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new X(t+1,0):new X(t,n));return new gt(s,O.empty(),e)}function ep(r){return new gt(r.readTime,r.key,Yn)}class gt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new gt(U.min(),O.empty(),Yn)}static max(){return new gt(U.max(),O.empty(),Yn)}}function tp(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:H(r.largestBatchId,e.largestBatchId))}/**
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
 */const np="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pn(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==np)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,n)=>{t(e)})}static reject(e){return new C((t,n)=>{n(e)})}static waitFor(e){return new C((t,n)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>n(u))}),a=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next(s=>s?C.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new C((n,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===i&&n(a)},p=>s(p))}})}static doWhile(e,t){return new C((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function sp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class gs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}gs.ce=-1;/**
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
 */const Hi=-1;function _s(r){return r==null}function Jr(r){return r===0&&1/r==-1/0}function ip(r){return typeof r=="number"&&Number.isInteger(r)&&!Jr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const bl="";function op(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ha(e)),e=ap(r.get(t),e);return Ha(e)}function ap(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case bl:t+="";break;default:t+=i}}return t}function Ha(r){return r+bl+""}/**
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
 */function Wa(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Sl(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ee{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nr(this.root,e,this.comparator,!0)}}class Nr{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??de.RED,this.left=s??de.EMPTY,this.right=i??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new de(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return de.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ce{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ga(this.data.getIterator())}getIteratorFrom(e){return new Ga(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Ga{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cl("Invalid base64 string: "+i):i}}(e);return new pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const cp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(r){if(Q(!!r,39018),typeof r=="string"){let e=0;const t=cp.exec(r);if(Q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:re(r.seconds),nanos:re(r.nanos)}}function re(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function yt(r){return typeof r=="string"?pe.fromBase64String(r):pe.fromUint8Array(r)}/**
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
 */const Rl="server_timestamp",Pl="__type__",kl="__previous_value__",Dl="__local_write_time__";function Wi(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Pl])==null?void 0:n.stringValue)===Rl}function ys(r){const e=r.mapValue.fields[kl];return Wi(e)?ys(e):e}function Jn(r){const e=_t(r.mapValue.fields[Dl].timestampValue);return new X(e.seconds,e.nanos)}/**
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
 */class lp{constructor(e,t,n,s,i,a,l,u,d,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=_}}const Xr="(default)";class Xn{constructor(e,t){this.projectId=e,this.database=t||Xr}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===Xr}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}function up(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new x(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(r.options.projectId,e)}/**
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
 */const Vl="__type__",hp="__max__",xr={mapValue:{}},Nl="__vector__",Zr="value";function Et(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Wi(r)?4:fp(r)?9007199254740991:dp(r)?10:11:M(28295,{value:r})}function qe(r,e){if(r===e)return!0;const t=Et(r);if(t!==Et(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Jn(r).isEqual(Jn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=_t(s.timestampValue),l=_t(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return yt(s.bytesValue).isEqual(yt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return re(s.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return re(s.integerValue)===re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=re(s.doubleValue),l=re(i.doubleValue);return a===l?Jr(a)===Jr(l):isNaN(a)&&isNaN(l)}return!1}(r,e);case 9:return on(r.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Wa(a)!==Wa(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!qe(a[u],l[u])))return!1;return!0}(r,e);default:return M(52216,{left:r})}}function Zn(r,e){return(r.values||[]).find(t=>qe(t,e))!==void 0}function cn(r,e){if(r===e)return 0;const t=Et(r),n=Et(e);if(t!==n)return H(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(r.booleanValue,e.booleanValue);case 2:return function(i,a){const l=re(i.integerValue||i.doubleValue),u=re(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(r,e);case 3:return Ka(r.timestampValue,e.timestampValue);case 4:return Ka(Jn(r),Jn(e));case 5:return Ti(r.stringValue,e.stringValue);case 6:return function(i,a){const l=yt(i),u=yt(a);return l.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=H(l[d],u[d]);if(p!==0)return p}return H(l.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,a){const l=H(re(i.latitude),re(a.latitude));return l!==0?l:H(re(i.longitude),re(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Qa(r.arrayValue,e.arrayValue);case 10:return function(i,a){var I,S,P,V;const l=i.fields||{},u=a.fields||{},d=(I=l[Zr])==null?void 0:I.arrayValue,p=(S=u[Zr])==null?void 0:S.arrayValue,_=H(((P=d==null?void 0:d.values)==null?void 0:P.length)||0,((V=p==null?void 0:p.values)==null?void 0:V.length)||0);return _!==0?_:Qa(d,p)}(r.mapValue,e.mapValue);case 11:return function(i,a){if(i===xr.mapValue&&a===xr.mapValue)return 0;if(i===xr.mapValue)return 1;if(a===xr.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let _=0;_<u.length&&_<p.length;++_){const I=Ti(u[_],p[_]);if(I!==0)return I;const S=cn(l[u[_]],d[p[_]]);if(S!==0)return S}return H(u.length,p.length)}(r.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function Ka(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return H(r,e);const t=_t(r),n=_t(e),s=H(t.seconds,n.seconds);return s!==0?s:H(t.nanos,n.nanos)}function Qa(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=cn(t[s],n[s]);if(i)return i}return H(t.length,n.length)}function ln(r){return wi(r)}function wi(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=_t(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return yt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=wi(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${wi(t.fields[a])}`;return s+"}"}(r.mapValue):M(61005,{value:r})}function Br(r){switch(Et(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ys(r);return e?16+Br(e):16;case 5:return 2*r.stringValue.length;case 6:return yt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Br(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Bt(n.fields,(i,a)=>{s+=i.length+Br(a)}),s}(r.mapValue);default:throw M(13486,{value:r})}}function Ii(r){return!!r&&"integerValue"in r}function Gi(r){return!!r&&"arrayValue"in r}function Ya(r){return!!r&&"nullValue"in r}function Ja(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $r(r){return!!r&&"mapValue"in r}function dp(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Vl])==null?void 0:n.stringValue)===Nl}function qn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Bt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=qn(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qn(r.arrayValue.values[t]);return e}return{...r}}function fp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===hp}/**
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!$r(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qn(t)}setAll(e){let t=fe.emptyPath(),n={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=l.popLast()}a?n[l.lastSegment()]=qn(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());$r(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];$r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Bt(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Re(qn(this.value))}}function xl(r){const e=[];return Bt(r.fields,(t,n)=>{const s=new fe([t]);if($r(n)){const i=xl(n.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new ke(e)}/**
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
 */class Ee{constructor(e,t,n,s,i,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ee(e,0,U.min(),U.min(),U.min(),Re.empty(),0)}static newFoundDocument(e,t,n,s){return new Ee(e,1,t,U.min(),n,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,U.min(),U.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,U.min(),U.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class es{constructor(e,t){this.position=e,this.inclusive=t}}function Xa(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],a=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),t.key):n=cn(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Za(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!qe(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ts{constructor(e,t="asc"){this.field=e,this.dir=t}}function pp(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Ol{}class ae extends Ol{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new gp(e,t,n):t==="array-contains"?new Ep(e,n):t==="in"?new Tp(e,n):t==="not-in"?new wp(e,n):t==="array-contains-any"?new Ip(e,n):new ae(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new _p(e,n):new yp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cn(t,this.value)):t!==null&&Et(this.value)===Et(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends Ol{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ze(e,t)}matches(e){return Ll(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ll(r){return r.op==="and"}function Ml(r){return mp(r)&&Ll(r)}function mp(r){for(const e of r.filters)if(e instanceof ze)return!1;return!0}function vi(r){if(r instanceof ae)return r.field.canonicalString()+r.op.toString()+ln(r.value);if(Ml(r))return r.filters.map(e=>vi(e)).join(",");{const e=r.filters.map(t=>vi(t)).join(",");return`${r.op}(${e})`}}function Ul(r,e){return r instanceof ae?function(n,s){return s instanceof ae&&n.op===s.op&&n.field.isEqual(s.field)&&qe(n.value,s.value)}(r,e):r instanceof ze?function(n,s){return s instanceof ze&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,l)=>i&&Ul(a,s.filters[l]),!0):!1}(r,e):void M(19439)}function Fl(r){return r instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${ln(t.value)}`}(r):r instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(Fl).join(" ,")+"}"}(r):"Filter"}class gp extends ae{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class _p extends ae{constructor(e,t){super(e,"in",t),this.keys=Bl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yp extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Bl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bl(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class Ep extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gi(t)&&Zn(t.arrayValue,this.value)}}class Tp extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zn(this.value.arrayValue,t)}}class wp extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zn(this.value.arrayValue,t)}}class Ip extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Zn(this.value.arrayValue,n))}}/**
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
 */class vp{constructor(e,t=null,n=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function ec(r,e=null,t=[],n=[],s=null,i=null,a=null){return new vp(r,e,t,n,s,i,a)}function Ki(r){const e=B(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>vi(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ln(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ln(n)).join(",")),e.Te=t}return e.Te}function Qi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!pp(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ul(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Za(r.startAt,e.startAt)&&Za(r.endAt,e.endAt)}function Ai(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Es{constructor(e,t=null,n=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Ap(r,e,t,n,s,i,a,l){return new Es(r,e,t,n,s,i,a,l)}function Yi(r){return new Es(r)}function tc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function bp(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Sp(r){return r.collectionGroup!==null}function zn(r){const e=B(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ce(fe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ts(i,n))}),t.has(fe.keyField().canonicalString())||e.Ee.push(new ts(fe.keyField(),n))}return e.Ee}function Me(r){const e=B(r);return e.Ie||(e.Ie=Cp(e,zn(r))),e.Ie}function Cp(r,e){if(r.limitType==="F")return ec(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ts(s.field,i)});const t=r.endAt?new es(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new es(r.startAt.position,r.startAt.inclusive):null;return ec(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function bi(r,e,t){return new Es(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ts(r,e){return Qi(Me(r),Me(e))&&r.limitType===e.limitType}function $l(r){return`${Ki(Me(r))}|lt:${r.limitType}`}function Qt(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Fl(s)).join(", ")}]`),_s(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ln(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ln(s)).join(",")),`Target(${n})`}(Me(r))}; limitType=${r.limitType})`}function ws(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of zn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,l,u){const d=Xa(a,l,u);return a.inclusive?d<=0:d<0}(n.startAt,zn(n),s)||n.endAt&&!function(a,l,u){const d=Xa(a,l,u);return a.inclusive?d>=0:d>0}(n.endAt,zn(n),s))}(r,e)}function Rp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function jl(r){return(e,t)=>{let n=!1;for(const s of zn(r)){const i=Pp(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Pp(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?cn(u,d):M(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
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
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Sl(this.inner)}size(){return this.innerSize}}/**
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
 */const kp=new ee(O.comparator);function Ye(){return kp}const ql=new ee(O.comparator);function Bn(...r){let e=ql;for(const t of r)e=e.insert(t.key,t);return e}function zl(r){let e=ql;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Dt(){return Hn()}function Hl(){return Hn()}function Hn(){return new $t(r=>r.toString(),(r,e)=>r.isEqual(e))}const Dp=new ee(O.comparator),Vp=new ce(O.comparator);function W(...r){let e=Vp;for(const t of r)e=e.add(t);return e}const Np=new ce(H);function xp(){return Np}/**
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
 */function Ji(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jr(e)?"-0":e}}function Wl(r){return{integerValue:""+r}}function Op(r,e){return ip(e)?Wl(e):Ji(r,e)}/**
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
 */class Is{constructor(){this._=void 0}}function Lp(r,e,t){return r instanceof ns?function(s,i){const a={fields:{[Pl]:{stringValue:Rl},[Dl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wi(i)&&(i=ys(i)),i&&(a.fields[kl]=i),{mapValue:a}}(t,e):r instanceof er?Kl(r,e):r instanceof tr?Ql(r,e):function(s,i){const a=Gl(s,i),l=nc(a)+nc(s.Ae);return Ii(a)&&Ii(s.Ae)?Wl(l):Ji(s.serializer,l)}(r,e)}function Mp(r,e,t){return r instanceof er?Kl(r,e):r instanceof tr?Ql(r,e):t}function Gl(r,e){return r instanceof rs?function(n){return Ii(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class ns extends Is{}class er extends Is{constructor(e){super(),this.elements=e}}function Kl(r,e){const t=Yl(e);for(const n of r.elements)t.some(s=>qe(s,n))||t.push(n);return{arrayValue:{values:t}}}class tr extends Is{constructor(e){super(),this.elements=e}}function Ql(r,e){let t=Yl(e);for(const n of r.elements)t=t.filter(s=>!qe(s,n));return{arrayValue:{values:t}}}class rs extends Is{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function nc(r){return re(r.integerValue||r.doubleValue)}function Yl(r){return Gi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Up(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof er&&s instanceof er||n instanceof tr&&s instanceof tr?on(n.elements,s.elements,qe):n instanceof rs&&s instanceof rs?qe(n.Ae,s.Ae):n instanceof ns&&s instanceof ns}(r.transform,e.transform)}class Fp{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jr(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class vs{}function Jl(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Xi(r.key,Ue.none()):new lr(r.key,r.data,Ue.none());{const t=r.data,n=Re.empty();let s=new ce(fe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new jt(r.key,n,new ke(s.toArray()),Ue.none())}}function Bp(r,e,t){r instanceof lr?function(s,i,a){const l=s.value.clone(),u=sc(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):r instanceof jt?function(s,i,a){if(!jr(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=sc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Xl(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Wn(r,e,t,n){return r instanceof lr?function(i,a,l,u){if(!jr(i.precondition,a))return l;const d=i.value.clone(),p=ic(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof jt?function(i,a,l,u){if(!jr(i.precondition,a))return l;const d=ic(i.fieldTransforms,u,a),p=a.data;return p.setAll(Xl(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(r,e,t,n):function(i,a,l){return jr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,e,t)}function $p(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Gl(n.transform,s||null);i!=null&&(t===null&&(t=Re.empty()),t.set(n.field,i))}return t||null}function rc(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&on(n,s,(i,a)=>Up(i,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class lr extends vs{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jt extends vs{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xl(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function sc(r,e,t){const n=new Map;Q(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const i=r[s],a=i.transform,l=e.data.field(i.field);n.set(i.field,Mp(a,l,t[s]))}return n}function ic(r,e,t){const n=new Map;for(const s of r){const i=s.transform,a=t.data.field(s.field);n.set(s.field,Lp(i,a,e))}return n}class Xi extends vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jp extends vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qp{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Bp(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Wn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Wn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Hl();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=Jl(a,l);u!==null&&n.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,n)=>rc(t,n))&&on(this.baseMutations,e.baseMutations,(t,n)=>rc(t,n))}}class Zi{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Q(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return Dp}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Zi(e,t,n,s)}}/**
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
 */class zp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var se,G;function Wp(r){switch(r){case R.OK:return M(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function Zl(r){if(r===void 0)return Qe("GRPC error has no .code"),R.UNKNOWN;switch(r){case se.OK:return R.OK;case se.CANCELLED:return R.CANCELLED;case se.UNKNOWN:return R.UNKNOWN;case se.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case se.INTERNAL:return R.INTERNAL;case se.UNAVAILABLE:return R.UNAVAILABLE;case se.UNAUTHENTICATED:return R.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case se.NOT_FOUND:return R.NOT_FOUND;case se.ALREADY_EXISTS:return R.ALREADY_EXISTS;case se.PERMISSION_DENIED:return R.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case se.ABORTED:return R.ABORTED;case se.OUT_OF_RANGE:return R.OUT_OF_RANGE;case se.UNIMPLEMENTED:return R.UNIMPLEMENTED;case se.DATA_LOSS:return R.DATA_LOSS;default:return M(39323,{code:r})}}(G=se||(se={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Gp(){return new TextEncoder}/**
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
 */const Kp=new pt([4294967295,4294967295],0);function oc(r){const e=Gp().encode(r),t=new gl;return t.update(e),new Uint8Array(t.digest())}function ac(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pt([t,n],0),new pt([s,i],0)]}class eo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new $n(`Invalid padding: ${t}`);if(n<0)throw new $n(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new $n(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new $n(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=pt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(pt.fromNumber(n)));return s.compare(Kp)===1&&(s=new pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=oc(e),[n,s]=ac(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new eo(i,s,t);return n.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=oc(e),[n,s]=ac(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class $n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class As{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,ur.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new As(U.min(),s,new ee(H),Ye(),W())}}class ur{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ur(n,t,W(),W(),W())}}/**
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
 */class qr{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class eu{constructor(e,t){this.targetId=e,this.Ce=t}}class tu{constructor(e,t,n=pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class cc{constructor(){this.ve=0,this.Fe=lc(),this.Me=pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=W(),t=W(),n=W();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:i})}}),new ur(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=lc()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Qp{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ye(),this.Je=Or(),this.He=Or(),this.Ze=new ee(H)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ai(i))if(n===0){const a=new O(i.path);this.et(t,a,Ee.newNoDocument(a,U.min()))}else Q(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=yt(n).toUint8Array()}catch(u){if(u instanceof Cl)return Lt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new eo(a,s,i)}catch(u){return Lt(u instanceof $n?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Ai(l.target)){const u=new O(l.target.path);this.Et(u).has(a)||this.It(a,u)||this.et(a,u,Ee.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let n=W();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new As(e,t,this.Ze,this.je,n);return this.je=Ye(),this.Je=Or(),this.He=Or(),this.Ze=new ee(H),s}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new cc,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ce(H),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ce(H),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new cc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Or(){return new ee(O.comparator)}function lc(){return new ee(O.comparator)}const Yp={asc:"ASCENDING",desc:"DESCENDING"},Jp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xp={and:"AND",or:"OR"};class Zp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Si(r,e){return r.useProto3Json||_s(e)?e:{value:e}}function ss(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nu(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function em(r,e){return ss(r,e.toTimestamp())}function Fe(r){return Q(!!r,49232),U.fromTimestamp(function(t){const n=_t(t);return new X(n.seconds,n.nanos)}(r))}function to(r,e){return Ci(r,e).canonicalString()}function Ci(r,e){const t=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function ru(r){const e=Z.fromString(r);return Q(cu(e),10190,{key:e.toString()}),e}function Ri(r,e){return to(r.databaseId,e.path)}function ci(r,e){const t=ru(e);if(t.get(1)!==r.databaseId.projectId)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(iu(t))}function su(r,e){return to(r.databaseId,e)}function tm(r){const e=ru(r);return e.length===4?Z.emptyPath():iu(e)}function Pi(r){return new Z(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function iu(r){return Q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function uc(r,e,t){return{name:Ri(r,e),fields:t.value.mapValue.fields}}function nm(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string",58123),pe.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pe.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?R.UNKNOWN:Zl(d.code);return new x(p,d.message||"")}(a);t=new tu(n,s,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=ci(r,n.document.name),i=Fe(n.document.updateTime),a=n.document.createTime?Fe(n.document.createTime):U.min(),l=new Re({mapValue:{fields:n.document.fields}}),u=Ee.newFoundDocument(s,i,a,l),d=n.targetIds||[],p=n.removedTargetIds||[];t=new qr(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=ci(r,n.document),i=n.readTime?Fe(n.readTime):U.min(),a=Ee.newNoDocument(s,i),l=n.removedTargetIds||[];t=new qr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=ci(r,n.document),i=n.removedTargetIds||[];t=new qr([],i,s,null)}else{if(!("filter"in e))return M(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Hp(s,i),l=n.targetId;t=new eu(l,a)}}return t}function rm(r,e){let t;if(e instanceof lr)t={update:uc(r,e.key,e.value)};else if(e instanceof Xi)t={delete:Ri(r,e.key)};else if(e instanceof jt)t={update:uc(r,e.key,e.data),updateMask:dm(e.fieldMask)};else{if(!(e instanceof jp))return M(16599,{dt:e.type});t={verify:Ri(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){const l=a.transform;if(l instanceof ns)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof tr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof rs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw M(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:em(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M(27497)}(r,e.precondition)),t}function sm(r,e){return r&&r.length>0?(Q(e!==void 0,14353),r.map(t=>function(s,i){let a=s.updateTime?Fe(s.updateTime):Fe(i);return a.isEqual(U.min())&&(a=Fe(i)),new Fp(a,s.transformResults||[])}(t,e))):[]}function im(r,e){return{documents:[su(r,e.path)]}}function om(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=su(r,s);const i=function(d){if(d.length!==0)return au(ze.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(I){return{field:Yt(I.field),direction:lm(I.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Si(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function am(r){let e=tm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Q(n===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(_){const I=ou(_);return I instanceof ze&&Ml(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(I=>function(P){return new ts(Jt(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(I))}(t.orderBy));let l=null;t.limit&&(l=function(_){let I;return I=typeof _=="object"?_.value:_,_s(I)?null:I}(t.limit));let u=null;t.startAt&&(u=function(_){const I=!!_.before,S=_.values||[];return new es(S,I)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const I=!_.before,S=_.values||[];return new es(S,I)}(t.endAt)),Ap(e,s,a,i,l,"F",u,d)}function cm(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ou(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Jt(t.unaryFilter.field);return ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jt(t.unaryFilter.field);return ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jt(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(t){return ae.create(Jt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(n=>ou(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(r):M(30097,{filter:r})}function lm(r){return Yp[r]}function um(r){return Jp[r]}function hm(r){return Xp[r]}function Yt(r){return{fieldPath:r.canonicalString()}}function Jt(r){return fe.fromServerFormat(r.fieldPath)}function au(r){return r instanceof ae?function(t){if(t.op==="=="){if(Ja(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NAN"}};if(Ya(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ja(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NAN"}};if(Ya(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(t.field),op:um(t.op),value:t.value}}}(r):r instanceof ze?function(t){const n=t.getFilters().map(s=>au(s));return n.length===1?n[0]:{compositeFilter:{op:hm(t.op),filters:n}}}(r):M(54877,{filter:r})}function dm(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function lu(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class ut{constructor(e,t,n,s,i=U.min(),a=U.min(),l=pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fm{constructor(e){this.yt=e}}function pm(r){const e=am({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?bi(e,e.limit,"L"):e}/**
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
 */class mm{constructor(){this.bn=new gm}addToCollectionParentIndex(e,t){return this.bn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(gt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(gt.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class gm{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ce(Z.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ce(Z.comparator)).toArray()}}/**
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
 */const hc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uu=41943040;class Ae{static withCacheSize(e){return new Ae(e,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Ae.DEFAULT_COLLECTION_PERCENTILE=10,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ae.DEFAULT=new Ae(uu,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ae.DISABLED=new Ae(-1,0,0);/**
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
 */const dc="LruGarbageCollector",_m=1048576;function fc([r,e],[t,n]){const s=H(r,t);return s===0?H(e,n):s}class ym{constructor(e){this.Pr=e,this.buffer=new ce(fc),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();fc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Em{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(dc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mn(t)?N(dc,"Ignoring IndexedDB error during garbage collection: ",t):await pn(t)}await this.Ar(3e5)})}}class Tm{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return C.resolve(gs.ce);const n=new ym(t);return this.Vr.forEachTarget(e,s=>n.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>n.Ir(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(hc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hc):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,s,i,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,a=Date.now(),this.nthSequenceNumber(e,s))).next(_=>(n=_,l=Date.now(),this.removeTargets(e,n,t))).next(_=>(i=_,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(_=>(d=Date.now(),Kt()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:_})))}}function wm(r,e){return new Tm(r,e)}/**
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
 */class Im{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Am{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Wn(n.mutation,s,ke.empty(),X.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,W()).next(()=>n))}getLocalViewOfDocuments(e,t,n=W()){const s=Dt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let a=Bn();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Dt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,W()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,n,s){let i=Ye();const a=Hn(),l=function(){return Hn()}();return t.forEach((u,d)=>{const p=n.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof jt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Wn(p.mutation,d,p.mutation.getFieldMask(),X.now())):a.set(d.key,ke.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new vm(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const n=Hn();let s=new ee((a,l)=>a-l),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=n.get(u)||ke.empty();p=l.applyToLocalView(d,p),n.set(u,p);const _=(s.get(l.batchId)||W()).add(u);s=s.insert(l.batchId,_)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,_=Hl();p.forEach(I=>{if(!i.has(I)){const S=Jl(t.get(I),n.get(I));S!==null&&_.set(I,S),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return C.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return bp(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):C.resolve(Dt());let l=Yn,u=i;return a.next(d=>C.forEach(d,(p,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),i.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(I=>{u=u.insert(p,I)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,W())).next(p=>({batchId:l,changes:zl(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let s=Bn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let a=Bn();return this.indexManager.getCollectionParents(e,i).next(l=>C.forEach(l,u=>{const d=function(_,I){return new Es(I,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(p=>{p.forEach((_,I)=>{a=a.insert(_,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ee.newInvalidDocument(p)))});let l=Bn();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&Wn(p.mutation,d,ke.empty(),X.now()),ws(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class bm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Fe(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:pm(s.bundledQuery),readTime:Fe(s.readTime)}}(t)),C.resolve()}}/**
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
 */class Sm{constructor(){this.overlays=new ee(O.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Dt();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const s=Dt(),i=t.length+1,a=new O(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ee((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=i.get(d.largestBatchId);p===null&&(p=Dt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Dt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return C.resolve(l)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new zp(t,n));let i=this.Lr.get(t);i===void 0&&(i=W(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}/**
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
 */class Cm{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class no{constructor(){this.kr=new ce(ue.qr),this.Kr=new ce(ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new ue(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Wr(new ue(e,t))}Qr(e,t){e.forEach(n=>this.removeReference(n,t))}Gr(e){const t=new O(new Z([])),n=new ue(t,e),s=new ue(t,e+1),i=[];return this.Kr.forEachInRange([n,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new O(new Z([])),n=new ue(t,e),s=new ue(t,e+1);let i=W();return this.Kr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ue(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ue{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return O.comparator(e.key,t.key)||H(e.Jr,t.Jr)}static Ur(e,t){return H(e.Jr,t.Jr)||O.comparator(e.key,t.key)}}/**
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
 */class Rm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ce(ue.qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qp(i,t,n,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new ue(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Hi:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ce(H);return t.forEach(s=>{const i=new ue(s,0),a=new ue(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{n=n.add(l.Jr)})}),C.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const a=new ue(new O(i),0);let l=new ce(H);return this.Hr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Jr)),!0)},a),C.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(n=>{const s=this.Zr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return C.forEach(t.mutations,s=>{const i=new ue(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new ue(t,0),s=this.Hr.firstAfterOrEqual(n);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Pm{constructor(e){this.ti=e,this.docs=function(){return new ee(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=Ye();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Ee.newInvalidDocument(s))}),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ye();const a=t.path,l=new O(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||tp(ep(p),n)<=0||(s.has(p.key)||ws(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,n,s){M(9500)}ni(e,t){return C.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new km(this)}getSize(e){return C.resolve(this.size)}}class km extends Im{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(n)}),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Dm{constructor(e){this.persistence=e,this.ri=new $t(t=>Ki(t),Qi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new no,this.targetCount=0,this.oi=un._r()}forEachTarget(e,t){return this.ri.forEach((n,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new un(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),C.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
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
 */class hu{constructor(e,t){this._i={},this.overlays={},this.ai=new gs(0),this.ui=!1,this.ui=!0,this.ci=new Cm,this.referenceDelegate=e(this),this.li=new Dm(this),this.indexManager=new mm,this.remoteDocumentCache=function(s){return new Pm(s)}(n=>this.referenceDelegate.hi(n)),this.serializer=new fm(t),this.Pi=new bm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Sm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new Rm(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const s=new Vm(this.ai.next());return this.referenceDelegate.Ti(),n(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return C.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class Vm extends rp{constructor(e){super(),this.currentSequenceNumber=e}}class ro{constructor(e){this.persistence=e,this.Ri=new no,this.Ai=null}static Vi(e){return new ro(e)}get di(){if(this.Ai)return this.Ai;throw M(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,n=>{const s=O.fromPath(n);return this.mi(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class is{constructor(e,t){this.persistence=e,this.fi=new $t(n=>op(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=wm(this,t)}static Vi(e,t){return new is(e,t)}Ti(){}Ei(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}pr(e){let t=0;return this.mr(e,n=>{t++}).next(()=>t)}mr(e,t){return C.forEach(this.fi,(n,s)=>this.wr(e,n,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(n++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Br(e.data.value)),t}wr(e,t,n){return C.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return C.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class so{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=s}static Is(e,t){let n=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new so(e,t.fromCache,n,s)}}/**
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
 */class Nm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Ed()?8:sp(Te())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Nm;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,n,s){return n.documentReadCount<this.Vs?(Kt()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(Kt()<=z.DEBUG&&N("QueryEngine","Query:",Qt(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Kt()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):C.resolve())}gs(e,t){if(tc(t))return C.resolve(null);let n=Me(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=bi(t,null,"F"),n=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const a=W(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.Ss(t,l);return this.bs(t,d,a,u.readTime)?this.gs(e,bi(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,n,s){return tc(t)||s.isEqual(U.min())?C.resolve(null):this.fs.getDocuments(e,n).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,n,s)?C.resolve(null):(Kt()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qt(t)),this.Ds(e,a,t,Zf(s,Yn)).next(l=>l))})}Ss(e,t){let n=new ce(jl(e));return t.forEach((s,i)=>{ws(e,i)&&(n=n.add(i))}),n}bs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,n){return Kt()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Qt(t)),this.fs.getDocumentsMatchingQuery(e,t,gt.min(),n)}Ds(e,t,n,s){return this.fs.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const io="LocalStore",Om=3e8;class Lm{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ee(H),this.Fs=new $t(i=>Ki(i),Qi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Am(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Mm(r,e,t,n){return new Lm(r,e,t,n)}async function du(r,e){const t=B(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],l=[];let u=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(n,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function Um(r,e){const t=B(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const _=d.batch,I=_.keys();let S=C.resolve();return I.forEach(P=>{S=S.next(()=>p.getEntry(u,P)).next(V=>{const k=d.docVersions.get(P);Q(k!==null,48541),V.version.compareTo(k)<0&&(_.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,_))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let u=W();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function fu(r){const e=B(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Fm(r,e){const t=B(r),n=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((p,_)=>{const I=s.get(_);if(!I)return;l.push(t.li.removeMatchingKeys(i,p.removedDocuments,_).next(()=>t.li.addMatchingKeys(i,p.addedDocuments,_)));let S=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?S=S.withResumeToken(pe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,n)),s=s.insert(_,S),function(V,k,F){return V.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Om?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(I,S,p)&&l.push(t.li.updateTargetData(i,S))});let u=Ye(),d=W();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(Bm(i,a,e.documentUpdates).next(p=>{u=p.Bs,d=p.Ls})),!n.isEqual(U.min())){const p=t.li.getLastRemoteSnapshotVersion(i).next(_=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(p)}return C.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=s,i))}function Bm(r,e,t){let n=W(),s=W();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let a=Ye();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):N(io,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function $m(r,e){const t=B(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Hi),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function jm(r,e){const t=B(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.li.getTargetData(n,e).next(i=>i?(s=i,C.resolve(s)):t.li.allocateTargetId(n).next(a=>(s=new ut(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n})}async function ki(r,e,t){const n=B(r),s=n.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!mn(a))throw a;N(io,`Failed to update sequence numbers for target ${e}: ${a}`)}n.vs=n.vs.remove(e),n.Fs.delete(s.target)}function pc(r,e,t){const n=B(r);let s=U.min(),i=W();return n.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const _=B(u),I=_.Fs.get(p);return I!==void 0?C.resolve(_.vs.get(I)):_.li.getTargetData(d,p)}(n,a,Me(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>n.Cs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:W())).next(l=>(qm(n,Rp(e),l),{documents:l,ks:i})))}function qm(r,e,t){let n=r.Ms.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Ms.set(e,n)}class mc{constructor(){this.activeTargetIds=xp()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zm{constructor(){this.vo=new mc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new mc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Hm{Mo(e){}shutdown(){}}/**
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
 */const gc="ConnectivityMonitor";class _c{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(gc,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(gc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lr=null;function Di(){return Lr===null?Lr=function(){return 268435456+Math.round(2147483648*Math.random())}():Lr++,"0x"+Lr.toString(16)}/**
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
 */const li="RestConnection",Wm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Gm{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===Xr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,i){const a=Di(),l=this.Qo(e,t.toUriEncodedString());N(li,`Sending RPC '${e}' ${a}:`,l,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:d}=new URL(l),p=ar(d);return this.zo(e,l,u,n,p).then(_=>(N(li,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Lt(li,`RPC '${e}' ${a} failed with error: `,_,"url: ",l,"request:",n),_})}jo(e,t,n,s,i,a){return this.Wo(e,t,n,s,i)}Go(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const n=Wm[e];let s=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Km{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const _e="WebChannelConnection",xn=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class Zt extends Gm{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zt.c_){const e=Tl();xn(e,El.STAT_EVENT,t=>{t.stat===Ei.PROXY?N(_e,"STAT_EVENT: detected buffering proxy"):t.stat===Ei.NOPROXY&&N(_e,"STAT_EVENT: detected no buffering proxy")}),Zt.c_=!0}}zo(e,t,n,s,i){const a=Di();return new Promise((l,u)=>{const d=new _l;d.setWithCredentials(!0),d.listenOnce(yl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Fr.NO_ERROR:const _=d.getResponseJson();N(_e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),l(_);break;case Fr.TIMEOUT:N(_e,`RPC '${e}' ${a} timed out`),u(new x(R.DEADLINE_EXCEEDED,"Request time out"));break;case Fr.HTTP_ERROR:const I=d.getStatus();if(N(_e,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const V=function(F){const j=F.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(j)>=0?j:R.UNKNOWN}(P.status);u(new x(V,P.message))}else u(new x(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new x(R.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(_e,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);N(_e,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,n,15)})}T_(e,t,n){const s=Di(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const d=i.join("");N(_e,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.E_(p);let _=!1,I=!1;const S=new Km({Jo:P=>{I?N(_e,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(_||(N(_e,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),N(_e,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Ho:()=>p.close()});return xn(p,Fn.EventType.OPEN,()=>{I||(N(_e,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),xn(p,Fn.EventType.CLOSE,()=>{I||(I=!0,N(_e,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.I_(p))}),xn(p,Fn.EventType.ERROR,P=>{I||(I=!0,Lt(_e,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),S.o_(new x(R.UNAVAILABLE,"The operation could not be completed")))}),xn(p,Fn.EventType.MESSAGE,P=>{var V;if(!I){const k=P.data[0];Q(!!k,16349);const F=k,j=(F==null?void 0:F.error)||((V=F[0])==null?void 0:V.error);if(j){N(_e,`RPC '${e}' stream ${s} received error:`,j);const K=j.status;let me=function(E){const m=se[E];if(m!==void 0)return Zl(m)}(K),ne=j.message;K==="NOT_FOUND"&&ne.includes("database")&&ne.includes("does not exist")&&ne.includes(this.databaseId.database)&&Lt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),me===void 0&&(me=R.INTERNAL,ne="Unknown error status: "+K+" with message "+j.message),I=!0,S.o_(new x(me,ne)),p.close()}else N(_e,`RPC '${e}' stream ${s} received:`,k),S.__(k)}}),Zt.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wl()}}/**
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
 */function Qm(r){return new Zt(r)}function ui(){return typeof document<"u"?document:null}/**
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
 */function bs(r){return new Zp(r,!0)}/**
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
 */Zt.c_=!1;class pu{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const yc="PersistentStream";class mu{constructor(e,t,n,s,i,a,l,u){this.Ci=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Qe(t.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new x(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return N(yc,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(N(yc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ym extends mu{constructor(e,t,n,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=nm(this.serializer,e),n=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Fe(a.readTime):U.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Pi(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Ai(u)?{documents:im(i,u)}:{query:om(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=nu(i,a.resumeToken);const d=Si(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=ss(i,a.snapshotVersion.toTimestamp());const d=Si(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const n=cm(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=Pi(this.serializer),t.removeTarget=e,this.q_(t)}}class Jm extends mu{constructor(e,t,n,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=sm(e.writeResults,e.commitTime),n=Fe(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Pi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>rm(this.serializer,n))};this.q_(t)}}/**
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
 */class Xm{}class Zm extends Xm{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Ci(t,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(R.UNKNOWN,i.toString())})}jo(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Ci(t,n),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(R.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function eg(r,e,t,n){return new Zm(r,e,t,n)}class tg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qe(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Mt="RemoteStore";class ng{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{n.enqueueAndForget(async()=>{qt(this)&&(N(Mt,"Restarting streams for network reachability change."),await async function(u){const d=B(u);d.Ia.add(4),await hr(d),d.Va.set("Unknown"),d.Ia.delete(4),await Ss(d)}(this))})}),this.Va=new tg(n,s)}}async function Ss(r){if(qt(r))for(const e of r.Ra)await e(!0)}async function hr(r){for(const e of r.Ra)await e(!1)}function gu(r,e){const t=B(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),lo(t)?co(t):gn(t).O_()&&ao(t,e))}function oo(r,e){const t=B(r),n=gn(t);t.Ea.delete(e),n.O_()&&_u(t,e),t.Ea.size===0&&(n.O_()?n.L_():qt(t)&&t.Va.set("Unknown"))}function ao(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gn(r).Z_(e)}function _u(r,e){r.da.$e(e),gn(r).X_(e)}function co(r){r.da=new Qp({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),gn(r).start(),r.Va.ua()}function lo(r){return qt(r)&&!gn(r).x_()&&r.Ea.size>0}function qt(r){return B(r).Ia.size===0}function yu(r){r.da=void 0}async function rg(r){r.Va.set("Online")}async function sg(r){r.Ea.forEach((e,t)=>{ao(r,e)})}async function ig(r,e){yu(r),lo(r)?(r.Va.ha(e),co(r)):r.Va.set("Unknown")}async function og(r,e,t){if(r.Va.set("Online"),e instanceof tu&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(r,e)}catch(n){N(Mt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await os(r,n)}else if(e instanceof qr?r.da.Xe(e):e instanceof eu?r.da.st(e):r.da.tt(e),!t.isEqual(U.min()))try{const n=await fu(r.localStore);t.compareTo(n)>=0&&await function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ea.get(d);p&&i.Ea.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=i.Ea.get(u);if(!p)return;i.Ea.set(u,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),_u(i,u);const _=new ut(p.target,u,d,p.sequenceNumber);ao(i,_)}),i.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){N(Mt,"Failed to raise snapshot:",n),await os(r,n)}}async function os(r,e,t){if(!mn(e))throw e;r.Ia.add(1),await hr(r),r.Va.set("Offline"),t||(t=()=>fu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(Mt,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Ss(r)})}function Eu(r,e){return e().catch(t=>os(r,t,e))}async function Cs(r){const e=B(r),t=Tt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hi;for(;ag(e);)try{const s=await $m(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,cg(e,s)}catch(s){await os(e,s)}Tu(e)&&wu(e)}function ag(r){return qt(r)&&r.Ta.length<10}function cg(r,e){r.Ta.push(e);const t=Tt(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function Tu(r){return qt(r)&&!Tt(r).x_()&&r.Ta.length>0}function wu(r){Tt(r).start()}async function lg(r){Tt(r).ra()}async function ug(r){const e=Tt(r);for(const t of r.Ta)e.ea(t.mutations)}async function hg(r,e,t){const n=r.Ta.shift(),s=Zi.from(n,e,t);await Eu(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Cs(r)}async function dg(r,e){e&&Tt(r).Y_&&await async function(n,s){if(function(a){return Wp(a)&&a!==R.ABORTED}(s.code)){const i=n.Ta.shift();Tt(n).B_(),await Eu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Cs(n)}}(r,e),Tu(r)&&wu(r)}async function Ec(r,e){const t=B(r);t.asyncQueue.verifyOperationInProgress(),N(Mt,"RemoteStore received new credentials");const n=qt(t);t.Ia.add(3),await hr(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ss(t)}async function fg(r,e){const t=B(r);e?(t.Ia.delete(2),await Ss(t)):e||(t.Ia.add(2),await hr(t),t.Va.set("Unknown"))}function gn(r){return r.ma||(r.ma=function(t,n,s){const i=B(t);return i.sa(),new Ym(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Zo:rg.bind(null,r),Yo:sg.bind(null,r),t_:ig.bind(null,r),H_:og.bind(null,r)}),r.Ra.push(async e=>{e?(r.ma.B_(),lo(r)?co(r):r.Va.set("Unknown")):(await r.ma.stop(),yu(r))})),r.ma}function Tt(r){return r.fa||(r.fa=function(t,n,s){const i=B(t);return i.sa(),new Jm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:lg.bind(null,r),t_:dg.bind(null,r),ta:ug.bind(null,r),na:hg.bind(null,r)}),r.Ra.push(async e=>{e?(r.fa.B_(),await Cs(r)):(await r.fa.stop(),r.Ta.length>0&&(N(Mt,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class uo{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const a=Date.now()+n,l=new uo(e,t,a,s,i);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(r,e){if(Qe("AsyncQueue",`${e}: ${r}`),mn(r))return new x(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class en{static emptySet(e){return new en(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=Bn(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Tc{constructor(){this.ga=new ee(O.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):M(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class hn{constructor(e,t,n,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new hn(e,t,en.emptySet(t),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ts(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class pg{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class mg{constructor(){this.queries=wc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=B(t),i=s.queries;s.queries=wc(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(n)})})(this,new x(R.ABORTED,"Firestore shutting down"))}}function wc(){return new $t(r=>$l(r),Ts)}async function gg(r,e){const t=B(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new pg,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=ho(a,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&fo(t)}async function _g(r,e){const t=B(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function yg(r,e){const t=B(r);let n=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(n=!0);a.wa=s}}n&&fo(t)}function Eg(r,e,t){const n=B(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function fo(r){r.Ca.forEach(e=>{e.next()})}var Vi,Ic;(Ic=Vi||(Vi={})).Ma="default",Ic.Cache="cache";class Tg{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new hn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vi.Cache}}/**
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
 */class Iu{constructor(e){this.key=e}}class vu{constructor(e){this.key=e}}class wg{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=W(),this.mutatedKeys=W(),this.eu=jl(e),this.tu=new en(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new Tc,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,_)=>{const I=s.get(p),S=ws(this.query,_)?_:null,P=!!I&&this.mutatedKeys.has(I.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;I&&S?I.data.isEqual(S.data)?P!==V&&(n.track({type:3,doc:S}),k=!0):this.su(I,S)||(n.track({type:2,doc:S}),k=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(l=!0)):!I&&S?(n.track({type:0,doc:S}),k=!0):I&&!S&&(n.track({type:1,doc:I}),k=!0,(u||d)&&(l=!0)),k&&(S?(a=a.add(S),i=V?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),n.track({type:1,doc:p})}return{tu:a,iu:n,bs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,_)=>function(S,P){const V=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:k})}};return V(S)-V(P)}(p.type,_.type)||this.eu(p.doc,_.doc)),this.ou(n),s=s??!1;const l=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new hn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Tc,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=W(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))});const t=[];return e.forEach(n=>{this.Ya.has(n)||t.push(new vu(n))}),this.Ya.forEach(n=>{e.has(n)||t.push(new Iu(n))}),t}cu(e){this.Za=e.ks,this.Ya=W();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return hn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const po="SyncEngine";class Ig{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class vg{constructor(e){this.key=e,this.hu=!1}}class Ag{constructor(e,t,n,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new $t(l=>$l(l),Ts),this.Eu=new Map,this.Iu=new Set,this.Ru=new ee(O.comparator),this.Au=new Map,this.Vu=new no,this.du={},this.mu=new Map,this.fu=un.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bg(r,e,t=!0){const n=Pu(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Au(n,e,t,!0),s}async function Sg(r,e){const t=Pu(r);await Au(t,e,!0,!1)}async function Au(r,e,t,n){const s=await jm(r.localStore,Me(e)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await Cg(r,e,i,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&gu(r.remoteStore,s),l}async function Cg(r,e,t,n,s){r.pu=(_,I,S)=>async function(V,k,F,j){let K=k.view.ru(F);K.bs&&(K=await pc(V.localStore,k.query,!1).then(({documents:E})=>k.view.ru(E,K)));const me=j&&j.targetChanges.get(k.targetId),ne=j&&j.targetMismatches.get(k.targetId)!=null,q=k.view.applyChanges(K,V.isPrimaryClient,me,ne);return Ac(V,k.targetId,q.au),q.snapshot}(r,_,I,S);const i=await pc(r.localStore,e,!0),a=new wg(e,i.ks),l=a.ru(i.documents),u=ur.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=a.applyChanges(l,r.isPrimaryClient,u);Ac(r,t,d.au);const p=new Ig(e,t,a);return r.Tu.set(e,p),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),d.snapshot}async function Rg(r,e,t){const n=B(r),s=n.Tu.get(e),i=n.Eu.get(s.targetId);if(i.length>1)return n.Eu.set(s.targetId,i.filter(a=>!Ts(a,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ki(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&oo(n.remoteStore,s.targetId),Ni(n,s.targetId)}).catch(pn)):(Ni(n,s.targetId),await ki(n.localStore,s.targetId,!0))}async function Pg(r,e){const t=B(r),n=t.Tu.get(e),s=t.Eu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),oo(t.remoteStore,n.targetId))}async function kg(r,e,t){const n=Mg(r);try{const s=await function(a,l){const u=B(a),d=X.now(),p=l.reduce((S,P)=>S.add(P.key),W());let _,I;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Ye(),V=W();return u.xs.getEntries(S,p).next(k=>{P=k,P.forEach((F,j)=>{j.isValidDocument()||(V=V.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(k=>{_=k;const F=[];for(const j of l){const K=$p(j,_.get(j.key).overlayedDocument);K!=null&&F.push(new jt(j.key,K,xl(K.value.mapValue),Ue.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,F,l)}).next(k=>{I=k;const F=k.applyToLocalDocumentSet(_,V);return u.documentOverlayCache.saveOverlays(S,k.batchId,F)})}).then(()=>({batchId:I.batchId,changes:zl(_)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.du[a.currentUser.toKey()];d||(d=new ee(H)),d=d.insert(l,u),a.du[a.currentUser.toKey()]=d}(n,s.batchId,t),await dr(n,s.changes),await Cs(n.remoteStore)}catch(s){const i=ho(s,"Failed to persist write");t.reject(i)}}async function bu(r,e){const t=B(r);try{const n=await Fm(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Q(a.hu,14607):s.removedDocuments.size>0&&(Q(a.hu,42227),a.hu=!1))}),await dr(t,n,e)}catch(n){await pn(n)}}function vc(r,e,t){const n=B(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=B(a);u.onlineState=l;let d=!1;u.queries.forEach((p,_)=>{for(const I of _.Sa)I.va(l)&&(d=!0)}),d&&fo(u)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Dg(r,e,t){const n=B(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let a=new ee(O.comparator);a=a.insert(i,Ee.newNoDocument(i,U.min()));const l=W().add(i),u=new As(U.min(),new Map,new ee(H),a,l);await bu(n,u),n.Ru=n.Ru.remove(i),n.Au.delete(e),mo(n)}else await ki(n.localStore,e,!1).then(()=>Ni(n,e,t)).catch(pn)}async function Vg(r,e){const t=B(r),n=e.batch.batchId;try{const s=await Um(t.localStore,e);Cu(t,n,null),Su(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await dr(t,s)}catch(s){await pn(s)}}async function Ng(r,e,t){const n=B(r);try{const s=await function(a,l){const u=B(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(_=>(Q(_!==null,37113),p=_.keys(),u.mutationQueue.removeMutationBatch(d,_))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(n.localStore,e);Cu(n,e,t),Su(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await dr(n,s)}catch(s){await pn(s)}}function Su(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Cu(r,e,t){const n=B(r);let s=n.du[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.du[n.currentUser.toKey()]=s}}function Ni(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Eu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach(n=>{r.Vu.containsKey(n)||Ru(r,n)})}function Ru(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(oo(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),mo(r))}function Ac(r,e,t){for(const n of t)n instanceof Iu?(r.Vu.addReference(n.key,e),xg(r,n)):n instanceof vu?(N(po,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,e),r.Vu.containsKey(n.key)||Ru(r,n.key)):M(19791,{wu:n})}function xg(r,e){const t=e.key,n=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(n)||(N(po,"New document in limbo: "+t),r.Iu.add(n),mo(r))}function mo(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new O(Z.fromString(e)),n=r.fu.next();r.Au.set(n,new vg(t)),r.Ru=r.Ru.insert(t,n),gu(r.remoteStore,new ut(Me(Yi(t.path)),n,"TargetPurposeLimboResolution",gs.ce))}}async function dr(r,e,t){const n=B(r),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((l,u)=>{a.push(n.pu(u,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const _=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){s.push(d);const _=so.Is(u.targetId,d);i.push(_)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(u,d){const p=B(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>C.forEach(d,I=>C.forEach(I.Ts,S=>p.persistence.referenceDelegate.addReference(_,I.targetId,S)).next(()=>C.forEach(I.Es,S=>p.persistence.referenceDelegate.removeReference(_,I.targetId,S)))))}catch(_){if(!mn(_))throw _;N(io,"Failed to update sequence numbers: "+_)}for(const _ of d){const I=_.targetId;if(!_.fromCache){const S=p.vs.get(I),P=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(P);p.vs=p.vs.insert(I,V)}}}(n.localStore,i))}async function Og(r,e){const t=B(r);if(!t.currentUser.isEqual(e)){N(po,"User change. New user:",e.toKey());const n=await du(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new x(R.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await dr(t,n.Ns)}}function Lg(r,e){const t=B(r),n=t.Au.get(e);if(n&&n.hu)return W().add(n.key);{let s=W();const i=t.Eu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Pu(r){const e=B(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=bu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dg.bind(null,e),e.Pu.H_=yg.bind(null,e.eventManager),e.Pu.yu=Eg.bind(null,e.eventManager),e}function Mg(r){const e=B(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ng.bind(null,e),e}class as{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Mm(this.persistence,new xm,e.initialUser,this.serializer)}Cu(e){return new hu(ro.Vi,this.serializer)}Du(e){return new zm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}as.provider={build:()=>new as};class Ug extends as{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Q(this.persistence.referenceDelegate instanceof is,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Em(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new hu(n=>is.Vi(n,t),this.serializer)}}class xi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>vc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Og.bind(null,this.syncEngine),await fg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mg}()}createDatastore(e){const t=bs(e.databaseInfo.databaseId),n=Qm(e.databaseInfo);return eg(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,a,l){return new ng(n,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>vc(this.syncEngine,t,0),function(){return _c.v()?new _c:new Hm}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,p){const _=new Ag(s,i,a,l,u,d);return p&&(_.gu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=B(s);N(Mt,"RemoteStore shutting down."),i.Ia.add(5),await hr(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}xi.provider={build:()=>new xi};/**
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
 */class Fg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const wt="FirestoreClient";class Bg{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=ye.UNAUTHENTICATED,this.clientId=qi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{N(wt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(wt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ho(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function hi(r,e){r.asyncQueue.verifyOperationInProgress(),N(wt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await du(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function bc(r,e){r.asyncQueue.verifyOperationInProgress();const t=await $g(r);N(wt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Ec(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Ec(e.remoteStore,s)),r._onlineComponents=e}async function $g(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(wt,"Using user provided OfflineComponentProvider");try{await hi(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lt("Error using user provided cache. Falling back to memory cache: "+t),await hi(r,new as)}}else N(wt,"Using default OfflineComponentProvider"),await hi(r,new Ug(void 0));return r._offlineComponents}async function ku(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(wt,"Using user provided OnlineComponentProvider"),await bc(r,r._uninitializedComponentsProvider._online)):(N(wt,"Using default OnlineComponentProvider"),await bc(r,new xi))),r._onlineComponents}function jg(r){return ku(r).then(e=>e.syncEngine)}async function qg(r){const e=await ku(r),t=e.eventManager;return t.onListen=bg.bind(null,e.syncEngine),t.onUnlisten=Rg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Sg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Pg.bind(null,e.syncEngine),t}function zg(r,e,t={}){const n=new mt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const p=new Fg({next:I=>{p.Nu(),a.enqueueAndForget(()=>_g(i,_));const S=I.docs.has(l);!S&&I.fromCache?d.reject(new x(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&u&&u.source==="server"?d.reject(new x(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),_=new Tg(Yi(l.path),p,{includeMetadataChanges:!0,qa:!0});return gg(i,_)}(await qg(r),r.asyncQueue,e,t,n)),n.promise}function Hg(r,e){const t=new mt;return r.asyncQueue.enqueueAndForget(async()=>kg(await jg(r),e,t)),t.promise}/**
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
 */function Du(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Wg="ComponentProvider",Sc=new Map;function Gg(r,e,t,n,s){return new lp(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Du(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
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
 */const Vu="firestore.googleapis.com",Cc=!0;class Rc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new x(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vu,this.ssl=Cc}else this.host=e.host,this.ssl=e.ssl??Cc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_m)throw new x(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Du(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class go{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $f;switch(n.type){case"firstParty":return new Hf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Sc.get(t);n&&(N(Wg,"Removing Datastore"),Sc.delete(t),n.terminate())}(this),Promise.resolve()}}function Kg(r,e,t,n={}){var d;r=an(r,go);const s=ar(e),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},l=`${e}:${t}`;s&&ll(`https://${l}`),i.host!==Vu&&i.host!==l&&Lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:n};if(!Nt(u,a)&&(r._setSettings(u),n.mockUserToken)){let p,_;if(typeof n.mockUserToken=="string")p=n.mockUserToken,_=ye.MOCK_USER;else{p=dd(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new x(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new ye(I)}r._authCredentials=new jf(new vl(p,_))}}/**
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
 */class _o{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new _o(this.firestore,e,this._query)}}class he{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(cr(t,he._jsonSchema))return new he(e,n||null,new O(Z.fromString(t.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:ie("string",he._jsonSchemaVersion),referencePath:ie("string")};class nr extends _o{constructor(e,t,n){super(e,t,Yi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new O(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function Qg(r,e,...t){if(r=Se(r),arguments.length===1&&(e=qi.newId()),Jf("doc","path",e),r instanceof go){const n=Z.fromString(e,...t);return ja(n),new he(r,null,new O(n))}{if(!(r instanceof he||r instanceof nr))throw new x(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(e,...t));return ja(n),new he(r.firestore,r instanceof nr?r.converter:null,new O(n))}}/**
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
 */const Pc="AsyncQueue";class kc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new pu(this,"async_queue_retry"),this._c=()=>{const n=ui();n&&N(Pc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ui();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new mt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!mn(e))throw e;N(Pc,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Qe("INTERNAL UNHANDLED ERROR: ",Dc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=uo.createAndSchedule(this,e,t,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:Dc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Dc(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Rs extends go{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new kc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kc(e),this._firestoreClient=void 0,await e}}}function Yg(r,e){const t=typeof r=="object"?r:fl(),n=typeof r=="string"?r:Xr,s=$i(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=ud("firestore");i&&Kg(s,...i)}return s}function Nu(r){if(r._terminated)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Jg(r),r._firestoreClient}function Jg(r){var n,s,i,a;const e=r._freezeSettings(),t=Gg(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Bg(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(r._componentsProvider))}/**
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
 */class Pe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pe(pe.fromBase64String(e))}catch(t){throw new x(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pe(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cr(e,Pe._jsonSchema))return Pe.fromBase64String(e.bytes)}}Pe._jsonSchemaVersion="firestore/bytes/1.0",Pe._jsonSchema={type:ie("string",Pe._jsonSchemaVersion),bytes:ie("string")};/**
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
 */class xu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ou{constructor(e){this._methodName=e}}/**
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
 */class Be{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(e){if(cr(e,Be._jsonSchema))return new Be(e.latitude,e.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:ie("string",Be._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
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
 */class Ve{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ve._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cr(e,Ve._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ve(e.vectorValues);throw new x(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ve._jsonSchemaVersion="firestore/vectorValue/1.0",Ve._jsonSchema={type:ie("string",Ve._jsonSchemaVersion),vectorValues:ie("object")};/**
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
 */const Xg=/^__.*__$/;class Zg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}}function Lu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:r})}}class yo{constructor(e,t,n,s,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new yo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return cs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Lu(this.dataSource)&&Xg.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class e_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||bs(e)}I(e,t,n,s=!1){return new yo({dataSource:e,methodName:t,targetDoc:n,path:fe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function t_(r){const e=r._freezeSettings(),t=bs(r._databaseId);return new e_(r._databaseId,!!e.ignoreUndefinedProperties,t)}function n_(r,e,t,n,s,i={}){const a=r.I(i.merge||i.mergeFields?2:0,e,t,s);Bu("Data must be an object, but it was:",a,n);const l=Uu(n,a);let u,d;if(i.merge)u=new ke(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const _ of i.mergeFields){const I=Eo(e,_,t);if(!a.contains(I))throw new x(R.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);i_(p,I)||p.push(I)}u=new ke(p),d=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,d=a.fieldTransforms;return new Zg(new Re(l),u,d)}function Mu(r,e){if(Fu(r=Se(r)))return Bu("Unsupported field value:",e,r),Uu(r,e);if(r instanceof Ou)return function(n,s){if(!Lu(s.dataSource))throw s.yc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const l of n){let u=Mu(l,s.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Op(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=X.fromDate(n);return{timestampValue:ss(s.serializer,i)}}if(n instanceof X){const i=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ss(s.serializer,i)}}if(n instanceof Be)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pe)return{bytesValue:nu(s.serializer,n._byteString)};if(n instanceof he){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:to(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ve)return function(a,l){const u=a instanceof Ve?a.toArray():a;return{mapValue:{fields:{[Vl]:{stringValue:Nl},[Zr]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.yc("VectorValues must only contain numeric values.");return Ji(l.serializer,p)})}}}}}}(n,s);if(lu(n))return n._toProto(s.serializer);throw s.yc(`Unsupported field value: ${zi(n)}`)}(r,e)}function Uu(r,e){const t={};return Sl(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(r,(n,s)=>{const i=Mu(s,e.dc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Fu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof Be||r instanceof Pe||r instanceof he||r instanceof Ou||r instanceof Ve||lu(r))}function Bu(r,e,t){if(!Fu(t)||!Al(t)){const n=zi(t);throw n==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+n)}}function Eo(r,e,t){if((e=Se(e))instanceof xu)return e._internalPath;if(typeof e=="string")return s_(r,e);throw cs("Field path arguments must be of type string or ",r,!1,void 0,t)}const r_=new RegExp("[~\\*/\\[\\]]");function s_(r,e,t){if(e.search(r_)>=0)throw cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new xu(...e.split("."))._internalPath}catch{throw cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function cs(r,e,t,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${n}`),a&&(u+=` in document ${s}`),u+=")"),new x(R.INVALID_ARGUMENT,l+r+u)}function i_(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class o_{convertValue(e,t="none"){switch(Et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bt(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[Zr].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>re(a.doubleValue));return new Ve(t)}convertGeoPoint(e){return new Be(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ys(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Jn(e));default:return null}}convertTimestamp(e){const t=_t(e);return new X(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);Q(cu(n),9688,{name:e});const s=new Xn(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(t)||Qe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class a_ extends o_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,t)}}const Vc="@firebase/firestore",Nc="4.14.0";/**
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
 */class $u{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Eo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class c_ extends $u{data(){return super.data()}}function l_(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class jn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vt extends $u{constructor(e,t,n,s,i,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Eo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vt._jsonSchema={type:ie("string",Vt._jsonSchemaVersion),bundleSource:ie("string","DocumentSnapshot"),bundleName:ie("string"),bundle:ie("string")};class zr extends Vt{data(e={}){return super.data(e)}}class Gn{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new jn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new zr(this._firestore,this._userDataWriter,n.key,n,new jn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new zr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new zr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:u_(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function u_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
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
 */Gn._jsonSchemaVersion="firestore/querySnapshot/1.0",Gn._jsonSchema={type:ie("string",Gn._jsonSchemaVersion),bundleSource:ie("string","QuerySnapshot"),bundleName:ie("string"),bundle:ie("string")};/**
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
 */function h_(r){r=an(r,he);const e=an(r.firestore,Rs),t=Nu(e);return zg(t,r._key).then(n=>p_(e,r,n))}function d_(r,e,t){r=an(r,he);const n=an(r.firestore,Rs),s=l_(r.converter,e),i=t_(n);return ju(n,[n_(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Ue.none())])}function f_(r){return ju(an(r.firestore,Rs),[new Xi(r._key,Ue.none())])}function ju(r,e){const t=Nu(r);return Hg(t,e)}function p_(r,e,t){const n=t.docs.get(e._key),s=new a_(r);return new Vt(r,s,e._key,n,new jn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Bf(dn),sn(new xt("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),l=new Rs(new qf(n.getProvider("auth-internal")),new Wf(a,n.getProvider("app-check-internal")),up(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ft(Vc,Nc,e),ft(Vc,Nc,"esm2020")})();function qu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m_=qu,zu=new ir("auth","Firebase",qu());/**
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
 */const ls=new Fi("@firebase/auth");function g_(r,...e){ls.logLevel<=z.WARN&&ls.warn(`Auth (${dn}): ${r}`,...e)}function Hr(r,...e){ls.logLevel<=z.ERROR&&ls.error(`Auth (${dn}): ${r}`,...e)}/**
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
 */function Ne(r,...e){throw To(r,...e)}function $e(r,...e){return To(r,...e)}function Hu(r,e,t){const n={...m_(),[e]:t};return new ir("auth","Firebase",n).create(e,{appName:r.name})}function Ge(r){return Hu(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function To(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return zu.create(r,...e)}function L(r,e,...t){if(!r)throw To(e,...t)}function He(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Hr(e),new Error(e)}function Je(r,e){r||He(e)}/**
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
 */function Oi(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function __(){return xc()==="http:"||xc()==="https:"}function xc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function y_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(__()||gd()||"connection"in navigator)?navigator.onLine:!0}function E_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class fr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Je(t>e,"Short delay should be less than long delay!"),this.isMobile=fd()||_d()}get(){return y_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wo(r,e){Je(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const w_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],I_=new fr(3e4,6e4);function It(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function vt(r,e,t,n,s={}){return Gu(r,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const l=or({key:r.config.apiKey,...a}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const d={method:e,headers:u,...i};return md()||(d.referrerPolicy="no-referrer"),r.emulatorConfig&&ar(r.emulatorConfig.host)&&(d.credentials="include"),Wu.fetch()(await Ku(r,r.config.apiHost,t,l),d)})}async function Gu(r,e,t){r._canInitEmulator=!1;const n={...T_,...e};try{const s=new A_(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Mr(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Mr(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw Mr(r,"user-disabled",a);const p=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hu(r,p,d);Ne(r,p)}}catch(s){if(s instanceof Xe)throw s;Ne(r,"network-request-failed",{message:String(s)})}}async function pr(r,e,t,n,s={}){const i=await vt(r,e,t,n,s);return"mfaPendingCredential"in i&&Ne(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ku(r,e,t,n){const s=`${e}${t}?${n}`,i=r,a=i.config.emulator?wo(r.config,s):`${r.config.apiScheme}://${s}`;return w_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function v_(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n($e(this.auth,"network-request-failed")),I_.get())})}}function Mr(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=$e(r,e,n);return s.customData._tokenResponse=t,s}function Oc(r){return r!==void 0&&r.enterprise!==void 0}class b_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return v_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function S_(r,e){return vt(r,"GET","/v2/recaptchaConfig",It(r,e))}/**
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
 */async function C_(r,e){return vt(r,"POST","/v1/accounts:delete",e)}async function us(r,e){return vt(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Kn(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R_(r,e=!1){const t=Se(r),n=await t.getIdToken(e),s=Io(n);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Kn(di(s.auth_time)),issuedAtTime:Kn(di(s.iat)),expirationTime:Kn(di(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function di(r){return Number(r)*1e3}function Io(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=il(t);return s?JSON.parse(s):(Hr("Failed to decode base64 JWT payload"),null)}catch(s){return Hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lc(r){const e=Io(r);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Xe&&P_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function P_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class k_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Li{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kn(this.lastLoginAt),this.creationTime=Kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hs(r){var _;const e=r.auth,t=await r.getIdToken(),n=await rr(r,us(e,{idToken:t}));L(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(_=s.providerUserInfo)!=null&&_.length?Qu(s.providerUserInfo):[],a=V_(r.providerData,i),l=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Li(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(r,p)}async function D_(r){const e=Se(r);await hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V_(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Qu(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function N_(r,e){const t=await Gu(r,{},async()=>{const n=or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=await Ku(r,s,"/v1/token",`key=${i}`),l=await r._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:n};return r.emulatorConfig&&ar(r.emulatorConfig.host)&&(u.credentials="include"),Wu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function x_(r,e){return vt(r,"POST","/v2/accounts:revokeToken",It(r,e))}/**
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
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=Lc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await N_(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,a=new tn;return n&&(L(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(L(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
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
 */function it(r,e){L(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class De{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new k_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Li(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return R_(this,e)}reload(){return D_(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new De({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await hs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(Ge(this.auth));const e=await this.getIdToken();return await rr(this,C_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:_,emailVerified:I,isAnonymous:S,providerData:P,stsTokenManager:V}=t;L(_&&V,e,"internal-error");const k=tn.fromJSON(this.name,V);L(typeof _=="string",e,"internal-error"),it(n,e.name),it(s,e.name),L(typeof I=="boolean",e,"internal-error"),L(typeof S=="boolean",e,"internal-error"),it(i,e.name),it(a,e.name),it(l,e.name),it(u,e.name),it(d,e.name),it(p,e.name);const F=new De({uid:_,auth:e,email:s,emailVerified:I,displayName:n,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:d,lastLoginAt:p});return P&&Array.isArray(P)&&(F.providerData=P.map(j=>({...j}))),u&&(F._redirectEventId=u),F}static async _fromIdTokenResponse(e,t,n=!1){const s=new tn;s.updateFromServerResponse(t);const i=new De({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await hs(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];L(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new tn;l.updateFromIdToken(n);const u=new De({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Li(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Mc=new Map;function We(r){Je(r instanceof Function,"Expected a class definition");let e=Mc.get(r);return e?(Je(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Mc.set(r,e),e)}/**
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
 */class Yu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yu.type="NONE";const Uc=Yu;/**
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
 */function Wr(r,e,t){return`firebase:${r}:${e}:${t}`}class nn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Wr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await us(this.auth,{idToken:e}).catch(()=>{});return t?De._fromGetAccountInfoResponse(this.auth,t,e):null}return De._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new nn(We(Uc),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||We(Uc);const a=Wr(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let _;if(typeof p=="string"){const I=await us(e,{idToken:p}).catch(()=>{});if(!I)break;_=await De._fromGetAccountInfoResponse(e,I,p)}else _=De._fromJSON(e,p);d!==i&&(l=_),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new nn(i,e,n):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new nn(i,e,n))}}/**
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
 */function Fc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ju(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nh(e))return"Blackberry";if(rh(e))return"Webos";if(Xu(e))return"Safari";if((e.includes("chrome/")||Zu(e))&&!e.includes("edge/"))return"Chrome";if(th(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ju(r=Te()){return/firefox\//i.test(r)}function Xu(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zu(r=Te()){return/crios\//i.test(r)}function eh(r=Te()){return/iemobile/i.test(r)}function th(r=Te()){return/android/i.test(r)}function nh(r=Te()){return/blackberry/i.test(r)}function rh(r=Te()){return/webos/i.test(r)}function vo(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function O_(r=Te()){var e;return vo(r)&&!!((e=window.navigator)!=null&&e.standalone)}function L_(){return yd()&&document.documentMode===10}function sh(r=Te()){return vo(r)||th(r)||rh(r)||nh(r)||/windows phone/i.test(r)||eh(r)}/**
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
 */function ih(r,e=[]){let t;switch(r){case"Browser":t=Fc(Te());break;case"Worker":t=`${Fc(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${n}`}/**
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
 */class M_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function U_(r,e={}){return vt(r,"GET","/v2/passwordPolicy",It(r,e))}/**
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
 */const F_=6;class B_{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??F_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class $_{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bc(this),this.idTokenSubscription=new Bc(this),this.beforeStateQueue=new M_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await us(this,{idToken:e}),n=await De._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ce(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(n=u.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ce(this.app))return Promise.reject(Ge(this));const t=e?Se(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(Ge(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ce(this.app)?Promise.reject(Ge(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U_(this),t=new B_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ir("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await x_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Ce(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&g_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zt(r){return Se(r)}class Bc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sd(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j_(r){Ps=r}function oh(r){return Ps.loadJS(r)}function q_(){return Ps.recaptchaEnterpriseScript}function z_(){return Ps.gapiScript}function H_(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class W_{constructor(){this.enterprise=new G_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class G_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const K_="recaptcha-enterprise",ah="NO_RECAPTCHA";class Q_{constructor(e){this.type=K_,this.auth=zt(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{S_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new b_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Oc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(ah)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new W_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{n(this.auth).then(l=>{if(!t&&Oc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=q_();u.length!==0&&(u+=l),oh(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function $c(r,e,t,n=!1,s=!1){const i=new Q_(r);let a;if(s)a=ah;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Mi(r,e,t,n,s){var i;if((i=r._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await $c(r,e,t,t==="getOobCode");return n(r,a)}else return n(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await $c(r,e,t,t==="getOobCode");return n(r,l)}else return Promise.reject(a)})}/**
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
 */function Y_(r,e){const t=$i(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Nt(i,e??{}))return s;Ne(s,"already-initialized")}return t.initialize({options:e})}function J_(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function X_(r,e,t){const n=zt(r);L(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=ch(e),{host:a,port:l}=Z_(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){L(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),L(Nt(d,n.config.emulator)&&Nt(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,ar(a)?ll(`${i}//${a}${u}`):ey()}function ch(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Z_(r){const e=ch(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:jc(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:jc(a)}}}function jc(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ey(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ao{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,t){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}async function ty(r,e){return vt(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ny(r,e){return pr(r,"POST","/v1/accounts:signInWithPassword",It(r,e))}/**
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
 */async function ry(r,e){return pr(r,"POST","/v1/accounts:signInWithEmailLink",It(r,e))}async function sy(r,e){return pr(r,"POST","/v1/accounts:signInWithEmailLink",It(r,e))}/**
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
 */class sr extends Ao{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new sr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new sr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mi(e,t,"signInWithPassword",ny);case"emailLink":return ry(e,{email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mi(e,n,"signUpPassword",ty);case"emailLink":return sy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rn(r,e){return pr(r,"POST","/v1/accounts:signInWithIdp",It(r,e))}/**
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
 */const iy="http://localhost";class Ut extends Ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const a=new Ut(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:iy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=or(t)}return e}}/**
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
 */function oy(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ay(r){const e=Mn(Un(r)).link,t=e?Mn(Un(e)).deep_link_id:null,n=Mn(Un(r)).deep_link_id;return(n?Mn(Un(n)).link:null)||n||t||e||r}class bo{constructor(e){const t=Mn(Un(e)),n=t.apiKey??null,s=t.oobCode??null,i=oy(t.mode??null);L(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ay(e);try{return new bo(t)}catch{return null}}}/**
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
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,t){return sr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bo.parseLink(t);return L(n,"argument-error"),sr._fromEmailAndCode(e,n.code,n.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mr extends lh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ot extends mr{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
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
 */class at extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ut._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return at.credential(t,n)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
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
 */class ct extends mr{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
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
 */class lt extends mr{constructor(){super("twitter.com")}static credential(e,t){return Ut._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return lt.credential(t,n)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
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
 */async function cy(r,e){return pr(r,"POST","/v1/accounts:signUp",It(r,e))}/**
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
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await De._fromIdTokenResponse(e,n,s),a=qc(n);return new Ft({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=qc(n);return new Ft({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function qc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ds extends Xe{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ds.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ds(e,t,n,s)}}function uh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ds._fromErrorAndOperation(r,i,e,n):i})}async function ly(r,e,t=!1){const n=await rr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ft._forOperation(r,"link",n)}/**
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
 */async function uy(r,e,t=!1){const{auth:n}=r;if(Ce(n.app))return Promise.reject(Ge(n));const s="reauthenticate";try{const i=await rr(r,uh(n,s,e,r),t);L(i.idToken,n,"internal-error");const a=Io(i.idToken);L(a,n,"internal-error");const{sub:l}=a;return L(r.uid===l,n,"user-mismatch"),Ft._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ne(n,"user-mismatch"),i}}/**
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
 */async function hh(r,e,t=!1){if(Ce(r.app))return Promise.reject(Ge(r));const n="signIn",s=await uh(r,n,e),i=await Ft._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function hy(r,e){return hh(zt(r),e)}/**
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
 */async function dh(r){const e=zt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dy(r,e,t){if(Ce(r.app))return Promise.reject(Ge(r));const n=zt(r),a=await Mi(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cy).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dh(r),u}),l=await Ft._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(l.user),l}function fy(r,e,t){return Ce(r.app)?Promise.reject(Ge(r)):hy(Se(r),_n.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&dh(r),n})}function py(r,e,t,n){return Se(r).onIdTokenChanged(e,t,n)}function my(r,e,t){return Se(r).beforeAuthStateChanged(e,t)}function gy(r,e,t,n){return Se(r).onAuthStateChanged(e,t,n)}function _y(r){return Se(r).signOut()}const fs="__sak";/**
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
 */class fh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fs,"1"),this.storage.removeItem(fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yy=1e3,Ey=10;class ph extends fh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);L_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ey):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ph.type="LOCAL";const Ty=ph;/**
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
 */class mh extends fh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mh.type="SESSION";const gh=mh;/**
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
 */function wy(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ks(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await wy(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ks.receivers=[];/**
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
 */function So(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=So("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(_){const I=_;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(I.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function je(){return window}function vy(r){je().location.href=r}/**
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
 */function _h(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Ay(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function by(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Sy(){return _h()?self:null}/**
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
 */const yh="firebaseLocalStorageDb",Cy=1,ps="firebaseLocalStorage",Eh="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ds(r,e){return r.transaction([ps],e?"readwrite":"readonly").objectStore(ps)}function Ry(){const r=indexedDB.deleteDatabase(yh);return new gr(r).toPromise()}function Ui(){const r=indexedDB.open(yh,Cy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(ps,{keyPath:Eh})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(ps)?e(n):(n.close(),await Ry(),e(await Ui()))})})}async function zc(r,e,t){const n=Ds(r,!0).put({[Eh]:e,value:t});return new gr(n).toPromise()}async function Py(r,e){const t=Ds(r,!1).get(e),n=await new gr(t).toPromise();return n===void 0?null:n.value}function Hc(r,e){const t=Ds(r,!0).delete(e);return new gr(t).toPromise()}const ky=800,Dy=3;class Th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ui(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Dy)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _h()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ks._getInstance(Sy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Ay(),!this.activeServiceWorker)return;this.sender=new Iy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||by()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ui();return await zc(e,fs,"1"),await Hc(e,fs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Py(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ds(s,!1).getAll();return new gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ky)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Th.type="LOCAL";const Vy=Th;new fr(3e4,6e4);/**
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
 */function Ny(r,e){return e?We(e):(L(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Co extends Ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xy(r){return hh(r.auth,new Co(r),r.bypassAuthState)}function Oy(r){const{auth:e,user:t}=r;return L(t,e,"internal-error"),uy(t,new Co(r),r.bypassAuthState)}async function Ly(r){const{auth:e,user:t}=r;return L(t,e,"internal-error"),ly(t,new Co(r),r.bypassAuthState)}/**
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
 */class wh{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xy;case"linkViaPopup":case"linkViaRedirect":return Ly;case"reauthViaPopup":case"reauthViaRedirect":return Oy;default:Ne(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const My=new fr(2e3,1e4);class Xt extends wh{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=So();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,My.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const Uy="pendingRedirect",Gr=new Map;class Fy extends wh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const n=await By(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function By(r,e){const t=qy(e),n=jy(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function $y(r,e){Gr.set(r._key(),e)}function jy(r){return We(r._redirectPersistence)}function qy(r){return Wr(Uy,r.config.apiKey,r.name)}async function zy(r,e,t=!1){if(Ce(r.app))return Promise.reject(Ge(r));const n=zt(r),s=Ny(n,e),a=await new Fy(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Hy=10*60*1e3;class Wy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ih(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError($e(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wc(e))}saveEventToCache(e){this.cachedEventUids.add(Wc(e)),this.lastProcessedEventTime=Date.now()}}function Wc(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Ih({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gy(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ih(r);default:return!1}}/**
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
 */async function Ky(r,e={}){return vt(r,"GET","/v1/projects",e)}/**
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
 */const Qy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yy=/^https?/;async function Jy(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Ky(r);for(const t of e)try{if(Xy(t))return}catch{}Ne(r,"unauthorized-domain")}function Xy(r){const e=Oi(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Yy.test(t))return!1;if(Qy.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Zy=new fr(3e4,6e4);function Gc(){const r=je().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function eE(r){return new Promise((e,t)=>{var s,i,a;function n(){Gc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gc(),t($e(r,"network-request-failed"))},timeout:Zy.get()})}if((i=(s=je().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=je().gapi)!=null&&a.load)n();else{const l=H_("iframefcb");return je()[l]=()=>{gapi.load?n():t($e(r,"network-request-failed"))},oh(`${z_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Kr=null,e})}let Kr=null;function tE(r){return Kr=Kr||eE(r),Kr}/**
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
 */const nE=new fr(5e3,15e3),rE="__/auth/iframe",sE="emulator/auth/iframe",iE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aE(r){const e=r.config;L(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?wo(e,sE):`https://${r.config.authDomain}/${rE}`,n={apiKey:e.apiKey,appName:r.name,v:dn},s=oE.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${or(n).slice(1)}`}async function cE(r){const e=await tE(r),t=je().gapi;return L(t,r,"internal-error"),e.open({where:document.body,url:aE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iE,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=$e(r,"network-request-failed"),l=je().setTimeout(()=>{i(a)},nE.get());function u(){je().clearTimeout(l),s(n)}n.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const lE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uE=500,hE=600,dE="_blank",fE="http://localhost";class Kc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pE(r,e,t,n=uE,s=hE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u={...lE,width:n.toString(),height:s.toString(),top:i,left:a},d=Te().toLowerCase();t&&(l=Zu(d)?dE:t),Ju(d)&&(e=e||fE,u.scrollbars="yes");const p=Object.entries(u).reduce((I,[S,P])=>`${I}${S}=${P},`,"");if(O_(d)&&l!=="_self")return mE(e||"",l),new Kc(null);const _=window.open(e||"",l,p);L(_,r,"popup-blocked");try{_.focus()}catch{}return new Kc(_)}function mE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const gE="__/auth/handler",_E="emulator/auth/handler",yE=encodeURIComponent("fac");async function Qc(r,e,t,n,s,i){L(r.config.authDomain,r,"auth-domain-config-required"),L(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:dn,eventId:s};if(e instanceof lh){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",bd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof mr){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}r.tenantId&&(a.tid=r.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await r._getAppCheckToken(),d=u?`#${yE}=${encodeURIComponent(u)}`:"";return`${EE(r)}?${or(l).slice(1)}${d}`}function EE({config:r}){return r.emulator?wo(r,_E):`https://${r.authDomain}/${gE}`}/**
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
 */const fi="webStorageSupport";class TE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gh,this._completeRedirectFn=zy,this._overrideRedirectResult=$y}async _openPopup(e,t,n,s){var a;Je((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Qc(e,t,n,Oi(),s);return pE(e,i,So())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Qc(e,t,n,Oi(),s);return vy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Je(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await cE(e),n=new Wy(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fi,{type:fi},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[fi];i!==void 0&&t(!!i),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sh()||Xu()||vo()}}const wE=TE;var Yc="@firebase/auth",Jc="1.13.0";/**
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
 */class IE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AE(r){sn(new xt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ih(r)},d=new $_(n,s,i,u);return J_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),sn(new xt("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(n=>new IE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Yc,Jc,vE(r)),ft(Yc,Jc,"esm2020")}/**
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
 */const bE=5*60,SE=cl("authIdTokenMaxAge")||bE;let Xc=null;const CE=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>SE)return;const s=t==null?void 0:t.token;Xc!==s&&(Xc=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RE(r=fl()){const e=$i(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Y_(r,{popupRedirectResolver:wE,persistence:[Vy,Ty,gh]}),n=cl("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=CE(i.toString());my(t,a,()=>a(t.currentUser)),py(t,l=>a(l))}}const s=ol("auth");return s&&X_(t,`http://${s}`),t}function PE(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}j_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=$e("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",PE().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AE("Browser");const kE={apiKey:"AIzaSyApbv5GZ6nEwN_kVNG0Gc5-OsmSzRCTUY8",authDomain:"cldf-a651b.firebaseapp.com",projectId:"cldf-a651b",storageBucket:"cldf-a651b.firebasestorage.app",messagingSenderId:"732937211804",appId:"1:732937211804:web:f55b6d81a92085991c8259"},vh=dl(kE),DE=Yg(vh),Ur=RE(vh);class VE{constructor(e,t,n){this.userId=t,this.localKey=`${e}_${t}`,this.docRef=Qg(DE,"user_progress",t),this.ui=n}async load(){const e={progress:{},phase:1};try{const n=await h_(this.docRef);if(n.exists()){const s=n.data();return localStorage.setItem(this.localKey,JSON.stringify(s)),s}}catch(n){console.warn("Modo offline ou erro ao carregar do Firestore:",n)}const t=localStorage.getItem(this.localKey);return t?JSON.parse(t):e}async save(e){localStorage.setItem(this.localKey,JSON.stringify(e)),this.ui&&this.ui.showSaving();try{await d_(this.docRef,e)}catch(t){console.error("Erro ao salvar no Firestore:",t)}finally{this.ui&&this.ui.hideSaving()}}async clear(){localStorage.removeItem(this.localKey);try{await f_(this.docRef)}catch(e){console.error("Erro ao deletar documento na nuvem",e)}}}class NE{constructor(e){this.onUserChange=e,gy(Ur,t=>{this.onUserChange(t)})}async login(e,t){return await fy(Ur,e,t)}async register(e,t){return await dy(Ur,e,t)}async logout(){await _y(Ur),window.location.reload()}}let On=null;function xE(){return On||(On=new(window.AudioContext||window.webkitAudioContext)),On.state==="suspended"&&On.resume(),On}function Ln(r={}){try{const e=xE(),t=e.createOscillator(),n=e.createGain(),s=r.type||"sine",i=r.initialGain||.05,a=r.duration||.1,l=e.currentTime;t.type=s,r.frequencies&&r.frequencies.length===1?t.frequency.setValueAtTime(r.frequencies[0],l):r.frequencies&&r.frequencies.length===2?(t.frequency.setValueAtTime(r.frequencies[0],l),t.frequency.exponentialRampToValueAtTime(r.frequencies[1],l+a)):r.frequencyTimes&&r.frequencyTimes.length>0&&r.frequencyTimes.forEach(u=>{t.frequency.setValueAtTime(u.frequency,l+u.time)}),n.gain.setValueAtTime(i,l),n.gain.exponentialRampToValueAtTime(.001,l+a),t.connect(n),n.connect(e.destination),t.start(l),t.stop(l+a)}catch{}}class OE{constructor(){this.toastContainer=document.getElementById("toast-container"),this.backToTopBtn=document.getElementById("back-to-top"),this.header=document.querySelector("header"),this.initScrollListener(),this.initNetworkListeners()}_toggleElement(e,t=!0,n={}){const s=document.getElementById(e);if(!s)return;const i=n.delay||0,a=n.child;if(t)s.classList.remove("hidden","opacity-0"),s.classList.add("flex","opacity-100"),a&&a.show&&setTimeout(()=>{const l=s.querySelector(a.selector);l&&(l.classList.remove(a.hideClasses||""),l.classList.add(a.showClasses||""))},a.delay||10);else{if(s.classList.add("opacity-0"),a&&!a.show){const l=s.querySelector(a.selector);l&&(l.classList.add(a.hideClasses||""),l.classList.remove(a.showClasses||""))}setTimeout(()=>{s.classList.add("hidden"),s.classList.remove("flex","opacity-100")},i)}}hideLoading(){this._toggleElement("loading-overlay",!1,{delay:500})}showAuth(){this._toggleElement("auth-overlay",!0)}hideAuth(){this._toggleElement("auth-overlay",!1)}showSaving(){this._toggleElement("sync-status",!0)}hideSaving(){this._toggleElement("sync-status",!1)}openStatsModal(){this._toggleElement("stats-modal",!0,{child:{show:!0,selector:":first-child",showClasses:"scale-100",hideClasses:"scale-95",delay:10}})}closeStatsModal(){this._toggleElement("stats-modal",!1,{child:{show:!1,selector:":first-child",hideClasses:"scale-95",showClasses:"scale-100"},delay:300})}initScrollListener(){let e=window.scrollY;window.addEventListener("scroll",()=>{const t=window.scrollY;t<0||t+window.innerHeight>document.documentElement.scrollHeight||(this.header&&(t>80?t>e?this.header.style.transform="translateY(-100%)":this.header.style.transform="translateY(0)":this.header.style.transform="translateY(0)"),e=t,this.backToTopBtn&&(t>400?(this.backToTopBtn.classList.remove("opacity-0","pointer-events-none","translate-y-4"),this.backToTopBtn.classList.add("opacity-100","pointer-events-auto","translate-y-0")):(this.backToTopBtn.classList.add("opacity-0","pointer-events-none","translate-y-4"),this.backToTopBtn.classList.remove("opacity-100","pointer-events-auto","translate-y-0"))))})}scrollTo(e){var n;const t=document.getElementById(e);t&&window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-(((n=this.header)==null?void 0:n.offsetHeight)??80)-16,behavior:"smooth"})}initNetworkListeners(){const e=document.getElementById("network-status-dot"),t=document.getElementById("network-status-text"),n=()=>{navigator.onLine?(e&&(e.className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_6px_#10b981]"),t&&(t.textContent="Sistema Operacional")):(e&&(e.className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_6px_#e11d48] animate-pulse"),t&&(t.textContent="Modo Offline"))};window.addEventListener("online",n),window.addEventListener("offline",n),n()}switchTab(e){["cycle-a","cycle-b","cycle-c"].forEach(t=>{const n=document.getElementById(`tab-${t}`),s=document.getElementById(`content-${t}`);!n||!s||(t===e?(n.className="w-full min-w-0 rounded-xl border border-emerald-500 bg-emerald-500/10 px-4 py-3 sm:py-4 text-center text-sm sm:text-base font-bold leading-tight text-emerald-400 shadow-sm transition-all focus:outline-none",s.classList.remove("hidden"),s.classList.add("animate-fade-in")):(n.className="w-full min-w-0 rounded-xl border border-transparent bg-transparent px-4 py-3 sm:py-4 text-center text-sm sm:text-base font-medium leading-tight text-slate-500 transition-all hover:bg-slate-800/50 hover:text-slate-300 focus:outline-none",s.classList.add("hidden"),s.classList.remove("animate-fade-in")))})}showToast(e,t="success"){if(!this.toastContainer)return;const n=document.createElement("div"),s=t==="success";n.className=`animate-toast-enter flex items-center gap-3 p-4 rounded-xl shadow-xl border backdrop-blur-md ${s?"bg-emerald-900/90 border-emerald-800 text-emerald-100":"bg-rose-900/90 border-rose-800 text-rose-100"}`,n.innerHTML=`<p class="text-sm font-semibold">${e}</p>`,this.toastContainer.appendChild(n),setTimeout(()=>{n.classList.replace("animate-toast-enter","animate-toast-leave"),setTimeout(()=>n.remove(),300)},4e3)}playBeep(){Ln({type:"sine",frequencies:[880],initialGain:.05,duration:.1})}playPowerUpSound(){Ln({type:"sine",frequencies:[200,800],initialGain:.1,duration:.3})}playSuccessSound(){Ln({type:"sine",frequencyTimes:[{frequency:523.25,time:0},{frequency:659.25,time:.1},{frequency:783.99,time:.2},{frequency:1046.5,time:.3}],initialGain:.08,duration:.8})}playTimerEndSound(){Ln({type:"triangle",frequencyTimes:[{frequency:523.25,time:0},{frequency:659.25,time:.1},{frequency:783.99,time:.2},{frequency:1046.5,time:.4}],initialGain:.08,duration:1.5})}playErrorSound(){Ln({type:"square",frequencies:[150,80],initialGain:.05,duration:.2}),document.body.classList.add("animate-shake"),setTimeout(()=>document.body.classList.remove("animate-shake"),400)}}class LE{constructor(e,t,n,s,i,a){this.radarChart=null,this.barChart=null,this.doughnutChart=null,this.lineChart=null,this.radarCtx=e,this.barCtx=t,this.doughnutCtx=n,this.lineCtx=s,this.subjects=i,this.ui=a,this.compactMediaQuery=window.matchMedia("(max-width: 639px)"),this.handleViewportChange=this.handleViewportChange.bind(this),this.colorHexMap={blue:"#2563eb",teal:"#0d9488",orange:"#ea580c",amber:"#f59e0b",emerald:"#059669",indigo:"#6366f1",violet:"#7c3aed",rose:"#e11d48",cyan:"#0891b2",fuchsia:"#c026d3"},this.META_SIMULADO=80,this.WARNING_SIMULADO=70,this._isInitialized=!1,this.bindViewportListener();const l=document.getElementById("intelligence-chart");l&&"IntersectionObserver"in window?(this.observer=new IntersectionObserver(u=>{u[0].isIntersecting&&(this._initCharts(),this.observer.disconnect())},{threshold:.1}),this.observer.observe(l)):this._initCharts()}_initCharts(){this._isInitialized||(this.init(),this._isInitialized=!0,this._pendingUpdateData&&this.update(this._pendingUpdateData.progress,this._pendingUpdateData.visibleSubjects,this._pendingUpdateData.simuladoScores))}bindViewportListener(){if(this.compactMediaQuery.addEventListener){this.compactMediaQuery.addEventListener("change",this.handleViewportChange);return}this.compactMediaQuery.addListener(this.handleViewportChange)}isCompactViewport(){return this.compactMediaQuery.matches}getLabels(){return this.subjects.map(e=>this.isCompactViewport()&&e.shortName||e.name)}getRadarPointLabelFont(){return{size:this.isCompactViewport()?10:14,weight:"bold"}}getXAxisFont(){return{size:this.isCompactViewport()?10:14}}handleViewportChange(){const e=this.getLabels();this.radarChart&&(this.radarChart.data.labels=e,this.radarChart.options.scales.r.pointLabels.font=this.getRadarPointLabelFont(),this.radarChart.update("none")),this.barChart&&(this.barChart.data.labels=e,this.barChart.options.scales.x.ticks.font=this.getXAxisFont(),this.barChart.update("none")),this.doughnutChart&&this.doughnutChart.update("none"),this.lineChart&&this.lineChart.update("none")}init(){typeof ChartDataLabels<"u"?Chart.register(ChartDataLabels):console.warn("ChartDataLabels plugin não foi carregado. Verifique se o CDN está acessível.");const e=this.getLabels(),t=this.subjects.map(n=>this.colorHexMap[n.color]||"#94a3b8");if(this.radarCtx&&(this.radarChart&&this.radarChart.destroy(),this.radarChart=new Chart(this.radarCtx,{type:"radar",data:{labels:e,datasets:[{label:"Progresso (%)",data:[],backgroundColor:"rgba(16, 185, 129, 0.25)",borderColor:"#10b981",borderWidth:4,pointBackgroundColor:t,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:t}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:1e3,easing:"easeOutQuart"},elements:{line:{tension:.3}},scales:{r:{angleLines:{color:"rgba(16, 185, 129, 0.2)"},grid:{color:"rgba(16, 185, 129, 0.2)"},pointLabels:{font:this.getRadarPointLabelFont(),color:t},ticks:{backdropColor:"transparent",color:"#94a3b8",stepSize:25,max:100,min:0,callback:n=>n+"%"}}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:n=>` Progresso: ${n.raw}% Concluído`}}}},plugins:[{id:"radar3D",beforeDatasetsDraw(n){n.ctx.save(),n.ctx.shadowColor="rgba(16, 185, 129, 0.5)",n.ctx.shadowBlur=20,n.ctx.shadowOffsetY=12},afterDatasetsDraw(n){n.ctx.restore()}}]})),this.barCtx&&(this.barChart&&this.barChart.destroy(),this.barChart=new Chart(this.barCtx,{type:"bar",data:{labels:e,datasets:[{label:"Aulas Concluídas",data:[],backgroundColor:t,borderRadius:6,borderWidth:{top:2,right:2,bottom:0,left:2},borderColor:t,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:30}},animation:{duration:1e3,easing:"easeOutQuart"},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255, 255, 255, 0.05)"},ticks:{color:"#64748b",precision:0,maxTicksLimit:6}},x:{grid:{display:!1},ticks:{color:"#e2e8f0",font:this.getXAxisFont()}}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:n=>` Carga Horária: ${n.raw} Aulas`}}}},plugins:[{id:"bar3D",beforeDatasetsDraw(n){n.ctx.save(),n.ctx.shadowColor="rgba(0, 0, 0, 0.6)",n.ctx.shadowBlur=15,n.ctx.shadowOffsetX=8,n.ctx.shadowOffsetY=8},afterDatasetsDraw(n){n.ctx.restore()}},{id:"barLabels",afterDatasetsDraw(n){const{ctx:s,data:i}=n;s.font="bold 14px Inter, sans-serif",s.textAlign="center",s.textBaseline="bottom",i.datasets.forEach((a,l)=>{n.getDatasetMeta(l).data.forEach((d,p)=>{var V;const _=a.data[p];if(_<=0)return;const I=((V=a.borderColor)==null?void 0:V[p])||"#cbd5e1";s.fillStyle=I;const S=d.x,P=d.y-8;s.fillText(_,S,P)})})}}]})),this.doughnutCtx){const n={id:"doughnutCenterText",beforeDraw(s){const{ctx:i,width:a,height:l}=s;i.restore();let u=0,d=0;s.data.datasets.forEach(P=>{u+=P.data[0]||0,d+=(P.data[0]||0)+(P.data[1]||0)});const p=d>0?Math.round(u/d*100):0,_=Math.min(a,l)*.18;i.textBaseline="middle",i.textAlign="center";const I=Math.round(a/2),S=Math.round(l/2);i.font=`800 ${_}px Inter, sans-serif`,i.fillStyle="#f8fafc",i.shadowColor="rgba(0, 0, 0, 0.8)",i.shadowBlur=15,i.shadowOffsetY=5,i.fillText(`${p}%`,I,S-5),i.shadowBlur=0,i.shadowOffsetY=0,i.font=`bold ${_*.35}px Inter, sans-serif`,i.fillStyle="#94a3b8",i.fillText("GERAL",I,S+_*.7),i.save()}};this.doughnutChart&&this.doughnutChart.destroy(),this.doughnutChart=new Chart(this.doughnutCtx,{type:"doughnut",data:{labels:["Concluído","Pendente"],datasets:[{label:"Específicas (TI)",data:[0,100],backgroundColor:[this.colorHexMap.cyan,"rgba(8, 145, 178, 0.1)"],borderColor:["#0f172a","#0f172a"],borderWidth:2,borderRadius:[20,0],hoverOffset:5},{label:"Simulados Globais",data:[0,100],backgroundColor:[this.colorHexMap.fuchsia,"rgba(192, 38, 211, 0.1)"],borderColor:["#0f172a","#0f172a"],borderWidth:2,borderRadius:[20,0],hoverOffset:5}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"60%",animation:{duration:1e3,easing:"easeOutQuart"},plugins:{datalabels:{display:!1,color:"#ffffff",textShadowBlur:8,textShadowColor:"rgba(0, 0, 0, 0.8)",font:()=>({family:"Inter, sans-serif",weight:"bold",size:this.isCompactViewport()?11:15}),formatter:s=>s>0?s:""},legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:s=>{const i=s.dataset.label||"",a=i==="Simulados Globais"?"Simulados":"Aulas",l=s.dataIndex===0;return` ${i}: ${s.raw} ${a} (${l?"Concluído":"Pendente"})`}}}}},plugins:[n,{id:"doughnut3D",beforeDatasetsDraw(s){s.ctx.save(),s.ctx.shadowColor="rgba(0, 0, 0, 0.7)",s.ctx.shadowBlur=15,s.ctx.shadowOffsetX=5,s.ctx.shadowOffsetY=10},afterDatasetsDraw(s){s.ctx.restore()}}]})}this.lineCtx&&(this.lineChart&&this.lineChart.destroy(),this.lineChart=new Chart(this.lineCtx,{type:"line",data:{labels:[],datasets:[{label:"Nota Líquida",data:[],borderWidth:3,fill:!0,tension:.4,segment:{borderColor:n=>n.p1.parsed.y>=this.META_SIMULADO?this.colorHexMap.emerald:n.p1.parsed.y>=this.WARNING_SIMULADO?this.colorHexMap.amber:this.colorHexMap.rose},pointBackgroundColor:n=>{const s=n.raw;return s>=this.META_SIMULADO?this.colorHexMap.emerald:s>=this.WARNING_SIMULADO?this.colorHexMap.amber:this.colorHexMap.rose},pointBorderColor:"#fff",pointBorderWidth:2,pointRadius:5,pointHoverRadius:8,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:n=>{const s=n.raw;return s>=this.META_SIMULADO?this.colorHexMap.emerald:s>=this.WARNING_SIMULADO?this.colorHexMap.amber:this.colorHexMap.rose}},{label:"Média Geral",data:[],borderColor:"rgba(148, 163, 184, 0.4)",borderWidth:2,borderDash:[5,5],pointRadius:0,pointHoverRadius:0,fill:!1,tension:0}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:40,right:30,left:10,bottom:10}},animation:{duration:1e3,easing:"easeOutQuart"},scales:{y:{beginAtZero:!0,grace:"5%",grid:{color:"rgba(255, 255, 255, 0.05)",borderDash:[5,5]},ticks:{color:"#64748b",precision:0,maxTicksLimit:6,callback:function(n){return n+" pts"}}},x:{grid:{display:!1},ticks:{color:"#e2e8f0",font:this.getXAxisFont()}}},plugins:{datalabels:{display:n=>n.datasetIndex===0?n.dataIndex===n.dataset.data.length-1?!0:"auto":!1,color:"#f8fafc",backgroundColor:n=>{const s=n.dataset.data[n.dataIndex];return s>=this.META_SIMULADO?"rgba(6, 78, 59, 0.9)":s>=this.WARNING_SIMULADO?"rgba(120, 53, 15, 0.9)":"rgba(15, 23, 42, 0.9)"},borderColor:n=>{const s=n.dataset.data[n.dataIndex];return s>=this.META_SIMULADO?"rgba(16, 185, 129, 0.6)":s>=this.WARNING_SIMULADO?"rgba(245, 158, 11, 0.6)":"rgba(225, 29, 72, 0.4)"},borderWidth:1,borderRadius:6,padding:{top:4,bottom:4,left:6,right:6},textShadowColor:"transparent",textShadowBlur:0,align:"top",offset:8,font:{family:"Inter, sans-serif",weight:"bold",size:11},formatter:n=>n>0?n+" pts":""},legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{title:n=>n[0].label==="Início"?"Ponto de Partida":`Simulado de ${n[0].label}`,label:n=>{if(n.datasetIndex===1){let s=" (Risco de Reprovação)";return n.raw>=this.META_SIMULADO?s=" (Meta Atingida)":n.raw>=this.WARNING_SIMULADO&&(s=" (Quase lá)"),` Média Histórica: ${n.raw} pts${s}`}return` Resultado: ${n.raw} pts`}}}}},plugins:[{id:"line3D",beforeDatasetsDraw(n){n.ctx.save(),n.ctx.shadowColor="rgba(0, 0, 0, 0.4)",n.ctx.shadowBlur=10,n.ctx.shadowOffsetY=5},afterDatasetsDraw(n){n.ctx.restore()}}]}))}update(e,t,n=[]){this._pendingUpdateData={progress:e,visibleSubjects:t,simuladoScores:n},this._isInitialized&&(this._updateTimeout&&clearTimeout(this._updateTimeout),this._updateTimeout=setTimeout(()=>{const{progress:s,visibleSubjects:i,simuladoScores:a}=this._pendingUpdateData;i&&(this.subjects=i);const l=this.getLabels(),u=this.subjects.map(I=>this.colorHexMap[I.color]||"#94a3b8"),d=this.subjects.map(I=>{const S=this.colorHexMap[I.color]||"#94a3b8",P=this.barCtx.createLinearGradient(0,0,0,300);return P.addColorStop(0,S),P.addColorStop(1,"#020617"),P}),p=this.subjects.map(I=>{const S=s[I.id]||0;return Math.round(S/I.max*100)}),_=this.subjects.map(I=>s[I.id]||0);if(this.radarChart&&(this.radarChart.data.labels=l,this.radarChart.data.datasets[0].data=p,this.radarChart.data.datasets[0].pointBackgroundColor=u,this.radarChart.data.datasets[0].pointHoverBorderColor=u,this.radarChart.options.scales.r.pointLabels.color=u,this.radarChart.update()),this.barChart&&(this.barChart.data.labels=l,this.barChart.data.datasets[0].data=_,this.barChart.data.datasets[0].backgroundColor=d,this.barChart.data.datasets[0].borderColor=u,this.barChart.update()),this.doughnutChart){const I=this.doughnutCtx.createLinearGradient(0,0,0,300);I.addColorStop(0,this.colorHexMap.cyan),I.addColorStop(1,"#020617");const S=this.doughnutCtx.createLinearGradient(0,0,0,300);S.addColorStop(0,this.colorHexMap.fuchsia),S.addColorStop(1,"#020617"),this.doughnutChart.data.datasets[0].backgroundColor=[I,"rgba(8, 145, 178, 0.05)"],this.doughnutChart.data.datasets[1].backgroundColor=[S,"rgba(192, 38, 211, 0.05)"];const P=this.subjects.find(k=>k.id==="ti"),V=this.subjects.find(k=>k.id==="simulados");if(P){const k=s.ti||0,F=Math.max(0,P.max-k);this.doughnutChart.data.datasets[0].data=[k,F]}if(V){const k=s.simulados||0,F=Math.max(0,V.max-k);this.doughnutChart.data.datasets[1].data=[k,F]}this.doughnutChart.update()}if(this.lineChart){const I=this.lineChart.chartArea?this.lineChart.chartArea.bottom:400;let S=0;if(a&&a.length>0){const q=a.reduce((E,m)=>E+m.score,0);S=parseFloat((q/a.length).toFixed(1))}const P=a.slice(-10);let V=P.map(q=>q.score),k=P.map(q=>{if(q.date){const E=q.date.split("-");if(E.length===3)return`${E[2]}/${E[1]}`}return"Sim"});V.length===1?(V=[0,V[0]],k=["Início",k[0]]):V.length===0&&(V=[0,0],k=["Início","Aguardando..."]);const F=k.map(()=>S),j=V[V.length-1]||0;let K="225, 29, 72";j>=this.META_SIMULADO?K="16, 185, 129":j>=this.WARNING_SIMULADO&&(K="245, 158, 11");const me=this.lineCtx.createLinearGradient(0,0,0,I);me.addColorStop(0,`rgba(${K}, 0.4)`),me.addColorStop(1,`rgba(${K}, 0)`),this.lineChart.data.labels=k,this.lineChart.data.datasets[0].data=V,this.lineChart.data.datasets[0].backgroundColor=me,this.lineChart.data.datasets[1].data=F,this.lineChart.data.datasets[1].borderColor=S>=this.META_SIMULADO?"rgba(16, 185, 129, 0.4)":S>=this.WARNING_SIMULADO?"rgba(245, 158, 11, 0.5)":"rgba(225, 29, 72, 0.5)",this.lineChart.update();const ne=this.lineCtx.canvas.closest(".chart-container");if(ne){let q=ne.querySelector("#simulado-average-badge");if(!q){const E=ne.querySelector("#simulado-badge-container")||ne.querySelector("h4");E&&(q=document.createElement("span"),q.id="simulado-average-badge",E.appendChild(q))}if(q){let E="";a&&a.length>0&&(S>=this.META_SIMULADO?E='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>':S>=this.WARNING_SIMULADO?E='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>':E='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-rose-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>'),q.innerHTML=`Média: ${S}${E}`,S>=this.META_SIMULADO?(q.title="Meta atingida! Continue assim.",q.className="text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-emerald-500/20 text-emerald-400 border-emerald-500/30 transition-colors duration-500 whitespace-nowrap"):S>=this.WARNING_SIMULADO?(q.title="Atenção: Na zona de aviso, quase batendo a meta!",q.className="text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-amber-500/20 text-amber-400 border-amber-500/30 transition-colors duration-500 whitespace-nowrap"):(q.title="Atenção: Média abaixo do esperado. Risco de reprovação!",q.className="text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-rose-500/20 text-rose-400 border-rose-500/30 transition-colors duration-500 whitespace-nowrap")}}}},250))}downloadRadarChart(){if(!this.radarChart)return;const e=document.createElement("a");e.href=this.radarChart.toBase64Image(),e.download=`cldf_radar_evolucao_${new Date().toISOString().split("T")[0]}.png`,document.body.appendChild(e),e.click(),e.remove(),this.ui&&this.ui.showToast("Gráfico salvo como imagem com sucesso!","success")}}const Zc={ti:{id:"ti",name:"Específicas (TI)",shortName:"TI",max:247,color:"cyan"},simulados:{id:"simulados",name:"Simulados Globais",shortName:"Simul.",max:20,color:"fuchsia"}},el=[{id:"pt",name:"Língua Portuguesa",shortName:"Port.",max:91,color:"blue",phase:1},{id:"const",name:"Dir. Constitucional",shortName:"Const.",max:125,color:"teal",phase:1},{id:"eng",name:"Língua Inglesa",shortName:"Ingl.",max:33,color:"orange",phase:1},{id:"admin",name:"Dir. Administrativo",shortName:"Admin.",max:132,color:"emerald",phase:1},{id:"legis",name:"Processo Legislativo",shortName:"Legis.",max:71,color:"indigo",phase:2},{id:"ridf",name:"Realidade do DF",shortName:"R. DF",max:16,color:"violet",phase:2},{id:"emo",name:"Inteligência Emocional",shortName:"IE",max:6,color:"rose",phase:3}];class ME{static calculatePhase(e){let t=1;const{pt:n=0,admin:s=0,const:i=0,eng:a=0,legis:l=0,ridf:u=0}=e;return n>=91&&s>=132&&i>=125&&a>=33&&(t=2,l>=71&&u>=16&&(t=3)),t}static isPhaseBlocked(e,t){return e>t}}class UE{constructor(e){this.data=e,this.showCompleted=!1,this.elementsCache=new Map}_getEl(e){const t=this.elementsCache.get(e);if(t)return t;const n=document.getElementById(e);return n&&this.elementsCache.set(e,n),n}_updateProgress(e,t,n,s=0){const i=Math.round(t/n*100),a=this._getEl(`${e}-progress-percent`);a&&(a.textContent=`${i}%`);const l=this._getEl(`${e}-progress-text`);l&&(l.textContent=`${t}/${n} (~${s}h)`);const u=this._getEl(`${e}-progress-bar`);u&&(u.style.width=`${i}%`)}_updateSubjectProgress(e,t,n,s=1){const i=Math.round(t/n*100),a=t*s,l=this._getEl(`${e}-text`);l&&(l.textContent=`${t}/${n} (${i}% - ~${a}h)`);const u=this._getEl(`${e}-bar`);u&&(u.style.width=`${i}%`)}_updateSubjectCard(e,t,n){const s=this._getEl(`tracker-card-${e}`);s&&(t===100?this.showCompleted?(s.classList.remove("hidden"),s.classList.add("opacity-60")):(s.classList.add("hidden"),s.classList.remove("opacity-60")):s.classList.remove("opacity-60","hidden"));const i=this._getEl(`controls-${e}`);i&&(i.classList.toggle("opacity-40",n),i.classList.toggle("pointer-events-none",n),i.classList.toggle("grayscale",n))}renderTrackersHTML(){this.elementsCache.clear(),[1,2,3].forEach(e=>{const t=this._getEl(`trackers-phase-${e}`);if(!t)return;const n=this.data.SUBJECTS_QUEUE.filter(s=>s.phase===e);t.innerHTML=n.map(s=>`
            <div class="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 shadow-sm transition-all duration-300 sm:rounded-2xl sm:p-5" id="tracker-card-${s.id}">
                <div class="mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm w-full">
                    <span class="min-w-0 font-bold text-white flex items-center gap-2 flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-${s.color}-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        <span class="truncate text-sm sm:text-base leading-tight">${s.name}</span>
                    </span>
                    <span class="self-start max-w-full shrink-0 rounded border border-${s.color}-800 bg-${s.color}-900 px-2 py-0.5 text-[10px] font-bold text-${s.color}-300 break-words sm:self-auto sm:text-xs" id="${s.id}-text">0/${s.max} (0% - ~0h)</span>
                </div>
                <div class="w-full bg-slate-900 rounded-full h-2.5 sm:h-3 mb-4 overflow-hidden border border-slate-700 shadow-inner">
                    <div class="bg-${s.color}-500 h-full rounded-full transition-all duration-500 ease-out" id="${s.id}-bar" style="width: 0%"></div>
                </div>
                <div id="controls-${s.id}" class="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch gap-2 sm:gap-2 transition-all duration-300 w-full">
                    <button data-action="update-subject" data-subject="${s.id}" data-amount="-1" data-max="${s.max}" class="col-span-1 min-w-0 px-2 py-2.5 sm:px-3 sm:py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:translate-y-[4px] truncate"><span class="sm:hidden">-1</span><span class="hidden sm:inline">-1 Aula</span></button>
                    <button data-action="update-subject" data-subject="${s.id}" data-amount="1" data-max="${s.max}" class="col-span-1 min-w-0 px-2 py-2.5 sm:px-3 sm:py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:translate-y-[4px] truncate"><span class="sm:hidden">+1</span><span class="hidden sm:inline">+1 Aula</span></button>
                    <button data-action="update-subject" data-subject="${s.id}" data-amount="5" data-max="${s.max}" class="col-span-1 min-w-0 px-2 py-2.5 sm:px-4 sm:py-1.5 bg-${s.color}-500 hover:bg-${s.color}-400 text-white rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#0f172a] active:translate-y-[4px] truncate"><span class="sm:hidden">+5</span><span class="hidden sm:inline">+5 Aulas</span></button>
                    <button data-action="complete-subject" data-subject="${s.id}" data-name="${s.name}" data-max="${s.max}" class="col-span-1 min-w-0 px-2 py-2.5 sm:ml-auto sm:w-auto sm:py-1.5 bg-slate-900 border border-slate-700 hover:bg-black text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:translate-y-[4px] truncate"><span class="sm:hidden">Zerar</span><span class="hidden sm:inline">Zerar ✓</span></button>
                </div>
            </div>
          `).join("")})}toggleCompleted(e){this.showCompleted=!this.showCompleted;const t=this._getEl("toggle-completed-text"),n=this._getEl("toggle-completed-icon");t&&(t.textContent=this.showCompleted?"Ocultar Concluídas":"Mostrar Concluídas"),n&&(this.showCompleted?n.innerHTML='<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>':n.innerHTML='<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'),this.renderValues(e)}renderValues(e){const t=e.progress||{},n=e.phase||1,s=e.pace||2,i=e.studyDates||[];let a=0,l=0,u=0;this.data.SUBJECTS_QUEUE.forEach(P=>{const V=t[P.id]||0;a+=V,l+=P.max,u+=V;const k=Math.round(V/P.max*100),F=P.phase>n;this._updateSubjectProgress(P.id,V,P.max,1),this._updateSubjectCard(P.id,k,F)});const d=(P,V)=>{const k=t[P]||0,F=this.data.SPECIAL_MISSIONS[P].max;a+=k,l+=F;const j=k*V;return u+=j,this._updateProgress(P,k,F,j),{current:k,max:F,hours:j}};d("ti",1);const p=d("simulados",4),_=l>0?Math.round(a/l*100):0;this._getEl("global-progress-percent")&&(this._getEl("global-progress-percent").textContent=`${_}% (~${u}h)`),this._getEl("header-progress-bar")&&(this._getEl("header-progress-bar").style.width=`${_}%`),this._updateStatsModal(a,l,u,p.current,p.max,s);const I=this._calculateStreak(i),S=this._getEl("streak-counter");S&&(S.textContent=`${I} Dias`)}_calculateStreak(e){if(!e||e.length===0)return 0;const t=[...new Set(e)].sort().reverse();let n=0,s=new Date;s.setHours(0,0,0,0);const i=new Date(t[0]+"T00:00:00");if(i.setHours(0,0,0,0),Math.floor((s-i)/864e5)>1)return 0;s=i;for(const a of t){const l=new Date(a+"T00:00:00");if(l.setHours(0,0,0,0),l.getTime()===s.getTime())n++,s.setDate(s.getDate()-1);else break}return n}_updateStatsModal(e,t,n,s,i,a){const l=e-s,u=t-i,d=u+i*4,p=Math.max(0,d-n),_=Math.ceil(p/a),I=Math.ceil(_/30),S=(F,j)=>{const K=this._getEl(F);K&&(K.textContent=j)};S("stats-classes-completed",`${l} / ${u}`),S("stats-hours-completed",`${n}h / ${d}h`),S("stats-simulados-completed",`${s} / ${i}`),S("stats-days-remaining",`${_} dias (~${I} meses)`);const P=this._getEl("stats-congrats-message");P&&P.classList.toggle("hidden",_>0);const V=this._getEl("dynamic-pace-modal");V&&(V.textContent=`${a}h`);const k=this._getEl("dynamic-pace-title");k&&(k.textContent=`${a}h`)}updatePhaseUI(e){const t=this._getEl("header-phase-text");t&&(t.textContent=`Fase ${e}`);const n=this._getEl("phase-1-badge"),s=e===1;n&&(n.textContent=s?"Ativa":"Concluída",n.className=s?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider":"bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"),this._updatePhaseState(e,2,"indigo",50),this._updatePhaseState(e,3,"orange",40)}_updatePhaseState(e,t,n,s){const i=this._getEl(`phase-${t}-wrapper`),a=this._getEl(`phase-${t}-box`),l=this._getEl(`phase-${t}-badge`),u=this._getEl(`trackers-phase-${t}`);if(i)if(e>=t){i.className="group opacity-100 transition-opacity duration-300",a.className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl transition-all duration-500 sm:rounded-3xl sm:p-8",u&&u.classList.remove("hidden");const d=e===t,p=d&&t===3?"Reta Final":d?"Ativa":"Concluída";l.textContent=p,l.className=d?`bg-${n}-500/20 text-${n}-300 border border-${n}-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`:"bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"}else i.className=`group opacity-${s} hover:opacity-100 transition-opacity duration-300`,a.className="relative overflow-hidden rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/50 p-4 transition-all duration-500 sm:rounded-3xl sm:p-8",u&&u.classList.add("hidden"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Fase Bloqueada',l.className="bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider inline-flex items-center gap-1.5"}updateDynamicCycle(e,t){const n=this._getEl("dynamic-cycle-list");if(!n)return;const i=this.data.SUBJECTS_QUEUE.filter(a=>(e[a.id]||0)<a.max&&a.phase<=t).slice(0,4);if(i.length===0){n.innerHTML='<span class="block w-full rounded-xl border border-emerald-200 bg-emerald-100 px-4 py-2.5 text-center text-sm font-bold text-emerald-800 shadow-sm">🎉 Edital Básico Zerado! O Gran Cursos agora só precisa de Simulados.</span>';return}n.innerHTML=i.map(a=>{const l=e[a.id]||0,u=Math.round(l/a.max*100);return`
          <div class="flex w-full min-w-0 flex-1 flex-col gap-2 rounded-xl border border-slate-600/50 bg-slate-700/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-[200px]">
            <div class="flex items-center justify-between gap-2">
              <span class="flex items-center gap-2 text-sm font-bold text-slate-200 truncate min-w-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 min-w-[16px] text-${a.color}-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                <span class="truncate">${a.name}</span>
              </span>
              <span class="text-xs font-bold text-slate-400 shrink-0 ml-1">${u}%</span>
            </div>
            <div class="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-700/50 shadow-inner">
              <div class="dynamic-bar bg-${a.color}-500 h-full rounded-full transition-all duration-1000 ease-out" style="width: 0%" data-width="${u}%"></div>
            </div>
          </div>
        `}).join(""),this.animateDynamicCycle()}animateDynamicCycle(){const e=this._getEl("dynamic-cycle-list");if(!e)return;const t=e.querySelectorAll(".dynamic-bar");t.length!==0&&(t.forEach(n=>n.style.width="0%"),e.offsetWidth,t.forEach(n=>n.style.width=n.dataset.width))}celebrateSubjectCompletion(){const e=document.createElement("div");if(e.className="fixed inset-0 z-[9999] bg-emerald-500/40 pointer-events-none transition-opacity duration-500 opacity-100 mix-blend-screen",document.body.appendChild(e),e.offsetWidth,e.classList.replace("opacity-100","opacity-0"),setTimeout(()=>e.remove(),500),window.confetti){const n={origin:{y:.7},shapes:["star","circle"],colors:["#FFD700","#10b981","#3b82f6","#f97316","#ec4899"],ticks:200};confetti({...n,particleCount:80,spread:100,startVelocity:40}),setTimeout(()=>confetti({...n,particleCount:60,spread:120,startVelocity:55}),250),setTimeout(()=>confetti({...n,particleCount:40,spread:80,startVelocity:30}),500)}const t=this._getEl("global-progress-percent");t&&(t.classList.add("scale-125","text-emerald-300","drop-shadow-[0_0_8px_#10b981]"),setTimeout(()=>{t.classList.remove("scale-125","text-emerald-300","drop-shadow-[0_0_8px_#10b981]")},600))}celebratePhaseUnlock(){if(window.confetti){const t=Date.now()+3e3;(function n(){confetti({particleCount:5,angle:60,spread:55,origin:{x:0},colors:["#10b981","#14b8a6","#6366f1","#f97316"]}),confetti({particleCount:5,angle:120,spread:55,origin:{x:1},colors:["#10b981","#14b8a6","#6366f1","#f97316"]}),Date.now()<t&&requestAnimationFrame(n)})()}}}function FE(r){return new Worker("/assets/cldf-worker-DS3zI_nM.js",{name:r==null?void 0:r.name})}class BE{constructor(e){this.app=e,this.SPECIAL_MISSIONS=Zc,this.SUBJECTS_QUEUE=el,this.saveTimeout=null,this.view=new UE({SPECIAL_MISSIONS:Zc,SUBJECTS_QUEUE:el}),this.worker=new FE,this.worker.addEventListener("message",t=>{t.data.action==="RESULT_PROCESS_ROADMAP_DATA"?this.applyRender(t.data.payload):t.data.action==="ERROR_PROCESS_ROADMAP_DATA"&&(console.error("[RoadmapManager] Erro no processamento do Worker:",t.data.payload.error),this.app.ui&&(this.app.ui.showToast("Falha ao processar os dados do Roadmap.","error"),this.app.ui.playErrorSound&&this.app.ui.playErrorSound()))}),this.worker.addEventListener("error",t=>{console.error("[RoadmapManager] Erro fatal no Web Worker:",t.message)})}init(){this.app.state.progress||(this.app.state.progress={}),this.app.state.studyDates||(this.app.state.studyDates=[]),this.app.state.simuladoScores||(this.app.state.simuladoScores=[]),this.app.state.pace||(this.app.state.pace=2),this.view.renderTrackersHTML(),this.checkAndRender()}updateSubject(e,t,n){const s=this.SUBJECTS_QUEUE.find(u=>u.id===e);if(s&&ME.isPhaseBlocked(s.phase,this.app.state.phase)){this.app.ui&&this.app.ui.playErrorSound&&this.app.ui.playErrorSound(),this.app.ui.showToast(`Fase Bloqueada! Conclua a Fase ${this.app.state.phase} primeiro.`,"error");return}let i=this.app.state.progress[e]||0;const a=i;if(i+=t,i<0&&(i=0),i>n&&(i=n),i===n&&this.app.state.progress[e]!==n?(this.app.ui&&this.app.ui.playSuccessSound&&this.app.ui.playSuccessSound(),this.view.celebrateSubjectCompletion(),this.app.ui.showToast("Parabéns! Finalizou a matéria!","success")):i>a&&this.app.ui&&(e==="ti"||e==="simulados"?this.app.ui.playPowerUpSound&&this.app.ui.playPowerUpSound():this.app.ui.playBeep()),t>0){const u=new Date().toISOString().split("T")[0];this.app.state.studyDates.includes(u)||this.app.state.studyDates.push(u)}this.app.state.progress[e]=i,this.saveTimeout&&clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(()=>{this.app.storage.save(this.app.state)},1e3),this.checkAndRender(),e==="simulados"&&(t>0&&i>a?setTimeout(()=>{const u=prompt(`Você registrou o Simulado #${i}! Qual foi a sua nota líquida?`);if(u!==null&&u.trim()!==""){const d=parseFloat(u)||0;this.app.state.simuladoScores.push({date:new Date().toISOString().split("T")[0],score:d}),this.app.storage.save(this.app.state),this.checkAndRender()}},150):t<0&&i<a&&this.app.state.simuladoScores&&this.app.state.simuladoScores.length>i&&(this.app.state.simuladoScores=this.app.state.simuladoScores.slice(0,i),this.app.storage.save(this.app.state),this.checkAndRender()))}completeSubject(e,t,n){confirm(`Tem certeza que deseja marcar a matéria "${t}" como 100% concluída? Esta ação não pode ser desfeita facilmente.`)&&this.updateSubject(e,n,n)}toggleCompleted(){this.view.toggleCompleted(this.app.state)}checkAndRender(){this.worker.postMessage({action:"PROCESS_ROADMAP_DATA",payload:{progress:this.app.state.progress,subjectsQueue:this.SUBJECTS_QUEUE,specialMissions:this.SPECIAL_MISSIONS}})}applyRender({newPhase:e,visibleSubjects:t}){e>this.app.state.phase&&(this.view.celebratePhaseUnlock(),this.app.ui.showToast(`🎉 DESBLOQUEIO ÉPICO: Acesso Concedido à Fase ${e}!`,"success")),this.app.state.phase=e,this.app.storage.save(this.app.state),this.view.renderValues(this.app.state),this.view.updatePhaseUI(this.app.state.phase),this.view.updateDynamicCycle(this.app.state.progress,this.app.state.phase),this.app.chartManager&&this.app.chartManager.update(this.app.state.progress,t,this.app.state.simuladoScores)}}const $E="modulepreload",jE=function(r){return"/"+r},tl={},qE=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(u=>{if(u=jE(u),u in tl)return;tl[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const _=document.createElement("link");if(_.rel=d?"stylesheet":$E,d||(_.as="script"),_.crossOrigin="",_.href=u,l&&_.setAttribute("nonce",l),document.head.appendChild(_),d)return new Promise((I,S)=>{_.addEventListener("load",I),_.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function zE(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:s,onRegisteredSW:i,onRegisterError:a}=r;let l,u,d;const p=async(I=!0)=>{await u,await(d==null?void 0:d())};async function _(){if("serviceWorker"in navigator){if(l=await qE(async()=>{const{Workbox:I}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:I}},[]).then(({Workbox:I})=>new I("/sw.js",{scope:"/",type:"classic"})).catch(I=>{a==null||a(I)}),!l)return;d=async()=>{await(l==null?void 0:l.messageSkipWaiting())};{let I=!1;const S=()=>{I=!0,l==null||l.addEventListener("controlling",P=>{P.isUpdate&&window.location.reload()}),t==null||t()};l.addEventListener("installed",P=>{typeof P.isUpdate>"u"?typeof P.isExternal<"u"?P.isExternal?S():!I&&(n==null||n()):P.isExternal?window.location.reload():!I&&(n==null||n()):P.isUpdate||n==null||n()}),l.addEventListener("waiting",S),l.addEventListener("externalwaiting",S)}l.register({immediate:e}).then(I=>{i?i("/sw.js",I):s==null||s(I)}).catch(I=>{a==null||a(I)})}}return u=_(),p}function HE(r,e="backup"){const t=new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`${e}_${new Date().toISOString().slice(0,10)}.json`,s.click(),URL.revokeObjectURL(n)}function WE(r){return new Promise((e,t)=>{const n=new FileReader;n.onload=s=>{try{e(JSON.parse(s.target.result))}catch{t(new Error("Arquivo de backup inválido ou corrompido."))}},n.onerror=()=>t(new Error("Erro na leitura do arquivo.")),n.readAsText(r)})}class GE{constructor(e){this.ui=e,this.timeLeft=55*60,this.interval=null,this.display=document.getElementById("timer-display"),this.updateDisplay()}start(){this.interval||(this.interval=setInterval(()=>{this.timeLeft--,this.updateDisplay(),this.timeLeft<=0&&(this.pause(),this.ui&&this.ui.playTimerEndSound&&this.ui.playTimerEndSound(),this.ui&&this.ui.showToast&&this.ui.showToast("Pomodoro finalizado! Hora da pausa.","success"),this.timeLeft=55*60,this.updateDisplay())},1e3))}pause(){clearInterval(this.interval),this.interval=null}reset(){this.pause(),this.timeLeft=55*60,this.updateDisplay()}updateDisplay(){if(!this.display)return;const e=Math.floor(this.timeLeft/60).toString().padStart(2,"0"),t=(this.timeLeft%60).toString().padStart(2,"0");this.display.textContent=`${e}:${t}`}}const nl={config:{storageKey:"cldfStudyEngine_v1"},storage:null,ui:null,roadmap:null,chartManager:null,auth:null,timer:null,async init(){var s,i,a,l;if(window._isAppInitialized)return;window._isAppInitialized=!0,console.log("Motor Dinâmico CLDF - Versão: 1.2 Pro"),this.ui=new OE,this.timer=new GE(this.ui),this.roadmap=new BE(this);const r=(s=document.getElementById("radarChart"))==null?void 0:s.getContext("2d"),e=(i=document.getElementById("barChart"))==null?void 0:i.getContext("2d"),t=(a=document.getElementById("doughnutChart"))==null?void 0:a.getContext("2d"),n=(l=document.getElementById("lineChart"))==null?void 0:l.getContext("2d");(r||e||t||n)&&(this.chartManager=new LE(r,e,t,n,[],this.ui)),this.auth=new NE(async u=>{u?(this.ui.hideAuth(),this.storage=new VE(this.config.storageKey,u.uid,this.ui),this.state=await this.storage.load(),this.roadmap.init(),this.ui.switchTab("cycle-a"),this.ui.hideLoading(),this.setupPWA()):(this.ui.showAuth(),this.ui.hideLoading())}),this.setupEventListeners()},exportData(){HE(this.state,"cldf_backup"),this.ui.showToast("Backup baixado com sucesso!")},async importData(r){const e=r.target.files[0];if(e){try{const t=await WE(e);await this.storage.save(t),this.state=t,this.roadmap.checkAndRender(),this.ui.showToast("Progresso restaurado!")}catch(t){alert(t.message)}r.target.value=""}},async factoryReset(){confirm("ATENÇÃO: Isso apagará TODO o seu progresso e restaurará a aplicação para o estado inicial. Deseja continuar?")&&(await this.storage.clear(),window.location.reload())},clearCache(){confirm("Deseja limpar o cache do sistema? Isso resolverá problemas de atualização ou lentidão. (Seu progresso NÃO será perdido).")&&("caches"in window&&caches.keys().then(r=>{for(const e of r)caches.delete(e)}),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(r=>{for(const e of r)e.unregister()}),this.ui.showToast("Cache limpo! Recarregando...","success"),setTimeout(()=>window.location.reload(),1500))},setupPWA(){if("serviceWorker"in navigator){const r=zE({onNeedRefresh(){const e=document.getElementById("pwa-update-toast");e&&(e.classList.remove("hidden"),e.classList.add("flex"),document.getElementById("pwa-update-btn").onclick=()=>{r(!0)},document.getElementById("pwa-close-btn").onclick=()=>{e.classList.add("hidden"),e.classList.remove("flex")})},onOfflineReady:()=>{this.ui.showToast("App pronto para uso offline!","success")}})}},setupEventListeners(){document.addEventListener("click",r=>{const e=document.getElementById("mobile-menu");if(e&&!e.classList.contains("hidden")&&(r.target.closest("[data-action='toggle-menu']")||(e.classList.add("hidden"),e.classList.remove("flex"))),r.target.id==="stats-modal"){this.ui.closeStatsModal();return}const t=r.target.closest("[data-action]");if(!t)return;switch(t.dataset.action){case"timer-start":this.timer.start();break;case"timer-pause":this.timer.pause();break;case"timer-reset":this.timer.reset();break;case"scroll-top":window.scrollTo({top:0,behavior:"smooth"});break;case"scroll-to":this.ui.scrollTo(t.dataset.target);break;case"switch-tab":this.ui.switchTab(t.dataset.tab),t.dataset.tab==="cycle-a"&&this.roadmap.view.animateDynamicCycle();break;case"toggle-menu":{const s=document.getElementById("mobile-menu");s&&(s.classList.toggle("hidden"),s.classList.toggle("flex"));break}case"export-data":this.exportData();break;case"factory-reset":this.factoryReset();break;case"clear-cache":this.clearCache();break;case"download-chart":this.chartManager&&this.chartManager.downloadRadarChart();break;case"open-stats":this.ui.openStatsModal();break;case"close-stats":this.ui.closeStatsModal();break;case"change-pace":{const s=prompt("Quantas horas você estuda por dia?",this.state.pace||2);if(s!==null){const i=parseFloat(s);!isNaN(i)&&i>0?(this.state.pace=i,this.storage.save(this.state),this.roadmap.checkAndRender(),this.ui.showToast("Ritmo de estudo atualizado!","success")):this.ui.showToast("Valor inválido.","error")}break}case"toggle-completed":this.roadmap.toggleCompleted();break;case"update-subject":this.roadmap.updateSubject(t.dataset.subject,parseInt(t.dataset.amount,10),parseInt(t.dataset.max,10));break;case"complete-subject":this.roadmap.completeSubject(t.dataset.subject,t.dataset.name,parseInt(t.dataset.max,10));break;case"login":{const s=document.getElementById("auth-email").value,i=document.getElementById("auth-password").value;if(!s||!i)return this.ui.showToast("Preencha todos os campos.","error");if(s.toLowerCase()!=="jefferson.araujo@camara.leg.br")return this.ui.showToast("Acesso restrito ao administrador do sistema.","error");this.ui.showToast("Autenticando...","success"),this.auth.login(s,i).catch(a=>{console.error(a),this.ui.showToast("Erro: Credenciais inválidas.","error")});break}case"register":{const s=document.getElementById("auth-email").value,i=document.getElementById("auth-password").value;if(!s||!i)return this.ui.showToast("Preencha todos os campos.","error");if(s.toLowerCase()!=="jefferson.araujo@camara.leg.br")return this.ui.showToast("Criação de conta restrita ao administrador.","error");if(i.length<6)return this.ui.showToast("A senha precisa de pelo menos 6 caracteres.","error");this.ui.showToast("Criando conta...","success"),this.auth.register(s,i).then(()=>this.ui.showToast("Conta criada com sucesso!","success")).catch(a=>{console.error(a),this.ui.showToast("Erro ao criar conta. Tente outro e-mail.","error")});break}case"logout":confirm("Tem certeza que deseja sair?")&&this.auth.logout();break}}),document.addEventListener("change",r=>{const e=r.target.closest("[data-action]");!e||e.dataset.action!=="import-data"||this.importData(r)}),document.addEventListener("keydown",r=>{if(r.key==="Escape"){const e=document.getElementById("stats-modal");e&&!e.classList.contains("hidden")&&this.ui.closeStatsModal()}})}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{nl.init()}):nl.init();
