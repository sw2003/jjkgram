import React, { useContext } from 'react';
import MainContext from '../mainContext';
import Indicator from './message_indicator';
export default function Reply({text}: {text: string}) {
    const data = useContext(MainContext); 
    
    const style = {
        maxWidth: '75vw' 
    }

    const bool = text !== ''; 
    
    return (
        <div className='w-full flex justify-between'>
            <div className='flex gap-2 ml-2'>
                <div className='flex flex-col justify-end'>
                    <img src={require(`../images/${data.character.imageName}`)} className='w-8 h-8 rounded-full object-cover' alt="" />
                </div>
                <div className={`mr-2 px-4 py-1 bg-slate-200 text-black rounded-2xl ${bool && 'flex items-center justify-center'}`} style={style}>{bool ? text : <Indicator></Indicator>}</div>
            </div>
            <div></div>
        </div>
    )
}