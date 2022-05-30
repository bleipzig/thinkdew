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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'thinkdew_WPAZP' );

/** MySQL database username */
define( 'DB_USER', 'thinkdew_WPAZP' );

/** MySQL database password */
define( 'DB_PASSWORD', '?ZLR8_]&s8c4p$9MS' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('FS_METHOD','direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '167e5bd732cc4ecabe2677cae78b7386249c9ea9' );
define( 'SECURE_AUTH_KEY',  'ff2765a37cf6e6984f478e52a4c4056aec69fe88' );
define( 'LOGGED_IN_KEY',    '8aff486cc3be346df90418f5849b20336172d25a' );
define( 'NONCE_KEY',        'b39bd71267d05fc9a893e5f4311810dede85e863' );
define( 'AUTH_SALT',        '8ec052486b37d578eb465e2a4f696395a43008ec' );
define( 'SECURE_AUTH_SALT', '18e677bf52ade9f80ca957b0e48cd1b5415909dc' );
define( 'LOGGED_IN_SALT',   '5b72505bf90b39bc02bda1ab4dc45a0f1acf5124' );
define( 'NONCE_SALT',       '1d729f156ef61d90b00c0614d06675af9c256661' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'suisp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

// If we're behind a proxy server and using HTTPS, we need to alert WordPress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}


define( 'WP_HOME', 'http://thinkdew.io' );
define( 'WP_SITEURL', 'http://thinkdew.io' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
