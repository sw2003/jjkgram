import React, { useEffect, useState } from 'react';
import StoryAnimateBar from './home_storyAnimateBar';
import gojo from '../images/gojo.png'
import { BiDotsHorizontalRounded } from 'react-icons/bi' 
import { AiOutlineClose } from 'react-icons/ai'

interface propTypes {
    setShowStory: React.Dispatch<React.SetStateAction<boolean>>
    setGlobalCounter: React.Dispatch<React.SetStateAction<number>>
    showStory: boolean
    storyImages: string[]
    globalCounter: number
    storyInfo: {username: string, profilePicture: string}

}

export default function StoryContent(props: propTypes) {
    const [timers, setTimers] = useState<NodeJS.Timeout[]>([]); 

    function recurseStory(counter: number, length: number) {
        if (counter > length) {
            const timer = setTimeout(() => {
                props.setShowStory(false);
                props.setGlobalCounter(0);
            }, 3000)

            setTimers([...timers, timer]); 

            return;
        }

        const timer = setTimeout(() => {
            const myEvent = new CustomEvent(`animateBar${counter}`);
            document.dispatchEvent(myEvent);
            props.setGlobalCounter(counter - 1);
            counter += 1
            recurseStory(counter, length);
        }, 3000)    
        
        setTimers([...timers, timer]); 
    }

    useEffect(() => {
        if (props.showStory) {

            let counter = 1
            props.setGlobalCounter(counter - 1);
            const myEvent = new CustomEvent(`animateBar${counter}`);
            document.dispatchEvent(myEvent);
            counter += 1;
            recurseStory(counter, props.storyImages.length)

            return ()=>{console.log('initiate cleanup phase')}
        }
    }, [props.showStory, props.storyImages])


    let iterator = 0;
    const animateBarArr = props.storyImages.map((imageName) => {
        iterator++;
        return <StoryAnimateBar key={imageName} iterator={iterator}></StoryAnimateBar>
    })

    function onClick(){
        props.setShowStory(false); 
        props.setGlobalCounter(0); 

        for (let i = 0; i<timers.length; i++){
            clearInterval(timers[i]);
        }

        setTimers([]); 
    }

    return (
        <>
            {
                props.showStory && 
                    <div className='absolute w-full h-full bg-black z-30 story-container touch-none overflow-hidden'>
                        <div className='absolute w-full h-1 flex justify-center top-1 z-50'>
                            <div className='w-[95%] h-full mx-auto flex justify-between gap-1'>
                                {
                                    animateBarArr
                                }
                            </div>
                        </div>
                        <div className='absolute w-full flex justify-between text-white top-3'>
                            <div className='flex items-center gap-2'>
                                <img src={`${require(`../images/${props.storyInfo.profilePicture}`)}`} alt="" className=' w-8 h-8 object-cover rounded-full ml-2'/>
                                <div>{props.storyInfo.username}</div>
                                <div>15h</div>
                            </div>
                            <div className='flex items-center gap-2 mr-2'>
                                <BiDotsHorizontalRounded size={20}></BiDotsHorizontalRounded>
                                <AiOutlineClose size={30} onClick={onClick}></AiOutlineClose>
                            </div>
                        </div>

                        <img src={`${require(`../images/story_images/${props.storyImages[props.globalCounter]}`)}`} alt="" className='aspect-[9/16] object-cover touch-none' />
                    </div>
                
            }</>
    )
}