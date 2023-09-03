import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai" 
import 'dotenv/config'
import {emotionPrompt, targetPrompt} from "./prompts";



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


export default class conversation {
    static getMessages(target: string, messageBuffer: ChatCompletionRequestMessage[], emotion: string){
        try {
            const tPrompt: string = targetPrompt(target); 
            const ePrompt: string = emotionPrompt(emotion); 
            if (tPrompt === "" || ePrompt === ""){
                throw new Error(`Bad input ${target}`);
            }

            let baseMessages: ChatCompletionRequestMessage[] = [
                {
                    role: "system",
                    content: tPrompt
                }, 
                {
                    role: "user",
                    content: ePrompt
                },
            ]

            let messages: ChatCompletionRequestMessage[] = [...baseMessages, ...messageBuffer]


            console.log(messages); 


            return messages; 
        } catch (error) {
            throw error;    
        }
    }

    constructor(
        private target: string, 
        private messageBuffer: ChatCompletionRequestMessage[],
        private emotion: string 
    )
    {}


    public async send(){
        try {
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: conversation.getMessages(this.target, this.messageBuffer, this.emotion),
                temperature: 1,
                max_tokens: 44,
                top_p: 0,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
    
            return response.data.choices[0].message?.content; 
        } catch (error) {
            throw error;    
        }
    }
}


