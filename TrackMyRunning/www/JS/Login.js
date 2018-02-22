"use strict";
//close main screen
$("#main").hide();

//gegister username
$("#register").on("click",() =>{
    let pass = $("#password").val();
    let user = $("#username").val();
   $.get("p.php",{choice:3, distance:" ", loginPass: pass, loginUser: user, ID: " "}).done(function(data){
       alert(data);
   }); 
});

//login
$("#login_btn").on('click',() =>{
     let pass = $("#password").val();
     let user = $("#username").val();
    $.get("p.php",{choice:4, distance:" ", loginPass: pass, loginUser: user, ID: " "}).done(function(data){
        if(data != "invalid login")
        {
            $("#login").hide();
            $("#main").show();
            sessionStorage.setItem("userID", data);
        }
       else
       {
           alert("Username or Password not reconized");
       }
   }); 
});