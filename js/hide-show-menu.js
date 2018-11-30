$( "#menu-button" ).click(function() {
  $( ".dropdown-content" ).toggleClass( "dropdown-content-show" );
});

$('.dropdown-content li a').click(function(){
	$( ".dropdown-content" ).toggleClass( "dropdown-content-show" );
});
