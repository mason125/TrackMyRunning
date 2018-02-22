"use strict";
//show enter page
$("#enter").on("click",() => $("#stats").hide());

//show stats
$("#stats").on("click", () => $("#enter").hide());

//main menu
$("#home").on("click", () => {
    $("#enter").show();
    $("#stats").show();
});

//hide data display
$("#table").hide();
$("#avg_display").hide();


//view menu
$("#chart_btn").on("click",() => {
    $("#table").show();
    $("#avg_display").hide();
});

$("#avg").on("click",() => {
    $("#table").hide();
    $("#avg_display").show();
});


