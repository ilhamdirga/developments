test("numbers matchers", () => {
    const number = 2 + 2;

    expect(number).toBe(4);
    expect(number).toBeGreaterThan(3);
    expect(number).toBeLessThan(5);
    expect(number).toBeGreaterThanOrEqual(3.5);
    expect(number).toBeLessThanOrEqual(4.5);
})