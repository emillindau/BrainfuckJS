define(["backbone", "indexview"], function(Backbone, IndexView) {

	var Router = Backbone.Router.extend({

		view: {},

		// Thats probably main residing in opt, but could be any element
		initialize: function(opt) {
			this.el = opt.el;
		},

		// The routes
		routes: {
			"": "index",
		},

		changeView: function(newView) {

			// Not all views, as of now, has the dispose-function
			if(typeof this.view.dispose === "function") {
				this.view.dispose();
			}
			this.view = newView;
		},

		// Mainpage, shows all goals and add-goal form
		index: function() {
			this.changeView(new IndexView());
			// var view = new IndexView();
			this.el.empty();
			this.el.append(this.view.render().el);
		},
	});

	return Router;

});