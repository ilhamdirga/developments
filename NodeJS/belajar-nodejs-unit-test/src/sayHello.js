export const sayHello = (name) => {
    if(name){
        console.info(`Hello ${name}`);
    }else{
        throw new Error("name requireed")
    }
}