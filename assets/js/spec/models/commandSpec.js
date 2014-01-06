define(["command", "backbone"], function(Command, Backbone) {
	return describe("Test for Model :: Command", function() {

		it("Can be created with default values", function() {
			var cmd = new Command();
			expect(cmd.get("command")).toBe("");
		});

		it("Should contain validation for attribute command", function() {
			var errorCallback = jasmine.createSpy("- invalid event callback -");

			var cmd = new Command();

			Backbone.Validation.bind(this, {
				model: cmd,
				valid: function(view, attr) {
				},
				invalid: function(view, attr, error) {
				}
			});

			cmd.on("invalid", errorCallback);

			cmd.set("command", "asd", {validate: true});
			var errorArgs = errorCallback.mostRecentCall.args;
			expect(errorArgs).toBeDefined();
			expect(errorArgs[0]).toBe(cmd);
			expect(errorArgs[1].command).toBe("Please enter valid brainfuck-command");
		});

		it("Tada", function() {
		});

	});
});
