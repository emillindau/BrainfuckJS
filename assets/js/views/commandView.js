define(["backbone", "baseview", "mustache", "command", "text!templates/commandTemplate.html"], function(Backbone, BaseView, Mustache, Command, commandTemplate){

	var CommandView = BaseView.extend({

		template: Mustache.compile(commandTemplate),

		initialize: function() {
			this.model = new Command();
			this.listenTo(this.model, "change:print", this.print);
			this.listenTo(this.model, "input", this.waitForInput);
			this.shouldPrint = false;
		},

		events: {
			"submit": "submit"
		},

		print: function() {
			this.shouldPrint = true;
		},

		waitForInput: function() {

		},

		render: function() {
			this.$el.html(this.template(this));
			// Binding the validation to this view
			Backbone.Validation.bind(this, {
				valid: function(view, attr) {
					var $el = view.$("[name=" + attr + "]"),
						$group = $el.closest(".form-group");

					$group.removeClass("has-error");
					$group.find(".help-block").html("").addClass("hidden");
				},

				invalid: function(view, attr, error) {
					var $el = view.$("[name=" + attr + "]"),
						$group = $el.closest(".form-group");

					$group.addClass("has-error");
					$group.find(".help-block").html(error).removeClass("hidden");

				}
			});

			if(this.shouldPrint) {
				this.$(".result").html(this.model.get("print"));
			}

			if(this.showMessage) {
				this.displayMessage(this.message, ".messages");
			}

			return this;
		},

		// Callbacks from events
		submit: function(event) {
			event.preventDefault();

			var cmd = this.$("input#command").val().replace(/ /g,'');
			this.model.set({command: cmd}, {validate: true});

			// And if it's valid, add it to collection.
			if(this.model.isValid(true)) {
				this.model.execute();
				this.showMessage = true;
				this.message = {error: false, message: "We are trying to execute your command", header: "Executing.."};
				this.render();
			} else {
				console.log("Naaaat!!", this.model);
			}
		},

		disposeSpecial: function() {
			Backbone.Validation.unbind(this);
		}
	});

	return CommandView;

});