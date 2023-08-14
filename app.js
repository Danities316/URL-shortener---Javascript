import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import {nanoid} from "nanoid";
import urlExist from "url-exist";
import URL from "./models/urlModel.js";
import validateURL from "./middleware/validateURL.js";
import cors from "cors";

const _dirname = path.resolve();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7777;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//This help us load our basic html/css/javascript static files in the public folder.
app.use(express.static(_dirname + "/public"));

//routes
app.get("/", (req, res) => {
  res.sendfile(_dirname + "/public/index");
});

//validateURL check if the inputed string is a URL(it validates if a string is a URL)
app.post("/link", validateURL, async (req, res) => {
  let {url} = req.body;
  // console.log(url)
  //generate a unique id to identify the URL
  let id = nanoid(8);

  let newURL = new URL({url, id});

  try {
    await newURL.save();
  } catch (error) {
    res.send("An error was encountred! Please try again.");
  }

  res.json({
    message: `${req.headers.host}/${newURL.id}`,
    type: "success",
  });
});

// When you paste the link on the browser that is when this logic runs
app.get("/:id", async (req, res) => {
  const id = req.params.id;

  const originalLink = await URL.findOne({id});

  if (!originalLink) {
    return res.sendFile(_dirname + "/public/404.html");
  }
  res.redirect(originalLink.url);
});

// connecting to the db

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database coneected successfully...");
});

app.listen(PORT, async () => {
  try {
    console.log(`App is listening at port ${PORT}`);
  } catch (error) {
    if (error) {
      console.error(error);
    }
  }
});

// https://urlshortener-6fvo.onrender.com
