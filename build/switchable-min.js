/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 17 11:39
*/
KISSY.add("switchable/base",function(h,c,q,u){function m(b,a){a=a||{};if(!("markupType"in a))if(a.panelCls)a.markupType=1;else if(a.panels)a.markupType=2;for(var e=this.constructor;e;){a=h.merge(e.Config,a);e=e.superclass?e.superclass.constructor:null}this.container=c.get(b);this.config=a;this.activeIndex=this.completedIndex=a.activeIndex;if(!(this.activeIndex>-1))if(typeof a.switchTo!="number")this.completedIndex=this.activeIndex=0;this._init();this._initPlugins();this.fire(o);this.activeIndex>-1||
typeof a.switchTo=="number"&&this.switchTo(a.switchTo)}function v(b){var a={};a.type=b.originalEvent.type;a.target=b.originalEvent.target||b.originalEvent.srcElement;return{originalEvent:a}}var s=h.makeArray,i=q.Target,o="init";m.getDomEvent=v;m.Config={markupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",panelCls:"ks-switchable-panel",triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:-1,activeTriggerCls:"ks-active",
steps:1,viewSize:[]};m.Plugins=[];h.augment(m,i,{_initPlugins:function(){for(var b=this,a=b.constructor;a;){h.each(a.Plugins,function(e){e.init&&e.init(b)});a=a.superclass?a.superclass.constructor:null}},_init:function(){var b=this.config;this._parseMarkup();b.hasTriggers&&this._bindTriggers()},_parseMarkup:function(){var b=this.container,a=this.config,e,j,f=[],w=[];switch(a.markupType){case 0:if(e=c.get("."+a.navCls,b))f=c.children(e);j=c.get("."+a.contentCls,b);w=c.children(j);break;case 1:f=c.query("."+
a.triggerCls,b);w=c.query("."+a.panelCls,b);break;case 2:f=a.triggers;w=a.panels}b=w.length;this.length=b/a.steps;if(a.hasTriggers&&b>0&&f.length===0)f=this._generateTriggersMarkup(this.length);this.triggers=s(f);this.panels=s(w);this.content=j||w[0].parentNode;this.nav=e||a.hasTriggers&&f[0].parentNode},_generateTriggersMarkup:function(b){var a=this.config,e=c.create("<ul>"),j,f;e.className=a.navCls;for(f=0;f<b;f++){j=c.create("<li>");if(f===this.activeIndex)j.className=a.activeTriggerCls;j.innerHTML=
f+1;e.appendChild(j)}this.container.appendChild(e);return c.children(e)},_bindTriggers:function(){var b=this,a=b.config,e=b.triggers,j,f,w=e.length;for(f=0;f<w;f++)(function(y){j=e[y];q.on(j,"click",function(r){b._onFocusTrigger(y,r)});if(a.triggerType==="mouse"){q.on(j,"mouseenter",function(r){b._onMouseEnterTrigger(y,r)});q.on(j,"mouseleave",function(){b._onMouseLeaveTrigger(y)})}})(f)},_onFocusTrigger:function(b,a){if(this._triggerIsValid(b)){this._cancelSwitchTimer();this.switchTo(b,u,v(a))}},
_onMouseEnterTrigger:function(b,a){var e=this;if(e._triggerIsValid(b)){var j=v(a);e.switchTimer=h.later(function(){e.switchTo(b,u,j)},e.config.delay*1E3)}},_onMouseLeaveTrigger:function(){this._cancelSwitchTimer()},_triggerIsValid:function(b){return this.activeIndex!==b},_cancelSwitchTimer:function(){if(this.switchTimer){this.switchTimer.cancel();this.switchTimer=u}},switchTo:function(b,a,e,j){var f=this,w=f.config,y=f.triggers,r=f.panels,p=f.activeIndex,z=w.steps,k=p*z,A=b*z;if(!f._triggerIsValid(b))return f;
if(f.fire("beforeSwitch",{toIndex:b})===false)return f;if(w.hasTriggers)f._switchTrigger(p>-1?y[p]:null,y[b]);if(a===u)a=b>p?"forward":"backward";f._switchView(p>-1?r.slice(k,k+z):null,r.slice(A,A+z),b,a,e,function(){j&&j.call(f,b);f.completedIndex=b});f.activeIndex=b;return f},_switchTrigger:function(b,a){var e=this.config.activeTriggerCls;b&&c.removeClass(b,e);c.addClass(a,e)},_switchView:function(b,a,e,j,f,w){b&&c.css(b,"display","none");c.css(a,"display","block");this._fireOnSwitch(e,f);w&&w.call(this)},
_fireOnSwitch:function(b,a){this.fire("switch",h.mix(a||{},{currentIndex:b}))},prev:function(b){var a=this.activeIndex;this.switchTo(a>0?a-1:this.length-1,"backward",b)},next:function(b){var a=this.activeIndex;this.switchTo(a<this.length-1?a+1:0,"forward",b)}});return m},{requires:["dom","event"]});
KISSY.add("switchable/aria",function(h,c,q,u){function m(){this.stop&&this.stop()}function v(){this.start&&this.start()}u.Plugins.push({name:"aria",init:function(i){if(i.config.aria){var o=i.container;q.on(o,"focusin",m,i);q.on(o,"focusout",v,i)}}});var s=["a","input","button","object"];return{setTabIndex:function(i,o){i.tabIndex=o;c.query("*",i).each(function(b){var a=b.nodeName.toLowerCase();if(h.inArray(a,s)){c.hasAttr(b,"oriTabIndex")||c.attr(b,"oriTabIndex",b.tabIndex);b.tabIndex=o!=-1?c.attr(b,
"oriTabIndex"):o}})}}},{requires:["dom","event","./base"]});
KISSY.add("switchable/accordion/base",function(h,c,q){function u(m,v){if(!(this instanceof u))return new u(m,v);u.superclass.constructor.apply(this,arguments)}h.extend(u,q,{_switchTrigger:function(m,v){var s=this.config;s.multiple?c.toggleClass(v,s.activeTriggerCls):u.superclass._switchTrigger.apply(this,arguments)},_triggerIsValid:function(m){return this.config.multiple||u.superclass._triggerIsValid.call(this,m)},_switchView:function(m,v,s,i,o,b){var a=v[0];if(this.config.multiple){c.toggle(a);this._fireOnSwitch(s,
o);b&&b.call(this)}else u.superclass._switchView.apply(this,arguments)}});u.Plugins=[];u.Config={markupType:1,triggerType:"click",multiple:false};return u},{requires:["dom","../base"]});
KISSY.add("switchable/accordion/aria",function(h,c,q,u,m){function v(d){var n;h.each(this.triggers,function(B){if(B==d||c.contains(B,d))n=B});return n}function s(d){var n;h.each(this.panels,function(B){if(B==d||c.contains(B,d))n=B});return n}function i(d){var n=v.call(this,d);if(!n){d=s.call(this,d);n=this.triggers[h.indexOf(d,this.panels)]}return n}function o(d){switch(d.keyCode){case w:case y:d.ctrlKey&&!d.altKey&&!d.shiftKey&&d.halt();break;case l:d.ctrlKey&&!d.altKey&&d.halt()}}function b(d){var n=
d.target,B=this.triggers,E=!d.ctrlKey&&!d.shiftKey&&!d.altKey,F=d.ctrlKey&&!d.shiftKey&&!d.altKey;switch(d.keyCode){case x:case t:if((n=v.call(this,n))&&E){this.switchTo(h.indexOf(n,this.triggers));d.halt()}break;case z:case k:if(n=v.call(this,n)){e.call(this,n);d.halt()}break;case A:case g:if(n=v.call(this,n)){j.call(this,n);d.halt()}break;case y:if(F){d.halt();n=i.call(this,n);j.call(this,n)}break;case w:if(F){d.halt();n=i.call(this,n);e.call(this,n)}break;case p:if(E){i.call(this,n);a.call(this,
0,true);d.halt()}break;case r:if(E){i.call(this,n);a.call(this,B.length-1,true);d.halt()}break;case l:if(d.ctrlKey&&!d.altKey){d.halt();n=i.call(this,n);d.shiftKey?e.call(this,n):j.call(this,n)}}}function a(d,n){var B=this.triggers,E=B[d];h.each(B,function(F){if(F!==E){C(F,"-1");c.removeClass(F,"ks-switchable-select");F.setAttribute("aria-selected","false")}});n&&E.focus();C(E,"0");c.addClass(E,"ks-switchable-select");E.setAttribute("aria-selected","true")}function e(d){var n=this.triggers;d=h.indexOf(d,
n);a.call(this,d==0?n.length-1:d-1,true)}function j(d){var n=this.triggers;d=h.indexOf(d,n);a.call(this,d==n.length-1?0:d+1,true)}function f(d){var n=!!(d.originalEvent.target||d.originalEvent.srcElement);d=d.currentIndex;var B=this.panels,E=this.triggers,F=E[d],G=B[d];if(!this.config.multiple){h.each(B,function(D){D!==G&&D.setAttribute("aria-hidden","true")});h.each(E,function(D){D!==F&&D.setAttribute("aria-hidden","true")})}B=G.getAttribute("aria-hidden");G.setAttribute("aria-hidden",B=="false"?
"true":"false");F.setAttribute("aria-expanded",B=="false"?"false":"true");a.call(this,d,n)}var w=33,y=34,r=35,p=36,z=37,k=38,A=39,g=40,l=9,t=32,x=13;h.mix(m.Config,{aria:true});m.Plugins.push({name:"aria",init:function(d){if(d.config.aria){var n=d.container,B=d.activeIndex;c.attr(n,"aria-multiselectable",d.config.multiple?"true":"false");d.nav&&c.attr(d.nav,"role","tablist");var E=d.triggers,F=d.panels,G=0;h.each(F,function(D){if(!D.id)D.id=h.guid("ks-accordion-tab-panel")});h.each(E,function(D){if(!D.id)D.id=
h.guid("ks-accordion-tab")});h.each(E,function(D){D.setAttribute("role","tab");D.setAttribute("aria-expanded",B==G?"true":"false");D.setAttribute("aria-selected",B==G?"true":"false");D.setAttribute("aria-controls",F[G].id);C(D,B==G?"0":"-1");G++});G=0;h.each(F,function(D){var H=E[G];D.setAttribute("role","tabpanel");D.setAttribute("aria-hidden",B==G?"false":"true");D.setAttribute("aria-labelledby",H.id);G++});d.on("switch",f,d);q.on(n,"keydown",b,d);q.on(n,"keypress",o,d)}}});var C=u.setTabIndex},
{requires:["dom","event","../aria","./base"]});
KISSY.add("switchable/autoplay",function(h,c,q,u){h.mix(q.Config,{autoplay:false,interval:5,pauseOnHover:true});q.Plugins.push({name:"autoplay",init:function(m){function v(){o=h.later(function(){m.paused||m.switchTo(m.activeIndex<m.length-1?m.activeIndex+1:0,"forward")},i,true)}var s=m.config,i=s.interval*1E3,o;if(s.autoplay){v();m.stop=function(){if(o){o.cancel();o=u}m.paused=true};m.start=function(){if(o){o.cancel();o=u}m.paused=false;v()};if(s.pauseOnHover){c.on(m.container,"mouseenter",m.stop,
m);c.on(m.container,"mouseleave",m.start,m)}}}});return q},{requires:["event","./base"]});KISSY.add("switchable/autorender",function(h,c,q,u){u.autoRender=function(m,v){m="."+(m||"KS_Widget");c.query(m,v).each(function(s){var i=s.getAttribute("data-widget-type"),o;if(i&&"Switchable Tabs Slide Carousel Accordion".indexOf(i)>-1)try{if(o=s.getAttribute("data-widget-config"))o=o.replace(/'/g,'"');new h[i](s,q.parse(o))}catch(b){}})}},{requires:["dom","json","switchable/base"]});
KISSY.add("switchable/carousel/base",function(h,c,q,u,m){function v(i,o){if(!(this instanceof v))return new v(i,o);v.superclass.constructor.apply(this,arguments)}var s={originalEvent:{target:1}};v.Config={circular:true,prevBtnCls:"ks-switchable-prev-btn",nextBtnCls:"ks-switchable-next-btn",disableBtnCls:"ks-switchable-disable-btn"};v.Plugins=[];h.extend(v,u,{_init:function(){var i=this;v.superclass._init.call(i);var o=i.config,b=o.disableBtnCls;h.each(["prev","next"],function(a){var e=i[a+"Btn"]=
c.get("."+o[a+"BtnCls"],i.container);q.on(e,"mousedown",function(j){j.preventDefault();c.hasClass(e,b)||i[a](s)})});o.circular||i.on("switch",function(a){a=a.currentIndex;a=a===0?i.prevBtn:a===i.length-1?i.nextBtn:m;c.removeClass([i.prevBtn,i.nextBtn],b);a&&c.addClass(a,b)});q.on(i.panels,"click",function(){i.fire("itemSelected",{item:this})})}});return v},{requires:["dom","event","../base"]});
KISSY.add("switchable/carousel/aria",function(h,c,q,u,m){function v(g){var l=g.currentIndex,t=this.activeIndex,x=this.panels,C=x[l*this.config.steps],d=this.triggers;l=d[l];if((g=!!(g.originalEvent.target||g.originalEvent.srcElement))||t==-1){h.each(d,function(n){p(n,-1)});h.each(x,function(n){p(n,-1)});l&&p(l,0);p(C,0);g&&C.focus()}}function s(g){var l;h.each(this.triggers,function(t){if(t==g||c.contains(t,g)){l=t;return false}});return l}function i(g){var l=g.target;switch(g.keyCode){case w:case f:if(l=
s.call(this,l)){l=l;var t=c.next(l),x=this.triggers;t||(t=x[0]);p(l,-1);if(t){p(t,0);t.focus()}g.halt()}break;case j:case e:if(l=s.call(this,l)){l=l;t=c.prev(l);x=this.triggers;t||(t=x[x.length-1]);p(l,-1);if(t){p(t,0);t.focus()}g.halt()}break;case r:case y:if(l=s.call(this,l)){this.switchTo(h.indexOf(l,this.triggers),undefined,z);g.halt()}}}function o(g){var l;h.each(this.panels,function(t){if(t==g||c.contains(t,g)){l=t;return false}});return l}function b(g,l){var t=h.indexOf(g,this.panels),x=this.config.steps,
C=Math.floor(t/x);if(C==this.activeIndex)return 1;if(t%x==0||t%x==x-1){this.switchTo(C,l,z);return 0}return 1}function a(g){var l=g.target;switch(g.keyCode){case w:case f:if(l=o.call(this,l)){l=l;var t=c.next(l),x=this.panels;t||(t=x[0]);p(l,-1);p(t,0);b.call(this,t,k)&&t.focus();g.halt()}break;case j:case e:if(l=o.call(this,l)){l=l;t=c.prev(l);x=this.panels;t||(t=x[x.length-1]);p(l,-1);p(t,0);b.call(this,t,A)&&t.focus();g.halt()}break;case r:case y:if(l=o.call(this,l)){this.fire("itemSelected",{item:l});
g.halt()}}}var e=37,j=38,f=39,w=40,y=32,r=13,p=u.setTabIndex,z={originalEvent:{target:1}},k="forward",A="backward";h.mix(m.Config,{aria:false});m.Plugins.push({name:"aria",init:function(g){if(g.config.aria){var l=g.triggers,t=g.panels,x=g.content,C=g.activeIndex;if(!x.id)x.id=h.guid("ks-switchbale-content");x.setAttribute("role","listbox");var d=0;h.each(l,function(n){p(n,C==d?"0":"-1");n.setAttribute("role","button");n.setAttribute("aria-controls",x.id);d++});d=0;h.each(t,function(n){p(n,"-1");n.setAttribute("role",
"option");d++});g.on("switch",v,g);(l=g.nav)&&q.on(l,"keydown",i,g);q.on(x,"keydown",a,g);l=g.prevBtn;t=g.nextBtn;if(l){p(l,0);l.setAttribute("role","button");q.on(l,"keydown",function(n){if(n.keyCode==r||n.keyCode==y){g.prev(z);n.preventDefault()}})}if(t){p(t,0);t.setAttribute("role","button");q.on(t,"keydown",function(n){if(n.keyCode==r||n.keyCode==y){g.next(z);n.preventDefault()}})}}}})},{requires:["dom","event","../aria","./base"]});
KISSY.add("switchable/effect",function(h,c,q,u,m,v){var s;h.mix(m.Config,{effect:"none",duration:0.5,easing:"easeNone",nativeAnim:true});m.Effects={none:function(i,o,b){i&&c.css(i,"display","none");c.css(o,"display","block");b&&b()},fade:function(i,o,b){var a=this,e=a.config,j=i?i[0]:null,f=o[0];if(a.anim){a.anim.stop();c.css(a.anim.fromEl,{zIndex:1,opacity:0});c.css(a.anim.toEl,"zIndex",9)}c.css(f,"opacity",1);if(j){a.anim=(new u(j,{opacity:0},e.duration,e.easing,function(){a.anim=v;c.css(f,"z-index",
9);c.css(j,"z-index",1);b&&b()},e.nativeAnim)).run();a.anim.toEl=f;a.anim.fromEl=j}else{c.css(f,"z-index",9);b&&b()}},scroll:function(i,o,b,a){var e=this;o=e.config;var j=o.effect==="scrollx",f={};f[j?"left":"top"]=-(e.viewSize[j?0:1]*a)+"px";e.anim&&e.anim.stop();if(i)e.anim=(new u(e.content,f,o.duration,o.easing,function(){e.anim=v;b&&b()},o.nativeAnim)).run();else{c.css(e.content,f);b&&b()}}};s=m.Effects;s.scrollx=s.scrolly=s.scroll;m.Plugins.push({name:"effect",init:function(i){var o=i.config,
b=o.effect,a=i.panels,e=i.content,j=o.steps,f=i.activeIndex,w=a.length;i.viewSize=[o.viewSize[0]||a[0].offsetWidth*j,o.viewSize[1]||a[0].offsetHeight*j];if(b!=="none"){c.css(a,"display","block");switch(b){case "scrollx":case "scrolly":c.css(e,"position","absolute");c.css(e.parentNode,"position")=="static"&&c.css(e.parentNode,"position","relative");if(b==="scrollx"){c.css(a,"float","left");c.width(e,i.viewSize[0]*(w/j))}break;case "fade":var y=f*j,r=y+j-1,p;h.each(a,function(z,k){p=k>=y&&k<=r;c.css(z,
{opacity:p?1:0,position:"absolute",zIndex:p?9:1})})}}}});h.augment(m,{_switchView:function(i,o,b,a,e,j){var f=this,w=f.config.effect;(h.isFunction(w)?w:s[w]).call(f,i,o,function(){f._fireOnSwitch(b,e);j&&j.call(f)},b,a)}});return m},{requires:["dom","event","anim","switchable/base"]});
KISSY.add("switchable/circular",function(h,c,q,u){function m(r,p,z,k,A){var g=this;p=g.config;var l=g.length,t=g.activeIndex,x=p.scrollType===y,C=x?b:a,d=g.viewSize[x?0:1];x=-d*k;var n={},B,E=A===w;if(B=E&&t===0&&k===l-1||A===f&&t===l-1&&k===0)x=v.call(g,g.panels,k,E,C,d);n[C]=x+j;g.anim&&g.anim.stop();if(r)g.anim=(new q(g.content,n,p.duration,p.easing,function(){B&&s.call(g,g.panels,k,E,C,d);g.anim=undefined;z&&z()},p.nativeAnim)).run();else{c.css(g.content,n);z&&z()}}function v(r,p,z,k,A){var g=
this.config.steps;p=this.length;var l=z?p-1:0;r=r.slice(l*g,(l+1)*g);c.css(r,i,o);c.css(r,k,(z?-1:1)*A*p);return z?A:-A*p}function s(r,p,z,k,A){var g=this.config.steps;p=this.length;var l=z?p-1:0;r=r.slice(l*g,(l+1)*g);c.css(r,i,e);c.css(r,k,e);c.css(this.content,k,z?-A*(p-1):e)}var i="position",o="relative",b="left",a="top",e="",j="px",f="forward",w="backward",y="scrollx";h.mix(u.Config,{circular:false});u.Plugins.push({name:"circular",init:function(r){r=r.config;if(r.circular&&(r.effect===y||r.effect===
"scrolly")){r.scrollType=r.effect;r.effect=m}}})},{requires:["dom","anim","./base","./effect"]});
KISSY.add("switchable/countdown",function(h,c,q,u,m,v){h.mix(m.Config,{countdown:false,countdownFromStyle:"",countdownToStyle:"width: 0"});m.Plugins.push({name:"countdown",init:function(s){function i(r){o();y=(new u(j[r],w,e-1)).run()}function o(){if(a){clearTimeout(a);a=null}if(y){y.stop();y=v}}var b=s.config,a,e=b.interval,j=[],f=b.countdownFromStyle,w=b.countdownToStyle,y;if(!(!b.autoplay||!b.hasTriggers||!b.countdown)){h.each(s.triggers,function(r,p){r.innerHTML='<div class="ks-switchable-trigger-mask"></div><div class="ks-switchable-trigger-content">'+
r.innerHTML+"</div>";j[p]=r.firstChild});if(b.pauseOnHover){q.on(s.container,"mouseenter",function(){o();var r=j[s.activeIndex];if(f)y=(new u(r,f,0.2,"easeOut")).run();else c.attr(r,"style","")});q.on(s.container,"mouseleave",function(){o();var r=s.activeIndex;c.attr(j[r],"style",f);a=setTimeout(function(){i(r)},200)})}s.on("beforeSwitch",function(){o();if(j[s.activeIndex])c.attr(j[s.activeIndex],"style",f||"")});s.on("switch",function(r){s.paused||i(r.currentIndex)});s.activeIndex>-1&&i(s.activeIndex)}}});
return m},{requires:["dom","event","anim","./base"]});
KISSY.add("switchable/lazyload",function(h,c,q){var u="beforeSwitch",m="img",v="textarea",s={};s[m]="data-ks-lazyload-custom";s[v]="ks-datalazyload-custom";h.mix(q.Config,{lazyDataType:v});q.Plugins.push({name:"lazyload",init:function(i){function o(f){var w=a.steps;f=f.toIndex*w;b.loadCustomLazyData(i.panels.slice(f,f+w),e);a:{if(f=(w=e===m)?"img":e===v?"textarea":""){f=c.query(f,i.container);for(var y=0,r=f.length;y<r;y++){var p=f[y];if(w?c.attr(p,j):c.hasClass(p,j)){w=false;break a}}}w=true}w&&
i.detach(u,o)}var b=h.require("datalazyload"),a=i.config,e,j;if(a.lazyDataType==="img-src")a.lazyDataType=m;if(a.lazyDataType==="area-data")a.lazyDataType=v;e=a.lazyDataType;j=s[e];!b||!e||!j||i.on(u,o)}});return q},{requires:["dom","./base"]});KISSY.add("switchable/slide/base",function(h,c){function q(u,m){if(!(this instanceof q))return new q(u,m);q.superclass.constructor.apply(this,arguments)}q.Config={autoplay:true,circular:true};q.Plugins=[];h.extend(q,c);return q},{requires:["../base"]});
KISSY.add("switchable/slide/aria",function(h,c,q,u,m){function v(j){switch(j.keyCode){case b:case o:this.next(a);j.halt();break;case i:case s:this.prev(a);j.halt()}}var s=37,i=38,o=39,b=40;h.mix(m.Config,{aria:false});var a={originalEvent:{target:1}},e=u.setTabIndex;m.Plugins.push({name:"aria",init:function(j){if(j.config.aria){var f=j.panels,w=0,y=j.activeIndex;h.each(j.triggers,function(p){e(p,"-1");w++});w=0;h.each(f,function(p){e(p,y==w?"0":"-1");c.attr(p,"role","option");w++});var r=j.content;
c.attr(r,"role","listbox");q.on(r,"keydown",v,j);e(f[0],0);j.on("switch",function(p){var z=p.currentIndex;p=!!(p.originalEvent.target||p.originalEvent.srcElement);var k=j.completedIndex;k>-1&&e(f[k],-1);e(f[z],0);p&&f[z].focus()})}}})},{requires:["dom","event","../aria","./base"]});KISSY.add("switchable/tabs/base",function(h,c){function q(u,m){if(!(this instanceof q))return new q(u,m);q.superclass.constructor.call(this,u,m);return 0}h.extend(q,c);q.Config={};q.Plugins=[];return q},{requires:["../base"]});
KISSY.add("switchable/tabs/aria",function(h,c,q,u,m,v){function s(k){var A;h.each(this.triggers,function(g){if(g==k||c.contains(g,k))A=g});return A}function i(k){switch(k.keyCode){case a:case e:k.ctrlKey&&!k.altKey&&!k.shiftKey&&k.halt();break;case r:k.ctrlKey&&!k.altKey&&k.halt()}}function o(k){var A=k.target,g=k.ctrlKey&&!k.shiftKey&&!k.altKey;switch(k.keyCode){case j:case f:if(s.call(this,A)){this.prev(z(k));k.halt()}break;case w:case y:if(s.call(this,A)){this.next(z(k));k.halt()}break;case e:if(g){k.halt();
this.next(z(k))}break;case a:if(g){k.halt();this.prev(z(k))}break;case r:if(k.ctrlKey&&!k.altKey){k.halt();k.shiftKey?this.prev(z(k)):this.next(z(k))}}}function b(k){var A=!!(k.originalEvent.target||k.originalEvent.srcElement),g=this.completedIndex,l=k.currentIndex;if(g!=l){k=this.triggers[g];var t=this.triggers[l];g=this.panels[g];l=this.panels[l];k&&p(k,"-1");p(t,"0");A&&t.focus();g&&g.setAttribute("aria-hidden","true");l.setAttribute("aria-hidden","false")}}var a=33,e=34,j=37,f=38,w=39,y=40,r=
9;h.mix(v.Config,{aria:true});v.Plugins.push({name:"aria",init:function(k){if(k.config.aria){var A=k.triggers,g=k.activeIndex,l=k.panels,t=k.container;k.nav&&c.attr(k.nav,"role","tablist");var x=0;h.each(A,function(C){C.setAttribute("role","tab");p(C,g==x?"0":"-1");if(!C.id)C.id=h.guid("ks-switchable");x++});x=0;h.each(l,function(C){var d=A[x];C.setAttribute("role","tabpanel");C.setAttribute("aria-hidden",g==x?"false":"true");C.setAttribute("aria-labelledby",d.id);x++});k.on("switch",b,k);q.on(t,
"keydown",o,k);q.on(t,"keypress",i,k)}}});var p=m.setTabIndex,z=u.getDomEvent},{requires:["dom","event","../base","../aria","./base"]});
KISSY.add("switchable",function(h,c,q,u,m,v,s,i,o,b,a,e,j,f,w,y){h.Switchable=c;q={Accordion:u,Carousel:i,Slide:f,Tabs:y};h.mix(h,q);h.mix(c,q);return c},{requires:["switchable/base","switchable/aria","switchable/accordion/base","switchable/accordion/aria","switchable/autoplay","switchable/autorender","switchable/carousel/base","switchable/carousel/aria","switchable/circular","switchable/countdown","switchable/effect","switchable/lazyload","switchable/slide/base","switchable/slide/aria","switchable/tabs/base",
"switchable/tabs/aria"]});
