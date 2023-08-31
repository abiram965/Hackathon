<?php
// Get the event data from the request
$club = $_POST['club'];
$college = $_POST['college'];
$eventName = $_POST['eventName'];
$eventDate = $_POST['eventDate'];

// Create a connection to the MySQL database
$servername = "your-mysql-host";
$username = "your-mysql-username";
$password = "your-mysql-password";
$dbname = "your-mysql-database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL query to insert data
$sql = "INSERT INTO events (club, college, eventName, eventDate) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $club, $college, $eventName, $eventDate);

if ($stmt->execute()) {
    echo "Event data stored successfully.";
} else {
    echo "Error storing event data: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>
