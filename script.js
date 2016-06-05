$(document).ready(function() {
  for (var i=0; i<16; i++){
    $('.container').append("<div class='grid'></div>");
  };

  var heightdiv = ($('html').height()-16)/4;
  var widthdiv = ($('html').width()-16)/4;

  $('.grid').css("height", heightdiv);
  $('.grid').css("width", widthdiv);
  $('.grid').css("float", 'left');
  $('.grid').css("background-color", 'white');

  $('.grid').hover(function() {
    $(this).css('background-color', '#5265e2');
  }, function() {
    $(this).css('background-color', '#464646');
  });
});
