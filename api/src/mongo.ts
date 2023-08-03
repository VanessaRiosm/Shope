import mongoose from "mongoose"

const URI = process.env.URI_DB || ""

mongoose.connect(URI)
  .then(() => console.log("database running"))
  .catch((err) => console.log(err))
