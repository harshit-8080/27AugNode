const express = require("express");

const app = express();

app.use(express.json()); //middleware


app.get("/", (req, res)=>{


    console.log(req.body);

    res.send({
        "msg": "response from node project"
    })

})

app.get("/home", (req, res) => {

    res.send({
        "msg":"this is home page"
    })

})

app.get("/contact", (req, res) =>{

    res.send({
        "msg1": "this is contact page1",
        "msg2": "this is contact page2",
        "msg3": "this is contact page3"
    })
})

app.post("/profile", (req, res) => {


    //console.log(req.body);
    const person = {
        "name" : req.body.firstName,
        "city" : req.body.city,
        "school":req.body.school,
        "college":req.body.college
    }
    res.send(person);


})

app.post("/city/:cityName", (req, res) => {


    //console.log(req.body);
    const city = {
        "city" : req.params.cityName
    }
    res.send(city);


})

app.listen(3000, ()=>{
    console.log("server started at 3000 port");
})

