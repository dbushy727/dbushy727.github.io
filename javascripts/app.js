function showSideNav() {
  var counter = 0;
  setTimeout(function() {
    $('.nav_box').each(function(i,v) {
      setTimeout(function(e) {
        console.log($(v));
        $($('.nav_box')[i]).fadeIn();
      }, counter);
      counter += 300;
    });
  }, 500);
}
function sideNavHover() {
  $('.nav_box').on("mouseover", function(e) {
    $(this).children('.nav_name').fadeIn();
  });
  $('.nav_box').on("mouseleave", function(e) {
    $(this).children('.nav_name').fadeOut();
  });
}
$(function(){
  showSideNav();
  sideNavHover();
});