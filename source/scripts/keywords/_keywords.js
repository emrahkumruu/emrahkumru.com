/**
 * @author Emrah Kumru
 */


(function (app) {

    "use strict";

    app.Keywords = (function () {

        var modules = {},
            initialized = false,
            defaults = {
                log: false,
                ns: {
                    classes: {
                        class: "keywords",
                        wrap: "page-wrap"
                    }
                },
                keywords: [{
                    text: "test",
                    style: {
                        color: "#fff",
                        left: "10px",
                        top: "10px"
                    }
                },
                    {
                        text: "test",
                        style: {
                            color: "#fff",
                            left: "10px",
                            top: "10px"
                        }
                    },
                    {
                        text: "test",
                        style: {
                            color: "#fff",
                            left: "10px",
                            top: "10px"
                        }
                    },
                    {
                        text: "test",
                        style: {
                            color: "#fff",
                            left: "10px",
                            top: "10px"
                        }
                    },
                    {
                        text: "test",
                        style: {
                            color: "#fff",
                            left: "10px",
                            top: "10px"
                        }
                    },
                    {
                        text: "test",
                        style: {
                            color: "#fff",
                            left: "10px",
                            top: "10px"
                        }
                    }]
            };

        modules.bind = function () {

            // createDiv('test');

        };

        modules.isInitialized = function () {
            return initialized;
        };

        modules.init = function () {
            modules.bind();
            initialized = true;
        };

        var createDiv = function (text) {


            $('<div>')
                .addClass(defaults.ns.classes.class)
                .append(text)
                .appendTo($('.' + defaults.ns.classes.wrap));

        };

        return modules;

    })();

    app.registerInit('Keywords');


}(ek));