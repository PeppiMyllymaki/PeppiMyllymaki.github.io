<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

// Always return JSON
header('Content-Type: application/json; charset=utf-8');

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        'success' => false
    ]);
    exit;
}


// Get form data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');


// Basic validation
if ($name === '' || $email === '' || $message === '') {
    echo json_encode([
        'success' => false
    ]);
    exit;
}


// Check email address
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false
    ]);
    exit;
}


// --------------------------------------------------
// ZONER EMAIL SETTINGS
// CHANGE THESE THREE VALUES
// --------------------------------------------------

$from = 'contact@yourdomain.fi';
$password = 'YOUR_EMAIL_PASSWORD';

$to = 'california.kotka@outlook.com';


// --------------------------------------------------
// SEND EMAIL
// --------------------------------------------------

$mail = new PHPMailer(true);

try {

    // SMTP
    $mail->isSMTP();

    // Zoner SMTP server
    $mail->Host = 'localhost';

    // SMTP authentication
    $mail->SMTPAuth = true;
    $mail->Username = $from;
    $mail->Password = $password;

    // Zoner SMTP port
    $mail->Port = 587;

    // Zoner setup
    $mail->SMTPSecure = '';
    $mail->SMTPAutoTLS = false;


    // Sender
    $mail->setFrom($from, 'Nettisivujen yhteydenottolomake');

    // Where the message goes
    $mail->addAddress($to);

    // When you press Reply, reply goes to the customer
    $mail->addReplyTo($email, $name);


    // Subject
    $mail->Subject = 'Uusi yhteydenottopyyntö verkkosivuilta';


    // Plain text email
    $mail->isHTML(false);

    $mail->Body =
        "Uusi viesti verkkosivuilta\n\n" .
        "Nimi: " . $name . "\n" .
        "Sähköposti: " . $email . "\n\n" .
        "Viesti:\n" .
        $message;


    // Send
    $mail->send();


    // Tell JavaScript that everything worked
    echo json_encode([
        'success' => true
    ]);

} catch (Exception $e) {

    // Tell JavaScript that something went wrong
    echo json_encode([
        'success' => false
    ]);
}