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
  $('.fa-male, .fa-wrench, .fa-code, .fa-envelope').on("mouseover", function(e) {
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
$(function(){
  showSideNav();
  sideNavHover();
});