"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("openai");
require("dotenv/config");
const prompts_1 = require("./prompts");
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
class conversation {
    static getMessages(target, messageBuffer, emotion) {
        try {
            const tPrompt = (0, prompts_1.targetPrompt)(target);
            const ePrompt = (0, prompts_1.emotionPrompt)(emotion);
            if (tPrompt === "" || ePrompt === "") {
                throw new Error(`Bad input ${target}`);
            }
            let baseMessages = [
                {
                    role: "system",
                    content: tPrompt
                },
                {
                    role: "user",
                    content: ePrompt
                },
            ];
            let messages = [...baseMessages, ...messageBuffer];
            console.log(messages);
            return messages;
        }
        catch (error) {
            throw error;
        }
    }
    constructor(target, messageBuffer, emotion) {
        this.target = target;
        this.messageBuffer = messageBuffer;
        this.emotion = emotion;
    }
    send() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: conversation.getMessages(this.target, this.messageBuffer, this.emotion),
                    temperature: 1,
                    max_tokens: 44,
                    top_p: 0,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                });
                return (_a = response.data.choices[0].message) === null || _a === void 0 ? void 0 : _a.content;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = conversation;
