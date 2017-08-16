/**
 * 
 * @author Emrah Kumru
 * 
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
                        wrap: "page-wrap",
                        keywordsText: "keywords-text",
                        keywordsContent : "keywords-content",
                        profile : "profile"
                       
                        
                    }
                }
            },
            keywords = [{
                text: "front-end developer",
                class: [""]
                },{
                    text: "web software developer",
                    class: [""]
                },{
                    text: "Gamer",
                    class: [""]
                },{
                    text: "computer science",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "test",
                    class: [""]
                },{
                    text: "athlete",
                    class: [""]
                },{
                    text: "musics",
                    class: [""]
                },{
                    text: "science",
                    class: [""]
                },{
                    text: "space",
                    class: [""]
                },{
                    text: "dinosaurs",
                    class: [""]
                },{
                    text: "comics",
                    class: [""]
                },{
                    text: "sci-fi",
                    class: [""]
                },{
                    text: "fantasy-fi",
                    class: [""]
                }
            
            ];

        modules.bind = function () {
            layout(keywords);
        };

        modules.isInitialized = function () {
            return initialized;
        };

        modules.init = function () {
            modules.bind();
            initialized = true;
        };

        var layout = function (object) {

            var content     = defaults.ns.classes.keywordsContent,
                appendTo    = $('.' + defaults.ns.classes.profile),
                leftColumn,rightColumn;

            var layout = {

                    content : function(){
                        
                        $('<div>')
                            .addClass(content + ' ' + content + '-left')
                            .appendTo(appendTo);
        
                        $('<div>')
                            .addClass(content + ' ' + content + '-right')
                            .appendTo(appendTo);
                    
                        leftColumn  = $('.' + content + '-left');
                        rightColumn = $('.' + content + '-right');
                            
                    },
                    
                    texts : function(object){
                        
                        $.each(object, function(k,v){
                    
                            var appendTo = (k % 2 === 0) ? leftColumn : rightColumn;

                            $('<div>')
                                .addClass(function(){
                                    var _this = this;
            
                                    for(var i in v.class) {
                                        $(this).addClass(v.class[i])
                                    }
            
                                    $(this).addClass(defaults.ns.classes.keywordsText);
            
                                })
                                .text(v.text)
                                .appendTo(appendTo);
                            
                        });

                    }

            };

        

            layout.content();
            layout.texts(object);
        

        };


        return modules;

    })();

    app.registerInit('Keywords');


}(ek));