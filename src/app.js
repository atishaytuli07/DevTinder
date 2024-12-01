const express = require('express');

const app = express();

app.use((req, res) => {
    res.send(404);
})

app.use("/home", (req, res) => {
    res.send("4074");
})

app.listen(7777, ()=> {
    console.log("listening");
    
})