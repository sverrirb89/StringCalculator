const add = require("./index");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});


it("should return 2", () => {
	expect(add("2")).toBe(2);
});

it("should return 5", () => {
	expect(add("2, 3")).toBe(5);
});

