<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

header('Content-Type: application/json');

require_once 'google/vendor/autoload.php';

// get posted data
$postData = file_get_contents( 'php://input' );
$data     = json_decode( $postData, true );
$phone    = $data['form_response']['hidden']['c_phone'];
$date     = date('d.m.Y H:i:s', time());
$code     = rand(1000, 9999);
$fields   = [
    'to'             => $phone,
    'from'           => 'Plazo',
    'text'           => 'Plazo: tu codigo de confirmacion es ' . $code,
];

// send sms
function send_sms($data) {
    $url = 'https://api.infobip.com/sms/1/text/single';
    $ch = curl_init($url);

    $payload = json_encode($data);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_VERBOSE, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: Basic eWRlbHBvbnRlOk1Nc2FwaTIwMjA=',
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $result = curl_exec($ch);
    curl_close($ch);

    return $result;
};

function getClient() {
    $client = new Google_Client();
    $client->setApplicationName('Project');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS);
    //PATH TO JSON FILE DOWNLOADED FROM GOOGLE CONSOLE FROM STEP 7
    $client->setAuthConfig(__DIR__ . '/MoneymanZalog-d7de42f0f79d.json');
    $client->setAccessType('offline');
    return $client;
}

// send sms
$sms_data = json_decode(send_sms($fields), true);

$client = getClient();
$service = new Google_Service_Sheets($client);
$spreadsheetId = '1fzI2Wikl6x04ErV1IEh0wbK3ELlEBARwA5B6XC-Ai2o'; // spreadsheet Id   1wVjWt7HGkumT4ziaUieWt-bFAOKwL1W2mPTcC8f0S8Y
$range = 'SMS_log'; // Sheet name

$valueRange = new Google_Service_Sheets_ValueRange();
$valueRange->setValues(["values" => ["a", "b"]]); // values for each cell
$valueRange->setValues(["values" => [
    $phone, //phone
    $code, //code
    $date, //date
    $sms_data['messages'][0]['status']['groupName'] //status
]]);

$conf = ["valueInputOption" => "RAW"];
$service->spreadsheets_values->append($spreadsheetId, $range, $valueRange, $conf);

echo json_encode($sms_data);

