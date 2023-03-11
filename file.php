<?php
    // Update the path below to your autoload.php,
    // see https://getcomposer.org/doc/01-basic-usage.md
    require_once '/path/to/vendor/autoload.php';
    use Twilio\Rest\Client;

    $sid    = "AC056c00ac02cb8af4569a4f9998c81120";
    $token  = "c063955f100a455218586116343ff495";
    $twilio = new Client($sid, $token);

    $message = $twilio->messages
      ->create("+919561649439", // to
        array(
          "from" => "+15676007538",
          "body" => done
        )
      );

print($message->sid);