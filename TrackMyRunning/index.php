<?php

//database connection data
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "RUNNING"; 

//holds select * query data
$data = array();
$userName ="";

//collect data passed from frontend
$choice = $_GET["choice"];
$distance = $_GET["distance"];

//user data
$loginPass = $_GET["loginPass"];
$loginUser = $_GET["loginUser"];
$ID = $_GET["ID"];

//connection 
$con = mysqli_connect($host, $user, $password,$dbname);
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}

//collect data from database
if($choice == 1)
{
    $sel = mysqli_query($con, "SELECT * FROM distance WHERE USER_ID = '$ID'");
    while ($row = mysqli_fetch_array($sel)) {
        $data[] = array("CDATE"=>$row['CDATE'],"DISTANCE"=>$row['DISTANCE']);
    }
    echo json_encode($data);
}
//insert data into database
elseif($choice == 2)
{
    mysqli_query($con,"INSERT INTO distance (CDATE, DISTANCE, USER_ID) values (NOW(), '$distance', '$ID');");
}
//register
elseif($choice == 3)
{
    $userId = $loginPass.$loginUser;
    //do not do full deploy like this open sql injection
    
    //query database for username
    $regname = $con->query("SELECT USERNAME FROM user WHERE USERNAME = '$loginUser'");
    
    //check for redundent username
    if(mysqli_num_rows($regname) == 0)
    {
        mysqli_query($con, "INSERT INTO user (USERNAME,USERPASS,USER_ID) VALUES ('$loginUser','$loginPass','$userId');");
        echo("Welcome to Track My Running ".$loginUser);
    }
    else
    {
        echo("Username is in use");
    }
}
//login
elseif($choice == 4)
{
    
    $userName = $con->query("SELECT USER_ID FROM user WHERE USERNAME = '$loginUser' AND USERPASS ='$loginPass';");
    
    if(mysqli_num_rows($userName) == 0)
    {
        echo("invalid login");
    }
    else {
        $userId = $loginPass.$loginUser; 
        echo($userId);
    }
    
}