<?php

$jenkins = new \JenkinsKhan\Jenkins('http://vladimir.kamenkov:wug6Cae7@jenkins.moneyman.ru');
$view = $jenkins->getView('MMMX-Wordpress');
//$job = $jenkins->getJob("MMMX-Checkout-Wordpress-gatsby");

?>

<div class="wrap">

    <h1 class="wp-heading-inline"><?php echo esc_html( get_admin_page_title() ); ?></h1>

    <?php
        var_dump($view);
    ?>


</div>