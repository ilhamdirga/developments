import {callMe, MyException} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("Ilham")).toThrow();
    expect(() => callMe("Ilham")).toThrow(MyException);
    expect(() => callMe("Ilham")).toThrow("Ups exceptions happenss");
    

})