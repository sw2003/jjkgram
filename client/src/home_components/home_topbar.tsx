import * as React from 'react';
import { Link } from 'react-router-dom' 
import { AiOutlineDown, AiOutlineHeart } from 'react-icons/ai'
import { LiaFacebookMessenger } from 'react-icons/lia'

export default function Topbar() {
    return (
        <div className='sticky flex justify-between w-full'>
            <div className='flex items-center gap-1 ml-2'>
                <div className='font-bold text-2xl ml-2'>Jujutsugram</div>
                <AiOutlineDown className=' mt-1'></AiOutlineDown>
            </div>
            <div className='flex items-center justify-around w-1/4 mr-2'>
                <AiOutlineHeart size={25}></AiOutlineHeart>
                <Link to='/'>
                    <LiaFacebookMessenger size={25}></LiaFacebookMessenger>
                </Link>
            </div>
        </div>
    )
}