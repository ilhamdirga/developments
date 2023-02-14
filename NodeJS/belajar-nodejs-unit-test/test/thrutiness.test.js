test("Thrutiness Matcher", () => {

    let value = null;
    expect(value).toBeNull();
    expect(value).toBeFalsy();
    expect(value).toBeDefined();

    value = undefined;
    expect(value).toBeUndefined();
    expect(value).toBeFalsy();

    value = "ilham";
    expect(value).toBeTruthy();
    expect(value).toBeDefined();
    expect(value).toBe("ilham");

})  