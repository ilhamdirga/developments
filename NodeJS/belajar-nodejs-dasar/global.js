function sayHello(){
    console.info("Hello Global");
}

function sayHai(){
    console.info("Hai global");
}

function sayDate(){
    const date = new Date().toString();
    console.info(getHours(date));
}

setTimeout(sayHello, 2000);
setTimeout(sayHai,1000);
setTimeout(sayDate, 3000);
