import http from "http"
import fs from "fs"

//Creating a server

const PORT = 3000
console.log('Program Ended')

http.createServer((req, res) => {
          //Send the HTTP header
          //HTTP Status: 200 0k
          //  Content Type:  text/plain
     res.writeHead(200, {'Content-Type': 'text/plain'})
     res.end('<h1>"HELLO Node!!!!!"</h1>\n')
}).listen(PORT)


console.log(`server is running on http://localhost:${PORT}`) 

//create a file called welcome.txt
fs.writeFile("welcome.txt",  "Hello Node", (err, data) => {
    if(err){
        console.log(err.stack);
        return;
    }
    console.log("Successfully created file")
})

//A program that read the text from hello.txt
fs.readFile("hello.txt", (err, data) => {
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString())
})