//tealium universal tag - utag.loader ut4.0.201404081847, Copyright 2014 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_mjet_main=([^\S;]*)")){if(RegExp.$1.indexOf("/qa/")===-1){ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/mjet/main/qa/';}}})();}catch(e){};try{if(document.URL.match('signup.mindjet.com/3')){if(typeof console!==undefined){console.log("got to this point");}
var p1Params=document.URL.split('?')[1];window.location.href="2"+"?"+p1Params;}}catch(e){};if(!utag_condload){try{function getUrlParam(paramName){paramName=paramName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+paramName+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);if(results==null)return"";if(results=='undefined')return"";else return results[1];};if(document.URL.match('signup.mindjet.com/2')){var finalDestination=getUrlParam('fwd');window.location=finalDestination;}}catch(e){}};if(typeof utag=="undefined"&&!utag_condload){var utag={id:"mjet.main",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],ft:0,rf:0,ri:0,rp:0,rq:[],lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\./.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d){utag.DB('WQ:'+utag.loader.wq.length);c=true;try{utag.loader.GET()}catch(e){};var lq=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load>0&&b.send){c=false;utag.send[b.id]=b;}
if(b.load!=0&&b.load!=4){lq.push(b);this.f[b.id]=0;}}
if(c){d=false;for(b in utag.loader.GV(utag.send))d=true;if(c&&d)this.LOAD('WAIT_FORCE');}
this.wq=[];for(a=0;a<lq.length;a++){utag.DB('utag.loader.WAIT: loading '+lq[a].id);utag.loader.AS(lq[a])}
if(lq.length==0)utag.handler.INIT();},AS:function(a,b,c,d){utag.sender[a.id]=a;if(typeof a.src=='undefined'){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'utag.'+a.id+'.js')}
if(utag.cfg.v)a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+utag.cfg.v;utag.rpt['l_'+a.id]=a.src;b=document;if(a.load==2){b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')}else if(a.load==1||a.load==3){if(b.createElement){c='utag_mjet.main_'+a.id;if(!b.getElementById(c)){if(a.load==3){d=b.createElement('iframe');d.setAttribute('height','1');d.setAttribute('width','1');d.setAttribute('style','display:none');d.setAttribute('src',a.src)}else{d=b.createElement('script');d.language='javascript';d.type='text/javascript';d.src=a.src;}
d.id=c;b.getElementsByTagName('head')[0].appendChild(d)}}}},GV:function(a,b,c){b={};for(c in a){if(typeof a[c]!="function")b[c]=a[c];}
return b},RD:function(o,a,b,c,d,e,f,g){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){if(a[b].name&&a[b].name!="")o["meta."+a[b].name.toLowerCase()]=a[b].content.toLowerCase();}
a=location.search.toLowerCase();if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");o["qp."+c[0]]=unescape(c[1])}}
a=(new Date()).getTime();b=utag.loader.RC();c=a+parseInt(utag.cfg.session_timeout);d=a+(Math.ceil(Math.random()*1000000));if((b.utag_main&&(typeof b.utag_main._st=="undefined"||(typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a)))||!b.utag_main){if(b.utag_main){b.utag_main._st=c;b.utag_main.ses_id=d;}else{b.utag_main={_st:c,ses_id:d}}
utag.loader.SC("utag_main",{"_st":c,"ses_id":d+";exp-session"});}else{utag.loader.SC("utag_main",{"_st":c})}
for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
o["dom.referrer"]=eval("document."+"referrer");o["dom.title"]=""+document.title;o["dom.domain"]=""+location.hostname;o["dom.query_string"]=""+(location.search).substring(1);o["dom.url"]=""+document.URL;o["dom.pathname"]=""+location.pathname;},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];for(c=0;c<b.length;c++){if(b[c].match(/^(.*?)=(.*)$/)){ck=RegExp.$1;cv=RegExp.$2;}
try{e=decodeURIComponent(cv);}catch(er){e=""};if(typeof ck!="undefined"&&(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0)){e=e.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=decodeURIComponent(h[i]);v=h}else v=decodeURIComponent(g[1]);j[g[0]]=v;}catch(er){};}
o[ck]={};e=(new Date()).getTime();for(f in utag.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(/^(.*);exp-(.*)$/)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:e-1):parseInt(RegExp.$2);if(k>e)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(/^(.*);exp-(.*)$/)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:e-1):parseInt(RegExp.$2);j[f]=(k<e)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;v="";x="Thu, 31 Dec 2099 00:00:00 GMT";if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=(new Date()).getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push(g+":"+encodeURIComponent(d[g]))};if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){utag.DB('utag.loader.LOAD:add sender-'+a);this.f[a]=1;if(utag.loader.wq.length>0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0)return};utag.DB('CLEAR FORCE');clearTimeout(utag.loader.ft);utag.handler.INIT()}},EV:function(a,b,c,d){if(b=="ready"){if(document.readyState==="complete")setTimeout(c,1);else{if(typeof utag.loader.ready_q=="undefined"){utag.loader.ready_q=[];utag.loader.run_ready_q=function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){};}}}
utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){try{console.log(a)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]));}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')));}},view:function(a,c){return this.track('view',a,c);},link:function(a,c){return this.track('link',a,c);},track:function(a,b,c){for(var i in utag.loader.GV(utag.o)){try{utag.o[i].handler.trigger(a,b)}catch(e){};}
if(c)try{c()}catch(e){};return true;},handler:{base:"",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){this.iflag=1;utag.DB('utag.handler.INIT');a=utag.loader.q.length;if(a>0){for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b)}}
if(utag.cfg.noview!=true)utag.handler.trigger('view',utag.data);},test:function(){return 1},trigger:function(a,b,c,d){utag.DB('trigger:'+a);b=b||{};if(!this.iflag){utag.loader.q.push({a:a,b:b});return;}
for(c in utag.loader.GV(this.df)){if(typeof this.df[c]!="function"&&typeof b[c]=="undefined")b[c]=this.df[c]}
utag.DB('All Tags EXTENSIONS');for(c=0;c<this.extend.length;c++){try{this.extend[c](a,b);utag.rpt['ex_'+c]=0}catch(e){utag.rpt['ex_'+c]=1;if(typeof utag_err!="undefined"){utag_err.push({e:e.message,s:utag.cfg.path+'utag.js',l:c,t:'ge'})};}};for(c in utag.loader.GV(utag.send)){if(typeof utag.sender[c]!="undefined"){try{utag.sender[c].send(a,utag.handler.C(b));utag.rpt['s_'+c]=0}catch(e){utag.rpt['s_'+c]=1};utag.rpt.ts['s']=new Date();utag.RP(utag.rpt);}}
c=this.base.split(",");for(d=0;d<c.length;d++){if(typeof b[c[d]]!="undefined")this.df[c[d]]=b[c[d]]};for(d in utag.loader.GV(b)){if(d.indexOf('dom.')==0)this.df[d]=b[d]};this.o=b;},C:function(a,b,c,d){b={};for(c in utag.loader.GV(a)){if(typeof a[c]!="function")b[c]=a[c]}
return b}}};utag.o['mjet.main']=utag;utag.cfg={v:"ut4.004.201404081847",session_timeout:1800000,readywait:0,noload:0,forcetimeout:3000,domain:utag.loader.lh(),path:"//tags.tiqcdn.com/utag/mjet/main/qa/",utid:"mjet/main/201404081847"};try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};utag.cond={21:0,2:0,22:0,30:0,23:0,29:0,27:0,28:0,9:0,12:0,20:0,15:0,10:0,19:0,31:0};utag.pagevars=function(){try{utag.data['js_page.mindJet.lang']=mindJet.lang}catch(e){};try{utag.data['js_page.mindJet.localeCode']=mindJet.localeCode}catch(e){};};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(){try{utag.cond[21]|=(utag.data['dom.url'].toString().indexOf('http://www.mindjet.com/shop/projectdirector/')>-1&&utag.data['js_page.mindJet.localeCode'].toString().toLowerCase()=='en'.toLowerCase())}catch(e){};try{utag.cond[2]|=(utag.data['dom.url']=='http://www.mindjet.com/shop')||(utag.data['dom.url'].toString().indexOf('https://www.mindjet.com/shop')>-1)}catch(e){};try{utag.cond[22]|=(utag.data['dom.url'].toString().indexOf('http://www.mindjet.com/products/mindmanager/')>-1&&utag.data['js_page.mindJet.localeCode'].toString().toLowerCase()=='en'.toLowerCase())}catch(e){};try{utag.cond[30]|=(utag.data['js_page.mindJet.lang']=='fr'&&utag.data['dom.url'].toString().indexOf('signup')<0&&utag.data['dom.url'].toString().indexOf('/start/mindmanager')<0&&utag.data['dom.url'].toString().indexOf('action')<0&&utag.data['dom.url'].toString().indexOf('/mindmanager')>-1)||(utag.data['js_page.mindJet.lang']=='fr'&&utag.data['dom.url'].toString().indexOf('/support/customer-support')>-1)||(utag.data['js_page.mindJet.lang']=='fr'&&utag.data['dom.url'].toString().indexOf('/learning-center')>-1)||(utag.data['js_page.mindJet.lang']=='fr'&&utag.data['dom.url'].toString().indexOf('/support/webinars')>-1)||(utag.data['js_page.mindJet.lang']=='fr'&&utag.data['dom.url'].toString().indexOf('/support/msa')>-1)}catch(e){};try{utag.cond[23]|=(utag.data['dom.url'].toString().indexOf('learn.mindjet.com')<0)}catch(e){};try{utag.cond[29]|=(utag.data['js_page.mindJet.lang']=='uk'&&utag.data['dom.url'].toString().indexOf('signup')<0&&utag.data['dom.url'].toString().indexOf('/start/mindmanager')<0&&utag.data['dom.url'].toString().indexOf('action')<0&&utag.data['dom.url'].toString().indexOf('/mindmanager')>-1)||(utag.data['js_page.mindJet.lang']=='uk'&&utag.data['dom.url'].toString().indexOf('/support/customer-support')>-1)||(utag.data['js_page.mindJet.lang']=='uk'&&utag.data['dom.url'].toString().indexOf('/learning-center')>-1)||(utag.data['js_page.mindJet.lang']=='uk'&&utag.data['dom.url'].toString().indexOf('/support/webinars')>-1)||(utag.data['js_page.mindJet.lang']=='uk'&&utag.data['dom.url'].toString().indexOf('/support/msa')>-1)}catch(e){};try{utag.cond[27]|=(utag.data['dom.url']=='http://www.mindjet.com/')||(utag.data['dom.url']=='http://www.mindjet.com/spigitengage/')}catch(e){};try{utag.cond[28]|=(utag.data['js_page.mindJet.lang']=='de'&&utag.data['dom.url'].toString().indexOf('signup')<0&&utag.data['dom.url'].toString().indexOf('/start/mindmanager')<0&&utag.data['dom.url'].toString().indexOf('action')<0&&utag.data['dom.url'].toString().indexOf('/mindmanager')>-1)||(utag.data['js_page.mindJet.lang']=='de'&&utag.data['dom.url'].toString().indexOf('/support/customer-support')>-1)||(utag.data['js_page.mindJet.lang']=='de'&&utag.data['dom.url'].toString().indexOf('/learning-center')>-1)||(utag.data['js_page.mindJet.lang']=='de'&&utag.data['dom.url'].toString().indexOf('/support/webinars')>-1)||(utag.data['js_page.mindJet.lang']=='de'&&utag.data['dom.url'].toString().indexOf('/support/msa')>-1)}catch(e){};try{utag.cond[9]|=(utag.data['dom.url']=='http://www.mindjet.com/3')||(utag.data['dom.url']=='http://qe-wwwa.mindjet.net/3')||(utag.data['dom.url']=='http://qe-wwwb.mindjet.net/3')||(utag.data['dom.url']=='http://www-dev.mindjet.net/3')||(utag.data['dom.url']=='https://www.mindjet.com/3')||(utag.data['dom.url']=='https://qe-wwwa.mindjet.net/3')||(utag.data['dom.url']=='https://qe-wwwb.mindjet.net/3')||(utag.data['dom.url']=='https://www-dev.mindjet.net/3')||(utag.data['dom.url']=='http://signup.mindjet.com/3')||(utag.data['dom.url']=='https://signup.mindjet.com/3')||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=win'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=mac'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/ja/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=win'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/ja/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=mac'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/au/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=win'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/au/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=mac'.toLowerCase())>-1)}catch(e){};try{utag.cond[12]|=(utag.data['dom.url'].toString().indexOf('http://www.mindjet.com/products/mindmanager')>-1)||(utag.data['dom.url'].toString().indexOf('https://www.mindjet.com/products/mindmanager')>-1)||(utag.data['dom.url']=='http://www.mindjet.com/products/mindmanager')||(utag.data['dom.url']=='https://www.mindjet.com/products/mindmanager')}catch(e){};try{utag.cond[15]|=(utag.data['js_page.mindJet.lang']=='en'&&utag.data['dom.url'].toString().indexOf('signup')<0&&utag.data['dom.url'].toString().indexOf('/start/mindmanager')<0&&utag.data['dom.url'].toString().indexOf('action')<0&&utag.data['dom.url'].toString().indexOf('/mindmanager')>-1)||(utag.data['js_page.mindJet.lang']=='en'&&utag.data['dom.url'].toString().indexOf('/support/customer-support')>-1)||(utag.data['js_page.mindJet.lang']=='en'&&utag.data['dom.url'].toString().indexOf('/learning-center')>-1)||(utag.data['js_page.mindJet.lang']=='en'&&utag.data['dom.url'].toString().indexOf('/support/webinars')>-1)||(utag.data['js_page.mindJet.lang']=='en'&&utag.data['dom.url'].toString().indexOf('/support/msa')>-1)}catch(e){};try{utag.cond[20]|=(utag.data['dom.url'].toString().indexOf('http://www.mindjet.com/shop/')>-1&&utag.data['js_page.mindJet.localeCode'].toString().toLowerCase()=='en'.toLowerCase())}catch(e){};try{utag.cond[19]|=(utag.data['dom.url'].toString().indexOf('https://www.mindjet.com/start/mindmanager')>-1&&utag.data['js_page.mindJet.localeCode'].toString().toLowerCase()=='en'.toLowerCase())}catch(e){};try{utag.cond[10]|=(utag.data['dom.url'].toString().indexOf('http://www.mindjet.com/2')>-1)||(utag.data['dom.url'].toString().indexOf('http://qe-wwwa.mindjet.net/2')>-1)||(utag.data['dom.url'].toString().indexOf('http://qe-wwwb.mindjet.net/2')>-1)||(utag.data['dom.url'].toString().indexOf('http://www-dev.mindjet.net/2')>-1)||(utag.data['dom.url'].toString().indexOf('https://www.mindjet.com/2')>-1)||(utag.data['dom.url'].toString().indexOf('https://qe-wwwa.mindjet.net/2')>-1)||(utag.data['dom.url'].toString().indexOf('https://qe-wwwb.mindjet.net/2')>-1)||(utag.data['dom.url'].toString().indexOf('https://www-dev.mindjet.net/2')>-1)||(utag.data['dom.url'].toString().indexOf('http://signup.mindjet.com/2')>-1)||(utag.data['dom.url'].toString().indexOf('https://signup.mindjet.com/2')>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/de/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=win'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/de/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=mac'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/uk/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=win'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/uk/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=mac'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/eu/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=win'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/eu/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=mac'.toLowerCase())>-1)||(utag.data['dom.url'].toString().toLowerCase().indexOf('http://www.mindjet.com/fr/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=win'.toLowerCase())>-1)||(utag.data['dom.domain'].toString().toLowerCase().indexOf('http://www.mindjet.com/fr/mindmanager-trial-download/?'.toLowerCase())>-1&&utag.data['dom.url'].toString().toLowerCase().indexOf('os=mac'.toLowerCase())>-1)}catch(e){};try{utag.cond[31]|=(utag.data['js_page.mindJet.lang']=='eu'&&utag.data['dom.url'].toString().indexOf('signup')<0&&utag.data['dom.url'].toString().indexOf('/start/mindmanager')<0&&utag.data['dom.url'].toString().indexOf('action')<0&&utag.data['dom.url'].toString().indexOf('/mindmanager')>-1)||(utag.data['js_page.mindJet.lang']=='eu'&&utag.data['dom.url'].toString().indexOf('/support/customer-support')>-1)||(utag.data['js_page.mindJet.lang']=='eu'&&utag.data['dom.url'].toString().indexOf('/learning-center')>-1)||(utag.data['js_page.mindJet.lang']=='eu'&&utag.data['dom.url'].toString().indexOf('/support/webinars')>-1)||(utag.data['js_page.mindJet.lang']=='eu'&&utag.data['dom.url'].toString().indexOf('/support/msa')>-1)}catch(e){};};utag.pre=function(){utag.loader.initdata();utag.pagevars();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b){if(document.URL.match('qe-signupa.mindjet.net/3')){console.log("got here");var p1Params=document.URL.split('?')[1];window.location="2"+"?"+p1Params;}},function(a,b){function getUrlParam(paramName){paramName=paramName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+paramName+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);if(results==null)return"";if(results=='undefined')return"";else return results[1];};if(document.URL.match('qe-signupa.mindjet.net/2')){var finalDestination=getUrlParam('fwd');window.location=finalDestination;}},function(a,b){var uf=window.location.pathname.replace(/^\/([^\/]*).*$/,"$1");if(uf==="eu"||uf==="uk"||uf==="fr"||uf==="de"||uf==="ja"||uf==="au"){utag.data["mindJet.lang"]=uf;}else{utag.data["mindJet.lang"]="en";}},function(a,b){if(b['qp.source'].toString().toLowerCase().indexOf('sem'.toLowerCase())>-1){b['meta.srch']='1'}}];utag.loader.initcfg=function(){utag.loader.cfg={"27":{load:1,send:1,wait:1,tid:23001},"1":{load:utag.cond[23],send:1,wait:1,tid:5001},"3":{load:1,send:1,wait:1,tid:7001},"11":{load:1,send:1,wait:1,tid:3015},"12":{load:1,send:1,wait:1,tid:12019},"24":{load:utag.cond[9],send:1,wait:1,tid:7050},"26":{load:utag.cond[10],send:1,wait:1,tid:7050},"41":{load:utag.cond[15],send:1,wait:1,tid:20067},"46":{load:utag.cond[12],send:1,wait:1,tid:1066},"47":{load:utag.cond[2],send:1,wait:1,tid:1066},"50":{load:1,send:1,wait:1,tid:20064},"52":{load:utag.cond[20],send:1,wait:1,tid:20011},"53":{load:utag.cond[21],send:1,wait:1,tid:20011},"54":{load:utag.cond[22],send:1,wait:1,tid:20011},"55":{load:utag.cond[19],send:1,wait:1,tid:20011},"60":{load:utag.cond[27],send:1,wait:1,tid:6016},"131":{load:1,send:1,wait:1,tid:7114},"150":{load:1,send:1,wait:1,tid:20010},"158":{load:utag.cond[31],send:1,wait:1,tid:20067},"161":{load:utag.cond[29],send:1,wait:1,tid:20067},"162":{load:utag.cond[30],send:1,wait:1,tid:20067},"163":{load:utag.cond[28],send:1,wait:1,tid:20067}};utag.loader.cfgsort=["27","1","3","11","12","24","26","41","46","47","50","52","53","54","55","60","131","150","158","161","162","163"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i];};utag.loader.SETFORCE=function(a){utag.DB('SETFORCE:'+a);if(utag.loader.ft>0)clearTimeout(utag.loader.ft);utag.loader.ft=(utag.cfg.forcetimeout!=0)?setTimeout(utag.loader.FORCE,utag.cfg.forcetimeout):0}
utag.loader.FORCE=function(a,b,c,d){a=utag.sender;b=utag.loader.f;utag.DB('FORCE:'+a+':'+b);for(c in utag.loader.GV(b)){d=a[c].id;if(typeof b[c]!='undefined'&&b[c]==0){utag.DB('FORCEERROR:'+d);utag.rpt['f_'+d]=1;if(typeof utag_err!="undefined"){utag_err.push({e:'load error',s:utag.cfg.path+'utag.'+d+'.js',l:0,t:'le'})};delete utag.sender[d];delete utag.send[d];utag.loader.LOAD(d)}}}
utag.loader.INIT=function(a,b,c,d){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;utag.rpt.ts['i']=new Date();if(!utag.cfg.noload){try{this.GET()}catch(e){};var lq=[];for(a in this.GV(this.cfg)){b=this.cfg[a];b.id=a;if(b.wait==1){this.wq.push(b)}else if(b.load>0){if(b.send){c=false;utag.send[b.id]=b;}
if(b.load!=4){lq.push(b);this.f[b.id]=0;}}}
for(a=0;a<lq.length;a++){utag.DB('utag.loader.INIT: loading '+b.id);utag.loader.AS(lq[a])}
if(utag.loader.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.DB('READY:utag.loader.wq');utag.loader.rf=1;utag.loader.WQ();utag.loader.SETFORCE('WAIT')}});else if(lq.length==0)utag.handler.INIT();else utag.loader.SETFORCE('INIT')}
return 1};utag.cfg.readywait?utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.DB('READY:utag.cfg.readywait');utag.loader.INIT()}}):utag.loader.INIT();}