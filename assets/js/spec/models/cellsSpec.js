define(["cells", "backbone"], function(Cells, Backbone) {
	return describe("Test for Model :: Cells", function() {

		it("Can be created with default values", function() {
			var cells = new Cells();
			expect(cells).toBeDefined();
		});

		it("Should be able to increment and decrement pointer", function() {
			var cells = new Cells();
			expect(cells.pointer).toBe(0);

			cells.incrementPointer();
			expect(cells.pointer).toBe(1);

			cells.decrementPointer();
			expect(cells.pointer).toBe(0);

		});

		it("Should be able to add and substract from current cell", function() {
			var cells = new Cells();
			cells.addToCurrentCell();
			expect(cells.getValueOfCurrentCell()).toBe(1);
			cells.addToCurrentCell();
			expect(cells.getValueOfCurrentCell()).toBe(2);
			cells.substractFromCurrentCell();
			expect(cells.getValueOfCurrentCell()).toBe(1);
		});

	});
});
