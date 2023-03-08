import { calculate } from "../src/sum";

test("Test Mock Matchers", () => {
    const callback = jest.fn();
    
    calculate([10,10,10], callback);
    calculate([10,10,10,10,10], callback);

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(30);
    expect(callback).toHaveBeenCalledWith(50);
})