const express = require("express")
const cors = require("cors")
const app = express()
const register = require("./features/Auth/routes/register")


app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  const startTime = Date.now()
  const originalSend = res.send
  
  res.send = function(data) {
    const duration = Date.now() - startTime
    console.log(` [API HIT] ${req.method} ${req.path} | Status: ${res.statusCode} | Speed: ${duration}ms`)
    res.send = originalSend
    return res.send(data)
  }
  next()
})

app.use("/api/auth",register)

app.get("/", (req,res) =>{
    res.send("serverd started")
})

module.exports = app
