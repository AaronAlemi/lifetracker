const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
// const authRoutes = require('./routes/auth')

const { NotFoundError } = require("./utils/errors")

const app = express()

// enables cross-origin resource sharing for all origins
app.use(cors())
//parse incoming request bodies with JSON payload
app.use(express.json())
//tag request info
app.use(morgan("tiny"))

// app.use("/auth", authRoutes) **USE LATER**

app.get("/", (req, res) => {
    res.status(200).send({ "ping": "pong" })

})

// 404 Not Found Middleware
app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message
    return res.status(status).json({
        error: { message, status}
    })
})


module.exports = app 