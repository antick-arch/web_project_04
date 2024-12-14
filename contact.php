<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $cus_name = $_POST['name'] ?? '';
    $cus_email = $_POST['email'] ?? '';
    $cus_comments = $_POST['comments'] ?? '';


    if (empty($cus_name) || empty($cus_email) || empty($cus_comments)) {
        die("Error: Please fill out all fields.");
    }

 
    $conn = mysqli_connect($servername, $username, $password, $dbname);

  
    if (!$conn) {
        die("Error: Unable to connect to database - " . mysqli_connect_error());
    }

   
    $sql = "INSERT INTO coversation (name, email, comments) VALUES ('$cus_name', '$cus_email', '$cus_comments')";

    if (mysqli_query($conn, $sql)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Error: " . mysqli_error($conn);
    }

 
    mysqli_close($conn);
} else {
    echo "Invalid request!";
}
?>
