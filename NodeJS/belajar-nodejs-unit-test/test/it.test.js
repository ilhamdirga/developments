import { sumAll } from "../src/sum"

it("Should sum[(10,10,10,10)] be 40", () => {
    expect(sumAll([10,10,10,10])).toBe(40);
})