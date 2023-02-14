import {sayCallMe} from "../src/async.js";

test("async matchers", async () => {
    const result = await sayCallMe("ilham");
    expect(result).toBe("Hello ilham");
});

test("async test matchers", async () => {
    await expect(sayCallMe("ilham")).resolves.toBe("Hello ilham");
    await expect(sayCallMe()).rejects.toBe("name is empty");
})