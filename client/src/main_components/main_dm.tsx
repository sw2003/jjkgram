import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import MainContext from '../mainContext';



export default function Dm(props: {name: string, imageName: string}) {
  const data = useContext(MainContext) 

  function onClick(){
    data.setCharacter({name: props.name, imageName: props.imageName}); 
  }

  return (
    <Link to={'/message'}>
      <div className='flex items-center h-16 ml-4 mb-1' onClick={onClick}>
        <div className='inline-block w-14 h-14 mr-2'>
          <img src={require(`../images/${props.imageName}`)} className='object-cover w-full h-full rounded-full' alt="" />
        </div>

        <div className='inline-block align-top items-center'>
          <div className='text-sm'>{props.name}</div>
          <div className='text-sm text-gray-400'>Active 25m ago</div>
        </div>

      </div>
    </Link>


  )
}