$(document).ready(function(){

$(".dropdown-button").dropdown({hover: false});
	 $(".button-collapse").sideNav();
	$('.about ul.tabs').tabs();
	$('.slider').slider({full_width: false});
	$('.modal-trigger').leanModal();
	$('.collapsible').collapsible();
	$('.datepicker').pickadate();
	 $('select').material_select();
	
		function scrollTo(buttonClass, scrollToClass) {
		$(buttonClass).click(function () {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $(scrollToClass).position().top-40
			}, 1000);
		});

	}
	scrollTo(".hom", "html");
	scrollTo(".abou", ".about");
	scrollTo(".new", ".newss");
	
		var position = $(".indicators").position().top + 60;
	$(".news").css({"margin-top" : position })
 
});
