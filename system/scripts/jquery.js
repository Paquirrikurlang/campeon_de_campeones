/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-shiv-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};



// ##############################################################################



// ThreeCanvas.js r46 - http://github.com/mrdoob/three.js
var THREE=THREE||{};if(!self.Int32Array)self.Int32Array=Array,self.Float32Array=Array;THREE.Color=function(a){a!==void 0&&this.setHex(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSV:function(a,b,c){var d,f,e;if(c===0)this.r=this.g=this.b=0;else switch(d=Math.floor(a*6),f=a*6-d,a=c*(1-b),e=c*(1-
b*f),b=c*(1-b*(1-f)),d){case 1:this.r=e;this.g=c;this.b=a;break;case 2:this.r=a;this.g=c;this.b=b;break;case 3:this.r=a;this.g=e;this.b=c;break;case 4:this.r=b;this.g=a;this.b=c;break;case 5:this.r=c;this.g=a;this.b=e;break;case 6:case 0:this.r=c,this.g=b,this.b=a}return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},getHex:function(){return~~(this.r*255)<<16^~~(this.g*255)<<8^~~(this.b*255)},getContextStyle:function(){return"rgb("+
Math.floor(this.r*255)+","+Math.floor(this.g*255)+","+Math.floor(this.b*255)+")"},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},copy:function(a){this.x=a.x;this.y=a.y;return this},clone:function(){return new THREE.Vector2(this.x,this.y)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},
divideScalar:function(a){a?(this.x/=a,this.y/=a):this.set(0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){return this.normalize().multiplyScalar(a)},
equals:function(a){return a.x===this.x&&a.y===this.y}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},
addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},multiply:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},multiplySelf:function(a){this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},divideSelf:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},
divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a):this.z=this.y=this.x=0;return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return this.x+this.y+this.z},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},
cross:function(a,b){this.x=a.y*b.z-a.z*b.y;this.y=a.z*b.x-a.x*b.z;this.z=a.x*b.y-a.y*b.x;return this},crossSelf:function(a){var b=this.x,c=this.y,d=this.z;this.x=c*a.z-d*a.y;this.y=d*a.x-b*a.z;this.z=b*a.y-c*a.x;return this},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){return(new THREE.Vector3).sub(this,a).lengthSq()},setPositionFromMatrix:function(a){this.x=a.n14;this.y=a.n24;this.z=a.n34},setRotationFromMatrix:function(a){var b=Math.cos(this.y);
this.y=Math.asin(a.n13);Math.abs(b)>1.0E-5?(this.x=Math.atan2(-a.n23/b,a.n33/b),this.z=Math.atan2(-a.n12/b,a.n11/b)):(this.x=0,this.z=Math.atan2(a.n21,a.n22))},isZero:function(){return this.lengthSq()<1.0E-4}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=d!==void 0?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w!==void 0?a.w:1},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-
b.z;this.w=a.w-b.w;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a,this.w/=a):(this.z=this.y=this.x=0,this.w=1);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.dot(this)},length:function(){return Math.sqrt(this.lengthSq())},
normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this}};
THREE.Ray=function(a,b){function c(a,b,c){i.sub(c,a);p=i.dot(b);if(p<=0)return null;k=n.add(a,o.copy(b).multiplyScalar(p));return s=c.distanceTo(k)}function d(a,b,c,d){i.sub(d,b);n.sub(c,b);o.sub(a,b);K=i.dot(i);C=i.dot(n);Q=i.dot(o);O=n.dot(n);w=n.dot(o);F=1/(K*O-C*C);z=(O*Q-C*w)*F;D=(K*w-C*Q)*F;return z>=0&&D>=0&&z+D<1}this.origin=a||new THREE.Vector3;this.direction=b||new THREE.Vector3;this.intersectScene=function(a){return this.intersectObjects(a.children)};this.intersectObjects=function(a){var b,
c,d=[];b=0;for(c=a.length;b<c;b++)Array.prototype.push.apply(d,this.intersectObject(a[b]));d.sort(function(a,b){return a.distance-b.distance});return d};var f=new THREE.Vector3,e=new THREE.Vector3,g=new THREE.Vector3,h=new THREE.Vector3,a=new THREE.Vector3,b=new THREE.Vector3,m=new THREE.Vector3,l=new THREE.Vector3,j=new THREE.Vector3;this.intersectObject=function(k){for(var i,o=[],n=0,W=k.children.length;n<W;n++)Array.prototype.push.apply(o,this.intersectObject(k.children[n]));if(k instanceof THREE.Particle){n=
c(this.origin,this.direction,k.matrixWorld.getPosition());if(n===null||n>k.scale.x)return[];i={distance:n,point:k.position,face:null,object:k};o.push(i)}else if(k instanceof THREE.Mesh){n=c(this.origin,this.direction,k.matrixWorld.getPosition());if(n===null||n>k.geometry.boundingSphere.radius*Math.max(k.scale.x,Math.max(k.scale.y,k.scale.z)))return o;var p,G=k.geometry,H=G.vertices,I;k.matrixRotationWorld.extractRotation(k.matrixWorld);n=0;for(W=G.faces.length;n<W;n++)if(i=G.faces[n],a.copy(this.origin),
b.copy(this.direction),I=k.matrixWorld,m=I.multiplyVector3(m.copy(i.centroid)).subSelf(a),p=m.dot(b),!(p<=0)&&(f=I.multiplyVector3(f.copy(H[i.a].position)),e=I.multiplyVector3(e.copy(H[i.b].position)),g=I.multiplyVector3(g.copy(H[i.c].position)),i instanceof THREE.Face4&&(h=I.multiplyVector3(h.copy(H[i.d].position))),l=k.matrixRotationWorld.multiplyVector3(l.copy(i.normal)),p=b.dot(l),k.doubleSided||(k.flipSided?p>0:p<0)))if(p=l.dot(m.sub(f,a))/p,j.add(a,b.multiplyScalar(p)),i instanceof THREE.Face3)d(j,
f,e,g)&&(i={distance:a.distanceTo(j),point:j.clone(),face:i,object:k},o.push(i));else if(i instanceof THREE.Face4&&(d(j,f,e,h)||d(j,e,g,h)))i={distance:a.distanceTo(j),point:j.clone(),face:i,object:k},o.push(i)}return o};var i=new THREE.Vector3,n=new THREE.Vector3,o=new THREE.Vector3,p,k,s,K,C,Q,O,w,F,z,D};
THREE.Rectangle=function(){function a(){e=d-b;g=f-c}var b,c,d,f,e,g,h=!0;this.getX=function(){return b};this.getY=function(){return c};this.getWidth=function(){return e};this.getHeight=function(){return g};this.getLeft=function(){return b};this.getTop=function(){return c};this.getRight=function(){return d};this.getBottom=function(){return f};this.set=function(e,g,j,i){h=!1;b=e;c=g;d=j;f=i;a()};this.addPoint=function(e,g){h?(h=!1,b=e,c=g,d=e,f=g):(b=b<e?b:e,c=c<g?c:g,d=d>e?d:e,f=f>g?f:g);a()};this.add3Points=
function(e,g,j,i,n,o){h?(h=!1,b=e<j?e<n?e:n:j<n?j:n,c=g<i?g<o?g:o:i<o?i:o,d=e>j?e>n?e:n:j>n?j:n,f=g>i?g>o?g:o:i>o?i:o):(b=e<j?e<n?e<b?e:b:n<b?n:b:j<n?j<b?j:b:n<b?n:b,c=g<i?g<o?g<c?g:c:o<c?o:c:i<o?i<c?i:c:o<c?o:c,d=e>j?e>n?e>d?e:d:n>d?n:d:j>n?j>d?j:d:n>d?n:d,f=g>i?g>o?g>f?g:f:o>f?o:f:i>o?i>f?i:f:o>f?o:f);a()};this.addRectangle=function(e){h?(h=!1,b=e.getLeft(),c=e.getTop(),d=e.getRight(),f=e.getBottom()):(b=b<e.getLeft()?b:e.getLeft(),c=c<e.getTop()?c:e.getTop(),d=d>e.getRight()?d:e.getRight(),f=f>
e.getBottom()?f:e.getBottom());a()};this.inflate=function(e){b-=e;c-=e;d+=e;f+=e;a()};this.minSelf=function(e){b=b>e.getLeft()?b:e.getLeft();c=c>e.getTop()?c:e.getTop();d=d<e.getRight()?d:e.getRight();f=f<e.getBottom()?f:e.getBottom();a()};this.intersects=function(a){return Math.min(d,a.getRight())-Math.max(b,a.getLeft())>=0&&Math.min(f,a.getBottom())-Math.max(c,a.getTop())>=0};this.empty=function(){h=!0;f=d=c=b=0;a()};this.isEmpty=function(){return h}};
THREE.Math={clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,f){return d+(a-b)*(f-d)/(c-b)},random16:function(){return(65280*Math.random()+255*Math.random())/65535}};THREE.Matrix3=function(){this.m=[]};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,transpose:function(){var a,b=this.m;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},transposeIntoArray:function(a){var b=this.m;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this}};
THREE.Matrix4=function(a,b,c,d,f,e,g,h,m,l,j,i,n,o,p,k){this.set(a!==void 0?a:1,b||0,c||0,d||0,f||0,e!==void 0?e:1,g||0,h||0,m||0,l||0,j!==void 0?j:1,i||0,n||0,o||0,p||0,k!==void 0?k:1);this.flat=Array(16);this.m33=new THREE.Matrix3};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,f,e,g,h,m,l,j,i,n,o,p,k){this.n11=a;this.n12=b;this.n13=c;this.n14=d;this.n21=f;this.n22=e;this.n23=g;this.n24=h;this.n31=m;this.n32=l;this.n33=j;this.n34=i;this.n41=n;this.n42=o;this.n43=p;this.n44=k;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.set(a.n11,a.n12,a.n13,a.n14,a.n21,a.n22,a.n23,a.n24,a.n31,a.n32,a.n33,a.n34,a.n41,a.n42,a.n43,a.n44);return this},lookAt:function(a,
b,c){var d=THREE.Matrix4.__v1,f=THREE.Matrix4.__v2,e=THREE.Matrix4.__v3;e.sub(a,b).normalize();if(e.length()===0)e.z=1;d.cross(c,e).normalize();d.length()===0&&(e.x+=1.0E-4,d.cross(c,e).normalize());f.cross(e,d).normalize();this.n11=d.x;this.n12=f.x;this.n13=e.x;this.n21=d.y;this.n22=f.y;this.n23=e.y;this.n31=d.z;this.n32=f.z;this.n33=e.z;return this},multiply:function(a,b){var c=a.n11,d=a.n12,f=a.n13,e=a.n14,g=a.n21,h=a.n22,m=a.n23,l=a.n24,j=a.n31,i=a.n32,n=a.n33,o=a.n34,p=a.n41,k=a.n42,s=a.n43,
K=a.n44,C=b.n11,Q=b.n12,O=b.n13,w=b.n14,F=b.n21,z=b.n22,D=b.n23,u=b.n24,r=b.n31,E=b.n32,N=b.n33,W=b.n34,da=b.n41,G=b.n42,H=b.n43,I=b.n44;this.n11=c*C+d*F+f*r+e*da;this.n12=c*Q+d*z+f*E+e*G;this.n13=c*O+d*D+f*N+e*H;this.n14=c*w+d*u+f*W+e*I;this.n21=g*C+h*F+m*r+l*da;this.n22=g*Q+h*z+m*E+l*G;this.n23=g*O+h*D+m*N+l*H;this.n24=g*w+h*u+m*W+l*I;this.n31=j*C+i*F+n*r+o*da;this.n32=j*Q+i*z+n*E+o*G;this.n33=j*O+i*D+n*N+o*H;this.n34=j*w+i*u+n*W+o*I;this.n41=p*C+k*F+s*r+K*da;this.n42=p*Q+k*z+s*E+K*G;this.n43=p*
O+k*D+s*N+K*H;this.n44=p*w+k*u+s*W+K*I;return this},multiplySelf:function(a){return this.multiply(this,a)},multiplyToArray:function(a,b,c){this.multiply(a,b);c[0]=this.n11;c[1]=this.n21;c[2]=this.n31;c[3]=this.n41;c[4]=this.n12;c[5]=this.n22;c[6]=this.n32;c[7]=this.n42;c[8]=this.n13;c[9]=this.n23;c[10]=this.n33;c[11]=this.n43;c[12]=this.n14;c[13]=this.n24;c[14]=this.n34;c[15]=this.n44;return this},multiplyScalar:function(a){this.n11*=a;this.n12*=a;this.n13*=a;this.n14*=a;this.n21*=a;this.n22*=a;this.n23*=
a;this.n24*=a;this.n31*=a;this.n32*=a;this.n33*=a;this.n34*=a;this.n41*=a;this.n42*=a;this.n43*=a;this.n44*=a;return this},multiplyVector3:function(a){var b=a.x,c=a.y,d=a.z,f=1/(this.n41*b+this.n42*c+this.n43*d+this.n44);a.x=(this.n11*b+this.n12*c+this.n13*d+this.n14)*f;a.y=(this.n21*b+this.n22*c+this.n23*d+this.n24)*f;a.z=(this.n31*b+this.n32*c+this.n33*d+this.n34)*f;return a},multiplyVector4:function(a){var b=a.x,c=a.y,d=a.z,f=a.w;a.x=this.n11*b+this.n12*c+this.n13*d+this.n14*f;a.y=this.n21*b+this.n22*
c+this.n23*d+this.n24*f;a.z=this.n31*b+this.n32*c+this.n33*d+this.n34*f;a.w=this.n41*b+this.n42*c+this.n43*d+this.n44*f;return a},rotateAxis:function(a){var b=a.x,c=a.y,d=a.z;a.x=b*this.n11+c*this.n12+d*this.n13;a.y=b*this.n21+c*this.n22+d*this.n23;a.z=b*this.n31+c*this.n32+d*this.n33;a.normalize();return a},crossVector:function(a){var b=new THREE.Vector4;b.x=this.n11*a.x+this.n12*a.y+this.n13*a.z+this.n14*a.w;b.y=this.n21*a.x+this.n22*a.y+this.n23*a.z+this.n24*a.w;b.z=this.n31*a.x+this.n32*a.y+this.n33*
a.z+this.n34*a.w;b.w=a.w?this.n41*a.x+this.n42*a.y+this.n43*a.z+this.n44*a.w:1;return b},determinant:function(){var a=this.n11,b=this.n12,c=this.n13,d=this.n14,f=this.n21,e=this.n22,g=this.n23,h=this.n24,m=this.n31,l=this.n32,j=this.n33,i=this.n34,n=this.n41,o=this.n42,p=this.n43,k=this.n44;return d*g*l*n-c*h*l*n-d*e*j*n+b*h*j*n+c*e*i*n-b*g*i*n-d*g*m*o+c*h*m*o+d*f*j*o-a*h*j*o-c*f*i*o+a*g*i*o+d*e*m*p-b*h*m*p-d*f*l*p+a*h*l*p+b*f*i*p-a*e*i*p-c*e*m*k+b*g*m*k+c*f*l*k-a*g*l*k-b*f*j*k+a*e*j*k},transpose:function(){var a;
a=this.n21;this.n21=this.n12;this.n12=a;a=this.n31;this.n31=this.n13;this.n13=a;a=this.n32;this.n32=this.n23;this.n23=a;a=this.n41;this.n41=this.n14;this.n14=a;a=this.n42;this.n42=this.n24;this.n24=a;a=this.n43;this.n43=this.n34;this.n43=a;return this},clone:function(){var a=new THREE.Matrix4;a.n11=this.n11;a.n12=this.n12;a.n13=this.n13;a.n14=this.n14;a.n21=this.n21;a.n22=this.n22;a.n23=this.n23;a.n24=this.n24;a.n31=this.n31;a.n32=this.n32;a.n33=this.n33;a.n34=this.n34;a.n41=this.n41;a.n42=this.n42;
a.n43=this.n43;a.n44=this.n44;return a},flatten:function(){this.flat[0]=this.n11;this.flat[1]=this.n21;this.flat[2]=this.n31;this.flat[3]=this.n41;this.flat[4]=this.n12;this.flat[5]=this.n22;this.flat[6]=this.n32;this.flat[7]=this.n42;this.flat[8]=this.n13;this.flat[9]=this.n23;this.flat[10]=this.n33;this.flat[11]=this.n43;this.flat[12]=this.n14;this.flat[13]=this.n24;this.flat[14]=this.n34;this.flat[15]=this.n44;return this.flat},flattenToArray:function(a){a[0]=this.n11;a[1]=this.n21;a[2]=this.n31;
a[3]=this.n41;a[4]=this.n12;a[5]=this.n22;a[6]=this.n32;a[7]=this.n42;a[8]=this.n13;a[9]=this.n23;a[10]=this.n33;a[11]=this.n43;a[12]=this.n14;a[13]=this.n24;a[14]=this.n34;a[15]=this.n44;return a},flattenToArrayOffset:function(a,b){a[b]=this.n11;a[b+1]=this.n21;a[b+2]=this.n31;a[b+3]=this.n41;a[b+4]=this.n12;a[b+5]=this.n22;a[b+6]=this.n32;a[b+7]=this.n42;a[b+8]=this.n13;a[b+9]=this.n23;a[b+10]=this.n33;a[b+11]=this.n43;a[b+12]=this.n14;a[b+13]=this.n24;a[b+14]=this.n34;a[b+15]=this.n44;return a},
setTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},setScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},setRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},setRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},setRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},
setRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),f=1-c,e=a.x,g=a.y,h=a.z,m=f*e,l=f*g;this.set(m*e+c,m*g-d*h,m*h+d*g,0,m*g+d*h,l*g+c,l*h-d*e,0,m*h-d*g,l*h+d*e,f*h*h+c,0,0,0,0,1);return this},setPosition:function(a){this.n14=a.x;this.n24=a.y;this.n34=a.z;return this},getPosition:function(){return THREE.Matrix4.__v1.set(this.n14,this.n24,this.n34)},getColumnX:function(){return THREE.Matrix4.__v1.set(this.n11,this.n21,this.n31)},getColumnY:function(){return THREE.Matrix4.__v1.set(this.n12,
this.n22,this.n32)},getColumnZ:function(){return THREE.Matrix4.__v1.set(this.n13,this.n23,this.n33)},getInverse:function(a){var b=a.n11,c=a.n12,d=a.n13,f=a.n14,e=a.n21,g=a.n22,h=a.n23,m=a.n24,l=a.n31,j=a.n32,i=a.n33,n=a.n34,o=a.n41,p=a.n42,k=a.n43,s=a.n44;this.n11=h*n*p-m*i*p+m*j*k-g*n*k-h*j*s+g*i*s;this.n12=f*i*p-d*n*p-f*j*k+c*n*k+d*j*s-c*i*s;this.n13=d*m*p-f*h*p+f*g*k-c*m*k-d*g*s+c*h*s;this.n14=f*h*j-d*m*j-f*g*i+c*m*i+d*g*n-c*h*n;this.n21=m*i*o-h*n*o-m*l*k+e*n*k+h*l*s-e*i*s;this.n22=d*n*o-f*i*o+
f*l*k-b*n*k-d*l*s+b*i*s;this.n23=f*h*o-d*m*o-f*e*k+b*m*k+d*e*s-b*h*s;this.n24=d*m*l-f*h*l+f*e*i-b*m*i-d*e*n+b*h*n;this.n31=g*n*o-m*j*o+m*l*p-e*n*p-g*l*s+e*j*s;this.n32=f*j*o-c*n*o-f*l*p+b*n*p+c*l*s-b*j*s;this.n33=d*m*o-f*g*o+f*e*p-b*m*p-c*e*s+b*g*s;this.n34=f*g*l-c*m*l-f*e*j+b*m*j+c*e*n-b*g*n;this.n41=h*j*o-g*i*o-h*l*p+e*i*p+g*l*k-e*j*k;this.n42=c*i*o-d*j*o+d*l*p-b*i*p-c*l*k+b*j*k;this.n43=d*g*o-c*h*o-d*e*p+b*h*p+c*e*k-b*g*k;this.n44=c*h*l-d*g*l+d*e*j-b*h*j-c*e*i+b*g*i;this.multiplyScalar(1/a.determinant());
return this},setRotationFromEuler:function(a,b){var c=a.x,d=a.y,f=a.z,e=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(f),f=Math.sin(f);switch(b){case "YXZ":var m=g*h,l=g*f,j=d*h,i=d*f;this.n11=m+i*c;this.n12=j*c-l;this.n13=e*d;this.n21=e*f;this.n22=e*h;this.n23=-c;this.n31=l*c-j;this.n32=i+m*c;this.n33=e*g;break;case "ZXY":m=g*h;l=g*f;j=d*h;i=d*f;this.n11=m-i*c;this.n12=-e*f;this.n13=j+l*c;this.n21=l+j*c;this.n22=e*h;this.n23=i-m*c;this.n31=-e*d;this.n32=c;this.n33=e*g;break;case "ZYX":m=
e*h;l=e*f;j=c*h;i=c*f;this.n11=g*h;this.n12=j*d-l;this.n13=m*d+i;this.n21=g*f;this.n22=i*d+m;this.n23=l*d-j;this.n31=-d;this.n32=c*g;this.n33=e*g;break;case "YZX":m=e*g;l=e*d;j=c*g;i=c*d;this.n11=g*h;this.n12=i-m*f;this.n13=j*f+l;this.n21=f;this.n22=e*h;this.n23=-c*h;this.n31=-d*h;this.n32=l*f+j;this.n33=m-i*f;break;case "XZY":m=e*g;l=e*d;j=c*g;i=c*d;this.n11=g*h;this.n12=-f;this.n13=d*h;this.n21=m*f+i;this.n22=e*h;this.n23=l*f-j;this.n31=j*f-l;this.n32=c*h;this.n33=i*f+m;break;default:m=e*h,l=e*
f,j=c*h,i=c*f,this.n11=g*h,this.n12=-g*f,this.n13=d,this.n21=l+j*d,this.n22=m-i*d,this.n23=-c*g,this.n31=i-m*d,this.n32=j+l*d,this.n33=e*g}return this},setRotationFromQuaternion:function(a){var b=a.x,c=a.y,d=a.z,f=a.w,e=b+b,g=c+c,h=d+d,a=b*e,m=b*g;b*=h;var l=c*g;c*=h;d*=h;e*=f;g*=f;f*=h;this.n11=1-(l+d);this.n12=m-f;this.n13=b+g;this.n21=m+f;this.n22=1-(a+d);this.n23=c-e;this.n31=b-g;this.n32=c+e;this.n33=1-(a+l);return this},scale:function(a){var b=a.x,c=a.y,a=a.z;this.n11*=b;this.n12*=c;this.n13*=
a;this.n21*=b;this.n22*=c;this.n23*=a;this.n31*=b;this.n32*=c;this.n33*=a;this.n41*=b;this.n42*=c;this.n43*=a;return this},compose:function(a,b,c){var d=THREE.Matrix4.__m1,f=THREE.Matrix4.__m2;d.identity();d.setRotationFromQuaternion(b);f.setScale(c.x,c.y,c.z);this.multiply(d,f);this.n14=a.x;this.n24=a.y;this.n34=a.z;return this},decompose:function(a,b,c){var d=THREE.Matrix4.__v1,f=THREE.Matrix4.__v2,e=THREE.Matrix4.__v3;d.set(this.n11,this.n21,this.n31);f.set(this.n12,this.n22,this.n32);e.set(this.n13,
this.n23,this.n33);a=a instanceof THREE.Vector3?a:new THREE.Vector3;b=b instanceof THREE.Quaternion?b:new THREE.Quaternion;c=c instanceof THREE.Vector3?c:new THREE.Vector3;c.x=d.length();c.y=f.length();c.z=e.length();a.x=this.n14;a.y=this.n24;a.z=this.n34;d=THREE.Matrix4.__m1;d.copy(this);d.n11/=c.x;d.n21/=c.x;d.n31/=c.x;d.n12/=c.y;d.n22/=c.y;d.n32/=c.y;d.n13/=c.z;d.n23/=c.z;d.n33/=c.z;b.setFromRotationMatrix(d);return[a,b,c]},extractPosition:function(a){this.n14=a.n14;this.n24=a.n24;this.n34=a.n34;
return this},extractRotation:function(a){var b=THREE.Matrix4.__v1,c=1/b.set(a.n11,a.n21,a.n31).length(),d=1/b.set(a.n12,a.n22,a.n32).length(),b=1/b.set(a.n13,a.n23,a.n33).length();this.n11=a.n11*c;this.n21=a.n21*c;this.n31=a.n31*c;this.n12=a.n12*d;this.n22=a.n22*d;this.n32=a.n32*d;this.n13=a.n13*b;this.n23=a.n23*b;this.n33=a.n33*b;return this}};
THREE.Matrix4.makeInvert3x3=function(a){var b=a.m33,c=b.m,d=a.n33*a.n22-a.n32*a.n23,f=-a.n33*a.n21+a.n31*a.n23,e=a.n32*a.n21-a.n31*a.n22,g=-a.n33*a.n12+a.n32*a.n13,h=a.n33*a.n11-a.n31*a.n13,m=-a.n32*a.n11+a.n31*a.n12,l=a.n23*a.n12-a.n22*a.n13,j=-a.n23*a.n11+a.n21*a.n13,i=a.n22*a.n11-a.n21*a.n12,a=a.n11*d+a.n21*g+a.n31*l;a===0&&console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");a=1/a;c[0]=a*d;c[1]=a*f;c[2]=a*e;c[3]=a*g;c[4]=a*h;c[5]=a*m;c[6]=a*l;c[7]=a*j;c[8]=a*i;return b};
THREE.Matrix4.makeFrustum=function(a,b,c,d,f,e){var g;g=new THREE.Matrix4;g.n11=2*f/(b-a);g.n12=0;g.n13=(b+a)/(b-a);g.n14=0;g.n21=0;g.n22=2*f/(d-c);g.n23=(d+c)/(d-c);g.n24=0;g.n31=0;g.n32=0;g.n33=-(e+f)/(e-f);g.n34=-2*e*f/(e-f);g.n41=0;g.n42=0;g.n43=-1;g.n44=0;return g};THREE.Matrix4.makePerspective=function(a,b,c,d){var f,a=c*Math.tan(a*Math.PI/360);f=-a;return THREE.Matrix4.makeFrustum(f*b,a*b,f,a,c,d)};
THREE.Matrix4.makeOrtho=function(a,b,c,d,f,e){var g,h,m,l;g=new THREE.Matrix4;h=b-a;m=c-d;l=e-f;g.n11=2/h;g.n12=0;g.n13=0;g.n14=-((b+a)/h);g.n21=0;g.n22=2/m;g.n23=0;g.n24=-((c+d)/m);g.n31=0;g.n32=0;g.n33=-2/l;g.n34=-((e+f)/l);g.n41=0;g.n42=0;g.n43=0;g.n44=1;return g};THREE.Matrix4.__v1=new THREE.Vector3;THREE.Matrix4.__v2=new THREE.Vector3;THREE.Matrix4.__v3=new THREE.Vector3;THREE.Matrix4.__m1=new THREE.Matrix4;THREE.Matrix4.__m2=new THREE.Matrix4;
THREE.Object3D=function(){this.name="";this.id=THREE.Object3DCount++;this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Vector3;this.eulerOrder="XYZ";this.scale=new THREE.Vector3(1,1,1);this.flipSided=this.doubleSided=this.dynamic=!1;this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixRotationWorld=new THREE.Matrix4;this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=
!0;this.quaternion=new THREE.Quaternion;this.useQuaternion=!1;this.boundRadius=0;this.boundRadiusScale=1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this._vector=new THREE.Vector3};
THREE.Object3D.prototype={constructor:THREE.Object3D,translate:function(a,b){this.matrix.rotateAxis(b);this.position.addSelf(b.multiplyScalar(a))},translateX:function(a){this.translate(a,this._vector.set(1,0,0))},translateY:function(a){this.translate(a,this._vector.set(0,1,0))},translateZ:function(a){this.translate(a,this._vector.set(0,0,1))},lookAt:function(a){this.matrix.lookAt(a,this.position,this.up);this.rotationAutoUpdate&&this.rotation.setRotationFromMatrix(this.matrix)},add:function(a){if(this.children.indexOf(a)===
-1){a.parent!==void 0&&a.parent.remove(a);a.parent=this;this.children.push(a);for(var b=this;b.parent!==void 0;)b=b.parent;b!==void 0&&b instanceof THREE.Scene&&b.addObject(a)}},remove:function(a){var b=this.children.indexOf(a);if(b!==-1){a.parent=void 0;this.children.splice(b,1);for(b=this;b.parent!==void 0;)b=b.parent;b!==void 0&&b instanceof THREE.Scene&&b.removeObject(a)}},getChildByName:function(a,b){var c,d,f;c=0;for(d=this.children.length;c<d;c++){f=this.children[c];if(f.name===a)return f;
if(b&&(f=f.getChildByName(a,b),f!==void 0))return f}},updateMatrix:function(){this.matrix.setPosition(this.position);this.useQuaternion?this.matrix.setRotationFromQuaternion(this.quaternion):this.matrix.setRotationFromEuler(this.rotation,this.eulerOrder);if(this.scale.x!==1||this.scale.y!==1||this.scale.z!==1)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,Math.max(this.scale.y,this.scale.z));this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&
this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)}};THREE.Object3DCount=0;
THREE.Projector=function(){function a(){var a=g[e]=g[e]||new THREE.RenderableObject;e++;return a}function b(){var a=l[m]=l[m]||new THREE.RenderableVertex;m++;return a}function c(a,b){return b.z-a.z}function d(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;return e>=0&&f>=0&&g>=0&&h>=0?!0:e<0&&f<0||g<0&&h<0?!1:(e<0?c=Math.max(c,e/(e-f)):f<0&&(d=Math.min(d,e/(e-f))),g<0?c=Math.max(c,g/(g-h)):h<0&&(d=Math.min(d,g/(g-h))),d<c?!1:(a.lerpSelf(b,c),b.lerpSelf(a,1-d),!0))}var f,e,g=[],h,m,l=[],
j,i,n=[],o,p=[],k,s,K=[],C,Q,O=[],w={objects:[],sprites:[],lights:[],elements:[]},F=new THREE.Vector3,z=new THREE.Vector4,D=new THREE.Matrix4,u=new THREE.Matrix4,r=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],E=new THREE.Vector4,N=new THREE.Vector4;this.computeFrustum=function(a){r[0].set(a.n41-a.n11,a.n42-a.n12,a.n43-a.n13,a.n44-a.n14);r[1].set(a.n41+a.n11,a.n42+a.n12,a.n43+a.n13,a.n44+a.n14);r[2].set(a.n41+a.n21,a.n42+a.n22,a.n43+
a.n23,a.n44+a.n24);r[3].set(a.n41-a.n21,a.n42-a.n22,a.n43-a.n23,a.n44-a.n24);r[4].set(a.n41-a.n31,a.n42-a.n32,a.n43-a.n33,a.n44-a.n34);r[5].set(a.n41+a.n31,a.n42+a.n32,a.n43+a.n33,a.n44+a.n34);for(a=0;a<6;a++){var b=r[a];b.divideScalar(Math.sqrt(b.x*b.x+b.y*b.y+b.z*b.z))}};this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);D.multiply(b.projectionMatrix,b.matrixWorldInverse);D.multiplyVector3(a);return a};this.unprojectVector=function(a,b){b.projectionMatrixInverse.getInverse(b.projectionMatrix);
D.multiply(b.matrixWorld,b.projectionMatrixInverse);D.multiplyVector3(a);return a};this.pickingRay=function(a,b){var c;a.z=-1;c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.subSelf(a).normalize();return new THREE.Ray(a,c)};this.projectGraph=function(b,d){e=0;w.objects.length=0;w.sprites.length=0;w.lights.length=0;var g=function(b){if(b.visible!==!1){var c;if(c=b instanceof THREE.Mesh||b instanceof THREE.Line)if(!(c=b.frustumCulled===!1))a:{for(var d=b.matrixWorld,
e=-b.geometry.boundingSphere.radius*Math.max(b.scale.x,Math.max(b.scale.y,b.scale.z)),h=0;h<6;h++)if(c=r[h].x*d.n14+r[h].y*d.n24+r[h].z*d.n34+r[h].w,c<=e){c=!1;break a}c=!0}c?(D.multiplyVector3(F.copy(b.position)),f=a(),f.object=b,f.z=F.z,w.objects.push(f)):b instanceof THREE.Sprite||b instanceof THREE.Particle?(D.multiplyVector3(F.copy(b.position)),f=a(),f.object=b,f.z=F.z,w.sprites.push(f)):b instanceof THREE.Light&&w.lights.push(b);c=0;for(d=b.children.length;c<d;c++)g(b.children[c])}};g(b);d&&
w.objects.sort(c);return w};this.projectScene=function(a,e,f){var g=e.near,r=e.far,F,L,B,S,v,R,P,V,J,t,A,x,y,M,la,fa;Q=s=o=i=0;w.elements.length=0;e.parent===void 0&&(console.warn("DEPRECATED: Camera hasn't been added to a Scene. Adding it..."),a.add(e));a.updateMatrixWorld();e.matrixWorldInverse.getInverse(e.matrixWorld);D.multiply(e.projectionMatrix,e.matrixWorldInverse);this.computeFrustum(D);w=this.projectGraph(a,!1);a=0;for(F=w.objects.length;a<F;a++)if(J=w.objects[a].object,t=J.matrixWorld,
x=J.material,m=0,J instanceof THREE.Mesh){A=J.geometry;y=J.geometry.materials;S=A.vertices;M=A.faces;la=A.faceVertexUvs;A=J.matrixRotationWorld.extractRotation(t);L=0;for(B=S.length;L<B;L++)h=b(),h.positionWorld.copy(S[L].position),t.multiplyVector3(h.positionWorld),h.positionScreen.copy(h.positionWorld),D.multiplyVector4(h.positionScreen),h.positionScreen.x/=h.positionScreen.w,h.positionScreen.y/=h.positionScreen.w,h.visible=h.positionScreen.z>g&&h.positionScreen.z<r;S=0;for(L=M.length;S<L;S++){B=
M[S];if(B instanceof THREE.Face3)if(v=l[B.a],R=l[B.b],P=l[B.c],v.visible&&R.visible&&P.visible&&(J.doubleSided||J.flipSided!=(P.positionScreen.x-v.positionScreen.x)*(R.positionScreen.y-v.positionScreen.y)-(P.positionScreen.y-v.positionScreen.y)*(R.positionScreen.x-v.positionScreen.x)<0))V=n[i]=n[i]||new THREE.RenderableFace3,i++,j=V,j.v1.copy(v),j.v2.copy(R),j.v3.copy(P);else continue;else if(B instanceof THREE.Face4)if(v=l[B.a],R=l[B.b],P=l[B.c],V=l[B.d],v.visible&&R.visible&&P.visible&&V.visible&&
(J.doubleSided||J.flipSided!=((V.positionScreen.x-v.positionScreen.x)*(R.positionScreen.y-v.positionScreen.y)-(V.positionScreen.y-v.positionScreen.y)*(R.positionScreen.x-v.positionScreen.x)<0||(R.positionScreen.x-P.positionScreen.x)*(V.positionScreen.y-P.positionScreen.y)-(R.positionScreen.y-P.positionScreen.y)*(V.positionScreen.x-P.positionScreen.x)<0)))fa=p[o]=p[o]||new THREE.RenderableFace4,o++,j=fa,j.v1.copy(v),j.v2.copy(R),j.v3.copy(P),j.v4.copy(V);else continue;j.normalWorld.copy(B.normal);
A.multiplyVector3(j.normalWorld);j.centroidWorld.copy(B.centroid);t.multiplyVector3(j.centroidWorld);j.centroidScreen.copy(j.centroidWorld);D.multiplyVector3(j.centroidScreen);P=B.vertexNormals;v=0;for(R=P.length;v<R;v++)V=j.vertexNormalsWorld[v],V.copy(P[v]),A.multiplyVector3(V);v=0;for(R=la.length;v<R;v++)if(fa=la[v][S]){P=0;for(V=fa.length;P<V;P++)j.uvs[v][P]=fa[P]}j.material=x;j.faceMaterial=B.materialIndex!==null?y[B.materialIndex]:null;j.z=j.centroidScreen.z;w.elements.push(j)}}else if(J instanceof
THREE.Line){u.multiply(D,t);S=J.geometry.vertices;v=b();v.positionScreen.copy(S[0].position);u.multiplyVector4(v.positionScreen);L=1;for(B=S.length;L<B;L++)if(v=b(),v.positionScreen.copy(S[L].position),u.multiplyVector4(v.positionScreen),R=l[m-2],E.copy(v.positionScreen),N.copy(R.positionScreen),d(E,N))E.multiplyScalar(1/E.w),N.multiplyScalar(1/N.w),J=K[s]=K[s]||new THREE.RenderableLine,s++,k=J,k.v1.positionScreen.copy(E),k.v2.positionScreen.copy(N),k.z=Math.max(E.z,N.z),k.material=x,w.elements.push(k)}a=
0;for(F=w.sprites.length;a<F;a++)if(J=w.sprites[a].object,t=J.matrixWorld,J instanceof THREE.Particle&&(z.set(t.n14,t.n24,t.n34,1),D.multiplyVector4(z),z.z/=z.w,z.z>0&&z.z<1))g=O[Q]=O[Q]||new THREE.RenderableParticle,Q++,C=g,C.x=z.x/z.w,C.y=z.y/z.w,C.z=z.z,C.rotation=J.rotation.z,C.scale.x=J.scale.x*Math.abs(C.x-(z.x+e.projectionMatrix.n11)/(z.w+e.projectionMatrix.n14)),C.scale.y=J.scale.y*Math.abs(C.y-(z.y+e.projectionMatrix.n22)/(z.w+e.projectionMatrix.n24)),C.material=J.material,w.elements.push(C);
f&&w.elements.sort(c);return w}};THREE.Quaternion=function(a,b,c,d){this.set(a||0,b||0,c||0,d!==void 0?d:1)};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w;return this},setFromEuler:function(a){var b=Math.PI/360,c=a.x*b,d=a.y*b,f=a.z*b,a=Math.cos(d),d=Math.sin(d),b=Math.cos(-f),f=Math.sin(-f),e=Math.cos(c),c=Math.sin(c),g=a*b,h=d*f;this.w=g*e-h*c;this.x=g*c+h*e;this.y=d*b*e+a*f*c;this.z=a*f*e-d*b*c;return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);
this.x=a.x*d;this.y=a.y*d;this.z=a.z*d;this.w=Math.cos(c);return this},setFromRotationMatrix:function(a){var b=Math.pow(a.determinant(),1/3);this.w=Math.sqrt(Math.max(0,b+a.n11+a.n22+a.n33))/2;this.x=Math.sqrt(Math.max(0,b+a.n11-a.n22-a.n33))/2;this.y=Math.sqrt(Math.max(0,b-a.n11+a.n22-a.n33))/2;this.z=Math.sqrt(Math.max(0,b-a.n11-a.n22+a.n33))/2;this.x=a.n32-a.n23<0?-Math.abs(this.x):Math.abs(this.x);this.y=a.n13-a.n31<0?-Math.abs(this.y):Math.abs(this.y);this.z=a.n21-a.n12<0?-Math.abs(this.z):Math.abs(this.z);
this.normalize();return this},calculateW:function(){this.w=-Math.sqrt(Math.abs(1-this.x*this.x-this.y*this.y-this.z*this.z));return this},inverse:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);a===0?this.w=this.z=this.y=this.x=0:(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a);return this},multiplySelf:function(a){var b=
this.x,c=this.y,d=this.z,f=this.w,e=a.x,g=a.y,h=a.z,a=a.w;this.x=b*a+f*e+c*h-d*g;this.y=c*a+f*g+d*e-b*h;this.z=d*a+f*h+b*g-c*e;this.w=f*a-b*e-c*g-d*h;return this},multiply:function(a,b){this.x=a.x*b.w+a.y*b.z-a.z*b.y+a.w*b.x;this.y=-a.x*b.z+a.y*b.w+a.z*b.x+a.w*b.y;this.z=a.x*b.y-a.y*b.x+a.z*b.w+a.w*b.z;this.w=-a.x*b.x-a.y*b.y-a.z*b.z+a.w*b.w;return this},multiplyVector3:function(a,b){b||(b=a);var c=a.x,d=a.y,f=a.z,e=this.x,g=this.y,h=this.z,m=this.w,l=m*c+g*f-h*d,j=m*d+h*c-e*f,i=m*f+e*d-g*c,c=-e*
c-g*d-h*f;b.x=l*m+c*-e+j*-h-i*-g;b.y=j*m+c*-g+i*-e-l*-h;b.z=i*m+c*-h+l*-g-j*-e;return b}};
THREE.Quaternion.slerp=function(a,b,c,d){var f=a.w*b.w+a.x*b.x+a.y*b.y+a.z*b.z;f<0?(c.w=-b.w,c.x=-b.x,c.y=-b.y,c.z=-b.z,f=-f):c.copy(b);if(Math.abs(f)>=1)return c.w=a.w,c.x=a.x,c.y=a.y,c.z=a.z,c;var e=Math.acos(f),f=Math.sqrt(1-f*f);if(Math.abs(f)<0.001)return c.w=0.5*(a.w+b.w),c.x=0.5*(a.x+b.x),c.y=0.5*(a.y+b.y),c.z=0.5*(a.z+b.z),c;b=Math.sin((1-d)*e)/f;d=Math.sin(d*e)/f;c.w=a.w*b+c.w*d;c.x=a.x*b+c.x*d;c.y=a.y*b+c.y*d;c.z=a.z*b+c.z*d;return c};THREE.Vertex=function(a){this.position=a||new THREE.Vector3};
THREE.Face3=function(a,b,c,d,f,e){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=f instanceof THREE.Color?f:new THREE.Color;this.vertexColors=f instanceof Array?f:[];this.vertexTangents=[];this.materialIndex=e;this.centroid=new THREE.Vector3};
THREE.Face4=function(a,b,c,d,f,e,g){this.a=a;this.b=b;this.c=c;this.d=d;this.normal=f instanceof THREE.Vector3?f:new THREE.Vector3;this.vertexNormals=f instanceof Array?f:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=g;this.centroid=new THREE.Vector3};THREE.UV=function(a,b){this.u=a||0;this.v=b||0};
THREE.UV.prototype={constructor:THREE.UV,set:function(a,b){this.u=a;this.v=b;return this},copy:function(a){this.u=a.u;this.v=a.v;return this},clone:function(){return new THREE.UV(this.u,this.v)}};
THREE.Geometry=function(){this.id=THREE.GeometryCount++;this.vertices=[];this.colors=[];this.materials=[];this.faces=[];this.faceUvs=[[]];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.dynamic=this.hasTangents=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){var b=new THREE.Matrix4;b.extractRotation(a,new THREE.Vector3(1,1,1));for(var c=0,d=this.vertices.length;c<d;c++)a.multiplyVector3(this.vertices[c].position);c=0;for(d=this.faces.length;c<d;c++){var f=this.faces[c];b.multiplyVector3(f.normal);for(var e=0,g=f.vertexNormals.length;e<g;e++)b.multiplyVector3(f.vertexNormals[e]);a.multiplyVector3(f.centroid)}},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<
b;a++)c=this.faces[a],c.centroid.set(0,0,0),c instanceof THREE.Face3?(c.centroid.addSelf(this.vertices[c.a].position),c.centroid.addSelf(this.vertices[c.b].position),c.centroid.addSelf(this.vertices[c.c].position),c.centroid.divideScalar(3)):c instanceof THREE.Face4&&(c.centroid.addSelf(this.vertices[c.a].position),c.centroid.addSelf(this.vertices[c.b].position),c.centroid.addSelf(this.vertices[c.c].position),c.centroid.addSelf(this.vertices[c.d].position),c.centroid.divideScalar(4))},computeFaceNormals:function(){var a,
b,c,d,f,e,g=new THREE.Vector3,h=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],d=this.vertices[c.a],f=this.vertices[c.b],e=this.vertices[c.c],g.sub(e.position,f.position),h.sub(d.position,f.position),g.crossSelf(h),g.isZero()||g.normalize(),c.normal.copy(g)},computeVertexNormals:function(){var a,b,c,d;if(this.__tmpVertices===void 0){d=this.__tmpVertices=Array(this.vertices.length);a=0;for(b=this.vertices.length;a<b;a++)d[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)if(c=
this.faces[a],c instanceof THREE.Face3)c.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];else if(c instanceof THREE.Face4)c.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3]}else{d=this.__tmpVertices;a=0;for(b=this.vertices.length;a<b;a++)d[a].set(0,0,0)}a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c instanceof THREE.Face3?(d[c.a].addSelf(c.normal),d[c.b].addSelf(c.normal),d[c.c].addSelf(c.normal)):c instanceof THREE.Face4&&(d[c.a].addSelf(c.normal),
d[c.b].addSelf(c.normal),d[c.c].addSelf(c.normal),d[c.d].addSelf(c.normal));a=0;for(b=this.vertices.length;a<b;a++)d[a].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c instanceof THREE.Face3?(c.vertexNormals[0].copy(d[c.a]),c.vertexNormals[1].copy(d[c.b]),c.vertexNormals[2].copy(d[c.c])):c instanceof THREE.Face4&&(c.vertexNormals[0].copy(d[c.a]),c.vertexNormals[1].copy(d[c.b]),c.vertexNormals[2].copy(d[c.c]),c.vertexNormals[3].copy(d[c.d]))},computeTangents:function(){function a(a,
b,c,d,e,f,D){h=a.vertices[b].position;m=a.vertices[c].position;l=a.vertices[d].position;j=g[e];i=g[f];n=g[D];o=m.x-h.x;p=l.x-h.x;k=m.y-h.y;s=l.y-h.y;K=m.z-h.z;C=l.z-h.z;Q=i.u-j.u;O=n.u-j.u;w=i.v-j.v;F=n.v-j.v;z=1/(Q*F-O*w);E.set((F*o-w*p)*z,(F*k-w*s)*z,(F*K-w*C)*z);N.set((Q*p-O*o)*z,(Q*s-O*k)*z,(Q*C-O*K)*z);u[b].addSelf(E);u[c].addSelf(E);u[d].addSelf(E);r[b].addSelf(N);r[c].addSelf(N);r[d].addSelf(N)}var b,c,d,f,e,g,h,m,l,j,i,n,o,p,k,s,K,C,Q,O,w,F,z,D,u=[],r=[],E=new THREE.Vector3,N=new THREE.Vector3,
W=new THREE.Vector3,da=new THREE.Vector3,G=new THREE.Vector3;b=0;for(c=this.vertices.length;b<c;b++)u[b]=new THREE.Vector3,r[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)e=this.faces[b],g=this.faceVertexUvs[0][b],e instanceof THREE.Face3?a(this,e.a,e.b,e.c,0,1,2):e instanceof THREE.Face4&&(a(this,e.a,e.b,e.c,0,1,2),a(this,e.a,e.b,e.d,0,1,3));var H=["a","b","c","d"];b=0;for(c=this.faces.length;b<c;b++){e=this.faces[b];for(d=0;d<e.vertexNormals.length;d++)G.copy(e.vertexNormals[d]),f=e[H[d]],
D=u[f],W.copy(D),W.subSelf(G.multiplyScalar(G.dot(D))).normalize(),da.cross(e.vertexNormals[d],D),f=da.dot(r[f]),f=f<0?-1:1,e.vertexTangents[d]=new THREE.Vector4(W.x,W.y,W.z,f)}this.hasTangents=!0},computeBoundingBox:function(){var a;if(this.vertices.length>0){this.boundingBox={x:[this.vertices[0].position.x,this.vertices[0].position.x],y:[this.vertices[0].position.y,this.vertices[0].position.y],z:[this.vertices[0].position.z,this.vertices[0].position.z]};for(var b=1,c=this.vertices.length;b<c;b++){a=
this.vertices[b];if(a.position.x<this.boundingBox.x[0])this.boundingBox.x[0]=a.position.x;else if(a.position.x>this.boundingBox.x[1])this.boundingBox.x[1]=a.position.x;if(a.position.y<this.boundingBox.y[0])this.boundingBox.y[0]=a.position.y;else if(a.position.y>this.boundingBox.y[1])this.boundingBox.y[1]=a.position.y;if(a.position.z<this.boundingBox.z[0])this.boundingBox.z[0]=a.position.z;else if(a.position.z>this.boundingBox.z[1])this.boundingBox.z[1]=a.position.z}}},computeBoundingSphere:function(){for(var a=
0,b=0,c=this.vertices.length;b<c;b++)a=Math.max(a,this.vertices[b].position.length());this.boundingSphere={radius:a}},mergeVertices:function(){var a={},b=[],c=[],d,f=Math.pow(10,4),e,g;e=0;for(g=this.vertices.length;e<g;e++)d=this.vertices[e].position,d=[Math.round(d.x*f),Math.round(d.y*f),Math.round(d.z*f)].join("_"),a[d]===void 0?(a[d]=e,b.push(this.vertices[e]),c[e]=b.length-1):c[e]=c[a[d]];e=0;for(g=this.faces.length;e<g;e++)if(a=this.faces[e],a instanceof THREE.Face3)a.a=c[a.a],a.b=c[a.b],a.c=
c[a.c];else if(a instanceof THREE.Face4)a.a=c[a.a],a.b=c[a.b],a.c=c[a.c],a.d=c[a.d];this.vertices=b}};THREE.GeometryCount=0;THREE.Camera=function(){if(arguments.length)return console.warn("DEPRECATED: Camera() is now PerspectiveCamera() or OrthographicCamera()."),new THREE.PerspectiveCamera(arguments[0],arguments[1],arguments[2],arguments[3]);THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4;this.projectionMatrixInverse=new THREE.Matrix4};
THREE.Camera.prototype=new THREE.Object3D;THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.lookAt=function(a){this.matrix.lookAt(this.position,a,this.up);this.rotationAutoUpdate&&this.rotation.setRotationFromMatrix(this.matrix)};THREE.OrthographicCamera=function(a,b,c,d,f,e){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=f!==void 0?f:0.1;this.far=e!==void 0?e:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=new THREE.Camera;
THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix=THREE.Matrix4.makeOrtho(this.left,this.right,this.top,this.bottom,this.near,this.far)};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=a!==void 0?a:50;this.aspect=b!==void 0?b:1;this.near=c!==void 0?c:0.1;this.far=d!==void 0?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=new THREE.Camera;
THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;THREE.PerspectiveCamera.prototype.setLens=function(a,b){this.fov=2*Math.atan((b!==void 0?b:43.25)/(a*2));this.fov*=180/Math.PI;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,f,e){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=f;this.height=e;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(this.fov*Math.PI/360)*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix=THREE.Matrix4.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix=THREE.Matrix4.makePerspective(this.fov,this.aspect,this.near,
this.far)};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=new THREE.Object3D;THREE.Light.prototype.constructor=THREE.Light;THREE.Light.prototype.supr=THREE.Object3D.prototype;THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=new THREE.Light;THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;
THREE.DirectionalLight=function(a,b,c){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,1,0);this.intensity=b!==void 0?b:1;this.distance=c!==void 0?c:0};THREE.DirectionalLight.prototype=new THREE.Light;THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,0,0);this.intensity=b!==void 0?b:1;this.distance=c!==void 0?c:0};THREE.PointLight.prototype=new THREE.Light;
THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.Material=function(a){this.name="";this.id=THREE.MaterialCount++;a=a||{};this.opacity=a.opacity!==void 0?a.opacity:1;this.transparent=a.transparent!==void 0?a.transparent:!1;this.blending=a.blending!==void 0?a.blending:THREE.NormalBlending;this.depthTest=a.depthTest!==void 0?a.depthTest:!0;this.depthWrite=a.depthWrite!==void 0?a.depthWrite:!0;this.polygonOffset=a.polygonOffset!==void 0?a.polygonOffset:!1;this.polygonOffsetFactor=a.polygonOffsetFactor!==void 0?a.polygonOffsetFactor:0;this.polygonOffsetUnits=
a.polygonOffsetUnits!==void 0?a.polygonOffsetUnits:0;this.alphaTest=a.alphaTest!==void 0?a.alphaTest:0;this.overdraw=a.overdraw!==void 0?a.overdraw:!1};THREE.MaterialCount=0;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NormalBlending=0;THREE.AdditiveBlending=1;THREE.SubtractiveBlending=2;THREE.MultiplyBlending=3;THREE.AdditiveAlphaBlending=4;
THREE.LineBasicMaterial=function(a){THREE.Material.call(this,a);a=a||{};this.color=a.color!==void 0?new THREE.Color(a.color):new THREE.Color(16777215);this.linewidth=a.linewidth!==void 0?a.linewidth:1;this.linecap=a.linecap!==void 0?a.linecap:"round";this.linejoin=a.linejoin!==void 0?a.linejoin:"round";this.vertexColors=a.vertexColors?a.vertexColors:!1;this.fog=a.fog!==void 0?a.fog:!0};THREE.LineBasicMaterial.prototype=new THREE.Material;THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this,a);a=a||{};this.color=a.color!==void 0?new THREE.Color(a.color):new THREE.Color(16777215);this.map=a.map!==void 0?a.map:null;this.lightMap=a.lightMap!==void 0?a.lightMap:null;this.envMap=a.envMap!==void 0?a.envMap:null;this.combine=a.combine!==void 0?a.combine:THREE.MultiplyOperation;this.reflectivity=a.reflectivity!==void 0?a.reflectivity:1;this.refractionRatio=a.refractionRatio!==void 0?a.refractionRatio:0.98;this.fog=a.fog!==void 0?a.fog:
!0;this.shading=a.shading!==void 0?a.shading:THREE.SmoothShading;this.wireframe=a.wireframe!==void 0?a.wireframe:!1;this.wireframeLinewidth=a.wireframeLinewidth!==void 0?a.wireframeLinewidth:1;this.wireframeLinecap=a.wireframeLinecap!==void 0?a.wireframeLinecap:"round";this.wireframeLinejoin=a.wireframeLinejoin!==void 0?a.wireframeLinejoin:"round";this.vertexColors=a.vertexColors!==void 0?a.vertexColors:!1;this.skinning=a.skinning!==void 0?a.skinning:!1;this.morphTargets=a.morphTargets!==void 0?a.morphTargets:
!1};THREE.MeshBasicMaterial.prototype=new THREE.Material;THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this,a);a=a||{};this.color=a.color!==void 0?new THREE.Color(a.color):new THREE.Color(16777215);this.ambient=a.ambient!==void 0?new THREE.Color(a.ambient):new THREE.Color(328965);this.map=a.map!==void 0?a.map:null;this.lightMap=a.lightMap!==void 0?a.lightMap:null;this.envMap=a.envMap!==void 0?a.envMap:null;this.combine=a.combine!==void 0?a.combine:THREE.MultiplyOperation;this.reflectivity=a.reflectivity!==void 0?a.reflectivity:1;this.refractionRatio=
a.refractionRatio!==void 0?a.refractionRatio:0.98;this.fog=a.fog!==void 0?a.fog:!0;this.shading=a.shading!==void 0?a.shading:THREE.SmoothShading;this.wireframe=a.wireframe!==void 0?a.wireframe:!1;this.wireframeLinewidth=a.wireframeLinewidth!==void 0?a.wireframeLinewidth:1;this.wireframeLinecap=a.wireframeLinecap!==void 0?a.wireframeLinecap:"round";this.wireframeLinejoin=a.wireframeLinejoin!==void 0?a.wireframeLinejoin:"round";this.vertexColors=a.vertexColors!==void 0?a.vertexColors:!1;this.skinning=
a.skinning!==void 0?a.skinning:!1;this.morphTargets=a.morphTargets!==void 0?a.morphTargets:!1};THREE.MeshLambertMaterial.prototype=new THREE.Material;THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this,a);a=a||{};this.color=a.color!==void 0?new THREE.Color(a.color):new THREE.Color(16777215);this.ambient=a.ambient!==void 0?new THREE.Color(a.ambient):new THREE.Color(328965);this.specular=a.specular!==void 0?new THREE.Color(a.specular):new THREE.Color(1118481);this.shininess=a.shininess!==void 0?a.shininess:30;this.metal=a.metal!==void 0?a.metal:!1;this.perPixel=a.perPixel!==void 0?a.perPixel:!1;this.map=a.map!==void 0?a.map:null;this.lightMap=
a.lightMap!==void 0?a.lightMap:null;this.envMap=a.envMap!==void 0?a.envMap:null;this.combine=a.combine!==void 0?a.combine:THREE.MultiplyOperation;this.reflectivity=a.reflectivity!==void 0?a.reflectivity:1;this.refractionRatio=a.refractionRatio!==void 0?a.refractionRatio:0.98;this.fog=a.fog!==void 0?a.fog:!0;this.shading=a.shading!==void 0?a.shading:THREE.SmoothShading;this.wireframe=a.wireframe!==void 0?a.wireframe:!1;this.wireframeLinewidth=a.wireframeLinewidth!==void 0?a.wireframeLinewidth:1;this.wireframeLinecap=
a.wireframeLinecap!==void 0?a.wireframeLinecap:"round";this.wireframeLinejoin=a.wireframeLinejoin!==void 0?a.wireframeLinejoin:"round";this.vertexColors=a.vertexColors!==void 0?a.vertexColors:!1;this.skinning=a.skinning!==void 0?a.skinning:!1;this.morphTargets=a.morphTargets!==void 0?a.morphTargets:!1};THREE.MeshPhongMaterial.prototype=new THREE.Material;THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this,a);a=a||{};this.shading=a.shading!==void 0?a.shading:THREE.SmoothShading;this.wireframe=a.wireframe!==void 0?a.wireframe:!1;this.wireframeLinewidth=a.wireframeLinewidth!==void 0?a.wireframeLinewidth:1};THREE.MeshDepthMaterial.prototype=new THREE.Material;THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);a=a||{};this.shading=a.shading?a.shading:THREE.FlatShading;this.wireframe=a.wireframe?a.wireframe:!1;this.wireframeLinewidth=a.wireframeLinewidth?a.wireframeLinewidth:1};THREE.MeshNormalMaterial.prototype=new THREE.Material;THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;THREE.MeshFaceMaterial=function(){};
THREE.ParticleBasicMaterial=function(a){THREE.Material.call(this,a);a=a||{};this.color=a.color!==void 0?new THREE.Color(a.color):new THREE.Color(16777215);this.map=a.map!==void 0?a.map:null;this.size=a.size!==void 0?a.size:1;this.sizeAttenuation=a.sizeAttenuation!==void 0?a.sizeAttenuation:!0;this.vertexColors=a.vertexColors!==void 0?a.vertexColors:!1;this.fog=a.fog!==void 0?a.fog:!0};THREE.ParticleBasicMaterial.prototype=new THREE.Material;THREE.ParticleBasicMaterial.prototype.constructor=THREE.ParticleBasicMaterial;
THREE.ParticleCanvasMaterial=function(a){THREE.Material.call(this,a);a=a||{};this.color=a.color!==void 0?new THREE.Color(a.color):new THREE.Color(16777215);this.program=a.program!==void 0?a.program:function(){}};THREE.ParticleCanvasMaterial.prototype=new THREE.Material;THREE.ParticleCanvasMaterial.prototype.constructor=THREE.ParticleCanvasMaterial;
THREE.Texture=function(a,b,c,d,f,e){this.id=THREE.TextureCount++;this.image=a;this.mapping=b!==void 0?b:new THREE.UVMapping;this.wrapS=c!==void 0?c:THREE.ClampToEdgeWrapping;this.wrapT=d!==void 0?d:THREE.ClampToEdgeWrapping;this.magFilter=f!==void 0?f:THREE.LinearFilter;this.minFilter=e!==void 0?e:THREE.LinearMipMapLinearFilter;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.needsUpdate=!1;this.onUpdate=null};
THREE.Texture.prototype={constructor:THREE.Texture,clone:function(){var a=new THREE.Texture(this.image,this.mapping,this.wrapS,this.wrapT,this.magFilter,this.minFilter);a.offset.copy(this.offset);a.repeat.copy(this.repeat);return a}};THREE.TextureCount=0;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.LatitudeReflectionMapping=function(){};THREE.LatitudeRefractionMapping=function(){};
THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.UVMapping=function(){};THREE.RepeatWrapping=0;THREE.ClampToEdgeWrapping=1;THREE.MirroredRepeatWrapping=2;THREE.NearestFilter=3;THREE.NearestMipMapNearestFilter=4;THREE.NearestMipMapLinearFilter=5;THREE.LinearFilter=6;THREE.LinearMipMapNearestFilter=7;THREE.LinearMipMapLinearFilter=8;THREE.ByteType=9;THREE.UnsignedByteType=10;THREE.ShortType=11;THREE.UnsignedShortType=12;THREE.IntType=13;
THREE.UnsignedIntType=14;THREE.FloatType=15;THREE.AlphaFormat=16;THREE.RGBFormat=17;THREE.RGBAFormat=18;THREE.LuminanceFormat=19;THREE.LuminanceAlphaFormat=20;THREE.Particle=function(a){THREE.Object3D.call(this);this.material=a};THREE.Particle.prototype=new THREE.Object3D;THREE.Particle.prototype.constructor=THREE.Particle;THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=a;this.material=b;this.type=c!==void 0?c:THREE.LineStrip;this.geometry&&(this.geometry.boundingSphere||this.geometry.computeBoundingSphere())};
THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=new THREE.Object3D;THREE.Line.prototype.constructor=THREE.Line;
THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=b;if(b instanceof Array)console.warn("DEPRECATED: Mesh material can no longer be an Array. Using material at index 0..."),this.material=b[0];if(this.geometry&&(this.geometry.boundingSphere||this.geometry.computeBoundingSphere(),this.boundRadius=a.boundingSphere.radius,this.geometry.morphTargets.length)){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};
for(var c=0;c<this.geometry.morphTargets.length;c++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[c].name]=c}};THREE.Mesh.prototype=new THREE.Object3D;THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.supr=THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(this.morphTargetDictionary[a]!==void 0)return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=new THREE.Object3D;THREE.Bone.prototype.constructor=THREE.Bone;THREE.Bone.prototype.supr=THREE.Object3D.prototype;
THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiply(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};
THREE.Sprite=function(a){THREE.Object3D.call(this);this.color=a.color!==void 0?new THREE.Color(a.color):new THREE.Color(16777215);this.map=a.map instanceof THREE.Texture?a.map:THREE.ImageUtils.loadTexture(a.map);this.blending=a.blending!==void 0?a.blending:THREE.NormalBlending;this.useScreenCoordinates=a.useScreenCoordinates!==void 0?a.useScreenCoordinates:!0;this.mergeWith3D=a.mergeWith3D!==void 0?a.mergeWith3D:!this.useScreenCoordinates;this.affectedByDistance=a.affectedByDistance!==void 0?a.affectedByDistance:
!this.useScreenCoordinates;this.scaleByViewport=a.scaleByViewport!==void 0?a.scaleByViewport:!this.affectedByDistance;this.alignment=a.alignment instanceof THREE.Vector2?a.alignment:THREE.SpriteAlignment.center;this.rotation3d=this.rotation;this.rotation=0;this.opacity=1;this.uvOffset=new THREE.Vector2(0,0);this.uvScale=new THREE.Vector2(1,1)};THREE.Sprite.prototype=new THREE.Object3D;THREE.Sprite.prototype.constructor=THREE.Sprite;
THREE.Sprite.prototype.updateMatrix=function(){this.matrix.setPosition(this.position);this.rotation3d.set(0,0,this.rotation);this.matrix.setRotationFromEuler(this.rotation3d);if(this.scale.x!==1||this.scale.y!==1)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,this.scale.y);this.matrixWorldNeedsUpdate=!0};THREE.SpriteAlignment={};THREE.SpriteAlignment.topLeft=new THREE.Vector2(1,-1);THREE.SpriteAlignment.topCenter=new THREE.Vector2(0,-1);
THREE.SpriteAlignment.topRight=new THREE.Vector2(-1,-1);THREE.SpriteAlignment.centerLeft=new THREE.Vector2(1,0);THREE.SpriteAlignment.center=new THREE.Vector2(0,0);THREE.SpriteAlignment.centerRight=new THREE.Vector2(-1,0);THREE.SpriteAlignment.bottomLeft=new THREE.Vector2(1,1);THREE.SpriteAlignment.bottomCenter=new THREE.Vector2(0,1);THREE.SpriteAlignment.bottomRight=new THREE.Vector2(-1,1);
THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.matrixAutoUpdate=!1;this.objects=[];this.lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=new THREE.Object3D;THREE.Scene.prototype.constructor=THREE.Scene;
THREE.Scene.prototype.addObject=function(a){if(a instanceof THREE.Light)this.lights.indexOf(a)===-1&&this.lights.push(a);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)&&this.objects.indexOf(a)===-1){this.objects.push(a);this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);b!==-1&&this.__objectsRemoved.splice(b,1)}for(b=0;b<a.children.length;b++)this.addObject(a.children[b])};
THREE.Scene.prototype.removeObject=function(a){if(a instanceof THREE.Light){var b=this.lights.indexOf(a);b!==-1&&this.lights.splice(b,1)}else a instanceof THREE.Camera||(b=this.objects.indexOf(a),b!==-1&&(this.objects.splice(b,1),this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),b!==-1&&this.__objectsAdded.splice(b,1)));for(b=0;b<a.children.length;b++)this.removeObject(a.children[b])};
THREE.CanvasRenderer=function(a){function b(a){if(C!=a)k.globalAlpha=C=a}function c(a){if(Q!=a){switch(a){case THREE.NormalBlending:k.globalCompositeOperation="source-over";break;case THREE.AdditiveBlending:k.globalCompositeOperation="lighter";break;case THREE.SubtractiveBlending:k.globalCompositeOperation="darker"}Q=a}}function d(a){if(O!=a)k.strokeStyle=O=a}function f(a){if(w!=a)k.fillStyle=w=a}var e=this,g,h,m,l=new THREE.Projector,a=a||{},j=a.canvas!==void 0?a.canvas:document.createElement("canvas"),
i,n,o,p,k=j.getContext("2d"),s=new THREE.Color(0),K=0,C=1,Q=0,O=null,w=null,F=null,z=null,D=null,u,r,E,N,W=new THREE.RenderableVertex,da=new THREE.RenderableVertex,G,H,I,Y,L,B,S,v,R,P,V,J,t=new THREE.Color,A=new THREE.Color,x=new THREE.Color,y=new THREE.Color,M=new THREE.Color,la=[],fa=[],ga,ha,ea,aa,Ba,Ca,Da,Ea,Fa,Ga,ma=new THREE.Rectangle,Z=new THREE.Rectangle,X=new THREE.Rectangle,ya=!1,$=new THREE.Color,ta=new THREE.Color,ua=new THREE.Color,T=new THREE.Vector3,qa,ra,za,ba,sa,va,a=16;qa=document.createElement("canvas");
qa.width=qa.height=2;ra=qa.getContext("2d");ra.fillStyle="rgba(0,0,0,1)";ra.fillRect(0,0,2,2);za=ra.getImageData(0,0,2,2);ba=za.data;sa=document.createElement("canvas");sa.width=sa.height=a;va=sa.getContext("2d");va.translate(-a/2,-a/2);va.scale(a,a);a--;this.domElement=j;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.setSize=function(a,b){i=a;n=b;o=Math.floor(i/2);p=Math.floor(n/2);j.width=i;j.height=n;ma.set(-o,-p,o,p);Z.set(-o,-p,o,p);C=1;Q=0;
D=z=F=w=O=null};this.setClearColor=function(a,b){s.copy(a);K=b;Z.set(-o,-p,o,p)};this.setClearColorHex=function(a,b){s.setHex(a);K=b;Z.set(-o,-p,o,p)};this.clear=function(){k.setTransform(1,0,0,-1,o,p);Z.isEmpty()||(Z.minSelf(ma),Z.inflate(2),K<1&&k.clearRect(Math.floor(Z.getX()),Math.floor(Z.getY()),Math.floor(Z.getWidth()),Math.floor(Z.getHeight())),K>0&&(c(THREE.NormalBlending),b(1),f("rgba("+Math.floor(s.r*255)+","+Math.floor(s.g*255)+","+Math.floor(s.b*255)+","+K+")"),k.fillRect(Math.floor(Z.getX()),
Math.floor(Z.getY()),Math.floor(Z.getWidth()),Math.floor(Z.getHeight()))),Z.empty())};this.render=function(a,j){function i(a){var b,c,d,e;$.setRGB(0,0,0);ta.setRGB(0,0,0);ua.setRGB(0,0,0);b=0;for(c=a.length;b<c;b++)d=a[b],e=d.color,d instanceof THREE.AmbientLight?($.r+=e.r,$.g+=e.g,$.b+=e.b):d instanceof THREE.DirectionalLight?(ta.r+=e.r,ta.g+=e.g,ta.b+=e.b):d instanceof THREE.PointLight&&(ua.r+=e.r,ua.g+=e.g,ua.b+=e.b)}function n(a,b,c,d){var e,f,g,h,k,j;e=0;for(f=a.length;e<f;e++)g=a[e],h=g.color,
g instanceof THREE.DirectionalLight?(k=g.matrixWorld.getPosition(),j=c.dot(k),j<=0||(j*=g.intensity,d.r+=h.r*j,d.g+=h.g*j,d.b+=h.b*j)):g instanceof THREE.PointLight&&(k=g.matrixWorld.getPosition(),j=c.dot(T.sub(k,b).normalize()),j<=0||(j*=g.distance==0?1:1-Math.min(b.distanceTo(k)/g.distance,1),j!=0&&(j*=g.intensity,d.r+=h.r*j,d.g+=h.g*j,d.b+=h.b*j)))}function s(a,e,g){b(g.opacity);c(g.blending);var h,j,i,m,q,n;if(g instanceof THREE.ParticleBasicMaterial){if(g.map)m=g.map.image,q=m.width>>1,n=m.height>>
1,g=e.scale.x*o,i=e.scale.y*p,h=g*q,j=i*n,X.set(a.x-h,a.y-j,a.x+h,a.y+j),ma.intersects(X)&&(k.save(),k.translate(a.x,a.y),k.rotate(-e.rotation),k.scale(g,-i),k.translate(-q,-n),k.drawImage(m,0,0),k.restore())}else g instanceof THREE.ParticleCanvasMaterial&&(h=e.scale.x*o,j=e.scale.y*p,X.set(a.x-h,a.y-j,a.x+h,a.y+j),ma.intersects(X)&&(d(g.color.getContextStyle()),f(g.color.getContextStyle()),k.save(),k.translate(a.x,a.y),k.rotate(-e.rotation),k.scale(h,j),g.program(k),k.restore()))}function w(a,e,
f,g){b(g.opacity);c(g.blending);k.beginPath();k.moveTo(a.positionScreen.x,a.positionScreen.y);k.lineTo(e.positionScreen.x,e.positionScreen.y);k.closePath();if(g instanceof THREE.LineBasicMaterial){a=g.linewidth;if(F!=a)k.lineWidth=F=a;a=g.linecap;if(z!=a)k.lineCap=z=a;a=g.linejoin;if(D!=a)k.lineJoin=D=a;d(g.color.getContextStyle());k.stroke();X.inflate(g.linewidth*2)}}function C(a,d,f,g,h,k,i,q){e.info.render.vertices+=3;e.info.render.faces++;b(q.opacity);c(q.blending);G=a.positionScreen.x;H=a.positionScreen.y;
I=d.positionScreen.x;Y=d.positionScreen.y;L=f.positionScreen.x;B=f.positionScreen.y;K(G,H,I,Y,L,B);if(q instanceof THREE.MeshBasicMaterial)if(q.map)q.map.mapping instanceof THREE.UVMapping&&(aa=i.uvs[0],Aa(G,H,I,Y,L,B,aa[g].u,aa[g].v,aa[h].u,aa[h].v,aa[k].u,aa[k].v,q.map));else if(q.envMap){if(q.envMap.mapping instanceof THREE.SphericalReflectionMapping)a=j.matrixWorldInverse,T.copy(i.vertexNormalsWorld[g]),Ba=(T.x*a.n11+T.y*a.n12+T.z*a.n13)*0.5+0.5,Ca=-(T.x*a.n21+T.y*a.n22+T.z*a.n23)*0.5+0.5,T.copy(i.vertexNormalsWorld[h]),
Da=(T.x*a.n11+T.y*a.n12+T.z*a.n13)*0.5+0.5,Ea=-(T.x*a.n21+T.y*a.n22+T.z*a.n23)*0.5+0.5,T.copy(i.vertexNormalsWorld[k]),Fa=(T.x*a.n11+T.y*a.n12+T.z*a.n13)*0.5+0.5,Ga=-(T.x*a.n21+T.y*a.n22+T.z*a.n23)*0.5+0.5,Aa(G,H,I,Y,L,B,Ba,Ca,Da,Ea,Fa,Ga,q.envMap)}else q.wireframe?ja(q.color,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):ia(q.color);else if(q instanceof THREE.MeshLambertMaterial)q.map&&!q.wireframe&&(q.map.mapping instanceof THREE.UVMapping&&(aa=i.uvs[0],Aa(G,H,I,Y,L,B,aa[g].u,aa[g].v,
aa[h].u,aa[h].v,aa[k].u,aa[k].v,q.map)),c(THREE.SubtractiveBlending)),ya?!q.wireframe&&q.shading==THREE.SmoothShading&&i.vertexNormalsWorld.length==3?(A.r=x.r=y.r=$.r,A.g=x.g=y.g=$.g,A.b=x.b=y.b=$.b,n(m,i.v1.positionWorld,i.vertexNormalsWorld[0],A),n(m,i.v2.positionWorld,i.vertexNormalsWorld[1],x),n(m,i.v3.positionWorld,i.vertexNormalsWorld[2],y),A.r=Math.max(0,Math.min(q.color.r*A.r,1)),A.g=Math.max(0,Math.min(q.color.g*A.g,1)),A.b=Math.max(0,Math.min(q.color.b*A.b,1)),x.r=Math.max(0,Math.min(q.color.r*
x.r,1)),x.g=Math.max(0,Math.min(q.color.g*x.g,1)),x.b=Math.max(0,Math.min(q.color.b*x.b,1)),y.r=Math.max(0,Math.min(q.color.r*y.r,1)),y.g=Math.max(0,Math.min(q.color.g*y.g,1)),y.b=Math.max(0,Math.min(q.color.b*y.b,1)),M.r=(x.r+y.r)*0.5,M.g=(x.g+y.g)*0.5,M.b=(x.b+y.b)*0.5,ea=wa(A,x,y,M),oa(G,H,I,Y,L,B,0,0,1,0,0,1,ea)):(t.r=$.r,t.g=$.g,t.b=$.b,n(m,i.centroidWorld,i.normalWorld,t),t.r=Math.max(0,Math.min(q.color.r*t.r,1)),t.g=Math.max(0,Math.min(q.color.g*t.g,1)),t.b=Math.max(0,Math.min(q.color.b*t.b,
1)),q.wireframe?ja(t,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):ia(t)):q.wireframe?ja(q.color,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):ia(q.color);else if(q instanceof THREE.MeshDepthMaterial)ga=j.near,ha=j.far,A.r=A.g=A.b=1-na(a.positionScreen.z,ga,ha),x.r=x.g=x.b=1-na(d.positionScreen.z,ga,ha),y.r=y.g=y.b=1-na(f.positionScreen.z,ga,ha),M.r=(x.r+y.r)*0.5,M.g=(x.g+y.g)*0.5,M.b=(x.b+y.b)*0.5,ea=wa(A,x,y,M),oa(G,H,I,Y,L,B,0,0,1,0,0,1,ea);else if(q instanceof THREE.MeshNormalMaterial)t.r=
pa(i.normalWorld.x),t.g=pa(i.normalWorld.y),t.b=pa(i.normalWorld.z),q.wireframe?ja(t,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):ia(t)}function Q(a,d,f,g,h,k,i,q,o){e.info.render.vertices+=4;e.info.render.faces++;b(q.opacity);c(q.blending);if(q.map||q.envMap)C(a,d,g,0,1,3,i,q,o),C(h,f,k,1,2,3,i,q,o);else if(G=a.positionScreen.x,H=a.positionScreen.y,I=d.positionScreen.x,Y=d.positionScreen.y,L=f.positionScreen.x,B=f.positionScreen.y,S=g.positionScreen.x,v=g.positionScreen.y,R=h.positionScreen.x,
P=h.positionScreen.y,V=k.positionScreen.x,J=k.positionScreen.y,q instanceof THREE.MeshBasicMaterial)O(G,H,I,Y,L,B,S,v),q.wireframe?ja(q.color,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):ia(q.color);else if(q instanceof THREE.MeshLambertMaterial)ya?!q.wireframe&&q.shading==THREE.SmoothShading&&i.vertexNormalsWorld.length==4?(A.r=x.r=y.r=M.r=$.r,A.g=x.g=y.g=M.g=$.g,A.b=x.b=y.b=M.b=$.b,n(m,i.v1.positionWorld,i.vertexNormalsWorld[0],A),n(m,i.v2.positionWorld,i.vertexNormalsWorld[1],x),
n(m,i.v4.positionWorld,i.vertexNormalsWorld[3],y),n(m,i.v3.positionWorld,i.vertexNormalsWorld[2],M),A.r=Math.max(0,Math.min(q.color.r*A.r,1)),A.g=Math.max(0,Math.min(q.color.g*A.g,1)),A.b=Math.max(0,Math.min(q.color.b*A.b,1)),x.r=Math.max(0,Math.min(q.color.r*x.r,1)),x.g=Math.max(0,Math.min(q.color.g*x.g,1)),x.b=Math.max(0,Math.min(q.color.b*x.b,1)),y.r=Math.max(0,Math.min(q.color.r*y.r,1)),y.g=Math.max(0,Math.min(q.color.g*y.g,1)),y.b=Math.max(0,Math.min(q.color.b*y.b,1)),M.r=Math.max(0,Math.min(q.color.r*
M.r,1)),M.g=Math.max(0,Math.min(q.color.g*M.g,1)),M.b=Math.max(0,Math.min(q.color.b*M.b,1)),ea=wa(A,x,y,M),K(G,H,I,Y,S,v),oa(G,H,I,Y,S,v,0,0,1,0,0,1,ea),K(R,P,L,B,V,J),oa(R,P,L,B,V,J,1,0,1,1,0,1,ea)):(t.r=$.r,t.g=$.g,t.b=$.b,n(m,i.centroidWorld,i.normalWorld,t),t.r=Math.max(0,Math.min(q.color.r*t.r,1)),t.g=Math.max(0,Math.min(q.color.g*t.g,1)),t.b=Math.max(0,Math.min(q.color.b*t.b,1)),O(G,H,I,Y,L,B,S,v),q.wireframe?ja(t,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):ia(t)):(O(G,H,I,
Y,L,B,S,v),q.wireframe?ja(q.color,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):ia(q.color));else if(q instanceof THREE.MeshNormalMaterial)t.r=pa(i.normalWorld.x),t.g=pa(i.normalWorld.y),t.b=pa(i.normalWorld.z),O(G,H,I,Y,L,B,S,v),q.wireframe?ja(t,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):ia(t);else if(q instanceof THREE.MeshDepthMaterial)ga=j.near,ha=j.far,A.r=A.g=A.b=1-na(a.positionScreen.z,ga,ha),x.r=x.g=x.b=1-na(d.positionScreen.z,ga,ha),y.r=y.g=y.b=1-na(g.positionScreen.z,
ga,ha),M.r=M.g=M.b=1-na(f.positionScreen.z,ga,ha),ea=wa(A,x,y,M),K(G,H,I,Y,S,v),oa(G,H,I,Y,S,v,0,0,1,0,0,1,ea),K(R,P,L,B,V,J),oa(R,P,L,B,V,J,1,0,1,1,0,1,ea)}function K(a,b,c,d,e,f){k.beginPath();k.moveTo(a,b);k.lineTo(c,d);k.lineTo(e,f);k.lineTo(a,b);k.closePath()}function O(a,b,c,d,e,f,g,h){k.beginPath();k.moveTo(a,b);k.lineTo(c,d);k.lineTo(e,f);k.lineTo(g,h);k.lineTo(a,b);k.closePath()}function ja(a,b,c,e){if(F!=b)k.lineWidth=F=b;if(z!=c)k.lineCap=z=c;if(D!=e)k.lineJoin=D=e;d(a.getContextStyle());
k.stroke();X.inflate(b*2)}function ia(a){f(a.getContextStyle());k.fill()}function Aa(a,b,c,d,e,g,h,i,j,m,o,n,l){if(l.image.width!=0){if(l.needsUpdate==!0||la[l.id]==void 0){var p=l.wrapS==THREE.RepeatWrapping,r=l.wrapT==THREE.RepeatWrapping;la[l.id]=k.createPattern(l.image,p&&r?"repeat":p&&!r?"repeat-x":!p&&r?"repeat-y":"no-repeat");l.needsUpdate=!1}f(la[l.id]);var p=l.offset.x/l.repeat.x,r=l.offset.y/l.repeat.y,s=l.image.width*l.repeat.x,u=l.image.height*l.repeat.y,h=(h+p)*s,i=(i+r)*u,j=(j+p)*s,
m=(m+r)*u,o=(o+p)*s,n=(n+r)*u;c-=a;d-=b;e-=a;g-=b;j-=h;m-=i;o-=h;n-=i;p=j*n-o*m;if(p==0){if(fa[l.id]==void 0)b=document.createElement("canvas"),b.width=l.image.width,b.height=l.image.height,a=b.getContext("2d"),a.drawImage(l.image,0,0),fa[l.id]=a.getImageData(0,0,l.image.width,l.image.height).data,delete b;b=fa[l.id];h=(Math.floor(h)+Math.floor(i)*l.image.width)*4;t.setRGB(b[h]/255,b[h+1]/255,b[h+2]/255);ia(t)}else p=1/p,l=(n*c-m*e)*p,m=(n*d-m*g)*p,c=(j*e-o*c)*p,d=(j*g-o*d)*p,a=a-l*h-c*i,h=b-m*h-
d*i,k.save(),k.transform(l,m,c,d,a,h),k.fill(),k.restore()}}function oa(a,b,c,d,e,f,g,h,i,j,l,m,o){var n,p;n=o.width-1;p=o.height-1;g*=n;h*=p;i*=n;j*=p;l*=n;m*=p;c-=a;d-=b;e-=a;f-=b;i-=g;j-=h;l-=g;m-=h;p=1/(i*m-l*j);n=(m*c-j*e)*p;j=(m*d-j*f)*p;c=(i*e-l*c)*p;d=(i*f-l*d)*p;a=a-n*g-c*h;b=b-j*g-d*h;k.save();k.transform(n,j,c,d,a,b);k.clip();k.drawImage(o,0,0);k.restore()}function wa(a,b,c,d){var e=~~(a.r*255),f=~~(a.g*255),a=~~(a.b*255),g=~~(b.r*255),h=~~(b.g*255),b=~~(b.b*255),i=~~(c.r*255),j=~~(c.g*
255),c=~~(c.b*255),k=~~(d.r*255),l=~~(d.g*255),d=~~(d.b*255);ba[0]=e<0?0:e>255?255:e;ba[1]=f<0?0:f>255?255:f;ba[2]=a<0?0:a>255?255:a;ba[4]=g<0?0:g>255?255:g;ba[5]=h<0?0:h>255?255:h;ba[6]=b<0?0:b>255?255:b;ba[8]=i<0?0:i>255?255:i;ba[9]=j<0?0:j>255?255:j;ba[10]=c<0?0:c>255?255:c;ba[12]=k<0?0:k>255?255:k;ba[13]=l<0?0:l>255?255:l;ba[14]=d<0?0:d>255?255:d;ra.putImageData(za,0,0);va.drawImage(qa,0,0);return sa}function na(a,b,c){a=(a-b)/(c-b);return a*a*(3-2*a)}function pa(a){a=(a+1)*0.5;return a<0?0:a>
1?1:a}function ka(a,b){var c=b.x-a.x,d=b.y-a.y,e=c*c+d*d;e!=0&&(e=1/Math.sqrt(e),c*=e,d*=e,b.x+=c,b.y+=d,a.x-=c,a.y-=d)}var xa,Ha,U,ca;this.autoClear?this.clear():k.setTransform(1,0,0,-1,o,p);e.info.render.vertices=0;e.info.render.faces=0;g=l.projectScene(a,j,this.sortElements);h=g.elements;m=g.lights;(ya=m.length>0)&&i(m);xa=0;for(Ha=h.length;xa<Ha;xa++)if(U=h[xa],ca=U.material,ca=ca instanceof THREE.MeshFaceMaterial?U.faceMaterial:ca,!(ca==null||ca.opacity==0)){X.empty();if(U instanceof THREE.RenderableParticle)u=
U,u.x*=o,u.y*=p,s(u,U,ca,a);else if(U instanceof THREE.RenderableLine)u=U.v1,r=U.v2,u.positionScreen.x*=o,u.positionScreen.y*=p,r.positionScreen.x*=o,r.positionScreen.y*=p,X.addPoint(u.positionScreen.x,u.positionScreen.y),X.addPoint(r.positionScreen.x,r.positionScreen.y),ma.intersects(X)&&w(u,r,U,ca,a);else if(U instanceof THREE.RenderableFace3)u=U.v1,r=U.v2,E=U.v3,u.positionScreen.x*=o,u.positionScreen.y*=p,r.positionScreen.x*=o,r.positionScreen.y*=p,E.positionScreen.x*=o,E.positionScreen.y*=p,ca.overdraw&&
(ka(u.positionScreen,r.positionScreen),ka(r.positionScreen,E.positionScreen),ka(E.positionScreen,u.positionScreen)),X.add3Points(u.positionScreen.x,u.positionScreen.y,r.positionScreen.x,r.positionScreen.y,E.positionScreen.x,E.positionScreen.y),ma.intersects(X)&&C(u,r,E,0,1,2,U,ca,a);else if(U instanceof THREE.RenderableFace4)u=U.v1,r=U.v2,E=U.v3,N=U.v4,u.positionScreen.x*=o,u.positionScreen.y*=p,r.positionScreen.x*=o,r.positionScreen.y*=p,E.positionScreen.x*=o,E.positionScreen.y*=p,N.positionScreen.x*=
o,N.positionScreen.y*=p,W.positionScreen.copy(r.positionScreen),da.positionScreen.copy(N.positionScreen),ca.overdraw&&(ka(u.positionScreen,r.positionScreen),ka(r.positionScreen,N.positionScreen),ka(N.positionScreen,u.positionScreen),ka(E.positionScreen,W.positionScreen),ka(E.positionScreen,da.positionScreen)),X.addPoint(u.positionScreen.x,u.positionScreen.y),X.addPoint(r.positionScreen.x,r.positionScreen.y),X.addPoint(E.positionScreen.x,E.positionScreen.y),X.addPoint(N.positionScreen.x,N.positionScreen.y),
ma.intersects(X)&&Q(u,r,E,N,W,da,U,ca,a);Z.addRectangle(X)}k.setTransform(1,0,0,1,0,0)}};THREE.RenderableVertex=function(){this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};
THREE.RenderableFace3=function(){this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidWorld=new THREE.Vector3;this.centroidScreen=new THREE.Vector3;this.normalWorld=new THREE.Vector3;this.vertexNormalsWorld=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.faceMaterial=this.material=null;this.uvs=[[]];this.z=null};
THREE.RenderableFace4=function(){this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.v4=new THREE.RenderableVertex;this.centroidWorld=new THREE.Vector3;this.centroidScreen=new THREE.Vector3;this.normalWorld=new THREE.Vector3;this.vertexNormalsWorld=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.faceMaterial=this.material=null;this.uvs=[[]];this.z=null};THREE.RenderableObject=function(){this.z=this.object=null};
THREE.RenderableParticle=function(){this.rotation=this.z=this.y=this.x=null;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.z=null;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.material=null};




