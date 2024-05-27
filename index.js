import express from "express"
import bodyParser from "body-parser"
import { name } from "ejs"

const port=3000
const app =express()
const names=["iconapop","Thunderbolt","maroon5"]

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/submit',(req,res)=>{
    let randno= Math.floor(Math.random()*names.length)
    res.render('index.ejs',{name:names[randno]})
})

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
