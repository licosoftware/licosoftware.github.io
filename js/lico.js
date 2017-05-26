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
$(document).ready(function() {
    jQuery(window).load(function() {
        setTimeout(loader(0),1000*10);
    });
    new WOW().init();
});

function loader(status){
    if (status == 0){
        $(".loader-page").fadeOut('slow');
        enableScrolling();
    }
    else if (status == 1){
        $(".loader-page").fadeIn('fast');
        disableScrolling();
    }
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });