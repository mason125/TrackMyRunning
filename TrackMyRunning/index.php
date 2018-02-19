<?php

//database connection data
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "RUNNING"; 

//holds select * query data
$data = array();

//collect data passed from frontend
$choice = $_GET["choice"];
$distance = $_GET["distance"];

//connection 
$con = mysqli_connect($host, $user, $password,$dbname);
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}

//collect data from database
if($choice == 1)
{
    $sel = mysqli_query($con, "SELECT * FROM distance");
    while ($row = mysqli_fetch_array($sel)) {
        $data[] = array("CDATE"=>$row['CDATE'],"DISTANCE"=>$row['DISTANCE']);
    }
    echo json_encode($data);
}
//insert data into database
elseif($choice == 2)
{
    mysqli_query($con,"INSERT INTO distance (CDATE, DISTANCE) values (NOW(), '$distance');");
}
