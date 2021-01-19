!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1s7i":function(t,i,o){"use strict";o.r(i),o.d(i,"ContactsModule",(function(){return O}));var c,r=o("ofXK"),a=o("tyNb"),u=o("fXoL"),s=o("AytR"),b=o("tk/3"),f=((c=function(){function t(e){n(this,t),this.http=e}return e(t,[{key:"index",value:function(){return this.http.get(s.a.contact.dashboard)}},{key:"delete",value:function(n){return this.http.post(s.a.contact.delete,{id:n})}},{key:"invite",value:function(n){return this.http.post(s.a.contact.invite,{id:n})}}]),t}()).\u0275fac=function(n){return new(n||c)(u.Qb(b.b))},c.\u0275prov=u.Db({token:c,factory:c.\u0275fac,providedIn:"root"}),c),l=o("TEn/");function p(n,t){if(1&n){var e=u.Nb();u.Mb(0,"div"),u.Mb(1,"div"),u.jc(2),u.Ib(3,"br"),u.Mb(4,"ion-button",2),u.Ub("click",(function(){u.ec(e);var n=t.$implicit;return u.Wb().invite(n)})),u.jc(5," Invite "),u.Lb(),u.Mb(6,"ion-button",3),u.Ub("click",(function(){u.ec(e);var n=t.$implicit;return u.Wb().remove(n)})),u.jc(7," Delete "),u.Lb(),u.Lb(),u.Ib(8,"br"),u.Lb()}if(2&n){var i=t.$implicit;u.xb(2),u.mc(" ",i.username," - ",i.email,"")}}var d,h,v,m,y,k,g=((v=function(){function t(e){n(this,t),this.contactService=e}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.contactService.index().subscribe((function(t){n.users=t}),(function(t){n.error=t}))}},{key:"invite",value:function(n){var t=this;this.contactService.invite(n.id).subscribe((function(n){t.user=n}),(function(n){t.error=n}))}},{key:"remove",value:function(n){var t=this;this.contactService.delete(n.id).subscribe((function(n){t.user=n}),(function(n){t.error=n}))}}]),t}()).\u0275fac=function(n){return new(n||v)(u.Hb(f))},v.\u0275cmp=u.Bb({type:v,selectors:[["app-contact-dashboard"]],decls:2,vars:1,consts:[[1,"ion-padding"],[4,"ngFor","ngForOf"],["color","success",3,"click"],["color","danger",3,"click"]],template:function(n,t){1&n&&(u.Mb(0,"ion-content",0),u.hc(1,p,9,2,"div",1),u.Lb()),2&n&&(u.xb(1),u.bc("ngForOf",t.users))},directives:[l.c,r.h,l.b],styles:[""]}),v),w=((h=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||h)},h.\u0275cmp=u.Bb({type:h,selectors:[["app-contact-discussion"]],decls:2,vars:0,template:function(n,t){1&n&&(u.Mb(0,"p"),u.jc(1," contact-discussion works!\n"),u.Lb())},styles:[""]}),h),L=((d=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||d)},d.\u0275cmp=u.Bb({type:d,selectors:[["app-contact-search"]],decls:2,vars:0,template:function(n,t){1&n&&(u.Mb(0,"p"),u.jc(1," contact-search works!\n"),u.Lb())},styles:[""]}),d),M=[{path:"",component:(m=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}(),m.\u0275fac=function(n){return new(n||m)},m.\u0275cmp=u.Bb({type:m,selectors:[["app-contacts"]],decls:14,vars:0,consts:[["slot","bottom"],["tab","login"],["name","home"],["tab","register"],["name","calendar"],["tab",""],["name","log-out-outline"]],template:function(n,t){1&n&&(u.Mb(0,"ion-tabs"),u.Mb(1,"ion-tab-bar",0),u.Mb(2,"ion-tab-button",1),u.Ib(3,"ion-icon",2),u.Mb(4,"ion-label"),u.jc(5,"Login"),u.Lb(),u.Lb(),u.Mb(6,"ion-tab-button",3),u.Ib(7,"ion-icon",4),u.Mb(8,"ion-label"),u.jc(9,"Register"),u.Lb(),u.Lb(),u.Mb(10,"ion-tab-button",5),u.Ib(11,"ion-icon",6),u.Mb(12,"ion-label"),u.jc(13,"Log Out"),u.Lb(),u.Lb(),u.Lb(),u.Lb())},directives:[l.m,l.k,l.l,l.e,l.h],styles:[""]}),m),children:[{path:"dashboard",component:g},{path:"discussion/:id",component:w},{path:"search",component:L},{path:"groups",loadChildren:function(){return o.e(12).then(o.bind(null,"cTxv")).then((function(n){return n.GroupsModule}))}},{path:"**",redirectTo:"dashboard"}]}],j=((y=function t(){n(this,t)}).\u0275mod=u.Fb({type:y}),y.\u0275inj=u.Eb({factory:function(n){return new(n||y)},imports:[[a.i.forChild(M)],a.i]}),y),I=o("PCNd"),O=((k=function t(){n(this,t)}).\u0275mod=u.Fb({type:k}),k.\u0275inj=u.Eb({factory:function(n){return new(n||k)},imports:[[r.b,I.a,j]]}),k)}}])}();