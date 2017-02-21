// $("#selection").submit{
//   var learnimal = $("#Animal").val();
//   $("#output").text(learnimal);

$(document).ready(function() {
  $("select").children("option:first-child").hide();

  $("#selection").submit(function(event) {
    var learnimal = $("#Animal").val();

//  $("#output").text(learnimal);

  event.preventDefault();
  });
});
