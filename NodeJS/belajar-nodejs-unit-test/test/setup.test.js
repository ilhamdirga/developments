beforeAll(() => {
    console.info("Before All");
})
afterAll(() => {
    console.info("After All")
})

beforeEach(() => {
    console.info("Before Each");
})
afterEach(() => {
    console.info("After Each");
})


test("first test", () => {
    expect(20+20).toBe(40);
    console.info("first test");
})

test("second test", () => {
    expect(20+20).toBe(40);
    console.info("second test")
})