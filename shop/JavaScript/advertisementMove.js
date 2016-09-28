//scrollview移动

$(function(){
		var index = 0;
	var time = null;
	var len = $(".ultext li").length;
$(".advertisementtext ul li").mouseover(function(){
	var indexstring = "";
	index = $(".advertisementtext ul li").index(this);
	//index 点击的li在这个元素当中的index
	//indexstring = index.toString();
//	alert(indexstring);

    showImg(index);
	}).eq(0).mouseover();
		$('.advertisement').hover(function() {
			if (adTimer) {
				clearInterval(adTimer);
			}
		}, function() {
			adTimer = setInterval(function() {
				showImg(index);
				index++;
				if (index == len) {
					index = 0;
				}
			}, 5000);
		}).trigger("mouseleave");
})
function showImg(index){
	var newhref = $(".advertisementtext ul a").eq(index).attr("href");
	$(".advertisement a").attr("href",newhref).find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$(".advertisementtext ul li").removeClass("chos").css("opacity","0.7").eq(index).addClass("chos").css("opacity","1");
	}