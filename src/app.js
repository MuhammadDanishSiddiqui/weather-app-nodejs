const path =  require("path")
const foreCast = require("./utils")
const hbs = require('hbs')
const express = require("express")
const app = express()

const publicDirectoryPath =  path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))



app.get('/',(req,res)=>{
    res.render("weather",{
        title:"Weather",
        name:"Danish"
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About",
        name:"Danish"
    })
})

app.get("/weather",(req,res)=>{
    if(!req.query.location)
    {
        return res.send({error:"Please provide Location."})
    }
 foreCast(req.query.location,(error,data)=>{
     if(error)
     {
         res.send({error})
     }
     else{
        res.send(data)
     }
 })
})

app.get("*",(req,res)=>{
    res.render("error",{
        title:"404",
        name:"Danish"
    })
})

app.listen(3000,()=>{
    console.log("listening to port 3000")
})