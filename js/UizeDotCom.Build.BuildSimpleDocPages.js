/*
	UIZE Web Site

	http://www.uize.com/reference/UizeDotCom.Build.BuildSimpleDocPages.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Build.BuildSimpleDocPages',required:['Uize.Build.BuildSimpleDocPages','Uize.Wsh','Uize.Data.Simple','Uize.Url','UizeDotCom.Build.Util'],builder:function(){var _a=function(){};_a.perform=function(_b){var _c={},_d='reference',_e=/\.simple$/i,_f=/\.js$/i;function _g(_h){return Uize.Url.from(_h).fileName;}function _i(_h){var _j=Uize.Data.Simple.parse({simple:Uize.Wsh.readFile(_h),collapseChildren:true}).listings;for(var _k= -1,_l=_j.length;++_k<_l;){var _m=_j[_k];if(_m.link)_c[_m.fullName]=_m.link;}}_i('appendixes/credits.html.simpledata');_i('endorsements.html.simpledata');function _n(_o,_p,_q){for(var _r= -1,_s='/'+(_q||_o)+'/',_t=Uize.Wsh.getFiles(_o,_p,_g),_u=_t.length,_v;++_r<_u;)_c[_v=_t[_r]]=_s+_v+'.html';}_n('javascript-reference',_e);_n(env.moduleFolderPath,_f,_d);Uize.Build.BuildSimpleDocPages.perform(Uize.copyInto({urlDictionary:_c,examplesByKeyword:UizeDotCom.Build.Util.getExamplesByKeyword()},_b));};return _a;}});