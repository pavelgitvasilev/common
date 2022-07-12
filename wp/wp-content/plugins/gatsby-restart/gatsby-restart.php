<?php
/**
 * Plugin Name:       Gatsby Restart
 * Description:       Restart gatsby for update WP data
 * Version:           1.0.0
 * Author:            Vladimir Kamenkov
 * License:           GPL-2.0+
 */

require __DIR__ . '/vendor/jenkins-api/Jenkins.php';

// If this file is called directly, abort.
defined('ABSPATH') or die('No script kiddies please!');


// Include the dependencies needed to instantiate the plugin.
foreach ( glob( plugin_dir_path( __FILE__ ) . 'admin/*.php' ) as $file ) {
    include_once $file;
}


add_action('admin_head', 'do_enqueue_scripts');
function do_enqueue_scripts() {
    wp_enqueue_style('base-style', plugin_dir_url( __FILE__ ) . 'inc/css/base.css');
    wp_enqueue_script("main", plugin_dir_url( __FILE__ ) . 'inc/js/main.js', array('datepickerjs'), null, true);
}

add_action( 'plugins_loaded', 'gatsby_loaded' );
/**
 * Starts the plugin.
 *
 * @since 1.0.0
 */
function gatsby_loaded() {
    $plugin = new Submenu( new Submenu_Page() );
    $plugin->init();
}

