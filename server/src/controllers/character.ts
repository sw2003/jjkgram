import express, { Request, Response } from "express"; 
import conversation from "../services/conversation";
import { ChatCompletionRequestMessage } from "openai"

interface bodyInterface {
    messageBuffer: ChatCompletionRequestMessage[], 
    emotion: string, 
    target: string
}


export default async function character(req: Request, res: Response){

    console.log(req.body);

    const body: bodyInterface = req.body; 
    const messageBuffer = body.messageBuffer;
    const emotion = body.emotion;
    const target = body.target; 

    try {
        const convo = new conversation(target, messageBuffer, emotion); 
        const response = await convo.send(); 
        console.log(response);
        res.status(200).json({"message": response}); 
    } catch (error) {
        console.log(error);
        res.status(400).json({"error message": error});
    }
    
}