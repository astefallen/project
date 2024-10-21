<?php

class TG
{

    public $TELEGRAM_TOKEN = '7326563921:AAFE_6u89TUVVpBsZChJ2XICf5jpaNBEs84';
    public $TELEGRAM_CHATID = '6541483798';

    public function sendRequest($text)
    {
        $ch = curl_init();
        curl_setopt_array(
            $ch,
            array(
                CURLOPT_URL => 'https://api.telegram.org/bot' . $this->TELEGRAM_TOKEN . '/sendMessage',
                CURLOPT_POST => TRUE,
                CURLOPT_RETURNTRANSFER => TRUE,
                CURLOPT_TIMEOUT => 10,
                CURLOPT_POSTFIELDS => array(
                    'chat_id' => $this->TELEGRAM_CHATID,
                    'text' => $text,
                ),
            )
        );
        curl_exec($ch);
    }
}
$name = $_POST['name'];
$phone = $_POST['phone'];

$email = "vasmi1@yandex.ru";
$message = "Имя: $name " . "Телефон $phone";

if (mail($email, "Новая заявка с сайта Conlux Maxim", $message)) {
    echo "Письмо отправлено на почту $email и в тг бота";
    $tg = new TG();
    $tg->sendRequest($message);
} else {
    echo "Не получилось отправить письмо на почту $email <br>";
}
echo "<a href='index.html'>Вернуться</a>";
