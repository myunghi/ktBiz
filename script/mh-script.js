$(function(){


	//btnTop

	   $(".btnTop").on("click",function(e){
		$("html,body").animate({
			scrollTop:0
		},200)
	   });



	// portfolio main visualslide hover

	$(".slidBox").mouseenter(
		function() { 
			$(this).children('.maskSlid').stop(true,true).slideDown("slow");
			$(this).children('.maskTxt').stop(true,true).slideDown("slow");
			$(this).children('img').addClass('on');;
		}
	);
	$(".slidBox").mouseleave(
		function() { $(this).stop(true,true); },
		function() { 
			$(this).children('.maskSlid').stop(true,true).delay(200).slideUp("slow");
			$(this).children('.maskTxt').stop(true,true).delay(200).slideUp("slow");
			$(this).children('img').removeClass('on');;
		}
	);

	
	/*popupClose (layerPopup)
	$(".btnClose").click(function() {
			$.removeMask('popProfile'),
			$("body").css("overflow","auto");;
		});
	*/

	//popupClose
	$(document).ready(function(){
		$(".profile").click(function(){
		$("#popProfile").show();
		$("#popProfile").addClass("popShadow");
		});

		$("a.btnClose").click(function(){
		$("#popProfile").hide();
		});

	});

	/*scroll
		var jbOffset = $( '#header' ).offset();
    $( window ).scroll( function() {
    	if ( $( document ).scrollTop() > jbOffset.top ) {
      	$( '#header' ).addClass( 'scroll' );
			} else {
      	$( '#header' ).removeClass( 'scroll' );
      }
    });*/


});



// 메뉴 스크롤 이동 함수
function menuScroll(obj){
	var position = $("#"+obj).offset();
	$('html, body').animate({scrollTop : position.top}, 650);
}

