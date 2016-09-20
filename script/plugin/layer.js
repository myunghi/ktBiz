var vHalf;
var hHalf;
var layerId;
 $.makeMask = function() {
  if ($("div#mask").length == 0) {
   $('<div id="mask" class="mask">').css({
    position : "absolute",
    left : 0,
    top: 0,
    width : document.documentElement.scrollWidth + "px",
    height : document.documentElement.scrollHeight + "px",
    background : "#000",
    opacity : 0.5   
   }).appendTo("body");
  } else { $("div#mask").show(); }
 
  if ($("iframe#iframe_layer").length == 0) {
   $('<iframe id="iframe_layer" class="iframe_layer" frameborder="0" allowtransparency="true">').appendTo("body");
  } else { $("iframe#iframe_layer").show(); }
  
  $("#iframe_layer").css({
		width : $("#" + layerId).width(),
    height : $("#" + layerId).height()// - 23
	});
	
	//$("body").addClass("noScroll");
 };

//마스크 삭제
$.removeMask = function(id) {
	var layerId = id;
	$("div#mask").hide();
	$("iframe#iframe_layer").hide();
	$("#" + layerId).hide();
	showMask = 0;
	//$("body").removeClass("noScroll");
};
var showMask = 0;
$.layerPop = function(id) {
	layerId = id;
	$.makeMask();
	showMask = 1;
	var scrollT
	var ws = $("#" + layerId).width();
	var hs = $("#" + layerId).height();
		$(window).resize(function(){
			vHalf = parseInt(window.innerHeight ? window.innerHeight : window.document.documentElement.clientHeight);
			hHalf = parseInt(window.innerWidth ? window.innerWidth : window.document.documentElement.clientWidth);
			scrollT = parseInt(document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
			layerT = vHalf / 2 + scrollT;
			layerL = hHalf / 2 + document.documentElement.scrollLeft;
			layerT -= hs / 2;
			layerL -= ws / 2;
			if(vHalf > $("#" + layerId).height()){
				$("#" + layerId).css({"top": 0 + "px"}).show();
				$("#iframe_layer").css({"top": 0 + "px"}).show();
			} else {
				$("#" + layerId).css({"top": 0 + "px"}).show();
				$("#iframe_layer").css({"top": 0 + "px"}).show();
			}
			$("#mask").css("height", $("#wrapper").height());

/*
			if(hHalf > 1080 ){
				$("#mask").css({"width":"100%","z-index":"11"});
				$("#" + layerId).css({"left": layerL + "px"}).show();
				$("#iframe_layer").css({"left": layerL + "px"}).show();
			} else if (hHalf < 1080 && hHalf > $("#" + layerId).width() || hHalf == 1080 ){
				$("#mask").css("width", "1080px");
				$("#" + layerId).css({"left": layerL + "px"}).show();
				$("#iframe_layer").css({"left": layerL + "px"}).show();
			}else {
				$("#mask").css("width", "1080px");
				$("#" + layerId).css({"left": "0"}).show();
				$("#iframe_layer").css({"left": "0"}).show();
			}
			if (showMask != 1)
			{
				$("#" + layerId).hide();
				$("#iframe_layer").hide();
			} */
		}).resize();

	$(document).keyup(function(e) {
		if (e.keyCode == '27') {
			$.removeMask(layerId);
			$(document).unbind("keyup");
		}
	});



};


