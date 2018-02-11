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


