import express from "express"
const router = express.Router();
import character from "../controllers/character"

router.post('character', character)