// ##############################################################################




// Particle3D class

Particle3D = function (material ) {

    THREE.Particle.call( this, material );
    
    //this.material = material instanceof Array ? material : [ material ];
    
    // define properties
    this.velocity = new THREE.Vector3(0,-5,0); // General Falling Speed 
    this.velocity.rotateX(randomRange(-45,45)); 
    this.velocity.rotateY(randomRange(0,360)); 
    this.gravity = new THREE.Vector3(0,0,0); 
    this.drag = 1; // 0 = Suspension / 1 = Falling 
    // methods... 
    
};

Particle3D.prototype = new THREE.Particle();
Particle3D.prototype.constructor = Particle3D;

Particle3D.prototype.updatePhysics = function() {
    
    this.velocity.multiplyScalar(this.drag); 
    this.velocity.addSelf(this.gravity);
    this.position.addSelf(this.velocity);

}

var TO_RADIANS = Math.PI/180; 

THREE.Vector3.prototype.rotateY = function(angle){
                    
    cosRY = Math.cos(angle * TO_RADIANS);
    sinRY = Math.sin(angle * TO_RADIANS);
    
    var tempz = this.z;; 
    var tempx = this.x; 

    this.x= (tempx*cosRY)+(tempz*sinRY);
    this.z= (tempx*-sinRY)+(tempz*cosRY);


}

