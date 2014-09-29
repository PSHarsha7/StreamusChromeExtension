﻿define(function() {
    'use strict';

    var Clipboard = Backbone.Model.extend({
        defaults: {
            text: ''
        },

        copyUrl: function(url) {
            this.set('text', url);
        },
        
        copyTitleAndUrl: function(title, url) {
            this.set('text', '"' + title + '" - ' + url);
        }
    });

    //  Exposed globally so that the foreground can access the same instance through chrome.extension.getBackgroundPage()
    window.Clipboard = new Clipboard();
    return window.Clipboard;
})