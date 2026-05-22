(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const nd=()=>{};var Pa={};/**
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
 */const rl=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rd=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[t++];e[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[t++],a=r[t++],l=r[t++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const o=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,l=a?r[s+1]:0,u=s+2<r.length,d=u?r[s+2]:0,p=o>>2,y=(o&3)<<4|l>>4;let A=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(A=64)),n.push(t[p],t[y],t[A],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(rl(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):rd(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=t[r.charAt(s++)],l=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const y=s<r.length?t[r.charAt(s)]:64;if(++s,o==null||l==null||d==null||y==null)throw new sd;const A=o<<2|l>>4;if(n.push(A),d!==64){const S=l<<4&240|d>>2;if(n.push(S),y!==64){const R=d<<6&192|y;n.push(R)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const id=function(r){const e=rl(r);return sl.encodeByteArray(e,!0)},Qr=function(r){return id(r).replace(/\./g,"")},il=function(r){try{return sl.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dd(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Qr(JSON.stringify(t)),Qr(JSON.stringify(a)),""].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function pd(){var e;const r=(e=ms())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gd(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function _d(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yd(){const r=Ee();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ed(){return!pd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Td(){try{return typeof indexedDB=="object"}catch{return!1}}function wd(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Id="FirebaseError";class Xe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Id,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ir.prototype.create)}}class ir{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?vd(o,n):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Xe(s,l,n)}}function vd(r,e){return r.replace(Ad,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Ad=/\{\$([^}]+)}/g;function bd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const o=r[s],a=e[s];if(ka(o)&&ka(a)){if(!Nt(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function ka(r){return r!==null&&typeof r=="object"}/**
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
 */function or(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Mn(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,o]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Un(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Sd(r,e){const t=new Cd(r,e);return t.subscribe.bind(t)}class Cd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Rd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ni),s.error===void 0&&(s.error=ni),s.complete===void 0&&(s.complete=ni);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rd(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ni(){}/**
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
 */class Pd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new hd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dd(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&a.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&e(o,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:kd(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kd(r){return r===kt?void 0:r}function Dd(r){return r.instantiationMode==="EAGER"}/**
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
 */var q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(q||(q={}));const Nd={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},xd=q.INFO,Od={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Ld=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Od[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fi{constructor(e){this.name=e,this._logLevel=xd,this._logHandler=Ld,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Md=(r,e)=>e.some(t=>r instanceof t);let Da,Va;function Ud(){return Da||(Da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fd(){return Va||(Va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,pi=new WeakMap,hl=new WeakMap,ri=new WeakMap,Bi=new WeakMap;function Bd(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{t(ht(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ul.set(t,r)}).catch(()=>{}),Bi.set(e,r),e}function $d(r){if(pi.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});pi.set(r,e)}let mi={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return pi.get(r);if(e==="objectStoreNames")return r.objectStoreNames||hl.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ht(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function jd(r){mi=r(mi)}function qd(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(si(this),e,...t);return hl.set(n,e.sort?e.sort():[e]),ht(n)}:Fd().includes(r)?function(...e){return r.apply(si(this),e),ht(ul.get(this))}:function(...e){return ht(r.apply(si(this),e))}}function zd(r){return typeof r=="function"?qd(r):(r instanceof IDBTransaction&&$d(r),Md(r,Ud())?new Proxy(r,mi):r)}function ht(r){if(r instanceof IDBRequest)return Bd(r);if(ri.has(r))return ri.get(r);const e=zd(r);return e!==r&&(ri.set(r,e),Bi.set(e,r)),e}const si=r=>Bi.get(r);function Hd(r,e,{blocked:t,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,e),l=ht(a);return n&&a.addEventListener("upgradeneeded",u=>{n(ht(a.result),u.oldVersion,u.newVersion,ht(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Wd=["get","getKey","getAll","getAllKeys","count"],Gd=["put","add","delete","clear"],ii=new Map;function Na(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Gd.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Wd.includes(t)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return ii.set(e,o),o}jd(r=>({...r,get:(e,t,n)=>Na(e,t)||r.get(e,t,n),has:(e,t)=>!!Na(e,t)||r.has(e,t)}));/**
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
 */const dn=vf;function dl(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:_i,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(t||(t=al()),!t)throw dt.create("no-options");const o=Yr.get(s);if(o){if(Nt(t,o.options)&&Nt(n,o.config))return o;throw dt.create("duplicate-app",{appName:s})}const a=new Vd(s);for(const u of yi.values())a.addComponent(u);const l=new Cf(t,n,a);return Yr.set(s,l),l}function fl(r=_i){const e=Yr.get(r);if(!e&&r===_i&&al())return dl();if(!e)throw dt.create("no-app",{appName:r});return e}function ft(r,e,t){let n=Af[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ke.warn(a.join(" "));return}sn(new xt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Df=1024,Vf=30;class Nf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Of(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ma();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Vf){const a=Lf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ke.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ma(),{heartbeatsToSend:n,unsentEntries:s}=xf(this._heartbeatsCache.heartbeats),o=Qr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ke.warn(t),""}}}function Ma(){return new Date().toISOString().substring(0,10)}function xf(r,e=Df){const t=[];let n=r.slice();for(const s of r){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ua(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ua(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Of{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Td()?wd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return La(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return La(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ua(r){return Qr(JSON.stringify({version:2,heartbeats:r})).length}function Lf(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
*/function e(T,m){function g(){}g.prototype=m.prototype,T.F=m.prototype,T.prototype=new g,T.prototype.constructor=T,T.D=function(w,E,v){for(var _=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)_[ve-2]=arguments[ve];return m.prototype[E].apply(w,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,g){g||(g=0);const w=Array(16);if(typeof m=="string")for(var E=0;E<16;++E)w[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;E<16;++E)w[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=T.g[0],g=T.g[1],E=T.g[2];let v=T.g[3],_;_=m+(v^g&(E^v))+w[0]+3614090360&4294967295,m=g+(_<<7&4294967295|_>>>25),_=v+(E^m&(g^E))+w[1]+3905402710&4294967295,v=m+(_<<12&4294967295|_>>>20),_=E+(g^v&(m^g))+w[2]+606105819&4294967295,E=v+(_<<17&4294967295|_>>>15),_=g+(m^E&(v^m))+w[3]+3250441966&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(v^g&(E^v))+w[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=v+(E^m&(g^E))+w[5]+1200080426&4294967295,v=m+(_<<12&4294967295|_>>>20),_=E+(g^v&(m^g))+w[6]+2821735955&4294967295,E=v+(_<<17&4294967295|_>>>15),_=g+(m^E&(v^m))+w[7]+4249261313&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(v^g&(E^v))+w[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=v+(E^m&(g^E))+w[9]+2336552879&4294967295,v=m+(_<<12&4294967295|_>>>20),_=E+(g^v&(m^g))+w[10]+4294925233&4294967295,E=v+(_<<17&4294967295|_>>>15),_=g+(m^E&(v^m))+w[11]+2304563134&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(v^g&(E^v))+w[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=v+(E^m&(g^E))+w[13]+4254626195&4294967295,v=m+(_<<12&4294967295|_>>>20),_=E+(g^v&(m^g))+w[14]+2792965006&4294967295,E=v+(_<<17&4294967295|_>>>15),_=g+(m^E&(v^m))+w[15]+1236535329&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(E^v&(g^E))+w[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=v+(g^E&(m^g))+w[6]+3225465664&4294967295,v=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(v^m))+w[11]+643717713&4294967295,E=v+(_<<14&4294967295|_>>>18),_=g+(v^m&(E^v))+w[0]+3921069994&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^v&(g^E))+w[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=v+(g^E&(m^g))+w[10]+38016083&4294967295,v=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(v^m))+w[15]+3634488961&4294967295,E=v+(_<<14&4294967295|_>>>18),_=g+(v^m&(E^v))+w[4]+3889429448&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^v&(g^E))+w[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=v+(g^E&(m^g))+w[14]+3275163606&4294967295,v=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(v^m))+w[3]+4107603335&4294967295,E=v+(_<<14&4294967295|_>>>18),_=g+(v^m&(E^v))+w[8]+1163531501&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^v&(g^E))+w[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=v+(g^E&(m^g))+w[2]+4243563512&4294967295,v=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(v^m))+w[7]+1735328473&4294967295,E=v+(_<<14&4294967295|_>>>18),_=g+(v^m&(E^v))+w[12]+2368359562&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(g^E^v)+w[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=v+(m^g^E)+w[8]+2272392833&4294967295,v=m+(_<<11&4294967295|_>>>21),_=E+(v^m^g)+w[11]+1839030562&4294967295,E=v+(_<<16&4294967295|_>>>16),_=g+(E^v^m)+w[14]+4259657740&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^v)+w[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=v+(m^g^E)+w[4]+1272893353&4294967295,v=m+(_<<11&4294967295|_>>>21),_=E+(v^m^g)+w[7]+4139469664&4294967295,E=v+(_<<16&4294967295|_>>>16),_=g+(E^v^m)+w[10]+3200236656&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^v)+w[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=v+(m^g^E)+w[0]+3936430074&4294967295,v=m+(_<<11&4294967295|_>>>21),_=E+(v^m^g)+w[3]+3572445317&4294967295,E=v+(_<<16&4294967295|_>>>16),_=g+(E^v^m)+w[6]+76029189&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^v)+w[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=v+(m^g^E)+w[12]+3873151461&4294967295,v=m+(_<<11&4294967295|_>>>21),_=E+(v^m^g)+w[15]+530742520&4294967295,E=v+(_<<16&4294967295|_>>>16),_=g+(E^v^m)+w[2]+3299628645&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(E^(g|~v))+w[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=v+(g^(m|~E))+w[7]+1126891415&4294967295,v=m+(_<<10&4294967295|_>>>22),_=E+(m^(v|~g))+w[14]+2878612391&4294967295,E=v+(_<<15&4294967295|_>>>17),_=g+(v^(E|~m))+w[5]+4237533241&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~v))+w[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=v+(g^(m|~E))+w[3]+2399980690&4294967295,v=m+(_<<10&4294967295|_>>>22),_=E+(m^(v|~g))+w[10]+4293915773&4294967295,E=v+(_<<15&4294967295|_>>>17),_=g+(v^(E|~m))+w[1]+2240044497&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~v))+w[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=v+(g^(m|~E))+w[15]+4264355552&4294967295,v=m+(_<<10&4294967295|_>>>22),_=E+(m^(v|~g))+w[6]+2734768916&4294967295,E=v+(_<<15&4294967295|_>>>17),_=g+(v^(E|~m))+w[13]+1309151649&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~v))+w[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=v+(g^(m|~E))+w[11]+3174756917&4294967295,v=m+(_<<10&4294967295|_>>>22),_=E+(m^(v|~g))+w[2]+718787259&4294967295,E=v+(_<<15&4294967295|_>>>17),_=g+(v^(E|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+v&4294967295}n.prototype.v=function(T,m){m===void 0&&(m=T.length);const g=m-this.blockSize,w=this.C;let E=this.h,v=0;for(;v<m;){if(E==0)for(;v<=g;)s(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<m;)if(w[E++]=T.charCodeAt(v++),E==this.blockSize){s(this,w),E=0;break}}else for(;v<m;)if(w[E++]=T[v++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=m},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var g=T.length-8;g<T.length;++g)T[g]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,g=0;g<4;++g)for(let w=0;w<32;w+=8)T[m++]=this.g[g]>>>w&255;return T};function o(T,m){var g=l;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=m(T)}function a(T,m){this.h=m;const g=[];let w=!0;for(let E=T.length-1;E>=0;E--){const v=T[E]|0;w&&v==m||(g[E]=v,w=!1)}this.g=g}var l={};function u(T){return-128<=T&&T<128?o(T,function(m){return new a([m|0],m<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return D(d(-T));const m=[];let g=1;for(let w=0;T>=g;w++)m[w]=T/g|0,g*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(p(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(m,8));let w=y;for(let v=0;v<T.length;v+=8){var E=Math.min(8,T.length-v);const _=parseInt(T.substring(v,v+E),m);E<8?(E=d(Math.pow(m,E)),w=w.j(E).add(d(_))):(w=w.j(g),w=w.add(d(_)))}return w}var y=u(0),A=u(1),S=u(16777216);r=a.prototype,r.m=function(){if(k(this))return-D(this).m();let T=0,m=1;for(let g=0;g<this.g.length;g++){const w=this.i(g);T+=(w>=0?w:4294967296+w)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(k(this))return"-"+D(this).toString(T);const m=d(Math.pow(T,6));var g=this;let w="";for(;;){const E=Te(g,m).g;g=L(g,E.j(m));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(T);if(g=E,R(g))return v+w;for(;v.length<6;)v="0"+v;w=v+w}},r.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function k(T){return T.h==-1}r.l=function(T){return T=L(this,T),k(T)?-1:R(T)?0:1};function D(T){const m=T.g.length,g=[];for(let w=0;w<m;w++)g[w]=~T.g[w];return new a(g,~T.h).add(A)}r.abs=function(){return k(this)?D(this):this},r.add=function(T){const m=Math.max(this.g.length,T.g.length),g=[];let w=0;for(let E=0;E<=m;E++){let v=w+(this.i(E)&65535)+(T.i(E)&65535),_=(v>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);w=_>>>16,v&=65535,_&=65535,g[E]=_<<16|v}return new a(g,g[g.length-1]&-2147483648?-1:0)};function L(T,m){return T.add(D(m))}r.j=function(T){if(R(this)||R(T))return y;if(k(this))return k(T)?D(this).j(D(T)):D(D(this).j(T));if(k(T))return D(this.j(D(T)));if(this.l(S)<0&&T.l(S)<0)return d(this.m()*T.m());const m=this.g.length+T.g.length,g=[];for(var w=0;w<2*m;w++)g[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<T.g.length;E++){const v=this.i(w)>>>16,_=this.i(w)&65535,ve=T.i(E)>>>16,At=T.i(E)&65535;g[2*w+2*E]+=_*At,$(g,2*w+2*E),g[2*w+2*E+1]+=v*At,$(g,2*w+2*E+1),g[2*w+2*E+1]+=_*ve,$(g,2*w+2*E+1),g[2*w+2*E+2]+=v*ve,$(g,2*w+2*E+2)}for(T=0;T<m;T++)g[T]=g[2*T+1]<<16|g[2*T];for(T=m;T<2*m;T++)g[T]=0;return new a(g,0)};function $(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function K(T,m){this.g=T,this.h=m}function Te(T,m){if(R(m))throw Error("division by zero");if(R(T))return new K(y,y);if(k(T))return m=Te(D(T),m),new K(D(m.g),D(m.h));if(k(m))return m=Te(T,D(m)),new K(D(m.g),m.h);if(T.g.length>30){if(k(T)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var g=A,w=m;w.l(T)<=0;)g=te(g),w=te(w);var E=re(g,1),v=re(w,1);for(w=re(w,2),g=re(g,2);!R(w);){var _=v.add(w);_.l(T)<=0&&(E=E.add(g),v=_),w=re(w,1),g=re(g,1)}return m=L(T,E.j(m)),new K(E,m)}for(E=y;T.l(m)>=0;){for(g=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(g)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),v=d(g),_=v.j(m);k(_)||_.l(T)>0;)g-=w,v=d(g),_=v.j(m);R(v)&&(v=A),E=E.add(v),T=L(T,_)}return new K(E,T)}r.B=function(T){return Te(this,T).h},r.and=function(T){const m=Math.max(this.g.length,T.g.length),g=[];for(let w=0;w<m;w++)g[w]=this.i(w)&T.i(w);return new a(g,this.h&T.h)},r.or=function(T){const m=Math.max(this.g.length,T.g.length),g=[];for(let w=0;w<m;w++)g[w]=this.i(w)|T.i(w);return new a(g,this.h|T.h)},r.xor=function(T){const m=Math.max(this.g.length,T.g.length),g=[];for(let w=0;w<m;w++)g[w]=this.i(w)^T.i(w);return new a(g,this.h^T.h)};function te(T){const m=T.g.length+1,g=[];for(let w=0;w<m;w++)g[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(g,T.h)}function re(T,m){const g=m>>5;m%=32;const w=T.g.length-g,E=[];for(let v=0;v<w;v++)E[v]=m>0?T.i(v+g)>>>m|T.i(v+g+1)<<32-m:T.i(v+g);return new a(E,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,gl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,pt=a}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _l,Fn,yl,Fr,Ei,El,Tl,wl;(function(){var r,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vr=="object"&&Vr];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function s(i,c){if(c)e:{var h=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in h))break e;h=h[I]}i=i[i.length-1],f=h[i],c=c(f),c!=f&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function u(i,c,h){return i.call.apply(i.bind,arguments)}function d(i,c,h){return d=u,d.apply(null,arguments)}function p(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function y(i,c){function h(){}h.prototype=c.prototype,i.Z=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Ob=function(f,I,b){for(var V=Array(arguments.length-2),j=2;j<arguments.length;j++)V[j-2]=arguments[j];return c.prototype[I].apply(f,V)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function S(i){const c=i.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=i[f];return h}return[]}function R(i,c){for(let f=1;f<arguments.length;f++){const I=arguments[f];var h=typeof I;if(h=h!="object"?h:I?Array.isArray(I)?"array":h:"null",h=="array"||h=="object"&&typeof I.length=="number"){h=i.length||0;const b=I.length||0;i.length=h+b;for(let V=0;V<b;V++)i[h+V]=I[V]}else i.push(I)}}class k{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(i){a.setTimeout(()=>{throw i},0)}function L(){var i=T;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class ${constructor(){this.h=this.g=null}add(c,h){const f=K.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var K=new k(()=>new Te,i=>i.reset());class Te{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let te,re=!1,T=new $,m=()=>{const i=Promise.resolve(void 0);te=()=>{i.then(g)}};function g(){for(var i;i=L();){try{i.h.call(i.g)}catch(h){D(h)}var c=K;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}re=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return i}();function _(i){return/^[\s\xa0]*$/.test(i)}function ve(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}y(ve,E),ve.prototype.init=function(i,c){const h=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var At="closure_listenable_"+(Math.random()*1e6|0),Ah=0;function bh(i,c,h,f,I){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=I,this.key=++Ah,this.da=this.fa=!1}function _r(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function yr(i,c,h){for(const f in i)c.call(h,i[f],f,i)}function Sh(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function Ro(i){const c={};for(const h in i)c[h]=i[h];return c}const Po="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ko(i,c){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)i[h]=f[h];for(let b=0;b<Po.length;b++)h=Po[b],Object.prototype.hasOwnProperty.call(f,h)&&(i[h]=f[h])}}function Er(i){this.src=i,this.g={},this.h=0}Er.prototype.add=function(i,c,h,f,I){const b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);const V=Ns(i,c,f,I);return V>-1?(c=i[V],h||(c.fa=!1)):(c=new bh(c,this.src,b,!!f,I),c.fa=h,i.push(c)),c};function Vs(i,c){const h=c.type;if(h in i.g){var f=i.g[h],I=Array.prototype.indexOf.call(f,c,void 0),b;(b=I>=0)&&Array.prototype.splice.call(f,I,1),b&&(_r(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Ns(i,c,h,f){for(let I=0;I<i.length;++I){const b=i[I];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return I}return-1}var xs="closure_lm_"+(Math.random()*1e6|0),Os={};function Do(i,c,h,f,I){if(Array.isArray(c)){for(let b=0;b<c.length;b++)Do(i,c[b],h,f,I);return null}return h=xo(h),i&&i[At]?i.J(c,h,l(f)?!!f.capture:!1,I):Ch(i,c,h,!1,f,I)}function Ch(i,c,h,f,I,b){if(!c)throw Error("Invalid event type");const V=l(I)?!!I.capture:!!I;let j=Ms(i);if(j||(i[xs]=j=new Er(i)),h=j.add(c,h,f,V,b),h.proxy)return h;if(f=Rh(),h.proxy=f,f.src=i,f.listener=h,i.addEventListener)v||(I=V),I===void 0&&(I=!1),i.addEventListener(c.toString(),f,I);else if(i.attachEvent)i.attachEvent(No(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Rh(){function i(h){return c.call(i.src,i.listener,h)}const c=Ph;return i}function Vo(i,c,h,f,I){if(Array.isArray(c))for(var b=0;b<c.length;b++)Vo(i,c[b],h,f,I);else f=l(f)?!!f.capture:!!f,h=xo(h),i&&i[At]?(i=i.i,b=String(c).toString(),b in i.g&&(c=i.g[b],h=Ns(c,h,f,I),h>-1&&(_r(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete i.g[b],i.h--)))):i&&(i=Ms(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Ns(c,h,f,I)),(h=i>-1?c[i]:null)&&Ls(h))}function Ls(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[At])Vs(c.i,i);else{var h=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(h,f,i.capture):c.detachEvent?c.detachEvent(No(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Ms(c))?(Vs(h,i),h.h==0&&(h.src=null,c[xs]=null)):_r(i)}}}function No(i){return i in Os?Os[i]:Os[i]="on"+i}function Ph(i,c){if(i.da)i=!0;else{c=new ve(c,this);const h=i.listener,f=i.ha||i.src;i.fa&&Ls(i),i=h.call(f,c)}return i}function Ms(i){return i=i[xs],i instanceof Er?i:null}var Us="__closure_events_fn_"+(Math.random()*1e9>>>0);function xo(i){return typeof i=="function"?i:(i[Us]||(i[Us]=function(c){return i.handleEvent(c)}),i[Us])}function me(){w.call(this),this.i=new Er(this),this.M=this,this.G=null}y(me,w),me.prototype[At]=!0,me.prototype.removeEventListener=function(i,c,h,f){Vo(this,i,c,h,f)};function we(i,c){var h,f=i.G;if(f)for(h=[];f;f=f.G)h.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var I=c;c=new E(f,i),ko(c,I)}I=!0;let b,V;if(h)for(V=h.length-1;V>=0;V--)b=c.g=h[V],I=Tr(b,f,!0,c)&&I;if(b=c.g=i,I=Tr(b,f,!0,c)&&I,I=Tr(b,f,!1,c)&&I,h)for(V=0;V<h.length;V++)b=c.g=h[V],I=Tr(b,f,!1,c)&&I}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const h=i.g[c];for(let f=0;f<h.length;f++)_r(h[f]);delete i.g[c],i.h--}}this.G=null},me.prototype.J=function(i,c,h,f){return this.i.add(String(i),c,!1,h,f)},me.prototype.K=function(i,c,h,f){return this.i.add(String(i),c,!0,h,f)};function Tr(i,c,h,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let I=!0;for(let b=0;b<c.length;++b){const V=c[b];if(V&&!V.da&&V.capture==h){const j=V.listener,oe=V.ha||V.src;V.fa&&Vs(i.i,V),I=j.call(oe,f)!==!1&&I}}return I&&!f.defaultPrevented}function kh(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Oo(i){i.g=kh(()=>{i.g=null,i.i&&(i.i=!1,Oo(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Dh extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Oo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(i){w.call(this),this.h=i,this.g={}}y(yn,w);var Lo=[];function Mo(i){yr(i.g,function(c,h){this.g.hasOwnProperty(h)&&Ls(c)},i),i.g={}}yn.prototype.N=function(){yn.Z.N.call(this),Mo(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fs=a.JSON.stringify,Vh=a.JSON.parse,Nh=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Uo(){}function Fo(){}var En={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Bs(){E.call(this,"d")}y(Bs,E);function $s(){E.call(this,"c")}y($s,E);var bt={},Bo=null;function wr(){return Bo=Bo||new me}bt.Ia="serverreachability";function $o(i){E.call(this,bt.Ia,i)}y($o,E);function Tn(i){const c=wr();we(c,new $o(c))}bt.STAT_EVENT="statevent";function jo(i,c){E.call(this,bt.STAT_EVENT,i),this.stat=c}y(jo,E);function Ie(i){const c=wr();we(c,new jo(c,i))}bt.Ja="timingevent";function qo(i,c){E.call(this,bt.Ja,i),this.size=c}y(qo,E);function wn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function In(){this.g=!0}In.prototype.ua=function(){this.g=!1};function xh(i,c,h,f,I,b){i.info(function(){if(i.g)if(b){var V="",j=b.split("&");for(let Q=0;Q<j.length;Q++){var oe=j[Q].split("=");if(oe.length>1){const le=oe[0];oe=oe[1];const Oe=le.split("_");V=Oe.length>=2&&Oe[1]=="type"?V+(le+"="+oe+"&"):V+(le+"=redacted&")}}}else V=null;else V=b;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+h+`
`+V})}function Oh(i,c,h,f,I,b,V){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+h+`
`+b+" "+V})}function Ht(i,c,h,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Mh(i,h)+(f?" "+f:"")})}function Lh(i,c){i.info(function(){return"TIMEOUT: "+c})}In.prototype.info=function(){};function Mh(i,c){if(!i.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(i=0;i<b.length;i++)if(Array.isArray(b[i])){var h=b[i];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var I=f[0];if(I!="noop"&&I!="stop"&&I!="close")for(let V=1;V<f.length;V++)f[V]=""}}}}return Fs(b)}catch{return c}}var Ir={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ho;function js(){}y(js,Uo),js.prototype.g=function(){return new XMLHttpRequest},Ho=new js;function vn(i){return encodeURIComponent(String(i))}function Uh(i){var c=1;i=i.split(":");const h=[];for(;c>0&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function Ze(i,c,h,f){this.j=i,this.i=c,this.l=h,this.S=f||1,this.V=new yn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wo}function Wo(){this.i=null,this.g="",this.h=!1}var Go={},qs={};function zs(i,c,h){i.M=1,i.A=Ar(xe(c)),i.u=h,i.R=!0,Ko(i,null)}function Ko(i,c){i.F=Date.now(),vr(i),i.B=xe(i.A);var h=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),aa(h.i,"t",f),i.C=0,h=i.j.L,i.h=new Wo,i.g=ba(i.j,h?c:null,!i.u),i.P>0&&(i.O=new Dh(d(i.Y,i,i.g),i.P)),c=i.V,h=i.g,f=i.ba;var I="readystatechange";Array.isArray(I)||(I&&(Lo[0]=I.toString()),I=Lo);for(let b=0;b<I.length;b++){const V=Do(h,I[b],f||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=i.J?Ro(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Tn(),xh(i.i,i.v,i.B,i.l,i.S,i.u)}Ze.prototype.ba=function(i){i=i.target;const c=this.O;c&&nt(i)==3?c.j():this.Y(i)},Ze.prototype.Y=function(i){try{if(i==this.g)e:{const j=nt(this.g),oe=this.g.ya(),Q=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||pa(this.g)))){this.K||j!=4||oe==7||(oe==8||Q<=0?Tn(3):Tn(2)),Hs(this);var c=this.g.ca();this.X=c;var h=Fh(this);if(this.o=c==200,Oh(this.i,this.v,this.B,this.l,this.S,j,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,I=this.g;if((f=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var b=f;break t}}b=null}if(i=b)Ht(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ws(this,i);else{this.o=!1,this.m=3,Ie(12),St(this),An(this);break e}}if(this.R){i=!0;let le;for(;!this.K&&this.C<h.length;)if(le=Bh(this,h),le==qs){j==4&&(this.m=4,Ie(14),i=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(le==Go){this.m=4,Ie(15),Ht(this.i,this.l,h,"[Invalid Chunk]"),i=!1;break}else Ht(this.i,this.l,le,null),Ws(this,le);if(Qo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||h.length!=0||this.h.h||(this.m=1,Ie(16),i=!1),this.o=this.o&&i,!i)Ht(this.i,this.l,h,"[Invalid Chunked Response]"),St(this),An(this);else if(h.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ei(V),V.P=!0,Ie(11))}}else Ht(this.i,this.l,h,null),Ws(this,h);j==4&&St(this),this.o&&!this.K&&(j==4?wa(this.j,this):(this.o=!1,vr(this)))}else ed(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),St(this),An(this)}}}catch{}finally{}};function Fh(i){if(!Qo(i))return i.g.la();const c=pa(i.g);if(c==="")return"";let h="";const f=c.length,I=nt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return St(i),An(i),"";i.h.i=new a.TextDecoder}for(let b=0;b<f;b++)i.h.h=!0,h+=i.h.i.decode(c[b],{stream:!(I&&b==f-1)});return c.length=0,i.h.g+=h,i.C=0,i.h.g}function Qo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Bh(i,c){var h=i.C,f=c.indexOf(`
`,h);return f==-1?qs:(h=Number(c.substring(h,f)),isNaN(h)?Go:(f+=1,f+h>c.length?qs:(c=c.slice(f,f+h),i.C=f+h,c)))}Ze.prototype.cancel=function(){this.K=!0,St(this)};function vr(i){i.T=Date.now()+i.H,Yo(i,i.H)}function Yo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=wn(d(i.aa,i),c)}function Hs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Ze.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Lh(this.i,this.B),this.M!=2&&(Tn(),Ie(17)),St(this),this.m=2,An(this)):Yo(this,this.T-i)};function An(i){i.j.I==0||i.K||wa(i.j,i)}function St(i){Hs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Mo(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Ws(i,c){try{var h=i.j;if(h.I!=0&&(h.g==i||Gs(h.h,i))){if(!i.L&&Gs(h.h,i)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<i.F)Pr(h),Cr(h);else break e;Zs(h),Ie(18)}}else h.xa=I[1],0<h.xa-h.K&&I[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=wn(d(h.Va,h),6e3));Zo(h.h)<=1&&h.ta&&(h.ta=void 0)}else Rt(h,11)}else if((i.L||h.g==i)&&Pr(h),!_(c))for(I=h.Ba.g.parse(c),c=0;c<I.length;c++){let Q=I[c];const le=Q[0];if(!(le<=h.K))if(h.K=le,Q=Q[1],h.I==2)if(Q[0]=="c"){h.M=Q[1],h.ba=Q[2];const Oe=Q[3];Oe!=null&&(h.ka=Oe,h.j.info("VER="+h.ka));const Pt=Q[4];Pt!=null&&(h.za=Pt,h.j.info("SVER="+h.za));const rt=Q[5];rt!=null&&typeof rt=="number"&&rt>0&&(f=1.5*rt,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const st=i.g;if(st){const Dr=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dr){var b=f.h;b.g||Dr.indexOf("spdy")==-1&&Dr.indexOf("quic")==-1&&Dr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ks(b,b.h),b.h=null))}if(f.G){const ti=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;ti&&(f.wa=ti,Y(f.J,f.G,ti))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-i.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var V=i;if(f.na=Aa(f,f.L?f.ba:null,f.W),V.L){ea(f.h,V);var j=V,oe=f.O;oe&&(j.H=oe),j.D&&(Hs(j),vr(j)),f.g=V}else Ea(f);h.i.length>0&&Rr(h)}else Q[0]!="stop"&&Q[0]!="close"||Rt(h,7);else h.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Rt(h,7):Xs(h):Q[0]!="noop"&&h.l&&h.l.qa(Q),h.A=0)}}Tn(4)}catch{}}var $h=class{constructor(i,c){this.g=i,this.map=c}};function Jo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Zo(i){return i.h?1:i.g?i.g.size:0}function Gs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Ks(i,c){i.g?i.g.add(c):i.h=c}function ea(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Jo.prototype.cancel=function(){if(this.i=ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ta(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.G);return c}return S(i.i)}var na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jh(i,c){if(i){i=i.split("&");for(let h=0;h<i.length;h++){const f=i[h].indexOf("=");let I,b=null;f>=0?(I=i[h].substring(0,f),b=i[h].substring(f+1)):I=i[h],c(I,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function et(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof et?(this.l=i.l,bn(this,i.j),this.o=i.o,this.g=i.g,Sn(this,i.u),this.h=i.h,Qs(this,ca(i.i)),this.m=i.m):i&&(c=String(i).match(na))?(this.l=!1,bn(this,c[1]||"",!0),this.o=Cn(c[2]||""),this.g=Cn(c[3]||"",!0),Sn(this,c[4]),this.h=Cn(c[5]||"",!0),Qs(this,c[6]||"",!0),this.m=Cn(c[7]||"")):(this.l=!1,this.i=new Pn(null,this.l))}et.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Rn(c,ra,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Rn(c,ra,!0),"@"),i.push(vn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&i.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Rn(h,h.charAt(0)=="/"?Hh:zh,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Rn(h,Gh)),i.join("")},et.prototype.resolve=function(i){const c=xe(this);let h=!!i.j;h?bn(c,i.j):h=!!i.o,h?c.o=i.o:h=!!i.g,h?c.g=i.g:h=i.u!=null;var f=i.h;if(h)Sn(c,i.u);else if(h=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var I=c.h.lastIndexOf("/");I!=-1&&(f=c.h.slice(0,I+1)+f)}if(I=f,I==".."||I==".")f="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){f=I.lastIndexOf("/",0)==0,I=I.split("/");const b=[];for(let V=0;V<I.length;){const j=I[V++];j=="."?f&&V==I.length&&b.push(""):j==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),f&&V==I.length&&b.push("")):(b.push(j),f=!0)}f=b.join("/")}else f=I}return h?c.h=f:h=i.i.toString()!=="",h?Qs(c,ca(i.i)):h=!!i.m,h&&(c.m=i.m),c};function xe(i){return new et(i)}function bn(i,c,h){i.j=h?Cn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Sn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Qs(i,c,h){c instanceof Pn?(i.i=c,Kh(i.i,i.l)):(h||(c=Rn(c,Wh)),i.i=new Pn(c,i.l))}function Y(i,c,h){i.i.set(c,h)}function Ar(i){return Y(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Cn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Rn(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,qh),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function qh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ra=/[#\/\?@]/g,zh=/[#\?:]/g,Hh=/[#\?]/g,Wh=/[#\?@]/g,Gh=/#/g;function Pn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Ct(i){i.g||(i.g=new Map,i.h=0,i.i&&jh(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Pn.prototype,r.add=function(i,c){Ct(this),this.i=null,i=Wt(this,i);let h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function sa(i,c){Ct(i),c=Wt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function ia(i,c){return Ct(i),c=Wt(i,c),i.g.has(c)}r.forEach=function(i,c){Ct(this),this.g.forEach(function(h,f){h.forEach(function(I){i.call(c,I,f,this)},this)},this)};function oa(i,c){Ct(i);let h=[];if(typeof c=="string")ia(i,c)&&(h=h.concat(i.g.get(Wt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)h=h.concat(i[c]);return h}r.set=function(i,c){return Ct(this),this.i=null,i=Wt(this,i),ia(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},r.get=function(i,c){return i?(i=oa(this,i),i.length>0?String(i[0]):c):c};function aa(i,c,h){sa(i,c),h.length>0&&(i.i=null,i.g.set(Wt(i,c),S(h)),i.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const I=vn(h);h=oa(this,h);for(let b=0;b<h.length;b++){let V=I;h[b]!==""&&(V+="="+vn(h[b])),i.push(V)}}return this.i=i.join("&")};function ca(i){const c=new Pn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Wt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Kh(i,c){c&&!i.j&&(Ct(i),i.i=null,i.g.forEach(function(h,f){const I=f.toLowerCase();f!=I&&(sa(this,f),aa(this,I,h))},i)),i.j=c}function Qh(i,c){const h=new In;if(a.Image){const f=new Image;f.onload=p(tt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(tt,h,"TestLoadImage: error",!1,c,f),f.onabort=p(tt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(tt,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Yh(i,c){const h=new In,f=new AbortController,I=setTimeout(()=>{f.abort(),tt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(I),b.ok?tt(h,"TestPingServer: ok",!0,c):tt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),tt(h,"TestPingServer: error",!1,c)})}function tt(i,c,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function Jh(){this.g=new Nh}function Ys(i){this.i=i.Sb||null,this.h=i.ab||!1}y(Ys,Uo),Ys.prototype.g=function(){return new br(this.i,this.h)};function br(i,c){me.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(br,me),r=br.prototype,r.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Dn(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},r.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;la(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function la(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}r.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?kn(this):Dn(this),this.readyState==3&&la(this)}},r.Oa=function(i){this.g&&(this.response=this.responseText=i,kn(this))},r.Na=function(i){this.g&&(this.response=i,kn(this))},r.ga=function(){this.g&&kn(this)};function kn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Dn(i)}r.setRequestHeader=function(i,c){this.A.append(i,c)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function Dn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ua(i){let c="";return yr(i,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Js(i,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ua(h),typeof i=="string"?h!=null&&vn(h):Y(i,c,h))}function ee(i){me.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ee,me);var Xh=/^https?$/i,Zh=["POST","PUT"];r=ee.prototype,r.Fa=function(i){this.H=i},r.ea=function(i,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ho.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(b){ha(this,b);return}if(i=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),I=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Zh,c,void 0)>=0)||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,V]of h)this.g.setRequestHeader(b,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(b){ha(this,b)}};function ha(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,da(i),Sr(i)}function da(i){i.A||(i.A=!0,we(i,"complete"),we(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,we(this,"complete"),we(this,"abort"),Sr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sr(this,!0)),ee.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?fa(this):this.Xa())},r.Xa=function(){fa(this)};function fa(i){if(i.h&&typeof o<"u"){if(i.v&&nt(i)==4)setTimeout(i.Ca.bind(i),0);else if(we(i,"readystatechange"),nt(i)==4){i.h=!1;try{const b=i.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=b===0){let V=String(i.D).match(na)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),f=!Xh.test(V?V.toLowerCase():"")}h=f}if(h)we(i,"complete"),we(i,"success");else{i.o=6;try{var I=nt(i)>2?i.g.statusText:""}catch{I=""}i.l=I+" ["+i.ca()+"]",da(i)}}finally{Sr(i)}}}}function Sr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const h=i.g;i.g=null,c||we(i,"ready");try{h.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function nt(i){return i.g?i.g.readyState:0}r.ca=function(){try{return nt(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Vh(c)}};function pa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ed(i){const c={};i=(i.g&&nt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(_(i[f]))continue;var h=Uh(i[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[I]||[];c[I]=b,b.push(h)}Sh(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function ma(i){this.za=0,this.i=[],this.j=new In,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vn("baseRetryDelayMs",5e3,i),this.Za=Vn("retryDelaySeedMs",1e4,i),this.Ta=Vn("forwardChannelMaxRetries",2,i),this.va=Vn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Jo(i&&i.concurrentRequestLimit),this.Ba=new Jh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=ma.prototype,r.ka=8,r.I=1,r.connect=function(i,c,h,f){Ie(0),this.W=i,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Aa(this,null,this.W),Rr(this)};function Xs(i){if(ga(i),i.I==3){var c=i.V++,h=xe(i.J);if(Y(h,"SID",i.M),Y(h,"RID",c),Y(h,"TYPE","terminate"),Nn(i,h),c=new Ze(i,i.j,c),c.M=2,c.A=Ar(xe(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=ba(c.j,null),c.g.ea(c.A)),c.F=Date.now(),vr(c)}va(i)}function Cr(i){i.g&&(ei(i),i.g.cancel(),i.g=null)}function ga(i){Cr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Pr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Rr(i){if(!Xo(i.h)&&!i.m){i.m=!0;var c=i.Ea;te||m(),re||(te(),re=!0),T.add(c,i),i.D=0}}function td(i,c){return Zo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=wn(d(i.Ea,i,c),Ia(i,i.D)),i.D++,!0)}r.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const I=new Ze(this,this.j,i);let b=this.o;if(this.U&&(b?(b=Ro(b),ko(b,this.U)):b=this.U),this.u!==null||this.R||(I.J=b,b=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ya(this,I,c),h=xe(this.J),Y(h,"RID",i),Y(h,"CVER",22),this.G&&Y(h,"X-HTTP-Session-Id",this.G),Nn(this,h),b&&(this.R?c="headers="+vn(ua(b))+"&"+c:this.u&&Js(h,this.u,b)),Ks(this.h,I),this.Ra&&Y(h,"TYPE","init"),this.S?(Y(h,"$req",c),Y(h,"SID","null"),I.U=!0,zs(I,h,null)):zs(I,h,c),this.I=2}}else this.I==3&&(i?_a(this,i):this.i.length==0||Xo(this.h)||_a(this))};function _a(i,c){var h;c?h=c.l:h=i.V++;const f=xe(i.J);Y(f,"SID",i.M),Y(f,"RID",h),Y(f,"AID",i.K),Nn(i,f),i.u&&i.o&&Js(f,i.u,i.o),h=new Ze(i,i.j,h,i.D+1),i.u===null&&(h.J=i.o),c&&(i.i=c.G.concat(i.i)),c=ya(i,h,1e3),h.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Ks(i.h,h),zs(h,f,c)}function Nn(i,c){i.H&&yr(i.H,function(h,f){Y(c,f,h)}),i.l&&yr({},function(h,f){Y(c,f,h)})}function ya(i,c,h){h=Math.min(i.i.length,h);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var I=i.i;let j=-1;for(;;){const oe=["count="+h];j==-1?h>0?(j=I[0].g,oe.push("ofs="+j)):j=0:oe.push("ofs="+j);let Q=!0;for(let le=0;le<h;le++){var b=I[le].g;const Oe=I[le].map;if(b-=j,b<0)j=Math.max(0,I[le].g-100),Q=!1;else try{b="req"+b+"_"||"";try{var V=Oe instanceof Map?Oe:Object.entries(Oe);for(const[Pt,rt]of V){let st=rt;l(rt)&&(st=Fs(rt)),oe.push(b+Pt+"="+encodeURIComponent(st))}}catch(Pt){throw oe.push(b+"type="+encodeURIComponent("_badmap")),Pt}}catch{f&&f(Oe)}}if(Q){V=oe.join("&");break e}}V=void 0}return i=i.i.splice(0,h),c.G=i,V}function Ea(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;te||m(),re||(te(),re=!0),T.add(c,i),i.A=0}}function Zs(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=wn(d(i.Da,i),Ia(i,i.A)),i.A++,!0)}r.Da=function(){if(this.v=null,Ta(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=wn(d(this.Wa,this),i)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),Cr(this),Ta(this))};function ei(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Ta(i){i.g=new Ze(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=xe(i.na);Y(c,"RID","rpc"),Y(c,"SID",i.M),Y(c,"AID",i.K),Y(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&Y(c,"TO",i.ia),Y(c,"TYPE","xmlhttp"),Nn(i,c),i.u&&i.o&&Js(c,i.u,i.o),i.O&&(i.g.H=i.O);var h=i.g;i=i.ba,h.M=1,h.A=Ar(xe(c)),h.u=null,h.R=!0,Ko(h,i)}r.Va=function(){this.C!=null&&(this.C=null,Cr(this),Zs(this),Ie(19))};function Pr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function wa(i,c){var h=null;if(i.g==c){Pr(i),ei(i),i.g=null;var f=2}else if(Gs(i.h,c))h=c.G,ea(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var I=i.D;f=wr(),we(f,new qo(f,h)),Rr(i)}else Ea(i);else if(I=c.m,I==3||I==0&&c.X>0||!(f==1&&td(i,c)||f==2&&Zs(i)))switch(h&&h.length>0&&(c=i.h,c.i=c.i.concat(h)),I){case 1:Rt(i,5);break;case 4:Rt(i,10);break;case 3:Rt(i,6);break;default:Rt(i,2)}}}function Ia(i,c){let h=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(h*=2),h*c}function Rt(i,c){if(i.j.info("Error code "+c),c==2){var h=d(i.bb,i),f=i.Ua;const I=!f;f=new et(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bn(f,"https"),Ar(f),I?Qh(f.toString(),h):Yh(f.toString(),h)}else Ie(2);i.I=0,i.l&&i.l.pa(c),va(i),ga(i)}r.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function va(i){if(i.I=0,i.ja=[],i.l){const c=ta(i.h);(c.length!=0||i.i.length!=0)&&(R(i.ja,c),R(i.ja,i.i),i.h.i.length=0,S(i.i),i.i.length=0),i.l.oa()}}function Aa(i,c,h){var f=h instanceof et?xe(h):new et(h);if(f.g!="")c&&(f.g=c+"."+f.g),Sn(f,f.u);else{var I=a.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;const b=new et(null);f&&bn(b,f),c&&(b.g=c),I&&Sn(b,I),h&&(b.h=h),f=b}return h=i.G,c=i.wa,h&&c&&Y(f,h,c),Y(f,"VER",i.ka),Nn(i,f),f}function ba(i,c,h){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ee(new Ys({ab:h})):new ee(i.ma),c.Fa(i.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}r=Sa.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function kr(){}kr.prototype.g=function(i,c){return new be(i,c)};function be(i,c){me.call(this),this.g=new ma(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!_(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Gt(this)}y(be,me),be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){Xs(this.g)},be.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.v&&(h={},h.__data__=Fs(i),i=h);c.i.push(new $h(c.Ya++,i)),c.I==3&&Rr(c)},be.prototype.N=function(){this.g.l=null,delete this.j,Xs(this.g),delete this.g,be.Z.N.call(this)};function Ca(i){Bs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}y(Ca,Bs);function Ra(){$s.call(this),this.status=1}y(Ra,$s);function Gt(i){this.g=i}y(Gt,Sa),Gt.prototype.ra=function(){we(this.g,"a")},Gt.prototype.qa=function(i){we(this.g,new Ca(i))},Gt.prototype.pa=function(i){we(this.g,new Ra)},Gt.prototype.oa=function(){we(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,wl=function(){return new kr},Tl=function(){return wr()},El=bt,Ei={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ir.NO_ERROR=0,Ir.TIMEOUT=8,Ir.HTTP_ERROR=6,Fr=Ir,zo.COMPLETE="complete",yl=zo,Fo.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",me.prototype.listen=me.prototype.J,Fn=Fo,ee.prototype.listenOnce=ee.prototype.K,ee.prototype.getLastError=ee.prototype.Ha,ee.prototype.getLastErrorCode=ee.prototype.ya,ee.prototype.getStatus=ee.prototype.ca,ee.prototype.getResponseJson=ee.prototype.La,ee.prototype.getResponseText=ee.prototype.la,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Fa,_l=ee}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
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
 */const Ot=new Fi("@firebase/firestore");function Kt(){return Ot.logLevel}function N(r,...e){if(Ot.logLevel<=q.DEBUG){const t=e.map(ji);Ot.debug(`Firestore (${fn}): ${r}`,...t)}}function Qe(r,...e){if(Ot.logLevel<=q.ERROR){const t=e.map(ji);Ot.error(`Firestore (${fn}): ${r}`,...t)}}function Lt(r,...e){if(Ot.logLevel<=q.WARN){const t=e.map(ji);Ot.warn(`Firestore (${fn}): ${r}`,...t)}}function ji(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function U(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Il(r,n,t)}function Il(r,e,t){let n=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Qe(n),new Error(n)}function G(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Il(e,s,n)}function B(r,e){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Xe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $f{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class jf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qf{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let o=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new vl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new _e(e)}}class zf{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Hf{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new zf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ba{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ce(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ba(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ba(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class qi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Gf(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<t&&(n+=e.charAt(s[o]%62))}return n}}function z(r,e){return r<e?-1:r>e?1:0}function Ti(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),o=e.charAt(n);if(s!==o)return ai(s)===ai(o)?z(s,o):ai(s)?1:-1}return z(r.length,e.length)}const Kf=55296,Qf=57343;function ai(r){const e=r.charCodeAt(0);return e>=Kf&&e<=Qf}function on(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
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
 */const $a="__name__";class Le{constructor(e,t,n){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&U(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Le?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const o=Le.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return z(e.length,t.length)}static compareSegments(e,t){const n=Le.isNumericId(e),s=Le.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Le.extractNumericId(e).compare(Le.extractNumericId(t)):Ti(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pt.fromString(e.substring(4,e.length-2))}}class X extends Le{construct(e,t,n){return new X(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const Yf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends Le{construct(e,t,n){return new fe(e,t,n)}static isValidIdentifier(e){return Yf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$a}static keyField(){return new fe([$a])}static fromServerFormat(e){const t=[];let n="",s=0;const o=()=>{if(n.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(n+=l,s++):(o(),s++)}if(o(),a)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(X.fromString(e))}static fromName(e){return new O(X.fromString(e).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new X(e.slice()))}}/**
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
 */function Jf(r,e,t){if(!t)throw new x(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Xf(r,e,t,n){if(e===!0&&n===!0)throw new x(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ja(r){if(!O.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Al(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function zi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":U(12329,{type:typeof r})}function an(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zi(r);throw new x(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ie(r,e){const t={typeString:r};return e&&(t.value=e),t}function cr(r,e){if(!Al(r))throw new x(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,o="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${n}' field to equal '${o.value}'`;break}}if(t)throw new x(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const qa=-62135596800,za=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*za);return new J(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qa)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/za}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cr(e,J._jsonSchema))return new J(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:ie("string",J._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};/**
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
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new J(0,0))}static max(){return new F(new J(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yn=-1;function Zf(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=F.fromTimestamp(n===1e9?new J(t+1,0):new J(t,n));return new gt(s,O.empty(),e)}function ep(r){return new gt(r.readTime,r.key,Yn)}class gt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new gt(F.min(),O.empty(),Yn)}static max(){return new gt(F.max(),O.empty(),Yn)}}function tp(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:z(r.largestBatchId,e.largestBatchId))}/**
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
 */async function pn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==np)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,n)=>{t(e)})}static reject(e){return new C((t,n)=>{n(e)})}static waitFor(e){return new C((t,n)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&t()},u=>n(u))}),a=!0,o===s&&t()})}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next(s=>s?C.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,o)=>{n.push(t.call(this,s,o))}),this.waitFor(n)}static mapArray(e,t){return new C((n,s)=>{const o=e.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===o&&n(a)},p=>s(p))}})}static doWhile(e,t){return new C((n,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):n()};o()})}}function sp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const bl="";function op(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ha(e)),e=ap(r.get(t),e);return Ha(e)}function ap(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":t+="";break;case bl:t+="";break;default:t+=o}}return t}function Ha(r){return r+bl+""}/**
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
 */class Z{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nr(this.root,e,this.comparator,!0)}}class Nr{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,n,s,o){this.key=e,this.value=t,this.color=n??de.RED,this.left=s??de.EMPTY,this.right=o??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,o){return new de(e??this.key,t??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const o=n(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,n),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return de.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,n,s,o){return this}insert(e,t,n){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ce{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ga(this.data.getIterator())}getIteratorFrom(e){return new Ga(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Ga{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Cl("Invalid base64 string: "+o):o}}(e);return new pe(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const cp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(r){if(G(!!r,39018),typeof r=="string"){let e=0;const t=cp.exec(r);if(G(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ne(r.seconds),nanos:ne(r.nanos)}}function ne(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function yt(r){return typeof r=="string"?pe.fromBase64String(r):pe.fromUint8Array(r)}/**
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
 */const Rl="server_timestamp",Pl="__type__",kl="__previous_value__",Dl="__local_write_time__";function Wi(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Pl])==null?void 0:n.stringValue)===Rl}function ys(r){const e=r.mapValue.fields[kl];return Wi(e)?ys(e):e}function Jn(r){const e=_t(r.mapValue.fields[Dl].timestampValue);return new J(e.seconds,e.nanos)}/**
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
 */class lp{constructor(e,t,n,s,o,a,l,u,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=y}}const Xr="(default)";class Xn{constructor(e,t){this.projectId=e,this.database=t||Xr}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===Xr}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}function up(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(r.options.projectId,e)}/**
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
 */const Vl="__type__",hp="__max__",xr={mapValue:{}},Nl="__vector__",Zr="value";function Et(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Wi(r)?4:fp(r)?9007199254740991:dp(r)?10:11:U(28295,{value:r})}function qe(r,e){if(r===e)return!0;const t=Et(r);if(t!==Et(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Jn(r).isEqual(Jn(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=_t(s.timestampValue),l=_t(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,o){return yt(s.bytesValue).isEqual(yt(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,o){return ne(s.geoPointValue.latitude)===ne(o.geoPointValue.latitude)&&ne(s.geoPointValue.longitude)===ne(o.geoPointValue.longitude)}(r,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ne(s.integerValue)===ne(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ne(s.doubleValue),l=ne(o.doubleValue);return a===l?Jr(a)===Jr(l):isNaN(a)&&isNaN(l)}return!1}(r,e);case 9:return on(r.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Wa(a)!==Wa(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!qe(a[u],l[u])))return!1;return!0}(r,e);default:return U(52216,{left:r})}}function Zn(r,e){return(r.values||[]).find(t=>qe(t,e))!==void 0}function cn(r,e){if(r===e)return 0;const t=Et(r),n=Et(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,e.booleanValue);case 2:return function(o,a){const l=ne(o.integerValue||o.doubleValue),u=ne(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(r,e);case 3:return Ka(r.timestampValue,e.timestampValue);case 4:return Ka(Jn(r),Jn(e));case 5:return Ti(r.stringValue,e.stringValue);case 6:return function(o,a){const l=yt(o),u=yt(a);return l.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=z(l[d],u[d]);if(p!==0)return p}return z(l.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(o,a){const l=z(ne(o.latitude),ne(a.latitude));return l!==0?l:z(ne(o.longitude),ne(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Qa(r.arrayValue,e.arrayValue);case 10:return function(o,a){var A,S,R,k;const l=o.fields||{},u=a.fields||{},d=(A=l[Zr])==null?void 0:A.arrayValue,p=(S=u[Zr])==null?void 0:S.arrayValue,y=z(((R=d==null?void 0:d.values)==null?void 0:R.length)||0,((k=p==null?void 0:p.values)==null?void 0:k.length)||0);return y!==0?y:Qa(d,p)}(r.mapValue,e.mapValue);case 11:return function(o,a){if(o===xr.mapValue&&a===xr.mapValue)return 0;if(o===xr.mapValue)return 1;if(a===xr.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const A=Ti(u[y],p[y]);if(A!==0)return A;const S=cn(l[u[y]],d[p[y]]);if(S!==0)return S}return z(u.length,p.length)}(r.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Ka(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return z(r,e);const t=_t(r),n=_t(e),s=z(t.seconds,n.seconds);return s!==0?s:z(t.nanos,n.nanos)}function Qa(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const o=cn(t[s],n[s]);if(o)return o}return z(t.length,n.length)}function ln(r){return wi(r)}function wi(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=_t(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return yt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const o of t.values||[])s?s=!1:n+=",",n+=wi(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${wi(t.fields[a])}`;return s+"}"}(r.mapValue):U(61005,{value:r})}function Br(r){switch(Et(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ys(r);return e?16+Br(e):16;case 5:return 2*r.stringValue.length;case 6:return yt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+Br(o),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Bt(n.fields,(o,a)=>{s+=o.length+Br(a)}),s}(r.mapValue);default:throw U(13486,{value:r})}}function Ii(r){return!!r&&"integerValue"in r}function Gi(r){return!!r&&"arrayValue"in r}function Ya(r){return!!r&&"nullValue"in r}function Ja(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $r(r){return!!r&&"mapValue"in r}function dp(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Vl])==null?void 0:n.stringValue)===Nl}function qn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Bt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=qn(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qn(r.arrayValue.values[t]);return e}return{...r}}function fp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===hp}/**
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!$r(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qn(t)}setAll(e){let t=fe.emptyPath(),n={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=l.popLast()}a?n[l.lastSegment()]=qn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,n,s)}delete(e){const t=this.field(e.popLast());$r(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];$r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Bt(t,(s,o)=>e[s]=o);for(const s of n)delete e[s]}clone(){return new Re(qn(this.value))}}function xl(r){const e=[];return Bt(r.fields,(t,n)=>{const s=new fe([t]);if($r(n)){const o=xl(n.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new ke(e)}/**
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
 */class ye{constructor(e,t,n,s,o,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ye(e,0,F.min(),F.min(),F.min(),Re.empty(),0)}static newFoundDocument(e,t,n,s){return new ye(e,1,t,F.min(),n,s,0)}static newNoDocument(e,t){return new ye(e,2,t,F.min(),F.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,F.min(),F.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class es{constructor(e,t){this.position=e,this.inclusive=t}}function Xa(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const o=e[s],a=r.position[s];if(o.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),t.key):n=cn(a,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Za(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!qe(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ol{}class ae extends Ol{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new gp(e,t,n):t==="array-contains"?new Ep(e,n):t==="in"?new Tp(e,n):t==="not-in"?new wp(e,n):t==="array-contains-any"?new Ip(e,n):new ae(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new _p(e,n):new yp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cn(t,this.value)):t!==null&&Et(this.value)===Et(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends Ol{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ze(e,t)}matches(e){return Ll(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ll(r){return r.op==="and"}function Ml(r){return mp(r)&&Ll(r)}function mp(r){for(const e of r.filters)if(e instanceof ze)return!1;return!0}function vi(r){if(r instanceof ae)return r.field.canonicalString()+r.op.toString()+ln(r.value);if(Ml(r))return r.filters.map(e=>vi(e)).join(",");{const e=r.filters.map(t=>vi(t)).join(",");return`${r.op}(${e})`}}function Ul(r,e){return r instanceof ae?function(n,s){return s instanceof ae&&n.op===s.op&&n.field.isEqual(s.field)&&qe(n.value,s.value)}(r,e):r instanceof ze?function(n,s){return s instanceof ze&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,a,l)=>o&&Ul(a,s.filters[l]),!0):!1}(r,e):void U(19439)}function Fl(r){return r instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${ln(t.value)}`}(r):r instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(Fl).join(" ,")+"}"}(r):"Filter"}class gp extends ae{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class _p extends ae{constructor(e,t){super(e,"in",t),this.keys=Bl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yp extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Bl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bl(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class Ep extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gi(t)&&Zn(t.arrayValue,this.value)}}class Tp extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zn(this.value.arrayValue,t)}}class wp extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zn(this.value.arrayValue,t)}}class Ip extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Zn(this.value.arrayValue,n))}}/**
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
 */class vp{constructor(e,t=null,n=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function ec(r,e=null,t=[],n=[],s=null,o=null,a=null){return new vp(r,e,t,n,s,o,a)}function Ki(r){const e=B(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>vi(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ln(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ln(n)).join(",")),e.Te=t}return e.Te}function Qi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!pp(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ul(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Za(r.startAt,e.startAt)&&Za(r.endAt,e.endAt)}function Ai(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Es{constructor(e,t=null,n=[],s=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Ap(r,e,t,n,s,o,a,l){return new Es(r,e,t,n,s,o,a,l)}function Yi(r){return new Es(r)}function tc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function bp(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Sp(r){return r.collectionGroup!==null}function zn(r){const e=B(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ce(fe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new ts(o,n))}),t.has(fe.keyField().canonicalString())||e.Ee.push(new ts(fe.keyField(),n))}return e.Ee}function Me(r){const e=B(r);return e.Ie||(e.Ie=Cp(e,zn(r))),e.Ie}function Cp(r,e){if(r.limitType==="F")return ec(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ts(s.field,o)});const t=r.endAt?new es(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new es(r.startAt.position,r.startAt.inclusive):null;return ec(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function bi(r,e,t){return new Es(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ts(r,e){return Qi(Me(r),Me(e))&&r.limitType===e.limitType}function $l(r){return`${Ki(Me(r))}|lt:${r.limitType}`}function Qt(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Fl(s)).join(", ")}]`),_s(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ln(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ln(s)).join(",")),`Target(${n})`}(Me(r))}; limitType=${r.limitType})`}function ws(r,e){return e.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,e)&&function(n,s){for(const o of zn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,l,u){const d=Xa(a,l,u);return a.inclusive?d<=0:d<0}(n.startAt,zn(n),s)||n.endAt&&!function(a,l,u){const d=Xa(a,l,u);return a.inclusive?d>=0:d>0}(n.endAt,zn(n),s))}(r,e)}function Rp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function jl(r){return(e,t)=>{let n=!1;for(const s of zn(r)){const o=Pp(s,e,t);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Pp(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(o,a,l){const u=a.data.field(o),d=l.data.field(o);return u!==null&&d!==null?cn(u,d):U(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return U(19790,{direction:r.dir})}}/**
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
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,(t,n)=>{for(const[s,o]of n)e(s,o)})}isEmpty(){return Sl(this.inner)}size(){return this.innerSize}}/**
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
 */const kp=new Z(O.comparator);function Ye(){return kp}const ql=new Z(O.comparator);function Bn(...r){let e=ql;for(const t of r)e=e.insert(t.key,t);return e}function zl(r){let e=ql;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Dt(){return Hn()}function Hl(){return Hn()}function Hn(){return new $t(r=>r.toString(),(r,e)=>r.isEqual(e))}const Dp=new Z(O.comparator),Vp=new ce(O.comparator);function H(...r){let e=Vp;for(const t of r)e=e.add(t);return e}const Np=new ce(z);function xp(){return Np}/**
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
 */class Is{constructor(){this._=void 0}}function Lp(r,e,t){return r instanceof ns?function(s,o){const a={fields:{[Pl]:{stringValue:Rl},[Dl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Wi(o)&&(o=ys(o)),o&&(a.fields[kl]=o),{mapValue:a}}(t,e):r instanceof er?Kl(r,e):r instanceof tr?Ql(r,e):function(s,o){const a=Gl(s,o),l=nc(a)+nc(s.Ae);return Ii(a)&&Ii(s.Ae)?Wl(l):Ji(s.serializer,l)}(r,e)}function Mp(r,e,t){return r instanceof er?Kl(r,e):r instanceof tr?Ql(r,e):t}function Gl(r,e){return r instanceof rs?function(n){return Ii(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class ns extends Is{}class er extends Is{constructor(e){super(),this.elements=e}}function Kl(r,e){const t=Yl(e);for(const n of r.elements)t.some(s=>qe(s,n))||t.push(n);return{arrayValue:{values:t}}}class tr extends Is{constructor(e){super(),this.elements=e}}function Ql(r,e){let t=Yl(e);for(const n of r.elements)t=t.filter(s=>!qe(s,n));return{arrayValue:{values:t}}}class rs extends Is{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function nc(r){return ne(r.integerValue||r.doubleValue)}function Yl(r){return Gi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Up(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof er&&s instanceof er||n instanceof tr&&s instanceof tr?on(n.elements,s.elements,qe):n instanceof rs&&s instanceof rs?qe(n.Ae,s.Ae):n instanceof ns&&s instanceof ns}(r.transform,e.transform)}class Fp{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jr(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class vs{}function Jl(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Xi(r.key,Ue.none()):new lr(r.key,r.data,Ue.none());{const t=r.data,n=Re.empty();let s=new ce(fe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new jt(r.key,n,new ke(s.toArray()),Ue.none())}}function Bp(r,e,t){r instanceof lr?function(s,o,a){const l=s.value.clone(),u=sc(s.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):r instanceof jt?function(s,o,a){if(!jr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=sc(s.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Xl(s)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Wn(r,e,t,n){return r instanceof lr?function(o,a,l,u){if(!jr(o.precondition,a))return l;const d=o.value.clone(),p=ic(o.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof jt?function(o,a,l,u){if(!jr(o.precondition,a))return l;const d=ic(o.fieldTransforms,u,a),p=a.data;return p.setAll(Xl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(r,e,t,n):function(o,a,l){return jr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,e,t)}function $p(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),o=Gl(n.transform,s||null);o!=null&&(t===null&&(t=Re.empty()),t.set(n.field,o))}return t||null}function rc(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&on(n,s,(o,a)=>Up(o,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class lr extends vs{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jt extends vs{constructor(e,t,n,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Xl(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function sc(r,e,t){const n=new Map;G(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const o=r[s],a=o.transform,l=e.data.field(o.field);n.set(o.field,Mp(a,l,t[s]))}return n}function ic(r,e,t){const n=new Map;for(const s of r){const o=s.transform,a=t.data.field(s.field);n.set(s.field,Lp(o,a,e))}return n}class Xi extends vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jp extends vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qp{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Bp(o,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Wn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Wn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Hl();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(s.key)?null:l;const u=Jl(a,l);u!==null&&n.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,n)=>rc(t,n))&&on(this.baseMutations,e.baseMutations,(t,n)=>rc(t,n))}}class Zi{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){G(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return Dp}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new Zi(e,t,n,s)}}/**
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
 */var se,W;function Wp(r){switch(r){case P.OK:return U(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return U(15467,{code:r})}}function Zl(r){if(r===void 0)return Qe("GRPC error has no .code"),P.UNKNOWN;switch(r){case se.OK:return P.OK;case se.CANCELLED:return P.CANCELLED;case se.UNKNOWN:return P.UNKNOWN;case se.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case se.INTERNAL:return P.INTERNAL;case se.UNAVAILABLE:return P.UNAVAILABLE;case se.UNAUTHENTICATED:return P.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case se.NOT_FOUND:return P.NOT_FOUND;case se.ALREADY_EXISTS:return P.ALREADY_EXISTS;case se.PERMISSION_DENIED:return P.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case se.ABORTED:return P.ABORTED;case se.OUT_OF_RANGE:return P.OUT_OF_RANGE;case se.UNIMPLEMENTED:return P.UNIMPLEMENTED;case se.DATA_LOSS:return P.DATA_LOSS;default:return U(39323,{code:r})}}(W=se||(se={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Kp=new pt([4294967295,4294967295],0);function oc(r){const e=Gp().encode(r),t=new gl;return t.update(e),new Uint8Array(t.digest())}function ac(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new pt([t,n],0),new pt([s,o],0)]}class eo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new $n(`Invalid padding: ${t}`);if(n<0)throw new $n(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new $n(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new $n(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=pt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(pt.fromNumber(n)));return s.compare(Kp)===1&&(s=new pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=oc(e),[n,s]=ac(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);if(!this.we(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new eo(o,s,t);return n.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=oc(e),[n,s]=ac(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class $n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class As{constructor(e,t,n,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,ur.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new As(F.min(),s,new Z(z),Ye(),H())}}class ur{constructor(e,t,n,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ur(n,t,H(),H(),H())}}/**
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
 */class qr{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class eu{constructor(e,t){this.targetId=e,this.Ce=t}}class tu{constructor(e,t,n=pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class cc{constructor(){this.ve=0,this.Fe=lc(),this.Me=pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=H(),t=H(),n=H();return this.Fe.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:U(38017,{changeType:o})}}),new ur(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=lc()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Qp{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ye(),this.Je=Or(),this.He=Or(),this.Ze=new Z(z)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:U(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(Ai(o))if(n===0){const a=new O(o.path);this.et(t,a,ye.newNoDocument(a,F.min()))}else G(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=t;let a,l;try{a=yt(n).toUint8Array()}catch(u){if(u instanceof Cl)return Lt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new eo(a,s,o)}catch(u){return Lt(u instanceof $n?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.et(t,o,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Ai(l.target)){const u=new O(l.target.path);this.Et(u).has(a)||this.It(a,u)||this.et(a,u,ye.newNoDocument(u,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let n=H();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const s=new As(e,t,this.Ze,this.je,n);return this.je=Ye(),this.Je=Or(),this.He=Or(),this.Ze=new Z(z),s}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new cc,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ce(z),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ce(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new cc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Or(){return new Z(O.comparator)}function lc(){return new Z(O.comparator)}const Yp={asc:"ASCENDING",desc:"DESCENDING"},Jp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xp={and:"AND",or:"OR"};class Zp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Si(r,e){return r.useProto3Json||_s(e)?e:{value:e}}function ss(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nu(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function em(r,e){return ss(r,e.toTimestamp())}function Fe(r){return G(!!r,49232),F.fromTimestamp(function(t){const n=_t(t);return new J(n.seconds,n.nanos)}(r))}function to(r,e){return Ci(r,e).canonicalString()}function Ci(r,e){const t=function(s){return new X(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function ru(r){const e=X.fromString(r);return G(cu(e),10190,{key:e.toString()}),e}function Ri(r,e){return to(r.databaseId,e.path)}function ci(r,e){const t=ru(e);if(t.get(1)!==r.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(iu(t))}function su(r,e){return to(r.databaseId,e)}function tm(r){const e=ru(r);return e.length===4?X.emptyPath():iu(e)}function Pi(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function iu(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function uc(r,e,t){return{name:Ri(r,e),fields:t.value.mapValue.fields}}function nm(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(G(p===void 0||typeof p=="string",58123),pe.fromBase64String(p||"")):(G(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pe.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?P.UNKNOWN:Zl(d.code);return new x(p,d.message||"")}(a);t=new tu(n,s,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=ci(r,n.document.name),o=Fe(n.document.updateTime),a=n.document.createTime?Fe(n.document.createTime):F.min(),l=new Re({mapValue:{fields:n.document.fields}}),u=ye.newFoundDocument(s,o,a,l),d=n.targetIds||[],p=n.removedTargetIds||[];t=new qr(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=ci(r,n.document),o=n.readTime?Fe(n.readTime):F.min(),a=ye.newNoDocument(s,o),l=n.removedTargetIds||[];t=new qr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=ci(r,n.document),o=n.removedTargetIds||[];t=new qr([],o,s,null)}else{if(!("filter"in e))return U(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new Hp(s,o),l=n.targetId;t=new eu(l,a)}}return t}function rm(r,e){let t;if(e instanceof lr)t={update:uc(r,e.key,e.value)};else if(e instanceof Xi)t={delete:Ri(r,e.key)};else if(e instanceof jt)t={update:uc(r,e.key,e.data),updateMask:dm(e.fieldMask)};else{if(!(e instanceof jp))return U(16599,{dt:e.type});t={verify:Ri(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(o,a){const l=a.transform;if(l instanceof ns)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof tr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof rs)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw U(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:em(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U(27497)}(r,e.precondition)),t}function sm(r,e){return r&&r.length>0?(G(e!==void 0,14353),r.map(t=>function(s,o){let a=s.updateTime?Fe(s.updateTime):Fe(o);return a.isEqual(F.min())&&(a=Fe(o)),new Fp(a,s.transformResults||[])}(t,e))):[]}function im(r,e){return{documents:[su(r,e.path)]}}function om(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=su(r,s);const o=function(d){if(d.length!==0)return au(ze.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Yt(A.field),direction:lm(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Si(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function am(r){let e=tm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){G(n===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(y){const A=ou(y);return A instanceof ze&&Ml(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(A=>function(R){return new ts(Jt(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(A))}(t.orderBy));let l=null;t.limit&&(l=function(y){let A;return A=typeof y=="object"?y.value:y,_s(A)?null:A}(t.limit));let u=null;t.startAt&&(u=function(y){const A=!!y.before,S=y.values||[];return new es(S,A)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const A=!y.before,S=y.values||[];return new es(S,A)}(t.endAt)),Ap(e,s,a,o,l,"F",u,d)}function cm(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ou(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Jt(t.unaryFilter.field);return ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Jt(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jt(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(r):r.fieldFilter!==void 0?function(t){return ae.create(Jt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(n=>ou(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(r):U(30097,{filter:r})}function lm(r){return Yp[r]}function um(r){return Jp[r]}function hm(r){return Xp[r]}function Yt(r){return{fieldPath:r.canonicalString()}}function Jt(r){return fe.fromServerFormat(r.fieldPath)}function au(r){return r instanceof ae?function(t){if(t.op==="=="){if(Ja(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NAN"}};if(Ya(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ja(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NAN"}};if(Ya(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(t.field),op:um(t.op),value:t.value}}}(r):r instanceof ze?function(t){const n=t.getFilters().map(s=>au(s));return n.length===1?n[0]:{compositeFilter:{op:hm(t.op),filters:n}}}(r):U(54877,{filter:r})}function dm(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function lu(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class ut{constructor(e,t,n,s,o=F.min(),a=F.min(),l=pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mm{constructor(){this.bn=new gm}addToCollectionParentIndex(e,t){return this.bn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(gt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(gt.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class gm{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ce(X.comparator),o=!s.has(n);return this.index[t]=s.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ce(X.comparator)).toArray()}}/**
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
 */const dc="LruGarbageCollector",_m=1048576;function fc([r,e],[t,n]){const s=z(r,t);return s===0?z(e,n):s}class ym{constructor(e){this.Pr=e,this.buffer=new ce(fc),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();fc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Em{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(dc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mn(t)?N(dc,"Ignoring IndexedDB error during garbage collection: ",t):await pn(t)}await this.Ar(3e5)})}}class Tm{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return C.resolve(gs.ce);const n=new ym(t);return this.Vr.forEachTarget(e,s=>n.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>n.Ir(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(hc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hc):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,s,o,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(n=y,l=Date.now(),this.removeTargets(e,n,t))).next(y=>(o=y,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(y=>(d=Date.now(),Kt()<=q.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(u-l)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}}function wm(r,e){return new Tm(r,e)}/**
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
 */class Im{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Am{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Wn(n.mutation,s,ke.empty(),J.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,H()).next(()=>n))}getLocalViewOfDocuments(e,t,n=H()){const s=Dt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(o=>{let a=Bn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Dt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,H()))}populateOverlays(e,t,n){const s=[];return n.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,n,s){let o=Ye();const a=Hn(),l=function(){return Hn()}();return t.forEach((u,d)=>{const p=n.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof jt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Wn(p.mutation,d,p.mutation.getFieldMask(),J.now())):a.set(d.key,ke.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new vm(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const n=Hn();let s=new Z((a,l)=>a-l),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=n.get(u)||ke.empty();p=l.applyToLocalView(d,p),n.set(u,p);const y=(s.get(l.batchId)||H()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,y=Hl();p.forEach(A=>{if(!o.has(A)){const S=Jl(t.get(A),n.get(A));S!==null&&y.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return C.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return bp(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-o.size):C.resolve(Dt());let l=Yn,u=o;return a.next(d=>C.forEach(d,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{u=u.insert(p,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,H())).next(p=>({batchId:l,changes:zl(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let s=Bn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const o=t.collectionGroup;let a=Bn();return this.indexManager.getCollectionParents(e,o).next(l=>C.forEach(l,u=>{const d=function(y,A){return new Es(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(p=>{p.forEach((y,A)=>{a=a.insert(y,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,s))).next(a=>{o.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ye.newInvalidDocument(p)))});let l=Bn();return a.forEach((u,d)=>{const p=o.get(u);p!==void 0&&Wn(p.mutation,d,ke.empty(),J.now()),ws(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Sm{constructor(){this.overlays=new Z(O.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Dt();return C.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,o)=>{this.St(e,t,o)}),C.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const s=Dt(),o=t.length+1,a=new O(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>n&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let o=new Z((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=Dt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Dt(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return C.resolve(l)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new zp(t,n));let o=this.Lr.get(t);o===void 0&&(o=H(),this.Lr.set(t,o)),this.Lr.set(t,o.add(n.key))}}/**
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
 */class no{constructor(){this.kr=new ce(ue.qr),this.Kr=new ce(ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new ue(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Wr(new ue(e,t))}Qr(e,t){e.forEach(n=>this.removeReference(n,t))}Gr(e){const t=new O(new X([])),n=new ue(t,e),s=new ue(t,e+1),o=[];return this.Kr.forEachInRange([n,s],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new O(new X([])),n=new ue(t,e),s=new ue(t,e+1);let o=H();return this.Kr.forEachInRange([n,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ue(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ue{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return O.comparator(e.key,t.key)||z(e.Jr,t.Jr)}static Ur(e,t){return z(e.Jr,t.Jr)||O.comparator(e.key,t.key)}}/**
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
 */class Rm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ce(ue.qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qp(o,t,n,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new ue(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Hi:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([n,s],a=>{const l=this.Zr(a.Jr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ce(z);return t.forEach(s=>{const o=new ue(s,0),a=new ue(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],l=>{n=n.add(l.Jr)})}),C.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const a=new ue(new O(o),0);let l=new ce(z);return this.Hr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Jr)),!0)},a),C.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(n=>{const s=this.Zr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return C.forEach(t.mutations,s=>{const o=new ue(s.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new ue(t,0),s=this.Hr.firstAfterOrEqual(n);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Pm{constructor(e){this.ti=e,this.docs=function(){return new Z(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),o=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let n=Ye();return t.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():ye.newInvalidDocument(s))}),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let o=Ye();const a=t.path,l=new O(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||tp(ep(p),n)<=0||(s.has(p.key)||ws(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,t,n,s){U(9500)}ni(e,t){return C.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new km(this)}getSize(e){return C.resolve(this.size)}}class km extends Im{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(n)}),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Dm{constructor(e){this.persistence=e,this.ri=new $t(t=>Ki(t),Qi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.ii=0,this.si=new no,this.targetCount=0,this.oi=un._r()}forEachTarget(e,t){return this.ri.forEach((n,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new un(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let s=0;const o=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),C.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
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
 */class hu{constructor(e,t){this._i={},this.overlays={},this.ai=new gs(0),this.ui=!1,this.ui=!0,this.ci=new Cm,this.referenceDelegate=e(this),this.li=new Dm(this),this.indexManager=new mm,this.remoteDocumentCache=function(s){return new Pm(s)}(n=>this.referenceDelegate.hi(n)),this.serializer=new fm(t),this.Pi=new bm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Sm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new Rm(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const s=new Vm(this.ai.next());return this.referenceDelegate.Ti(),n(s).next(o=>this.referenceDelegate.Ei(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ii(e,t){return C.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class Vm extends rp{constructor(e){super(),this.currentSequenceNumber=e}}class ro{constructor(e){this.persistence=e,this.Ri=new no,this.Ai=null}static Vi(e){return new ro(e)}get di(){if(this.Ai)return this.Ai;throw U(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,n=>{const s=O.fromPath(n);return this.mi(e,s).next(o=>{o||t.removeEntry(s,F.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class is{constructor(e,t){this.persistence=e,this.fi=new $t(n=>op(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=wm(this,t)}static Vi(e,t){return new is(e,t)}Ti(){}Ei(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}pr(e){let t=0;return this.mr(e,n=>{t++}).next(()=>t)}mr(e,t){return C.forEach(this.fi,(n,s)=>this.wr(e,n,s).next(o=>o?C.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(n++,o.removeEntry(a,F.min()))})).next(()=>o.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Br(e.data.value)),t}wr(e,t,n){return C.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return C.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class so{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=s}static Is(e,t){let n=H(),s=H();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new so(e,t.fromCache,n,s)}}/**
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
 */class xm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Ed()?8:sp(Ee())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,s,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Nm;return this.ys(e,t,a).next(l=>{if(o.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>o.result)}ws(e,t,n,s){return n.documentReadCount<this.Vs?(Kt()<=q.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(Kt()<=q.DEBUG&&N("QueryEngine","Query:",Qt(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Kt()<=q.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):C.resolve())}gs(e,t){if(tc(t))return C.resolve(null);let n=Me(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=bi(t,null,"F"),n=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const a=H(...o);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.Ss(t,l);return this.bs(t,d,a,u.readTime)?this.gs(e,bi(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,n,s){return tc(t)||s.isEqual(F.min())?C.resolve(null):this.fs.getDocuments(e,n).next(o=>{const a=this.Ss(t,o);return this.bs(t,a,n,s)?C.resolve(null):(Kt()<=q.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qt(t)),this.Ds(e,a,t,Zf(s,Yn)).next(l=>l))})}Ss(e,t){let n=new ce(jl(e));return t.forEach((s,o)=>{ws(e,o)&&(n=n.add(o))}),n}bs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,t,n){return Kt()<=q.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Qt(t)),this.fs.getDocumentsMatchingQuery(e,t,gt.min(),n)}Ds(e,t,n,s){return this.fs.getDocumentsMatchingQuery(e,n,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const io="LocalStore",Om=3e8;class Lm{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Z(z),this.Fs=new $t(o=>Ki(o),Qi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Am(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Mm(r,e,t,n){return new Lm(r,e,t,n)}async function du(r,e){const t=B(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,t.Os(e),t.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],l=[];let u=H();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(n,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function Um(r,e){const t=B(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const y=d.batch,A=y.keys();let S=C.resolve();return A.forEach(R=>{S=S.next(()=>p.getEntry(u,R)).next(k=>{const D=d.docVersions.get(R);G(D!==null,48541),k.version.compareTo(D)<0&&(y.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,n,e,o).next(()=>o.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let u=H();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function fu(r){const e=B(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Fm(r,e){const t=B(r),n=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((p,y)=>{const A=s.get(y);if(!A)return;l.push(t.li.removeMatchingKeys(o,p.removedDocuments,y).next(()=>t.li.addMatchingKeys(o,p.addedDocuments,y)));let S=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?S=S.withResumeToken(pe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,n)),s=s.insert(y,S),function(k,D,L){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Om?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(A,S,p)&&l.push(t.li.updateTargetData(o,S))});let u=Ye(),d=H();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(Bm(o,a,e.documentUpdates).next(p=>{u=p.Bs,d=p.Ls})),!n.isEqual(F.min())){const p=t.li.getLastRemoteSnapshotVersion(o).next(y=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(p)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(t.vs=s,o))}function Bm(r,e,t){let n=H(),s=H();return t.forEach(o=>n=n.add(o)),e.getEntries(r,n).next(o=>{let a=Ye();return t.forEach((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(F.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):N(io,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function $m(r,e){const t=B(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Hi),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function jm(r,e){const t=B(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.li.getTargetData(n,e).next(o=>o?(s=o,C.resolve(s)):t.li.allocateTargetId(n).next(a=>(s=new ut(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n})}async function ki(r,e,t){const n=B(r),s=n.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!mn(a))throw a;N(io,`Failed to update sequence numbers for target ${e}: ${a}`)}n.vs=n.vs.remove(e),n.Fs.delete(s.target)}function pc(r,e,t){const n=B(r);let s=F.min(),o=H();return n.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const y=B(u),A=y.Fs.get(p);return A!==void 0?C.resolve(y.vs.get(A)):y.li.getTargetData(d,p)}(n,a,Me(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>n.Cs.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?o:H())).next(l=>(qm(n,Rp(e),l),{documents:l,ks:o})))}function qm(r,e,t){let n=r.Ms.get(e)||F.min();t.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Ms.set(e,n)}class mc{constructor(){this.activeTargetIds=xp()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zm{constructor(){this.vo=new mc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new mc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const li="RestConnection",Wm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Gm{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===Xr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,o){const a=Di(),l=this.Qo(e,t.toUriEncodedString());N(li,`Sending RPC '${e}' ${a}:`,l,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,o);const{host:d}=new URL(l),p=ar(d);return this.zo(e,l,u,n,p).then(y=>(N(li,`Received RPC '${e}' ${a}: `,y),y),y=>{throw Lt(li,`RPC '${e}' ${a} failed with error: `,y,"url: ",l,"request:",n),y})}jo(e,t,n,s,o,a){return this.Wo(e,t,n,s,o)}Go(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),n&&n.headers.forEach((s,o)=>e[o]=s)}Qo(e,t){const n=Wm[e];let s=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */const ge="WebChannelConnection",xn=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class Zt extends Gm{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zt.c_){const e=Tl();xn(e,El.STAT_EVENT,t=>{t.stat===Ei.PROXY?N(ge,"STAT_EVENT: detected buffering proxy"):t.stat===Ei.NOPROXY&&N(ge,"STAT_EVENT: detected no buffering proxy")}),Zt.c_=!0}}zo(e,t,n,s,o){const a=Di();return new Promise((l,u)=>{const d=new _l;d.setWithCredentials(!0),d.listenOnce(yl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Fr.NO_ERROR:const y=d.getResponseJson();N(ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case Fr.TIMEOUT:N(ge,`RPC '${e}' ${a} timed out`),u(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case Fr.HTTP_ERROR:const A=d.getStatus();if(N(ge,`RPC '${e}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const k=function(L){const $=L.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(R.status);u(new x(k,R.message))}else u(new x(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new x(P.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(ge,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);N(ge,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,n,15)})}T_(e,t,n){const s=Di(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const d=o.join("");N(ge,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.E_(p);let y=!1,A=!1;const S=new Km({Jo:R=>{A?N(ge,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(y||(N(ge,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),N(ge,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Ho:()=>p.close()});return xn(p,Fn.EventType.OPEN,()=>{A||(N(ge,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),xn(p,Fn.EventType.CLOSE,()=>{A||(A=!0,N(ge,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.I_(p))}),xn(p,Fn.EventType.ERROR,R=>{A||(A=!0,Lt(ge,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),S.o_(new x(P.UNAVAILABLE,"The operation could not be completed")))}),xn(p,Fn.EventType.MESSAGE,R=>{var k;if(!A){const D=R.data[0];G(!!D,16349);const L=D,$=(L==null?void 0:L.error)||((k=L[0])==null?void 0:k.error);if($){N(ge,`RPC '${e}' stream ${s} received error:`,$);const K=$.status;let Te=function(T){const m=se[T];if(m!==void 0)return Zl(m)}(K),te=$.message;K==="NOT_FOUND"&&te.includes("database")&&te.includes("does not exist")&&te.includes(this.databaseId.database)&&Lt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Te===void 0&&(Te=P.INTERNAL,te="Unknown error status: "+K+" with message "+$.message),A=!0,S.o_(new x(Te,te)),p.close()}else N(ge,`RPC '${e}' stream ${s} received:`,D),S.__(D)}}),Zt.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wl()}}/**
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
 */Zt.c_=!1;class pu{constructor(e,t,n=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const yc="PersistentStream";class mu{constructor(e,t,n,s,o,a,l,u){this.Ci=e,this.S_=n,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Qe(t.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new x(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return N(yc,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(N(yc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ym extends mu{constructor(e,t,n,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=nm(this.serializer,e),n=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Fe(a.readTime):F.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Pi(this.serializer),t.addTarget=function(o,a){let l;const u=a.target;if(l=Ai(u)?{documents:im(o,u)}:{query:om(o,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=nu(o,a.resumeToken);const d=Si(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=ss(o,a.snapshotVersion.toTimestamp());const d=Si(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const n=cm(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=Pi(this.serializer),t.removeTarget=e,this.q_(t)}}class Jm extends mu{constructor(e,t,n,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=sm(e.writeResults,e.commitTime),n=Fe(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Pi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>rm(this.serializer,n))};this.q_(t)}}/**
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
 */class Xm{}class Zm extends Xm{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,Ci(t,n),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(P.UNKNOWN,o.toString())})}jo(e,t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Ci(t,n),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function eg(r,e,t,n){return new Zm(r,e,t,n)}class tg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Mt="RemoteStore";class ng{constructor(e,t,n,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{n.enqueueAndForget(async()=>{qt(this)&&(N(Mt,"Restarting streams for network reachability change."),await async function(u){const d=B(u);d.Ia.add(4),await hr(d),d.Va.set("Unknown"),d.Ia.delete(4),await Ss(d)}(this))})}),this.Va=new tg(n,s)}}async function Ss(r){if(qt(r))for(const e of r.Ra)await e(!0)}async function hr(r){for(const e of r.Ra)await e(!1)}function gu(r,e){const t=B(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),lo(t)?co(t):gn(t).O_()&&ao(t,e))}function oo(r,e){const t=B(r),n=gn(t);t.Ea.delete(e),n.O_()&&_u(t,e),t.Ea.size===0&&(n.O_()?n.L_():qt(t)&&t.Va.set("Unknown"))}function ao(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gn(r).Z_(e)}function _u(r,e){r.da.$e(e),gn(r).X_(e)}function co(r){r.da=new Qp({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),gn(r).start(),r.Va.ua()}function lo(r){return qt(r)&&!gn(r).x_()&&r.Ea.size>0}function qt(r){return B(r).Ia.size===0}function yu(r){r.da=void 0}async function rg(r){r.Va.set("Online")}async function sg(r){r.Ea.forEach((e,t)=>{ao(r,e)})}async function ig(r,e){yu(r),lo(r)?(r.Va.ha(e),co(r)):r.Va.set("Unknown")}async function og(r,e,t){if(r.Va.set("Online"),e instanceof tu&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(r,e)}catch(n){N(Mt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await os(r,n)}else if(e instanceof qr?r.da.Xe(e):e instanceof eu?r.da.st(e):r.da.tt(e),!t.isEqual(F.min()))try{const n=await fu(r.localStore);t.compareTo(n)>=0&&await function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.Ea.get(d);p&&o.Ea.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=o.Ea.get(u);if(!p)return;o.Ea.set(u,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),_u(o,u);const y=new ut(p.target,u,d,p.sequenceNumber);ao(o,y)}),o.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){N(Mt,"Failed to raise snapshot:",n),await os(r,n)}}async function os(r,e,t){if(!mn(e))throw e;r.Ia.add(1),await hr(r),r.Va.set("Offline"),t||(t=()=>fu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(Mt,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Ss(r)})}function Eu(r,e){return e().catch(t=>os(r,t,e))}async function Cs(r){const e=B(r),t=Tt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hi;for(;ag(e);)try{const s=await $m(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,cg(e,s)}catch(s){await os(e,s)}Tu(e)&&wu(e)}function ag(r){return qt(r)&&r.Ta.length<10}function cg(r,e){r.Ta.push(e);const t=Tt(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function Tu(r){return qt(r)&&!Tt(r).x_()&&r.Ta.length>0}function wu(r){Tt(r).start()}async function lg(r){Tt(r).ra()}async function ug(r){const e=Tt(r);for(const t of r.Ta)e.ea(t.mutations)}async function hg(r,e,t){const n=r.Ta.shift(),s=Zi.from(n,e,t);await Eu(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Cs(r)}async function dg(r,e){e&&Tt(r).Y_&&await async function(n,s){if(function(a){return Wp(a)&&a!==P.ABORTED}(s.code)){const o=n.Ta.shift();Tt(n).B_(),await Eu(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Cs(n)}}(r,e),Tu(r)&&wu(r)}async function Ec(r,e){const t=B(r);t.asyncQueue.verifyOperationInProgress(),N(Mt,"RemoteStore received new credentials");const n=qt(t);t.Ia.add(3),await hr(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ss(t)}async function fg(r,e){const t=B(r);e?(t.Ia.delete(2),await Ss(t)):e||(t.Ia.add(2),await hr(t),t.Va.set("Unknown"))}function gn(r){return r.ma||(r.ma=function(t,n,s){const o=B(t);return o.sa(),new Ym(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Zo:rg.bind(null,r),Yo:sg.bind(null,r),t_:ig.bind(null,r),H_:og.bind(null,r)}),r.Ra.push(async e=>{e?(r.ma.B_(),lo(r)?co(r):r.Va.set("Unknown")):(await r.ma.stop(),yu(r))})),r.ma}function Tt(r){return r.fa||(r.fa=function(t,n,s){const o=B(t);return o.sa(),new Jm(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:lg.bind(null,r),t_:dg.bind(null,r),ta:ug.bind(null,r),na:hg.bind(null,r)}),r.Ra.push(async e=>{e?(r.fa.B_(),await Cs(r)):(await r.fa.stop(),r.Ta.length>0&&(N(Mt,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class uo{constructor(e,t,n,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,o){const a=Date.now()+n,l=new uo(e,t,a,s,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(r,e){if(Qe("AsyncQueue",`${e}: ${r}`),mn(r))return new x(P.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class en{static emptySet(e){return new en(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=Bn(),this.sortedSet=new Z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Tc{constructor(){this.ga=new Z(O.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class hn{constructor(e,t,n,s,o,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new hn(e,t,en.emptySet(t),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ts(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class pg{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class mg{constructor(){this.queries=wc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=B(t),o=s.queries;s.queries=wc(),o.forEach((a,l)=>{for(const u of l.Sa)u.onError(n)})})(this,new x(P.ABORTED,"Firestore shutting down"))}}function wc(){return new $t(r=>$l(r),Ts)}async function gg(r,e){const t=B(r);let n=3;const s=e.query;let o=t.queries.get(s);o?!o.ba()&&e.Da()&&(n=2):(o=new pg,n=e.Da()?0:1);try{switch(n){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=ho(a,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&fo(t)}async function _g(r,e){const t=B(r),n=e.query;let s=3;const o=t.queries.get(n);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.Da()?0:1:!o.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function yg(r,e){const t=B(r);let n=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(n=!0);a.wa=s}}n&&fo(t)}function Eg(r,e,t){const n=B(r),s=n.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);n.queries.delete(e)}function fo(r){r.Ca.forEach(e=>{e.next()})}var Vi,Ic;(Ic=Vi||(Vi={})).Ma="default",Ic.Cache="cache";class Tg{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new hn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vi.Cache}}/**
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
 */class Iu{constructor(e){this.key=e}}class vu{constructor(e){this.key=e}}class wg{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=H(),this.mutatedKeys=H(),this.eu=jl(e),this.tu=new en(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new Tc,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const A=s.get(p),S=ws(this.query,y)?y:null,R=!!A&&this.mutatedKeys.has(A.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;A&&S?A.data.isEqual(S.data)?R!==k&&(n.track({type:3,doc:S}),D=!0):this.su(A,S)||(n.track({type:2,doc:S}),D=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(l=!0)):!A&&S?(n.track({type:0,doc:S}),D=!0):A&&!S&&(n.track({type:1,doc:A}),D=!0,(u||d)&&(l=!0)),D&&(S?(a=a.add(S),o=k?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{tu:a,iu:n,bs:l,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,y)=>function(S,R){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:D})}};return k(S)-k(R)}(p.type,y.type)||this.eu(p.doc,y.doc)),this.ou(n),s=s??!1;const l=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new hn(this.query,e.tu,o,a,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Tc,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=H(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))});const t=[];return e.forEach(n=>{this.Ya.has(n)||t.push(new vu(n))}),this.Ya.forEach(n=>{e.has(n)||t.push(new Iu(n))}),t}cu(e){this.Za=e.ks,this.Ya=H();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return hn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const po="SyncEngine";class Ig{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class vg{constructor(e){this.key=e,this.hu=!1}}class Ag{constructor(e,t,n,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new $t(l=>$l(l),Ts),this.Eu=new Map,this.Iu=new Set,this.Ru=new Z(O.comparator),this.Au=new Map,this.Vu=new no,this.du={},this.mu=new Map,this.fu=un.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bg(r,e,t=!0){const n=Pu(r);let s;const o=n.Tu.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Au(n,e,t,!0),s}async function Sg(r,e){const t=Pu(r);await Au(t,e,!0,!1)}async function Au(r,e,t,n){const s=await jm(r.localStore,Me(e)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,t);let l;return n&&(l=await Cg(r,e,o,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&gu(r.remoteStore,s),l}async function Cg(r,e,t,n,s){r.pu=(y,A,S)=>async function(k,D,L,$){let K=D.view.ru(L);K.bs&&(K=await pc(k.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,K)));const Te=$&&$.targetChanges.get(D.targetId),te=$&&$.targetMismatches.get(D.targetId)!=null,re=D.view.applyChanges(K,k.isPrimaryClient,Te,te);return Ac(k,D.targetId,re.au),re.snapshot}(r,y,A,S);const o=await pc(r.localStore,e,!0),a=new wg(e,o.ks),l=a.ru(o.documents),u=ur.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=a.applyChanges(l,r.isPrimaryClient,u);Ac(r,t,d.au);const p=new Ig(e,t,a);return r.Tu.set(e,p),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),d.snapshot}async function Rg(r,e,t){const n=B(r),s=n.Tu.get(e),o=n.Eu.get(s.targetId);if(o.length>1)return n.Eu.set(s.targetId,o.filter(a=>!Ts(a,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ki(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&oo(n.remoteStore,s.targetId),Ni(n,s.targetId)}).catch(pn)):(Ni(n,s.targetId),await ki(n.localStore,s.targetId,!0))}async function Pg(r,e){const t=B(r),n=t.Tu.get(e),s=t.Eu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),oo(t.remoteStore,n.targetId))}async function kg(r,e,t){const n=Mg(r);try{const s=await function(a,l){const u=B(a),d=J.now(),p=l.reduce((S,R)=>S.add(R.key),H());let y,A;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=Ye(),k=H();return u.xs.getEntries(S,p).next(D=>{R=D,R.forEach((L,$)=>{$.isValidDocument()||(k=k.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(D=>{y=D;const L=[];for(const $ of l){const K=$p($,y.get($.key).overlayedDocument);K!=null&&L.push(new jt($.key,K,xl(K.value.mapValue),Ue.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,L,l)}).next(D=>{A=D;const L=D.applyToLocalDocumentSet(y,k);return u.documentOverlayCache.saveOverlays(S,D.batchId,L)})}).then(()=>({batchId:A.batchId,changes:zl(y)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.du[a.currentUser.toKey()];d||(d=new Z(z)),d=d.insert(l,u),a.du[a.currentUser.toKey()]=d}(n,s.batchId,t),await dr(n,s.changes),await Cs(n.remoteStore)}catch(s){const o=ho(s,"Failed to persist write");t.reject(o)}}async function bu(r,e){const t=B(r);try{const n=await Fm(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Au.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?G(a.hu,14607):s.removedDocuments.size>0&&(G(a.hu,42227),a.hu=!1))}),await dr(t,n,e)}catch(n){await pn(n)}}function vc(r,e,t){const n=B(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((o,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=B(a);u.onlineState=l;let d=!1;u.queries.forEach((p,y)=>{for(const A of y.Sa)A.va(l)&&(d=!0)}),d&&fo(u)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Dg(r,e,t){const n=B(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),o=s&&s.key;if(o){let a=new Z(O.comparator);a=a.insert(o,ye.newNoDocument(o,F.min()));const l=H().add(o),u=new As(F.min(),new Map,new Z(z),a,l);await bu(n,u),n.Ru=n.Ru.remove(o),n.Au.delete(e),mo(n)}else await ki(n.localStore,e,!1).then(()=>Ni(n,e,t)).catch(pn)}async function Vg(r,e){const t=B(r),n=e.batch.batchId;try{const s=await Um(t.localStore,e);Cu(t,n,null),Su(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await dr(t,s)}catch(s){await pn(s)}}async function Ng(r,e,t){const n=B(r);try{const s=await function(a,l){const u=B(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(G(y!==null,37113),p=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(n.localStore,e);Cu(n,e,t),Su(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await dr(n,s)}catch(s){await pn(s)}}function Su(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Cu(r,e,t){const n=B(r);let s=n.du[n.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),n.du[n.currentUser.toKey()]=s}}function Ni(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Eu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach(n=>{r.Vu.containsKey(n)||Ru(r,n)})}function Ru(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(oo(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),mo(r))}function Ac(r,e,t){for(const n of t)n instanceof Iu?(r.Vu.addReference(n.key,e),xg(r,n)):n instanceof vu?(N(po,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,e),r.Vu.containsKey(n.key)||Ru(r,n.key)):U(19791,{wu:n})}function xg(r,e){const t=e.key,n=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(n)||(N(po,"New document in limbo: "+t),r.Iu.add(n),mo(r))}function mo(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new O(X.fromString(e)),n=r.fu.next();r.Au.set(n,new vg(t)),r.Ru=r.Ru.insert(t,n),gu(r.remoteStore,new ut(Me(Yi(t.path)),n,"TargetPurposeLimboResolution",gs.ce))}}async function dr(r,e,t){const n=B(r),s=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((l,u)=>{a.push(n.pu(u,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=so.Is(u.targetId,d);o.push(y)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(u,d){const p=B(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>C.forEach(d,A=>C.forEach(A.Ts,S=>p.persistence.referenceDelegate.addReference(y,A.targetId,S)).next(()=>C.forEach(A.Es,S=>p.persistence.referenceDelegate.removeReference(y,A.targetId,S)))))}catch(y){if(!mn(y))throw y;N(io,"Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const S=p.vs.get(A),R=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(R);p.vs=p.vs.insert(A,k)}}}(n.localStore,o))}async function Og(r,e){const t=B(r);if(!t.currentUser.isEqual(e)){N(po,"User change. New user:",e.toKey());const n=await du(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(l=>{l.forEach(u=>{u.reject(new x(P.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await dr(t,n.Ns)}}function Lg(r,e){const t=B(r),n=t.Au.get(e);if(n&&n.hu)return H().add(n.key);{let s=H();const o=t.Eu.get(e);if(!o)return s;for(const a of o){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Pu(r){const e=B(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=bu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dg.bind(null,e),e.Pu.H_=yg.bind(null,e.eventManager),e.Pu.yu=Eg.bind(null,e.eventManager),e}function Mg(r){const e=B(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ng.bind(null,e),e}class as{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Mm(this.persistence,new xm,e.initialUser,this.serializer)}Cu(e){return new hu(ro.Vi,this.serializer)}Du(e){return new zm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}as.provider={build:()=>new as};class Ug extends as{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){G(this.persistence.referenceDelegate instanceof is,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Em(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new hu(n=>is.Vi(n,t),this.serializer)}}class xi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>vc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Og.bind(null,this.syncEngine),await fg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mg}()}createDatastore(e){const t=bs(e.databaseInfo.databaseId),n=Qm(e.databaseInfo);return eg(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,o,a,l){return new ng(n,s,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>vc(this.syncEngine,t,0),function(){return _c.v()?new _c:new Hm}())}createSyncEngine(e,t){return function(s,o,a,l,u,d,p){const y=new Ag(s,o,a,l,u,d);return p&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=B(s);N(Mt,"RemoteStore shutting down."),o.Ia.add(5),await hr(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}xi.provider={build:()=>new xi};/**
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
 */const wt="FirestoreClient";class Bg{constructor(e,t,n,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=_e.UNAUTHENTICATED,this.clientId=qi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{N(wt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(wt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ho(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function hi(r,e){r.asyncQueue.verifyOperationInProgress(),N(wt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await du(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function bc(r,e){r.asyncQueue.verifyOperationInProgress();const t=await $g(r);N(wt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Ec(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Ec(e.remoteStore,s)),r._onlineComponents=e}async function $g(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(wt,"Using user provided OfflineComponentProvider");try{await hi(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lt("Error using user provided cache. Falling back to memory cache: "+t),await hi(r,new as)}}else N(wt,"Using default OfflineComponentProvider"),await hi(r,new Ug(void 0));return r._offlineComponents}async function ku(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(wt,"Using user provided OnlineComponentProvider"),await bc(r,r._uninitializedComponentsProvider._online)):(N(wt,"Using default OnlineComponentProvider"),await bc(r,new xi))),r._onlineComponents}function jg(r){return ku(r).then(e=>e.syncEngine)}async function qg(r){const e=await ku(r),t=e.eventManager;return t.onListen=bg.bind(null,e.syncEngine),t.onUnlisten=Rg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Sg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Pg.bind(null,e.syncEngine),t}function zg(r,e,t={}){const n=new mt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,d){const p=new Fg({next:A=>{p.Nu(),a.enqueueAndForget(()=>_g(o,y));const S=A.docs.has(l);!S&&A.fromCache?d.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&u&&u.source==="server"?d.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new Tg(Yi(l.path),p,{includeMetadataChanges:!0,qa:!0});return gg(o,y)}(await qg(r),r.asyncQueue,e,t,n)),n.promise}function Hg(r,e){const t=new mt;return r.asyncQueue.enqueueAndForget(async()=>kg(await jg(r),e,t)),t.promise}/**
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
 */const Vu="firestore.googleapis.com",Cc=!0;class Rc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vu,this.ssl=Cc}else this.host=e.host,this.ssl=e.ssl??Cc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_m)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Du(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class go{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $f;switch(n.type){case"firstParty":return new Hf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Sc.get(t);n&&(N(Wg,"Removing Datastore"),Sc.delete(t),n.terminate())}(this),Promise.resolve()}}function Kg(r,e,t,n={}){var d;r=an(r,go);const s=ar(e),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},l=`${e}:${t}`;s&&ll(`https://${l}`),o.host!==Vu&&o.host!==l&&Lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...o,host:l,ssl:s,emulatorOptions:n};if(!Nt(u,a)&&(r._setSettings(u),n.mockUserToken)){let p,y;if(typeof n.mockUserToken=="string")p=n.mockUserToken,y=_e.MOCK_USER;else{p=dd(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const A=n.mockUserToken.sub||n.mockUserToken.user_id;if(!A)throw new x(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new _e(A)}r._authCredentials=new jf(new vl(p,y))}}/**
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
 */class _o{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new _o(this.firestore,e,this._query)}}class he{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(cr(t,he._jsonSchema))return new he(e,n||null,new O(X.fromString(t.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:ie("string",he._jsonSchemaVersion),referencePath:ie("string")};class nr extends _o{constructor(e,t,n){super(e,t,Yi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new O(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function Qg(r,e,...t){if(r=Se(r),arguments.length===1&&(e=qi.newId()),Jf("doc","path",e),r instanceof go){const n=X.fromString(e,...t);return ja(n),new he(r,null,new O(n))}{if(!(r instanceof he||r instanceof nr))throw new x(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(e,...t));return ja(n),new he(r.firestore,r instanceof nr?r.converter:null,new O(n))}}/**
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
 */const Pc="AsyncQueue";class kc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new pu(this,"async_queue_retry"),this._c=()=>{const n=ui();n&&N(Pc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ui();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new mt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!mn(e))throw e;N(Pc,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Qe("INTERNAL UNHANDLED ERROR: ",Dc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=uo.createAndSchedule(this,e,t,n,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:Dc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Dc(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Rs extends go{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new kc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kc(e),this._firestoreClient=void 0,await e}}}function Yg(r,e){const t=typeof r=="object"?r:fl(),n=typeof r=="string"?r:Xr,s=$i(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=ud("firestore");o&&Kg(s,...o)}return s}function Nu(r){if(r._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Jg(r),r._firestoreClient}function Jg(r){var n,s,o,a;const e=r._freezeSettings(),t=Gg(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Bg(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(r._componentsProvider))}/**
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
 */class Pe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pe(pe.fromBase64String(e))}catch(t){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pe(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cr(e,Pe._jsonSchema))return Pe.fromBase64String(e.bytes)}}Pe._jsonSchemaVersion="firestore/bytes/1.0",Pe._jsonSchema={type:ie("string",Pe._jsonSchemaVersion),bytes:ie("string")};/**
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
 */class xu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Be{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(e){if(cr(e,Be._jsonSchema))return new Be(e.latitude,e.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:ie("string",Be._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
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
 */class Ve{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ve._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cr(e,Ve._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ve(e.vectorValues);throw new x(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ve._jsonSchemaVersion="firestore/vectorValue/1.0",Ve._jsonSchema={type:ie("string",Ve._jsonSchemaVersion),vectorValues:ie("object")};/**
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
 */const Xg=/^__.*__$/;class Zg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}}function Lu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{dataSource:r})}}class yo{constructor(e,t,n,s,o,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new yo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return cs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Lu(this.dataSource)&&Xg.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class e_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||bs(e)}I(e,t,n,s=!1){return new yo({dataSource:e,methodName:t,targetDoc:n,path:fe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function t_(r){const e=r._freezeSettings(),t=bs(r._databaseId);return new e_(r._databaseId,!!e.ignoreUndefinedProperties,t)}function n_(r,e,t,n,s,o={}){const a=r.I(o.merge||o.mergeFields?2:0,e,t,s);Bu("Data must be an object, but it was:",a,n);const l=Uu(n,a);let u,d;if(o.merge)u=new ke(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const A=Eo(e,y,t);if(!a.contains(A))throw new x(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);i_(p,A)||p.push(A)}u=new ke(p),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new Zg(new Re(l),u,d)}function Mu(r,e){if(Fu(r=Se(r)))return Bu("Unsupported field value:",e,r),Uu(r,e);if(r instanceof Ou)return function(n,s){if(!Lu(s.dataSource))throw s.yc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(n,s){const o=[];let a=0;for(const l of n){let u=Mu(l,s.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(r,e)}return function(n,s){if((n=Se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Op(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=J.fromDate(n);return{timestampValue:ss(s.serializer,o)}}if(n instanceof J){const o=new J(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ss(s.serializer,o)}}if(n instanceof Be)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pe)return{bytesValue:nu(s.serializer,n._byteString)};if(n instanceof he){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:to(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ve)return function(a,l){const u=a instanceof Ve?a.toArray():a;return{mapValue:{fields:{[Vl]:{stringValue:Nl},[Zr]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.yc("VectorValues must only contain numeric values.");return Ji(l.serializer,p)})}}}}}}(n,s);if(lu(n))return n._toProto(s.serializer);throw s.yc(`Unsupported field value: ${zi(n)}`)}(r,e)}function Uu(r,e){const t={};return Sl(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(r,(n,s)=>{const o=Mu(s,e.dc(n));o!=null&&(t[n]=o)}),{mapValue:{fields:t}}}function Fu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof J||r instanceof Be||r instanceof Pe||r instanceof he||r instanceof Ou||r instanceof Ve||lu(r))}function Bu(r,e,t){if(!Fu(t)||!Al(t)){const n=zi(t);throw n==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+n)}}function Eo(r,e,t){if((e=Se(e))instanceof xu)return e._internalPath;if(typeof e=="string")return s_(r,e);throw cs("Field path arguments must be of type string or ",r,!1,void 0,t)}const r_=new RegExp("[~\\*/\\[\\]]");function s_(r,e,t){if(e.search(r_)>=0)throw cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new xu(...e.split("."))._internalPath}catch{throw cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function cs(r,e,t,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${n}`),a&&(u+=` in document ${s}`),u+=")"),new x(P.INVALID_ARGUMENT,l+r+u)}function i_(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class o_{convertValue(e,t="none"){switch(Et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bt(e,(s,o)=>{n[s]=this.convertValue(o,t)}),n}convertVectorValue(e){var n,s,o;const t=(o=(s=(n=e.fields)==null?void 0:n[Zr].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>ne(a.doubleValue));return new Ve(t)}convertGeoPoint(e){return new Be(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ys(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Jn(e));default:return null}}convertTimestamp(e){const t=_t(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=X.fromString(e);G(cu(n),9688,{name:e});const s=new Xn(n.get(1),n.get(3)),o=new O(n.popFirst(5));return s.isEqual(t)||Qe(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */class $u{constructor(e,t,n,s,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Eo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class c_ extends $u{data(){return super.data()}}function l_(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class jn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vt extends $u{constructor(e,t,n,s,o,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Eo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vt._jsonSchema={type:ie("string",Vt._jsonSchemaVersion),bundleSource:ie("string","DocumentSnapshot"),bundleName:ie("string"),bundle:ie("string")};class zr extends Vt{data(e={}){return super.data(e)}}class Gn{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new jn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new zr(this._firestore,this._userDataWriter,n.key,n,new jn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new zr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new zr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:u_(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function u_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:r})}}/**
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
 */function h_(r){r=an(r,he);const e=an(r.firestore,Rs),t=Nu(e);return zg(t,r._key).then(n=>p_(e,r,n))}function d_(r,e,t){r=an(r,he);const n=an(r.firestore,Rs),s=l_(r.converter,e),o=t_(n);return ju(n,[n_(o,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Ue.none())])}function f_(r){return ju(an(r.firestore,Rs),[new Xi(r._key,Ue.none())])}function ju(r,e){const t=Nu(r);return Hg(t,e)}function p_(r,e,t){const n=t.docs.get(e._key),s=new a_(r);return new Vt(r,s,e._key,n,new jn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Bf(dn),sn(new xt("firestore",(n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),l=new Rs(new qf(n.getProvider("auth-internal")),new Wf(a,n.getProvider("app-check-internal")),up(a,s),a);return o={useFetchStreams:t,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ft(Vc,Nc,e),ft(Vc,Nc,"esm2020")})();function qu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m_=qu,zu=new ir("auth","Firebase",qu());/**
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
 */const ls=new Fi("@firebase/auth");function g_(r,...e){ls.logLevel<=q.WARN&&ls.warn(`Auth (${dn}): ${r}`,...e)}function Hr(r,...e){ls.logLevel<=q.ERROR&&ls.error(`Auth (${dn}): ${r}`,...e)}/**
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
 */function Ne(r,...e){throw To(r,...e)}function $e(r,...e){return To(r,...e)}function Hu(r,e,t){const n={...m_(),[e]:t};return new ir("auth","Firebase",n).create(e,{appName:r.name})}function Ge(r){return Hu(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function To(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return zu.create(r,...e)}function M(r,e,...t){if(!r)throw To(e,...t)}function He(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Hr(e),new Error(e)}function Je(r,e){r||He(e)}/**
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
 */const w_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],I_=new fr(3e4,6e4);function It(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function vt(r,e,t,n,s={}){return Gu(r,s,async()=>{let o={},a={};n&&(e==="GET"?a=n:o={body:JSON.stringify(n)});const l=or({key:r.config.apiKey,...a}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const d={method:e,headers:u,...o};return md()||(d.referrerPolicy="no-referrer"),r.emulatorConfig&&ar(r.emulatorConfig.host)&&(d.credentials="include"),Wu.fetch()(await Ku(r,r.config.apiHost,t,l),d)})}async function Gu(r,e,t){r._canInitEmulator=!1;const n={...T_,...e};try{const s=new A_(r),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Mr(r,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Mr(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw Mr(r,"user-disabled",a);const p=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hu(r,p,d);Ne(r,p)}}catch(s){if(s instanceof Xe)throw s;Ne(r,"network-request-failed",{message:String(s)})}}async function pr(r,e,t,n,s={}){const o=await vt(r,e,t,n,s);return"mfaPendingCredential"in o&&Ne(r,"multi-factor-auth-required",{_serverResponse:o}),o}async function Ku(r,e,t,n){const s=`${e}${t}?${n}`,o=r,a=o.config.emulator?wo(r.config,s):`${r.config.apiScheme}://${s}`;return w_.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function v_(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n($e(this.auth,"network-request-failed")),I_.get())})}}function Mr(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=$e(r,e,n);return s.customData._tokenResponse=t,s}function Oc(r){return r!==void 0&&r.enterprise!==void 0}class b_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return v_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function S_(r,e){return vt(r,"GET","/v2/recaptchaConfig",It(r,e))}/**
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
 */function Kn(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R_(r,e=!1){const t=Se(r),n=await t.getIdToken(e),s=Io(n);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:Kn(di(s.auth_time)),issuedAtTime:Kn(di(s.iat)),expirationTime:Kn(di(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function di(r){return Number(r)*1e3}function Io(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=il(t);return s?JSON.parse(s):(Hr("Failed to decode base64 JWT payload"),null)}catch(s){return Hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lc(r){const e=Io(r);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hs(r){var y;const e=r.auth,t=await r.getIdToken(),n=await rr(r,us(e,{idToken:t}));M(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const o=(y=s.providerUserInfo)!=null&&y.length?Qu(s.providerUserInfo):[],a=V_(r.providerData,o),l=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Li(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(r,p)}async function D_(r){const e=Se(r);await hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V_(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Qu(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function N_(r,e){const t=await Gu(r,{},async()=>{const n=or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=r.config,a=await Ku(r,s,"/v1/token",`key=${o}`),l=await r._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:n};return r.emulatorConfig&&ar(r.emulatorConfig.host)&&(u.credentials="include"),Wu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function x_(r,e){return vt(r,"POST","/v2/accounts:revokeToken",It(r,e))}/**
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
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Lc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:o}=await N_(e,t);this.updateTokensAndExpiration(n,s,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:o}=t,a=new tn;return n&&(M(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(M(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
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
 */function it(r,e){M(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class De{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new k_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Li(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return R_(this,e)}reload(){return D_(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new De({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await hs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(Ge(this.auth));const e=await this.getIdToken();return await rr(this,C_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:y,emailVerified:A,isAnonymous:S,providerData:R,stsTokenManager:k}=t;M(y&&k,e,"internal-error");const D=tn.fromJSON(this.name,k);M(typeof y=="string",e,"internal-error"),it(n,e.name),it(s,e.name),M(typeof A=="boolean",e,"internal-error"),M(typeof S=="boolean",e,"internal-error"),it(o,e.name),it(a,e.name),it(l,e.name),it(u,e.name),it(d,e.name),it(p,e.name);const L=new De({uid:y,auth:e,email:s,emailVerified:A,displayName:n,isAnonymous:S,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:D,createdAt:d,lastLoginAt:p});return R&&Array.isArray(R)&&(L.providerData=R.map($=>({...$}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,n=!1){const s=new tn;s.updateFromServerResponse(t);const o=new De({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await hs(o),o}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];M(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Qu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),l=new tn;l.updateFromIdToken(n);const u=new De({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Li(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
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
 */function Wr(r,e,t){return`firebase:${r}:${e}:${t}`}class nn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:o}=this.auth;this.fullUserKey=Wr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Wr("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await us(this.auth,{idToken:e}).catch(()=>{});return t?De._fromGetAccountInfoResponse(this.auth,t,e):null}return De._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new nn(We(Uc),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||We(Uc);const a=Wr(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let y;if(typeof p=="string"){const A=await us(e,{idToken:p}).catch(()=>{});if(!A)break;y=await De._fromGetAccountInfoResponse(e,A,p)}else y=De._fromJSON(e,p);d!==o&&(l=y),o=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new nn(o,e,n):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new nn(o,e,n))}}/**
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
 */function Fc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ju(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nh(e))return"Blackberry";if(rh(e))return"Webos";if(Xu(e))return"Safari";if((e.includes("chrome/")||Zu(e))&&!e.includes("edge/"))return"Chrome";if(th(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ju(r=Ee()){return/firefox\//i.test(r)}function Xu(r=Ee()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zu(r=Ee()){return/crios\//i.test(r)}function eh(r=Ee()){return/iemobile/i.test(r)}function th(r=Ee()){return/android/i.test(r)}function nh(r=Ee()){return/blackberry/i.test(r)}function rh(r=Ee()){return/webos/i.test(r)}function vo(r=Ee()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function O_(r=Ee()){var e;return vo(r)&&!!((e=window.navigator)!=null&&e.standalone)}function L_(){return yd()&&document.documentMode===10}function sh(r=Ee()){return vo(r)||th(r)||rh(r)||nh(r)||/windows phone/i.test(r)||eh(r)}/**
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
 */function ih(r,e=[]){let t;switch(r){case"Browser":t=Fc(Ee());break;case"Worker":t=`${Fc(Ee())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${n}`}/**
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
 */class M_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */const F_=6;class B_{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??F_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class $_{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bc(this),this.idTokenSubscription=new Bc(this),this.beforeStateQueue=new M_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var n,s,o;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await us(this,{idToken:e}),n=await De._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Ce(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,l=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(n=u.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ce(this.app))return Promise.reject(Ge(this));const t=e?Se(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(Ge(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ce(this.app)?Promise.reject(Ge(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U_(this),t=new B_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ir("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await x_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Ce(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&g_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zt(r){return Se(r)}class Bc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sd(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j_(r){Ps=r}function oh(r){return Ps.loadJS(r)}function q_(){return Ps.recaptchaEnterpriseScript}function z_(){return Ps.gapiScript}function H_(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class W_{constructor(){this.enterprise=new G_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class G_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const K_="recaptcha-enterprise",ah="NO_RECAPTCHA";class Q_{constructor(e){this.type=K_,this.auth=zt(e)}async verify(e="verify",t=!1){async function n(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{S_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new b_(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(o,a,l){const u=window.grecaptcha;Oc(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(ah)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new W_().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{n(this.auth).then(l=>{if(!t&&Oc(window.grecaptcha))s(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=q_();u.length!==0&&(u+=l),oh(u).then(()=>{s(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function $c(r,e,t,n=!1,s=!1){const o=new Q_(r);let a;if(s)a=ah;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Mi(r,e,t,n,s){var o;if((o=r._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await $c(r,e,t,t==="getOobCode");return n(r,a)}else return n(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await $c(r,e,t,t==="getOobCode");return n(r,l)}else return Promise.reject(a)})}/**
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
 */function Y_(r,e){const t=$i(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Nt(o,e??{}))return s;Ne(s,"already-initialized")}return t.initialize({options:e})}function J_(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function X_(r,e,t){const n=zt(r);M(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,o=ch(e),{host:a,port:l}=Z_(e),u=l===null?"":`:${l}`,d={url:`${o}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){M(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),M(Nt(d,n.config.emulator)&&Nt(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,ar(a)?ll(`${o}//${a}${u}`):ey()}function ch(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Z_(r){const e=ch(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const o=s[1];return{host:o,port:jc(n.substr(o.length+1))}}else{const[o,a]=n.split(":");return{host:o,port:jc(a)}}}function jc(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ey(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */const iy="http://localhost";class Ut extends Ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...o}=t;if(!n||!s)return null;const a=new Ut(n,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:iy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=or(t)}return e}}/**
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
 */function oy(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ay(r){const e=Mn(Un(r)).link,t=e?Mn(Un(e)).deep_link_id:null,n=Mn(Un(r)).deep_link_id;return(n?Mn(Un(n)).link:null)||n||t||e||r}class bo{constructor(e){const t=Mn(Un(e)),n=t.apiKey??null,s=t.oobCode??null,o=oy(t.mode??null);M(n&&s&&o,"argument-error"),this.apiKey=n,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ay(e);try{return new bo(t)}catch{return null}}}/**
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
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,t){return sr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bo.parseLink(t);return M(n,"argument-error"),sr._fromEmailAndCode(e,n.code,n.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const o=await De._fromIdTokenResponse(e,n,s),a=qc(n);return new Ft({user:o,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=qc(n);return new Ft({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function qc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ds extends Xe{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ds.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ds(e,t,n,s)}}function uh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ds._fromErrorAndOperation(r,o,e,n):o})}async function ly(r,e,t=!1){const n=await rr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ft._forOperation(r,"link",n)}/**
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
 */async function uy(r,e,t=!1){const{auth:n}=r;if(Ce(n.app))return Promise.reject(Ge(n));const s="reauthenticate";try{const o=await rr(r,uh(n,s,e,r),t);M(o.idToken,n,"internal-error");const a=Io(o.idToken);M(a,n,"internal-error");const{sub:l}=a;return M(r.uid===l,n,"user-mismatch"),Ft._forOperation(r,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ne(n,"user-mismatch"),o}}/**
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
 */async function hh(r,e,t=!1){if(Ce(r.app))return Promise.reject(Ge(r));const n="signIn",s=await uh(r,n,e),o=await Ft._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(o.user),o}async function hy(r,e){return hh(zt(r),e)}/**
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
 */const yy=1e3,Ey=10;class ph extends fh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},o=this.storage.getItem(n);L_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ey):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ph.type="LOCAL";const Ty=ph;/**
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
 */class ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ks(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,o)),u=await wy(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ks.receivers=[];/**
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
 */class Iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=So("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(y){const A=y;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(A.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */const yh="firebaseLocalStorageDb",Cy=1,ps="firebaseLocalStorage",Eh="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ds(r,e){return r.transaction([ps],e?"readwrite":"readonly").objectStore(ps)}function Ry(){const r=indexedDB.deleteDatabase(yh);return new gr(r).toPromise()}function Ui(){const r=indexedDB.open(yh,Cy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(ps,{keyPath:Eh})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(ps)?e(n):(n.close(),await Ry(),e(await Ui()))})})}async function zc(r,e,t){const n=Ds(r,!0).put({[Eh]:e,value:t});return new gr(n).toPromise()}async function Py(r,e){const t=Ds(r,!1).get(e),n=await new gr(t).toPromise();return n===void 0?null:n.value}function Hc(r,e){const t=Ds(r,!0).delete(e);return new gr(t).toPromise()}const ky=800,Dy=3;class Th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ui(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Dy)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _h()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ks._getInstance(Sy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Ay(),!this.activeServiceWorker)return;this.sender=new Iy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||by()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ui();return await zc(e,fs,"1"),await Hc(e,fs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Py(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Ds(s,!1).getAll();return new gr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ky)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Th.type="LOCAL";const Vy=Th;new fr(3e4,6e4);/**
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
 */function Ny(r,e){return e?We(e):(M(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Co extends Ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xy(r){return hh(r.auth,new Co(r),r.bypassAuthState)}function Oy(r){const{auth:e,user:t}=r;return M(t,e,"internal-error"),uy(t,new Co(r),r.bypassAuthState)}async function Ly(r){const{auth:e,user:t}=r;return M(t,e,"internal-error"),ly(t,new Co(r),r.bypassAuthState)}/**
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
 */class wh{constructor(e,t,n,s,o=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xy;case"linkViaPopup":case"linkViaRedirect":return Ly;case"reauthViaPopup":case"reauthViaRedirect":return Oy;default:Ne(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const My=new fr(2e3,1e4);class Xt extends wh{constructor(e,t,n,s,o){super(e,t,s,o),this.provider=n,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=So();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,My.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const Zy=new fr(3e4,6e4);function Gc(){const r=je().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function eE(r){return new Promise((e,t)=>{var s,o,a;function n(){Gc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gc(),t($e(r,"network-request-failed"))},timeout:Zy.get()})}if((o=(s=je().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=je().gapi)!=null&&a.load)n();else{const l=H_("iframefcb");return je()[l]=()=>{gapi.load?n():t($e(r,"network-request-failed"))},oh(`${z_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Kr=null,e})}let Kr=null;function tE(r){return Kr=Kr||eE(r),Kr}/**
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
 */const nE=new fr(5e3,15e3),rE="__/auth/iframe",sE="emulator/auth/iframe",iE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aE(r){const e=r.config;M(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?wo(e,sE):`https://${r.config.authDomain}/${rE}`,n={apiKey:e.apiKey,appName:r.name,v:dn},s=oE.get(r.config.apiHost);s&&(n.eid=s);const o=r._getFrameworks();return o.length&&(n.fw=o.join(",")),`${t}?${or(n).slice(1)}`}async function cE(r){const e=await tE(r),t=je().gapi;return M(t,r,"internal-error"),e.open({where:document.body,url:aE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iE,dontclear:!0},n=>new Promise(async(s,o)=>{await n.restyle({setHideOnLeave:!1});const a=$e(r,"network-request-failed"),l=je().setTimeout(()=>{o(a)},nE.get());function u(){je().clearTimeout(l),s(n)}n.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const lE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uE=500,hE=600,dE="_blank",fE="http://localhost";class Kc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pE(r,e,t,n=uE,s=hE){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u={...lE,width:n.toString(),height:s.toString(),top:o,left:a},d=Ee().toLowerCase();t&&(l=Zu(d)?dE:t),Ju(d)&&(e=e||fE,u.scrollbars="yes");const p=Object.entries(u).reduce((A,[S,R])=>`${A}${S}=${R},`,"");if(O_(d)&&l!=="_self")return mE(e||"",l),new Kc(null);const y=window.open(e||"",l,p);M(y,r,"popup-blocked");try{y.focus()}catch{}return new Kc(y)}function mE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const gE="__/auth/handler",_E="emulator/auth/handler",yE=encodeURIComponent("fac");async function Qc(r,e,t,n,s,o){M(r.config.authDomain,r,"auth-domain-config-required"),M(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:dn,eventId:s};if(e instanceof lh){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",bd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof mr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}r.tenantId&&(a.tid=r.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await r._getAppCheckToken(),d=u?`#${yE}=${encodeURIComponent(u)}`:"";return`${EE(r)}?${or(l).slice(1)}${d}`}function EE({config:r}){return r.emulator?wo(r,_E):`https://${r.authDomain}/${gE}`}/**
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
 */const fi="webStorageSupport";class TE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gh,this._completeRedirectFn=zy,this._overrideRedirectResult=$y}async _openPopup(e,t,n,s){var a;Je((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Qc(e,t,n,Oi(),s);return pE(e,o,So())}async _openRedirect(e,t,n,s){await this._originValidation(e);const o=await Qc(e,t,n,Oi(),s);return vy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Je(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await cE(e),n=new Wy(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fi,{type:fi},s=>{var a;const o=(a=s==null?void 0:s[0])==null?void 0:a[fi];o!==void 0&&t(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sh()||Xu()||vo()}}const wE=TE;var Yc="@firebase/auth",Jc="1.13.0";/**
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
 */class IE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AE(r){sn(new xt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ih(r)},d=new $_(n,s,o,u);return J_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),sn(new xt("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(n=>new IE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Yc,Jc,vE(r)),ft(Yc,Jc,"esm2020")}/**
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
 */const bE=5*60,SE=cl("authIdTokenMaxAge")||bE;let Xc=null;const CE=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>SE)return;const s=t==null?void 0:t.token;Xc!==s&&(Xc=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RE(r=fl()){const e=$i(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Y_(r,{popupRedirectResolver:wE,persistence:[Vy,Ty,gh]}),n=cl("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const a=CE(o.toString());my(t,a,()=>a(t.currentUser)),py(t,l=>a(l))}}const s=ol("auth");return s&&X_(t,`http://${s}`),t}function PE(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}j_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const o=$e("internal-error");o.customData=s,t(o)},n.type="text/javascript",n.charset="UTF-8",PE().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AE("Browser");const kE={apiKey:"AIzaSyApbv5GZ6nEwN_kVNG0Gc5-OsmSzRCTUY8",authDomain:"cldf-a651b.firebaseapp.com",projectId:"cldf-a651b",storageBucket:"cldf-a651b.firebasestorage.app",messagingSenderId:"732937211804",appId:"1:732937211804:web:f55b6d81a92085991c8259"},vh=dl(kE),DE=Yg(vh),Ur=RE(vh);class VE{constructor(e,t,n){this.userId=t,this.localKey=`${e}_${t}`,this.docRef=Qg(DE,"user_progress",t),this.ui=n}async load(){const e={progress:{},phase:1};try{const n=await h_(this.docRef);if(n.exists()){const s=n.data();return localStorage.setItem(this.localKey,JSON.stringify(s)),s}}catch(n){console.warn("Modo offline ou erro ao carregar do Firestore:",n)}const t=localStorage.getItem(this.localKey);return t?JSON.parse(t):e}async save(e){localStorage.setItem(this.localKey,JSON.stringify(e)),this.ui&&this.ui.showSaving();try{await d_(this.docRef,e)}catch(t){console.error("Erro ao salvar no Firestore:",t)}finally{this.ui&&this.ui.hideSaving()}}async clear(){localStorage.removeItem(this.localKey);try{await f_(this.docRef)}catch(e){console.error("Erro ao deletar documento na nuvem",e)}}}class NE{constructor(e){this.onUserChange=e,gy(Ur,t=>{this.onUserChange(t)})}async login(e,t){return await fy(Ur,e,t)}async register(e,t){return await dy(Ur,e,t)}async logout(){await _y(Ur),window.location.reload()}}let On=null;function xE(){return On||(On=new(window.AudioContext||window.webkitAudioContext)),On.state==="suspended"&&On.resume(),On}function Ln(r={}){try{const e=xE(),t=e.createOscillator(),n=e.createGain(),s=r.type||"sine",o=r.initialGain||.05,a=r.duration||.1,l=e.currentTime;t.type=s,r.frequencies&&r.frequencies.length===1?t.frequency.setValueAtTime(r.frequencies[0],l):r.frequencies&&r.frequencies.length===2?(t.frequency.setValueAtTime(r.frequencies[0],l),t.frequency.exponentialRampToValueAtTime(r.frequencies[1],l+a)):r.frequencyTimes&&r.frequencyTimes.length>0&&r.frequencyTimes.forEach(u=>{t.frequency.setValueAtTime(u.frequency,l+u.time)}),n.gain.setValueAtTime(o,l),n.gain.exponentialRampToValueAtTime(.001,l+a),t.connect(n),n.connect(e.destination),t.start(l),t.stop(l+a)}catch{}}class OE{constructor(){this.toastContainer=document.getElementById("toast-container"),this.backToTopBtn=document.getElementById("back-to-top"),this.header=document.querySelector("header"),this.initScrollListener(),this.initWheelScrollFallback(),this.initNetworkListeners()}_toggleElement(e,t=!0,n={}){const s=document.getElementById(e);if(!s)return;const o=n.delay||0,a=n.child;if(t)s.classList.remove("hidden","opacity-0"),s.classList.add("flex","opacity-100"),a&&a.show&&setTimeout(()=>{const l=s.querySelector(a.selector);l&&(l.classList.remove(a.hideClasses||""),l.classList.add(a.showClasses||""))},a.delay||10);else{if(s.classList.add("opacity-0"),a&&!a.show){const l=s.querySelector(a.selector);l&&(l.classList.add(a.hideClasses||""),l.classList.remove(a.showClasses||""))}setTimeout(()=>{s.classList.add("hidden"),s.classList.remove("flex","opacity-100")},o)}}hideLoading(){this._toggleElement("loading-overlay",!1,{delay:500})}showAuth(){this._toggleElement("auth-overlay",!0)}hideAuth(){this._toggleElement("auth-overlay",!1)}showSaving(){this._toggleElement("sync-status",!0)}hideSaving(){this._toggleElement("sync-status",!1)}openStatsModal(){this._toggleElement("stats-modal",!0,{child:{show:!0,selector:":first-child",showClasses:"scale-100",hideClasses:"scale-95",delay:10}})}closeStatsModal(){this._toggleElement("stats-modal",!1,{child:{show:!1,selector:":first-child",hideClasses:"scale-95",showClasses:"scale-100"},delay:300})}initScrollListener(){let e=window.scrollY;window.addEventListener("scroll",()=>{const t=window.scrollY;t<0||t+window.innerHeight>document.documentElement.scrollHeight||(this.header&&(t>80?t>e?this.header.style.transform="translateY(-100%)":this.header.style.transform="translateY(0)":this.header.style.transform="translateY(0)"),e=t,this.backToTopBtn&&(t>400?(this.backToTopBtn.classList.remove("opacity-0","pointer-events-none","translate-y-4"),this.backToTopBtn.classList.add("opacity-100","pointer-events-auto","translate-y-0")):(this.backToTopBtn.classList.add("opacity-0","pointer-events-none","translate-y-4"),this.backToTopBtn.classList.remove("opacity-100","pointer-events-auto","translate-y-0"))))})}scrollTo(e){var n;const t=document.getElementById(e);t&&window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-(((n=this.header)==null?void 0:n.offsetHeight)??80)-16,behavior:"smooth"})}initWheelScrollFallback(){const e="#auth-overlay, #loading-overlay, #stats-modal",t=document.querySelectorAll(`${e}, #auth-overlay > *, #loading-overlay > *, #stats-modal > *`),n=(a,l)=>{if(!a||a===document.body||a===document.documentElement)return!1;const u=window.getComputedStyle(a);return!/(auto|scroll|overlay)/.test(u.overflowY)||a.scrollHeight<=a.clientHeight?!1:l>0?a.scrollTop+a.clientHeight<a.scrollHeight:a.scrollTop>0},s=(a,l,u)=>{let d=a;for(;d&&d!==u;){if(n(d,l))return!0;d=d.parentElement}return n(u,l)},o=a=>{var u,d;const l=(d=(u=a.target)==null?void 0:u.closest)==null?void 0:d.call(u,e);!l||l.classList.contains("hidden")||s(a.target,a.deltaY,l)||(window.scrollBy({top:a.deltaY,behavior:"auto"}),a.preventDefault())};t.forEach(a=>{a.addEventListener("wheel",o,{capture:!0,passive:!1})})}initNetworkListeners(){const e=document.getElementById("network-status-dot"),t=document.getElementById("network-status-text"),n=()=>{navigator.onLine?(e&&(e.className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_6px_#10b981]"),t&&(t.textContent="Sistema Operacional")):(e&&(e.className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_6px_#e11d48] animate-pulse"),t&&(t.textContent="Modo Offline"))};window.addEventListener("online",n),window.addEventListener("offline",n),n()}switchTab(e){["cycle-a","cycle-b","cycle-c"].forEach(t=>{const n=document.getElementById(`tab-${t}`),s=document.getElementById(`content-${t}`);!n||!s||(t===e?(n.className="w-full min-w-0 rounded-xl border border-emerald-500 bg-emerald-500/10 px-4 py-3 sm:py-4 text-center text-sm sm:text-base font-bold leading-tight text-emerald-400 shadow-sm transition-all focus:outline-none",s.classList.remove("hidden"),s.classList.add("animate-fade-in")):(n.className="w-full min-w-0 rounded-xl border border-transparent bg-transparent px-4 py-3 sm:py-4 text-center text-sm sm:text-base font-medium leading-tight text-slate-500 transition-all hover:bg-slate-800/50 hover:text-slate-300 focus:outline-none",s.classList.add("hidden"),s.classList.remove("animate-fade-in")))})}showToast(e,t="success"){if(!this.toastContainer)return;const n=document.createElement("div"),s=t==="success";n.className=`animate-toast-enter flex items-center gap-3 p-4 rounded-xl shadow-xl border backdrop-blur-md ${s?"bg-emerald-900/90 border-emerald-800 text-emerald-100":"bg-rose-900/90 border-rose-800 text-rose-100"}`,n.innerHTML=`<p class="text-sm font-semibold">${e}</p>`,this.toastContainer.appendChild(n),setTimeout(()=>{n.classList.replace("animate-toast-enter","animate-toast-leave"),setTimeout(()=>n.remove(),300)},4e3)}playBeep(){Ln({type:"sine",frequencies:[880],initialGain:.05,duration:.1})}playPowerUpSound(){Ln({type:"sine",frequencies:[200,800],initialGain:.1,duration:.3})}playSuccessSound(){Ln({type:"sine",frequencyTimes:[{frequency:523.25,time:0},{frequency:659.25,time:.1},{frequency:783.99,time:.2},{frequency:1046.5,time:.3}],initialGain:.08,duration:.8})}playTimerEndSound(){Ln({type:"triangle",frequencyTimes:[{frequency:523.25,time:0},{frequency:659.25,time:.1},{frequency:783.99,time:.2},{frequency:1046.5,time:.4}],initialGain:.08,duration:1.5})}playErrorSound(){Ln({type:"square",frequencies:[150,80],initialGain:.05,duration:.2}),document.body.classList.add("animate-shake"),setTimeout(()=>document.body.classList.remove("animate-shake"),400)}}class LE{constructor(e,t,n,s,o,a){this.radarChart=null,this.barChart=null,this.doughnutChart=null,this.lineChart=null,this.radarCtx=e,this.barCtx=t,this.doughnutCtx=n,this.lineCtx=s,this.subjects=o,this.ui=a,this.compactMediaQuery=window.matchMedia("(max-width: 639px)"),this.handleViewportChange=this.handleViewportChange.bind(this),this.colorHexMap={blue:"#2563eb",teal:"#0d9488",orange:"#ea580c",amber:"#f59e0b",emerald:"#059669",indigo:"#6366f1",violet:"#7c3aed",rose:"#e11d48",cyan:"#0891b2",fuchsia:"#c026d3"},this.META_SIMULADO=80,this.WARNING_SIMULADO=70,this._isInitialized=!1,this.bindViewportListener();const l=document.getElementById("intelligence-chart");l&&"IntersectionObserver"in window?(this.observer=new IntersectionObserver(u=>{u[0].isIntersecting&&(this._initCharts(),this.observer.disconnect())},{threshold:.1}),this.observer.observe(l)):this._initCharts()}_initCharts(){this._isInitialized||(this.init(),this._isInitialized=!0,this._pendingUpdateData&&this.update(this._pendingUpdateData.progress,this._pendingUpdateData.visibleSubjects,this._pendingUpdateData.simuladoScores))}bindViewportListener(){if(this.compactMediaQuery.addEventListener){this.compactMediaQuery.addEventListener("change",this.handleViewportChange);return}this.compactMediaQuery.addListener(this.handleViewportChange)}isCompactViewport(){return this.compactMediaQuery.matches}getLabels(){return this.subjects.map(e=>this.isCompactViewport()&&e.shortName||e.name)}getRadarPointLabelFont(){return{size:this.isCompactViewport()?10:14,weight:"bold"}}getXAxisFont(){return{size:this.isCompactViewport()?10:14}}handleViewportChange(){const e=this.getLabels();this.radarChart&&(this.radarChart.data.labels=e,this.radarChart.options.scales.r.pointLabels.font=this.getRadarPointLabelFont(),this.radarChart.update("none")),this.barChart&&(this.barChart.data.labels=e,this.barChart.options.scales.x.ticks.font=this.getXAxisFont(),this.barChart.update("none")),this.doughnutChart&&this.doughnutChart.update("none"),this.lineChart&&this.lineChart.update("none")}init(){typeof ChartDataLabels<"u"?Chart.register(ChartDataLabels):console.warn("ChartDataLabels plugin não foi carregado. Verifique se o CDN está acessível.");const e=this.getLabels(),t=this.subjects.map(n=>this.colorHexMap[n.color]||"#94a3b8");if(this.radarCtx&&(this.radarChart&&this.radarChart.destroy(),this.radarChart=new Chart(this.radarCtx,{type:"radar",data:{labels:e,datasets:[{label:"Progresso (%)",data:[],backgroundColor:"rgba(16, 185, 129, 0.25)",borderColor:"#10b981",borderWidth:4,pointBackgroundColor:t,pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:t}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:1e3,easing:"easeOutQuart"},elements:{line:{tension:.3}},scales:{r:{angleLines:{color:"rgba(16, 185, 129, 0.2)"},grid:{color:"rgba(16, 185, 129, 0.2)"},pointLabels:{font:this.getRadarPointLabelFont(),color:t},ticks:{backdropColor:"transparent",color:"#94a3b8",stepSize:25,max:100,min:0,callback:n=>n+"%"}}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:n=>` Progresso: ${n.raw}% Concluído`}}}},plugins:[{id:"radar3D",beforeDatasetsDraw(n){n.ctx.save(),n.ctx.shadowColor="rgba(16, 185, 129, 0.5)",n.ctx.shadowBlur=20,n.ctx.shadowOffsetY=12},afterDatasetsDraw(n){n.ctx.restore()}}]})),this.barCtx&&(this.barChart&&this.barChart.destroy(),this.barChart=new Chart(this.barCtx,{type:"bar",data:{labels:e,datasets:[{label:"Aulas Concluídas",data:[],backgroundColor:t,borderRadius:6,borderWidth:{top:2,right:2,bottom:0,left:2},borderColor:t,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:30}},animation:{duration:1e3,easing:"easeOutQuart"},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255, 255, 255, 0.05)"},ticks:{color:"#64748b",precision:0,maxTicksLimit:6}},x:{grid:{display:!1},ticks:{color:"#e2e8f0",font:this.getXAxisFont()}}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:n=>` Carga Horária: ${n.raw} Aulas`}}}},plugins:[{id:"bar3D",beforeDatasetsDraw(n){n.ctx.save(),n.ctx.shadowColor="rgba(0, 0, 0, 0.6)",n.ctx.shadowBlur=15,n.ctx.shadowOffsetX=8,n.ctx.shadowOffsetY=8},afterDatasetsDraw(n){n.ctx.restore()}},{id:"barLabels",afterDatasetsDraw(n){const{ctx:s,data:o}=n;s.font="bold 14px Inter, sans-serif",s.textAlign="center",s.textBaseline="bottom",o.datasets.forEach((a,l)=>{n.getDatasetMeta(l).data.forEach((d,p)=>{var k;const y=a.data[p];if(y<=0)return;const A=((k=a.borderColor)==null?void 0:k[p])||"#cbd5e1";s.fillStyle=A;const S=d.x,R=d.y-8;s.fillText(y,S,R)})})}}]})),this.doughnutCtx){const n={id:"doughnutCenterText",beforeDraw(s){const{ctx:o,width:a,height:l}=s;o.restore();let u=0,d=0;s.data.datasets.forEach(R=>{u+=R.data[0]||0,d+=(R.data[0]||0)+(R.data[1]||0)});const p=d>0?Math.round(u/d*100):0,y=Math.min(a,l)*.18;o.textBaseline="middle",o.textAlign="center";const A=Math.round(a/2),S=Math.round(l/2);o.font=`800 ${y}px Inter, sans-serif`,o.fillStyle="#f8fafc",o.shadowColor="rgba(0, 0, 0, 0.8)",o.shadowBlur=15,o.shadowOffsetY=5,o.fillText(`${p}%`,A,S-5),o.shadowBlur=0,o.shadowOffsetY=0,o.font=`bold ${y*.35}px Inter, sans-serif`,o.fillStyle="#94a3b8",o.fillText("MISSÕES",A,S+y*.7),o.save()}};this.doughnutChart&&this.doughnutChart.destroy(),this.doughnutChart=new Chart(this.doughnutCtx,{type:"doughnut",data:{labels:["Concluído","Pendente"],datasets:[{label:"Simulados Globais",data:[0,100],backgroundColor:[this.colorHexMap.fuchsia,"rgba(192, 38, 211, 0.1)"],borderColor:["#0f172a","#0f172a"],borderWidth:2,borderRadius:[20,0],hoverOffset:5}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"60%",animation:{duration:1e3,easing:"easeOutQuart"},plugins:{datalabels:{display:!1,color:"#ffffff",textShadowBlur:8,textShadowColor:"rgba(0, 0, 0, 0.8)",font:()=>({family:"Inter, sans-serif",weight:"bold",size:this.isCompactViewport()?11:15}),formatter:s=>s>0?s:""},legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{label:s=>{const o=s.dataset.label||"",a="Simulados",l=s.dataIndex===0;return` ${o}: ${s.raw} ${a} (${l?"Concluído":"Pendente"})`}}}}},plugins:[n,{id:"doughnut3D",beforeDatasetsDraw(s){s.ctx.save(),s.ctx.shadowColor="rgba(0, 0, 0, 0.7)",s.ctx.shadowBlur=15,s.ctx.shadowOffsetX=5,s.ctx.shadowOffsetY=10},afterDatasetsDraw(s){s.ctx.restore()}}]})}this.lineCtx&&(this.lineChart&&this.lineChart.destroy(),this.lineChart=new Chart(this.lineCtx,{type:"line",data:{labels:[],datasets:[{label:"Nota Líquida",data:[],borderWidth:3,fill:!0,tension:.4,segment:{borderColor:n=>n.p1.parsed.y>=this.META_SIMULADO?this.colorHexMap.emerald:n.p1.parsed.y>=this.WARNING_SIMULADO?this.colorHexMap.amber:this.colorHexMap.rose},pointBackgroundColor:n=>{const s=n.raw;return s>=this.META_SIMULADO?this.colorHexMap.emerald:s>=this.WARNING_SIMULADO?this.colorHexMap.amber:this.colorHexMap.rose},pointBorderColor:"#fff",pointBorderWidth:2,pointRadius:5,pointHoverRadius:8,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:n=>{const s=n.raw;return s>=this.META_SIMULADO?this.colorHexMap.emerald:s>=this.WARNING_SIMULADO?this.colorHexMap.amber:this.colorHexMap.rose}},{label:"Média Geral",data:[],borderColor:"rgba(148, 163, 184, 0.4)",borderWidth:2,borderDash:[5,5],pointRadius:0,pointHoverRadius:0,fill:!1,tension:0}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:40,right:30,left:10,bottom:10}},animation:{duration:1e3,easing:"easeOutQuart"},scales:{y:{beginAtZero:!0,grace:"5%",grid:{color:"rgba(255, 255, 255, 0.05)",borderDash:[5,5]},ticks:{color:"#64748b",precision:0,maxTicksLimit:6,callback:function(n){return n+" pts"}}},x:{grid:{display:!1},ticks:{color:"#e2e8f0",font:this.getXAxisFont()}}},plugins:{datalabels:{display:n=>n.datasetIndex===0?n.dataIndex===n.dataset.data.length-1?!0:"auto":!1,color:"#f8fafc",backgroundColor:n=>{const s=n.dataset.data[n.dataIndex];return s>=this.META_SIMULADO?"rgba(6, 78, 59, 0.9)":s>=this.WARNING_SIMULADO?"rgba(120, 53, 15, 0.9)":"rgba(15, 23, 42, 0.9)"},borderColor:n=>{const s=n.dataset.data[n.dataIndex];return s>=this.META_SIMULADO?"rgba(16, 185, 129, 0.6)":s>=this.WARNING_SIMULADO?"rgba(245, 158, 11, 0.6)":"rgba(225, 29, 72, 0.4)"},borderWidth:1,borderRadius:6,padding:{top:4,bottom:4,left:6,right:6},textShadowColor:"transparent",textShadowBlur:0,align:"top",offset:8,font:{family:"Inter, sans-serif",weight:"bold",size:11},formatter:n=>n>0?n+" pts":""},legend:{display:!1},tooltip:{backgroundColor:"rgba(15, 23, 42, 0.95)",titleFont:{size:15,family:"Inter, sans-serif"},bodyFont:{size:15,family:"Inter, sans-serif",weight:"bold"},padding:12,cornerRadius:12,borderColor:"rgba(51, 65, 85, 0.6)",borderWidth:1,callbacks:{title:n=>n[0].label==="Início"?"Ponto de Partida":`Simulado de ${n[0].label}`,label:n=>{if(n.datasetIndex===1){let s=" (Risco de Reprovação)";return n.raw>=this.META_SIMULADO?s=" (Meta Atingida)":n.raw>=this.WARNING_SIMULADO&&(s=" (Quase lá)"),` Média Histórica: ${n.raw} pts${s}`}return` Resultado: ${n.raw} pts`}}}}},plugins:[{id:"line3D",beforeDatasetsDraw(n){n.ctx.save(),n.ctx.shadowColor="rgba(0, 0, 0, 0.4)",n.ctx.shadowBlur=10,n.ctx.shadowOffsetY=5},afterDatasetsDraw(n){n.ctx.restore()}}]}))}update(e,t,n=[],s=80,o=70){this.META_SIMULADO=s,this.WARNING_SIMULADO=o,this._pendingUpdateData={progress:e,visibleSubjects:t,simuladoScores:n},this._isInitialized&&(this._updateTimeout&&clearTimeout(this._updateTimeout),this._updateTimeout=setTimeout(()=>{const{progress:a,visibleSubjects:l,simuladoScores:u}=this._pendingUpdateData;l&&(this.subjects=l);const d=this.getLabels(),p=this.subjects.map(R=>this.colorHexMap[R.color]||"#94a3b8"),y=this.subjects.map(R=>{const k=this.colorHexMap[R.color]||"#94a3b8",D=this.barCtx.createLinearGradient(0,0,0,300);return D.addColorStop(0,k),D.addColorStop(1,"#020617"),D}),A=this.subjects.map(R=>{const k=a[R.id]||0;return Math.round(k/R.max*100)}),S=this.subjects.map(R=>a[R.id]||0);if(this.radarChart&&(this.radarChart.data.labels=d,this.radarChart.data.datasets[0].data=A,this.radarChart.data.datasets[0].pointBackgroundColor=p,this.radarChart.data.datasets[0].pointHoverBorderColor=p,this.radarChart.options.scales.r.pointLabels.color=p,this.radarChart.update()),this.barChart&&(this.barChart.data.labels=d,this.barChart.data.datasets[0].data=S,this.barChart.data.datasets[0].backgroundColor=y,this.barChart.data.datasets[0].borderColor=p,this.barChart.update()),this.doughnutChart){const R=this.doughnutCtx.createLinearGradient(0,0,0,300);R.addColorStop(0,this.colorHexMap.fuchsia),R.addColorStop(1,"#020617"),this.doughnutChart.data.datasets[0].backgroundColor=[R,"rgba(192, 38, 211, 0.05)"];const k=this.subjects.find(D=>D.id==="simulados");if(k){const D=a.simulados||0,L=Math.max(0,k.max-D);this.doughnutChart.data.datasets[0].data=[D,L]}this.doughnutChart.update()}if(this.lineChart){const R=this.lineChart.chartArea?this.lineChart.chartArea.bottom:400;let k=0;if(u&&u.length>0){const m=u.reduce((g,w)=>g+w.score,0);k=parseFloat((m/u.length).toFixed(1))}const D=u.slice(-10);let L=D.map(m=>m.score),$=D.map(m=>{if(m.date){const g=m.date.split("-");if(g.length===3)return`${g[2]}/${g[1]}`}return"Sim"});L.length===1?(L=[0,L[0]],$=["Início",$[0]]):L.length===0&&(L=[0,0],$=["Início","Aguardando..."]);const K=$.map(()=>k),Te=L[L.length-1]||0;let te="225, 29, 72";Te>=this.META_SIMULADO?te="16, 185, 129":Te>=this.WARNING_SIMULADO&&(te="245, 158, 11");const re=this.lineCtx.createLinearGradient(0,0,0,R);re.addColorStop(0,`rgba(${te}, 0.4)`),re.addColorStop(1,`rgba(${te}, 0)`),this.lineChart.data.labels=$,this.lineChart.data.datasets[0].data=L,this.lineChart.data.datasets[0].backgroundColor=re,this.lineChart.data.datasets[1].data=K,this.lineChart.data.datasets[1].borderColor=k>=this.META_SIMULADO?"rgba(16, 185, 129, 0.4)":k>=this.WARNING_SIMULADO?"rgba(245, 158, 11, 0.5)":"rgba(225, 29, 72, 0.5)",this.lineChart.update();const T=this.lineCtx.canvas.closest(".chart-container");if(T){let m=T.querySelector("#simulado-average-badge");if(!m){const g=T.querySelector("#simulado-badge-container")||T.querySelector("h4");g&&(m=document.createElement("span"),m.id="simulado-average-badge",g.appendChild(m))}if(m){let g="";u&&u.length>0&&(k>=this.META_SIMULADO?g='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>':k>=this.WARNING_SIMULADO?g='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>':g='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-rose-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>'),m.innerHTML=`Média: ${k}${g}`,k>=this.META_SIMULADO?(m.title="Meta atingida! Continue assim.",m.className="text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-emerald-500/20 text-emerald-400 border-emerald-500/30 transition-colors duration-500 whitespace-nowrap"):k>=this.WARNING_SIMULADO?(m.title="Atenção: Na zona de aviso, quase batendo a meta!",m.className="text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-amber-500/20 text-amber-400 border-amber-500/30 transition-colors duration-500 whitespace-nowrap"):(m.title="Atenção: Média abaixo do esperado. Risco de reprovação!",m.className="text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-rose-500/20 text-rose-400 border-rose-500/30 transition-colors duration-500 whitespace-nowrap")}}}},250))}downloadRadarChart(){if(!this.radarChart)return;const e=document.createElement("a");e.href=this.radarChart.toBase64Image(),e.download=`cldf_radar_evolucao_${new Date().toISOString().split("T")[0]}.png`,document.body.appendChild(e),e.click(),e.remove(),this.ui&&this.ui.showToast("Gráfico salvo como imagem com sucesso!","success")}}const Zc={simulados:{id:"simulados",name:"Simulados Globais",shortName:"Simul.",max:20,color:"fuchsia"}},el=[{id:"pt",name:"Língua Portuguesa",shortName:"Port.",max:91,color:"blue",phase:1},{id:"const",name:"Dir. Constitucional",shortName:"Const.",max:125,color:"teal",phase:1},{id:"ti",name:"Específicas (TI)",shortName:"Específicas (TI)",max:247,color:"cyan",phase:1},{id:"admin",name:"Dir. Administrativo",shortName:"Admin.",max:132,color:"emerald",phase:1},{id:"legis",name:"Processo Legislativo",shortName:"Legis.",max:71,color:"indigo",phase:2},{id:"ridf",name:"Realidade do DF",shortName:"R. DF",max:16,color:"violet",phase:2},{id:"eng",name:"Língua Inglesa",shortName:"Inglês",max:33,color:"orange",phase:3},{id:"emo",name:"Inteligência Emocional",shortName:"IE",max:6,color:"rose",phase:3}];class ME{static calculatePhase(e,t=[]){let n=1;const s=t.filter(l=>l.phase===1),o=t.filter(l=>l.phase===2);return s.length>0&&s.every(l=>(e[l.id]||0)>=l.max)&&(n=2,o.length>0&&o.every(u=>(e[u.id]||0)>=Math.ceil(u.max*.6))&&(n=3)),n}static isPhaseBlocked(e,t){return e>t}}class UE{constructor(e){this.data=e,this.showCompleted=!1,this.elementsCache=new Map}_getEl(e){const t=this.elementsCache.get(e);if(t)return t;const n=document.getElementById(e);return n&&this.elementsCache.set(e,n),n}_updateProgress(e,t,n,s=0){const o=Math.round(t/n*100),a=this._getEl(`${e}-progress-percent`);a&&(a.textContent=`${o}%`);const l=this._getEl(`${e}-progress-text`);l&&(l.textContent=`${t}/${n} (~${s}h)`);const u=this._getEl(`${e}-progress-bar`);u&&(u.style.width=`${o}%`)}_updateSubjectProgress(e,t,n,s=1){const o=Math.round(t/n*100),a=t*s,l=this._getEl(`${e}-text`);l&&(l.textContent=`${t}/${n} (${o}% - ~${a}h)`);const u=this._getEl(`${e}-bar`);u&&(u.style.width=`${o}%`)}_updateSubjectCard(e,t,n){const s=this._getEl(`tracker-card-${e}`);s&&(t===100?this.showCompleted?(s.classList.remove("hidden"),s.classList.add("opacity-60")):(s.classList.add("hidden"),s.classList.remove("opacity-60")):s.classList.remove("opacity-60","hidden"));const o=this._getEl(`controls-${e}`);o&&(o.classList.toggle("opacity-40",n),o.classList.toggle("pointer-events-none",n),o.classList.toggle("grayscale",n))}renderTrackersHTML(){this.elementsCache.clear(),[1,2,3].forEach(e=>{const t=this._getEl(`trackers-phase-${e}`);if(!t)return;const n=this.data.SUBJECTS_QUEUE.filter(s=>s.phase===e);t.innerHTML=n.map(s=>`
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
          `).join("")})}toggleCompleted(e){this.showCompleted=!this.showCompleted;const t=this._getEl("toggle-completed-text"),n=this._getEl("toggle-completed-icon");t&&(t.textContent=this.showCompleted?"Ocultar Concluídas":"Mostrar Concluídas"),n&&(this.showCompleted?n.innerHTML='<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>':n.innerHTML='<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'),this.renderValues(e)}renderValues(e){const t=e.progress||{},n=e.phase||1,s=e.pace||2,o=e.studyDates||[];let a=0,l=0,u=0;this.data.SUBJECTS_QUEUE.forEach(R=>{const k=t[R.id]||0;a+=k,l+=R.max,u+=k;const D=Math.round(k/R.max*100),L=R.phase>n;this._updateSubjectProgress(R.id,k,R.max,1),this._updateSubjectCard(R.id,D,L)});const p=((R,k)=>{const D=t[R]||0,L=this.data.SPECIAL_MISSIONS[R].max;a+=D,l+=L;const $=D*k;return u+=$,this._updateProgress(R,D,L,$),{current:D,max:L,hours:$}})("simulados",4),y=l>0?Math.round(a/l*100):0;this._getEl("global-progress-percent")&&(this._getEl("global-progress-percent").textContent=`${y}% (~${u}h)`),this._getEl("header-progress-bar")&&(this._getEl("header-progress-bar").style.width=`${y}%`),this._updateStatsModal(a,l,u,p.current,p.max,s);const A=this._calculateStreak(o),S=this._getEl("streak-counter");S&&(S.textContent=`${A} Dias`)}_calculateStreak(e){if(!e||e.length===0)return 0;const t=[...new Set(e)].sort().reverse();let n=0,s=new Date;s.setHours(0,0,0,0);const o=new Date(t[0]+"T00:00:00");if(o.setHours(0,0,0,0),Math.floor((s-o)/864e5)>1)return 0;s=o;for(const a of t){const l=new Date(a+"T00:00:00");if(l.setHours(0,0,0,0),l.getTime()===s.getTime())n++,s.setDate(s.getDate()-1);else break}return n}_updateStatsModal(e,t,n,s,o,a){const l=e-s,u=t-o,d=u+o*4,p=Math.max(0,d-n),y=Math.ceil(p/a),A=Math.ceil(y/30),S=(L,$)=>{const K=this._getEl(L);K&&(K.textContent=$)};S("stats-classes-completed",`${l} / ${u}`),S("stats-hours-completed",`${n}h / ${d}h`),S("stats-simulados-completed",`${s} / ${o}`),S("stats-days-remaining",`${y} dias (~${A} meses)`);const R=this._getEl("stats-congrats-message");R&&R.classList.toggle("hidden",y>0);const k=this._getEl("dynamic-pace-modal");k&&(k.textContent=`${a}h`);const D=this._getEl("dynamic-pace-title");D&&(D.textContent=`${a}h`)}updatePhaseUI(e){const t=this._getEl("header-phase-text");t&&(t.textContent=`Fase ${e}`);const n=this._getEl("phase-1-badge"),s=e===1;n&&(n.textContent=s?"Ativa":"Concluída",n.className=s?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider":"bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"),this._updatePhaseState(e,2,"indigo",50),this._updatePhaseState(e,3,"orange",40)}_updatePhaseState(e,t,n,s){const o=this._getEl(`phase-${t}-wrapper`),a=this._getEl(`phase-${t}-box`),l=this._getEl(`phase-${t}-badge`),u=this._getEl(`trackers-phase-${t}`);if(o)if(e>=t){o.className="group opacity-100 transition-opacity duration-300",a.className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl transition-all duration-500 sm:rounded-3xl sm:p-8",u&&u.classList.remove("hidden");const d=e===t,p=d&&t===3?"Reta Final":d?"Ativa":"Concluída";l.textContent=p,l.className=d?`bg-${n}-500/20 text-${n}-300 border border-${n}-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`:"bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"}else o.className=`group opacity-${s} hover:opacity-100 transition-opacity duration-300`,a.className="relative overflow-hidden rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/50 p-4 transition-all duration-500 sm:rounded-3xl sm:p-8",u&&u.classList.add("hidden"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Fase Bloqueada',l.className="bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider inline-flex items-center gap-1.5"}updateDynamicCycle(e,t){const n=this._getEl("dynamic-cycle-list");if(!n)return;const o=this.data.SUBJECTS_QUEUE.filter(a=>(e[a.id]||0)<a.max&&a.phase<=t).slice(0,4);if(o.length===0){n.innerHTML='<span class="block w-full rounded-xl border border-emerald-200 bg-emerald-100 px-4 py-2.5 text-center text-sm font-bold text-emerald-800 shadow-sm">🎉 Edital Básico Zerado! O Gran Cursos agora só precisa de Simulados.</span>';return}n.innerHTML=o.map(a=>{const l=e[a.id]||0,u=Math.round(l/a.max*100);return`
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
        `}).join(""),this.animateDynamicCycle()}animateDynamicCycle(){const e=this._getEl("dynamic-cycle-list");if(!e)return;const t=e.querySelectorAll(".dynamic-bar");t.length!==0&&(t.forEach(n=>n.style.width="0%"),e.offsetWidth,t.forEach(n=>n.style.width=n.dataset.width))}celebrateSubjectCompletion(){const e=document.createElement("div");if(e.className="fixed inset-0 z-[9999] bg-emerald-500/40 pointer-events-none transition-opacity duration-500 opacity-100 mix-blend-screen",document.body.appendChild(e),e.offsetWidth,e.classList.replace("opacity-100","opacity-0"),setTimeout(()=>e.remove(),500),window.confetti){const n={origin:{y:.7},shapes:["star","circle"],colors:["#FFD700","#10b981","#3b82f6","#f97316","#ec4899"],ticks:200};confetti({...n,particleCount:80,spread:100,startVelocity:40}),setTimeout(()=>confetti({...n,particleCount:60,spread:120,startVelocity:55}),250),setTimeout(()=>confetti({...n,particleCount:40,spread:80,startVelocity:30}),500)}const t=this._getEl("global-progress-percent");t&&(t.classList.add("scale-125","text-emerald-300","drop-shadow-[0_0_8px_#10b981]"),setTimeout(()=>{t.classList.remove("scale-125","text-emerald-300","drop-shadow-[0_0_8px_#10b981]")},600))}celebratePhaseUnlock(){if(window.confetti){const t=Date.now()+3e3;(function n(){confetti({particleCount:5,angle:60,spread:55,origin:{x:0},colors:["#10b981","#14b8a6","#6366f1","#f97316"]}),confetti({particleCount:5,angle:120,spread:55,origin:{x:1},colors:["#10b981","#14b8a6","#6366f1","#f97316"]}),Date.now()<t&&requestAnimationFrame(n)})()}}}function FE(r){return new Worker("/assets/cldf-worker-BkOxTJ8I.js",{name:r==null?void 0:r.name})}class BE{constructor(e){this.app=e,this.SPECIAL_MISSIONS=Zc,this.SUBJECTS_QUEUE=el,this.saveTimeout=null,this.view=new UE({SPECIAL_MISSIONS:Zc,SUBJECTS_QUEUE:el}),this.worker=new FE,this.worker.addEventListener("message",t=>{t.data.action==="RESULT_PROCESS_ROADMAP_DATA"?this.applyRender(t.data.payload):t.data.action==="ERROR_PROCESS_ROADMAP_DATA"&&(console.error("[RoadmapManager] Erro no processamento do Worker:",t.data.payload.error),this.app.ui&&(this.app.ui.showToast("Falha ao processar os dados do Roadmap.","error"),this.app.ui.playErrorSound&&this.app.ui.playErrorSound()))}),this.worker.addEventListener("error",t=>{console.error("[RoadmapManager] Erro fatal no Web Worker:",t.message)})}init(){this.app.state.progress||(this.app.state.progress={}),this.app.state.studyDates||(this.app.state.studyDates=[]),this.app.state.simuladoScores||(this.app.state.simuladoScores=[]),this.app.state.pace||(this.app.state.pace=2),this.view.renderTrackersHTML(),this.checkAndRender()}updateSubject(e,t,n){const s=this.SUBJECTS_QUEUE.find(u=>u.id===e);if(s&&ME.isPhaseBlocked(s.phase,this.app.state.phase)){this.app.ui&&this.app.ui.playErrorSound&&this.app.ui.playErrorSound(),this.app.ui.showToast(`Fase Bloqueada! Conclua a Fase ${this.app.state.phase} primeiro.`,"error");return}let o=this.app.state.progress[e]||0;const a=o;if(o+=t,o<0&&(o=0),o>n&&(o=n),o===n&&this.app.state.progress[e]!==n?(this.app.ui&&this.app.ui.playSuccessSound&&this.app.ui.playSuccessSound(),this.view.celebrateSubjectCompletion(),this.app.ui.showToast("Parabéns! Finalizou a matéria!","success")):o>a&&this.app.ui&&(e==="ti"||e==="simulados"?this.app.ui.playPowerUpSound&&this.app.ui.playPowerUpSound():this.app.ui.playBeep()),t>0){const u=new Date().toISOString().split("T")[0];this.app.state.studyDates.includes(u)||this.app.state.studyDates.push(u)}this.app.state.progress[e]=o,this.saveTimeout&&clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(()=>{this.app.storage.save(this.app.state)},1e3),this.checkAndRender(),e==="simulados"&&(t>0&&o>a?setTimeout(()=>{const u=prompt(`Você registrou o Simulado #${o}! Qual foi a sua nota líquida?`);if(u!==null&&u.trim()!==""){const d=parseFloat(u)||0;this.app.state.simuladoScores.push({date:new Date().toISOString().split("T")[0],score:d}),this.app.storage.save(this.app.state),this.checkAndRender()}},150):t<0&&o<a&&this.app.state.simuladoScores&&this.app.state.simuladoScores.length>o&&(this.app.state.simuladoScores=this.app.state.simuladoScores.slice(0,o),this.app.storage.save(this.app.state),this.checkAndRender()))}completeSubject(e,t,n){confirm(`Tem certeza que deseja marcar a matéria "${t}" como 100% concluída? Esta ação não pode ser desfeita facilmente.`)&&this.updateSubject(e,n,n)}toggleCompleted(){this.view.toggleCompleted(this.app.state)}checkAndRender(){this.worker.postMessage({action:"PROCESS_ROADMAP_DATA",payload:{progress:this.app.state.progress,subjectsQueue:this.SUBJECTS_QUEUE,specialMissions:this.SPECIAL_MISSIONS}})}applyRender({newPhase:e,visibleSubjects:t}){e>this.app.state.phase&&(this.view.celebratePhaseUnlock(),this.app.ui.showToast(`🎉 DESBLOQUEIO ÉPICO: Acesso Concedido à Fase ${e}!`,"success")),this.app.state.phase=e,this.app.storage.save(this.app.state),this.view.renderValues(this.app.state),this.view.updatePhaseUI(this.app.state.phase),this.view.updateDynamicCycle(this.app.state.progress,this.app.state.phase),this.app.chartManager&&this.app.chartManager.update(this.app.state.progress,t,this.app.state.simuladoScores,this.app.state.metaSimulado||80,this.app.state.warningSimulado||70)}}const $E="modulepreload",jE=function(r){return"/"+r},tl={},qE=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(u=>{if(u=jE(u),u in tl)return;tl[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":$E,d||(y.as="script"),y.crossOrigin="",y.href=u,l&&y.setAttribute("nonce",l),document.head.appendChild(y),d)return new Promise((A,S)=>{y.addEventListener("load",A),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};function zE(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:s,onRegisteredSW:o,onRegisterError:a}=r;let l,u,d;const p=async(A=!0)=>{await u,await(d==null?void 0:d())};async function y(){if("serviceWorker"in navigator){if(l=await qE(async()=>{const{Workbox:A}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:A}},[]).then(({Workbox:A})=>new A("/sw.js",{scope:"/",type:"classic"})).catch(A=>{a==null||a(A)}),!l)return;d=async()=>{await(l==null?void 0:l.messageSkipWaiting())};{let A=!1;const S=()=>{A=!0,l==null||l.addEventListener("controlling",R=>{R.isUpdate&&window.location.reload()}),t==null||t()};l.addEventListener("installed",R=>{typeof R.isUpdate>"u"?typeof R.isExternal<"u"?R.isExternal?S():!A&&(n==null||n()):R.isExternal?window.location.reload():!A&&(n==null||n()):R.isUpdate||n==null||n()}),l.addEventListener("waiting",S),l.addEventListener("externalwaiting",S)}l.register({immediate:e}).then(A=>{o?o("/sw.js",A):s==null||s(A)}).catch(A=>{a==null||a(A)})}}return u=y(),p}function HE(r,e="backup"){const t=new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`${e}_${new Date().toISOString().slice(0,10)}.json`,s.click(),URL.revokeObjectURL(n)}function WE(r){return new Promise((e,t)=>{const n=new FileReader;n.onload=s=>{try{e(JSON.parse(s.target.result))}catch{t(new Error("Arquivo de backup inválido ou corrompido."))}},n.onerror=()=>t(new Error("Erro na leitura do arquivo.")),n.readAsText(r)})}class GE{constructor(e){this.ui=e,this.timeLeft=55*60,this.interval=null,this.display=document.getElementById("timer-display"),this.updateDisplay()}start(){this.interval||(this.interval=setInterval(()=>{this.timeLeft--,this.updateDisplay(),this.timeLeft<=0&&(this.pause(),this.ui&&this.ui.playTimerEndSound&&this.ui.playTimerEndSound(),this.ui&&this.ui.showToast&&this.ui.showToast("Pomodoro finalizado! Hora da pausa.","success"),this.timeLeft=55*60,this.updateDisplay())},1e3))}pause(){clearInterval(this.interval),this.interval=null}reset(){this.pause(),this.timeLeft=55*60,this.updateDisplay()}updateDisplay(){if(!this.display)return;const e=Math.floor(this.timeLeft/60).toString().padStart(2,"0"),t=(this.timeLeft%60).toString().padStart(2,"0");this.display.textContent=`${e}:${t}`}}const nl={config:{storageKey:"cldfStudyEngine_v1"},storage:null,ui:null,roadmap:null,chartManager:null,auth:null,timer:null,async init(){var s,o,a,l;if(window._isAppInitialized)return;window._isAppInitialized=!0,console.log("Motor Dinâmico CLDF - Versão: 1.2 Pro"),this.ui=new OE,this.timer=new GE(this.ui),this.roadmap=new BE(this);const r=(s=document.getElementById("radarChart"))==null?void 0:s.getContext("2d"),e=(o=document.getElementById("barChart"))==null?void 0:o.getContext("2d"),t=(a=document.getElementById("doughnutChart"))==null?void 0:a.getContext("2d"),n=(l=document.getElementById("lineChart"))==null?void 0:l.getContext("2d");(r||e||t||n)&&(this.chartManager=new LE(r,e,t,n,[],this.ui)),this.auth=new NE(async u=>{u?(this.ui.hideAuth(),this.storage=new VE(this.config.storageKey,u.uid,this.ui),this.state=await this.storage.load(),this.roadmap.init(),this.ui.switchTab("cycle-a"),this.ui.hideLoading(),this.setupPWA()):(this.ui.showAuth(),this.ui.hideLoading())}),this.setupEventListeners()},exportData(){HE(this.state,"cldf_backup"),this.ui.showToast("Backup baixado com sucesso!")},async importData(r){const e=r.target.files[0];if(e){try{const t=await WE(e);await this.storage.save(t),this.state=t,this.roadmap.checkAndRender(),this.ui.showToast("Progresso restaurado!")}catch(t){alert(t.message)}r.target.value=""}},async factoryReset(){confirm("ATENÇÃO: Isso apagará TODO o seu progresso e restaurará a aplicação para o estado inicial. Deseja continuar?")&&(await this.storage.clear(),window.location.reload())},clearCache(){confirm("Deseja limpar o cache do sistema? Isso resolverá problemas de atualização ou lentidão. (Seu progresso NÃO será perdido).")&&("caches"in window&&caches.keys().then(r=>{for(const e of r)caches.delete(e)}),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(r=>{for(const e of r)e.unregister()}),this.ui.showToast("Cache limpo! Recarregando...","success"),setTimeout(()=>window.location.reload(),1500))},setupPWA(){if("serviceWorker"in navigator){const r=zE({onNeedRefresh(){const e=document.getElementById("pwa-update-toast");e&&(e.classList.remove("hidden"),e.classList.add("flex"),document.getElementById("pwa-update-btn").onclick=()=>{r(!0)},document.getElementById("pwa-close-btn").onclick=()=>{e.classList.add("hidden"),e.classList.remove("flex")})},onOfflineReady:()=>{this.ui.showToast("App pronto para uso offline!","success")}})}},setupEventListeners(){const r={"timer-start":()=>this.timer.start(),"timer-pause":()=>this.timer.pause(),"timer-reset":()=>this.timer.reset(),"scroll-top":()=>window.scrollTo({top:0,behavior:"smooth"}),"scroll-to":e=>this.ui.scrollTo(e.dataset.target),"switch-tab":e=>{this.ui.switchTab(e.dataset.tab),e.dataset.tab==="cycle-a"&&this.roadmap.view.animateDynamicCycle()},"toggle-menu":()=>{const e=document.getElementById("mobile-menu");e&&(e.classList.toggle("hidden"),e.classList.toggle("flex"))},"export-data":()=>this.exportData(),"factory-reset":()=>this.factoryReset(),"clear-cache":()=>this.clearCache(),"download-chart":()=>{this.chartManager&&this.chartManager.downloadRadarChart()},"open-stats":()=>this.ui.openStatsModal(),"close-stats":()=>this.ui.closeStatsModal(),"change-pace":()=>{const e=prompt("Quantas horas você estuda por dia?",this.state.pace||2);if(e!==null){const t=parseFloat(e);!isNaN(t)&&t>0?(this.state.pace=t,this.storage.save(this.state),this.roadmap.checkAndRender(),this.ui.showToast("Ritmo de estudo atualizado!","success")):this.ui.showToast("Valor inválido.","error")}},"change-goals":()=>{const e=this.state.metaSimulado||80,t=prompt("Qual a sua nota meta para os Simulados? (Ex: 85)",e);if(t!==null){const n=parseFloat(t);!isNaN(n)&&n>0&&n<=100?(this.state.metaSimulado=n,this.state.warningSimulado=n-10,this.storage.save(this.state),this.roadmap.checkAndRender(),this.ui.showToast("Metas de simulado atualizadas!","success")):this.ui.showToast("Valor inválido.","error")}},"toggle-completed":()=>this.roadmap.toggleCompleted(),"update-subject":e=>{this.roadmap.updateSubject(e.dataset.subject,parseInt(e.dataset.amount,10),parseInt(e.dataset.max,10))},"complete-subject":e=>{this.roadmap.completeSubject(e.dataset.subject,e.dataset.name,parseInt(e.dataset.max,10))},login:()=>{const e=document.getElementById("auth-email").value,t=document.getElementById("auth-password").value;if(!e||!t)return this.ui.showToast("Preencha todos os campos.","error");if(e.toLowerCase()!=="jefferson.araujo@camara.leg.br")return this.ui.showToast("Acesso restrito ao administrador do sistema.","error");this.ui.showToast("Autenticando...","success"),this.auth.login(e,t).catch(n=>{console.error(n),this.ui.showToast("Erro: Credenciais inválidas.","error")})},register:()=>{const e=document.getElementById("auth-email").value,t=document.getElementById("auth-password").value;if(!e||!t)return this.ui.showToast("Preencha todos os campos.","error");if(e.toLowerCase()!=="jefferson.araujo@camara.leg.br")return this.ui.showToast("Criação de conta restrita ao administrador.","error");if(t.length<6)return this.ui.showToast("A senha precisa de pelo menos 6 caracteres.","error");this.ui.showToast("Criando conta...","success"),this.auth.register(e,t).then(()=>this.ui.showToast("Conta criada com sucesso!","success")).catch(n=>{console.error(n),this.ui.showToast("Erro ao criar conta. Tente outro e-mail.","error")})},logout:()=>{confirm("Tem certeza que deseja sair?")&&this.auth.logout()}};document.addEventListener("click",e=>{const t=document.getElementById("mobile-menu");if(t&&!t.classList.contains("hidden")&&(e.target.closest("[data-action='toggle-menu']")||(t.classList.add("hidden"),t.classList.remove("flex"))),e.target.id==="stats-modal"){this.ui.closeStatsModal();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action;r[s]&&r[s](n)}),document.addEventListener("change",e=>{const t=e.target.closest("[data-action]");!t||t.dataset.action!=="import-data"||this.importData(e)}),document.addEventListener("keydown",e=>{if(e.key==="Escape"){const t=document.getElementById("stats-modal");t&&!t.classList.contains("hidden")&&this.ui.closeStatsModal()}})}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{nl.init()}):nl.init();
