// JavaScript Document
$(function(){
	$(".partul ul li").click(function(){
		$(this).addClass("chos").siblings().removeClass("chos");
		var index = $(".partul ul li").index(this);
		showlist(index);
		return false;
		}).eq(0).click();
	
	
	})
	function showlist(index){
		var rollwidth = $(".partthreeimage").width();
		$(".partthreeimage div").stop(true,false).animate({left:-rollwidth*index},1000);
		}