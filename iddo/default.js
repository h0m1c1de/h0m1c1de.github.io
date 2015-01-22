$(document).ready(function () {
	$(".work").hover(function () {
		$(this).find(".designedby").stop().slideToggle(".hiden");
	});
	var $panel = $(".panel");
	$(".skills a").on("click", function () {
		if($(this).closest(".panel").hasClass("opened")){
			$(this).closest(".panel").removeClass('opened');
		}else{
			
		$panel.removeClass('opened');
		$(this).closest(".panel").addClass('opened');
		}
		

	});

	function scrollTo(buttonClass, scrollToClass) {
		$(buttonClass).click(function () {
			$('html, body').animate({
				scrollTop: $(scrollToClass).position().top
			}, 1000);
		});

	}
	scrollTo(".serv", ".services");
	scrollTo(".port", ".works");
	scrollTo(".abo", ".team");
	scrollTo(".cont", ".contactus");

});