THREE.Vector3.prototype.rotateX = function(angle){
                    
    cosRY = Math.cos(angle * TO_RADIANS);
    sinRY = Math.sin(angle * TO_RADIANS);
    
    var tempz = this.z;; 
    var tempy = this.y; 

    this.y= (tempy*cosRY)+(tempz*sinRY);
    this.z= (tempy*-sinRY)+(tempz*cosRY);


}

THREE.Vector3.prototype.rotateZ = function(angle){
                    
    cosRY = Math.cos(angle * TO_RADIANS);
    sinRY = Math.sin(angle * TO_RADIANS);
    
    var tempx = this.x;; 
    var tempy = this.y; 

    this.y= (tempy*cosRY)+(tempx*sinRY);
    this.x= (tempy*-sinRY)+(tempx*cosRY);


}



// returns a random number between the two limits provided 
function randomRange(min, max)
{
    return ((Math.random()*(max-min)) + min); 
}



// ##############################################################################



    var SCREEN_WIDTH = $('#winter').width();
    var SCREEN_HEIGHT = $('#winter').height();
    var container;

    var particle;

    var camera;
    var scene;
    var renderer;

    var mouseX = 0;
    var mouseY = 0;

    var windowHalfX = $('#winter').width() / 2;
    var windowHalfY = $('#winter').height() / 2;

    var particles = []; 
    var particleImage = new Image();
    particleImage.src = 'images/werbeagentur-ingolstadt/snowflake.png'; 
     var snowInterval = null;


    function snowfall() {
// return false;
        SCREEN_WIDTH = $('#winter').width();
        SCREEN_HEIGHT = $('#winter').height();
        windowHalfX = $('#winter').width() / 2;
        windowHalfY = $('#winter').height() / 2;


        container = jQuery('<div>').attr('id','snow');
        container.appendTo('#winter');
        // document.getElementById('winter').appendChild(container);

        camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();
        scene.add(camera);
            
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage) } );
            
        for (var i = 0; i < 150; i++) { // Number of flakes

            particle = new Particle3D( material);
            particle.position.x = Math.random() * 2000 - 1000;
            particle.position.y = Math.random() * 2000 - 1000;
            particle.position.z = Math.random() * 2000 - 1000;
            particle.scale.x = particle.scale.y =  1;
            scene.add( particle );
            
            particles.push(particle); 
        }

        container.append( renderer.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//      document.addEventListener( 'touchstart', onDocumentTouchStart, false );
//      document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        
        snowInterval = setInterval( loop, 1000 / 60 );
        
    }
    function stopSnowfall() {
        clearInterval(snowInterval);    
        jQuery('#winter #snow').remove();
    }

    function onDocumentMouseMove( event ) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;
        }
    }

    function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            mouseY = event.touches[ 0 ].pageY - windowHalfY;
        }
    }

    //

    function loop() {

    for(var i = 0; i<particles.length; i++)
        {

            var particle = particles[i]; 
            particle.updatePhysics(); 

            with(particle.position)
            {
                if(y<-1000) y+=2000; 
                if(x>1000) x-=2000; 
                else if(x<-1000) x+=2000; 
                if(z>1000) z-=2000; 
                else if(z<-1000) z+=2000; 
            }               
        }

        camera.position.x += ( mouseX - camera.position.x ) * 0.05;
        camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
        camera.lookAt(scene.position); 

        renderer.render( scene, camera );

        
    }

        

