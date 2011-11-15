/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Nov 15 11:35
*/
KISSY.add("htmlparser/Parser",function(k,n,j){function g(d){this.lexer=d}function c(d){this.lexer=new j(d)}g.prototype={nextNode:function(){var d,i,o,q=this.lexer;if(d=q.nextNode())if(d.nodeType==1)if(d.isEndTag())return this.nextNode();else if(o=d.scanner){i=[];d=o.scan(d,q,i)}return d}};c.prototype={elements:function(){return new g(this.lexer)},parse:function(){for(var d=[],i,o=this.elements();i=o.nextNode();)d.push(i);return d}};return c},{requires:["./lexer/Cursor","./lexer/Lexer"]});
KISSY.add("htmlparser/Utils",function(){return{isLetter:function(k){return"a"<=k&&"z">=k||"A"<=k&&"Z">=k},isWhitespace:function(k){return/\s/.test(k)}}});
KISSY.add("htmlparser/dtd",function(k){k=k.merge;var n={isindex:1,fieldset:1},j={input:1,button:1,select:1,textarea:1,label:1},g=k({a:1},j),c=k({iframe:1},g),d={hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1},i={ins:1,del:1,script:1,style:1},o=k({b:1,acronym:1,bdo:1,"var":1,"#":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1},i),q=k({sub:1,img:1,object:1,sup:1,
basefont:1,map:1,applet:1,font:1,big:1,small:1},o),s=k({p:1},q);j=k({iframe:1},q,j);q={img:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,
address:1,q:1,pre:1,p:1,em:1,dfn:1};var f=k({a:1},j),e={tr:1},a={"#":1},b=k({param:1},q),h=k({form:1},n,c,d,s),l={li:1},m={base:1,link:1,meta:1,title:1},p=k(m,{style:1,script:1}),r={head:1,body:1},t={address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1};return{$nonBodyContent:k({html:1},r,m),$block:t,$blockLimit:{body:1,div:1,td:1,th:1,caption:1,form:1},$inline:f,$body:k({script:1,style:1},t),
$cdata:{script:1,style:1},$empty:{area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1},$listItem:{dd:1,dt:1,li:1},$list:{ul:1,ol:1,dl:1},$nonEditable:{applet:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,script:1,textarea:1,param:1},$removeEmpty:{abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,
textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},html:r,head:p,style:a,body:h,base:{},link:{},meta:{},title:a,col:{},tr:{td:1,th:1},img:{},colgroup:{col:1},noscript:h,td:h,br:{},th:h,center:h,kbd:f,button:k(s,d),basefont:{},h5:f,h4:f,samp:f,h6:f,ol:l,h1:f,h3:f,option:a,h2:f,form:k(n,c,d,s),select:{optgroup:1,option:1},font:f,ins:f,menu:l,abbr:f,label:f,table:{thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1},code:f,script:a,tfoot:e,cite:f,li:h,input:{},
iframe:h,strong:f,textarea:a,noframes:h,big:f,small:f,span:f,hr:{},dt:f,sub:f,optgroup:{option:1},param:{},bdo:f,"var":f,div:h,object:b,sup:f,dd:h,strike:f,area:{},dir:l,map:k({area:1,form:1,p:1},n,i,d),applet:b,dl:{dt:1,dd:1},del:f,isindex:{},fieldset:k({legend:1},q),thead:e,ul:l,acronym:f,b:f,a:j,blockquote:h,caption:f,i:f,u:f,tbody:e,s:f,address:k(c,s),tt:f,legend:f,q:f,pre:k(o,g),p:f,em:f,dfn:f}});
KISSY.add("htmlparser/lexer/Cursor",function(){function k(n){this.position=n||0}k.prototype={advance:function(){this.position++},retreat:function(){this.position=Math.max(--this.position,0)}};return k});
KISSY.add("htmlparser/lexer/Index",function(){function k(){this.lineCursors=[]}function n(g,c){for(var d=0;d<g.length;d++)if(g[d].position===c.position)return d;return-1}function j(g,c){for(var d=0;d<g.length;d++)if(g[d].position>c.position)break;return d}k.prototype={add:function(g){n(this.lineCursors,g)==-1&&this.lineCursors.splice(j(this.lineCursors,g),0,g)},remove:function(g){var c=this.lineCursors;g=n(this.lineCursors,g);g!=-1&&c.splice(g,1)},row:function(g){return j(this.lineCursors,g)-1},col:function(g){var c=
j(this.lineCursors,g)-1;return g.position-this.lineCursors[c]}};return k});
KISSY.add("htmlparser/lexer/Lexer",function(k,n,j,g,c,d,i,o,q){function s(f){this.page=new j(f);this.cursor=new n;this.nodeFactory=this}s.prototype={setPosition:function(f){this.cursor.position=f},getPosition:function(){return this.cursor.position},nextNode:function(f){var e,a,b=this.cursor,h=this.page;e=b.position;a=h.getChar(b);switch(a){case -1:f=null;break;case "<":a=h.getChar(b);if(a==-1)f=this.makeString(e,b.position);else if(a=="/"||d.isLetter(a)){h.ungetChar(b);f=this.parseTag(e)}else if("!"==
a){a=h.getChar(b);if(a==-1)f=this.makeString(e,b.position);else if(">"==a)f=this.makeComment(e,b.position);else{h.ungetChar(b);if("-"==a)f=this.parseComment(e,f);else{h.ungetChar(b);f=this.parseTag(e)}}}else{h.ungetChar(b);f=this.parseString(e,f)}break;default:h.ungetChar(b);f=this.parseString(e,f)}return f},makeComment:function(f,e){var a;a=e-f;if(0!=a){if(2>a)return this.makeString(f,e);a=this.nodeFactory.createCommentNode(this.page,f,e)}else a=null;return a},makeString:function(f,e){var a=null;
if(e-f>0)a=this.nodeFactory.createStringNode(this.page,f,e);return a},makeCData:function(f,e){var a=null;if(e-f>0)a=this.nodeFactory.createCDataNode(this.page,f,e);return a},makeTag:function(f,e,a){var b;b=e-f;if(0!=b){if(2>b)return this.makeString(f,e);f=this.nodeFactory.createTagNode(this.page,f,e,a)}else f=null;return f},createTagNode:function(f,e,a,b){return new o(f,e,a,b)},createStringNode:function(f,e,a){return new g(f,e,a)},createCDataNode:function(f,e,a){return new c(f,e,a)},createCommentNode:function(f,
e,a){return new q(f,e,a)},parseTag:function(f){var e,a=[],b=[],h,l=this.page,m=0,p=this.cursor;for(a[0]=p.position;!e;){a[m+1]=p.position;h=l.getChar(p);switch(m){case 0:if(h==-1||">"==h||"<"==h){if("<"==h){l.ungetChar(p);a[m+1]=p.position}e=true}else d.isWhitespace(h)||(m=1);break;case 1:if(-1==h||">"==h||"<"==h){if("<"==h){l.ungetChar(p);a[m+1]=p.getPosition}this.standalone(b,a);e=true}else if(d.isWhitespace(h)){a[6]=a[2];m=6}else if("="==h)m=2;break;case 2:if(-1==h||">"==h){this.standalone(b,a);
e=true}else if("'"==h){m=4;a[4]=a[3]}else if('"'==h){m=5;a[5]=a[3]}else d.isWhitespace(h)||(m=3);break;case 3:if(-1==h||">"==h){this.naked(b,a);e=true}else if(d.isWhitespace(h)){this.naked(b,a);a[0]=a[4];m=0}break;case 4:if(-1==h){this.single_quote(b,a);e=true}else if("'"==h){this.single_quote(b,a);a[0]=a[5]+1;m=0}break;case 5:if(-1==h){this.double_quote(b,a);e=true}else if('"'==h){this.double_quote(b,a);a[0]=a[6]+1;m=0}break;case 6:if(-1==h){this.standalone(b,a);a[0]=a[6];l.ungetChar(p);m=0}else if(!d.isWhitespace(h))if("="==
h){a[2]=a[6];a[3]=a[7];m=2}else{this.standalone(b,a);a[0]=a[6];l.ungetChar(p);m=0}break;default:throw Error("how ** did we get in state "+m);}}return this.makeTag(f,p.position,b)},parseComment:function(f,e){var a,b,h=this.page,l=this.cursor,m;a=false;for(m=0;!a;){b=h.getChar(l);if(-1==b)a=true;else switch(m){case 0:if(">"==b)a=true;if("-"==b)m=1;else return this.parseString(f,e);break;case 1:if("-"==b){b=h.getChar(l);if(-1==b)a=true;else if(">"==b)a=true;else{h.ungetChar(l);m=2}}else return this.parseString(f,
e);break;case 2:if("-"==b)m=3;else if(-1==b)return this.parseString(f,e);break;case 3:m="-"==b?4:2;break;case 4:if(">"==b)a=true;else d.isWhitespace(b)||(m=2);break;default:throw Error("how ** did we get in state "+m);}}return this.makeComment(f,l.position)},parseString:function(f,e){for(var a=0,b,h=this.page,l=this.cursor,m=0;!a;){b=h.getChar(l);if(-1==b)a=1;else if(e&&0==m&&("'"==b||'"'==b))m=b;else if(e&&0!=m&&"\\"==b){b=h.getChar(l);-1!=b&&"\\"!=b&&b!=m&&h.ungetChar(l)}else if(e&&b==m)m=0;else if(e&&
0==m&&b=="/"){b=h.getChar(l);if(-1==b)a=1;else if("/"==b){do b=h.getChar(l);while(-1!=b&&"\n"!=b)}else if("*"==b){do{do b=h.getChar(l);while(-1!=b&&"*"!=b);b=h.getChar(l);b=="*"&&h.ungetChar(l)}while(-1!=b&&"/"!=b)}else h.ungetChar(l)}else if(0==m&&"<"==b){b=h.getChar(l);if(-1==b)a=1;else{if("/"==b||d.isLetter(b)||"!"==b){a=1;h.ungetChar(l)}h.ungetChar(l)}}}return this.makeString(f,l.position)},parseCDATA:function(f){var e,a,b,h,l,m,p=this.cursor,r=this.page;e=p.position;a=0;b=false;h="";for(m=false;!b;){l=
r.getChar(p);switch(a){case 0:switch(l){case -1:b=true;break;case "'":if(f&&!m)if(""==h)h="'";else if("'"==h)h="";break;case '"':if(f&&!m)if(""==h)h='"';else if('"'==h)h="";break;case "\\":if(f)if(""!=h){l=r.getChar(p);if(-1==l)b=true;else l!="\\"&&l!=h&&r.ungetChar(p)}break;case "/":if(f)if(""==h){l=r.getChar(p);if(-1==l)b=true;else if("/"==l)m=true;else if("*"==l){do{do l=r.getChar(p);while(-1!=l&&"*"!=l);l=r.getChar(p);l=="*"&&r.ungetChar(p)}while(-1!=l&&"/"!=l)}else r.ungetChar(p)}break;case "\n":m=
false;break;case "<":if(f){if(""==h)a=1}else a=1}break;case 1:switch(l){case -1:b=true;break;case "/":a=2;break;case "!":l=r.getChar(p);if(-1==l)b=true;else if("-"==l){l=r.getChar(p);if(-1==l)b=true;else a="-"==l?3:0}else a=0;break;default:a=0}break;case 2:m=false;if(-1==l)b=true;else if(d.isLetter(l)){b=true;r.ungetChar(p);r.ungetChar(p);r.ungetChar(p)}else a=0;break;case 3:m=false;if(-1==l)b=true;else if("-"==l){l=r.getChar(p);if(-1==l)b=true;else if("-"==l){l=r.getChar(p);if(-1==l)b=true;else if(">"==
l)a=0;else{r.ungetChar(p);r.ungetChar(p)}}else r.ungetChar(p)}break;default:throw Error("unexpected "+a);}}return this.makeCData(e,p.position)},single_quote:function(f,e){var a=this.page;f.push(new i(a.getText(e[1],e[2]),"=",a.getText(e[4]+1,e[5]),"'"))},double_quote:function(f,e){var a=this.page;f.push(new i(a.getText(e[1],e[2]),"=",a.getText(e[5]+1,e[6]),'"'))},standalone:function(f,e){f.push(new i(this.page.getText(e[1],e[2])))},naked:function(f,e){var a=this.page;f.push(new i(a.getText(e[1],e[2]),
"=",a.getText(e[3],e[4])))}};return s},{requires:["./Cursor","./Page","../nodes/Text","../nodes/CData","../Utils","../nodes/Attribute","../nodes/Tag","../nodes/Comment"]});
KISSY.add("htmlparser/lexer/Page",function(k,n){function j(g){this.source=g;this.lineIndex=new n}j.prototype={getChar:function(g){var c=this.source,d=g.position;if(d>=c.length)return-1;var i=c.charAt(d);g.advance();if("\r"===i){i="\n";d=g.position;c.charAt(d)==="\n"&&g.advance()}"\n"===i&&this.lineIndex.add(g);return i},ungetChar:function(g){var c=this.source;g.retreat();var d=g.position,i=c.charAt(d);if(i==="\n"&&0!=d){i=c.charAt(d-1);"\r"===i&&g.retreat()}},getText:function(g,c){return this.source.slice(g,
c)},row:function(g){return this.lineIndex.row(g)},col:function(g){return this.lineIndex.col(g)}};return j},{requires:["./Index"]});KISSY.add("htmlparser/nodes/Attribute",function(){return function(k,n,j,g){this.nodeType=2;this.name=k;this.assignMent=n;this.value=j;this.quote=g}});
KISSY.add("htmlparser/nodes/CData",function(k,n){function j(){j.superclass.constructor.apply(this,arguments);this.nodeType=4;this.nodeName="#cdata"}k.extend(j,n,{writeHtml:function(g,c){var d=this.toHtml();c.onCData(this)!==false&&g.cdata(d)}});return j},{requires:["./Text"]});
KISSY.add("htmlparser/nodes/Comment",function(k,n){function j(){j.superclass.constructor.apply(this,arguments);this.nodeType=8;this.nodeName="#comment"}k.extend(j,n,{writeHtml:function(g,c){var d=this.toHtml();c.onComment(this)!==false&&g.comment(d)}});return j},{requires:["./Tag"]});
KISSY.add("htmlparser/nodes/Node",function(k){function n(j,g,c){this.parentNode=null;this.page=j;this.startPosition=g;this.endPosition=c;this.nextSibling=this.previousSibling=this.nodeName=null;if(k.Config.debug)this.toHtmlContent=this.toHtml()}n.prototype={toHtml:function(){if(this.page)return this.page.getText(this.startPosition,this.endPosition)},toString:function(){var j=[];j.push(this.nodeName+"  ["+this.startPosition+":"+this.endPosition+"]\n");j.push(this.toHtml());return j.join("")}};return n});
KISSY.add("htmlparser/nodes/Tag",function(k,n,j,g,c,d,i){function o(e,a,b,h){o.superclass.constructor.apply(this,arguments);this.childNodes=[];this.lastChild=this.firstChild=null;this.attributes=h||[];this.nodeType=1;h=this.attributes;if(h[0]){this.nodeName=h[0].name.toLowerCase();this.tagName=this.nodeName.replace(/\//,"");this.isEmptyXmlTag=!!i.$empty[this.nodeName];if(!this.isEmptyXmlTag)this.isEmptyXmlTag=/\/$/.test(this.nodeName);h.splice(0,1)}if(!this.isEmptyXmlTag){var l=h[h.length-1];if(this.isEmptyXmlTag=
!!(l&&/\/$/.test(l.name)))h.length-=1}this.closed=this.isEmptyXmlTag;this.closedEndPosition=this.closedStartPosition=-1;this.scanner=f[this.nodeName]||j}function q(e){var a=e.childNodes;e.firstChild=a[0];e.lastChild=a[a.length-1];if(a.length>=1){a[0].nextSibling=a[0].nextSibling=null;a[0].parentNode=e}if(a.length>1){for(var b=0;b<a.length-1;b++){a[b].nextSibling=a[b+1];a[b+1].previousSibling=a[b];a[b+1].parentNode=e}a[a.length-1].nextSibling=null}}function s(e,a){for(var b=0;b<e.length;b++)if(e[b].name==
a)return e[b];return null}var f={style:g,script:g,textarea:c};k.extend(o,n,{isEndTag:function(){return/^\//.test(this.nodeName)},appendChild:function(e){this.childNodes.push(e);q(this)},insertBefore:function(e){var a=e.parentNode.childNodes,b=k.indexOf(e,a);a.splice(b,0,this);q(e.parentNode)},removeChild:function(e){var a=e.parentNode.childNodes,b=k.indexOf(e,a);a.splice(b,1);q(e.parentNode)},getAttribute:function(e){return(e=s(this.attributes,e))&&e.value},setAttribute:function(e,a){var b=s(this.attributes,
e);if(b)b.value=a;else this.attributes.push(new d(e,"=",a,'"'))},removeAttribute:function(e){(e=s(this.attributes,e))&&this.attributes.splice(k.indexOf(e,this.attributes),1)},writeHtml:function(e,a){var b=this,h;h=b.tagName;if(a){if(!(h=a.onTagName(h)))return;b.tagName=h;h=a.onTag(b);if(h===false)return;if(h)b=h;if(b.nodeType!==1){b.writeHtml(e,a);return}if(!b.tagName){k.each(b.childNodes,function(r){r.writeHtml(e,a)});return}}e.openTag(b);for(var l=b.attributes,m=0;m<l.length;m++){var p=l[m];h=p.name;
if(a){if(!(h=a.onAttributeName(h)))continue;if(a.onAttribute(p)===false)continue}e.attribute(p)}e.openTagClose(b);if(!b.isEmptyXmlTag){k.each(b.childNodes,function(r){r.writeHtml(e,a)});e.closeTag(b)}}});return o},{requires:["./Node","../scanners/TagScanner","../scanners/QuoteCdataScanner","../scanners/TextareaScanner","./Attribute","../dtd"]});
KISSY.add("htmlparser/nodes/Text",function(k,n){function j(){j.superclass.constructor.apply(this,arguments);this.nodeType=3;this.nodeName="#text"}k.extend(j,n,{writeHtml:function(g,c){var d=this.toHtml();c.onText(this)!==false&&g.text(d)}});return j},{requires:["./Node"]});
KISSY.add("htmlparser/scanners/CdataScanner",function(){return{scan:function(k,n,j,g){j=n.parseCDATA(g);g=n.getPosition();var c=n.nextNode();if(c)if(c.nodeType!=1||!(c.isEndTag()&&c.tagName==k.tagName))n.setPosition(g);k.closed=true;j&&k.appendChild(j);return k}}});KISSY.add("htmlparser/scanners/QuoteCdataScanner",function(k,n){return{scan:function(j,g,c){return n.scan(j,g,c,true)}}},{requires:["./CdataScanner"]});
KISSY.add("htmlparser/scanners/TagScanner",function(k,n){var j={scan:function(g,c,d){var i,o;if(!g.isEmptyXmlTag){do{if(i=c.nextNode())if(i.nodeType===1)if(i.isEndTag()&&i.tagName==g.tagName){g.closed=true;i=null}else if(!i.isEndTag()&&!this.canHasNodeAsChild(g,i)){c.setPosition(i.startPosition);i=null}else if(i.isEndTag()){var q=-1;for(o=d.length-1;o>=0;o--){var s=d[o];if(s.tagName===i.tagName){q=o;break}else if(!this.canHasNodeAsChild(s,i)){q=o;break}}if(q!=-1){g.closed=true;d[d.length-1].appendChild(g);
for(o=d.length-1;o>q;o--){g=d[o];i=d[o-1];g.closed=true;i.appendChild(g)}g=d[q];d.length=q;i=null}}else if(o=i.scanner)if(o===j)if(i.isEmptyXmlTag)g.appendChild(i);else{d.push(g);g=i}else{i=o.scan(i,c,d);g.appendChild(i)}else g.appendChild(i);else if(i.nodeType!=3||this.canHasNodeAsChild(g,i))g.appendChild(i);else{c.setPosition(i.startPosition);i=null}if(i==null)if(d.length>0){i=d[d.length-1];if(i.nodeType==1)if(i.scanner===j){d.length-=1;g.closed=true;i.appendChild(g);g=i}else i=null;else i=null}}while(i)
}g.closed=true;return g},canHasNodeAsChild:function(g,c){var d=c.nodeName;if(c.nodeType==3)d="#";return!!n[g.tagName][d]}};return j},{requires:["../dtd"]});KISSY.add("htmlparser/scanners/TextareaScanner",function(k,n){return{scan:function(j,g,c){return n.scan(j,g,c,false)}}},{requires:["./CdataScanner"]});
KISSY.add("htmlparser/writer/basic",function(k){function n(){this.output=[]}n.prototype={append:function(){for(var j=this.output,g=arguments,c,d=0;d<g.length;d++){c=g[d];if(c.length>1)for(var i=0;i<c.length;i++)j.push(c.charAt(i));else j.push(c)}return this},openTag:function(j){this.append("<",j.tagName)},openTagClose:function(j){j.isEmptyXmlTag&&this.append(" ","/");this.append(">")},closeTag:function(j){this.append("</",j.tagName,">")},attribute:function(j){this.append(" ",j.name,'="',k.escapeHTML(j.value||
j.name),'"')},text:function(j){this.append(j)},cdata:function(j){this.append(j)},comment:function(j){this.append(j)},getHtml:function(){return this.output.join("")}};return n});
KISSY.add("htmlparser/writer/beautify",function(k,n,j){function g(){g.superclass.constructor.apply(this,arguments);this.inPre=0;this.indentChar="\t";this.allowIndent=this.indentLevel=0;this.rules={};for(var c in k.merge(j.$nonBodyContent,j.$block,j.$listItem,j.$tableContent))this.setRules(c,{allowIndent:1,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});this.setRules("br",{breakAfterOpen:1});this.setRules("title",{allowIndent:0,breakBeforeClose:0,breakAfterOpen:0});this.setRules("style",
{allowIndent:0,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});this.setRules("script",{allowIndent:0,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});this.setRules("pre",{allowIndent:0})}k.extend(g,n,{indentation:function(){this.inPre||this.append(Array(this.indentLevel+1).join(this.indentChar));this.allowIndent=0},lineBreak:function(){var c=this.output;if(!this.inPre&&c.length){for(var d=c.length-1;d>=0;d--)if(!/[\r\n\t ]/.test(c[d]))break;c.length=
d+1;this.append("\n")}this.allowIndent=1},setRules:function(c,d){this.rules[c]||(this.rules[c]={});k.mix(this.rules[c],d)},openTag:function(c){var d=this.rules[c.tagName]||{};if(this.allowIndent)this.indentation();else if(d.breakBeforeOpen){this.lineBreak();this.indentation()}g.superclass.openTag.apply(this,arguments)},openTagClose:function(c){var d=c.tagName,i=this.rules[d]||{};if(c.isEmptyXmlTag)this.append(" />");else{this.append(">");i.allowIndent&&this.indentLevel++}i.breakAfterOpen&&this.lineBreak();
if(d==="pre")this.inPre=1},closeTag:function(c){var d=c.tagName,i=this.rules[d]||{};i.allowIndent&&this.indentLevel--;if(this.allowIndent)this.indentation();else if(i.breakBeforeClose){this.lineBreak();this.indentation()}g.superclass.closeTag.apply(this,arguments);if(d==="pre")this.inPre=0;i.breakAfterClose&&this.lineBreak()},text:function(c){this.allowIndent&&this.indentation();this.inPre||(c=c.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," "));this.append(c)},comment:function(c){this.allowIndent&&this.indentation();
this.append(c)}});return g},{requires:["./basic","../dtd"]});
KISSY.add("htmlparser/writer/filter",function(k){function n(){this.tagNames=[];this.attributeNames=[];this.tags=[];this.comments=[];this.texts=[];this.cdatas=[];this.attributes=[]}function j(c,d){for(var i=0;i<c.length;i++)k.each(c[i].value,function(o){d=d.replace(o[0],o[1])});return d}function g(c,d,i){for(var o=0;o<c.length;o++)if(c[o].value.apply(null,d)===false)return false;return i}n.prototype={addRules:function(c,d){d=d||10;for(var i in c){var o=this[i],q;a:{for(q=0;q<o.length;q++)if(o[q].priority>
d){q=q;break a}q=o.length}o.splice(q,0,{value:c[i],priority:d})}},onTagName:function(c){return j(this.tagNames,c)},onAttributeName:function(c){return j(this.attributeNames,c)},onText:function(c){return g(this.texts,[c.toHtml(),c],c)},onCData:function(c){return g(this.cdatas,[c.toHtml(),c],c)},onAttribute:function(c,d){return g(this.attributes,[d,c],d)},onComment:function(c){return g(this.comments,[c.toHtml(),c],c)},onNode:function(c){var d=c.nodeType;if(d===1)return this.onTag(c);else if(d===3)return this.onText(c.toHtml(),
c);else if(d===8)return this.onComment(c.toHtml(),c)},onTag:function(c){for(var d=["^",c.tagName,"$"],i=this.tags,o,q=0;q<d.length;q++)for(var s=d[q],f=0;f<i.length;f++){var e=i[f].value;if(e[s]){if((o=e[s](c))===false)return false;if(o&&o!=e)return this.onNode(o);if(!c.name)return c}}return c}};return n});
KISSY.add("htmlparser",function(k,n,j,g,c,d){return{Lexer:n,Parser:j,BasicWriter:g,BeautifyWriter:c,Filter:d}},{requires:["htmlparser/lexer/Lexer","htmlparser/Parser","htmlparser/writer/basic","htmlparser/writer/beautify","htmlparser/writer/filter"]});
