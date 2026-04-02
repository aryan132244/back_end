const mongoose = require("mongoose");
const express = require("express");
const route = require("./Routes/userrouts")

const app = express();
app.use( express.json())

const port = 5000;


const mogourl = "mongodb+srv://aryan:CxoZGDzd6NT1hVkZ@cluster0.i42hgeb.mongodb.net/?appName=Cluster0"

mongoose.connect(mogourl)

.then(() => console.log(` mongo db connect`))
.catch((e) => console.log(` mongo db error${e}`))

app.use("/" ,route)

app.listen(port, () => {console.log(`server is runniung on port ${port}`);})


