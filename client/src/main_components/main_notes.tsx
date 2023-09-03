import * as React from 'react';
import profile from '../images/profile.jpeg'
import { IoMdAdd } from "react-icons/io"


export default function Notes() {
    return (
        <div className='relative w-screen h-36'>

            <div className='absolute w-[95vw] ml-4 bottom-0 h-28'>
                <div className='w-20 h-20 text-gray-500 inline-block mr-8'>
                    <img src={profile} alt="" className='w-full h-full' />
                    <div className=' shadow	 absolute -top-5 ml-2 bg-white rounded-full h-9 w-9 flex justify-center items-center '>
                        <IoMdAdd></IoMdAdd>
                    </div>
                    <div className='w-full text-center text-sm'>Your note</div>
                </div>
            </div>
        </div>
    )
}
