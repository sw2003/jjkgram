import * as React from 'react';



export default function Sent({text}: {text: string}) {
    const style = {
        maxWidth: '75vw' 
    }

    return (
        <div className='w-full flex justify-between'>
            <div></div>
            <div className='mr-2 px-4 py-1 bg-blue-500 text-white rounded-full break-words' style={style}>{text}</div>
        </div>
    )
}
