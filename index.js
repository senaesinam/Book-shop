const express = require('express')
const app = express()
const port = 4000
const indexRouter = require('./routes/index.router')
const usersRouter =require("./routes/users.routes")

app.use("/", indexRouter)
app.use('/users/', usersRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}! 🚀`))