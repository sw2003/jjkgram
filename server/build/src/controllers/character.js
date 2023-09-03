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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conversation_1 = __importDefault(require("../services/conversation"));
function character(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const body = req.body;
        const messageBuffer = body.messageBuffer;
        const emotion = body.emotion;
        const target = body.target;
        try {
            const convo = new conversation_1.default(target, messageBuffer, emotion);
            const response = yield convo.send();
            console.log(response);
            res.status(200).json({ "message": response });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ "error message": error });
        }
    });
}
exports.default = character;
