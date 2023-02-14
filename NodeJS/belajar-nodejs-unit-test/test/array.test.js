test("array matchers", () => {
    const names = ["ilham", "dirgantara", "lp"];
    expect(names).toEqual(["ilham", "dirgantara", "lp"]);
    expect(names).toContain("ilham");
}) 

test("array matchers 2", () => {
    const person = [
        {
            name : "ilham"
        }, 
        {
            id :"123"
        }
    ];
    expect(person).toContainEqual({name:"ilham"});
})