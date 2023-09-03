import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineVideoCamera } from "react-icons/ai"
import MainContext from '../mainContext'

interface propType {
    offset: number; 
}

export default function Topbar(props: propType) {
    const data = useContext(MainContext); 
    
    const style = {
        marginTop: props.offset 
    }


    return (
        <div className='sticky flex justify-between w-full h-14 bg-white border-b-2 border-neutral-300 touch-none z-20' id='Topbar' style={style}>
            <div className='flex items-center'>
                <Link to={'/'}>
                    <MdOutlineKeyboardArrowLeft size={45} className='inline-block'></MdOutlineKeyboardArrowLeft>
                </Link>
                <div className='inline-block h-[45px] w-[45px] rounded-full'>
                    <img src={require(`../images/${data.character.imageName}`)} alt="" className='object-cover w-full h-full rounded-full' />
                </div>
                <div className='ml-2'>
                    <h2 className=' font-bold'>{data.character.name}</h2>
                    <p className='text-sm'>Active now</p>
                </div>
            </div>
            <div className='flex items-center mr-4 gap-6'>
                <BsTelephone size={25}></BsTelephone>
                <AiOutlineVideoCamera size={25}></AiOutlineVideoCamera>
            </div>
        </div>
    )
}