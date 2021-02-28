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
})