// ##############################################################################



/*
 *
 * Bubble Engine for Websites - jQuery Plugin (Commercial License)
 * Copyright 2010, SOYOS Online Solutions
 *
 * Purchase Licenses in our Online Shop:
 * http://www.soyos.net/shop/
 *  
 * Project Website:
 * http://www.soyos.net/bubble-engine-plugin-for-jquery.html
 *
 *
 * SOYOS Online Solutions
 * http://www.soyos.net
 *
 * SOYOS Labs
 * http://www.soyos.net/labs.html
 *
 * SOYOS Help & Support
 * http://www.soyos.net/community/
 *
 * SOYOS on Facebook
 * http://facebook.com/soyos.net
 *
 *
 * Date: 2011-01-10
 *
*/
(function($){
  $.fn.extend({
    BubbleEngine: function(options) {
      var defaults = {
        particleSizeMin:            0,
        particleSizeMax:            60,
        particleSourceX:            0,
        particleSourceY:            500,
        particleAnimationDuration:  3000,
        particleAnimationVariance:  2000,
        particleScatteringX:        500,
        particleScatteringY:        200,
        particleDirection:          'right' /* 'right', 'left', 'center'*/,
        gravity:                    -100,
        imgSource:                  'images/kunden/bubble.png',
        RenewBubbles:               'on'
      };
      var options = $.extend(defaults, options);
      options.couter = 0;

      //-----------------------------------------------------------------------
      //Public Functions ------------------------------------------------------
      //-----------------------------------------------------------------------
      this.settings = function( particleSizeMin, particleSizeMax, particleSourceX, particleSourceY, particleAnimationDuration, particleAnimationVariance, particleScatteringX, particleScatteringY, particleDirection, imgSource ) {
        if (particleSizeMin)           options.particleSizeMin           = particleSizeMin;
        if (particleSizeMax)           options.particleSizeMax           = particleSizeMax;
        if (particleSourceX)           options.particleSourceX           = particleSourceX;
        if (particleSourceY)           options.particleSourceY           = particleSourceY;
        if (particleAnimationDuration) options.particleAnimationDuration = particleAnimationDuration;
        if (particleAnimationVariance) options.particleAnimationVariance = particleAnimationVariance;
        if (particleScatteringX)       options.particleScatteringX       = particleScatteringX;
        if (particleScatteringY)       options.particleScatteringY       = particleScatteringY;
        if (particleDirection)         options.particleDirection         = particleDirection;
        if (imgSource)                 options.imgSource                 = imgSource;
      }
      this.getConfig = function() {
        ConfigValues = new Array(options.particleSizeMin, options.particleSizeMax, options.particleAnimationDuration, options.particleScatteringX, options.particleScatteringY, options.imgSource);
        return(ConfigValues);
      };
      this.getCounter = function() {
        return(options.couter);
      };
      this.removeBubbles = function() {
        options.RenewBubbles = 'off';
        options.couter = 0;
      };
      this.addBubbles = function(number) {
        if (!number) number = 25;
        options.RenewBubbles = 'on';
        for (i=1;i<=number;i++) {
          options.couter++;
          window.setTimeout(function() {
            GenerateElement();
          }, Math.floor(Math.random()*3000));
        }
      };
      
      //-----------------------------------------------------------------------
      //Private Functions -----------------------------------------------------
      //-----------------------------------------------------------------------
      function GetRandom( min, max ) {
        if( min > max ) {
          return( -1 );
        }
        if( min == max ) {
          return( min );
        }
        return( min + parseInt( Math.random() * ( max-min+1 ) ) );
      }

      //-----------------------------------------------------------------------
      function GenerateElement(){
        var animationEndY     = options.particleSourceY + options.gravity + GetRandom( -options.particleScatteringY, options.particleScatteringY );
        if (options.particleDirection == 'left') {
          var animationEndX     = options.particleSourceX - GetRandom( 0, options.particleScatteringX );
        } else if (options.particleDirection == 'right') {
          var animationEndX     = options.particleSourceX + GetRandom( 0, options.particleScatteringX );
        } else if (options.particleDirection == 'center') {
          var animationEndX     = options.particleSourceX + GetRandom( -options.particleScatteringX, options.particleScatteringX );
        }
        var animationDuration = options.particleAnimationDuration + GetRandom( 0, options.particleAnimationVariance );
        var particleSize      = GetRandom( options.particleSizeMin, options.particleSizeMax )
        var div = jQuery('<img class="bubble '+options.ids+'" src="'+options.imgSource+'">').css({
          position: 'absolute',
          top:      options.particleSourceY,
          left:     options.particleSourceX,
          width:    particleSize,
          height:   particleSize
        }).appendTo('#bubbles');
        div.animate({
          left:     animationEndX,
          top:      [animationEndY, 'easeOutCubic']
        }, {
          queue:    false,
          duration: animationDuration,
          complete: function() {
            $(this).remove();
            if (options.RenewBubbles == 'on') {
              GenerateElement();
            } else {
            }
          }
        }); 
      }     
      
      //-----------------------------------------------------------------------
      return this.each(function() {
        var o =options;
        var obj = $(this);          
        o.ids = Math.floor(Math.random()*1000);
      });
    }
  });
})(jQuery);



