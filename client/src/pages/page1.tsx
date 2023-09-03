import React from 'react'

import MainTopbar from '../main_components/main_topbar';
import SearchBar from '../main_components/main_searchbar';
import Notes from '../main_components/main_notes';
import Midbar from '../main_components/main_middlebar';
import Dm from '../main_components/main_dm';

import gojo from "../images/gojo.png"
import geto from "../images/geto.png"

const characterList = [
    {
        name: 'Satoru Gojo',
        imageName: 'gojo.png' 
    },
    {
        name: 'Suguru Geto',
        imageName: 'geto.png'
    }
]


export default function Page1() {

    return (
        <div className='relative sm:w-[420px] sm:h-[600px]'>
            <MainTopbar></MainTopbar>
            <SearchBar></SearchBar>
            <Notes></Notes>
            <Midbar></Midbar>

            <div className='flex flex-col mt-2'>
                {
                    characterList.map((data)=>{
                        return <Dm key={data.name} name={data.name} imageName={data.imageName}></Dm>
                    })
                }

            </div>
        </div>
    );
}
