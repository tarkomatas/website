<?php
    function post_captcha($user_response) {
        $fields_string = '';
        $fields = array(
            'secret' => '6LffDSsUAAAAAOCgzdDM64eC7OG6o8Wj_Wl2G2Rm',
            'response' => $user_response
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

        $result = curl_exec($ch);
        curl_close($ch);

        return json_decode($result, true);
    }

    // Call the function post_captcha
    $res = post_captcha($_POST['g-recaptcha-response']);

    if (!$res['success']) {
        // What happens when the CAPTCHA wasn't checked
        echo '<script language="javascript">';
        echo 'alert("Please go back and make sure you check the security CAPTCHA box.")';
        echo '</script>';
    } else {
        // If CAPTCHA is successfully completed...

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
    }
?>
