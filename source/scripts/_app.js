/**
 * @author Bilal Cinarli
 */

var ek = ek || {};

(function(app) {
    'use strict';

    app.initialized = false;

    app.classes = {};

    app.$objs = {};

    app.vals = {};

    app.modules = [];

    app.registerInit = function(module) {
        app.modules.push(module);
    };

    app.initModules = function() {
        if(app.modules.length > 0) {
            app.modules.forEach(function(module) {
                if(typeof app[module] !== 'undefined' && !app[module].isInitialized()) {
                    app[module].init();
                }
            });
        }
    };

    app.init = function() {
        if(app.initialized) {
            console.warn('%cDigital Inventory', 'font-weight: bold', 'is already initialized');
            return;
        }

        app.initModules();
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        app.initialized = true;
    };
})(ek);

$(function () {
    ek.init();
});