import "reflect-metadata";
import express from 'express'


const port = process.env.PORT || 3000;

const app = express();


app.get("/", (req:express.Request, res: express.Response) => {
    
    res.send("Tracker Api v1");
    res.end();
})


app.listen(port, () => {

    console.log("server is running...");
    
})