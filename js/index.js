	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top -70
			}, 1000);
			return false;
		  }
		}
	  });
	});

	$(function() {
	  if($(window).width() <= 990) {
	    $("img").each(function() {
	      $(this).attr("src", $(this).attr("src").replace("img/profile-pic.jpg", "img/profile-pic-round.jpg"));
	    });
	  }
	});
