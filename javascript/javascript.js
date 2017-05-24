//
// var hide = jQuery.Event("hide");
// var show = jQuery.Event("show");
$('#annoyed').hide();

$('#field').keyup(function () {
  var max = 255;
  var len = $(this).val().length;
  var difference = max - len;
  if (len > max) {
    $('#charNum').text(difference + ' characters left');
    $('#charNum2').css("color", "red");
    $('#charNum2').css("font-size", "1.5em");
    $('#charNum2').text("Oh no! Your text is too long! This makes Malkin unhappy");
    $('#happy').attr("src", "images/annoyed_malkin.jpg");
  } else {
    var char = max - len;
    $('#charNum').text(char + ' characters left');
    $('#charNum2').text("This makes Malkin happy");
    $('#annoyed').attr("src", "images/malkin_celebrate.jpg");
    $('#charNum2').css("color", "yellow");
    $('#charNum2').css("font-size", "1em");
  }
});
