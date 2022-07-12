<?php
/**
 * Template Name: Main Quiz
 */
?>

<?php
    $query_iframe = '';
    $query_request = $_GET;
    $requests = array(
        'typeform-welcome',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'loan_purpose',
        'loan_amount',
        'loan_pmt',
        'c_name',
        'c_phone',
        'c_email',
        'c_curp'
    );

    foreach ($query_request as $request_param_key => $request_param_value) {
        if (!empty($query_iframe)) {
            $query_iframe .= '&';
        }

        if (in_array($request_param_key, $requests)) {
            $query_iframe .= $request_param_key . '=' . $request_param_value;
        }
    }

    if (!empty($query_iframe)) {
        $query_iframe = '?' . $query_iframe;
    }
 ?>

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<title>Plazo MEXICO Part 1</title>
<style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; } </style>
</head>
<body>
<iframe id="typeform-full" width="100%" height="100%" frameborder="0" allow="camera; microphone; autoplay; encrypted-media;" src="https://form.typeform.com/to/b2169eL3<?= $query_iframe; ?>"></iframe>
 <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
 </body>
 </html>

