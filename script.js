$(document).ready(function() {

  var build = function(row, col) {
    for (var i=0; i<(row*col); i++){
      $('.container').append("<div class='grid'></div>");
    };

    var heightdiv = ($('html').height()-16)/row;
    var widthdiv = ($('html').width()-16)/col;

    $('.grid').css("height", heightdiv);
    $('.grid').css("width", widthdiv);
    $('.grid').css("float", 'left');
    $('.grid').css("background-color", 'white');
    $('.grid').css("border", '1px', '#d56a6a');

    $('.grid').hover(function() {
      $(this).css('background-color', '#5265e2');
    }, function() {
      $(this).css('background-color', '#464646');
    });
  };

  var row = 4;
  var col = 4;
  build(4,4);

  $('#reset').click(function() {
    $('.grid').fadeOut('slow');
    $('.container').empty();

    var row = prompt("Enter the number of rows you'd like, over 70 it starts becoming very slow.");
    var col = prompt("Enter the number of columns you'd like, over 70 it starts becoming very slow.");
    build(row, col);
  });

  $('#random').click(function() {

    var row = prompt("Enter the number of rows you'd like, over 70 it starts becoming very slow.");
    var col = prompt("Enter the number of columns you'd like, over 70 it starts becoming very slow.");
    build(row, col);

    $('.grid').hover(function(){
      var r = Math.floor((Math.random()*255)+1);
      var g = Math.floor((Math.random()*255)+1);
      var b = Math.floor((Math.random()*255)+1);
      var rgbcolor = "rgb("+r+","+g+","+b+")";
      $(this).css('background-color', rgbcolor)
    }, function(){
      var r = Math.floor((Math.random()*255)+1);
      var g = Math.floor((Math.random()*255)+1);
      var b = Math.floor((Math.random()*255)+1);
      var rgbcolor = "rgb("+r+","+g+","+b+")";
      $(this).css('background-color', rgbcolor)
    });
  });
});
