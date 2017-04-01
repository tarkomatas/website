<?php

 if (empty($_POST)) { die('ures post_data'); }

require_once 'sm/lib/swift_required.php';

$tpl = file_get_contents("../email.html");

foreach ($_POST as $key => $data) {
    $$key = htmlspecialchars($data);
    $tpl = str_replace("{{ $key }}", $$key, $tpl);
}

// $transport = Swift_SmtpTransport::newInstance('smtp.example.org', 25)->setUsername('your username')->setPassword('your password');
$transport = Swift_MailTransport::newInstance();
$mailer = Swift_Mailer::newInstance($transport);

$message = Swift_Message::newInstance('New message recieved')
  ->setFrom(array('noreply@myhappydata.com'))
  ->setTo(array('tamas.marko@myhappydata.com'))
  ->setReplyTo(array($email => $name))
  ->setBody($tpl);

$type = $message->getHeaders()->get('Content-Type');
$type->setValue('text/html');
$type->setParameter('charset', 'utf-8');

$result = $mailer->send($message);

header('Location: //myhappydata.com');
?>
