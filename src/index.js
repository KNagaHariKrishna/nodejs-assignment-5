var http = require("http");
const { type } = require("os");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url=req.url
//code starts
    if(url=="/welcome"){
        res.writeHead(200,{
            "Content-type":"text/plain",
            "keep-Alive":100
        })
        res.write("Welcome to Dominos!")
        res.end()
    }
    else if(url=="/contact"){
        res.writeHead(200,{
            "Content-type":"application/json",
            "keep-alive":100
        })
        res.write(
            JSON.stringify({
                phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com'           
            })
        )
        res.end()
    }
    else{
        res.writeHead(404,{
            "Content-type":"text/html",
            "keep-alive":100
        })
        res.end("<h1> PAGE IS NOT FOUND </h1>")
    }
}
//code end
httpServer.listen(8081,()=>console.log("Srver Srarted"))

module.exports = httpServer;