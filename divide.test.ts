declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("returns zero when zero is divided by a nonzero number", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("divides negative numbers", () => {
    expect(window.divide(-10, 2)).toBe(-5);
  });

  it("throws an error when dividing by zero", () => {
    expect(() => window.divide(10, 0)).toThrow("Cannot divide by zero");
  });
});

export {};
