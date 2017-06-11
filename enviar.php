<?php


	require("vendor/PHPMailer-master/PHPMailerAutoload.php");
$mail = new PHPMailer();  
$mail->IsSMTP();
$mail->Host = "smtp.gmail.com";
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = "chamageralapp@gmail.com";
$mail->Password = "#chamageral";
$mail->From     = "chamageralapp@gmail.com";
$mail->AddAddress("charleycesar@gmail.com");
$mail->Subject  = "Subject";
$mail->Body     = "Hi!";
if(!$mail->Send()) {
    echo 'Message was not sent.';
    echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}
?>