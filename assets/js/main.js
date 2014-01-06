// Require config
require.config({
	baseUrl: "assets/",
	paths: {
		"text": "js/libs/text",
		"jquery": "js/libs/jquery-2.0.3.min",
		"purebackbone": "js/libs/backbone/backbone.dev",
		"backbone.localStorage": "js/libs/backbone/backbone.localStorage",
		"backbone-validation": "js/libs/backbone/backbone-validation-min",
		"backbone.rel": "js/libs/backbone/backbone.rel",
		"backbone": "js/libs/backbone/backbone",
		"bootstrap": "js/libs/bootstrap",
		"mustache": "js/libs/mustache",
		"underscore": "js/libs/underscore",
		"router": "js/routers/router",
        "baseview": "js/views/baseView",
		"indexview": "js/views/indexView",
		"commandview": "js/views/commandView",
		"messageview": "js/views/messageView",
		"brainfuck": "js/models/brainfuck",
		"cells": "js/models/cells",
		"command": "js/models/command"
	},

	shim: {
		"underscore": {
			exports: "_"
		},
		"purebackbone": {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		"backbone.localStorage": ["purebackbone", "underscore"],
		"backbone-validation": ["purebackbone", "underscore"],
		"backbone.rel": ["purebackbone", "underscore"]
	}
});

require(["jquery", "router", "backbone", "underscore"], function($, Router, Backbone, _) {

	$(function() {
        // Everything happens in main, really
		var container = $("#main");
		var router = new Router({el: container});
		Backbone.history.start();
	});

});