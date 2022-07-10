<?php

/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'wp_status' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'admin' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'admin' );

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
define( 'AUTH_KEY',         ' +hl~|rxW(1FPgVA{b8f_IURije$zgu-@i7b=p=c @9`0jdXi^eDNve%H_?n+D]R' );
define( 'SECURE_AUTH_KEY',  'z~c5tW:157SLQ1mig#9H[{Y5&%NB63xUqdO#AJ9T]%e/~<ziEr1g=]wrr+5)Rvr(' );
define( 'LOGGED_IN_KEY',    'w}us9Die4MQgVDRVlZMV*jExMvde}w`Cu;/0W36AM}1aY{Gs1d2TB]9(_^~;d)l7' );
define( 'NONCE_KEY',        '05au/ p<K/CW)y _2SF*w/[zQVb-I3pwOK1%bmIQ9w<:U%}@CNL.b~nq/hPC2B{W' );
define( 'AUTH_SALT',        '#<2bqr8F2M1uct8|$Z30:Cu*~@PIB{r}[l86:<x0)2P5G@S,ajJPZxg`5~YmmAge' );
define( 'SECURE_AUTH_SALT', '0 a=9(pkFAro7Cuq4 FXb7A3Dq&d`)^`yWG7*>v =pl*NzwTn~UfkQt%jZ,P3>^c' );
define( 'LOGGED_IN_SALT',   'B%Ux8q{Z*9k)q==j*X,$,4;fO6*z[gEv0Z+b1`$ GU$.3L~+TFi>V<Nf(cse0K;8' );
define( 'NONCE_SALT',       'g2! ]*K+$/W_(8twed+fo+=q:!l}~.FDn9+(J;MoS5FT5tW1ZQ@(g?4gSP$%uhI]' );

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

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
