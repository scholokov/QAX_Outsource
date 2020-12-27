<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    if($name=="" or $email==""){ 
        return false;
    }

    else{
        $to = "putchenko.t.a@gmail.com"; /* Адрес, куда отправляем письма*/
        $subject = "Письмо с обратной связи"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <test@mail.ru>\r\n";
        $message .= "Имя пользователя: ".$name."\n";
        $message .= "Почта: ".$email."\n";
        $message .= "Телефон: ".$phone."\n";
        $message .= "Сообщение: ".$message."\n";


        $send = mail($to, $subject, $message, $headers);

        if ($send == "true")
        {
            echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время.\r\n";
        }
        else
        {
            echo "Не удалось отправить, попробуйте снова!";
        }
    }

?>