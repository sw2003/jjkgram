import React, { useEffect, useState } from 'react';
import Sent from './message_sent';
import Reply from './message_reply';

interface propType {
    messages: {type: string, text: string, id: number}[]
    scrollable: boolean
}

export default function Container(props: propType) {
    const updatedList = props.messages.map((message)=>{
        if (message.type === 'sender'){
            return <Sent key={message.id} text={message.text}></Sent>
        }
        else{ 
            return <Reply key={message.id} text={message.text}></Reply>
        }
    })

    const [style, setStyle] = useState({}) 

    useEffect(()=>{
        const Topbar = document.getElementById("Topbar"); 
        const Textbar = document.getElementById("Searchbar"); 

        console.log(window.innerWidth);


        if (window.innerWidth <= 420){
            if (Topbar && Textbar){
                const topbarBottom = Topbar?.getBoundingClientRect().bottom;
                const bottombarTop = Textbar?.getBoundingClientRect().top; 
    
                setStyle({height: `${bottombarTop - topbarBottom}px`})
            }
        }
    }, [])

    return (
        <div className={`fixed w-full bg-white bottom-[48px] flex items-center gap-1 overflow-scroll sm:absolute h-[500px]`} style={style}>
            <div className={`w-full h-[95%] flex flex-col-reverse gap-4 overflow-scroll ${!props.scrollable && 'touch-none'}`}>
                {
                    updatedList
                }
            </div>
        </div>
    )
}

/*
<div className={`fixed w-full bg-white bottom-[48px] flex flex-col-reverse gap-1 min-safe-container overflow-scroll ${!props.scrollable && 'touch-none'}`} id='Content'>
    {
        updatedList
    }
</div>
*/