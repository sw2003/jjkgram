import * as React from 'react';


export default function Indicator() {
    return (
        <div className='flex justify-around items-center h-full w-full gap-2'>
            <div className='w-2 h-2 bg-slate-500 rounded-full'></div>
            <div className='w-2 h-2 bg-slate-500 rounded-full'></div>
            <div className='w-2 h-2 bg-slate-500 rounded-full'></div>
        </div>
    )
}