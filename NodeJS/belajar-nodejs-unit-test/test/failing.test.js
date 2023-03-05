import { sayHello } from "../src/sayHello"

test.failing("Test try to expect the error", () => {
    expect(sayHello("Ilham")).toBe("Hello Ilham");
}) 
test.failing("Test try to expect the error 2", () => {
    sayHello();
}) 
test("Test try to expect the error 3", () => {
    expect(() => sayHello(null)).toThrow();
}) 