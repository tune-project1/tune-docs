/* empty css                            */import{_ as C}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as f,d as l,t as h,h as g,o as u,a as y,r as d,g as I,F as k,j as b,f as w,J as x}from"./runtime-core.esm-bundler.DP4VN2E1.js";import{I as P,a as E,b as O,F as N}from"./fuse.DEL4H6N6.js";import{w as T}from"./runtime-dom.esm-bundler.DSJc0C89.js";import V from"./index.FOCg8Uir.js";import{C as j}from"./index.8Rhp5HPi.js";/* empty css                                                 */import"./copy.YVW67zVM.js";/* empty css                                                      *//* empty css                                                       */import"./utils.DtX0m6zh.js";import"./_commonjsHelpers.C932wzq6.js";/* empty css                                                        *//* empty css                                                      *//* empty css                                                        *//* empty css                                                         *//* empty css                                                     *//* empty css                                                      *//* empty css                                                       *//* empty css                                                       *//* empty css                                                       *//* empty css                                                          *//* empty css                                                       */const _={components:{},data:function(){return{}},props:{example:{},active:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("onClick",this.example)}}};function A(n,t,e,r,i,o){return u(),f("div",{class:g(["c-playground-item",{active:e.active===!0}]),onClick:t[0]||(t[0]=(...s)=>o.onClick&&o.onClick(...s))},[l("strong",null,h(e.example.item.avatar)+" "+h(e.example.title),1),l("p",null,h(e.example.description),1)],2)}const L=C(_,[["render",A]]),U=[{title:"User signup",description:`Get User details on signup. Useful for figuring out who signed up, what are their details, are they using correct
			details, etc.`,item:{avatar:"🤗",name:"user signup",category:"user",content:"User Shash signed up. Their email is xyz@ggwp.com and their id is 269221"}},{title:"User signup(expanded)",description:"Get User details on signup, and add action buttons. This is for controlling your signup process.",item:{avatar:"🤗",name:"user signup",actions:[{key:"ban-user",url:"https://ggwp.com",buttonText:"Ban"}]}},{title:"User login",description:"Show basic user details.",item:{avatar:"😊",name:"user login"}},{title:"User updated their profile",item:{avatar:"📝",name:"user updated profile"}},{title:"User onboarded",item:{avatar:"🥳",name:"user onboarded"}},{title:"User entered payment details",item:{avatar:"🤩",name:"user entered payment details"}},{title:"Payment received",description:"Get notified when someone pays you",category:["generic","saas"],item:{avatar:"💸",name:"payment received",category:"billing"}},{title:"stripe: webhook received",description:"Get notified when a stripe webhook is received",category:["generic","saas","stripe"],item:{avatar:"🕸️",name:"stripe: webhook received",category:"billing"}},{title:"stripe: early fraud warning",category:["stripe","stripe"],item:{avatar:"🚨",name:"stripe early fraud warning",category:"stripe",type:"json",content:{id:"issfr_1NnrwHBw2dPENLoi9lnhV3RQ",object:"radar.early_fraud_warning",actionable:!0,charge:"ch_1234",created:123456789,fraud_type:"misc",livemode:!1}}},{title:"server started",description:"Get notified when your server starts, or restarts",category:["generic","saas","dev"],item:{avatar:"🤖",name:"server started",category:"server"}},{title:"database error",description:"Get notified when your serer is unresponsive",category:["generic","dev","error"],item:{avatar:"🚨",name:"database error",category:"server"}},{title:"Product added to cart",category:"ecom",item:{avatar:"🛒",name:"product added to cart",content:"user xyz(abc@gmail.com) added pqr product to their cart!"}},{title:"Product purchased",category:"ecom",item:{avatar:"🥳",name:"product purchased",content:"user xyz(abc@gmail.com) purchased pqr product!"}},{title:"Product purchased(expanded)",category:"ecom",item:{avatar:"🥳",name:"product purchased",type:"rows",content:[{type:"image",content:"https://www.lego.com/cdn/cs/set/assets/blt06c6593d8e8d1c13/75367.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2"},{label:"User email",content:"shash@operational.co"},{label:"User Id",content:1327},{label:"Product",content:"Lego starwars venetar class ship"},{label:"Product details",type:"json",content:{fullName:"",purchasePrice:"$999.99",sku:75367,url:"https://www.lego.com/en-au/product/venator-class-republic-attack-cruiser-75367"}},{label:"Billing details",type:"json",content:{cardLast4:"5420-xxxx-xxxx-xxxx",biller:"stripe",deliveryType:"free",transcationId:"934512741252"}}]}},{title:"Waitlist user added",category:["generic"],item:{avatar:"✅",name:"waitlist user added"}},{title:"Cronjob ran",category:"cron",item:{avatar:"🤖",name:"cronjob ran"}},{title:"Email sending failed",category:"server",item:{avatar:"🚨",name:"email sending failed"}},{title:"Contact form submitted",item:{avatar:"📋",name:"contact form submitted"}}],B={components:{InputText:O,InputSwitch:E,InputSelect:P},data:function(){return{token:"",notify:"false",test:!1,codeMode:!1,currentOption:null,codeOptions:[{key:"nodejssdk",value:"Nodejs SDK"},{key:"axios",value:"Axios"},{key:"fetch",value:"Fetch (pure javascript)"},{key:"curl",value:"cURL (command line)"},{key:"php",value:"PHP"},{key:"php-sdk",value:"PHP SDK"}]}},props:{example:{},active:{type:Boolean,default:!1},currentView:{},currentCode:{},type:{}},watch:{token:function(){this.$emit("onTokenUpdate",this.token)},currentOption:function(){this.onOptionChange()},notify:function(){this.onNotifyChange()},test:function(){this.onTestChange()}},methods:{onClick:function(){this.$emit("onClick",this.example)},onOptionChange(){this.$emit("update:selectedOption",this.currentOption)},onNotifyChange(){this.$emit("update:notifyOption",this.notify)},onTestChange(){this.$emit("update:testOption",this.test)},setToken:function(n){this.token=n}},created:function(){this.currentOption="nodejssdk"}};function H(n,t,e,r,i,o){const s=d("InputText"),a=d("InputSelect"),p=d("InputSwitch");return u(),f("div",{class:g(["c-playground-footer",{app:e.type==="app"}])},[l("section",null,[y(s,{label:"API key",value:n.token,"onUpdate:value":t[0]||(t[0]=c=>n.token=c),placeholder:"Enter your Api key"},null,8,["value"])]),t[7]||(t[7]=l("div",{class:"spacer"},null,-1)),l("section",null,[t[4]||(t[4]=l("span",null," Language ",-1)),y(a,{label:"Code language",options:n.codeOptions,value:n.currentOption,"onUpdate:value":t[1]||(t[1]=c=>n.currentOption=c)},null,8,["options","value"])]),t[8]||(t[8]=l("div",{class:"spacer"},null,-1)),l("section",null,[y(p,{label:"Test mode toggle",value:n.test,"onUpdate:value":t[2]||(t[2]=c=>n.test=c)},null,8,["value"]),t[5]||(t[5]=l("small",null," If set, events will be marked as test events. ",-1))]),t[9]||(t[9]=l("div",{class:"spacer"},null,-1)),l("section",null,[y(p,{label:"Notify toggle",value:n.notify,"onUpdate:value":t[3]||(t[3]=c=>n.notify=c)},null,8,["value"]),t[6]||(t[6]=l("small",null," If set, events will send a push notification. ",-1))])],2)}const R=C(B,[["render",H]]),F={components:{},data:function(){return{sendText:"Send event",copyText:"Copy code",copyTimeout:null}},props:{context:{},example:{},active:{type:Boolean,default:!1},currentView:{},currentCode:{}},watch:{},methods:{updateView:function(n){this.$emit("update:currentView",n)},async onSend(){try{this.sendText="Sending";const n=await this.sendEvent();this.sendText="Send event"}catch(n){console.log(n),console.error("Failed to send:",n)}},async onCopy(){try{await navigator.clipboard.writeText(this.currentCode),this.copyText="Copied!",this.copyTimeout&&clearTimeout(this.copyTimeout),this.copyTimeout=setTimeout(()=>{this.copyText="Copy code",this.copyTimeout=null},1e3)}catch(n){console.error("Failed to copy:",n)}},async sendEvent(){let n=JSON.parse(JSON.stringify(this.example.item));n.notify=this.context.notify||!1,n.test=this.context.test||!1,await this.$store.events.sendEvent(n,this.context.token);let t="Event sent!";n.test&&(t="Test event sent!"),this.$store.app.sendNotification({message:t,timer:1e3})}}},J={class:"c-playground-callout"},q={class:"btn-switch"},K={key:0,class:"c-spinner"};function M(n,t,e,r,i,o){return u(),f("div",J,[l("div",q,[l("button",{onClick:t[0]||(t[0]=T(s=>o.updateView("view"),["prevent"])),type:"button",class:g(["btn",{"btn-muted":e.currentView==="view"}])},t[4]||(t[4]=[l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M7 15H11M15 15H17M7 11H8M12 11H17M4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2),l("button",{onClick:t[1]||(t[1]=T(s=>o.updateView("code"),["prevent"])),type:"button",class:g(["btn",{"btn-muted":e.currentView==="code"}])},t[5]||(t[5]=[l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.2424 3.02985C14.7782 3.1638 15.1039 3.70673 14.97 4.24253L10.97 20.2426C10.836 20.7784 10.2931 21.1041 9.75731 20.9702C9.22152 20.8362 8.89576 20.2933 9.02971 19.7575L13.0297 3.75746C13.1637 3.22166 13.7066 2.8959 14.2424 3.02985ZM6.70696 7.29293C7.09748 7.68345 7.09748 8.31662 6.70696 8.70714L3.41406 12L6.70696 15.2929C7.09748 15.6834 7.09748 16.3166 6.70696 16.7071C6.31643 17.0977 5.68327 17.0977 5.29274 16.7071L1.99985 13.4142C1.2188 12.6332 1.2188 11.3669 1.99985 10.5858L5.29274 7.29293C5.68327 6.9024 6.31643 6.9024 6.70696 7.29293ZM17.2927 7.29293C17.6833 6.9024 18.3164 6.9024 18.707 7.29293L21.9998 10.5858C22.7809 11.3669 22.7809 12.6332 21.9998 13.4142L18.707 16.7071C18.3164 17.0977 17.6833 17.0977 17.2927 16.7071C16.9022 16.3166 16.9022 15.6834 17.2927 15.2929L20.5856 12L17.2927 8.70714C16.9022 8.31662 16.9022 7.68345 17.2927 7.29293Z",fill:"currentColor"})],-1)]),2)]),l("button",{onClick:t[2]||(t[2]=(...s)=>o.onCopy&&o.onCopy(...s)),type:"button",class:"btn btn-wide btn-primary"},h(n.copyText),1),l("button",{onClick:t[3]||(t[3]=(...s)=>o.onSend&&o.onSend(...s)),type:"button",class:"btn btn-wide btn-primary"},[n.sendText==="Sending"?(u(),f("span",K)):I("",!0),l("span",null,h(n.sendText),1)])])}const z=C(F,[["render",M]]);function D(n,t){const e=n.item;let r=t.test||!1,i=t.notify||!1;t.token;let o="";e.type&&(o=`
  type: "${e.type}",`);let s="";if(e.content){let c=e.content;e.type==="rows"||e.type==="json"?(c=JSON.stringify(c,null,2),s=`
  content: ${c},`):s=`
  content: "${c}",`}e.notify||t.notify?i=`
  notify: true,`:i="",e.test||t.test?r=`
  test: true,`:r="";let a="";return e.actions&&(a=`
  actions: ${JSON.stringify(e.actions,null,2)}`),`// Remember to setup the nodejs sdk https://www.npmjs.com/package/@operational.co/sdk 
  
const eventName = "${e.name}";
const payload = {
  name: "${e.name}",
  avatar: "${e.avatar}",${r}${i}${o}${s}${a}
}

await ops.events.ingest(eventName, payload)`}function Y(n,t){const e=n.item;let r=t.test||!1,i=t.notify||!1,o=t.token||"API_KEY",s=t.baseUrl,a="";e.type&&(a=`
  type: "${e.type}",`);let p="";e.content&&(p=`
  content: "${e.content}",`),i?i=`
  notify: true,`:i="",r?r=`
  test: true,`:r="";let c="";return e.actions&&(c=`
  actions: ${JSON.stringify(e.actions,null,2)}`),`const url =  "${s}/api/v1/ingest";
const form = {
  name: "${e.name}",
  avatar: "${e.avatar}",${r}${i}${a}${p}${c}
}
const config = {
  headers: {
    Authorization : "Bearer ${o}"
  }
}

try {
  await axios.post(url, form, config);
} catch(err) {
  console.log(err);
}`}function G(n,t){const e=n.item;let r=t.test||!1,i=t.notify||!1,o=t.token||"API_KEY",s=t.baseUrl,a="";e.type&&(a=`
  type: "${e.type}",`);let p="";e.content&&(p=`
  content: "${e.content}",`),e.notify||t.notify?i=`
  notify: true,`:i="",e.test||t.test?r=`
  test: true,`:r="";let c="";return e.actions&&(c=`
  actions: ${JSON.stringify(e.actions,null,2)}`),`const url = "${s}/api/v1/ingest";
const event = {
  name: "${e.name}",
  avatar: "${e.avatar}",${r}${i}${a}${p}${c}
}

const headers = {
  "Authorization": "Bearer ${o}",
  "Content-Type": "application/json"
};

const response = await fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(event)
}).catch((err) => {});`}function Z(n,t){const e=n.item;let r=t.test||!1,i=t.notify||!1,o=t.token||"API_KEY",s=t.baseUrl,a={};return a.name=e.name,a.avatar=e.avatar,e.type&&(a.type=e.type),(e.notify||t.notify)&&(a.notify=!0),e.content&&(a.content=e.content),i&&(a.notify=!0),r&&(a.test=!0),e.actions&&(a.actions=e.actions),`curl -X POST "${s}/api/v1/ingest" -H "Authorization: Bearer ${o}" -H "Content-Type: application/json" -d '${JSON.stringify(a,null,2)}'
`}function Q(n,t){const e=n.item;let r=t.test||!1,i=t.notify||!1,o=t.token||"API_KEY",s=t.baseUrl,a=e.type?`
  "type" => "${e.type}",`:"",p=e.content?`
  "content" => "${e.content}",`:"";r=r?`
  "test" => true,`:"",i=i?`
  "notify" => true,`:"";let c=e.actions?`
  "actions" => ${JSON.stringify(e.actions,null,2).replace(/\"/g,"'")},`:"";return`<?php

$url = "${s}/api/v1/ingest";

$data = [
  "name" => "${e.name}",
  "avatar" => "${e.avatar}",${r}${i}${a}${p}${c}
];

$headers = [
  "Authorization: Bearer ${o}",
  "Content-Type: application/json"
];

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);

echo $response;
`}function W(n,t){const e=n.item;let r=t.test||!1,i=t.notify||!1;t.token,t.baseUrl;let o=e.type?`
  "type" => "${e.type}",`:"",s=e.content?`
  "content" => "${e.content}",`:"";r=r?`
  "test" => true,`:"",i=i?`
  "notify" => true,`:"";let a=e.actions?`
  "actions" => ${JSON.stringify(e.actions,null,2).replace(/\"/g,"'")},`:"";return`// Remember to setup the PHP SDK https://operational.co/integrations/php-sdk 

$payload = [
  "name" => "${e.name}",
  "avatar" => "${e.avatar}",${r}${i}${o}${s}${a}
];

$client->ingest($payload);`}function X(n,t){const e=n.item;let r=t.token||"API_KEY",i=e.type?`
    "type": "${e.type}",`:"",o=e.content?`
    "content": "${e.content}",`:"",s=e.notify||t.notify?`
    "notify": True,`:"",a=e.actions?`
    "actions": ${JSON.stringify(e.actions,null,2)},`:"";return`import requests
import json

url = "https://api.operational.co/api/v1/ingest"

headers = {
    "Authorization": "Bearer ${r}",
    "Content-Type": "application/json"
}

data = {
    "name": "${e.name}",
    "avatar": "${e.avatar}",${i}${o}${s}${a}
}

response = requests.post(url, headers=headers, data=json.dumps(data))

print(response.json())`}const ee={components:{Callout:z,Footer:R,Code:V,Item:j,SidebarItem:L,InputText:O},data:function(){return{examples:U,currentCategory:null,currentExample:null,currentView:"view",currentOption:"nodejssdk",query:"",fuse:null,categories:["saas","stripe","ecom","generic"],context:{token:"",test:!1,notify:!1,baseUrl:"https://api.operational.co"}}},watch:{query:function(){}},props:{type:{default:""},apikey:{}},computed:{currentCode:function(){if(!this.currentExample)return"";let n="",t=this.currentExample,e=this.currentOption;return t=x(t),e==="nodejssdk"&&(n=D(t,this.context)),e==="axios"&&(n=Y(t,this.context)),e==="fetch"&&(n=G(t,this.context)),e==="curl"&&(n=Z(t,this.context)),e==="php"&&(n=Q(t,this.context)),e==="php-sdk"&&(n=W(t,this.context)),e==="python"&&(n=X(t,this.context)),n},computedExamples:function(){let n=this.examples;if(n=x(n),this.currentCategory&&(n=n.filter(e=>e.category?!!e.category.includes(this.currentCategory):!1)),!this.query)return n;let t=this.fuse.search(this.query);return t=t.map(e=>e.item),t},computedItem:function(){let n=null;return this.currentExample&&this.currentExample.item&&(n=this.currentExample.item),{id:1,avatar:"-",name:"NA",createdAt:new Date().toISOString(),...n}}},methods:{selectCategory:function(n){this.currentCategory===n?this.currentCategory=null:this.currentCategory=n},updateToken:function(n){this.context.token=n},onClick:function(n){this.currentExample=n},updateCurrentOption(n){this.currentOption=n},updateNotify(n){this.context.notify=n},updateTest(n){this.context.test=n},updateCurrentView:function(n){this.currentView=n}},created:function(){this.currentExample=U[0],this.apikey&&(this.context.token=this.apikey),this.fuse=new N(this.examples,{keys:["title","description"],threshold:.3,includeScore:!1})},mounted:function(){this.$refs.footer.setToken(this.context.token),this.$store&&this.$store.app&&this.$store.app.baseApiUrl&&(this.context.baseUrl=this.$store.app.baseApiUrl)}},te={class:"c-playground__sidebar"},ne=["onClick"],oe={class:"c-playground__main"};function re(n,t,e,r,i,o){const s=d("Footer"),a=d("InputText"),p=d("SidebarItem"),c=d("Item"),v=d("Code"),S=d("Callout");return u(),f("div",{class:g(["c-playground",{app:e.type==="app"}])},[y(s,{ref:"footer",type:e.type,currentCode:o.currentCode,currentView:n.currentView,example:n.currentExample,onOnTokenUpdate:o.updateToken,"onUpdate:currentView":o.updateCurrentView,"onUpdate:selectedOption":o.updateCurrentOption,"onUpdate:notifyOption":o.updateNotify,"onUpdate:testOption":o.updateTest},null,8,["type","currentCode","currentView","example","onOnTokenUpdate","onUpdate:currentView","onUpdate:selectedOption","onUpdate:notifyOption","onUpdate:testOption"]),l("div",te,[l("header",null,[y(a,{value:n.query,"onUpdate:value":t[0]||(t[0]=m=>n.query=m),placeholder:"Search for a event"},null,8,["value"]),l("article",null,[(u(!0),f(k,null,b(n.categories,(m,$)=>(u(),f("span",{onClick:ie=>o.selectCategory(m),class:g([{active:n.currentCategory===m}]),key:$},h(m),11,ne))),128))])]),l("main",null,[(u(!0),f(k,null,b(o.computedExamples,(m,$)=>(u(),w(p,{active:n.currentExample.title===m.title,onOnClick:o.onClick,key:$,example:m},null,8,["active","onOnClick","example"]))),128))])]),l("div",oe,[n.currentView==="view"?(u(),w(c,{key:0,item:o.computedItem},null,8,["item"])):(u(),w(v,{key:1,copy:!1,text:o.currentCode},null,8,["text"])),y(S,{context:n.context,example:n.currentExample,currentCode:o.currentCode,currentView:n.currentView,"onUpdate:currentView":o.updateCurrentView},null,8,["context","example","currentCode","currentView","onUpdate:currentView"])])],2)}const Pe=C(ee,[["render",re]]);export{Pe as default};
