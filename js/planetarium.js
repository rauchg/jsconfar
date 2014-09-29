$(document).ready(function(){
  // Planetarium JS
  var nyanColors = ["#FF0000", "#FF9900", "#FFFF00", "#33FF00", "#0099FF", "#0031B3"];
  var lightsAmount = $("#color-lights1").children().length;
  function setPolygonFill(groupID) {
    var randChild = Math.floor((Math.random() * lightsAmount) + 1);
    var randColor = Math.floor((Math.random() * nyanColors.length));
    //Lets change randChild+" polygon to this nice color nyanColors[randColor]
    $(groupID).children().eq(randChild).attr('fill', nyanColors[randColor]);
  }

  var i;
  setInterval(function() {
    for (i = 0; i < 10; i++) {
      setPolygonFill("#color-lights1");
      setPolygonFill("#color-lights2");
      setPolygonFill("#color-lights3");
    }
  }, 500);

  $(".planetarium").click(function() {
    $(this).addClass("fly");
    $("#nyancataudio").trigger("play");
    $("#nyancataudio").animate({volume: 1}, 500);
    setTimeout(function() {
      $(".planetarium").removeClass("fly");
      $("#nyancataudio").animate({volume: 0}, 500);
    }, 6000);
  });
  $("#nyancataudio").trigger("pause");
  $("#nyancataudio").prop('volume', 0); //('volume', 0);
});