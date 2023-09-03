import express from "express" 
import app from "./app"

const PORT = 3001; 

app.listen(PORT, ()=>{
    console.log("server listening on PORT 3001");
})