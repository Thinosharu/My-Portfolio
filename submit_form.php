<?php
include 'db_connect.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Prevent SQL Injection
    $full_name = mysqli_real_escape_string($conn, $full_name);
    $email = mysqli_real_escape_string($conn, $email);
    $message = mysqli_real_escape_string($conn, $message);

    // Insert data into database
    $sql = "INSERT INTO contact (full_name, email, message) VALUES ('$full_name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

$stmt = $conn->prepare("INSERT INTO contact (uuid_column) VALUES (?)");
$stmt->bind_param("s", $uuid);  // "s" for string type
$stmt->execute();

?>

<script>
const form = document.querySelector(".form-control");
const fullName = document.querySelector(".input-field:nth-of-type(1)");
const email = document.querySelector(".input-field:nth-of-type(2)");
const mess = document.querySelector("textarea");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("full_name", fullName.value);
    formData.append("email", email.value);
    formData.append("message", mess.value);

    fetch("submit_form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        form.reset();
    })
    .catch(error => console.error("Error:", error));
});
</script>