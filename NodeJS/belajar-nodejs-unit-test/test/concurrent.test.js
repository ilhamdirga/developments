import { sayCallMe } from "../src/async"

test.concurrent("Concurrent test 1", async () => {
    await expect(sayCallMe("Ilham")).resolves.toBe("Hello Ilham");
})
test.concurrent("Concurrent test 2", async () => {
    await expect(sayCallMe("Ilham")).resolves.toBe("Hello Ilham");
})
test.concurrent("Concurrent test 3", async () => {
    await expect(sayCallMe("Ilham")).resolves.toBe("Hello Ilham");
})