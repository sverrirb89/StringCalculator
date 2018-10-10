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

it("should return 10", () => {
	expect(add("2, 3, 5")).toBe(10);
});

it("should return 15", () => {
	expect(add("2, 5, 3, 5")).toBe(15);
});

it("should return 14", () => {
	expect(add("1 \n5, 3, 5")).toBe(14);
});

it("should return 6", () => {
	expect(add("1\n2,3")).toBe(6);
});

it("should return 6", () => {
	expect(add("1\n2,3")).toBe(6);
});

it("Check if it has an negative number", () => {
	expect(add("-1, 2")).toBe("Negatives are not allowed: -1");
});

it("Check if it has an negative number", () => {
	expect(add("2, -4, 3, -5")).toBe("Negatives are not allowed:  -4, -5");
});

it("Numbers bigger then 1000 are ignored", () => {
	expect(add("1001, 2")).toBe(2);
});

