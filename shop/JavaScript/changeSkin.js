//网站换肤
$(function(){
 var $li = $("#skin li");
 $li.click(function(){
	 switchSkin( this.id);
	 })
	 var cookie_skin = $.cookie("MyCssSkin");
	 if(cookie_skin)
	 {
		switchSkib(cookie_skin);
	 }
})
function switchSkin(skinName){
	$("#"+skinName).addClass("selected").siblings().removeClass("selected");
	$("#cssfile").attr("href","style/skin/"+skinName+".css");
	$.cookie("MyCssSkin",skinName,{path:'/',expires:10});
	
	}