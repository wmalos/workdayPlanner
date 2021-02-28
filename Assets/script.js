// Shows todays date
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () {
    // creates click event for save buttons
    $(".saveBtn").on("click", function () {
