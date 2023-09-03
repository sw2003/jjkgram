import React, { useState } from 'react';
import gojo from "../images/gojo.png"
import { storyInterface } from '../storyContext';


export default function Story(props: {storyData: storyInterface, displayStory: (arr: string[], storyInfo: {username: string, profilePicture: string})=>void}) {
    const [hasBeenClicked, setHasBeenClicked] = useState(false)

    const data = props.storyData; 
    

    function onClick(){
        props.displayStory(data.imageArray, {username: data.username, profilePicture: data.profilePicture}); 
        if (hasBeenClicked === false){
            setHasBeenClicked(true); 
        }
    }

    return (
        <div onClick={onClick}>
            <div className={`w-[86px] h-[86px] rounded-full bg-slate-50 flex justify-center items-center ${!hasBeenClicked ? 'bg-gradient-to-r from-purple-500 to-pink-500': 'bg-slate-300'}`}>
                <img src={`${require(`../images/${data.profilePicture}`)}`} alt="" className='w-20 h-20 object-cover rounded-full border' />
            </div>
            <div className='w-full h-2'></div>
            <div className='text-sm text-center text-slate-700'>{data.username}</div>
        </div>
    )
}