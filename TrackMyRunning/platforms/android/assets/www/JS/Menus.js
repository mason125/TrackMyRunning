/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

$("#chart").hide();

//show enter page
$("#enter").on("click",() => $("#stats").hide());

//show stats
$("#stats").on("click", () => $("#enter").hide());

//main menu
$("#home").on("click", () => {
   
    $("#enter").show();
    $("#stats").show();
    
});


