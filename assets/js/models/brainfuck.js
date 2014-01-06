define(["backbone", "command"], function(Backbone, Command){

	var Brainfuck = Backbone.Model.extend({

		initialize: function() {
		},

		command: function(cmd) {
			this.command = new Command(cmd);
			this.command.execute();
		}

	});

	return Brainfuck;

});