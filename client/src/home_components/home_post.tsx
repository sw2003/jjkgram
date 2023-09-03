import React, { useState, useRef, useEffect } from 'react';
import jjkpost1 from '../images/jjkpost1.jpeg'
import gojo from '../images/gojo.png'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { BiPaperPlane } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { PostInterface } from '../pages/page0';
import { motion, AnimatePresence } from 'framer-motion';
import lodash, { update } from 'lodash' 



export default function Post({ post, /*displayHeart*/ }: { post: PostInterface, /*displayHeart: (mouseX: number, mouseY: number)=>void*/ }) {
    const [likeInfo, setLikeInfo] = useState<{id: number, mouseX: number, mouseY: number} | {real: boolean}>(); 
    const [likeList, setLikeList] = useState<{id: number, mouseX: number, mouseY: number}[]>([]); 
    const [isLiked, setIsLiked] = useState(false); 
    const [rectSpecs, setRefSpecs] = useState<DOMRect>(); 
    const [animationReady, setAnimationReady] = useState(true); 
    const likeRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null);

    const [likeCount, setLikeCount] = useState(post.Likes); 


    let oldClick: number = -1;
    let newClick: number;

    useEffect(()=>{
        if (likeInfo){
            if ('real' in likeInfo){
                if (likeList.length >= 1){
                    let counter = 0; 
                    const updatedLikeList = likeList.filter(()=>{
                        if (counter === 0){
                            counter++;
                            return false; 
                        }
                        else{
                            return true; 
                        }
                    })

                    setLikeList(updatedLikeList); 
                }
            }
            else{

                let data = likeInfo; 
                let id = data.id;
                let mouseX = data.mouseX
                let mouseY = data.mouseY


                setLikeList([...likeList, {id: id, mouseX: mouseX, mouseY: mouseY}]); 
            }
        }
    }, [likeInfo])
    
    function doubleClick(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
        newClick = e.timeStamp;

        if (newClick - oldClick <= 500) {
            //displayHeart(e.clientX, e.clientY)
            var rect = imageRef.current?.getBoundingClientRect();
            if (rect) {
                setRefSpecs(rect); 

                const id = lodash.random(0, 100000); 

                

                console.log(`mouseX: ${e.clientX} mouseY: ${e.clientY - rect.top}`);
                console.log(`Rect left: ${rect.left}`); 

                setLikeInfo({id: id, mouseX: e.clientX - rect.left , mouseY: e.clientY - rect.top}); 

                if (!isLiked){
                    setIsLiked(true); 
                    let newCount = likeCount
                    newCount+=1; 
                    setLikeCount(newCount); 
                }
                
                setTimeout(() => {
                    setLikeInfo({real: true})
                }, 1000)
            
            }
        }
        oldClick = newClick;
    }

    function clickLike(){
        let timer; 
        if (isLiked){
            setIsLiked(false);
            let newCount = likeCount
            newCount-=1; 
            setLikeCount(newCount); 

        }
        else{ 
            setIsLiked(true); 

            let newCount = likeCount
            newCount+=1; 
            setLikeCount(newCount);  
        }
    }

    return (
        <div className='w-full'>
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#F71F1F" offset="0%" />
                    <stop stopColor="#CB14D3" offset="100%" />
                </linearGradient>
            </svg>

            <div className='w-full h-11 border-y'>
                <div className='w-[95%] h-full mx-auto flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <div className='w-6 h-6'>
                            <img src={`${require(`../images/${post.profileImage}`)}`} alt="" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className='text-sm flex items-center'>
                            {post.user}
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <img ref={imageRef} src={`${require(`../images/home_images/${post.imgName}`)}`} alt="" className='object-cover h-full w-full aspect-square' onClick={(e) => { doubleClick(e) }} />
                <AnimatePresence>
                    {
                        rectSpecs && 
                        likeList.map((obj)=>{                            
                            return <motion.div 
                                        key={`${obj.id}`} 
                                        initial={{ scale: 0.5 }} 
                                        animate={{ scale: 1, rotate: [0, 25, -25, 0] }} 
                                        exit={{ scale: 0, x: rectSpecs?.width/2 - obj.mouseX, y: -obj.mouseY }} 
                                        className={`absolute`} 
                                        style={{ top: `${obj.mouseY - 45}px`, 
                                        left: `${obj.mouseX - 50.5}px` }}
                                        transition={{ duration: .25 }}
                                        >
                                            

                                        <AiFillHeart size={120} style={{ fill: "url(#blue-gradient)" }}></AiFillHeart>
                                    </motion.div>   

                            
                        })
                    }
                </AnimatePresence>
            </div>
            <div className='w-full'>
                <div className='w-[95%] mx-auto h-10 flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        { 
                            isLiked ? 
                                <AiFillHeart onClick={clickLike} size={30} className='fill-red-500'></AiFillHeart>
                            : 
                                <AiOutlineHeart onClick={clickLike} size={30}></AiOutlineHeart>
                        }
                        <BsChat size={25}></BsChat>
                        <BiPaperPlane size={25}></BiPaperPlane>
                    </div>
                    <BsBookmark size={20}></BsBookmark>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-[95%] mx-auto text-sm'>{post.LikedBy !== '' ? `Liked by ${post.LikedBy} and ${likeCount} others` : `${likeCount} Likes`}</div>
                <div className='w-[95%] mx-auto text-sm'>{post.description}</div>
                <div className='w-[95%] mx-auto text-sm text-gray-400 mt-2'>{post.comments === 0 ? 'Be the first to comment' : `View all ${post.comments} comments`}</div>
            </div>
            <div className='w-full h-4'></div>
        </div>
    )
}