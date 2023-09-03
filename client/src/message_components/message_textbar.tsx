import React, { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai'
import { HiOutlineMicrophone } from 'react-icons/hi' 
import { RiImage2Line } from 'react-icons/ri'
import { LuSticker } from 'react-icons/lu' 
import lodash from 'lodash'

interface propType {
    messages: {
        type: string;
        text: string;
        id: number;
    }[]
    sendMessage: (text: string)=> void
}

export default function Textbar(props: propType) {
    const [input, setInput] = useState('')

    function handleFocus(event: React.FocusEvent<HTMLInputElement, Element>){
        event.target.selectionStart = event.target.selectionEnd;
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value); 
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent>){
        e.preventDefault(); 

        if (input !== ''){
            props.sendMessage(input);
            setInput('');
        }
    }

    return (
        <div className='fixed bottom-0 w-full h-12 flex justify-center sm:absolute' id='Searchbar'>
            <div className=' w-full h-10 bg-gray-200 rounded-full flex justify-between items-center'>
                <div className='flex gap-2'>
                    <div className='flex justify-center items-center h-8 w-8  bg-blue-600 rounded-full ml-2 text-white'>
                        <AiFillCamera size={20}></AiFillCamera>
                    </div>
                    <form className='flex items-center' onSubmit={(e)=>{onSubmit(e)}}>
                        <input  type="text" 
                                id='Textbar' 
                                className='bg-transparent text-gray-600 focus:outline-none' 
                                placeholder='Message...' 
                                value={input}
                                onFocus={(e)=>{handleFocus(e)}}
                                onChange={(e)=>{handleInput(e)}}
                        />
                    </form>
                </div>
                {
                    input === '' ? 
                    <div className='flex gap-2 mr-4'>
                        <HiOutlineMicrophone size={23}></HiOutlineMicrophone>
                        <RiImage2Line size={23}></RiImage2Line>
                        <LuSticker size={23}></LuSticker>
                    </div>
                    :
                    <div className='mr-4 text-blue-600 font-bold text-sm' onClick={(e)=>{onSubmit(e)}}>Send</div>
                }

            </div>
        </div>
    )
}