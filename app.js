import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { nanoid } from "nanoid";
import urlExist from "url-exist"
import URL from "./models/urlModel.js"
import validateURL from "./middleware/validateURL.js"

const _dirname = path.resolve()

dotenv.config()

const app = express()
const PORT = process.env.PORT || 7777 

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
//This help us load our basic html/css/javascript static files in the public folder. 
app.use(express.static(_dirname + "/public"))



//routes
app.get("/", (req, res) => {
    res.sendfile(_dirname + "/public/index")
});

app.post("/link", validateURL, (req, res) =>{
    let { url } = req.body

    //generate a unique id to identify the URL
    let id = nanoid(8);

    let newURL = new URL({ url, id});

    try {
        newURL.save();
    } catch (error) {
        res.send("An error was encountred! Please try again.")
    }
    res.json({
        message: `http://localhost:${PORT}/${newURL.id}`, 
        type: "success"
    })
})

app.get("/:id", async (req, res) => {
    const id = req.params.id;

    const originalLink = await URL.findOne({ id })

    if(!originalLink){
        return res.sendFile(_dirname + "/public/404.html");

    }
    res.redirect(originalLink.url);
})


app.listen(PORT, async () =>{
    try {
       await mongoose.connect(process.env.MONGO_URI, (err) =>{
            if(err){
                console.log(err);
            }
            console.log("Database coneected successfully...")
        })
        console.log(`App is listening at port ${PORT}` )
    } catch (error) {
        if(error){
            console.error(error)
        }
    }
    
})

