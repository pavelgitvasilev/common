<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

$_SERVER['HTTPS'] = 'on';
$scheme = 'https';

$db_password = 'Azs1Dm5cElVBvzB8cZez';
$db_user = 'mx_solva_wp';
if ($_SERVER['HTTP_HOST'] === 'status.local') {
    $_SERVER['HTTPS'] = '';
    $scheme = 'http';
    $db_password = 'root';
    $db_user = 'root';
}

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'status_wp' );

/** MySQL database username */
define( 'DB_USER', $db_user );

/** MySQL database password */
define( 'DB_PASSWORD', $db_password );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'XDL`AiaT!p%m4Oi#qj+0A#Jr*=e@=oJ|T}?@bE(`Y7nE!@luqC{FYU6EGh6:SQ<t' );
define( 'SECURE_AUTH_KEY',  'ts&$[j)_cbx2{;Y>vjV(j-*$OLGYYS`qv@/LNM7<Ax=>P4l;$b!^En2$6CnT^wEp' );
define( 'LOGGED_IN_KEY',    'xOGK~2 0GVt_CVw%?B}R4if9D:141&-B56{MPvW8*Lozx?FmAdZ$b*VDD<rZ+apf' );
define( 'NONCE_KEY',        'KUB/ BSP/y/AQuo`0uzK5QMX]F1,cF4lg*^` L%d,7Y1PJIz*P%^?<;^6I *.W_u' );
define( 'AUTH_SALT',        't`9C/SH)nav=D2h/(~lzo=qX*gRZwx%(Yzwn2&9 4 %TEMuIA`w(A1/&m^d+]em(' );
define( 'SECURE_AUTH_SALT', '8{~(HG8-s8? $uK2O;efLq)5Kt`r/)HBYYY8i@GF?(hq,4Fsx}R+6QKe$IKDy4f.' );
define( 'LOGGED_IN_SALT',   'd>&81P+{6bC4B 32mo,]C]Lc^Ln]VW_ZE(hu.ru<m,2b;,bjSBTWk.RjsU@ ?%VL' );
define( 'NONCE_SALT',       'W{2&}*0]N2HWmf2j`yO?Wsh^e^zA4M>vibN1E&`.J<yz[3GvD|32SA4`x6Y;.#Ah' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', true );
define('WP_DEBUG_DISPLAY', false);
define('WP_DEBUG_LOG', true);

define('WP_HOME', $scheme . '://' . $_SERVER['HTTP_HOST'] . '/common/wp/');
define('WP_SITEURL', WP_HOME);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

define ('UPLOADS', 'wp-content/uploads');

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

