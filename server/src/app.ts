import express, { json, urlencoded } from "express"; 
import character from "./controllers/character";
import cors from "cors"
const app = express(); 
app.use(cors()); 
app.use(json());
app.use(urlencoded()); 
app.use('/chat', character);  

export default app; 
