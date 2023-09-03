import conversation from "../src/services/conversation";

test('ignore', ()=>{
    
})

/*
describe('conversations.send()', ()=>{
    test('works on correct input', async ()=>{
        try {
            const convo = new conversation("Tanjiro", "Hello tanjiro", "Happy"); 
            const message = await convo.send(); 
            expect(message).toBeDefined(); 
        } catch (error) {
            console.log(error); 
        }
    })

    test('throws exception on bad inputs', async ()=>{
        const convo = new conversation("Badjiro", "Hello tanjiro", "Happy"); 

        await expect(convo.send()).rejects.toThrow(); 
    })

    test('conversation(ok, ok, bad)', async ()=>{
        const convo = new conversation("Tanjiro", "Hello Tanjiro", "Not a emotion");

        await expect(convo.send()).rejects.toThrow(); 
    })
})
*/

/*

describe('getMessages()', ()=>{
    test('return a array of object', ()=>{
        const messages = conversation.getMessages("Tanjiro", 'Hi this is a message', "Happy"); 
        for (let i = 0; i<messages.length; i++){
            expect(messages[i]).toHaveProperty("role");
            expect(messages[i]).toHaveProperty("content"); 
        }
    })
    test('throw error on bad input', ()=>{
        expect(()=>{
            conversation.getMessages("Bunjuro", "Hi this is a message", "Happy");
        }).toThrow()
    })
})

import { targetPrompt } from "../src/services/prompts";
import { emotionPrompt } from "../src/services/prompts"; 

describe('generate prompts', ()=>{
    test('targetPrompt(Tanjiro)', ()=>{
        const prompt = targetPrompt('Tanjiro'); 
        expect(typeof prompt).toBe('string'); 
        expect(prompt).toBe('Tanjiro basic desc change later');
    })
    test('targetPrompt(Nezuko)', ()=>{
        const prompt = targetPrompt('Nezuko'); 
        expect(typeof prompt).toBe('string'); 
        expect(prompt).toBe('Nezuko basic desc change later'); 
    })
    test('emotionPrompt(happy)', ()=>{
        const prompt = emotionPrompt('Happy')
        expect(prompt).toBe('You are happy'); 
    })
})

*/
