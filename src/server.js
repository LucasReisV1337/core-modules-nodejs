import http from "node:http"


http.get("/", (req, res) => { 
    res.send("Home")
})

http.get("/teste", (req, res) => { 
    res.send("teste")
})



http.listen(1337, () => { console.log("server is running")})