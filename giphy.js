var topics = [];
console.log(topics);

function displayGif() {

    var gif = $(this).attr("data-gif");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=YsGun89Kky7BAttno03a1Nct8IF3eMPg&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

        var gifUrl = results[i].images.fixed_height.url;

        var gifDiv = $("<div id='gifs'>");

        var gifImage = $("<img>");

        gifImage.attr("src", gifUrl);

        gifImage.attr("alt", "Gif");

        var rating = response.rating;

        var pRating = $("<p>").text("Rating: " + rating);

        gifDiv.append(pRating);

        gifDiv.append(gifImage);

        $("#giphy-view").prepend(gifDiv);
        console.log(response);

        }

    });

}

function renderButtons() {

    $("#giphy-view").empty();

    for (var i = 0; i < topics.length; i++) {

        var gifBtn = $("<button>");

        gifBtn.addClass("gif-btn");

        gifBtn.attr("data-gif", topics[i]);

        gifBtn.text(topics[i]);

        $("#giphy-view").append(gifBtn);

    }
}


$("#add-gif").on("click", function (event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    topics.push(gif);

    renderButtons();
});

$(document).on("click", ".gif-btn", displayGif);

renderButtons();