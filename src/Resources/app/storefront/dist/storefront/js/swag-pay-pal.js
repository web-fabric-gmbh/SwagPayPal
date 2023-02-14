/*! For license information please see swag-pay-pal.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["swag-pay-pal"],{9250:(t,e,r)=>{var i=r(8254),o=r(3206),n=r(4690),s=r(6285);function a(t){var e="https://www.paypal.com/sdk/js";t.sdkBaseURL&&(e=t.sdkBaseURL,delete t.sdkBaseURL);var r=function(t,e){var r="",i="";Array.isArray(t)?t.length>1?(r="*",i=t.toString()):r=t.toString():"string"==typeof t&&t.length>0?r=t:"string"==typeof e&&e.length>0&&(r="*",i=e);return{"merchant-id":r,"data-merchant-id":i}}(t["merchant-id"],t["data-merchant-id"]),i=Object.assign({},t,r),o=Object.keys(i).filter((function(t){return void 0!==i[t]&&null!==i[t]&&""!==i[t]})).reduce((function(t,e){var r=i[e].toString();return"data-"===e.substring(0,5)?t.dataAttributes[e]=r:t.queryParams[e]=r,t}),{queryParams:{},dataAttributes:{}}),n=o.queryParams,s=o.dataAttributes;return{url:e+"?"+l(n),dataAttributes:s}}function l(t){var e="";return Object.keys(t).forEach((function(r){0!==e.length&&(e+="&"),e+=r+"="+t[r]})),e}function c(t,e){void 0===e&&(e={});var r=document.createElement("script");return r.src=t,Object.keys(e).forEach((function(t){r.setAttribute(t,e[t]),"data-csp-nonce"===t&&r.setAttribute("nonce",e["data-csp-nonce"])})),r}function d(t,e){if(void 0===e&&(e=u()),h(t,e),"undefined"==typeof window)return e.resolve(null);var r=a(t),i=r.url,o=r.dataAttributes,n=o["data-namespace"]||"paypal",s=p(n);return function(t,e){var r=document.querySelector('script[src="'+t+'"]');if(null===r)return null;var i=c(t,e),o=Object.assign({},r.dataset);if(delete o.uidAuto,Object.keys(o).length!==Object.keys(i.dataset).length)return null;var n=!0;return Object.keys(o).forEach((function(t){o[t]!==i.dataset[t]&&(n=!1)})),n?r:null}(i,o)&&s?e.resolve(s):function(t,e){void 0===e&&(e=u());h(t,e);var r=t.url,i=t.attributes;if("string"!=typeof r||0===r.length)throw new Error("Invalid url.");if(void 0!==i&&"object"!=typeof i)throw new Error("Expected attributes to be an object.");return new e((function(t,e){if("undefined"==typeof window)return t();!function(t){var e=t.url,r=t.attributes,i=t.onSuccess,o=t.onError,n=c(e,r);n.onerror=o,n.onload=i,document.head.insertBefore(n,document.head.firstElementChild)}({url:r,attributes:i,onSuccess:function(){return t()},onError:function(){return e(new Error('The script "'+r+'" failed to load.'))}})}))}({url:i,attributes:o},e).then((function(){var t=p(n);if(t)return t;throw new Error("The window."+n+" global variable is not available.")}))}function u(){if("undefined"==typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function p(t){return window[t]}function h(t,e){if("object"!=typeof t||null===t)throw new Error("Expected an options object.");if(void 0!==e&&"function"!=typeof e)throw new Error("Expected PromisePonyfill to be a function.")}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class f{constructor(){m(this,"loadingScript",!1),m(this,"paypal",null),m(this,"callbacks",[])}}const y=["card","bancontact","blik","eps","giropay","ideal","mybank","p24","sepa","sofort","venmo"];class b extends s.Z{createScript(t){null===this.constructor.scriptLoading.paypal?(this.constructor.scriptLoading.callbacks.push(t),this.constructor.scriptLoading.loadingScript||(this.constructor.scriptLoading.loadingScript=!0,d(this.getScriptOptions()).then(this.callCallbacks.bind(this)))):t.call(this,this.constructor.scriptLoading.paypal)}callCallbacks(){null===this.constructor.scriptLoading.paypal&&(this.constructor.scriptLoading.paypal=window.paypal,delete window.paypal),this.constructor.scriptLoading.callbacks.forEach((t=>{t.call(this,this.constructor.scriptLoading.paypal)}))}getScriptOptions(){const t={components:"buttons,messages,hosted-fields,funding-eligibility","client-id":this.options.clientId,commit:!!this.options.commit,locale:this.options.languageIso,currency:this.options.currency,intent:this.options.intent,"enable-funding":"paylater,venmo"};return this.options.disablePayLater&&(t["enable-funding"]="venmo"),!1===this.options.useAlternativePaymentMethods?t["disable-funding"]=y.join(","):Array.isArray(this.options.disabledAlternativePaymentMethods)&&(t["disable-funding"]=this.options.disabledAlternativePaymentMethods.join(",")),this.options.merchantPayerId&&(t["merchant-id"]=this.options.merchantPayerId),this.options.clientToken&&(t["data-client-token"]=this.options.clientToken),t}createError(t,e=!1,r=""){const i=this.options.addErrorUrl;this.options.accountOrderEditCancelledUrl&&this.options.accountOrderEditFailedUrl?window.location=e?this.options.accountOrderEditCancelledUrl:this.options.accountOrderEditFailedUrl:this._client.post(i,JSON.stringify({error:t,cancel:e}),(()=>{r?window.location=r:(window.onbeforeunload=()=>{window.scrollTo(0,0)},window.location.reload())}))}}var g,v,S;function w(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}g=b,v="scriptLoading",S=new f,(v=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(v))in g?Object.defineProperty(g,v,{value:S,enumerable:!0,configurable:!0,writable:!0}):g[v]=S;class P extends b{init(){this._client=new i.Z,this.createButton()}createButton(){this.createScript((t=>{this.renderButton(t)}))}renderButton(t){return t.Buttons(this.getButtonConfig()).render(this.el)}getBuyButtonState(){if(!this.options.addProductToCart)return{element:null,disabled:!1};const t=o.Z.querySelector(this.el.closest("form"),this.options.buyButtonSelector);return{element:t,disabled:t.disabled}}observeBuyButton(t,e,r,i={attributes:!0}){const o=new MutationObserver((t=>{t.forEach((t=>{if("disabled"===t.attributeName){const{disabled:t}=this.getBuyButtonState();if(t)return void r();e()}}))}));return o.observe(t,i),o}getButtonConfig(){const t=this.el,{element:e,disabled:r}=this.getBuyButtonState();return{onInit:(i,o)=>{if(!this.options.addProductToCart)return;const n=()=>{o.enable(),t.classList.remove(this.options.disabledClass)},s=()=>{o.disable(),t.classList.add(this.options.disabledClass)};this.observeBuyButton(e,n,s),r?s():n()},style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,tagline:this.options.tagline,layout:"horizontal",label:"checkout",height:40},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onError:this.onError.bind(this)}}createOrder(){const t={paymentMethodId:this.options.payPalPaymentMethodId,deleteCart:this.options.addProductToCart};return new Promise(((e,r)=>{this._client.post(this.options.contextSwitchUrl,JSON.stringify(t),((t,i)=>(i.status>=400&&r(t),Promise.resolve().then((()=>this.options.addProductToCart?this.addProductToCart():Promise.resolve())).then((()=>this._createOrder())).then((t=>{e(t)})).catch((t=>{r(t)})))))}))}_createOrder(){return new Promise(((t,e)=>{this._client.post(this.options.createOrderUrl,new FormData,((r,i)=>{i.status>=400&&e(r);try{const e=JSON.parse(r);t(e.token)}catch(t){e(t)}}))}))}addProductToCart(){const t=this.el.closest("form"),e=o.Z.querySelector(t,this.options.buyButtonSelector),r=window.PluginManager.getPluginInstanceFromElement(t,"AddToCart");return new Promise((t=>{r.$emitter.subscribe("openOffCanvasCart",(()=>{t()})),e.click()}))}onApprove(t,e){const r={token:t.orderID};n.Z.create(document.body),this._client.post(this.options.prepareCheckoutUrl,JSON.stringify(r),((t,r)=>r.status<400?e.redirect(this.options.checkoutConfirmUrl):this.createError(t,!1,this.options.cancelRedirectUrl)))}onError(t){this.createError(t)}onCancel(t){this.createError(t,!0,this.options.cancelRedirectUrl)}}w(P,"scriptLoading",new f),w(P,"options",{disabledClass:"is-disabled",buyButtonSelector:".btn-buy",buttonColor:"gold",buttonShape:"rect",buttonSize:"small",languageIso:"en_GB",clientId:"",merchantPayerId:"",currency:"EUR",intent:"capture",commit:!1,tagline:!1,addProductToCart:!1,contextSwitchUrl:"",payPalPaymentMethodId:"",createOrderUrl:"",deleteCartUrl:"",prepareCheckoutUrl:"",checkoutConfirmUrl:"",addErrorUrl:"",cancelRedirectUrl:"",disablePayLater:!0});var O=r(207),F=r(5659);class E extends b{init(){this._client=new i.Z,this.createButton()}createButton(){this.createScript((t=>{this.renderButton(t)}))}renderButton(t){return this.confirmOrderForm=o.Z.querySelector(document,this.options.confirmOrderFormSelector),o.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.add("d-none"),t.Buttons(this.getButtonConfig()).render(this.el)}getButtonConfig(){return{style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,label:"checkout"},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onClick:this.onClick.bind(this),onError:this.onError.bind(this)}}createOrder(){if(!this.confirmOrderForm.checkValidity())throw new Error("Checkout form not valid");const t=O.Z.serialize(this.confirmOrderForm);t.set("product","spb");const e=this.options.orderId;return null!==e&&t.set("orderId",e),new Promise(((e,r)=>{this._client.post(this.options.createOrderUrl,t,((t,i)=>{i.status>=400&&r(t);try{const r=JSON.parse(t);e(r.token)}catch(t){r(t)}}))}))}onApprove(t){F.Z.create();const e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","paypalOrderId"),e.setAttribute("value",t.orderID),this.confirmOrderForm.appendChild(e),this.confirmOrderForm.submit()}onCancel(){this.createError(null,!0)}onClick(t,e){return this.confirmOrderForm.checkValidity()?e.resolve():e.reject()}onError(t){this.createError(t)}}!function(t,e,r){(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(E,"options",{buttonColor:"gold",buttonShape:"rect",buttonSize:"small",languageIso:"en_GB",clientId:"",merchantPayerId:"",currency:"EUR",intent:"capture",commit:!0,useAlternativePaymentMethods:!0,disabledAlternativePaymentMethods:[],showPayLater:!0,createOrderUrl:"",orderId:null,accountOrderEditFailedUrl:"",accountOrderEditCancelledUrl:"",confirmOrderFormSelector:"#confirmOrderForm",confirmOrderButtonSelector:'button[type="submit"]',addErrorUrl:""});class C extends b{init(){this.createMarks()}createMarks(){this.createScript((t=>{t.Marks().render(this.el)}))}}!function(t,e,r){(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(C,"options",{clientId:"",merchantPayerId:"",languageIso:"en_GB",currency:"EUR",intent:"capture",commit:!0,useAlternativePaymentMethods:!0,disabledAlternativePaymentMethods:[],showPayLater:!0});class I extends s.Z{init(){o.Z.querySelector(document,this.options.confirmOrderFormSelector).addEventListener("submit",this.onConfirmCheckout.bind(this)),this.createPaymentWall()}createPaymentWall(){this.paypal=window.PAYPAL,this.paypal.apps.PPP({placeholder:this.options.placeholder,approvalUrl:this.options.approvalUrl,mode:this.options.mode,country:this.options.customerCountryIso,buttonLocation:this.options.buttonLocation,language:this.options.customerSelectedLanguage,useraction:this.options.userAction,surcharging:this.options.surcharging,showLoadingIndicator:this.options.showLoadingIndicator,showPuiOnSandbox:this.options.showPuiOnSandbox,onLoad:this.onPaymentSelectionLoad})}onConfirmCheckout(t){t.preventDefault();const e=t.target;if(!e.checkValidity())return;this._client=new i.Z;const r=O.Z.serialize(e);n.Z.create(document.body);const o=this.options.orderId;null!==o&&r.set("orderId",o),this._client.post(this.options.handlePaymentUrl,r,this.afterPayOrder.bind(this))}afterPayOrder(t){const e=JSON.parse(t);"plusPatched"===e.redirectUrl?this.paypal.apps.PPP.doCheckout():window.location.href=e.redirectUrl}onPaymentSelectionLoad(){document.$emitter.publish("paypalPlusSelectionLoaded")}}!function(t,e,r){(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(I,"options",{placeholder:"ppplus",approvalUrl:"",paypalPaymentId:"",paypalToken:"",customerCountryIso:"",mode:"live",buttonLocation:"outside",preSelection:"paypal",userAction:"commit",customerSelectedLanguage:"en_GB",surcharging:!1,showLoadingIndicator:!0,showPuiOnSandbox:!0,handlePaymentUrl:"",isEnabledParameterName:"isPayPalPlusCheckout",languageId:null,orderId:null,confirmOrderFormSelector:"#confirmOrderForm"});class k extends b{init(){this.createInstallmentBanner()}createInstallmentBanner(){this.createScript((t=>{t.Messages(this.getBannerConfig()).render(this.el)}))}getBannerConfig(){return{amount:this.options.amount,currency:this.options.currency,style:{layout:this.options.layout,color:this.options.color,ratio:this.options.ratio,logo:{type:this.options.logoType},text:{color:this.options.textColor}}}}}!function(t,e,r){(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(k,"options",{clientId:"",merchantPayerId:"",commit:!0,amount:0,currency:"EUR",layout:"text",color:"blue",ratio:"8x1",logoType:"primary",textColor:"black"});var A=r(1966),B=r(1110);function U(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class j extends b{init(){this.confirmOrderForm=o.Z.querySelector(document,this.options.confirmOrderFormSelector),this.options.preventErrorReload?o.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).disabled="disabled":(o.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.add("d-none"),this._client=new i.Z,this.createScript((t=>{this.render(t)})))}render(t){if(this.cardFieldForm=o.Z.querySelector(document,this.options.cardFieldFormSelector),t.HostedFields.isEligible())this.cardFieldForm.classList.remove("d-none"),t.HostedFields.render(this.getFieldConfig()).then(this.bindFieldActions.bind(this));else{const e=t.Buttons(this.getButtonConfig(t.FUNDING.CARD));e.isEligible()||this.createError("Neither hosted fields nor standalone buttons are eligible"),e.render(this.el)}}getFieldConfig(){return{createOrder:this.createOrder.bind(this,"acdc"),onError:this.onError.bind(this),styles:this.options.cardFieldStyleConfig,fields:{number:{selector:this.options.cardNumberFieldSelector,placeholder:o.Z.querySelector(this.cardFieldForm,this.options.cardNumberFieldSelector).dataset.placeholder},cvv:{selector:this.options.cvvFieldSelector,placeholder:o.Z.querySelector(this.cardFieldForm,this.options.cvvFieldSelector).dataset.placeholder},expirationDate:{selector:this.options.expirationFieldSelector,placeholder:o.Z.querySelector(this.cardFieldForm,this.options.expirationFieldSelector).dataset.placeholder}}}}getButtonConfig(t){return{fundingSource:t,style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,label:"checkout"},createOrder:this.createOrder.bind(this,"spb"),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onClick:this.onClick.bind(this),onError:this.onError.bind(this)}}bindFieldActions(t){t.on("validityChange",(t=>{this.setFieldValidity(t.fields[t.emittedBy])}));const e=o.Z.querySelectorAll(this.cardFieldForm,"input");A.Z.iterate(e,(e=>{e.addEventListener("invalid",this.onFormFieldInvalid.bind(this,t))})),o.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.remove("d-none"),this.confirmOrderForm.addEventListener("submit",this.onFieldSubmit.bind(this,t))}createOrder(t){const e=O.Z.serialize(this.confirmOrderForm);e.set("product",t);const r=this.options.orderId;return null!==r&&e.set("orderId",r),new Promise(((t,r)=>{this._client.post(this.options.createOrderUrl,e,((e,i)=>{i.status>=400&&r(e);try{const r=JSON.parse(e);t(r.token)}catch(t){r(t)}}))}))}onFieldSubmit(t,e){if(O.Z.serialize(this.confirmOrderForm).has("paypalOrderId"))return;if(!this.confirmOrderForm.checkValidity())return;e.preventDefault(),e.stopPropagation();const r=t.getState(),i=Object.keys(r.fields).find((t=>!r.fields[t].isValid));if(!i)return void t.submit(this.buildCardholderData()).then(this.onApprove.bind(this)).catch(this.onError.bind(this));new B.Z(o.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector)).remove(),t.focus(i),window.scrollTo({top:this.getScrollOffset(r.fields[i].container),behavior:"smooth"}),Object.keys(r.fields).forEach((t=>{this.setFieldValidity(r.fields[t],!1)}))}onApprove(t){F.Z.create();const e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","paypalOrderId"),e.setAttribute("value",Object.prototype.hasOwnProperty.call(t,"orderId")?t.orderId:t.orderID),this.confirmOrderForm.appendChild(e),this.confirmOrderForm.submit()}onCancel(){this.createError(null,!0)}onClick(t,e){return this.confirmOrderForm.checkValidity()?e.resolve():e.reject()}onError(t){this.createError(t)}getScrollOffset(t){let e=t.getBoundingClientRect().top+window.scrollY-this.options.scrollOffset;const r=o.Z.querySelector(document,this.options.fixedHeaderSelector,!1);if(r){e-=r.getBoundingClientRect().height}return e}setFieldValidity(t,e=!0){t.container.classList.remove("is-valid","is-invalid"),t.isValid?t.container.classList.add("is-valid"):t.isPotentiallyValid&&e||t.container.classList.add("is-invalid")}onFormFieldInvalid(t){this.cardFieldForm.classList.add(this.options.validatedStyleClass);const e=t.getState();Object.keys(e.fields).forEach((t=>{this.setFieldValidity(e.fields[t],!1)}))}buildCardholderData(){const t={...this.options.cardholderData},e=o.Z.querySelector(this.cardFieldForm,this.options.cardholderFieldSelector).value,r=o.Z.querySelector(this.cardFieldForm,this.options.zipFieldSelector).value;return e&&(t.cardholderName=e),r&&(t.billingAddress.postalCode=r),t}}U(j,"scriptLoading",new f),U(j,"options",{clientId:"",merchantPayerId:"",clientToken:"",currency:"EUR",intent:"capture",commit:!0,languageIso:"en_GB",buttonColor:"black",buttonShape:"rect",buttonSize:"small",createOrderUrl:"",orderId:null,accountOrderEditFailedUrl:"",accountOrderEditCancelledUrl:"",confirmOrderFormSelector:"#confirmOrderForm",cardFieldFormSelector:"#swag-paypal-acdc-form",cardNumberFieldSelector:"#swag-paypal-acdc-form-cardnumber",expirationFieldSelector:"#swag-paypal-acdc-form-expiration",cvvFieldSelector:"#swag-paypal-acdc-form-cvv",cardholderFieldSelector:"#swag-paypal-acdc-form-cardholder",zipFieldSelector:"#swag-paypal-acdc-form-zip",confirmOrderButtonSelector:'button[type="submit"]',scrollOffset:15,fixedHeaderSelector:"header.fixed-top",validatedStyleClass:"was-validated",cardFieldStyleConfig:{input:{"font-family":'"Inter", sans-serif',"font-size":"0.875rem","font-weight":300,"letter-spacing":"0.02rem"},"input::placeholder":{color:"#c3c3c3",opacity:1}},cardholderData:{cardholderName:"",billingAddress:{streetAddress:"",extendedAddress:"",region:"",locality:"",postalCode:"",countryCodeAlpha2:""},contingencies:["SCA_ALWAYS"]},preventErrorReload:!1});var L=r(7906);class Z extends s.Z{init(){new L.Z(this.el).create(),this._client=new i.Z,this.poll()}poll(){this._client.get(this.options.pollingUrl,this.onPollingResult.bind(this))}onPollingResult(t,e){417!==e.status?e.status>=400?window.location=this.options.errorUrl:window.location=this.options.successUrl:this.retryPolling()}retryPolling(){setTimeout(this.poll.bind(this),this.options.pollingInterval)}}function N(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}!function(t,e,r){(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(Z,"options",{pollingUrl:"",successUrl:"",errorUrl:"",paymentInstructions:null,pollingInterval:2e3});class x extends b{init(){this.confirmOrderForm=o.Z.querySelector(document,this.options.confirmOrderFormSelector),this.options.preventErrorReload?o.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).disabled="disabled":(o.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.add("d-none"),this._client=new i.Z,this.createScript((t=>{this.render(t)})))}render(t){const e=t.Buttons(this.getButtonConfig(this.getFundingSource(t)));e.isEligible()||this.createError(`Funding for PayPal button is not eligible (${this.getFundingSource(t)})`),e.render(this.el)}getFundingSource(t){return t.FUNDING.PAYPAL}getButtonConfig(t){return{fundingSource:t,style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,label:"checkout"},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onClick:this.onClick.bind(this),onError:this.onError.bind(this)}}createOrder(t){const e=O.Z.serialize(this.confirmOrderForm);e.set("product",t);const r=this.options.orderId;return null!==r&&e.set("orderId",r),new Promise(((t,r)=>{this._client.post(this.options.createOrderUrl,e,((e,i)=>{i.status>=400&&r(e);try{const r=JSON.parse(e);t(r.token)}catch(t){r(t)}}))}))}onApprove(t){F.Z.create();const e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","paypalOrderId"),e.setAttribute("value",Object.prototype.hasOwnProperty.call(t,"orderId")?t.orderId:t.orderID),this.confirmOrderForm.appendChild(e),o.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).click()}onCancel(){this.createError(null,!0)}onClick(t,e){return this.confirmOrderForm.checkValidity()?e.resolve():e.reject()}onError(t){this.createError(t)}}N(x,"scriptLoading",new f),N(x,"options",{clientId:"",merchantPayerId:"",clientToken:"",currency:"EUR",intent:"capture",commit:!0,languageIso:"en_GB",buttonColor:"black",buttonShape:"rect",buttonSize:"small",createOrderUrl:"",orderId:null,accountOrderEditFailedUrl:"",accountOrderEditCancelledUrl:"",confirmOrderFormSelector:"#confirmOrderForm",confirmOrderButtonSelector:'button[type="submit"]',preventErrorReload:!1});function T(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class _ extends b{init(){this._client=new i.Z,this.createScript((t=>{this.checkFunding(t)}))}checkFunding(t){const e=this.constructor.fundingSources.filter((e=>!t.isFundingEligible(t.FUNDING[e])));e.sort().join(",")!==this.options.filteredPaymentMethods.sort().join(",")&&this.updateMethodEligibility(e)}updateMethodEligibility(t){this._client.post(this.options.methodEligibilityUrl,JSON.stringify({paymentMethods:t}),(()=>{this.options.filteredPaymentMethods=t}))}}T(_,"scriptLoading",new f),T(_,"fundingSources",["CARD","SEPA","VENMO","PAYLATER"]),T(_,"options",{clientId:"",merchantPayerId:"",languageIso:"en_GB",currency:"EUR",intent:"capture",commit:!0,filteredPaymentMethods:[],methodEligibilityUrl:""});const q=window.PluginManager;q.register("SwagPayPalExpressButton",P,"[data-swag-paypal-express-button]"),q.register("SwagPayPalSmartPaymentButtons",E,"[data-swag-paypal-smart-payment-buttons]"),q.register("SwagPaypalAcdcFields",j,"[data-swag-paypal-acdc-fields]"),q.register("SwagPayPalMarks",C,"[data-swag-paypal-marks]"),q.register("SwagPayPalPlusPaymentWall",I,"[data-swag-paypal-payment-wall]"),q.register("SwagPayPalInstallmentBanner",k,"[data-swag-paypal-installment-banner]"),q.register("SwagPaypalPuiPolling",Z,"[data-swag-paypal-pui-polling]"),q.register("SwagPaypalSepa",class extends x{getFundingSource(t){return t.FUNDING.SEPA}},"[data-swag-paypal-sepa]"),q.register("SwagPaypalVenmo",class extends x{getFundingSource(t){return t.FUNDING.VENMO}},"[data-swag-paypal-venmo]"),q.register("SwagPaypalPayLater",class extends x{getFundingSource(t){return t.FUNDING.PAYLATER}},"[data-swag-paypal-pay-later]"),q.register("SwagPaypalFundingEligibility",_,"[data-swag-paypal-funding-eligibility]")}},t=>{t.O(0,["vendor-node","vendor-shared"],(()=>{return e=9250,t(t.s=e);var e}));t.O()}]);