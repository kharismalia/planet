import express from "express";
import { client } from "./db.js";
const app = express();


app.use(express.static("public"));
app.get("/api/risma",(_req,res)=>{
    res.send("Hanafi");
});
app.get("/api/planet",async(_req,res) => {
    const results = await client.query("SELECT * FROM planet");
    res.send(results.rows);
});

app.listen(3000,() => {
    console.log("Server sedang berjalan!");
});
