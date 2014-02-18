initialize = function(){

  $('#main_heading').hide();
  $('#main_heading').fadeIn(5000,"swing", function(){});
  $('.information').hide();
}

animateCircles = function($circle1, $circle2, $circle3){
  $circle1.on("click", function(){
    $('.information').show();
    if ($circle1.hasClass("initial_state") ){
      $('#main_heading').css("margin-top", "-1px")
      $circle2.animate({
        height: "toggle", width: "toggle"}, 1000)
      $circle3.animate({
        height: "toggle", width: "toggle"}, 1000)
      $circle1.animate({
        height: "+=170px",
        width: "+=50%",
        "border-radius": "-=40%"
      }, 1000);
      $circle1.children().animate({
        top: "5%"}, 1000)
      $circle1.removeClass("initial_state");
      $circle1.parent().removeClass("one-third column").addClass("sixteen columns")
      $circle2.parent().hide()
      $circle3.parent().hide()
  } else {
      $('#main_heading').css("margin-top", "168px")
      $circle2.animate({
        height: "toggle", width: "toggle"}, 1000)
      $circle3.animate({
        height: "toggle", width: "toggle"}, 1000)
      $circle1.animate({
        height: "175px",
        width: "175px",
        "border-radius": "50%"
      }, 1000);
      $circle1.children().animate({
        top: "40%"}, 1000)
      setTimeout(function(){
        $circle1.parent().removeClass("sixteen columns").addClass("one-third column")
        $circle1.addClass("initial_state");
        $circle1.hide()
        $circle1.fadeIn(500)
        $circle2.parent().fadeIn(500)
        $circle3.parent().fadeIn(500)
      }, 1000)
      $('.information').hide();
    }
  })
}

$(function(){
  initialize();
  window.circle_one = animateCircles($('.first_circle'), $('.second_circle'), $('.third_circle'));
  window.circle_two = animateCircles($('.second_circle'), $('.first_circle'), $('.third_circle'));
  window.circle_three = animateCircles($('.third_circle'), $('.first_circle'), $('.second_circle'));
});