import mongoose from "mongoose"

const urlSchema = new mongoose.Schema({
    url: {
        required: true,
        type: String,
    },
    id: {
        required: true,
        type: String,

    }
})

// creating a collection of a URL database on MongoDB
const URL = mongoose.model("URL", urlSchema)

export default URL