const company = "Dirgantara Corporation";

function sum(a, b){
    return a+b;
}

class Company {
    constructor(company, a, b){
        this.company = company;
        this.a = a;
        this.b = b;

        console.info(`Company : ${this.company}`);
        console.info(sum(this.a, this.b));
    }

}

export {company, Company};