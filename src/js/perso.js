var sk = document.getElementById('sk');
var fr = document.getElementById('fr');
var it = document.getElementById('it');

var southKorea = document.querySelector(".southKorea");
var france = document.querySelector(".france");
var italy = document.querySelector(".italy");

/*var countries = [southKorea, france, italy]*/
$(document).ready(function() {
  $("#sk").on("click", function () {
    $(".southKorea").addClass("visible");
    $(".france").removeClass("visible");
    $(".italy").removeClass("visible");
  })
  $("#fr").on("click", function () {
    $(".france").addClass("visible");
    $(".southKorea").removeClass("visible");
    $(".italy").removeClass("visible");
  })
  $("#it").on("click", function () {
    $(".italy").addClass("visible");
    $(".france").removeClass("visible");
    $(".southKorea").removeClass("visible");
  })
});


