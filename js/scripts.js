$(document).ready(function() {


  $("button#lightblue").click(function() {
    $("body").removeClass();
    $("body").addClass("lightblue-background");
    $("#sparkles").toggle();
    $("#bubbles").hide();
    $("#sully").hide();
  });

  $("button#darkblue").click(function() {
    $("body").removeClass();
    $("body").addClass("darkblue");
    $("#bubbles").toggle();
    $("#sparkles").hide();
    $("#sully").hide();
  });

  $("button#orange").click(function() {
    $("body").removeClass();
    $("body").addClass("orange");
    $("#sully").toggle();
    $("#sparkles").hide();
    $("#bubbles").hide();
  });
});
