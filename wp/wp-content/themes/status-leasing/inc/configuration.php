<?php
/**
 *
 * ACF Configuration page
 *
 */
function configuration_page() {
    if ( function_exists( 'configuration_page' ) ) {
        acf_add_options_page( array(
            'page_title' 	=> 'Theme General Settings',
            'menu_title'	=> 'Theme Settings',
            'menu_slug' 	=> 'theme-general-settings',
            'capability' => 'manage_options',
            'redirect'		=> true,
            'show_in_graphql' 		=> true,
        ) );
        acf_add_options_sub_page(array(
            'page_title' 	=> 'Header Settings',
            'menu_title'	=> 'Header',
            'parent_slug'	=> 'theme-general-settings',
            'show_in_graphql' 		=> true,
        ));
        acf_add_options_sub_page(array(
            'page_title' 	=> 'Footer Settings',
            'menu_title'	=> 'Footer',
            'parent_slug'	=> 'theme-general-settings',
            'show_in_graphql' 		=> true,
        ));
        acf_add_options_sub_page(array(
            'page_title' 	=> 'General Settings',
            'menu_title'	=> 'General',
            'parent_slug'	=> 'theme-general-settings',
            'show_in_graphql' 		=> true,
        ));
    }
}
add_action( 'init', 'configuration_page' );