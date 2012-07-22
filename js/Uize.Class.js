/*
	UIZE JAVASCRIPT FRAMEWORK 2012-07-21

	http://www.uize.com/reference/Uize.Class.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Class',builder:function(a_a){var a_b,a_c='string',a_d='object',a_e=Uize,a_f=a_e.clone,a_g=a_e.copyInto,a_h=a_e.forEach,a_i=a_e.getClass,a_j=a_e.getGuid,a_k=a_e.globalEval,a_l=a_e.isArray,a_m=a_e.isFunction,a_n=a_e.isInstance,a_o=a_e.isObject,a_p=a_e.noNew,a_q=a_e.pairUp;var a_r=[],a_s={};var a_t=a_u(function(){},function(){this.instanceId=a_j();},function(a_v){a_v||(a_v=a_s);var a_w={},a_x=this.Class.a_x,a_y,a_z;for(a_y in a_x){if(a_y in a_v)a_w[a_y]=a_v[a_y];else if((a_z=a_x[a_y])!==a_b)a_w[a_y]=a_z;}for(a_y in a_v)a_y in a_w||(a_w[a_y]=a_v[a_y]);this.set(a_w);}),a_A=a_t.prototype,a_B=a_t.nonInheritableStatics;function a_C(a_D,a_E){var a_t=a_i(a_D);return(a_t.a_F[a_E]||a_t.a_G[a_E]);}function a_H(a_D,a_E){var a_I=a_C(a_D,a_E);return a_I?a_I.a_J:a_E;}a_t.a_K=a_A.a_K=function(a_L,a_M){if(a_L.charCodeAt(0)==67&& !a_L.indexOf('Changed.')){var a_D=this,a_N=a_L.slice(8),a_I=a_C(a_D,a_N);if(a_I&&a_N!=a_I.a_O)a_L='Changed.'+(a_N=a_I.a_O);a_M(a_L);(a_D.a_P||(a_D.a_P={}))[a_N]=
a_D.a_Q&&a_D.a_Q[a_L];}else{a_M(a_L);}};a_t.wire=a_A.wire=function(a_R,a_S){var a_D=this;if(arguments.length==2){a_D.a_K(a_R,function(a_L){var a_Q=a_D.a_Q||(a_D.a_Q=a_D.eventHandlers={});(a_Q[a_L]||(a_Q[a_L]=[])).push({a_L:a_L,a_S:a_m(a_S)?a_S:typeof a_S==a_c?new Function(a_S):function(a_T){a_S.fire(a_T)},a_U:a_S});});}else if(a_o(a_R)){for(var a_L in a_R)this.wire(a_L,a_R[a_L]);}};a_t.fire=a_A.fire=function(a_T){if(typeof a_T!=a_d)a_T={name:a_T};var a_D=this,a_Q=a_D.a_Q;if(a_Q){var a_V=a_Q[a_T.name],a_W=a_Q['*'];if(a_V||a_W){a_T.source||(a_T.source=a_D);var a_X=a_W&&a_V?a_W.concat(a_V):a_W||a_V,a_Y=a_X.length;if(a_Y==1){a_X[0].a_S(a_T);}else if(a_Y==2){var a_Z=a_X[0].a_S,a_0=a_X[1].a_S;a_Z(a_T);a_0(a_T);}else{if(!a_W|| !a_V)a_X=a_X.concat();for(var a_1= -1;++a_1<a_Y;)a_X[a_1].a_S(a_T);}}}if(a_T.bubble&&a_D.parent&&a_n(a_D)){a_T.source||(a_T.source=a_D);a_D.parent.fire(a_T);}return a_T;};a_t.unwire=a_A.unwire=function(a_R,a_S){var a_D=this,a_Q=a_D.a_Q;if(a_Q){if(a_o(a_R)){for(var a_L in a_R)
a_D.unwire(a_L,a_R[a_L]);}else{a_D.a_K(a_R,function(a_L){var a_2=a_Q[a_L];if(a_2){if(a_S){for(var a_1=a_2.length;--a_1>=0;)a_2[a_1].a_U==a_S&&a_2.splice(a_1,1);}(a_S&&a_2.length)||delete a_Q[a_L];}});}}};a_t.get=a_A.get=function(a_y){if(typeof a_y==a_c){return this[a_H(this,a_y)];}else{var a_D=this,a_3={};if(!a_y){var a_t=a_i(a_D),a_G=a_t.a_G;for(var a_4 in a_G)a_3[a_G[a_4].a_O]=a_D[a_4];}else if(a_l(a_y)){for(var a_5= -1,a_6=a_y.length;++a_5<a_6;){var a_7=a_y[a_5];a_3[a_7]=a_D[a_H(a_D,a_7)];}}else{for(var a_7 in a_y)a_3[a_7]=a_D[a_H(a_D,a_7)];}return a_3;}};a_t.registerProperties=function(a_8){var a_D=this,a_G=a_D.a_G,a_F=a_D.a_F;for(var a_4 in a_8){var a_9=a_8[a_4],a_ba=a_o(a_9),a_N=(a_ba?a_9.name:a_9)||a_4,a_bb=a_N,a_I=a_G[a_4]={a_J:a_4};if(a_N.indexOf('|')> -1){var a_bc=a_N.split('|');a_bb=a_bc[0];a_e.lookup(a_bc,a_I,a_F);}else{a_F[a_N]=a_I;}a_I.a_O=a_bb;if(a_ba){if(a_9.onChange)a_I.a_bd=a_9.onChange;if(a_9.conformer)a_I.a_be=a_9.conformer;a_D[a_4]=a_9.value;}}a_D.a_x=this.get();};
a_t.set=a_A.set=function(a_v){if(arguments.length>1)a_v=a_q.apply(0,arguments);var a_D=this,a_bf=a_n(a_D),a_t=a_bf?a_D.Class:a_D,a_F=a_t.a_F,a_G=a_t.a_G,a_I,a_bg,a_bh,a_bi,a_P=a_bf&&a_D.a_P,a_bj=a_P&&a_P['*'],a_bk,a_bl,a_4,a_N,a_bm,a_bn,a_bo;for(var a_E in a_v){a_bn=a_v[a_E];if(a_I=a_F[a_E]||a_G[a_E]){a_4=a_I.a_J;a_N=a_I.a_O;}else{(a_bm||(a_bm={}))[a_4=a_N=a_E]=a_I=a_bf?{}:{value:a_bn};}if(a_bf)(a_bo||(a_bo={}))[a_N]=a_I.a_be?(a_bn=a_I.a_be.call(a_D,a_bn,a_D[a_4])):a_bn;if(a_bn!==a_D[a_4]){if(a_bf){a_bj&&((a_bk||(a_bk={}))[a_N]=a_bn);a_P&&a_P[a_N]&&(a_bl||(a_bl=[])).push(a_N);function a_bp(a_bi){if(a_m(a_bi)){if(!a_bg){a_bg=[];a_bh=a_D.instanceId+'_handlerAlreadyAdded';}if(!a_bi[a_bh]){a_bi[a_bh]=1;a_bg.push(a_bi);}}else if(typeof a_bi==a_c){a_bp(a_D[a_bi]);}else if(a_l(a_bi)){a_h(a_bi,a_bp);}}a_I.a_bd&&a_bp(a_I.a_bd);}a_D[a_4]=a_bn;}}a_bm&&a_t.registerProperties(a_bm);if(a_bf){if(a_bg){for(var a_1= -1,a_bq=a_bg.length;++a_1<a_bq;){delete(a_bi=a_bg[a_1])[a_bh];a_bi.call(a_D,a_bo);}}
a_bk&&a_D.fire({name:'Changed.*',properties:a_bk});if(a_bl){for(var a_br= -1,a_bs=a_bl.length;++a_br<a_bs;)a_D.fire('Changed.'+a_bl[a_br]);}}else{a_t.a_x=this.get();}};a_t.toggle=a_A.toggle=function(a_bt){var a_bu= !this.get(a_bt);this.set(a_bt,a_bu);return a_bu;};a_A.kill=function(){var a_bv=this.instanceId;a_k('if(typeof '+a_bv+'!=\'undefined\')'+a_bv+'=null');};function a_u(a_t,a_bw,a_bx){function a_by(){var a_bz=[],a_bA=a_e.toString;a_h(this.get(),function(a_bn,a_bt){a_bz.push(a_bt+' : '+(a_bn&&(a_n(a_bn)||a_m(a_bn))?a_bA.call(a_bn):a_bn));});return a_bA.call(this)+'\n\n'+a_bz.sort().join('\n');}function a_bB(){return this[a_H(this,'value')];}var a_A=a_t.prototype,a_bC=a_p(function(){for(var a_bD= -1,a_bE=a_bF.length;++a_bD<a_bE;)a_bF[a_bD].apply(this,arguments);for(var a_bG= -1,a_bH=a_bI.length;++a_bG<a_bH;)a_bI[a_bG].apply(this,arguments);}),a_bJ=a_bC.prototype;var a_bn,a_bK=a_t.nonInheritableStatics||a_s;for(var a_y in a_t)if(!a_bK[a_y]&&(a_bn=a_t[a_y])!=a_A&& !(a_m(a_bn)&&a_bn.moduleName&&
/[A-Z]/.test(a_y.charAt(0))))a_bC[a_y]=a_f(a_bn);a_g(a_bJ,a_A);a_bJ.toString=a_by;a_bJ.valueOf=a_bB;a_bJ.Class=a_bC;a_bC.nonInheritableStatics={a_bL:1,nonInheritableStatics:1,toString:0,valueOf:0};a_bC.superclass=a_t;a_bC.toString=a_by;a_bC.valueOf=a_bB;var a_bF=a_bC.a_bF=(a_t.a_bF||a_r).concat(),a_bI=a_bC.a_bI=(a_t.a_bI||a_r).concat();a_bw&&a_bF.push(a_bw);a_bx&&a_bI.push(a_bx);a_bC.a_G||(a_bC.a_G={});a_bC.a_F||(a_bC.a_F={});return a_bC;};a_t.subclass=function(a_bw,a_bx){return a_u(this,a_bw,a_bx);};a_t.singleton=function(a_bM,a_v){var a_bL=this.a_bL||(this.a_bL={}),a_bN=a_bL[a_bM||(a_bM='')];a_bN?a_v&&a_bN.set(a_v):(a_bN=a_bL[a_bM]=this(a_v));return a_bN;};return a_t;}});