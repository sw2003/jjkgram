import * as React from 'react';

export default function Midbar() {
    return (
        <div className='w-[95%] mx-auto flex justify-around text-center gap-2'>
            <div className='py-2 bg-sky-100 rounded-xl text-sm font-bold text-sky-500 w-1/3'>Messages</div>
            <div className='py-2 px-5 bg-gray-100 rounded-xl text-sm font-bold w-1/3'>Channels</div>
            <div className='py-2 px-5 bg-gray-100 rounded-xl text-sm font-bold w-1/3'>Requests</div>
        </div>
    )
}