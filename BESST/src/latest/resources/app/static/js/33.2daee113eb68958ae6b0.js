webpackJsonp([33],{2100:function(e,t,n){var i=n(2)(n(2405),n(2406),function(e){n(2403)},null,null);e.exports=i.exports},2305:function(e,t,n){"use strict";(function(t){var i=n(2306);function a(e,t){if(e===t)return 0;for(var n=e.length,i=t.length,a=0,r=Math.min(n,i);a<r;++a)if(e[a]!==t[a]){n=e[a],i=t[a];break}return n<i?-1:i<n?1:0}function r(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var o=n(603),s=Object.prototype.hasOwnProperty,c=Array.prototype.slice,l="foo"===function(){}.name;function u(e){return Object.prototype.toString.call(e)}function d(e){return!r(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var f=e.exports=g,p=/\s*function\s+([^\(\s]*)\s*/;function A(e){if(o.isFunction(e)){if(l)return e.name;var t=e.toString().match(p);return t&&t[1]}}function h(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function m(e){if(l||!o.isFunction(e))return o.inspect(e);var t=A(e);return"[Function"+(t?": "+t:"")+"]"}function v(e,t,n,i,a){throw new f.AssertionError({message:n,actual:e,expected:t,operator:i,stackStartFunction:a})}function g(e,t){e||v(e,!0,t,"==",f.ok)}function C(e,t,n,i){if(e===t)return!0;if(r(e)&&r(t))return 0===a(e,t);if(o.isDate(e)&&o.isDate(t))return e.getTime()===t.getTime();if(o.isRegExp(e)&&o.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(d(e)&&d(t)&&u(e)===u(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===a(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(r(e)!==r(t))return!1;var s=(i=i||{actual:[],expected:[]}).actual.indexOf(e);return-1!==s&&s===i.expected.indexOf(t)||(i.actual.push(e),i.expected.push(t),function(e,t,n,i){if(null===e||void 0===e||null===t||void 0===t)return!1;if(o.isPrimitive(e)||o.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var a=b(e),r=b(t);if(a&&!r||!a&&r)return!1;if(a)return e=c.call(e),t=c.call(t),C(e,t,n);var s,l,u=y(e),d=y(t);if(u.length!==d.length)return!1;for(u.sort(),d.sort(),l=u.length-1;l>=0;l--)if(u[l]!==d[l])return!1;for(l=u.length-1;l>=0;l--)if(s=u[l],!C(e[s],t[s],n,i))return!1;return!0}(e,t,n,i))}return n?e===t:e==t}function b(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function _(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function x(e,t,n,i){var a;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(i=n,n=null),a=function(e){var t;try{e()}catch(e){t=e}return t}(t),i=(n&&n.name?" ("+n.name+").":".")+(i?" "+i:"."),e&&!a&&v(a,n,"Missing expected exception"+i);var r="string"==typeof i,s=!e&&o.isError(a),c=!e&&a&&!n;if((s&&r&&_(a,n)||c)&&v(a,n,"Got unwanted exception"+i),e&&a&&n&&!_(a,n)||!e&&a)throw a}f.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=h(m((t=this).actual),128)+" "+t.operator+" "+h(m(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||v;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var i=new Error;if(i.stack){var a=i.stack,r=A(n),o=a.indexOf("\n"+r);if(o>=0){var s=a.indexOf("\n",o+1);a=a.substring(s+1)}this.stack=a}}},o.inherits(f.AssertionError,Error),f.fail=v,f.ok=g,f.equal=function(e,t,n){e!=t&&v(e,t,n,"==",f.equal)},f.notEqual=function(e,t,n){e==t&&v(e,t,n,"!=",f.notEqual)},f.deepEqual=function(e,t,n){C(e,t,!1)||v(e,t,n,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(e,t,n){C(e,t,!0)||v(e,t,n,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(e,t,n){C(e,t,!1)&&v(e,t,n,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=function e(t,n,i){C(t,n,!0)&&v(t,n,i,"notDeepStrictEqual",e)},f.strictEqual=function(e,t,n){e!==t&&v(e,t,n,"===",f.strictEqual)},f.notStrictEqual=function(e,t,n){e===t&&v(e,t,n,"!==",f.notStrictEqual)},f.throws=function(e,t,n){x(!0,e,t,n)},f.doesNotThrow=function(e,t,n){x(!1,e,t,n)},f.ifError=function(e){if(e)throw e},f.strict=i(function e(t,n){t||v(t,!0,n,"==",e)},f,{equal:f.strictEqual,deepEqual:f.deepStrictEqual,notEqual:f.notStrictEqual,notDeepEqual:f.notDeepStrictEqual}),f.strict.strict=f.strict;var y=Object.keys||function(e){var t=[];for(var n in e)s.call(e,n)&&t.push(n);return t}}).call(t,n(54))},2306:function(e,t,n){"use strict";var i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,o,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))a.call(n,l)&&(s[l]=n[l]);if(i){o=i(n);for(var u=0;u<o.length;u++)r.call(n,o[u])&&(s[o[u]]=n[o[u]])}}return s}},2403:function(e,t,n){var i=n(2404);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2089)("6436f144",i,!0,{})},2404:function(e,t,n){(e.exports=n(2088)(!0)).push([e.i,".invoice-header{width:100%;height:100%}.invoice-header span.required{color:#e26829;display:inline-block}.invoice-header .content{border:1px solid #2b2f3b;width:1080px}.invoice-header .content .order-info{width:100%;height:332px;border-bottom:1px solid #2b2f3b}.invoice-header .content .order-info .title{height:50px;line-height:50px;padding-left:40px}.invoice-header .content .order-info .left{float:left;width:100%;height:282px;background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.invoice-header .content .order-info .left .item{line-height:60px;overflow:hidden;width:49%;height:50px;display:inline-block}.invoice-header .content .order-info .left .item .label{display:inline-block;width:125px;margin-left:15px}.invoice-header .content .order-info .left .item .input{margin-left:10px;width:250px;border-radius:0 0 10px 10px}.invoice-header .content .order-info .left .item .input-left{margin-left:10px;width:200px}.invoice-header .content .order-info .left .item .input-right{width:200px}.invoice-header .content .order-info .left .item .input-note{margin-left:10px;width:608px}.invoice-header .content .order-info-two{width:100%;height:111px}.invoice-header .content .order-info-two .title{height:50px;line-height:50px;padding-left:40px}.invoice-header .content .order-info-two .pi-left{float:left;width:100%;height:60px;background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b;padding:16px;border-bottom:1px solid #2b2f3b}.invoice-header .content .order-info-two .pi-left .el-tag+.el-tag{margin-left:10px}.invoice-header .content .order-info-two .pi-left .button-new-tag{margin-left:6px}.invoice-header .content .parts-list{text-align:right;padding:0 40px;font-size:12px;overflow:hidden;height:50px;line-height:50px;width:100%;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b;position:relative}.invoice-header .content .parts-list .att-btn{padding:6px 9px;min-width:0;margin:11px auto;display:block}.invoice-header .content .parts-list .att-total{display:inline-block;position:absolute;top:0;right:25px;color:#e26829}.invoice-header .content .parts-list .labelAdd{margin-left:14px}.invoice-header .content .parts-list .cancel-button{margin-top:12px}","",{version:3,sources:["C:/Users/dd/Desktop/besst-build/clientBESST/src/views/nl/finance/invoice-list-header.vue"],names:[],mappings:"AACA,gBACE,WAAY,AACZ,WAAa,CACd,AACD,8BACI,cAAe,AACf,oBAAsB,CACzB,AACD,yBACI,yBAA0B,AAC1B,YAAc,CACjB,AACD,qCACM,WAAY,AACZ,aAAc,AACd,+BAAiC,CACtC,AACD,4CACQ,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CAC1B,AACD,2CACQ,WAAY,AACZ,WAAY,AACZ,aAAc,AACd,mBAAoB,AACpB,kCAAmC,AAC3B,yBAA2B,CAC1C,AACD,iDACU,iBAAkB,AAClB,gBAAiB,AACjB,UAAW,AACX,YAAa,AACb,oBAAsB,CAC/B,AACD,wDACY,qBAAsB,AACtB,YAAa,AACb,gBAAkB,CAC7B,AACD,wDACY,iBAAkB,AAClB,YAAa,AACb,2BAA6B,CACxC,AACD,6DACY,iBAAkB,AAClB,WAAa,CACxB,AACD,8DACY,WAAa,CACxB,AACD,6DACY,iBAAkB,AAClB,WAAa,CACxB,AACD,yCACM,WAAY,AACZ,YAAc,CACnB,AACD,gDACQ,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CAC1B,AACD,kDACQ,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,+BAAiC,CACxC,AACD,kEACU,gBAAkB,CAC3B,AACD,kEACU,eAAiB,CAC1B,AACD,qCACM,iBAAkB,AAClB,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,kCAAmC,AAC3B,0BAA2B,AACnC,iBAAmB,CACxB,AACD,8CACQ,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,aAAe,CACtB,AACD,gDACQ,qBAAsB,AACtB,kBAAmB,AACnB,MAAO,AACP,WAAY,AACZ,aAAe,CACtB,AACD,+CACQ,gBAAkB,CACzB,AACD,oDACQ,eAAiB,CACxB",file:"invoice-list-header.vue",sourcesContent:["\n.invoice-header {\n  width: 100%;\n  height: 100%;\n}\n.invoice-header span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.invoice-header .content {\n    border: 1px solid #2b2f3b;\n    width: 1080px;\n}\n.invoice-header .content .order-info {\n      width: 100%;\n      height: 332px;\n      border-bottom: 1px solid #2b2f3b;\n}\n.invoice-header .content .order-info .title {\n        height: 50px;\n        line-height: 50px;\n        padding-left: 40px;\n}\n.invoice-header .content .order-info .left {\n        float: left;\n        width: 100%;\n        height: 282px;\n        background: #353945;\n        -webkit-box-shadow: 0 -1px #2b2f3b;\n                box-shadow: 0 -1px #2b2f3b;\n}\n.invoice-header .content .order-info .left .item {\n          line-height: 60px;\n          overflow: hidden;\n          width: 49%;\n          height: 50px;\n          display: inline-block;\n}\n.invoice-header .content .order-info .left .item .label {\n            display: inline-block;\n            width: 125px;\n            margin-left: 15px;\n}\n.invoice-header .content .order-info .left .item .input {\n            margin-left: 10px;\n            width: 250px;\n            border-radius: 0 0 10px 10px;\n}\n.invoice-header .content .order-info .left .item .input-left {\n            margin-left: 10px;\n            width: 200px;\n}\n.invoice-header .content .order-info .left .item .input-right {\n            width: 200px;\n}\n.invoice-header .content .order-info .left .item .input-note {\n            margin-left: 10px;\n            width: 608px;\n}\n.invoice-header .content .order-info-two {\n      width: 100%;\n      height: 111px;\n}\n.invoice-header .content .order-info-two .title {\n        height: 50px;\n        line-height: 50px;\n        padding-left: 40px;\n}\n.invoice-header .content .order-info-two .pi-left {\n        float: left;\n        width: 100%;\n        height: 60px;\n        background: #353945;\n        -webkit-box-shadow: 0 -1px #2b2f3b;\n                box-shadow: 0 -1px #2b2f3b;\n        padding: 16px;\n        border-bottom: 1px solid #2b2f3b;\n}\n.invoice-header .content .order-info-two .pi-left .el-tag + .el-tag {\n          margin-left: 10px;\n}\n.invoice-header .content .order-info-two .pi-left .button-new-tag {\n          margin-left: 6px;\n}\n.invoice-header .content .parts-list {\n      text-align: right;\n      padding: 0 40px;\n      font-size: 12px;\n      overflow: hidden;\n      height: 50px;\n      line-height: 50px;\n      width: 100%;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n      position: relative;\n}\n.invoice-header .content .parts-list .att-btn {\n        padding: 6px 9px;\n        min-width: 0;\n        margin: 11px auto;\n        display: block;\n}\n.invoice-header .content .parts-list .att-total {\n        display: inline-block;\n        position: absolute;\n        top: 0;\n        right: 25px;\n        color: #e26829;\n}\n.invoice-header .content .parts-list .labelAdd {\n        margin-left: 14px;\n}\n.invoice-header .content .parts-list .cancel-button {\n        margin-top: 12px;\n}\n"],sourceRoot:""}])},2405:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(n(18)),a=l(n(3)),r=l(n(6)),o=l(n(5)),s=l(n(7)),c=l(n(8));n(2305);function l(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{loading:!1,isEditPage:!1,tableHead:["Model Name","BF Art Nr.","Customer Art Nr.","Description","Unit Price","VAT rate","Quantity","Amount"],orderId:0,currencies:[{currency:1,label:"€"},{currency:2,label:"$"},{currency:3,label:"DM."},{currency:4,label:"￥"},{currency:5,label:"￡"}],formData:{customer_id:"",vat_no:"",customer_no:"",trade_terms:"",payment_term:"",invoice_no:"",currency:1,invoice_amount:0,invoice_date:new Date},invoiceDate:new Date,index:0,invoiceItems:[],dynamicTags:[],inputVisible:!1,timeout:null,restaurants:[],customerList:[],tradeTerms:a.default.ConstData.TRADE_TERMS,paymentTerms:a.default.ConstData.PAYMENT_TERMS,currency:""}},i18n:{messages:{en:o.default.Component.Order.Save,zh:r.default.Component.Order.Save,de:s.default.Component.Order.Save,nl:c.default.Component.Order.Save}},computed:{totalCount:function(){var e=this,t=0;return this.invoiceItems.forEach(function(n){e.formData.currency=n.currency,e.currency=n.currency;var i=n.quantity*n.unit_price*(1+n.vat_rate/100);n.amount=Math.round(100*i)/100,t=100*(t+n.amount)/100,e.formData.invoice_amount=t}),t}},mounted:function(){var e=this,t=this;t.orderId=this.$route.query.orderId,t.orderId&&(t.loading=!0,t.isEditPage=!0,t.getFinanceInvoiceById(t.orderId).then(function(e){if(-2===e.code)throw e.message;return t.formData=e}).then(function(e){if(-2===e.code)throw e.message;return t.formData.salesman=a.default.Data.getOrg().name,t.getInvoicePIref(e.id)}).then(function(e){if(-2===e.code)throw e.message;return t.invoiceItems=e,t.getInvoiceDetail()}).then(function(e){if(-2===e.code)throw e.message;t.dynamicTags=e.content,t.loading=!1}).catch(function(e){t.$message({message:e.message,type:"error"}),t.loading=!1})),this.loading=!0,this.getAllCustomer().then(function(t){if(-2===t.code)throw t.message;e.customerList=t,e.loading=!1}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1}),t.getPiList().then(function(e){if(-2===e.code)throw e.message;t.restaurants=e.content.filter(function(e){return 0===e.status}).map(function(e){return e.value=e.pi_no,e})}).catch(function(e){t.$message({message:e.message,type:"error"}),t.loading=!1})},methods:{goAfterIndex:function(){this.$router.push({name:"invoiceList"})},saveInvoice:function(){var e=this;if(this.formData.invoice_date=a.default.Util.parseDate(this.invoiceDate)||0,this.checkParams()){var t=this;t.loading=!0,this.saveFinanceInvoice(this.formData).then(function(n){if(-2===n.code)throw n.message;e.formData=JSON.parse((0,i.default)(n)),e.invoiceDate=a.default.Util.changeDateForm(1e3*n.invoice_date),t.$message({message:"Save Successfully",type:"success"}),t.$router.push({name:"invoiceListHeader",query:{orderId:n.id}}),t.orderId=n.id,t.isEditPage=!0,t.loading=!1,e.$router.go(-1)}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1})}},handleItemChange:function(e){if(0!==this.customerList.length){var t=this.customerList.find(function(t){return t.id===e});t?(this.formData.vat_no=t.vat_no,this.formData.trade_terms=t.trade_term,this.formData.payment_term=t.payment_term,this.formData.customer_no=t.company_no):this.initCustomeInfo()}},initCustomeInfo:function(){this.formData.vat_no="",this.formData.trade_terms="",this.formData.payment_term="",this.formData.customer_no=""},getAllCustomer:function(){return a.default.Api.request({method:"GET",url:"/nl/nlPublic/company/all"})},getFinanceInvoiceById:function(e){return a.default.Api.request({method:"get",url:"/nl/finance/invoice/"+e})},saveFinanceInvoice:function(e){return a.default.Api.request({method:"post",url:"/nl/finance/invoice",data:e})},getInvoicePIref:function(e){return a.default.Api.request({method:"get",url:"/nl/finance/invoice/"+e+"/pi/detail"})},bulkInvoiceDetail:function(e){return a.default.Api.request({method:"post",url:"/nl/finance/invoice/detail/bulk",data:e})},getPiList:function(){return a.default.Api.request({method:"get",url:"/nl/sales/proformaInvoice",params:{page:1,size:999}})},getInvoiceDetail:function(){return a.default.Api.request({method:"post",url:"/nl/finance/invoice/detail/filter",data:{invoice_id:this.orderId},params:{page:1,size:999}})},deleteInvoiceDetail:function(e){return a.default.Api.request({method:"delete",url:"/nl/finance/invoice/detail/"+e})},handleClose:function(e){var t=this;this.loading=!0,this.deleteInvoiceDetail(e.id).then(function(n){if(-2===n.code)throw n.message;return t.$message({message:"Delete Successfully",type:"success"}),t.dynamicTags.splice(t.dynamicTags.indexOf(e),1),t.getInvoicePIref(t.orderId)}).then(function(e){if(-2===e.code)throw e.message;t.invoiceItems=e,t.loading=!1}).catch(function(e){t.$message({message:e.message,type:"error"}),t.loading=!1,t.inputVisible=!1})},showInput:function(){this.inputVisible=!0},handleInputConfirm:function(e){var t=this,n={pi_no:e.pi_no,customer_id:e.customer_id,invoice_id:t.orderId};t.loading=!0,this.bulkInvoiceDetail([n]).then(function(e){if(-2===e.code)throw e.message;return t.$message({message:"Save Successfully",type:"success"}),t.dynamicTags.push(e[0]),t.inputVisible=!1,t.getInvoicePIref(t.orderId)}).then(function(e){if(-2===e.code)throw e.message;t.invoiceItems=e,t.loading=!1}).catch(function(e){t.$message({message:e.message,type:"error"}),t.loading=!1,t.inputVisible=!1})},querySearchAsync:function(e,t){var n=JSON.parse((0,i.default)(this.restaurants));this.dynamicTags.length>0&&this.dynamicTags.forEach(function(e,t){n.forEach(function(t,i){t.pi_no===e.pi_no&&n.splice(i,1)})});var a=n;t(e?a.filter(this.createStateFilter(e)):a)},createStateFilter:function(e){return function(t){return-1!==t.value.indexOf(e.toLowerCase())}},checkParams:function(){return""===this.formData.customer_id?(this.$message({message:"Please add Customer",type:"warning"}),!1):""===this.formData.invoice_amount?(this.$message({message:"Please add Amount",type:"warning"}),!1):""!==this.formData.invoice_date||(this.$message({message:"Please add Invoice Date",type:"warning"}),!1)}}}},2406:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"invoice-header"},[n("div",{staticClass:"header"},[n("div",{staticClass:"btn-group-inline"},[n("div",{staticClass:"icons"},[n("div",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:e.goAfterIndex}})])]),e._v(" "),n("label",{staticClass:"title"},[e._v(e._s(e.orderId?"Edit Invoice Info":"Add Invoice Info"))])]),e._v(" "),n("div",{staticClass:"content-wrap"},[n("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content"},[n("div",{staticClass:"order-info"},[n("label",{staticClass:"title"},[e._v("Invoice Info")]),e._v(" "),n("div",{staticClass:"left"},[n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Invoice No.")]),e._v(" "),n("el-input",{staticClass:"input",attrs:{placeholder:"Invoice No.",disabled:""},model:{value:e.formData.invoice_no,callback:function(t){e.$set(e.formData,"invoice_no",t)},expression:"formData.invoice_no"}})],1),e._v(" "),n("div",{staticClass:"item"},[e._m(0),e._v(" "),n("el-select",{staticClass:"input land",attrs:{slot:"prepend",filterable:""},on:{change:e.handleItemChange},slot:"prepend",model:{value:e.formData.customer_id,callback:function(t){e.$set(e.formData,"customer_id",t)},expression:"formData.customer_id "}},e._l(e.customerList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Customer No.")]),e._v(" "),n("el-input",{staticClass:"input",attrs:{placeholder:"Customer No.",disabled:""},model:{value:e.formData.customer_no,callback:function(t){e.$set(e.formData,"customer_no",t)},expression:"formData.customer_no"}})],1),e._v(" "),n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("VAT No.")]),e._v(" "),n("el-input",{staticClass:"input",attrs:{placeholder:"VAT No.",disabled:""},model:{value:e.formData.vat_no,callback:function(t){e.$set(e.formData,"vat_no",t)},expression:"formData.vat_no"}})],1),e._v(" "),n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Trade Terms")]),e._v(" "),n("el-select",{staticClass:"input",attrs:{slot:"append",filterable:"",placeholder:"Trade Terms",disabled:""},slot:"append",model:{value:e.formData.trade_terms,callback:function(t){e.$set(e.formData,"trade_terms",t)},expression:"formData.trade_terms"}},e._l(e.tradeTerms,function(e){return n("el-option",{key:e.id,attrs:{label:e.label,value:e.label}})}))],1),e._v(" "),n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Payment Term")]),e._v(" "),n("el-select",{staticClass:"input",attrs:{slot:"append",filterable:"",placeholder:"Payment Term",disabled:""},slot:"append",model:{value:e.formData.payment_term,callback:function(t){e.$set(e.formData,"payment_term",t)},expression:"formData.payment_term"}},e._l(e.paymentTerms,function(e){return n("el-option",{key:e.id,attrs:{label:e.label,value:e.label}})}))],1),e._v(" "),n("div",{staticClass:"item"},[e._m(1),e._v(" "),n("el-input",{staticClass:"input",attrs:{disabled:""},model:{value:e.formData.invoice_amount,callback:function(t){e.$set(e.formData,"invoice_amount",t)},expression:"formData.invoice_amount"}},[n("el-select",{attrs:{slot:"prepend",disabled:""},slot:"prepend",model:{value:e.formData.currency,callback:function(t){e.$set(e.formData,"currency",t)},expression:"formData.currency"}},e._l(e.currencies,function(e){return n("el-option",{key:e.currency,attrs:{label:e.label,value:e.currency,"value-key":e.currency}})}))],1)],1),e._v(" "),n("div",{staticClass:"item"},[e._m(2),e._v(" "),n("el-date-picker",{staticClass:"input",attrs:{type:"date",placeholder:"Invoice Date"},model:{value:e.invoiceDate,callback:function(t){e.invoiceDate=t},expression:"invoiceDate"}})],1)])]),e._v(" "),e.isEditPage?n("div",{staticClass:"order-info-two"},[e._m(3),e._v(" "),n("div",{staticClass:"pi-left"},[e._l(e.dynamicTags,function(t){return n("el-tag",{key:t.id,attrs:{size:"small",closable:!0,"close-transition":!1},on:{close:function(n){e.handleClose(t)}}},[e._v(e._s(t.pi_no))])}),e._v(" "),e.inputVisible?n("el-autocomplete",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small","fetch-suggestions":e.querySearchAsync,placeholder:"Please enter the content"},on:{select:e.handleInputConfirm}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ New Tag")])],2)]):e._e(),e._v(" "),e.isEditPage?n("div",{staticClass:"table-wrap"},[n("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[n("thead",e._l(e.tableHead,function(t){return n("td",[e._v(e._s(t))])})),e._v(" "),n("tbody",e._l(e.invoiceItems,function(t,i){return n("tr",[n("td",[e._v(e._s(t.model_name))]),e._v(" "),n("td",[e._v(e._s(t.bf_art_no))]),e._v(" "),n("td",[e._v(e._s(t.customer_art_no))]),e._v(" "),n("td",[e._v(e._s(t.description))]),e._v(" "),n("td",[e._v(e._s(e._f("currencyType")(t.currency))+e._s(t.unit_price))]),e._v(" "),n("td",[e._v(e._s(t.vat_rate)+"%")]),e._v(" "),n("td",[e._v(e._s(t.quantity))]),e._v(" "),n("td",[e._v(e._s(t.amount))])])}))])]):e._e(),e._v(" "),e.isEditPage?n("div",{staticClass:"parts-list"},[n("span",{staticClass:"att-total"},[e._v("total: "+e._s(e._f("currencyType")(e.currency))+e._s(e.totalCount))])]):e._e(),e._v(" "),n("div",{staticClass:"parts-list"},[n("el-button",{staticClass:"cancel-button",attrs:{type:"primary"},on:{click:e.saveInvoice}},[e._v("Save")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Customer\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Currency/Amount\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Invoice Date\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"title"},[this._v("\n          Add PI\n          "),t("span",{staticClass:"required"},[this._v("*")])])}]}}});
//# sourceMappingURL=33.2daee113eb68958ae6b0.js.map