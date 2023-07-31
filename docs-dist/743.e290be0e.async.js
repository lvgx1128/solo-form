(self.webpackChunksolo_form=self.webpackChunksolo_form||[]).push([[743],{80946:function(D,H,h){"use strict";var k=h(39213),j=h(50959),E=h(86949);function R(u,e){return N(u)||T(u,e)||O(u,e)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(u,e){if(u){if(typeof u=="string")return A(u,e);var r=Object.prototype.toString.call(u).slice(8,-1);if(r==="Object"&&u.constructor&&(r=u.constructor.name),r==="Map"||r==="Set")return Array.from(u);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(u,e)}}function A(u,e){(e==null||e>u.length)&&(e=u.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=u[r];return i}function T(u,e){var r=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(r!=null){var i=[],s=!0,l=!1,f,g;try{for(r=r.call(u);!(s=(f=r.next()).done)&&(i.push(f.value),!(e&&i.length===e));s=!0);}catch(p){l=!0,g=p}finally{try{!s&&r.return!=null&&r.return()}finally{if(l)throw g}}return i}}function N(u){if(Array.isArray(u))return u}var C={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,i=[];return Object.entries(e.properties||{}).forEach(function(s){var l,f=R(s,2),g=f[0],p=f[1];i.push("".concat(g).concat((l=e.required)!==null&&l!==void 0&&l.includes(g)?"":"?",": ").concat(p.type==="object"?"object":r.toString(p)))}),i.length?"{ ".concat(i.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,i=e.signature,s="oneOf"in i?i.oneOf:[i];return s.map(function(l){return"".concat(l.isAsync?"async ":"","(").concat(l.arguments.map(function(f){return"".concat(f.key,": ").concat(r.toString(f))}).join(", "),") => ").concat(r.toString(l.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(i){return r.getValidClassName(i)||r.toString(i)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},P=function(e){var r=useState(function(){return C.toString(e)}),i=R(r,2),s=i[0],l=i[1];return useEffect(function(){l(C.toString(e))},[e]),React.createElement("code",null,s)},x=function(e){var r,i=useRouteMeta(),s=i.frontmatter,l=useAtomAssets(),f=l.components,g=e.id||s.atomId,p=useIntl();if(!g)throw new Error("`id` properties if required for API component!");var o=f==null?void 0:f[g];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,p.formatMessage({id:"api.component.name"})),React.createElement("th",null,p.formatMessage({id:"api.component.description"})),React.createElement("th",null,p.formatMessage({id:"api.component.type"})),React.createElement("th",null,p.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,o&&(r=o.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(o.propsConfig.properties).map(function(d){var m,t=R(d,2),a=t[0],n=t[1];return React.createElement("tr",{key:a},React.createElement("td",null,a),React.createElement("td",null,n.description||"--"),React.createElement("td",null,React.createElement(P,n)),React.createElement("td",null,React.createElement("code",null,(m=o.propsConfig.required)!==null&&m!==void 0&&m.includes(a)?p.formatMessage({id:"api.component.required"}):JSON.stringify(n.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},p.formatMessage({id:"api.component.".concat(f?"not.found":"unavailable")},{id:g}))))))},M=null},12561:function(D,H,h){"use strict";var k=h(50959);function j(){return j=Object.assign?Object.assign.bind():function(S){for(var O=1;O<arguments.length;O++){var A=arguments[O];for(var T in A)Object.prototype.hasOwnProperty.call(A,T)&&(S[T]=A[T])}return S},j.apply(this,arguments)}var E=function(O){return React.createElement("span",j({className:"dumi-default-badge"},O))},R=null},86949:function(D,H,h){"use strict";h.d(H,{Z:function(){return u}});var k=h(30826),j=h.n(k),E=h(50959),R=["children"];function S(e,r){return C(e)||N(e,r)||A(e,r)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(e,r){if(e){if(typeof e=="string")return T(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return T(e,r)}}function T(e,r){(r==null||r>e.length)&&(r=e.length);for(var i=0,s=new Array(r);i<r;i++)s[i]=e[i];return s}function N(e,r){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var s=[],l=!0,f=!1,g,p;try{for(i=i.call(e);!(l=(g=i.next()).done)&&(s.push(g.value),!(r&&s.length===r));l=!0);}catch(o){f=!0,p=o}finally{try{!l&&i.return!=null&&i.return()}finally{if(f)throw p}}return s}}function C(e){if(Array.isArray(e))return e}function P(e,r){if(e==null)return{};var i=x(e,r),s,l;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(l=0;l<f.length;l++)s=f[l],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}function x(e,r){if(e==null)return{};var i={},s=Object.keys(e),l,f;for(f=0;f<s.length;f++)l=s[f],!(r.indexOf(l)>=0)&&(i[l]=e[l]);return i}var M=function(r){var i=r.children,s=P(r,R),l=(0,E.useRef)(null),f=(0,E.useState)(!1),g=S(f,2),p=g[0],o=g[1],d=(0,E.useState)(!1),m=S(d,2),t=m[0],a=m[1];return(0,E.useEffect)(function(){var n=l.current;if(n){var c=j()(function(){o(n.scrollLeft>0),a(n.scrollLeft<n.scrollWidth-n.offsetWidth)},100);return c(),n.addEventListener("scroll",c),window.addEventListener("resize",c),function(){n.removeEventListener("scroll",c),window.removeEventListener("resize",c)}}},[]),E.createElement("div",{className:"dumi-default-table"},E.createElement("div",{className:"dumi-default-table-content",ref:l,"data-left-folded":p||void 0,"data-right-folded":t||void 0},E.createElement("table",s,i)))},u=M},48814:function(D,H,h){"use strict";var k=h(46430),j=h(50959);function E(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);a&&(c=c.filter(function(y){return Object.getOwnPropertyDescriptor(t,y).enumerable})),n.push.apply(n,c)}return n}function R(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?E(Object(n),!0).forEach(function(c){S(t,c,n[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(n,c))})}return t}function S(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function O(t,a){return N(t)||T(t,a)||x(t,a)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(t,a){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var c=[],y=!0,v=!1,_,I;try{for(n=n.call(t);!(y=(_=n.next()).done)&&(c.push(_.value),!(a&&c.length===a));y=!0);}catch(w){v=!0,I=w}finally{try{!y&&n.return!=null&&n.return()}finally{if(v)throw I}}return c}}function N(t){if(Array.isArray(t))return t}function C(t){return u(t)||M(t)||x(t)||P()}function P(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t,a){if(t){if(typeof t=="string")return e(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,a)}}function M(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function u(t){if(Array.isArray(t))return e(t)}function e(t,a){(a==null||a>t.length)&&(a=t.length);for(var n=0,c=new Array(a);n<a;n++)c[n]=t[n];return c}function r(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=[];return[].concat(t).forEach(function(c,y){var v="".concat(a?"".concat(a,"-"):"").concat(y);switch(c==null?void 0:c.type){case"ul":{var _,I=((_=n[n.length-1])===null||_===void 0?void 0:_.children)||n,w=r(c.props.children||[],v);I.push.apply(I,C(w));break}case"li":{var W=r(c.props.children,v);n.push({title:[].concat(c.props.children).filter(function(F){return F.type!=="ul"}),key:v,children:W,isLeaf:!W.length});break}default:}}),n}var i=function(a){var n=useState(r(a)),c=O(n,2),y=c[0],v=c[1];return useEffect(function(){v(r(a))},[a]),y},s=function(a){var n=a.isLeaf,c=a.expanded;return n?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):c?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"}))},l=function(a){var n=a.isLeaf,c=a.expanded;return n?React.createElement("span",{className:"tree-switcher-leaf-line"}):c?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},f=function(){return{height:0,opacity:0}},g=function(a){var n=a.scrollHeight;return{height:n,opacity:1}},p=function(a){return{height:a?a.offsetHeight:0}},o=function(a,n){return(n==null?void 0:n.deadline)===!0||n.propertyName==="height"},d={motionName:"ant-motion-collapse",onAppearStart:f,onEnterStart:f,onAppearActive:g,onEnterActive:g,onLeaveStart:p,onLeaveActive:f,onAppearEnd:o,onEnterEnd:o,onLeaveEnd:o,motionDeadline:500},m=function(t){var a=i(t.children),n=createRef(),c=function(v,_){var I=_.isLeaf;I||v.shiftKey||v.metaKey||v.ctrlKey||n.current.onNodeExpand(v,_)};return React.createElement(Tree,{className:"dumi-default-tree",icon:s,ref:n,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:R(R({},d),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:t.title||"<root>",children:a}],defaultExpandAll:!0,switcherIcon:l})}},30826:function(D,H,h){var k="Expected a function",j=NaN,E="[object Symbol]",R=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,A=/^0o[0-7]+$/i,T=parseInt,N=typeof h.g=="object"&&h.g&&h.g.Object===Object&&h.g,C=typeof self=="object"&&self&&self.Object===Object&&self,P=N||C||Function("return this")(),x=Object.prototype,M=x.toString,u=Math.max,e=Math.min,r=function(){return P.Date.now()};function i(o,d,m){var t,a,n,c,y,v,_=0,I=!1,w=!1,W=!0;if(typeof o!="function")throw new TypeError(k);d=p(d)||0,l(m)&&(I=!!m.leading,w="maxWait"in m,n=w?u(p(m.maxWait)||0,d):n,W="trailing"in m?!!m.trailing:W);function F(b){var L=t,B=a;return t=a=void 0,_=b,c=o.apply(B,L),c}function J(b){return _=b,y=setTimeout($,d),I?F(b):c}function X(b){var L=b-v,B=b-_,z=d-L;return w?e(z,n-B):z}function U(b){var L=b-v,B=b-_;return v===void 0||L>=d||L<0||w&&B>=n}function $(){var b=r();if(U(b))return V(b);y=setTimeout($,X(b))}function V(b){return y=void 0,W&&t?F(b):(t=a=void 0,c)}function G(){y!==void 0&&clearTimeout(y),_=0,t=v=a=y=void 0}function Z(){return y===void 0?c:V(r())}function K(){var b=r(),L=U(b);if(t=arguments,a=this,v=b,L){if(y===void 0)return J(v);if(w)return y=setTimeout($,d),F(v)}return y===void 0&&(y=setTimeout($,d)),c}return K.cancel=G,K.flush=Z,K}function s(o,d,m){var t=!0,a=!0;if(typeof o!="function")throw new TypeError(k);return l(m)&&(t="leading"in m?!!m.leading:t,a="trailing"in m?!!m.trailing:a),i(o,d,{leading:t,maxWait:d,trailing:a})}function l(o){var d=typeof o;return!!o&&(d=="object"||d=="function")}function f(o){return!!o&&typeof o=="object"}function g(o){return typeof o=="symbol"||f(o)&&M.call(o)==E}function p(o){if(typeof o=="number")return o;if(g(o))return j;if(l(o)){var d=typeof o.valueOf=="function"?o.valueOf():o;o=l(d)?d+"":d}if(typeof o!="string")return o===0?o:+o;o=o.replace(R,"");var m=O.test(o);return m||A.test(o)?T(o.slice(2),m?2:8):S.test(o)?j:+o}D.exports=s}}]);