var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
    	.sass(['backend/app.sass'], 'resources/assets/css/backend')


    	.styles([  // Combine pre-processed CSS files
                'backend/app.css'
            ], 'public/css/backend.css', 'resources/assets/css')


    	.copy('resources/assets/bower/fontawesome/fonts', 'public/fonts')

    	.version(["css/backend.css",]);

});
