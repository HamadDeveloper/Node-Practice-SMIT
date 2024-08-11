import {createServer} from "http"


const server = createServer((req,res)=>{
  res.end("Hurrah we have done our first node project")
})

server.listen(3000, ()=>{
  console.log("Server is running on porst 3000 ")
})




























// import {createServer} from 'http'

// const server = createServer ((req,res)=>{
//   res.end("hurrah")

// })

// server.listen(3000, ()=>{
//   console.log("Server 3000 port pa chal raha hai")
// })