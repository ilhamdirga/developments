const firstName = "Ilham";
const middleName = "Dirgantara Laksana";
const lastName = "Pamungkas";

function person (name){
    console.info(`Hello ${name}`);
};

class Person {
    constructor(name){
        this.name = name;
    }

    sayHi(name){
        console.info(`Hello ${name}, this is ${this.name}`);
    }
};

export {firstName, middleName, lastName, person, Person};