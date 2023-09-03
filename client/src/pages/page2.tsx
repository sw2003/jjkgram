import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Topbar from '../message_components/message_topbar';
import Textbar from '../message_components/message_textbar';
import Container from '../message_components/message_container';
import lodash from 'lodash'
import MainContext from '../mainContext';

interface msgType  {
    [key: string]: {type: string, text: string, id: number}[]
}

const msg: msgType = {
    "Satoru Gojo": [
  
    ], 
    "Suguru Geto": [
    ]
}

export default function Page2(){
    const data = useContext(MainContext); 
    const navigate = useNavigate(); 

    const [scrollable, setScrollable] = useState(true); 
    const [offset, setOffset] = useState(0); 
    const [messages, setMessages] = useState(msg[data.character.name]); 
    const [messageBuffer, setMessageBuffer] = useState<{role: string, content: string}[]>([]); 
    const [messageBuffer_S, setMessageBufferS] = useState<{role: string, content: string}[]>(messageBuffer);
    const [previousMessage, setPreviousMessage] = useState(''); 
    const [isMobile, setIsMobile] = useState(false); 

    function scroll(){
        let Topbar = document.getElementById('Topbar');

        const newPosition = Topbar?.getBoundingClientRect().top;
        
        if (newPosition && newPosition < -1) {
            let fixPosition = Math.abs(newPosition); 
            setOffset(fixPosition); 
        }
    }

    useEffect(()=>{
        if (window.innerWidth <= 420){
            setIsMobile(true); 
        }
        else{
            setIsMobile(false); 
        }
    }, [])
    
    useEffect(()=>{
        if (data.character.name === ''){
            navigate('/')
        }

        let Textbar = document.getElementById('Textbar'); 

        const debounceOnScroll = lodash.debounce(scroll, 150); 

        function onScroll(){
            debounceOnScroll(); 
        }

        function onFocus(){
            onScroll(); 
            setScrollable(false); 
        }
    
        function onBlur(){
            setOffset(0); 
            setScrollable(true); 
        }

        Textbar?.addEventListener('focus', onFocus); 
        Textbar?.addEventListener('blur', onBlur); 

        return ()=>{
            Textbar?.removeEventListener('focus', onFocus); 
            Textbar?.removeEventListener('blur', onBlur); 
        }
    }, [])


    useEffect(()=>{
        if (messageBuffer.length !== 0){

            const timer = setTimeout(()=>{
                setMessageBufferS(messageBuffer);
            }, 3000)

            return ()=>{clearInterval(timer)}
        }
    }, [messageBuffer, setMessageBuffer])

    useEffect(()=>{
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            'Access-Control-Request-Method': 'POST',
            body: JSON.stringify({
                messageBuffer: messageBuffer_S,
                target: data.character.name  
            })
        }

        if (messageBuffer_S.length !== 0){
            const id = lodash.random(0, 100000); 
            setMessages([{type: 'replier', text: '', id: lodash.random(0, 100000)}, ...messages])

            fetch("https://l2uep2m1a7.execute-api.us-east-1.amazonaws.com/Prod/getChat", requestOptions)  
                .then((res)=>res.json())
                .then((res: {message: string})=>{
                    setMessages([{type: 'replier', text: res.message, id: lodash.random(0, 100000)}, ...messages])
                    setMessageBufferS([]);
                    setMessageBuffer([]);
                    setPreviousMessage(res.message); 
                })
                .catch((error)=>console.log(error))
        }
    }, [messageBuffer_S, setMessageBufferS])

    function sendMessage(text: string){
        setMessages([{type: 'sender', text: text, id: lodash.random(0, 1000000)}, ...messages])

        if (previousMessage !== ''){
            const prevMessageArr = [{role: 'assistant', content: previousMessage}];
            const newMessageArr = [{role: 'user', content: text}]; 

            const combinedArr = [...prevMessageArr, ...newMessageArr]; 

            setMessageBuffer([...messageBuffer, ...combinedArr]); 
        }   
        else{
            setMessageBuffer([...messageBuffer, {role: 'user', content: text}]);
        }
    }

    
    return (   
        <div className={`${!scrollable && 'touch-none'} relative sm:w-[420px] sm:h-[600px]`}>
            {
            data.character.name !== '' && 
            <div className={`relative w-full bg-white ${isMobile ? 'min-safe-h-screen': 'h-[600px]'} ${!scrollable && 'touch-none'}`}>
                <Topbar offset={offset}></Topbar>
                <Container messages={messages} scrollable={scrollable}></Container>
                <Textbar messages={messages} sendMessage={sendMessage}></Textbar>
            </div>
            }
        </div>
    )    
}

