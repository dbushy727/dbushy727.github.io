hideProjects = function(){
  $('#project_1').hide();
  $('#project_2').hide();
}
showProjects = function(){
  $('#project_1').show();
  $('#project_2').show();
}
hideSkills = function(){
  $('#skills').hide();
  $('#skills_plus').hide();
}
showSkills = function(){
  $('#skills').show();
  $('#skills_plus').show();
}
hideAboutMe = function(){
  $('#about_me').hide();
}
showAboutMe = function(){
  $('#about_me').show();
}

animateCircle1 = function(){
  var $first_circle = $('.first_circle');
  $('.first_circle').on("click", function(){
    if ($first_circle.hasClass("initial_state") ){
      $('#main_heading').css("margin-top", "-1px")
      $('.second_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $('.third_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $( ".first_circle" ).animate({
        height: "+=170px",
        width: "+=50%",
        "border-radius": "-=40%"
      }, 1000);
      $('.first_circle').children().animate({
        top: "5%"}, 1000)
      $first_circle.removeClass("initial_state");
      $('.body_left').removeClass("one-third column").addClass("sixteen columns")
      $('.body_middle').hide()
      $('.body_right').hide()
      showAboutMe();
  } else {
      $('#main_heading').css("margin-top", "168px")
      $('.second_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $('.third_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $( ".first_circle" ).animate({
        height: "-=170px",
        width: "-=50%",
        "border-radius": "+=40%"
      }, 1000);
      $('.first_circle').children().animate({
        top: "45%"}, 1000)
      $('.body_left').removeClass("sixteen columns").addClass("one-third column")
      $first_circle.addClass("initial_state");
      $('.body_middle').show()
      $('.body_right').show()
      hideAboutMe();
    }
  })
}
animateCircle2 = function(){
  var $second_circle = $('.second_circle')
  $('.second_circle').on("click", function(){
    if ($second_circle.hasClass("initial_state") ){
      $('#main_heading').css("margin-top", "-1px")
      $('.first_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $('.third_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $( ".second_circle" ).animate({
        height: "+=170px",
        width: "+=50%",
        "border-radius": "-=40%"
      }, 1000);
      $('.second_circle').children().animate({
        top: "5%"}, 1000)
      $second_circle.removeClass("initial_state");
      $('.body_middle').removeClass("one-third column").addClass("sixteen columns")
      $('.body_left').hide()
      $('.body_right').hide()
      showProjects();
  } else {
      $('#main_heading').css("margin-top", "168px")
      $('.first_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $('.third_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $( ".second_circle" ).animate({
        height: "-=170px",
        width: "-=50%",
        "border-radius": "+=40%"
      }, 1000);
      $('.second_circle').children().animate({
        top: "45%"}, 1000)
      $('.body_middle').removeClass("sixteen columns").addClass("one-third column")
      $second_circle.addClass("initial_state");
      $('.body_left').show()
      $('.body_right').show()
      hideProjects();
    }
  })
}
animateCircle3 = function(){
  var $third_circle = $('.third_circle')
  $('.third_circle').on("click", function(){
    if ($third_circle.hasClass("initial_state") ){
      $('#main_heading').css("margin-top", "-1px")
      $('.first_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $('.second_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $( ".third_circle" ).animate({
        height: "+=170px",
        width: "+=50%",
        "border-radius": "-=40%"
      }, 1000);
      $('.third_circle').children().animate({
        top: "5%"}, 1000)
      $third_circle.removeClass("initial_state");
      $('.body_right').removeClass("one-third column").addClass("sixteen columns")
      $('.body_left').hide()
      $('.body_middle').hide()
      showSkills();
  } else {
      $('#main_heading').css("margin-top", "168px")
      $('.first_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $('.second_circle').animate({
        height: "toggle", width: "toggle"}, 1000)
      $( ".third_circle" ).animate({
        height: "-=170px",
        width: "-=50%",
        "border-radius": "+=40%"
      }, 1000);
      $('.third_circle').children().animate({
        top: "45%"}, 1000)
      $('.body_right').removeClass("sixteen columns").addClass("one-third column")
      $third_circle.addClass("initial_state");
      $('.body_left').show()
      $('.body_middle').show()
      hideSkills();
    }
  })
}
$(function(){
  hideProjects();
  hideSkills();
  hideAboutMe();
  animateCircle1();
  animateCircle2();
  animateCircle3();
});