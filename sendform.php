<?php
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$mail = trim($_POST['mail']);
$fullname = trim($_POST['full-name']);
$hidden = trim($_POST['title']);
$message = trim($_POST['message']);
$fromMail = 'a0549203.xsph.ru';
$fromName = 'Поступила заявка с сайта';
$emailTo = '9115131201@mail.ru';
$subject = 'Форма обратной связи с сайта a0549203.xsph.ru';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type": text/plain; charset=\"utf-8\"r\n";
$headers = "From: ". $fromName ." <". $fromMail ."> \r\n";

$body = "Получено письмо с сайта \n Имя: $name\n Телефон: $phone\nПочта: $mail\n Специалист: $fullname\n Сообщение: $message";

if (strlen($phone) > 0) && (strlen($mail) > 0) && (strlen($message) > 0) {
    $mail = mail($mailTo, $subject, $body, $headers, '-f'. $fromMail);
    return;
}
?>