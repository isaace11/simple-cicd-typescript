declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  it("returns zero when multiplying by zero", () => {
    expect(window.multiply(7, 0)).toBe(0);
  });

  it("multiplies negative numbers", () => {
    expect(window.multiply(-4, 3)).toBe(-12);
  });
});

export {};