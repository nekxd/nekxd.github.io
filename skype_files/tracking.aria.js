var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
define("apollo/tracking.aria",["apollo/document","apollo/user","apollo/user.preferences","apollo/settings","apollo/responsive","apollo/TrackingAria"],function(a,b,c,d,e,f){"use strict";var g=a.getEnvironment(),h=b.getLanguageCode(),i=c.isAuthenticated()?"1":"0",j=$("html").data("pagepath"),k=k||new f(d.errorsLogger.token),l=function(a,b){var c={env:g,lang:h,auth:i,pagename:j,responsive:e.getCurrentState(),err:m(a),requireType:a&&a.requireType?a.requireType:"",modules:a&&a.requireModules?a.requireModules:"",method:b};k.logEvent("consoleError",c)},m=function(a){return"object"==typeof a&&null!==a?JSON.stringify(a):a?a:"error"};return{logConsoleError:l}});
}

/*
     FILE ARCHIVED ON 19:50:26 Nov 28, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:41:02 Jul 08, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.303
  load_resource: 215.369 (2)
  PetaboxLoader3.resolve: 164.196 (2)
  PetaboxLoader3.datanode: 26.934 (2)
*/