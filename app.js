//Outputing html file through express
const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware in this file
app.use(express.static('./public'))

// app.get('/', (req, res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all("*", (req, res)=> {
    res.status(404).send('<h1>resource not found</h1>')
})


app.listen(5000, ()=>{
    console.log("server is listening to port 5000....")
})