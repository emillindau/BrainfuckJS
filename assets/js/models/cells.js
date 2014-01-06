define(["backbone"], function(Backbone) {

	var Cells = Backbone.Model.extend({

		initialize: function() {
			this.cells = [];
			this.pointer = 0;
		},

		decrementPointer: function() {
			this.pointer--;

			if(this.pointer <= 0) {
				this.pointer = 0;
			}
		},

		incrementPointer: function() {
			this.pointer++;
		},

		addToCurrentCell: function() {
			if(typeof this.cells[this.pointer] === 'undefined') {
				this.cells[this.pointer] = 1;
			} else {
				this.cells[this.pointer]++;
			}
		},

		substractFromCurrentCell: function() {
			if(typeof this.cells[this.pointer] === 'undefined') {
				this.cells[this.pointer] = 0;
			} else {
				this.cells[this.pointer]--;
			}
		},

		writeToCurrentCell: function(value) {
			this.cells[this.pointer] = value;
		},

		getValueOfCurrentCell: function() {
			return this.cells[this.pointer];
		}

	});

	return Cells;

});