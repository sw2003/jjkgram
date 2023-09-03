import * as React from 'react';

import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { IoChevronDown } from "react-icons/io5"

export default function MainTopbar() {
    return (
        <>
            <div className='flex justify-between w-[90%] mx-auto'>
                <div className='h-14 flex justify-center items-center'>
                    <Link to='/home'>
                        <MdOutlineKeyboardArrowLeft size={40} className=' inline-block'></MdOutlineKeyboardArrowLeft>
                    </Link>
                    <h1 className='inline-block font-bold text-xl mt-1'>Username</h1>
                    <IoChevronDown className='ml-1 mt-1' size={15}></IoChevronDown>
                </div>
                <div className='h-14 flex justify-center items-center'>
                    <FiEdit size={25}></FiEdit>
                </div>
            </div>
        </>
    )
}