import React, { useEffect, useState } from 'react';

export default function StoryAnimateBar({iterator}: {iterator: number}) {
    const [activateAnimation, setAnimationActivator] = useState(false)

    function triggerAnimate(e: Event){
        setAnimationActivator(true); 
    }

    useEffect(()=>{
        document.addEventListener(`animateBar${iterator}`, triggerAnimate)

        return ()=>{document.removeEventListener(`animateBar${iterator}`, triggerAnimate)}
    }, [])



    return (
        <div className='w-full h-full bg-slate-300'>
            <div className={`h-full w-0 bg-white transition-all duration-[3000ms] ease-linear ${activateAnimation && 'w-full'}`}>

            </div>
        </div>
    )
}

