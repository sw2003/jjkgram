import * as React from 'react';
import { CiSearch } from 'react-icons/ci'

export default function SearchBar() {
    return (
        <div className='w-[90%] h-11 mx-auto rounded-xl bg-gray-100 flex items-center'>
            <CiSearch className='ml-1 text-zinc-500'></CiSearch>
            <span className='ml-1 text-zinc-500'>Search</span>
        </div>
    )
}