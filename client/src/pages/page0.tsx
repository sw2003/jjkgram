import React, { useState, useEffect, useContext, useRef } from 'react';
import Topbar from '../home_components/home_topbar';
import StoryContainer from '../home_components/home_storyContainer';
import Post from '../home_components/home_post';
import StoryAnimateBar from '../home_components/home_storyAnimateBar';
import StoryContent from '../home_components/home_storyContent';
import { RiLinkedinLine } from 'react-icons/ri';

export interface PostInterface {
    user: string,
    LikedBy: string,
    Likes: number,
    comments: number,
    imgName: string,
    profileImage: string, 
    description: string
}

const PostsArray: PostInterface[] = [
    {
        user: 'sg89',
        LikedBy: 'Sugeto23',
        Likes: 72, 
        comments: 5,
        imgName: 'jjkpost1.jpeg', 
        profileImage: 'gojo.png', 
        description: "sg89 Surrounded by shadows, but I'm the light that cuts through. #UnrivaledJujutsu #GojoSatoru #LimitlessCursedEnergy"
    }, 
    {
        user: 'tfushiguro',
        LikedBy: '', 
        Likes: 2,
        comments: 0,
        imgName: 'homepost2.png',
        profileImage: 'Toji.png',
        description: ''
    }, 
    {
        user: 'rikooooo_amanai',
        LikedBy: 'Sugeto23',
        Likes: 302,
        comments: 23,
        imgName: 'homepost3.png', 
        profileImage: 'riko.png',
        description: 'Leaving with a heavy heart and a treasure trove of memories. 💫🌟 #BestTimeEver #ReluctantGoodbyes'
    }
]


export default function Page0() {
    const [showStory, setShowStory] = useState(false); 
    const [storyImages, setStoryImages] = useState<string[]>([]); 
    const [storyInfo, setStoryInfo] = useState<{username: string, profilePicture: string}>({username: '', profilePicture: ''}); 
    const [globalCounter, setGlobalCounter] = useState(0)

    function displayStory(imagesArray: string[], storyInfo: {username: string, profilePicture: string}){
        setShowStory(true); 
        setStoryImages(imagesArray)
        setStoryInfo(storyInfo);  
    }

    return (
        <div className={`relative sm:w-[420px] sm:h-[600px] ${showStory && 'overflow-hidden'}`}>
            <StoryContent setShowStory={setShowStory}
                          setGlobalCounter={setGlobalCounter} 
                          showStory={showStory} 
                          storyImages={storyImages} 
                          globalCounter={globalCounter}
                          storyInfo={storyInfo} 
            ></StoryContent>
            <div className='h-4 w-full'></div>
            <Topbar></Topbar>
            <div className='h-2 w-full'></div>
            <StoryContainer displayStory={displayStory}></StoryContainer>
            {
                PostsArray.map((post)=>{
                    return <Post key={post.user} post={post} /*displayHeart={displayHeart}*/></Post>
                })
            }
        </div>
    )
}