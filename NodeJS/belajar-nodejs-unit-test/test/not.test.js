test("not matchers", () => {
    const name = "Ilham Dirgantara";
    expect(name).not.toBe("Dirgan");
    expect(name).not.toMatch(/oke/);
}) 