function showSideNav() {
  var counter = 0;
  setTimeout(function() {
    $('.nav_box').each(function(i,v) {
      setTimeout(function(e) {
        console.log($(v));
        $($('.nav_box')[i]).fadeIn();
      }, counter);
      counter += 500;
    });
  }, 500);

  setTimeout(function() {
    $('.nav_name').animate({"opacity": "0"});
  }, 2700);
}

function sideNavHover() {
  $('.side_nav a').on("mouseover", function(e) {
    console.log("hover");
    $(this).siblings('.nav_name').animate({
      opacity: "1"
    }, 100);
  });
  $('.nav_box').on("mouseleave", function(e) {
    $(this).children('.nav_name').animate({
      opacity: "0"
    }, 100);
  });
}

function smoothScroll() {
  $('a[href*=#]:not([href=#])').click(function() {
    console.log("clicked");
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
}

function windowResize() {
  var window_height = $(window).height();
  $('.pane').css({"height": window_height});

  $(window).on("resize", function(e) {
    var window_height = $(window).height();
    $('.pane').animate({"height": window_height}, "fast");
  });
}
$(function(){
  showSideNav();
  sideNavHover();
  smoothScroll();
  windowResize();
});