/* ---------------------- banner carousal --------------------- */
$('.owl-carousel.banner-slide').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    center: true,
    nav:true,
    animateOut: 'fadeOut',
    autoplay: true,
    margin: 0,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});




/*---------------- top product carousal -----------------*/
$('.owl-carousel.product-carousal').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
   0:{
       items:1
   },
  
   600:{
       items:2
   },
   1000:{
       items:3
   }
  }
  })


  $('[data-fancybox]').fancybox({
	toolbar  : false,
	smallBtn : true,
iframe : {
	preload : false
	}
})


/* ---------------------- registration form banner --------------------- */
$('.owl-carousel.form-slider').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    center: true,
    nav:true,
    animateOut: 'fadeOut',
    autoplay: true,
    margin: 0,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});

// to top
$(window).on( 'scroll.myTemplat', scrollWindow).trigger( 'scroll.myTemplat' );

function scrollWindow() {
    if ($(window).scrollTop() > 300) {
        $('.to-top').addClass('active');
    } else {
        $('.to-top').removeClass('active');
    }
}

$( 'body' ).on( 'click', '.to-top',  function(event) {
    $('html, body').animate({
        scrollTop:0
    }, 400);
    return false;
});





/* ---------------------- MENU --------------------- */
$( 'body' ).on('click', '.nav-btn',  function( event ){
    $( event.currentTarget ).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $( 'body' ).toggleClass('no-scroll');
    return false;
});

$( window ).on('resize.myTemplate', function(){
    $('body')[ ( $(this).width() <= 767 ) ? 'addClass' : 'removeClass' ]('isMobile')
}).trigger( 'resize.myTemplate' );

$( 'body' ).on('click', '.dropdown>a', function( event){
    if( ! $('body.isMobile')[0] ){
        return;
    }

    var $thisLi = $( event.currentTarget ).parents( 'li' ),
    $thisLiActive = $thisLi.hasClass( 'dropdown-active' );

    $('.dropdown-active').removeClass('dropdown-active').children('ul').slideUp('slow');

    if( ! $thisLiActive ){
        $thisLi.addClass('dropdown-active');
        $thisLi.children('ul').slideDown('slow');
    }

    return false;
});

$( 'body' ).on( 'mouseenter', '.dropdown', function(event){
    if( $('body.isMobile')[0] ){
        return;
    }

    var menuItem = $( event.currentTarget );

    if( menuItem[0].timeOutMenu ){
        clearTimeout( menuItem[0].timeOutMenu );
    }

    menuItem.addClass('active');
}).on( 'mouseleave', '.dropdown', function( event ){
    if( $('body.isMobile')[0] ){
        return;
    }

    var menuItem = $( event.currentTarget );

    menuItem[0].timeOutMenu = setTimeout( function(){
        menuItem.removeClass('active');
    }, 500 );
});





var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

AOS.init();