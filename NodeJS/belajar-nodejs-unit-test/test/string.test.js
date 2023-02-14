test("string Matchers", () => {
    const name = "Ilham Dirgantara LP";
    expect(name).toBe('Ilham Dirgantara LP');
    expect(name).toMatch(/ham/);
}) 