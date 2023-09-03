import React, { useContext } from 'react';
import StoryContext from '../storyContext'
import Story from './home_story';
import gojo from '../images/gojo.png'

export interface storyPropType {
    displayStory: (arr: string[], storyInfo: {username: string, profilePicture: string})=> void
}

export default function StoryContainer(props: storyPropType) {
    const data = useContext(StoryContext); 

    
    return (
        <div className='w-full'>
            <div className='w-[95%] h-32 flex items-center mx-auto overflow-scroll gap-4 story-container'>
                {
                    data.stories.map((story)=>{
                        return <Story key={story.username} storyData={story} displayStory={props.displayStory}></Story>
                    })
                }
            </div>
        </div>
    )
}