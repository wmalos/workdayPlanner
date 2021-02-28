// Shows todays date
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () {
    // creates click event for save buttons
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // saves text to the specific time to your local storage
        localStorage.setItem(time, text);
    })

    function timeTrack() {
        // gets current hour
        var currentTime = moment().hour();

        // creates a loop
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        })

        // checks the time to set the background colors
        if (blockTime < currentTime) {
            $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
        }
    }
})