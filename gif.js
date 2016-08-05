$(document).ready(function() {
    $(".random").click(function(event) {
        //alert("hey");
    

   
    var gif = $(event.target).text();
    console.log(gif);
    
    if ($(event.target).hasClass("btn-success")) {
        $(event.target).removeClass("btn-success");
    }
    else {
        $(event.target).addClass("btn-success");
    }

    var request = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC";
    console.log(request);
    $.getJSON(request, function (response) {
        console.log(response);
        console.log(response.data[1].images.url);

        $("img").remove();

        for(var j = 0; j < response.data.length; j++) {
            $("body").append($("<div class='content'>" + "<img src='" + response.data[j].images.fixed_height.url + "'>" + "</div>"));
        }
        //$("body").append($("<div>" + "<img src='" + data.data[0].images.fixed_height.url + "'>" + "</div>"));
    });
});
   $("#clear").click(function() {
       $( ".content" ).empty();
   });
});
