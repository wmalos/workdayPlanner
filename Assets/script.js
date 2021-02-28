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
        

            // checks the time to set the background colors
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    
    // gets item from local storage
    $("#hour8 .description").val(localStorage,getItem("hour8"));
    $("#hour9 .description").val(localStorage,getItem("hour9"));
    $("#hour10 .description").val(localStorage,getItem("hour10"));
    $("#hour11 .description").val(localStorage,getItem("hour11"));
    $("#hour12 .description").val(localStorage,getItem("hour12"));
    $("#hour13 .description").val(localStorage,getItem("hour13"));
    $("#hour14 .description").val(localStorage,getItem("hour14"));
    $("#hour15 .description").val(localStorage,getItem("hour15"));
    $("#hour16 .description").val(localStorage,getItem("hour16"));
    $("#hour17 .description").val(localStorage,getItem("hour17"));

    // call function
    timeTrack();


})