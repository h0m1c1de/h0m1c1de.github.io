$(document).ready(function(){
	$(".work").hover( function(){
		$(this).find(".designedby").stop().slideToggle(".hiden");
	});
	$(".skills a").on("click", function(){
		$(this).find(".glyphicon-plus, .glyphicon-minus").toggleClass('hide');
	});
});