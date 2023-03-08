export const sayCallMe = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(name){
                resolve(`Hello ${name}`);
            }else{
                reject("name is empty");
            }
        },1000)
    })
}

export const getBalance = async (name, from) => {
    const balance = await from();
    return {
        name: name,
        balance: balance
    }
}

