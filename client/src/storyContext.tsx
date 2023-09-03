import React, { createContext, useState } from 'react'


export interface storyInterface {
    profilePicture: string,
    username: string,
    imageArray: string[], 
    clicked: boolean 
}

const storiesArray: storyInterface[] = [
    {
        profilePicture: 'gojo.png',
        username: 'Satoru Gojo',
        imageArray: [
            'gojo_story2.png',
            'gojo_story3.png'
        ],
        clicked: false
    }, 
    {
        profilePicture: 'geto.png', 
        username: 'Suguru Geto', 
        imageArray: [
            'geto_story1.png'
        ],
        clicked: false
    }
]

export type StoryContextType = {
    stories: storyInterface[],
    setStories: React.Dispatch<React.SetStateAction<storyInterface[]>>
}

const StoryContext = createContext<StoryContextType>({stories: storiesArray, setStories: ()=>{}}) 

export function StoryProvider(props: {children: any}){
    const [stories, setStories] = useState(storiesArray); 

    return (
        <StoryContext.Provider value={{stories, setStories}}>
            {props.children}
        </StoryContext.Provider>
    )
}

export default StoryContext; 