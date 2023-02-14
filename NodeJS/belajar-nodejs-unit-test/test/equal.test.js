test("test toBe", () => {
    const name = "ilham";
    const person = `Hello ${name}`;

    expect(person).toBe('Hello ilham');
})

test("test toEqual", () => {
    let person = {
        id : "ilham"
    }

    Object.assign(person, {name : "Ilham"});

    expect(person).toEqual({id:"ilham", name:"Ilham"});
})