/**
 * global require
 */

'use strict';

requirejs.config({
    baseUrl: 'assets',
    paths: {
        // Vendors libraries
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'mdl': 'bower_components/material-design-lite/material.min',

        // Our own JS
        'controllers': 'js/controllers',
        'models': 'js/models'
    }
});

requirejs(
    [
        'mdl', 'jquery',
        'controllers/main'
    ],
    function(
        mdl, $,
        main
    ) {
        console.info('Initialized', mdl, $, main);
    }
)