import { getBalance } from "../src/async";

test("Mock Async Function Test", async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000);

    await expect(getBalance("Ilham", from)).resolves.toEqual({
        name: "Ilham",
        balance: 1000,
    })

    await expect(from.mock.calls.length).toBe(1);

    await expect(from.mock.results[0].value).resolves.toBe(1000)
})

test.failing("Mock Async Function Fails Test", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Error"));

    await getBalance("Ilham", from)
})

test("Mock Async Function Matchers Test", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Ilham", from)).rejects.toBe("Rejected")

})

