//getting input on screen
function myFunction(x) {
  document.getElementById("typed").innerHTML += x;
}

// click equal to get ans
$("#equal").click(function() {
  var a = $("#typed").html();
  var b = eval(a);

  $("#result").text(b);
  $("#typed").html("");
});

//click Ac to clear all thing on the screen
$("#ac").click(function() {
  $("#typed").html("");
  $("#result").html("");
});
