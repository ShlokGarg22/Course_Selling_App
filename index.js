const express = require('express');
const { userRouteR } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const app = express();


app.use("/user",userRouteR)
app.use("/course",courseRouter)



app.listen(5000)