// ##############################################################################



/**
 * jQuery Ripples plugin v0.4.0 / http://github.com/sirxemic/jquery.ripples
 * MIT License
 * @author sirxemic / http://sirxemic.com/
 */

+function ($) {

    var gl;
    var $window = $(window); // There is only one window, so why not cache the jQuery-wrapped window?

    function isPercentage(str) {
        return str[str.length - 1] == '%';
    }

    function hasWebGLSupport() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        var result = context && context.getExtension('OES_texture_float');
        return result;
    }

    var supportsWebGL = hasWebGLSupport();

    function createProgram(vertexSource, fragmentSource, uniformValues)
    {
        function compileSource(type, source) {
            var shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                throw new Error('compile error: ' + gl.getShaderInfoLog(shader));
            }
            return shader;
        }

        var program = {};

        program.id = gl.createProgram();
        gl.attachShader(program.id, compileSource(gl.VERTEX_SHADER, vertexSource));
        gl.attachShader(program.id, compileSource(gl.FRAGMENT_SHADER, fragmentSource));
        gl.linkProgram(program.id);
        if (!gl.getProgramParameter(program.id, gl.LINK_STATUS)) {
            throw new Error('link error: ' + gl.getProgramInfoLog(program.id));
        }

        // Fetch the uniform and attribute locations
        program.uniforms = {};
        program.locations = {};
        gl.useProgram(program.id);
        gl.enableVertexAttribArray(0);
        var name, type, regex = /uniform (\w+) (\w+)/g, shaderCode = vertexSource + fragmentSource;
        while ((match = regex.exec(shaderCode)) != null) {
            name = match[2];
            program.locations[name] = gl.getUniformLocation(program.id, name);
        }

        return program;
    }

    function bindTexture(texture, unit) {
        gl.activeTexture(gl.TEXTURE0 + (unit || 0));
        gl.bindTexture(gl.TEXTURE_2D, texture);
    }

    // Extend the css
    $('head').prepend('<style>.jquery-ripples { position: relative; z-index: 0; }</style>');

    // RIPPLES CLASS DEFINITION
    // =========================

    var Ripples = function (el, options) {
        var that = this;

        this.$el = $(el);
        this.$el.addClass('jquery-ripples');

        // If this element doesn't have a background image, don't apply this effect to it
        var backgroundUrl = (/url\(["']?([^"']*)["']?\)/.exec(this.$el.css('background-image')));
        if (backgroundUrl == null) return;
        backgroundUrl = backgroundUrl[1];

        this.interactive = options.interactive;
        this.resolution = options.resolution || 256;
        this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]);

        this.perturbance = options.perturbance;
        this.dropRadius = options.dropRadius;

        var canvas = document.createElement('canvas');
        canvas.width = this.$el.innerWidth();
        canvas.height = this.$el.innerHeight();
        this.canvas = canvas;
        this.$canvas = $(canvas);
        this.$canvas.css({
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
        });

        this.$el.append(canvas);
        this.context = gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        // Load extensions
        gl.getExtension('OES_texture_float');
        var linearSupport = gl.getExtension('OES_texture_float_linear');

        // Init events
        $(window).on('resize', function() {
            if (that.$el.innerWidth() != that.canvas.width || that.$el.innerHeight() != that.canvas.height) {
                canvas.width = that.$el.innerWidth();
                canvas.height = that.$el.innerHeight();
            }
        });

        this.$el.on('mousemove.ripples', function(e) {
            if (that.visible && that.running && that.interactive) that.dropAtMouse(e, that.dropRadius, 0.01);
        }).on('mousedown.ripples', function(e) {
            if (that.visible && that.running && that.interactive) that.dropAtMouse(e, that.dropRadius * 1.5, 0.14);
        });

        this.textures = [];
        this.framebuffers = [];

        for (var i = 0; i < 2; i++) {
            var texture = gl.createTexture();
            var framebuffer = gl.createFramebuffer();

            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            framebuffer.width = this.resolution;
            framebuffer.height = this.resolution;

            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linearSupport ? gl.LINEAR : gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linearSupport ? gl.LINEAR : gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.resolution, this.resolution, 0, gl.RGBA, gl.FLOAT, null);

            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
                throw new Error('Rendering to this texture is not supported (incomplete framebuffer)');
            }

            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            this.textures.push(texture);
            this.framebuffers.push(framebuffer);
        }

        this.running = true;

        // Init GL stuff
        this.quad = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
            +1, -1,
            +1, +1,
            -1, +1
        ]), gl.STATIC_DRAW);

        this.initShaders();

        // Init textures
        var image = new Image;
        image.crossOrigin = '';
        image.onload = function() {
            gl = that.context;

            function isPowerOfTwo(x) {
                return (x & (x - 1)) == 0;
            }

            var wrapping = (isPowerOfTwo(image.width) && isPowerOfTwo(image.height)) ? gl.REPEAT : gl.CLAMP_TO_EDGE;

            that.backgroundWidth = image.width;
            that.backgroundHeight = image.height;

            var texture = gl.createTexture();

            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapping);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapping);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

            that.backgroundTexture = texture;

            // Everything loaded successfully - hide the CSS background image
            that.$el.css('backgroundImage', 'none');
        };
        image.src = backgroundUrl;

        this.visible = true;

        gl.clearColor(0, 0, 0, 0);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        // Init animation
        function step() {
            that.step();
            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    };

    Ripples.DEFAULTS = {
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.03,
        interactive: true
    };

    Ripples.prototype = {

        step: function() {
            gl = this.context;

            if (!this.visible || !this.backgroundTexture) return;

            this.computeTextureBoundaries();

            if (this.running) {
                this.update();
            }

            this.render();
        },

        drawQuad: function() {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
            gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
            gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        },

        render: function() {
            gl.viewport(0, 0, this.canvas.width, this.canvas.height);

            gl.enable(gl.BLEND);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            gl.useProgram(this.renderProgram.id);

            bindTexture(this.backgroundTexture, 0);
            bindTexture(this.textures[0], 1);

            gl.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft);
            gl.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight);
            gl.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio);
            gl.uniform1i(this.renderProgram.locations.samplerBackground, 0);
            gl.uniform1i(this.renderProgram.locations.samplerRipples, 1);

            this.drawQuad();
            gl.disable(gl.BLEND);
        },

        update: function() {
            gl.viewport(0, 0, this.resolution, this.resolution);

            for (var i = 0; i < 2; i++) {
                gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[i]);
                bindTexture(this.textures[1-i]);
                gl.useProgram(this.updateProgram[i].id);

                this.drawQuad();
            }

            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        },

        computeTextureBoundaries: function() {
            var backgroundSize = this.$el.css('background-size');
            var backgroundAttachment = this.$el.css('background-attachment');
            var backgroundPosition = this.$el.css('background-position').split(' ');

            // Here the 'window' is the element which the background adapts to
            // (either the chrome window or some element, depending on attachment)
            var parElement = backgroundAttachment == 'fixed' ? $window : this.$el;
            var winOffset = parElement.offset() || {left: pageXOffset, top: pageYOffset};
            var winWidth = parElement.innerWidth();
            var winHeight = parElement.innerHeight();

            // TODO: background-clip
            if (backgroundSize == 'cover') {
                var scale = Math.max(winWidth / this.backgroundWidth, winHeight / this.backgroundHeight);

                var backgroundWidth = this.backgroundWidth * scale;
                var backgroundHeight = this.backgroundHeight * scale;
            }
            else if (backgroundSize == 'contain') {
                var scale = Math.min(winWidth / this.backgroundWidth, winHeight / this.backgroundHeight);

                var backgroundWidth = this.backgroundWidth * scale;
                var backgroundHeight = this.backgroundHeight * scale;
            }
            else {
                backgroundSize = backgroundSize.split(' ');
                var backgroundWidth = backgroundSize[0] || '';
                var backgroundHeight = backgroundSize[1] || backgroundWidth;

                if (isPercentage(backgroundWidth)) backgroundWidth = winWidth * parseFloat(backgroundWidth) / 100;
                else if (backgroundWidth != 'auto') backgroundWidth = parseFloat(backgroundWidth);

                if (isPercentage(backgroundHeight)) backgroundHeight = winHeight * parseFloat(backgroundHeight) / 100;
                else if (backgroundHeight != 'auto') backgroundHeight = parseFloat(backgroundHeight);

                if (backgroundWidth == 'auto' && backgroundHeight == 'auto') {
                    backgroundWidth = this.backgroundWidth;
                    backgroundHeight = this.backgroundHeight;
                }
                else {
                    if (backgroundWidth == 'auto') backgroundWidth = this.backgroundWidth * (backgroundHeight / this.backgroundHeight);
                    if (backgroundHeight == 'auto') backgroundHeight = this.backgroundHeight * (backgroundWidth / this.backgroundWidth);
                }
            }

            // Compute backgroundX and backgroundY in page coordinates
            var backgroundX = backgroundPosition[0] || '';
            var backgroundY = backgroundPosition[1] || backgroundX;

            if (backgroundX == 'left') backgroundX = winOffset.left;
            else if (backgroundX == 'center') backgroundX = winOffset.left + winWidth / 2 - backgroundWidth / 2;
            else if (backgroundX == 'right') backgroundX = winOffset.left + winWidth - backgroundWidth;
            else if (isPercentage(backgroundX)) {
                backgroundX = winOffset.left + (winWidth - backgroundWidth) * parseFloat(backgroundX) / 100;
            }
            else {
                backgroundX = parseFloat(backgroundX);
            }

            if (backgroundY == 'top') backgroundY = winOffset.top;
            else if (backgroundY == 'center') backgroundY = winOffset.top + winHeight / 2 - backgroundHeight / 2;
            else if (backgroundY == 'bottom') backgroundY = winOffset.top + winHeight - backgroundHeight;
            else if (isPercentage(backgroundY)) {
                backgroundY = winOffset.top + (winHeight - backgroundHeight) * parseFloat(backgroundY) / 100;
            }
            else {
                backgroundY = parseFloat(backgroundY);
            }

            var elementOffset = this.$el.offset();

            this.renderProgram.uniforms.topLeft = new Float32Array([
                (elementOffset.left - backgroundX) / backgroundWidth,
                (elementOffset.top - backgroundY) / backgroundHeight
            ]);
            this.renderProgram.uniforms.bottomRight = new Float32Array([
                this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / backgroundWidth,
                this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / backgroundHeight
            ]);

            var maxSide = Math.max(this.canvas.width, this.canvas.height);

            this.renderProgram.uniforms.containerRatio = new Float32Array([
                this.canvas.width / maxSide,
                this.canvas.height / maxSide
            ]);
        },

        initShaders: function() {
            var vertexShader = [
                'attribute vec2 vertex;',
                'varying vec2 coord;',
                'void main() {',
                    'coord = vertex * 0.5 + 0.5;',
                    'gl_Position = vec4(vertex, 0.0, 1.0);',
                '}'
            ].join('\n');

            this.dropProgram = createProgram(vertexShader, [
                'precision highp float;',

                'const float PI = 3.141592653589793;',
                'uniform sampler2D texture;',
                'uniform vec2 center;',
                'uniform float radius;',
                'uniform float strength;',

                'varying vec2 coord;',

                'void main() {',
                    'vec4 info = texture2D(texture, coord);',

                    'float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);',
                    'drop = 0.5 - cos(drop * PI) * 0.5;',

                    'info.r += drop * strength;',

                    'gl_FragColor = info;',
                '}'
            ].join('\n'));

            this.updateProgram = [0,0];
            this.updateProgram[0] = createProgram(vertexShader, [
                'precision highp float;',

                'uniform sampler2D texture;',
                'uniform vec2 delta;',

                'varying vec2 coord;',

                'void main() {',
                    'vec4 info = texture2D(texture, coord);',

                    'vec2 dx = vec2(delta.x, 0.0);',
                    'vec2 dy = vec2(0.0, delta.y);',

                    'float average = (',
                        'texture2D(texture, coord - dx).r +',
                        'texture2D(texture, coord - dy).r +',
                        'texture2D(texture, coord + dx).r +',
                        'texture2D(texture, coord + dy).r',
                    ') * 0.25;',

                    'info.g += (average - info.r) * 2.0;',
                    'info.g *= 0.995;',
                    'info.r += info.g;',

                    'gl_FragColor = info;',
                '}'
            ].join('\n'));
            gl.uniform2fv(this.updateProgram[0].locations.delta, this.textureDelta);

            this.updateProgram[1] = createProgram(vertexShader, [
                'precision highp float;',

                'uniform sampler2D texture;',
                'uniform vec2 delta;',

                'varying vec2 coord;',

                'void main() {',
                    'vec4 info = texture2D(texture, coord);',

                    'vec3 dx = vec3(delta.x, texture2D(texture, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);',
                    'vec3 dy = vec3(0.0, texture2D(texture, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);',
                    'info.ba = normalize(cross(dy, dx)).xz;',

                    'gl_FragColor = info;',
                '}'
            ].join('\n'));
            gl.uniform2fv(this.updateProgram[1].locations.delta, this.textureDelta);

            this.renderProgram = createProgram([
                'precision highp float;',

                'attribute vec2 vertex;',
                'uniform vec2 topLeft;',
                'uniform vec2 bottomRight;',
                'uniform vec2 containerRatio;',
                'varying vec2 ripplesCoord;',
                'varying vec2 backgroundCoord;',
                'void main() {',
                    'backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);',
                    'backgroundCoord.y = 1.0 - backgroundCoord.y;',
                    'ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;',
                    'gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);',
                '}'
            ].join('\n'), [
                'precision highp float;',

                'uniform sampler2D samplerBackground;',
                'uniform sampler2D samplerRipples;',
                'uniform float perturbance;',
                'varying vec2 ripplesCoord;',
                'varying vec2 backgroundCoord;',

                'void main() {',
                    'vec2 offset = -texture2D(samplerRipples, ripplesCoord).ba;',
                    'float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);',
                    'gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;',
                '}'
            ].join('\n'));
            gl.uniform1f(this.renderProgram.locations.perturbance, this.perturbance);
        },

        dropAtMouse: function(e, radius, strength) {
            this.drop(
                e.pageX - this.$el.offset().left,
                e.pageY - this.$el.offset().top,
                radius,
                strength
            );
        },

        drop: function(x, y, radius, strength) {
            var that = this;

            gl = this.context;

            var elWidth = this.$el.outerWidth();
            var elHeight = this.$el.outerHeight();
            var longestSide = Math.max(elWidth, elHeight);

            radius = radius / longestSide;

            var dropPosition = new Float32Array([
                (2 * x - elWidth) / longestSide,
                (elHeight - 2 * y) / longestSide
            ]);

            gl.viewport(0, 0, this.resolution, this.resolution);

            // Render onto texture/framebuffer 0
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[0]);

            // Using texture 1
            bindTexture(this.textures[1]);

            gl.useProgram(this.dropProgram.id);
            gl.uniform2fv(this.dropProgram.locations.center, dropPosition);
            gl.uniform1f(this.dropProgram.locations.radius, radius);
            gl.uniform1f(this.dropProgram.locations.strength, strength);

            this.drawQuad();

            // Switch textures
            var t = this.framebuffers[0]; this.framebuffers[0] = this.framebuffers[1]; this.framebuffers[1] = t;
            t = this.textures[0]; this.textures[0] = this.textures[1]; this.textures[1] = t;

            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        },

        // Actions
        destroy: function() {
            this.canvas.remove();
            this.$el.off('.ripples');
            this.$el.css('backgroundImage', '');
            this.$el.removeClass('jquery-ripples').removeData('ripples');
        },

        show: function() {
            this.$canvas.show();
            this.$el.css('backgroundImage', 'none');
            this.visible = true;
        },

        hide: function() {
            this.$canvas.hide();
            this.$el.css('backgroundImage', '');
            this.visible = false;
        },

        pause: function() {
            this.running = false;
        },

        play: function() {
            this.running = true;
        },

        set: function(property, value)
        {
            switch (property)
            {
                case 'interactive':
                    this.interactive = value;
                    break;
            }
        }
    };

    // RIPPLES PLUGIN DEFINITION
    // ==========================

    var old = $.fn.ripples;

    $.fn.ripples = function(option) {
        if (!supportsWebGL) throw new Error('Your browser does not support WebGL or the OES_texture_float extension.');

        var args = (arguments.length > 1) ? Array.prototype.slice.call(arguments, 1) : undefined;

        return this.each(function() {
            var $this   = $(this);
            var data    = $this.data('ripples');
            var options = $.extend({}, Ripples.DEFAULTS, $this.data(), typeof option == 'object' && option);

            if (!data && typeof option == 'string') return;
            if (!data) $this.data('ripples', (data = new Ripples(this, options)));
            else if (typeof option == 'string') Ripples.prototype[option].apply(data, args);
        });
    }

    $.fn.ripples.Constructor = Ripples;


    // RIPPLES NO CONFLICT
    // ====================

    $.fn.ripples.noConflict = function() {
        $.fn.ripples = old;
        return this;
    }

}(window.jQuery);





