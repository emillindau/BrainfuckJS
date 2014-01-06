define(["mustache", "commandview", "text!templates/indexTemplate.html", "baseview"],
	function(Mustache, CommandView, indexTemplate, BaseView) {

	var IndexView = BaseView.extend({

		template: Mustache.compile( indexTemplate ),
		subViews: [],

		initialize: function() {
			this.commandView = new CommandView();
			this.subViews.push(this.commandView);
		},

		render: function() {
			this.$el.html(this.template(this));

			this.assign(this.commandView, ".command");

			return this;
		}
	});

	return IndexView;

});