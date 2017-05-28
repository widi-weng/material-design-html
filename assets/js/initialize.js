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

        var menu_icon = $('#menu-icon'),
            menu_container = $('menu');

        function toggleMenu() {
            menu_container.hasClass('active') ?
                menu_container.removeClass('active'):
                menu_container.addClass('active');
        }

        menu_icon.click(toggleMenu);
        menu_container.click(toggleMenu); 
    }
)