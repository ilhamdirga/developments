import http from "http";

const server = http.createServer((request, response) => {

    request.addListener("data", (data) => {
        if(request.method === "POST"){
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        }{
            response.write("Hello World");
            response.end();
        }    
    })
    
    
})

server.listen(3000);