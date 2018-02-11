<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{
	
	//vars
	$input = $_POST["distance"];
    $server = "running.c3oh1iodvwvi.us-east-2.rds.amazonaws.com";
	$username = "maswhite";
	$password = "kTmlord0302!";
	$db = "RUNNING";
	
	//connections
	$conn = new mysqli($server, $username, $password, $db);
	
	if($conn -> connect_error)
	{
		echo($conn->connect_error);
    }
	
	$query = "INSERT INTO distance (CDATE, DISTANCE) VALUES (CURDATE()-1," . $input.");";
	mysqli_query($conn,$query);
	/*
	$query -> _parm("i", $input);
	$query -> execute();
	$query -> close();
	$conn -> close();
	*/
}