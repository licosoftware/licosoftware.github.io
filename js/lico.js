var a = 0;
$(".navbar-toggle").click(function() {
    0 == a ? ($("#toggle-bar").addClass("fa-close"), $("#toggle-bar").removeClass("fa-bars"), a = 1) : ($("#toggle-bar").addClass("fa-bars"), $("#toggle-bar").removeClass("fa-close"), a = 0)
});

function checkScroll() {
    var a = 100;
    if($(window).scrollTop() > a){
    	$("nav").removeClass("transparent");
    	$("nav").addClass("z-depth-2");
    }
	else{
		$("nav").addClass("transparent");
		$("nav").removeClass("z-depth-2");
	}
}

$("nav").length > 0 && $(window).on("scroll load resize", function() {
    checkScroll();
});