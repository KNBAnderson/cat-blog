$(document).ready(function() {


  $("button#lightblue").click(function() {
    $("body").removeClass();
    $("body").addClass("lightblue-background");
    $("#sparkles").toggle();
  });

  $("button#darkblue").click(function() {
    $("body").removeClass();
    $("body").addClass("darkblue");
    $("#bubbles").toggle();
  });

  $("button#orange").click(function() {
    $("body").removeClass();
    $("body").addClass("orange");
    $("#sully").toggle();
  });
});