// ##############################################################################




/**
 * @name        Shuffle Letters
 * @author      Martin Angelov
 * @version     1.0
 * @url         http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license     MIT License
 */

(function($){
    
    $.fn.shuffleLetters = function(prop){
        
        var options = $.extend({
            "step"      : 10,           // How many times should the letters be changed
            "fps"       : 20,           // Frames Per Second
            "text"      : "",           // Use this text instead of the contents
            "callback"  : function(){}  // Run once the animation is complete
        },prop)
        
        return this.each(function(){
            
            var el = $(this),
                str = "";


            // Preventing parallel animations using a flag;

            if(el.data('animated')){
                return true;
            }
            
            el.data('animated',true);
            
            
            if(options.text) {
                str = options.text.split('');
            }
            else {
                str = el.text().split('');
            }
            
            // The types array holds the type for each character;
            // Letters holds the positions of non-space characters;
            
            var types = [],
                letters = [];

            // Looping through all the chars of the string
            
            for(var i=0;i<str.length;i++){
                
                var ch = str[i];
                
                if(ch == " "){
                    types[i] = "space";
                    continue;
                }
                else if(/[a-z]/.test(ch)){
                    types[i] = "lowerLetter";
                }
                else if(/[A-Z]/.test(ch)){
                    types[i] = "upperLetter";
                }
                else {
                    types[i] = "symbol";
                }
                
                letters.push(i);
            }
            
            el.html("");            

            // Self executing named function expression:
            
            (function shuffle(start){
            
                // This code is run options.fps times per second
                // and updates the contents of the page element
                    
                var i,
                    len = letters.length, 
                    strCopy = str.slice(0); // Fresh copy of the string
                    
                if(start>len){
                    
                    // The animation is complete. Updating the
                    // flag and triggering the callback;
                    
                    el.data('animated',false);
                    options.callback(el);
                    return;
                }
                
                // All the work gets done here
                for(i=Math.max(start,0); i < len; i++){

                    // The start argument and options.step limit
                    // the characters we will be working on at once
                    
                    if( i < start+options.step){
                        // Generate a random character at thsi position
                        strCopy[letters[i]] = randomChar(types[letters[i]]);
                    }
                    else {
                        strCopy[letters[i]] = "";
                    }
                }
                
                el.text(strCopy.join(""));
                
                setTimeout(function(){
                    
                    shuffle(start+1);
                    
                },1000/options.fps);
                
            })(-options.step);
            

        });
    };
    
    function randomChar(type){
        var pool = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
        
        var arr = pool.split('');
        return arr[Math.floor(Math.random()*arr.length)];
    }
    
})(jQuery);
