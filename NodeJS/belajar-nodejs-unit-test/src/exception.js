export class MyException extends Error {

}

export const callMe = (name) => {
    if(name === "Ilham"){
        throw new MyException("Ups exceptions happenss");
    }else{
        return "OK";
    }
}