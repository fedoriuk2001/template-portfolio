_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{Fr6N:function(e,t,r){"use strict";var n=r("rePB"),s=r("nKUr"),c=r("q1tI"),i=r("D96S"),a=r("IlR1"),l=function(e){var t=e.title,r=e.logos,n=Object(c.useContext)(a.ThemeContext)[0];return Object(s.jsx)("section",{className:"container",children:Object(s.jsxs)("div",{className:"text-center my-16 xl:my-32",children:[Object(s.jsx)("h2",{className:"mb-12",children:t}),Object(s.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 place-items-center gap-8",children:r.map((function(e){return Object(s.jsx)(i.Image,{data:e.responsiveImage,className:"opacity-50",style:{filter:"dark"===n?"invert(0.9)":null}},e.id)}))})]})})},o=r("G3za"),u=r("IP2g"),d=r("WE53"),f=r("JB2W");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var j=function(e){var t=e.title,r=e.icon,n=e.metadata;return Object(s.jsxs)("div",{className:"flex -mx-3 text-left",children:[Object(s.jsx)("div",{className:"mx-3",children:Object(s.jsx)("div",{className:"bg-neutral-muted rounded-lg p-4 w-16 h-16 grid place-items-center",children:Object(s.jsx)(u.a,{icon:["fal",r],className:"text-2xl"})})}),Object(s.jsxs)("div",{className:"mx-3",children:[Object(s.jsx)("h3",{className:"text-2xl mb-4",children:t}),Object(s.jsx)("p",{children:n.description})]})]})},m=function(e){var t=e.title,r=e.services,c=e.link;return Object(s.jsx)("section",{className:"container",children:Object(s.jsxs)("div",{className:"text-center py-8 xl:py-20",children:[Object(s.jsx)("h2",{className:"mb-12 lg:mb-24",children:t}),Object(s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-12 lg:mb-24",children:r.map((function(e){return Object(s.jsx)(j,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.id)}))}),c&&Object(s.jsxs)(f.a,{href:c.url,className:"btn btn-muted",children:[c.title," ",Object(s.jsx)(u.a,{icon:d.i,className:"text-xl w-6 ml-4"})]})]})})},O=function(e){var t=e.items,r=e.groupSize,n=new Array(Math.ceil(t.length/r)).fill().map((function(e,n){return t.slice(n*r,n*r+r)}));return Object(s.jsx)("div",{className:"-mx-4 px-2 py-6 overflow-x-scroll md:overflow-visible scrollbar-hidden",children:Object(s.jsx)("div",{className:"grid grid-cols-masonry",children:n.map((function(e,t){return Object(s.jsx)("div",{className:"grid content-center gap-4 px-2",children:e.map((function(e){var t=e.quote,r=e.author,n=e.company,c=e.avatar;return Object(s.jsxs)("div",{className:"bg-neutral p-4 rounded shadow-xl",children:[Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:t}}),Object(s.jsxs)("div",{className:"flex items-center mt-4",children:[Object(s.jsx)(i.Image,{data:c.responsiveImage,className:"rounded-full"}),Object(s.jsxs)("div",{className:"ml-4",children:[Object(s.jsx)("p",{className:"text-lg font-semibold mb-0",children:r}),Object(s.jsx)("p",{className:"text-sm -mt-1 mb-1 opacity-75",children:n})]})]})]},t)}))},t)}))})})},p=function(e){var t=e.title,r=e.body,n=e.testimonials;return Object(s.jsx)("section",{className:"bg-neutral-muted my-8 lg:my-24",children:Object(s.jsx)("div",{className:"py-8 xl:py-12",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"grid xl:grid-cols-2 gap-4 items-center",children:[Object(s.jsxs)("div",{className:"mt-8 mb-16 text-center xl:text-left mx-auto max-w-2xl",children:[Object(s.jsx)("h2",{className:"mb-8",children:t}),Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]}),Object(s.jsx)(O,{items:n,groupSize:2})]})})})})},h=function(e){var t=e.title,r=e.body,n=e.button,c=e.image;return Object(s.jsx)("section",{className:"container px-0 lg:px-4",children:Object(s.jsx)("div",{className:"max-w-5xl mx-auto my-8",children:Object(s.jsxs)("div",{className:"bg-secondary rounded-lg w-full flex flex-1 flex-wrap md:flex-nowrap items-center overflow-hidden",children:[Object(s.jsx)("div",{className:"relative h-full w-full text-secondary overflow-hidden",style:{maxWidth:"22rem"},children:Object(s.jsx)(i.Image,{data:c.responsiveImage,className:"w-full h-auto"})}),Object(s.jsx)("div",{className:"px-4 md:px-6 py-6 md:py-4",children:Object(s.jsxs)("div",{className:"relative bg-neutral rounded-lg text-center md:text-left px-6 md:px-12 py-6 md:py-10 -mt-20 md:mt-0 md:-ml-12 z-10",children:[Object(s.jsx)("h2",{className:"mb-4 lg:mb-6",children:t}),Object(s.jsx)("div",{className:"mb-4 lg:mb-6",dangerouslySetInnerHTML:{__html:r}}),Object(s.jsx)(f.a,{href:n.url,className:"btn btn-inverted",children:n.title})]})})]})})})},g=r("QS3V"),y=function(e){var t=e.title,r=e.body,n=e.calendlyCalendarUrl,i=e.icons;return Object(c.useEffect)((function(){var e=document.querySelector("head"),t=document.createElement("script");t.setAttribute("src","https://assets.calendly.com/assets/external/widget.js"),e.appendChild(t)}),[]),Object(s.jsx)("section",{className:"container",children:Object(s.jsxs)("div",{className:"max-w-lg lg:max-w-none mx-auto grid lg:grid-cols-2 gap-16 items-center my-16 xl:my-32",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"mb-4",children:t}),Object(s.jsx)("p",{className:"mb-4",children:r}),Object(s.jsx)("ul",{className:"my-8",children:i.map((function(e,t){return Object(s.jsxs)("li",{className:"flex items-center my-4",children:[Object(s.jsx)("span",{className:"p-4 bg-neutral-muted rounded-lg mr-6",children:Object(s.jsx)(u.a,{icon:["fal",e.icon],className:"text-2xl"})}),Object(s.jsx)("span",{children:e.title})]},t)}))})]}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"shadow-lg rounded",children:Object(s.jsx)("div",{className:"calendly-inline-widget w-full rounded overflow-hidden max-w-lg sm:max-w-xl","data-url":"".concat(n,"?hide_event_type_details=1"),style:{height:"600px"}})})})]})})},v=r("ny70");function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){return Object(s.jsx)("section",{className:"container",children:e.image?Object(s.jsx)(A,w({},e)):Object(s.jsx)(S,w({},e))})},S=function(e){var t=e.title,r=e.body,n=e.link;return Object(s.jsxs)("div",{className:"max-w-3xl text-center my-32 mx-auto",children:[Object(s.jsx)("h2",{children:t}),Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:r}}),n&&Object(s.jsx)(k,w({},n))]})},A=function(e){var t=e.title,r=e.body,n=e.link,c=e.image,a=e.position;return Object(s.jsxs)("div",{className:"md:flex md:-mx-8 py-8 items-center ".concat(a%2?"md:flex-row-reverse":"md:flex-row-normal"),children:[Object(s.jsx)("div",{className:"w-full md:w-5/12 md:mx-8 mb-6",children:c&&Object(s.jsx)(i.Image,{data:c.responsiveImage,className:"rounded-lg"})}),Object(s.jsxs)("div",{className:"w-full md:w-7/12 md:mx-8",children:[Object(s.jsx)("h2",{children:t}),Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:r}}),n&&Object(s.jsx)(k,w({},n))]})]})},k=function(e){var t=e.page,r=e.title,n=Object(v.a)(t);return Object(s.jsx)(f.a,{href:n,className:"btn btn-primary",children:r})};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.items;return Object(s.jsx)("div",{children:t.map((function(e,t){return Object(s.jsx)(E,{component:e._modelApiKey,props:D({position:t},e)},t)}))})};var E=function(e){var t=e.component,r=e.props,n=P[t];return n?Object(s.jsx)(n,D({},r)):null},P={brands_section:l,projectcarousel_section:o.a,servicessmall_section:m,testimonial_section:p,cardavatar_section:h,cardaction_section:g.a,contact_section:y,content_section:N}},KoSn:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return Le}));var n=r("rePB"),s=r("KQm4"),c=r("nKUr"),i=r("Cvui"),a=r("Sv8q"),l=r("1oc3"),o=(r("Fr6N"),r("o0o1")),u=r.n(o),d=r("HaE+"),f=r("q1tI"),b=r("U8JA"),j=e=>e instanceof HTMLElement;const m="blur",O="change",p="input",h="onBlur",g="onChange",y="onSubmit",v="onTouched",x="all",w="max",N="min",S="maxLength",A="minLength",k="pattern",V="required",D="validate";var E=e=>null==e;const P=e=>"object"===typeof e;var R=e=>!E(e)&&!Array.isArray(e)&&P(e)&&!(e instanceof Date),C=e=>/^\w*$/.test(e),_=e=>e.filter(Boolean),F=e=>_(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function T(e,t,r){let n=-1;const s=C(t)?[t]:F(t),c=s.length,i=c-1;for(;++n<c;){const t=s[n];let c=r;if(n!==i){const r=e[t];c=R(r)||Array.isArray(r)?r:isNaN(+s[n+1])?{}:[]}e[t]=c,e=e[t]}return e}var I=(e,t={})=>{for(const r in e)C(r)?t[r]=e[r]:T(t,r,e[r]);return t},L=e=>void 0===e,M=(e={},t,r)=>{const n=_(t.split(/[,[\].]+?/)).reduce((e,t)=>E(e)?e:e[t],e);return L(n)||n===e?L(e[t])?r:e[t]:n},B=(e,t)=>{j(e)&&e.removeEventListener&&(e.removeEventListener(p,t),e.removeEventListener(O,t),e.removeEventListener(m,t))};const W={isValid:!1,value:""};var H=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:e,W):W,q=e=>"radio"===e.type,z=e=>"file"===e.type,U=e=>"checkbox"===e.type,J=e=>"select-multiple"===e.type;const K={value:!1,isValid:!1},$={value:!0,isValid:!0};var X=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(e=>e&&e.ref.checked).map(({ref:{value:e}})=>e);return{value:t,isValid:!!t.length}}const{checked:t,value:r,attributes:n}=e[0].ref;return t?n&&!L(n.value)?L(r)||""===r?$:{value:r,isValid:!0}:$:K}return K};function G(e,t,r,n){const s=e.current[t];if(s){const{ref:{value:e,disabled:t},ref:r,valueAsNumber:i,valueAsDate:a,setValueAs:l}=s;if(t&&n)return;return z(r)?r.files:q(r)?H(s.options).value:J(r)?(c=r.options,[...c].filter(({selected:e})=>e).map(({value:e})=>e)):U(r)?X(s.options).value:i?+e:a?r.valueAsDate:l?l(e):e}var c;if(r)return M(r.current,t)}function Q(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&Q(e.parentNode)}var Y=e=>R(e)&&!Object.keys(e).length,Z=e=>"boolean"===typeof e;function ee(e,t){const r=C(t)?[t]:F(t),n=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=L(e)?n++:e[t[n++]];return e}(e,r),s=r[r.length-1];let c;n&&delete n[s];for(let i=0;i<r.slice(0,-1).length;i++){let t,n=-1;const s=r.slice(0,-(i+1)),a=s.length-1;for(i>0&&(c=e);++n<s.length;){const r=s[n];t=t?t[r]:e[r],a===n&&(R(t)&&Y(t)||Array.isArray(t)&&!t.filter(e=>R(e)&&!Y(e)||Z(e)).length)&&(c?delete c[r]:delete e[r]),c=t}}return e}const te=(e,t)=>e&&e.ref===t;var re=e=>E(e)||!P(e);function ne(e,t){if(re(e)||re(t))return t;for(const n in t){const s=e[n],c=t[n];try{e[n]=R(s)&&R(c)||Array.isArray(s)&&Array.isArray(c)?ne(s,c):c}catch(r){}}return e}function se(e,t,r,n,s){let c=-1;for(;++c<e.length;){for(const n in e[c])Array.isArray(e[c][n])?(!r[c]&&(r[c]={}),r[c][n]=[],se(e[c][n],M(t[c]||{},n,[]),r[c][n],r[c],n)):M(t[c]||{},n)===e[c][n]?T(r[c]||{},n):r[c]=Object.assign(Object.assign({},r[c]),{[n]:!0});n&&!r.length&&delete n[s]}return r}var ce=(e,t,r)=>ne(se(e,t,r),se(t,e,r)),ie=e=>"string"===typeof e,ae=(e,t,r,n,s)=>{const c={};for(const i in e.current)(L(s)||(ie(s)?i.startsWith(s):Array.isArray(s)&&s.find(e=>i.startsWith(e))))&&(c[i]=G(e,i,void 0,n));return r?I(c):ne(t,I(c))};function le(e,t,r){if(re(e)||re(t)||e instanceof Date||t instanceof Date)return e===t;if(!Object(f.isValidElement)(e)){const n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(const c of n){const n=e[c];if(!r||"ref"!==c){const e=t[c];if((R(n)||Array.isArray(n))&&(R(e)||Array.isArray(e))?!le(n,e,r):n!==e)return!1}}}return!0}var oe=e=>e instanceof RegExp,ue=e=>R(e)&&!oe(e)?e:{value:e,message:""},de=e=>"function"===typeof e,fe=e=>ie(e)||Object(f.isValidElement)(e);function be(e,t,r="validate"){if(fe(e)||Z(e)&&!e)return{type:r,message:fe(e)?e:"",ref:t}}var je=(e,t,r,n,s)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[n]:s||!0})}):{},me=async(e,t,{ref:r,ref:{value:n},options:s,required:c,maxLength:i,minLength:a,min:l,max:o,pattern:u,validate:d},f)=>{const b=r.name,j={},m=q(r),O=U(r),p=m||O,h=""===n,g=je.bind(null,b,t,j),y=(e,t,n,s=S,c=A)=>{const i=e?t:n;j[b]=Object.assign({type:e?s:c,message:i,ref:r},g(e?s:c,i))};if(c&&(!m&&!O&&(h||E(n))||Z(n)&&!n||O&&!X(s).isValid||m&&!H(s).isValid)){const{value:n,message:s}=fe(c)?{value:!!c,message:c}:ue(c);if(n&&(j[b]=Object.assign({type:V,message:s,ref:p?((e.current[b].options||[])[0]||{}).ref:r},g(V,s)),!t))return j}if((!E(l)||!E(o))&&""!==n){let e,s;const c=ue(o),i=ue(l);if(isNaN(n)){const t=r.valueAsDate||new Date(n);ie(c.value)&&(e=t>new Date(c.value)),ie(i.value)&&(s=t<new Date(i.value))}else{const t=r.valueAsNumber||parseFloat(n);E(c.value)||(e=t>c.value),E(i.value)||(s=t<i.value)}if((e||s)&&(y(!!e,c.message,i.message,w,N),!t))return j}if(ie(n)&&!h&&(i||a)){const e=ue(i),r=ue(a),s=!E(e.value)&&n.length>e.value,c=!E(r.value)&&n.length<r.value;if((s||c)&&(y(s,e.message,r.message),!t))return j}if(ie(n)&&u&&!h){const{value:e,message:s}=ue(u);if(oe(e)&&!e.test(n)&&(j[b]=Object.assign({type:k,message:s,ref:r},g(k,s)),!t))return j}if(d){const n=G(e,b,f),c=p&&s?s[0].ref:r;if(de(d)){const e=be(await d(n),c);if(e&&(j[b]=Object.assign(Object.assign({},e),g(D,e.message)),!t))return j}else if(R(d)){let e={};for(const[r,s]of Object.entries(d)){if(!Y(e)&&!t)break;const i=be(await s(n),c,r);i&&(e=Object.assign(Object.assign({},i),g(r,i.message)),t&&(j[b]=e))}if(!Y(e)&&(j[b]=Object.assign({ref:c},e),!t))return j}}return j};const Oe=(e,t,r=[])=>{for(const n in t){const s=e+(R(t)?"."+n:`[${n}]`);re(t[n])?r.push(s):Oe(s,t[n],r)}return r};var pe=(e,t,r,n,s)=>{let c=void 0;return r.add(t),Y(e)||(c=M(e,t),(R(c)||Array.isArray(c))&&Oe(t,c).forEach(e=>r.add(e))),L(c)?s?n:M(n,t):c},he=({isOnBlur:e,isOnChange:t,isOnTouch:r,isTouched:n,isReValidateOnBlur:s,isReValidateOnChange:c,isBlurEvent:i,isSubmitted:a,isOnAll:l})=>!l&&(!a&&r?!(n||i):(a?s:e)?!i:!(a?c:t)||i),ge=e=>e.substring(0,e.indexOf("["));const ye=(e,t)=>RegExp(`^${t}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var ve=(e,t)=>[...e].some(e=>ye(t,e));var xe="undefined"!==typeof window&&"undefined"!==typeof document;function we(e){let t;if(re(e)||xe&&(e instanceof File||j(e)))return e;if(e instanceof Date)return t=new Date(e.getTime()),t;if(e instanceof Set){t=new Set;for(const r of e)t.add(r);return t}if(e instanceof Map){t=new Map;for(const r of e.keys())t.set(r,we(e.get(r)));return t}t=Array.isArray(e)?[]:{};for(const r in e)t[r]=we(e[r]);return t}var Ne=e=>({isOnSubmit:!e||e===y,isOnBlur:e===h,isOnChange:e===g,isOnAll:e===x,isOnTouch:e===v}),Se=e=>q(e)||U(e);const Ae="undefined"===typeof window,ke=xe?"Proxy"in window:"undefined"!==typeof Proxy;function Ve({mode:e=y,reValidateMode:t=g,resolver:r,context:n,defaultValues:s={},shouldFocusError:c=!0,shouldUnregister:i=!0,criteriaMode:a}={}){const l=Object(f.useRef)({}),o=Object(f.useRef)({}),u=Object(f.useRef)({}),d=Object(f.useRef)(new Set),b=Object(f.useRef)({}),h=Object(f.useRef)({}),v=Object(f.useRef)({}),w=Object(f.useRef)({}),N=Object(f.useRef)(s),S=Object(f.useRef)(!1),A=Object(f.useRef)(!1),k=Object(f.useRef)(),V=Object(f.useRef)({}),D=Object(f.useRef)({}),P=Object(f.useRef)(n),F=Object(f.useRef)(r),W=Object(f.useRef)(new Set),H=Object(f.useRef)(Ne(e)),{isOnSubmit:K,isOnTouch:$}=H.current,X=a===x,[Z,ne]=Object(f.useState)({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!K,errors:{}}),se=Object(f.useRef)({isDirty:!ke,dirtyFields:!ke,touched:!ke||$,isValidating:!ke,isSubmitting:!ke,isValid:!ke}),oe=Object(f.useRef)(Z),ue=Object(f.useRef)(),{isOnBlur:fe,isOnChange:be}=Object(f.useRef)(Ne(t)).current;P.current=n,F.current=r,oe.current=Z,V.current=i?{}:Y(V.current)?we(s):V.current;const je=Object(f.useCallback)((e={})=>{S.current||(oe.current=Object.assign(Object.assign({},oe.current),e),ne(oe.current))},[]),ye=()=>se.current.isValidating&&je({isValidating:!0}),Ve=Object(f.useCallback)((e,t,r=!1,n={},s)=>{let c=r||(({errors:e,name:t,error:r,validFields:n,fieldsWithValidation:s})=>{const c=L(r),i=M(e,t);return c&&!!i||!c&&!le(i,r,!0)||c&&M(s,t)&&!M(n,t)})({errors:oe.current.errors,error:t,name:e,validFields:w.current,fieldsWithValidation:v.current});const i=M(oe.current.errors,e);t?(ee(w.current,e),c=c||!i||!le(i,t,!0),T(oe.current.errors,e,t)):((M(v.current,e)||F.current)&&(T(w.current,e,!0),c=c||i),ee(oe.current.errors,e)),(c&&!E(r)||!Y(n)||se.current.isValidating)&&je(Object.assign(Object.assign(Object.assign({},n),F.current?{isValid:!!s}:{}),{isValidating:!1}))},[]),De=Object(f.useCallback)((e,t)=>{const{ref:r,options:n}=l.current[e],s=xe&&j(r)&&E(t)?"":t;q(r)?(n||[]).forEach(({ref:e})=>e.checked=e.value===s):z(r)&&!ie(s)?r.files=s:J(r)?[...r.options].forEach(e=>e.selected=s.includes(e.value)):U(r)&&n?n.length>1?n.forEach(({ref:e})=>e.checked=Array.isArray(s)?!!s.find(t=>t===e.value):s===e.value):n[0].ref.checked=!!s:r.value=s},[]),Ee=Object(f.useCallback)((e,t)=>{if(se.current.isDirty){const r=Be();return e&&t&&T(r,e,t),!le(r,N.current)}return!1},[]),Pe=Object(f.useCallback)((e,t=!0)=>{if(se.current.isDirty||se.current.dirtyFields){const r=!le(M(N.current,e),G(l,e,V)),n=M(oe.current.dirtyFields,e),s=oe.current.isDirty;r?T(oe.current.dirtyFields,e,!0):ee(oe.current.dirtyFields,e);const c={isDirty:Ee(),dirtyFields:oe.current.dirtyFields},i=se.current.isDirty&&s!==c.isDirty||se.current.dirtyFields&&n!==M(oe.current.dirtyFields,e);return i&&t&&je(c),i?c:{}}return{}},[]),Re=Object(f.useCallback)(async(e,t)=>{const r=(await me(l,X,l.current[e],V))[e];return Ve(e,r,t),L(r)},[Ve,X]),Ce=Object(f.useCallback)(async e=>{const{errors:t}=await F.current(Be(),P.current,X),r=oe.current.isValid;if(Array.isArray(e)){const r=e.map(e=>{const r=M(t,e);return r?T(oe.current.errors,e,r):ee(oe.current.errors,e),!r}).every(Boolean);return je({isValid:Y(t),isValidating:!1}),r}{const n=M(t,e);return Ve(e,n,r!==Y(t),{},Y(t)),!n}},[Ve,X]),_e=Object(f.useCallback)(async e=>{const t=e||Object.keys(l.current);if(ye(),F.current)return Ce(t);if(Array.isArray(t)){!e&&(oe.current.errors={});const r=await Promise.all(t.map(async e=>await Re(e,null)));return je({isValidating:!1}),r.every(Boolean)}return await Re(t)},[Ce,Re]),Fe=Object(f.useCallback)((e,t,{shouldDirty:r,shouldValidate:n})=>{const s={};T(s,e,t);for(const c of Oe(e,t))l.current[c]&&(De(c,M(s,c)),r&&Pe(c),n&&_e(c))},[_e,De,Pe]),Te=Object(f.useCallback)((e,t,r)=>{if(!i&&!re(t)&&T(V.current,e,Object.assign({},t)),l.current[e])De(e,t),r.shouldDirty&&Pe(e),r.shouldValidate&&_e(e);else if(!re(t)&&(Fe(e,t,r),W.current.has(e))){const n=ge(e)||e;T(o.current,e,t),D.current[n]({[n]:M(o.current,n)}),(se.current.isDirty||se.current.dirtyFields)&&r.shouldDirty&&(T(oe.current.dirtyFields,e,ce(t,M(N.current,e,[]),M(oe.current.dirtyFields,e,[]))),je({isDirty:!le(Object.assign(Object.assign({},Be()),{[e]:t}),N.current)}))}!i&&T(V.current,e,t)},[Pe,De,Fe]),Ie=e=>A.current||d.current.has(e)||d.current.has((e.match(/\w+/)||[])[0]),Le=e=>{let t=!0;if(!Y(b.current))for(const r in b.current)e&&b.current[r].size&&!b.current[r].has(e)&&!b.current[r].has(ge(e))||(h.current[r](),t=!1);return t};function Me(e){if(!i){let t=we(e);for(const e of W.current)C(e)&&!t[e]&&(t=Object.assign(Object.assign({},t),{[e]:[]}));return t}return e}function Be(e){if(ie(e))return G(l,e,V);if(Array.isArray(e)){const t={};for(const r of e)T(t,r,G(l,r,V));return t}return Me(ae(l,we(V.current),i))}k.current=k.current?k.current:async({type:e,target:t})=>{let r=t.name;const n=l.current[r];let s,c;if(n){const a=e===m,o=he(Object.assign({isBlurEvent:a,isReValidateOnChange:be,isReValidateOnBlur:fe,isTouched:!!M(oe.current.touched,r),isSubmitted:oe.current.isSubmitted},H.current));let u=Pe(r,!1),d=!Y(u)||!a&&Ie(r);if(a&&!M(oe.current.touched,r)&&se.current.touched&&(T(oe.current.touched,r,!0),u=Object.assign(Object.assign({},u),{touched:oe.current.touched})),!i&&U(t)&&T(V.current,r,G(l,r)),o)return!a&&Le(r),(!Y(u)||d&&Y(u))&&je(u);if(ye(),F.current){const{errors:e}=await F.current(Be(),P.current,X),n=oe.current.isValid;if(s=M(e,r),U(t)&&!s&&F.current){const t=ge(r),n=M(e,t,{});n.type&&n.message&&(s=n),t&&(n||M(oe.current.errors,t))&&(r=t)}c=Y(e),n!==c&&(d=!0)}else s=(await me(l,X,n,V))[r];!a&&Le(r),Ve(r,s,d,u,c)}};const We=Object(f.useCallback)(async(e={})=>{const{errors:t}=await F.current(Object.assign(Object.assign({},Be()),e),P.current,X),r=Y(t);oe.current.isValid!==r&&je({isValid:r})},[X]),He=Object(f.useCallback)((e,t)=>function(e,t,r,n,s,c){const{ref:i,ref:{name:a}}=r,l=e.current[a];if(!s){const t=G(e,a,n);!L(t)&&T(n.current,a,t)}i.type&&l?q(i)||U(i)?Array.isArray(l.options)&&l.options.length?(_(l.options).forEach((e={},r)=>{(Q(e.ref)&&te(e,e.ref)||c)&&(B(e.ref,t),ee(l.options,`[${r}]`))}),l.options&&!_(l.options).length&&delete e.current[a]):delete e.current[a]:(Q(i)&&te(l,i)||c)&&(B(i,t),delete e.current[a]):delete e.current[a]}(l,k.current,e,V,i,t),[i]),qe=Object(f.useCallback)(e=>{if(A.current)je();else{for(const t of d.current)if(t.startsWith(e)){je();break}Le(e)}},[]),ze=Object(f.useCallback)((e,t)=>{e&&(He(e,t),i&&!_(e.options||[]).length&&(ee(w.current,e.ref.name),ee(v.current,e.ref.name),ee(oe.current.errors,e.ref.name),T(oe.current.dirtyFields,e.ref.name,!0),je({isDirty:Ee()}),se.current.isValid&&F.current&&We(),qe(e.ref.name)))},[We,He]);const Ue=Object(f.useCallback)((e,t,r)=>{const n=r?b.current[r]:d.current;let s=ae(l,we(V.current),i,!1,e);if(ie(e)){if(W.current.has(e)){const t=M(u.current,e,[]);s=t.length&&t.length===_(M(s,e,[])).length?s:u.current}return pe(s,e,n,L(M(N.current,e))?t:M(N.current,e),!0)}const c=L(t)?N.current:t;return Array.isArray(e)?e.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:pe(s,t,n,c)}),{}):(A.current=L(r),I(!Y(s)&&s||c))},[]);function Je(e,t={}){const{name:r,type:n,value:s}=e,c=Object.assign({ref:e},t),i=l.current,a=Se(e),o=ve(W.current,r),u=t=>xe&&(!j(e)||t===e);let d,f=i[r],b=!0;if(f&&(a?Array.isArray(f.options)&&_(f.options).find(e=>s===e.ref.value&&u(e.ref)):u(f.ref)))return void(i[r]=Object.assign(Object.assign({},f),t));f=n?a?Object.assign({options:[..._(f&&f.options||[]),{ref:e}],ref:{type:n,name:r}},t):Object.assign({},c):c,i[r]=f;const h=L(M(V.current,r));Y(N.current)&&h||(d=M(h?N.current:V.current,r),b=L(d),b||o||De(r,d)),Y(t)||(T(v.current,r,!0),!K&&se.current.isValid&&me(l,X,f,V).then(e=>{const t=oe.current.isValid;Y(e)?T(w.current,r,!0):ee(w.current,r),t!==Y(e)&&je()})),o&&b||!o&&ee(oe.current.dirtyFields,r),n&&function({ref:e},t,r){j(e)&&r&&(e.addEventListener(t?O:p,r),e.addEventListener(m,r))}(a&&f.options?f.options[f.options.length-1]:f,a||"select-one"===e.type,k.current)}const Ke=Object(f.useCallback)((e,t)=>async r=>{r&&r.preventDefault&&(r.preventDefault(),r.persist());let n={},s=Me(ae(l,we(V.current),i,!0));se.current.isSubmitting&&je({isSubmitting:!0});try{if(F.current){const{errors:e,values:t}=await F.current(s,P.current,X);oe.current.errors=n=e,s=t}else for(const e of Object.values(l.current))if(e){const{name:t}=e.ref,r=await me(l,X,e,V);r[t]?(T(n,t,r[t]),ee(w.current,t)):M(v.current,t)&&(ee(oe.current.errors,t),T(w.current,t,!0))}Y(n)&&Object.keys(oe.current.errors).every(e=>e in l.current)?(je({errors:{},isSubmitting:!0}),await e(s,r)):(oe.current.errors=Object.assign(Object.assign({},oe.current.errors),n),t&&await t(oe.current.errors,r),c&&((e,t)=>{for(const r in e)if(M(t,r)){const t=e[r];if(t){if(t.ref.focus&&L(t.ref.focus()))break;if(t.options){t.options[0].ref.focus();break}}}})(l.current,oe.current.errors))}finally{oe.current.isSubmitting=!1,je({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Y(oe.current.errors),submitCount:oe.current.submitCount+1})}},[c,X]);Object(f.useEffect)(()=>{r&&se.current.isValid&&We(),ue.current=ue.current||!xe?ue.current:function(e,t){const r=new MutationObserver(()=>{for(const r of Object.values(e.current))if(r&&r.options)for(const e of r.options)e&&e.ref&&Q(e.ref)&&t(r);else r&&Q(r.ref)&&t(r)});return r.observe(window.document,{childList:!0,subtree:!0}),r}(l,ze)},[ze,N.current]),Object(f.useEffect)(()=>()=>{ue.current&&ue.current.disconnect(),S.current=!0,Object.values(l.current).forEach(e=>ze(e,!0))},[]),!r&&se.current.isValid&&(Z.isValid=le(w.current,v.current)&&Y(oe.current.errors));const $e={trigger:_e,setValue:Object(f.useCallback)((function(e,t,r){Te(e,t,r||{}),Ie(e)&&je(),Le(e)}),[Te,_e]),getValues:Object(f.useCallback)(Be,[]),register:Object(f.useCallback)((function(e,t){if(!Ae)if(ie(e))Je({name:e},t);else{if(!R(e)||!("name"in e))return t=>t&&Je(t,e);Je(e,t)}}),[N.current]),unregister:Object(f.useCallback)((function(e){for(const t of Array.isArray(e)?e:[e])ze(l.current[t],!0)}),[]),formState:ke?new Proxy(Z,{get:(e,t)=>{if(t in e)return se.current[t]=!0,e[t]}}):Z},Xe=Object(f.useMemo)(()=>Object.assign({isFormDirty:Ee,updateWatchedValue:qe,shouldUnregister:i,updateFormState:je,removeFieldEventListener:He,watchInternal:Ue,mode:H.current,reValidateMode:{isReValidateOnBlur:fe,isReValidateOnChange:be},validateResolver:r?We:void 0,fieldsRef:l,resetFieldArrayFunctionRef:D,useWatchFieldsRef:b,useWatchRenderFunctionsRef:h,fieldArrayDefaultValuesRef:o,validFieldsRef:w,fieldsWithValidationRef:v,fieldArrayNamesRef:W,readFormStateRef:se,formStateRef:oe,defaultValuesRef:N,shallowFieldsStateRef:V,fieldArrayValuesRef:u},$e),[N.current,qe,i,He,Ue]);return Object.assign({watch:function(e,t){return Ue(e,t)},control:Xe,handleSubmit:Ke,reset:Object(f.useCallback)((e,t={})=>{if(xe)for(const n of Object.values(l.current))if(n){const{ref:e,options:t}=n,s=Se(e)&&Array.isArray(t)?t[0].ref:e;if(j(s))try{s.closest("form").reset();break}catch(r){}}l.current={},N.current=Object.assign({},e||N.current),e&&Le(""),Object.values(D.current).forEach(e=>de(e)&&e()),V.current=i?{}:we(e||N.current),(({errors:e,isDirty:t,isSubmitted:r,touched:n,isValid:s,submitCount:c,dirtyFields:i})=>{s||(w.current={},v.current={}),o.current={},d.current=new Set,A.current=!1,je({submitCount:c?oe.current.submitCount:0,isDirty:!!t&&oe.current.isDirty,isSubmitted:!!r&&oe.current.isSubmitted,isValid:!!s&&oe.current.isValid,dirtyFields:i?oe.current.dirtyFields:{},touched:n?oe.current.touched:{},errors:e?oe.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(t)},[]),clearErrors:Object(f.useCallback)((function(e){e&&(Array.isArray(e)?e:[e]).forEach(e=>l.current[e]&&C(e)?delete oe.current.errors[e]:ee(oe.current.errors,e)),je({errors:e?oe.current.errors:{}})}),[]),setError:Object(f.useCallback)((function(e,t){const r=(l.current[e]||{}).ref;T(oe.current.errors,e,Object.assign(Object.assign({},t),{ref:r})),je({isValid:!1}),t.shouldFocus&&r&&r.focus&&r.focus()}),[]),errors:Z.errors},$e)}const De=Object(f.createContext)(null);De.displayName="RHFContext";function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Re=function(e){return Object(c.jsx)("svg",Pe(Pe({},e),{},{children:Object(c.jsx)("path",{clipRule:"evenodd",d:"M121.19 106.666c-28.697 18.223-38.3 58.584-36.543 92.532 1.614 31.183 33.863 50.284 45.434 79.285 13.513 33.865-4.027 84.582 27.357 103.142 30.848 18.243 67.33-15.73 101.339-27.033 27.349-9.089 60.618-9.394 77.826-32.512 16.76-22.516 1.674-54.319 7.281-81.822 6.03-29.579 35.115-55.3 26.576-84.254-8.675-29.418-39.043-49.511-68.521-57.978-27.189-7.81-53.18 13.555-81.437 14.905-33.963 1.624-70.608-24.491-99.312-6.265z"})}))};Re.defaultProps={width:"443",height:"443",viewBox:"0 0 443 443",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var Ce=function(e){return Object(c.jsx)("svg",Pe(Pe({},e),{},{children:Object(c.jsx)("path",{clipRule:"evenodd",d:"M181.829 195.378c8.47-15.483-8.496-36.076 1.052-50.918 23.395-36.365 90.53-44.907 88.378-88.094-1.91-38.34-57.269-53.303-95.559-56.04-34.134-2.44-59.884 24.83-88.978 42.849-29.3 18.146-66.174 28.793-78.6 60.939-13.653 35.32-6.904 76.34 13.107 108.488 20.041 32.197 53.945 63.858 91.654 59.814 35.621-3.821 51.753-45.609 68.946-77.038z"})}))};Ce.defaultProps={width:"272",height:"273",viewBox:"0 0 272 273",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var _e=function(){var e=Object(f.useState)(!1),t=e[0],r=e[1],n=Object(f.useContext)(b.a).page.subscribers,s=Ve(),i=s.register,a=s.handleSubmit,l=(s.watch,s.errors);return Object(c.jsx)("section",{className:"flex justify-center my-8",children:Object(c.jsxs)("div",{className:"relative flex-1 max-w-lg",children:[t?Object(c.jsxs)("div",{className:"bg-neutral rounded-lg shadow-xl dark:shadow-2xl w-full max-w-2xl overflow-hidden relative z-10",children:[Object(c.jsx)("div",{className:"bg-secondary px-8 py-6 mb-8 text-center w-full",children:Object(c.jsx)("h3",{className:"font-lg mb-0",children:"Thanks for signing up!"})}),Object(c.jsx)("div",{className:"px-8 py-4 text-center mb-4",children:Object(c.jsx)("p",{children:"You'll recieve a confirmation email in your inbox shortly."})})]}):Object(c.jsxs)("form",{className:"bg-neutral rounded-lg shadow-xl dark:shadow-2xl w-full max-w-2xl overflow-hidden relative z-10",onSubmit:a((function(e){(function(){return Fe.apply(this,arguments)})("https://api.convertkit.com/v3/forms/1923342/subscribe",{api_key:"6Y9HXuuZE5-lV65x2IbLjw",email:e.email}).then((function(e){r(!0)}))})),children:[Object(c.jsx)("div",{className:"bg-secondary px-8 py-6 mb-8 text-center w-full",children:Object(c.jsxs)("h3",{className:"font-lg mb-0",children:["Join ",n.total," other subscribers"," "]})}),Object(c.jsxs)("div",{className:"px-8 py-4",children:[Object(c.jsx)("label",{className:"block overline ml-2 mb-2",htmlFor:"email",children:"Email address"}),Object(c.jsx)("input",{ref:i({required:!0}),id:"email",name:"email",type:"email",className:"w-full",placeholder:"Enter your email"}),l.email&&Object(c.jsx)("span",{className:"m-2 text-sm text-red-500",children:"This field is required"})]}),Object(c.jsxs)("div",{className:"flex items-center px-8 py-4 mb-6",children:[Object(c.jsx)("button",{className:"btn btn-primary mr-6",children:"Sign up now"}),Object(c.jsx)("span",{className:"text-sm leading-snug",children:"No spam, ever."})]})]}),Object(c.jsx)(Ce,{className:"absolute top-0 left-0 transform -translate-x-24 -translate-y-16 fill-current text-accent"}),Object(c.jsx)(Re,{className:"absolute bottom-0 right-0 transform translate-x-40 translate-y-40 fill-current text-secondary"})]})})};function Fe(){return(Fe=Object(d.a)(u.a.mark((function e(){var t,r,n,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",r=s.length>1&&void 0!==s[1]?s[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(r)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Le=!0;t.default=function(e){var t=e.subscription,r=e.convertkit,n=Object(i.a)(t).data,o={globals:n.global,favicons:[].concat(Object(s.a)(n._site.favicons),Object(s.a)(n._site.appleTouchIcons),Object(s.a)(n._site.msIcons))},u={seo:n.page._seoMetaTags,banner:n.bannerSection,header:{nav:n.allNavigations},footer:n.footer,socials:n.allSocials,subscribers:r.data};return Object(c.jsx)(b.b,{page:u,site:o,children:Object(c.jsxs)(a.a,{className:"bg-neutral-muted",children:[Object(c.jsx)(l.a,Ie({},n.page.hero)),Object(c.jsx)(_e,{})]})})}},iTcE:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newsletter",function(){return r("KoSn")}])}},[["iTcE",1,2,6,5,8,0,3,4,7,9]]]);