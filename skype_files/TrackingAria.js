var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
define("apollo/TrackingAria",["aria"],function(){"use strict";var a=function(a){b.call(this,a)},b=function(a){window.microsoft.applications.telemetry.LogManager.initialize(a),this.defaultLogger=new window.microsoft.applications.telemetry.Logger};return a.prototype.logEvent=function(a,b){var c=new window.microsoft.applications.telemetry.EventProperties;c.name=a;for(var d in b)b.hasOwnProperty(d)&&c.setProperty(d,b[d]);this.defaultLogger.logEvent(c)},a});
}

/*
     FILE ARCHIVED ON 19:50:27 Nov 28, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:41:03 Jul 08, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.281
  load_resource: 146.903 (2)
  PetaboxLoader3.datanode: 64.391 (2)
  PetaboxLoader3.resolve: 81.704
*/