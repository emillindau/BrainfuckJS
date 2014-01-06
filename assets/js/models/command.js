define(["backbone", "cells"], function(Backbone, Cells){

	var Command = Backbone.Model.extend({

		defaults: {
			command: "",
			print: ""
		},

		initialize: function() {
			this.cells = new Cells();
			this.pointer = 0;
			this.exit = false;
			this.brackets = [];
		},

		validation: {
			command: [
				{ required: true, msg: "Please enter command" },
				{ rangeLength: [1, 5000], msg: "Range 1-5000 per command"},
				{ pattern: "^(\\-*\\+*\\<*\\>*\\[*\\]*\\.*,*)+$", msg: "Please enter valid brainfuck-command"}
			]
		},

		execute: function() {
			var next = false;
			var curr;

			while(!this.exit) {
				curr = this.getCurrentCommand();
				next = true;

				switch(curr) {
					case '+':
						this.cells.addToCurrentCell();
					break;
					case '-':
						this.cells.substractFromCurrentCell();
					break;
					case '>':
						this.cells.incrementPointer();
					break;
					case '<':
						this.cells.decrementPointer();
					break;
					case ',':
						this.cells.writeToCurrentCell("a");
						this.trigger("input");
					break;
					case '.':
						var p = this.get("print");
						p  += String.fromCharCode(this.cells.getValueOfCurrentCell());
						this.set("print", p);
					break;
					case '[':

						if(this.cells.getValueOfCurrentCell() === 0) {
							this.continueToNextClosingBracket();
						} else {
							if(this.brackets.indexOf(this.pointer) === -1) {
								this.brackets.push(this.pointer);
							}
						}
					break;
					case ']':

						if(this.cells.getValueOfCurrentCell() !== 0) {
							this.stepBackToFirstOpeningBracket();
							next = false;
						} else {
							if(this.brackets.length !== 0) {
								this.brackets.pop();
							}
						}


					break;
				}

				if(next) {
					this.nextCommand();
				}
			}

			if(this.exit) {
				if(this.print !== "") {
					console.log("PRINTING: " + this.get("print"));
				}
			}
		},

		getCurrentCommand: function() {
			return this.get("command")[this.pointer];
		},

		nextCommand: function() {
			this.pointer++;

			if(this.pointer >= this.get("command").length) {
				this.exit = true;
				this.pointer--;
			}
		},

		continueToNextClosingBracket: function() {
			var counter = 1;

			for(var i = this.pointer+1; i < this.get("command").length; i++) {
				if(counter === 0) {
					return;
				}

				if(this.get("command")[i] === '[') {
					counter++;
				}

				if(this.get("command")[i] === ']') {
					this.pointer = i;
					counter--;
				}
			}
		},

		stepBackToFirstOpeningBracket: function() {
			this.pointer = this.brackets.pop();
		}

	});

	return Command;

});