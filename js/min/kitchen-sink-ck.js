var myApp=new Framework7({modalTitle:"aparida",animateNavBackIcon:!0,pushState:!0,pushStateSeparator:"#page/",externalLinks:["external"],swipePanel:!0,swipePanelCloseOpposite:!0,swipePanelNoFollow:!0}),$=Dom7,mainView=myApp.addView(".view-main",{dynamicNavbar:!0});$(document).on("ajaxStart",function(){myApp.showIndicator()}),$(document).on("ajaxComplete",function(){myApp.hideIndicator()}),mainView.goBack();var photoBrowserPhotos=["img/mountains.png","img/beach.jpg","img/monkey.jpg","img/mountains.jpg","http://placekitten.com/1024/1024"],photoBrowserDark=myApp.photoBrowser({photos:photoBrowserPhotos,theme:"dark",navbar:!0,toolbar:!0,type:"popup"});$(document).on("pageAfterAnimation",function(){$(".ks-pb-standalone-dark").on("click",function(){photoBrowserDark.open()})}),$(document).on("pageAfterAnimation",'.page[data-page="index"]',function(){}),myApp.onPageInit("color-themes",function(e){var t="theme-white theme-black theme-yellow theme-red theme-blue theme-green theme-pink theme-lightblue theme-orange theme-gray",a="layout-dark layout-white";$(e.container).find(".ks-color-theme").click(function(){$("body").removeClass(t).addClass("theme-"+$(this).attr("data-theme"))}),$(e.container).find(".ks-layout-theme").click(function(){$("body").removeClass(a).addClass("layout-"+$(this).attr("data-theme"))})});