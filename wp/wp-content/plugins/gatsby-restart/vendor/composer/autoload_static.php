<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit76f8de1821bf8b237fe8b301d82e3d33
{
    public static $prefixLengthsPsr4 = array (
        'J' => 
        array (
            'JenkinsKhan\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'JenkinsKhan\\' => 
        array (
            0 => __DIR__ . '/..' . '/jenkins-khan/jenkins-api/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit76f8de1821bf8b237fe8b301d82e3d33::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit76f8de1821bf8b237fe8b301d82e3d33::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
