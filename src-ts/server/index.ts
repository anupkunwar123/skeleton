import express, { Request, Response } from 'express'
import { MongoClient } from 'mongodb'

let PORT = process.env.PORT || 3000

let app = express()
let client = new MongoClient(
    "mongodb://localhost:27017/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

(async () => {
    try {
        // console.log("Trying to connect to db");

        // await client.connect(); connect to database

        // console.log("Connected to db");

        // let db = client.db("db_collector");
        
        app.use(express.static("public"))

        app.get('*', (req, res) => {
            res.status(404).send("page not found")
        })


        app.listen(PORT, () => {
            console.log(`Listening to port ${PORT}`)
        })
    }
    catch (error) {
        console.log(error)
    }

})();






