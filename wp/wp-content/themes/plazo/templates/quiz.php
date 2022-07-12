<?php
/**
 * Template Name: Quiz
 */
get_header();
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

Header
<div class="typeform-widget" data-url="https://form.typeform.com/to/b2169eL3<?= $query_iframe; ?>" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
Footer

<?php get_footer();