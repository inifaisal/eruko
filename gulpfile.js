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
 	//Frontend Style
 	.sass(['frontend/app.scss'], 'resources/assets/css/frontend')


    	.styles([  // Combine pre-processed CSS files
    		'frontend/app.css'
    		], 'public/css/style.css', 'resources/assets/css')

    	//Backend Style
    	.sass(['backend/app.scss'], 'resources/assets/css/backend')


    	.styles([  // Combine pre-processed CSS files
    		'backend/app.css'
    		], 'public/css/backend.css', 'resources/assets/css')


    	.copy('resources/assets/bower/fontawesome/fonts', 'public/fonts')

    	.version(["css/backend.css","css/style.css"]);

    });
