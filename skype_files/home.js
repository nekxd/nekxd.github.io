var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
define("scom/home/home",["apollo/TabPanel","apollo/scroll","apollo/navigation","apollo/tracking","apollo/user.preferences","apollo/keycodes","apollo/settings","jquery","domReady!"],function(a,b,c,d,e,f,g,h){"use strict";var i="tourRight",j="tourDown",k="tour",l="home_v2_tour_panel",m="home_v2_scroll_from_tour",n="home_v2_tour_next_btn",o="home_v2_tour_prev_btn",p="activated",q="home_v2_signin",r="home_v2_myaccount",s="#signInButtonTop",t=".guestHostBtnWrapper",u="#guestHostButtonTop, #guestHostButtonBottom",v="#guestHostNotification",w="#tourSection",x=w+" .tourNextBtn",y=w+" .tourPreviousBtn",z="#featuresSection",A="#bottomCtaSection",B=function(){h("#guestHostFormWrapper").length>0&&H(),G(),E(),D(),F(),g.clicktale&&g.clicktale.enabled===!0&&require(["scom/clicktale"])},C=function(a,c,d){var e=this;new b.ScrollTarget(h(a)).smoothTo({complete:function(){c&&h(a).focus(),d&&d.call(e)}})},D=function(){h(x).on("click",function(){d.trackCustomClickEvent(k,n)}),h(y).on("click",function(){d.trackCustomClickEvent(k,o)})},E=function(){var b=new a(w,0,a.TAB_DESKTOP_MODE_SAME_AS_MOBILE,!1);new a(z,0,a.TAB_DESKTOP_MODE_SAME_AS_MOBILE,!1),b.registerTabChangeCallback(function(a){var b=a.tabCount-1;return a.currentTabIndex==b&&a.isChangeToNextTab&&a.isChangeByButton?(C(A,!0),d.trackCustomClickEvent(k,m),!1):(a.newTabIndex==b?h(x).removeClass(i).addClass(j):h(x).removeClass(j).addClass(i),d.trackCustomImpressionEvent(k,l+(a.newTabIndex+1)),!0)}),b.registerNextTabButton(x),b.registerPreviousTabButton(w+" .tourPreviousBtn")},F=function(){h.each(h("#promoSection .promo > a"),function(a,b){h(b).filter("a:not([data-campaign-id])").each(function(){d.addGenericClickEventTracking(h(this),{position:"promo",campaignId:"home_v2_promo"+(a+1)})})})},G=function(){var a=e.isAuthenticated(),b=h(s),c=q;if(a){var f=b.data("myaccount-text");b.text(f),b.attr("href",b.data("myaccount-link")),b.attr("title",f),b.attr("aria-label",f),c=r}d.addGenericClickEventTracking(b,{position:"hero",campaignId:c}),b.addClass(p)},H=function(){var a=c.getVersionOfOldInternetExplorer()<=9;a?(h(t).remove(),h(v).fadeIn(1e3)):require(["scom/GuestHostForm"],function(a){new a("#guestHostFormWrapper","#guestHostFormWrapper input","#guestHostSubmitButton",u)})};B()});
}

/*
     FILE ARCHIVED ON 19:48:26 Nov 28, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:41:00 Jul 08, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.379
  load_resource: 317.294 (2)
  PetaboxLoader3.resolve: 216.966 (2)
  PetaboxLoader3.datanode: 23.399 (2)
*/