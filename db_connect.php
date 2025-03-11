<?php
$host = "localhost";
$user = "root"; // Change if using another user
$pass = ""; // Change if you have a database password
$dbname = "kanista";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
