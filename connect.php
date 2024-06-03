<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (isset($_POST['Email']) && isset($_POST['password'])) {
    $Email = $_POST['Email'];
    $password = $_POST['password'];



    $conn = new mysqli('localhost', 'root', '', 'rakka');

    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {

        $stmt = $conn->prepare("INSERT INTO Registration (Email, password) VALUES (?, ?)");

        if ($stmt) {

            $stmt->bind_param("ss", $Email, $password);

            if ($stmt->execute()) {
                echo "Registration successful!";
            } else {
                echo "Error executing query: " . $stmt->error;
            }


            $stmt->close();
        } else {
            echo "Error preparing statement: " . $conn->error;
        }

        $conn->close();
    }
} else {
    echo "Email or password not set.";
}
