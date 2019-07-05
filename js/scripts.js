function adjustStyle(width) {
  width = parseInt(width);
  if (width < 701) {
    $("#size-stylesheet").attr("href", "css/narrow.css");
  } else if (width < 900) {
    $("#size-stylesheet").attr("href", "css/medium.css");
  } else {
     $("#size-stylesheet").attr("href", "css/wide.css");
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});

$(function(){
  $("#loadedNavBar").load("navigation-bar.html");
});
