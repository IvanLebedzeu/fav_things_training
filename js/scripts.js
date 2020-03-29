$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var favThings = [$("input#fav1").val(), $("input#fav2").val(), $("input#fav3").val(), $("input#fav4").val()];
    //var myFav1 = $("input#fav1").val();
    //var myFav2 = $("input#fav2").val();
    //var myFav3 = $("input#fav3").val();
    //var myFav4 = $("input#fav4").val();

    //var favThings = [fav1, fav2, fav3, fav4];
  
    
    //$(".myArray").append(favThings);

    $("#output").text(favThings);

   // $("#yourArray").show();
 
  });
});