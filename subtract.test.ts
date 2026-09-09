declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("subtracts zero", () => {
    expect(window.subtract(5, 0)).toBe(5);
  });

  it("subtracts negative numbers", () => {
    expect(window.subtract(-5, -3)).toBe(-2);
  });
});

export {};