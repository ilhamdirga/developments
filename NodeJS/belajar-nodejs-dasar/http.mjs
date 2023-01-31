import https from "https";

const endpoint = "https://eotjo8aum60e5o4.m.pipedream.net";
const request = https.request(endpoint, {
    method : "POST",
    headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, function(response){
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
})

const body = JSON.stringify({
    firstName: "Ilham", 
    lastName: "Dirgantara"
});

request.write(body);
request.end();