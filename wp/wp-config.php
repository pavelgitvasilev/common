<?php

$_SERVER['HTTPS'] = 'on';
$scheme = 'https';

$db_password = 'statusadmin';
$db_user = 'status';
if ($_SERVER['HTTP_HOST'] === 'status.local') {
    $_SERVER['HTTPS'] = '';
    $scheme = 'http';
    $db_password = 'statusadmin';
    $db_user = 'status';
}

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'wp_status' );

/** Имя пользователя базы данных */
define( 'DB_USER', $db_user );

/** Пароль к базе данных */
define( 'DB_PASSWORD', $db_password );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~-20SU*S)El@8d%t:}jyl-*F=QGn0B~frG?mz4-NX;wQo=_>cidm:GR&yz=jj0~q' );
define( 'SECURE_AUTH_KEY',  ']D.>VNX{xmO7PM3qV}.Z3;dH[zds0znC O]8Qe!n:-2q_{5S@nK0^@/9/L/Do$I^' );
define( 'LOGGED_IN_KEY',    'NpPQV8(0L]*QhkTY!3E;ia6$WUUFQ^(fz8+<L~vredSZdDsFYqxFbLqx:9[A0Y*0' );
define( 'NONCE_KEY',        '`*t-<n4J,,)*M5keMDsk<>Gd)nOQI38Z3wszRg4/6fG{@N]h@W!E#mhD!0H_LtHq' );
define( 'AUTH_SALT',        'PyIN`~F)jn>EzmceaoSD~@W`b`a[FG&gaB3K5.,]!_Bg:u5]nAYl2w6=Jh7Vi;KU' );
define( 'SECURE_AUTH_SALT', ',|#l)C4t5#S{_MI6ho.M+2%pE2u:_.GU|r&}1mydA0GDFqd-m_Bf9aT}gyP_2(u~' );
define( 'LOGGED_IN_SALT',   'mH:!Qp/25p.(>4fgmsR@<3r vjB_m!`}gc)pZ&uh$t$Z=I@E%;@w2axciz1@/4ld' );
define( 'NONCE_SALT',       'QMY!A_+RdSr{c?i,w(t;Om=i ^Bi_.-0M|U(!_Jc7<({0D (tP2I2g&``fK4tk,o' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */

define( 'WP_DEBUG', true );
define('WP_DEBUG_DISPLAY', false);
define('WP_DEBUG_LOG', true);

define('WP_HOME', $scheme . '://' . $_SERVER['HTTP_HOST'] . '/common/wp/');
define('WP_SITEURL', WP_HOME);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

define ('UPLOADS', 'wp-content/uploads');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
