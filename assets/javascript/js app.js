var topics = ["cat", "dog", "bird", "elephent", "fish", "monkey", "lion", "hours", "whale", "shark", "rabbit", "bear", "rat", "dolphin", "tiger"]

var newAnimal;
var queryURL;
var newGifElRino;


function buttonFun() {
    $("#topics-iew").empty();
    
    for (var i = 0; i < topics.length; i++) {
        var button = $('<button>');
        if (topics[i]).substring(0, 5).toLowerCase() === "relative") {
            button.addClass("btn relative-button btn-primary");
            var buttonTitle = topics[i].substring(6,):
            button.text(buttonTitle);
            button.attr("data-name", buttonTitle);
    }
    else {
        button.addClass("btn relative-button btn-dark");
        button.text(topics[i]);
        button.attr("data-name", topics[i]);
        }

        $("#topics-view").append(button);
    }
}

function getGifs(queryURL) {
       $.ajax({ url: queryURL, method: "GET" }).done(function (response) {
        for (var i = 0; i < 10; i++) {
            if ((response.data[i].rating === "g" || response.data[i].rating === "pg") && response.data[i].images.fixed_height.width < 500) {
                newGifElRino = $("<div>");
                newGifElRino.addClass("float-left");
                newGifElRino.append("<p>Rating: " + response.data[i].rating + "</p>");
                newGifElRino.append('<img class="float-left gif" data-state="still" src="' + response.data[i].images.fixed_height_still.url + '" data-still="' + response.data[i].images.fixed_height_still.url + '" data-animate="' + response.data[i].images.fixed_height.url + '">');
                console.log(response.data[i].images.fixed_height.url);
                console.log(response.data[i].images.fixed_height_still.url);
                $("#gifs").prepend(newGifElRino);
            }
        }
    });
}

function getMoArFun(queryURL) {
    $.ajax({ url: queryURL, method: "GET" }).done(function (response) {
        newGifElRino = $("<div>");
        newGifElRino.append("<p>Rating: " + response.Rated + "</p>");
        newGifElRino.addClass("float-left");
        console.log(response);
        newGifElRino.append('<img class="float-left giffyPiture" src="' + response.Poster + '">');
        $("#gifs").prepend(newGifElRino);
    });
}
buttonFun();

// event handler for instrument buttons
$("#topics-view").on("click", ".relative-button", function (event) {
    event.preventDefault();
    instrument = $(this).attr("data-name");
    console.log(family);
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + family + "&api_iHXEVyDxx0TJqK7ke6bDIQZ5STifwQp3";
    getGifs(queryURL);

});


$("#topics-view").on("click", ".family-button", function (event) {
    event.preventDefault();
    var searchTerm = $(this).attr("data-name");
 
    queryURL = "https://www.omdbapi.com/?&apikey=e7956eef&t=" + searchTerm;
    getMoArFun(queryURL);
});


$("#search-display").on("click", "#searchBtn", function (event) {
    event.preventDefault();
    var topic = $("relative-search").val().trim();
    if (topic !== "") {
 
        topics.push(topic);
        buttonFun();
    }
});


$("#gifs").on("click", ".gif", function () {
    var state = $(this).attr("data-state");

    if (state === "still") {
        var animate = $(this).attr("data-animate");
        $(this).attr("src", animate);
        $(this).attr("data-state", "animate");
    } else {
        var still = $(this).attr("data-still");
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
    }
});